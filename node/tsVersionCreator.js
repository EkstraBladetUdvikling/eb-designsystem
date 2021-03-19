const convertSelector = (selector) => {
  const splitSelector = selector.split('.');
  const noDot = splitSelector[splitSelector.length - 1].split(':')[0];
  const sel = noDot.indexOf('-') !== -1 ? noDot.replace(/--/g, '-').replace(/-/g, ' ') : noDot;
  let hasDependency = null;
  if (noDot.indexOf('--') !== -1) {
    hasDependency = noDot === splitSelector[1] ? noDot.split('--')[0] : splitSelector[1];
  }
  let isExtending = null;
  if (splitSelector.length > 2) {
    isExtending = splitSelector[1];
  }

  const snippetKeyHTMLClass = hasDependency ? hasDependency : isExtending ? isExtending : noDot;
  const snippetKeyHTML = `designsystem ${snippetKeyHTMLClass} HTML`;
  const snippetKey = `designsystem ${sel}`;

  return { hasDependency, isExtending, noDot, snippetKey, snippetKeyHTML };
};

module.exports = (opts = {}) => {
  return {
    postcssPlugin: 'postcss-dark-theme-class',
    Once(root, { result }) {
      const snippetDocument = {};
      const snippetDocumentHTML = {};

      const COMMENTTEMPLATE = 'template:';
      const COMMENTDESCRIPTION = 'description:';
      const DEPENDENCYPREFIX = `This can be extended with:`;
      root.walkRules((rule) => {
        const selectors = rule.selector.split(',');
        selectors.forEach((sel) => {
          const curSel = sel.trim();
          if (curSel.indexOf('.') !== -1 && !curSel.match(/[\s]/g)) {
            if (curSel.match(/[\:\[]/g)) {
              const { snippetKey } = convertSelector(curSel);
              snippetDocument[snippetKey] = snippetDocument[snippetKey] || {};
              const descrip = snippetDocument[snippetKey].description
                ? `${snippetDocument[snippetKey].description}\n Has pseudo styling ${curSel.slice(curSel.indexOf(':'))}`
                : `Has pseudo styling ${curSel.slice(curSel.indexOf(':'))}`;

              snippetDocument[snippetKey].description = descrip;
            } else {
              const { hasDependency, isExtending, noDot, snippetKey, snippetKeyHTML } = convertSelector(curSel);

              snippetDocument[snippetKey] = snippetDocument[snippetKey] || {};
              snippetDocument[snippetKey].prefix = `ds-${noDot}`;
              snippetDocument[snippetKey].body = [noDot];
              let prefix = '';
              if (hasDependency) {
                prefix = `NB! This should only be used with ${hasDependency}\n`;
              }
              if (isExtending) {
                prefix = `${prefix}This extends ${isExtending} with: `;
              }
              const desc = [];
              rule.walkDecls((something) => {
                desc.push(`${something.prop}: ${something.value};\n`);
              });
              const descrip = snippetDocument[snippetKey].description
                ? `${snippetDocument[snippetKey].description}\n ${prefix}{\n ${desc.join('')} }`
                : `${prefix}{\n ${desc.join('')} }`;

              snippetDocument[snippetKey].description = descrip;

              rule.walkComments((comment) => {
                const specialComments = comment.text.split('@');
                const template = specialComments.find(
                  (specialComment) => specialComment.indexOf(COMMENTTEMPLATE) === 0
                );
                if (template) {
                  snippetDocumentHTML[snippetKeyHTML] = snippetDocumentHTML[snippetKeyHTML] || {};

                  snippetDocumentHTML[snippetKeyHTML] = {
                    prefix: `<ds-${noDot} />`,
                    body: [template.split(COMMENTTEMPLATE)[1].trim()],
                  };
                }
                const description = specialComments.find(
                  (specialComment) => specialComment.indexOf(COMMENTDESCRIPTION) === 0
                );
                if (description) {
                  const cleanDescription = description.split(COMMENTDESCRIPTION)[1].trim();
                  if (snippetDocumentHTML[snippetKeyHTML]) {
                    snippetDocumentHTML[snippetKeyHTML].description = `${cleanDescription}`;
                  }
                  snippetDocument[
                    snippetKey
                  ].description = `${cleanDescription}\n ${snippetDocument[snippetKey].description}`;
                }
              });
              if (hasDependency && snippetDocumentHTML[snippetKeyHTML]) {
                const currentDescript = snippetDocumentHTML[snippetKeyHTML].description;

                if (!currentDescript) {
                  snippetDocumentHTML[snippetKeyHTML].description = `.${noDot}`;
                } else if (currentDescript.indexOf(DEPENDENCYPREFIX) !== -1) {
                  snippetDocumentHTML[snippetKeyHTML].description = `${currentDescript}\n .${noDot}`;
                } else {
                  snippetDocumentHTML[
                    snippetKeyHTML
                  ].description = `${currentDescript}\n ${DEPENDENCYPREFIX}\n .${noDot}`;
                }
              }
            }
          }
        });
      });

      result.snippetDocument = snippetDocument;
      result.snippetDocumentHTML = snippetDocumentHTML;
    },
  };
};
module.exports.postcss = true;
