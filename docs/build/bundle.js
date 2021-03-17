(function (l, r) {
  if (l.getElementById('livereloadscript')) return;
  r = l.createElement('script');
  r.async = 1;
  r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1';
  r.id = 'livereloadscript';
  l.getElementsByTagName('head')[0].appendChild(r);
})(window.document);
var app = (function () {
  'use strict';

  function noop() {}
  function assign(tar, src) {
    // @ts-ignore
    for (const k in src) tar[k] = src[k];
    return tar;
  }
  function add_location(element, file, line, column, char) {
    element.__svelte_meta = {
      loc: { file, line, column, char },
    };
  }
  function run(fn) {
    return fn();
  }
  function blank_object() {
    return Object.create(null);
  }
  function run_all(fns) {
    fns.forEach(run);
  }
  function is_function(thing) {
    return typeof thing === 'function';
  }
  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || (a && typeof a === 'object') || typeof a === 'function';
  }
  function is_empty(obj) {
    return Object.keys(obj).length === 0;
  }
  function validate_store(store, name) {
    if (store != null && typeof store.subscribe !== 'function') {
      throw new Error(`'${name}' is not a store with a 'subscribe' method`);
    }
  }
  function subscribe(store, ...callbacks) {
    if (store == null) {
      return noop;
    }
    const unsub = store.subscribe(...callbacks);
    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
  }
  function component_subscribe(component, store, callback) {
    component.$$.on_destroy.push(subscribe(store, callback));
  }
  function create_slot(definition, ctx, $$scope, fn) {
    if (definition) {
      const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
      return definition[0](slot_ctx);
    }
  }
  function get_slot_context(definition, ctx, $$scope, fn) {
    return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
  }
  function get_slot_changes(definition, $$scope, dirty, fn) {
    if (definition[2] && fn) {
      const lets = definition[2](fn(dirty));
      if ($$scope.dirty === undefined) {
        return lets;
      }
      if (typeof lets === 'object') {
        const merged = [];
        const len = Math.max($$scope.dirty.length, lets.length);
        for (let i = 0; i < len; i += 1) {
          merged[i] = $$scope.dirty[i] | lets[i];
        }
        return merged;
      }
      return $$scope.dirty | lets;
    }
    return $$scope.dirty;
  }
  function update_slot(slot, slot_definition, ctx, $$scope, dirty, get_slot_changes_fn, get_slot_context_fn) {
    const slot_changes = get_slot_changes(slot_definition, $$scope, dirty, get_slot_changes_fn);
    if (slot_changes) {
      const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
      slot.p(slot_context, slot_changes);
    }
  }
  function exclude_internal_props(props) {
    const result = {};
    for (const k in props) if (k[0] !== '$') result[k] = props[k];
    return result;
  }
  function compute_slots(slots) {
    const result = {};
    for (const key in slots) {
      result[key] = true;
    }
    return result;
  }
  function action_destroyer(action_result) {
    return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
  }

  function append(target, node) {
    target.appendChild(node);
  }
  function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
  }
  function detach(node) {
    node.parentNode.removeChild(node);
  }
  function destroy_each(iterations, detaching) {
    for (let i = 0; i < iterations.length; i += 1) {
      if (iterations[i]) iterations[i].d(detaching);
    }
  }
  function element(name) {
    return document.createElement(name);
  }
  function svg_element(name) {
    return document.createElementNS('http://www.w3.org/2000/svg', name);
  }
  function text(data) {
    return document.createTextNode(data);
  }
  function space() {
    return text(' ');
  }
  function empty() {
    return text('');
  }
  function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
  }
  function attr(node, attribute, value) {
    if (value == null) node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
  }
  function children(element) {
    return Array.from(element.childNodes);
  }
  function set_style(node, key, value, important) {
    node.style.setProperty(key, value, important ? 'important' : '');
  }
  function custom_event(type, detail) {
    const e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, false, false, detail);
    return e;
  }
  class HtmlTag {
    constructor(anchor = null) {
      this.a = anchor;
      this.e = this.n = null;
    }
    m(html, target, anchor = null) {
      if (!this.e) {
        this.e = element(target.nodeName);
        this.t = target;
        this.h(html);
      }
      this.i(anchor);
    }
    h(html) {
      this.e.innerHTML = html;
      this.n = Array.from(this.e.childNodes);
    }
    i(anchor) {
      for (let i = 0; i < this.n.length; i += 1) {
        insert(this.t, this.n[i], anchor);
      }
    }
    p(html) {
      this.d();
      this.h(html);
      this.i(this.a);
    }
    d() {
      this.n.forEach(detach);
    }
  }

  let current_component;
  function set_current_component(component) {
    current_component = component;
  }
  function get_current_component() {
    if (!current_component) throw new Error('Function called outside component initialization');
    return current_component;
  }
  function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
  }
  function afterUpdate(fn) {
    get_current_component().$$.after_update.push(fn);
  }
  function onDestroy(fn) {
    get_current_component().$$.on_destroy.push(fn);
  }
  function createEventDispatcher() {
    const component = get_current_component();
    return (type, detail) => {
      const callbacks = component.$$.callbacks[type];
      if (callbacks) {
        // TODO are there situations where events could be dispatched
        // in a server (non-DOM) environment?
        const event = custom_event(type, detail);
        callbacks.slice().forEach((fn) => {
          fn.call(component, event);
        });
      }
    };
  }
  function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
  }
  function getContext(key) {
    return get_current_component().$$.context.get(key);
  }
  // TODO figure out if we still want to support
  // shorthand events, or if we want to implement
  // a real bubbling mechanism
  function bubble(component, event) {
    const callbacks = component.$$.callbacks[event.type];
    if (callbacks) {
      callbacks.slice().forEach((fn) => fn(event));
    }
  }

  const dirty_components = [];
  const binding_callbacks = [];
  const render_callbacks = [];
  const flush_callbacks = [];
  const resolved_promise = Promise.resolve();
  let update_scheduled = false;
  function schedule_update() {
    if (!update_scheduled) {
      update_scheduled = true;
      resolved_promise.then(flush);
    }
  }
  function tick() {
    schedule_update();
    return resolved_promise;
  }
  function add_render_callback(fn) {
    render_callbacks.push(fn);
  }
  function add_flush_callback(fn) {
    flush_callbacks.push(fn);
  }
  let flushing = false;
  const seen_callbacks = new Set();
  function flush() {
    if (flushing) return;
    flushing = true;
    do {
      // first, call beforeUpdate functions
      // and update components
      for (let i = 0; i < dirty_components.length; i += 1) {
        const component = dirty_components[i];
        set_current_component(component);
        update(component.$$);
      }
      set_current_component(null);
      dirty_components.length = 0;
      while (binding_callbacks.length) binding_callbacks.pop()();
      // then, once components are updated, call
      // afterUpdate functions. This may cause
      // subsequent updates...
      for (let i = 0; i < render_callbacks.length; i += 1) {
        const callback = render_callbacks[i];
        if (!seen_callbacks.has(callback)) {
          // ...so guard against infinite loops
          seen_callbacks.add(callback);
          callback();
        }
      }
      render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
      flush_callbacks.pop()();
    }
    update_scheduled = false;
    flushing = false;
    seen_callbacks.clear();
  }
  function update($$) {
    if ($$.fragment !== null) {
      $$.update();
      run_all($$.before_update);
      const dirty = $$.dirty;
      $$.dirty = [-1];
      $$.fragment && $$.fragment.p($$.ctx, dirty);
      $$.after_update.forEach(add_render_callback);
    }
  }
  const outroing = new Set();
  let outros;
  function group_outros() {
    outros = {
      r: 0,
      c: [],
      p: outros, // parent group
    };
  }
  function check_outros() {
    if (!outros.r) {
      run_all(outros.c);
    }
    outros = outros.p;
  }
  function transition_in(block, local) {
    if (block && block.i) {
      outroing.delete(block);
      block.i(local);
    }
  }
  function transition_out(block, local, detach, callback) {
    if (block && block.o) {
      if (outroing.has(block)) return;
      outroing.add(block);
      outros.c.push(() => {
        outroing.delete(block);
        if (callback) {
          if (detach) block.d(1);
          callback();
        }
      });
      block.o(local);
    }
  }

  const globals = typeof window !== 'undefined' ? window : typeof globalThis !== 'undefined' ? globalThis : global;

  function get_spread_update(levels, updates) {
    const update = {};
    const to_null_out = {};
    const accounted_for = { $$scope: 1 };
    let i = levels.length;
    while (i--) {
      const o = levels[i];
      const n = updates[i];
      if (n) {
        for (const key in o) {
          if (!(key in n)) to_null_out[key] = 1;
        }
        for (const key in n) {
          if (!accounted_for[key]) {
            update[key] = n[key];
            accounted_for[key] = 1;
          }
        }
        levels[i] = n;
      } else {
        for (const key in o) {
          accounted_for[key] = 1;
        }
      }
    }
    for (const key in to_null_out) {
      if (!(key in update)) update[key] = undefined;
    }
    return update;
  }
  function get_spread_object(spread_props) {
    return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
  }

  function bind(component, name, callback) {
    const index = component.$$.props[name];
    if (index !== undefined) {
      component.$$.bound[index] = callback;
      callback(component.$$.ctx[index]);
    }
  }
  function create_component(block) {
    block && block.c();
  }
  function mount_component(component, target, anchor) {
    const { fragment, on_mount, on_destroy, after_update } = component.$$;
    fragment && fragment.m(target, anchor);
    // onMount happens before the initial afterUpdate
    add_render_callback(() => {
      const new_on_destroy = on_mount.map(run).filter(is_function);
      if (on_destroy) {
        on_destroy.push(...new_on_destroy);
      } else {
        // Edge case - component was destroyed immediately,
        // most likely as a result of a binding initialising
        run_all(new_on_destroy);
      }
      component.$$.on_mount = [];
    });
    after_update.forEach(add_render_callback);
  }
  function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
      run_all($$.on_destroy);
      $$.fragment && $$.fragment.d(detaching);
      // TODO null out other refs, including component.$$ (but need to
      // preserve final state?)
      $$.on_destroy = $$.fragment = null;
      $$.ctx = [];
    }
  }
  function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
      dirty_components.push(component);
      schedule_update();
      component.$$.dirty.fill(0);
    }
    component.$$.dirty[(i / 31) | 0] |= 1 << i % 31;
  }
  function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
    const parent_component = current_component;
    set_current_component(component);
    const $$ = (component.$$ = {
      fragment: null,
      ctx: null,
      // state
      props,
      update: noop,
      not_equal,
      bound: blank_object(),
      // lifecycle
      on_mount: [],
      on_destroy: [],
      before_update: [],
      after_update: [],
      context: new Map(parent_component ? parent_component.$$.context : []),
      // everything else
      callbacks: blank_object(),
      dirty,
      skip_bound: false,
    });
    let ready = false;
    $$.ctx = instance
      ? instance(component, options.props || {}, (i, ret, ...rest) => {
          const value = rest.length ? rest[0] : ret;
          if ($$.ctx && not_equal($$.ctx[i], ($$.ctx[i] = value))) {
            if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
            if (ready) make_dirty(component, i);
          }
          return ret;
        })
      : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    // `false` as a special case of no DOM component
    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
    if (options.target) {
      if (options.hydrate) {
        const nodes = children(options.target);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        $$.fragment && $$.fragment.l(nodes);
        nodes.forEach(detach);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        $$.fragment && $$.fragment.c();
      }
      if (options.intro) transition_in(component.$$.fragment);
      mount_component(component, options.target, options.anchor);
      flush();
    }
    set_current_component(parent_component);
  }
  /**
   * Base class for Svelte components. Used when dev=false.
   */
  class SvelteComponent {
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }
    $on(type, callback) {
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1) callbacks.splice(index, 1);
      };
    }
    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  }

  function dispatch_dev(type, detail) {
    document.dispatchEvent(custom_event(type, Object.assign({ version: '3.32.2' }, detail)));
  }
  function append_dev(target, node) {
    dispatch_dev('SvelteDOMInsert', { target, node });
    append(target, node);
  }
  function insert_dev(target, node, anchor) {
    dispatch_dev('SvelteDOMInsert', { target, node, anchor });
    insert(target, node, anchor);
  }
  function detach_dev(node) {
    dispatch_dev('SvelteDOMRemove', { node });
    detach(node);
  }
  function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
    const modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
    if (has_prevent_default) modifiers.push('preventDefault');
    if (has_stop_propagation) modifiers.push('stopPropagation');
    dispatch_dev('SvelteDOMAddEventListener', { node, event, handler, modifiers });
    const dispose = listen(node, event, handler, options);
    return () => {
      dispatch_dev('SvelteDOMRemoveEventListener', { node, event, handler, modifiers });
      dispose();
    };
  }
  function attr_dev(node, attribute, value) {
    attr(node, attribute, value);
    if (value == null) dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
    else dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
  }
  function prop_dev(node, property, value) {
    node[property] = value;
    dispatch_dev('SvelteDOMSetProperty', { node, property, value });
  }
  function set_data_dev(text, data) {
    data = '' + data;
    if (text.wholeText === data) return;
    dispatch_dev('SvelteDOMSetData', { node: text, data });
    text.data = data;
  }
  function validate_each_argument(arg) {
    if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
      let msg = '{#each} only iterates over array-like objects.';
      if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
        msg += ' You can use a spread to convert this iterable into an array.';
      }
      throw new Error(msg);
    }
  }
  function validate_slots(name, slot, keys) {
    for (const slot_key of Object.keys(slot)) {
      if (!~keys.indexOf(slot_key)) {
        console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
      }
    }
  }
  /**
   * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
   */
  class SvelteComponentDev extends SvelteComponent {
    constructor(options) {
      if (!options || (!options.target && !options.$$inline)) {
        throw new Error("'target' is a required option");
      }
      super();
    }
    $destroy() {
      super.$destroy();
      this.$destroy = () => {
        console.warn('Component was already destroyed'); // eslint-disable-line no-console
      };
    }
    $capture_state() {}
    $inject_state() {}
  }

  /**
   * @typedef {Object} WrappedComponent Object returned by the `wrap` method
   * @property {SvelteComponent} component - Component to load (this is always asynchronous)
   * @property {RoutePrecondition[]} [conditions] - Route pre-conditions to validate
   * @property {Object} [props] - Optional dictionary of static props
   * @property {Object} [userData] - Optional user data dictionary
   * @property {bool} _sveltesparouter - Internal flag; always set to true
   */

  /**
   * @callback AsyncSvelteComponent
   * @returns {Promise<SvelteComponent>} Returns a Promise that resolves with a Svelte component
   */

  /**
   * @callback RoutePrecondition
   * @param {RouteDetail} detail - Route detail object
   * @returns {boolean|Promise<boolean>} If the callback returns a false-y value, it's interpreted as the precondition failed, so it aborts loading the component (and won't process other pre-condition callbacks)
   */

  /**
   * @typedef {Object} WrapOptions Options object for the call to `wrap`
   * @property {SvelteComponent} [component] - Svelte component to load (this is incompatible with `asyncComponent`)
   * @property {AsyncSvelteComponent} [asyncComponent] - Function that returns a Promise that fulfills with a Svelte component (e.g. `{asyncComponent: () => import('Foo.svelte')}`)
   * @property {SvelteComponent} [loadingComponent] - Svelte component to be displayed while the async route is loading (as a placeholder); when unset or false-y, no component is shown while component
   * @property {object} [loadingParams] - Optional dictionary passed to the `loadingComponent` component as params (for an exported prop called `params`)
   * @property {object} [userData] - Optional object that will be passed to events such as `routeLoading`, `routeLoaded`, `conditionsFailed`
   * @property {object} [props] - Optional key-value dictionary of static props that will be passed to the component. The props are expanded with {...props}, so the key in the dictionary becomes the name of the prop.
   * @property {RoutePrecondition[]|RoutePrecondition} [conditions] - Route pre-conditions to add, which will be executed in order
   */

  /**
   * Wraps a component to enable multiple capabilities:
   * 1. Using dynamically-imported component, with (e.g. `{asyncComponent: () => import('Foo.svelte')}`), which also allows bundlers to do code-splitting.
   * 2. Adding route pre-conditions (e.g. `{conditions: [...]}`)
   * 3. Adding static props that are passed to the component
   * 4. Adding custom userData, which is passed to route events (e.g. route loaded events) or to route pre-conditions (e.g. `{userData: {foo: 'bar}}`)
   *
   * @param {WrapOptions} args - Arguments object
   * @returns {WrappedComponent} Wrapped component
   */
  function wrap(args) {
    if (!args) {
      throw Error('Parameter args is required');
    }

    // We need to have one and only one of component and asyncComponent
    // This does a "XNOR"
    if (!args.component == !args.asyncComponent) {
      throw Error('One and only one of component and asyncComponent is required');
    }

    // If the component is not async, wrap it into a function returning a Promise
    if (args.component) {
      args.asyncComponent = () => Promise.resolve(args.component);
    }

    // Parameter asyncComponent and each item of conditions must be functions
    if (typeof args.asyncComponent != 'function') {
      throw Error('Parameter asyncComponent must be a function');
    }
    if (args.conditions) {
      // Ensure it's an array
      if (!Array.isArray(args.conditions)) {
        args.conditions = [args.conditions];
      }
      for (let i = 0; i < args.conditions.length; i++) {
        if (!args.conditions[i] || typeof args.conditions[i] != 'function') {
          throw Error('Invalid parameter conditions[' + i + ']');
        }
      }
    }

    // Check if we have a placeholder component
    if (args.loadingComponent) {
      args.asyncComponent.loading = args.loadingComponent;
      args.asyncComponent.loadingParams = args.loadingParams || undefined;
    }

    // Returns an object that contains all the functions to execute too
    // The _sveltesparouter flag is to confirm the object was created by this router
    const obj = {
      component: args.asyncComponent,
      userData: args.userData,
      conditions: args.conditions && args.conditions.length ? args.conditions : undefined,
      props: args.props && Object.keys(args.props).length ? args.props : {},
      _sveltesparouter: true,
    };

    return obj;
  }

  const subscriber_queue = [];
  /**
   * Creates a `Readable` store that allows reading by subscription.
   * @param value initial value
   * @param {StartStopNotifier}start start and stop notifications for subscriptions
   */
  function readable(value, start) {
    return {
      subscribe: writable(value, start).subscribe,
    };
  }
  /**
   * Create a `Writable` store that allows both updating and reading by subscription.
   * @param {*=}value initial value
   * @param {StartStopNotifier=}start start and stop notifications for subscriptions
   */
  function writable(value, start = noop) {
    let stop;
    const subscribers = [];
    function set(new_value) {
      if (safe_not_equal(value, new_value)) {
        value = new_value;
        if (stop) {
          // store is ready
          const run_queue = !subscriber_queue.length;
          for (let i = 0; i < subscribers.length; i += 1) {
            const s = subscribers[i];
            s[1]();
            subscriber_queue.push(s, value);
          }
          if (run_queue) {
            for (let i = 0; i < subscriber_queue.length; i += 2) {
              subscriber_queue[i][0](subscriber_queue[i + 1]);
            }
            subscriber_queue.length = 0;
          }
        }
      }
    }
    function update(fn) {
      set(fn(value));
    }
    function subscribe(run, invalidate = noop) {
      const subscriber = [run, invalidate];
      subscribers.push(subscriber);
      if (subscribers.length === 1) {
        stop = start(set) || noop;
      }
      run(value);
      return () => {
        const index = subscribers.indexOf(subscriber);
        if (index !== -1) {
          subscribers.splice(index, 1);
        }
        if (subscribers.length === 0) {
          stop();
          stop = null;
        }
      };
    }
    return { set, update, subscribe };
  }
  function derived(stores, fn, initial_value) {
    const single = !Array.isArray(stores);
    const stores_array = single ? [stores] : stores;
    const auto = fn.length < 2;
    return readable(initial_value, (set) => {
      let inited = false;
      const values = [];
      let pending = 0;
      let cleanup = noop;
      const sync = () => {
        if (pending) {
          return;
        }
        cleanup();
        const result = fn(single ? values[0] : values, set);
        if (auto) {
          set(result);
        } else {
          cleanup = is_function(result) ? result : noop;
        }
      };
      const unsubscribers = stores_array.map((store, i) =>
        subscribe(
          store,
          (value) => {
            values[i] = value;
            pending &= ~(1 << i);
            if (inited) {
              sync();
            }
          },
          () => {
            pending |= 1 << i;
          }
        )
      );
      inited = true;
      sync();
      return function stop() {
        run_all(unsubscribers);
        cleanup();
      };
    });
  }

  function regexparam(str, loose) {
    if (str instanceof RegExp) return { keys: false, pattern: str };
    var c,
      o,
      tmp,
      ext,
      keys = [],
      pattern = '',
      arr = str.split('/');
    arr[0] || arr.shift();

    while ((tmp = arr.shift())) {
      c = tmp[0];
      if (c === '*') {
        keys.push('wild');
        pattern += '/(.*)';
      } else if (c === ':') {
        o = tmp.indexOf('?', 1);
        ext = tmp.indexOf('.', 1);
        keys.push(tmp.substring(1, !!~o ? o : !!~ext ? ext : tmp.length));
        pattern += !!~o && !~ext ? '(?:/([^/]+?))?' : '/([^/]+?)';
        if (!!~ext) pattern += (!!~o ? '?' : '') + '\\' + tmp.substring(ext);
      } else {
        pattern += '/' + tmp;
      }
    }

    return {
      keys: keys,
      pattern: new RegExp('^' + pattern + (loose ? '(?=$|/)' : '/?$'), 'i'),
    };
  }

  /* node_modules/svelte-spa-router/Router.svelte generated by Svelte v3.32.2 */

  const { Error: Error_1, Object: Object_1, console: console_1 } = globals;

  // (209:0) {:else}
  function create_else_block(ctx) {
    let switch_instance;
    let switch_instance_anchor;
    let current;
    const switch_instance_spread_levels = [/*props*/ ctx[2]];
    var switch_value = /*component*/ ctx[0];

    function switch_props(ctx) {
      let switch_instance_props = {};

      for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
        switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
      }

      return {
        props: switch_instance_props,
        $$inline: true,
      };
    }

    if (switch_value) {
      switch_instance = new switch_value(switch_props());
      switch_instance.$on('routeEvent', /*routeEvent_handler_1*/ ctx[7]);
    }

    const block = {
      c: function create() {
        if (switch_instance) create_component(switch_instance.$$.fragment);
        switch_instance_anchor = empty();
      },
      m: function mount(target, anchor) {
        if (switch_instance) {
          mount_component(switch_instance, target, anchor);
        }

        insert_dev(target, switch_instance_anchor, anchor);
        current = true;
      },
      p: function update(ctx, dirty) {
        const switch_instance_changes =
          dirty & /*props*/ 4
            ? get_spread_update(switch_instance_spread_levels, [get_spread_object(/*props*/ ctx[2])])
            : {};

        if (switch_value !== (switch_value = /*component*/ ctx[0])) {
          if (switch_instance) {
            group_outros();
            const old_component = switch_instance;

            transition_out(old_component.$$.fragment, 1, 0, () => {
              destroy_component(old_component, 1);
            });

            check_outros();
          }

          if (switch_value) {
            switch_instance = new switch_value(switch_props());
            switch_instance.$on('routeEvent', /*routeEvent_handler_1*/ ctx[7]);
            create_component(switch_instance.$$.fragment);
            transition_in(switch_instance.$$.fragment, 1);
            mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
          } else {
            switch_instance = null;
          }
        } else if (switch_value) {
          switch_instance.$set(switch_instance_changes);
        }
      },
      i: function intro(local) {
        if (current) return;
        if (switch_instance) transition_in(switch_instance.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        if (switch_instance) transition_out(switch_instance.$$.fragment, local);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(switch_instance_anchor);
        if (switch_instance) destroy_component(switch_instance, detaching);
      },
    };

    dispatch_dev('SvelteRegisterBlock', {
      block,
      id: create_else_block.name,
      type: 'else',
      source: '(209:0) {:else}',
      ctx,
    });

    return block;
  }

  // (202:0) {#if componentParams}
  function create_if_block(ctx) {
    let switch_instance;
    let switch_instance_anchor;
    let current;
    const switch_instance_spread_levels = [{ params: /*componentParams*/ ctx[1] }, /*props*/ ctx[2]];
    var switch_value = /*component*/ ctx[0];

    function switch_props(ctx) {
      let switch_instance_props = {};

      for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
        switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
      }

      return {
        props: switch_instance_props,
        $$inline: true,
      };
    }

    if (switch_value) {
      switch_instance = new switch_value(switch_props());
      switch_instance.$on('routeEvent', /*routeEvent_handler*/ ctx[6]);
    }

    const block = {
      c: function create() {
        if (switch_instance) create_component(switch_instance.$$.fragment);
        switch_instance_anchor = empty();
      },
      m: function mount(target, anchor) {
        if (switch_instance) {
          mount_component(switch_instance, target, anchor);
        }

        insert_dev(target, switch_instance_anchor, anchor);
        current = true;
      },
      p: function update(ctx, dirty) {
        const switch_instance_changes =
          dirty & /*componentParams, props*/ 6
            ? get_spread_update(switch_instance_spread_levels, [
                dirty & /*componentParams*/ 2 && { params: /*componentParams*/ ctx[1] },
                dirty & /*props*/ 4 && get_spread_object(/*props*/ ctx[2]),
              ])
            : {};

        if (switch_value !== (switch_value = /*component*/ ctx[0])) {
          if (switch_instance) {
            group_outros();
            const old_component = switch_instance;

            transition_out(old_component.$$.fragment, 1, 0, () => {
              destroy_component(old_component, 1);
            });

            check_outros();
          }

          if (switch_value) {
            switch_instance = new switch_value(switch_props());
            switch_instance.$on('routeEvent', /*routeEvent_handler*/ ctx[6]);
            create_component(switch_instance.$$.fragment);
            transition_in(switch_instance.$$.fragment, 1);
            mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
          } else {
            switch_instance = null;
          }
        } else if (switch_value) {
          switch_instance.$set(switch_instance_changes);
        }
      },
      i: function intro(local) {
        if (current) return;
        if (switch_instance) transition_in(switch_instance.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        if (switch_instance) transition_out(switch_instance.$$.fragment, local);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(switch_instance_anchor);
        if (switch_instance) destroy_component(switch_instance, detaching);
      },
    };

    dispatch_dev('SvelteRegisterBlock', {
      block,
      id: create_if_block.name,
      type: 'if',
      source: '(202:0) {#if componentParams}',
      ctx,
    });

    return block;
  }

  function create_fragment(ctx) {
    let current_block_type_index;
    let if_block;
    let if_block_anchor;
    let current;
    const if_block_creators = [create_if_block, create_else_block];
    const if_blocks = [];

    function select_block_type(ctx, dirty) {
      if (/*componentParams*/ ctx[1]) return 0;
      return 1;
    }

    current_block_type_index = select_block_type(ctx);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    const block = {
      c: function create() {
        if_block.c();
        if_block_anchor = empty();
      },
      l: function claim(nodes) {
        throw new Error_1(
          'options.hydrate only works if the component was compiled with the `hydratable: true` option'
        );
      },
      m: function mount(target, anchor) {
        if_blocks[current_block_type_index].m(target, anchor);
        insert_dev(target, if_block_anchor, anchor);
        current = true;
      },
      p: function update(ctx, [dirty]) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx);

        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx, dirty);
        } else {
          group_outros();

          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });

          check_outros();
          if_block = if_blocks[current_block_type_index];

          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
            if_block.c();
          } else {
            if_block.p(ctx, dirty);
          }

          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(if_block);
        current = true;
      },
      o: function outro(local) {
        transition_out(if_block);
        current = false;
      },
      d: function destroy(detaching) {
        if_blocks[current_block_type_index].d(detaching);
        if (detaching) detach_dev(if_block_anchor);
      },
    };

    dispatch_dev('SvelteRegisterBlock', {
      block,
      id: create_fragment.name,
      type: 'component',
      source: '',
      ctx,
    });

    return block;
  }

  function wrap$1(component, userData, ...conditions) {
    // Use the new wrap method and show a deprecation warning
    // eslint-disable-next-line no-console
    console.warn(
      'Method `wrap` from `svelte-spa-router` is deprecated and will be removed in a future version. Please use `svelte-spa-router/wrap` instead. See http://bit.ly/svelte-spa-router-upgrading'
    );

    return wrap({ component, userData, conditions });
  }

  /**
   * @typedef {Object} Location
   * @property {string} location - Location (page/view), for example `/book`
   * @property {string} [querystring] - Querystring from the hash, as a string not parsed
   */
  /**
   * Returns the current location from the hash.
   *
   * @returns {Location} Location object
   * @private
   */
  function getLocation() {
    const hashPosition = window.location.href.indexOf('#/');

    let location = hashPosition > -1 ? window.location.href.substr(hashPosition + 1) : '/';

    // Check if there's a querystring
    const qsPosition = location.indexOf('?');

    let querystring = '';

    if (qsPosition > -1) {
      querystring = location.substr(qsPosition + 1);
      location = location.substr(0, qsPosition);
    }

    return { location, querystring };
  }

  const loc = readable(
    null, // eslint-disable-next-line prefer-arrow-callback
    function start(set) {
      set(getLocation());

      const update = () => {
        set(getLocation());
      };

      window.addEventListener('hashchange', update, false);

      return function stop() {
        window.removeEventListener('hashchange', update, false);
      };
    }
  );

  const location = derived(loc, ($loc) => $loc.location);
  const querystring = derived(loc, ($loc) => $loc.querystring);

  async function push(location) {
    if (!location || location.length < 1 || (location.charAt(0) != '/' && location.indexOf('#/') !== 0)) {
      throw Error('Invalid parameter location');
    }

    // Execute this code when the current call stack is complete
    await tick();

    // Note: this will include scroll state in history even when restoreScrollState is false
    history.replaceState(
      {
        scrollX: window.scrollX,
        scrollY: window.scrollY,
      },
      undefined,
      undefined
    );

    window.location.hash = (location.charAt(0) == '#' ? '' : '#') + location;
  }

  async function pop() {
    // Execute this code when the current call stack is complete
    await tick();

    window.history.back();
  }

  async function replace(location) {
    if (!location || location.length < 1 || (location.charAt(0) != '/' && location.indexOf('#/') !== 0)) {
      throw Error('Invalid parameter location');
    }

    // Execute this code when the current call stack is complete
    await tick();

    const dest = (location.charAt(0) == '#' ? '' : '#') + location;

    try {
      window.history.replaceState(undefined, undefined, dest);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn(
        "Caught exception while replacing the current page. If you're running this in the Svelte REPL, please note that the `replace` method might not work in this environment."
      );
    }

    // The method above doesn't trigger the hashchange event, so let's do that manually
    window.dispatchEvent(new Event('hashchange'));
  }

  function link(node, hrefVar) {
    // Only apply to <a> tags
    if (!node || !node.tagName || node.tagName.toLowerCase() != 'a') {
      throw Error('Action "link" can only be used with <a> tags');
    }

    updateLink(node, hrefVar || node.getAttribute('href'));

    return {
      update(updated) {
        updateLink(node, updated);
      },
    };
  }

  // Internal function used by the link function
  function updateLink(node, href) {
    // Destination must start with '/'
    if (!href || href.length < 1 || href.charAt(0) != '/') {
      throw Error('Invalid value for "href" attribute: ' + href);
    }

    // Add # to the href attribute
    node.setAttribute('href', '#' + href);

    node.addEventListener('click', scrollstateHistoryHandler);
  }

  /**
   * The handler attached to an anchor tag responsible for updating the
   * current history state with the current scroll state
   *
   * @param {HTMLElementEventMap} event - an onclick event attached to an anchor tag
   */
  function scrollstateHistoryHandler(event) {
    // Prevent default anchor onclick behaviour
    event.preventDefault();

    const href = event.currentTarget.getAttribute('href');

    // Setting the url (3rd arg) to href will break clicking for reasons, so don't try to do that
    history.replaceState(
      {
        scrollX: window.scrollX,
        scrollY: window.scrollY,
      },
      undefined,
      undefined
    );

    // This will force an update as desired, but this time our scroll state will be attached
    window.location.hash = href;
  }

  function instance($$self, $$props, $$invalidate) {
    let { $$slots: slots = {}, $$scope } = $$props;
    validate_slots('Router', slots, []);
    let { routes = {} } = $$props;
    let { prefix = '' } = $$props;
    let { restoreScrollState = false } = $$props;

    /**
     * Container for a route: path, component
     */
    class RouteItem {
      /**
       * Initializes the object and creates a regular expression from the path, using regexparam.
       *
       * @param {string} path - Path to the route (must start with '/' or '*')
       * @param {SvelteComponent|WrappedComponent} component - Svelte component for the route, optionally wrapped
       */
      constructor(path, component) {
        if (
          !component ||
          (typeof component != 'function' && (typeof component != 'object' || component._sveltesparouter !== true))
        ) {
          throw Error('Invalid component object');
        }

        // Path must be a regular or expression, or a string starting with '/' or '*'
        if (
          !path ||
          (typeof path == 'string' && (path.length < 1 || (path.charAt(0) != '/' && path.charAt(0) != '*'))) ||
          (typeof path == 'object' && !(path instanceof RegExp))
        ) {
          throw Error('Invalid value for "path" argument - strings must start with / or *');
        }

        const { pattern, keys } = regexparam(path);
        this.path = path;

        // Check if the component is wrapped and we have conditions
        if (typeof component == 'object' && component._sveltesparouter === true) {
          this.component = component.component;
          this.conditions = component.conditions || [];
          this.userData = component.userData;
          this.props = component.props || {};
        } else {
          // Convert the component to a function that returns a Promise, to normalize it
          this.component = () => Promise.resolve(component);

          this.conditions = [];
          this.props = {};
        }

        this._pattern = pattern;
        this._keys = keys;
      }

      /**
       * Checks if `path` matches the current route.
       * If there's a match, will return the list of parameters from the URL (if any).
       * In case of no match, the method will return `null`.
       *
       * @param {string} path - Path to test
       * @returns {null|Object.<string, string>} List of paramters from the URL if there's a match, or `null` otherwise.
       */
      match(path) {
        // If there's a prefix, check if it matches the start of the path.
        // If not, bail early, else remove it before we run the matching.
        if (prefix) {
          if (typeof prefix == 'string') {
            if (path.startsWith(prefix)) {
              path = path.substr(prefix.length) || '/';
            } else {
              return null;
            }
          } else if (prefix instanceof RegExp) {
            const match = path.match(prefix);

            if (match && match[0]) {
              path = path.substr(match[0].length) || '/';
            } else {
              return null;
            }
          }
        }

        // Check if the pattern matches
        const matches = this._pattern.exec(path);

        if (matches === null) {
          return null;
        }

        // If the input was a regular expression, this._keys would be false, so return matches as is
        if (this._keys === false) {
          return matches;
        }

        const out = {};
        let i = 0;

        while (i < this._keys.length) {
          // In the match parameters, URL-decode all values
          try {
            out[this._keys[i]] = decodeURIComponent(matches[i + 1] || '') || null;
          } catch (e) {
            out[this._keys[i]] = null;
          }

          i++;
        }

        return out;
      }

      /**
       * Dictionary with route details passed to the pre-conditions functions, as well as the `routeLoading`, `routeLoaded` and `conditionsFailed` events
       * @typedef {Object} RouteDetail
       * @property {string|RegExp} route - Route matched as defined in the route definition (could be a string or a reguar expression object)
       * @property {string} location - Location path
       * @property {string} querystring - Querystring from the hash
       * @property {object} [userData] - Custom data passed by the user
       * @property {SvelteComponent} [component] - Svelte component (only in `routeLoaded` events)
       * @property {string} [name] - Name of the Svelte component (only in `routeLoaded` events)
       */
      /**
       * Executes all conditions (if any) to control whether the route can be shown. Conditions are executed in the order they are defined, and if a condition fails, the following ones aren't executed.
       *
       * @param {RouteDetail} detail - Route detail
       * @returns {bool} Returns true if all the conditions succeeded
       */
      async checkConditions(detail) {
        for (let i = 0; i < this.conditions.length; i++) {
          if (!(await this.conditions[i](detail))) {
            return false;
          }
        }

        return true;
      }
    }

    // Set up all routes
    const routesList = [];

    if (routes instanceof Map) {
      // If it's a map, iterate on it right away
      routes.forEach((route, path) => {
        routesList.push(new RouteItem(path, route));
      });
    } else {
      // We have an object, so iterate on its own properties
      Object.keys(routes).forEach((path) => {
        routesList.push(new RouteItem(path, routes[path]));
      });
    }

    // Props for the component to render
    let component = null;

    let componentParams = null;
    let props = {};

    // Event dispatcher from Svelte
    const dispatch = createEventDispatcher();

    // Just like dispatch, but executes on the next iteration of the event loop
    async function dispatchNextTick(name, detail) {
      // Execute this code when the current call stack is complete
      await tick();

      dispatch(name, detail);
    }

    // If this is set, then that means we have popped into this var the state of our last scroll position
    let previousScrollState = null;

    if (restoreScrollState) {
      window.addEventListener('popstate', (event) => {
        // If this event was from our history.replaceState, event.state will contain
        // our scroll history. Otherwise, event.state will be null (like on forward
        // navigation)
        if (event.state && event.state.scrollY) {
          previousScrollState = event.state;
        } else {
          previousScrollState = null;
        }
      });

      afterUpdate(() => {
        // If this exists, then this is a back navigation: restore the scroll position
        if (previousScrollState) {
          window.scrollTo(previousScrollState.scrollX, previousScrollState.scrollY);
        } else {
          // Otherwise this is a forward navigation: scroll to top
          window.scrollTo(0, 0);
        }
      });
    }

    // Always have the latest value of loc
    let lastLoc = null;

    // Current object of the component loaded
    let componentObj = null;

    // Handle hash change events
    // Listen to changes in the $loc store and update the page
    // Do not use the $: syntax because it gets triggered by too many things
    loc.subscribe(async (newLoc) => {
      lastLoc = newLoc;

      // Find a route matching the location
      let i = 0;

      while (i < routesList.length) {
        const match = routesList[i].match(newLoc.location);

        if (!match) {
          i++;
          continue;
        }

        const detail = {
          route: routesList[i].path,
          location: newLoc.location,
          querystring: newLoc.querystring,
          userData: routesList[i].userData,
        };

        // Check if the route can be loaded - if all conditions succeed
        if (!(await routesList[i].checkConditions(detail))) {
          // Don't display anything
          $$invalidate(0, (component = null));

          componentObj = null;

          // Trigger an event to notify the user, then exit
          dispatchNextTick('conditionsFailed', detail);

          return;
        }

        // Trigger an event to alert that we're loading the route
        // We need to clone the object on every event invocation so we don't risk the object to be modified in the next tick
        dispatchNextTick('routeLoading', Object.assign({}, detail));

        // If there's a component to show while we're loading the route, display it
        const obj = routesList[i].component;

        // Do not replace the component if we're loading the same one as before, to avoid the route being unmounted and re-mounted
        if (componentObj != obj) {
          if (obj.loading) {
            $$invalidate(0, (component = obj.loading));
            componentObj = obj;
            $$invalidate(1, (componentParams = obj.loadingParams));
            $$invalidate(2, (props = {}));

            // Trigger the routeLoaded event for the loading component
            // Create a copy of detail so we don't modify the object for the dynamic route (and the dynamic route doesn't modify our object too)
            dispatchNextTick('routeLoaded', Object.assign({}, detail, { component, name: component.name }));
          } else {
            $$invalidate(0, (component = null));
            componentObj = null;
          }

          // Invoke the Promise
          const loaded = await obj();

          // Now that we're here, after the promise resolved, check if we still want this component, as the user might have navigated to another page in the meanwhile
          if (newLoc != lastLoc) {
            // Don't update the component, just exit
            return;
          }

          // If there is a "default" property, which is used by async routes, then pick that
          $$invalidate(0, (component = (loaded && loaded.default) || loaded));

          componentObj = obj;
        }

        // Set componentParams only if we have a match, to avoid a warning similar to `<Component> was created with unknown prop 'params'`
        // Of course, this assumes that developers always add a "params" prop when they are expecting parameters
        if (match && typeof match == 'object' && Object.keys(match).length) {
          $$invalidate(1, (componentParams = match));
        } else {
          $$invalidate(1, (componentParams = null));
        }

        // Set static props, if any
        $$invalidate(2, (props = routesList[i].props));

        // Dispatch the routeLoaded event then exit
        // We need to clone the object on every event invocation so we don't risk the object to be modified in the next tick
        dispatchNextTick('routeLoaded', Object.assign({}, detail, { component, name: component.name }));

        return;
      }

      // If we're still here, there was no match, so show the empty component
      $$invalidate(0, (component = null));

      componentObj = null;
    });

    const writable_props = ['routes', 'prefix', 'restoreScrollState'];

    Object_1.keys($$props).forEach((key) => {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$')
        console_1.warn(`<Router> was created with unknown prop '${key}'`);
    });

    function routeEvent_handler(event) {
      bubble($$self, event);
    }

    function routeEvent_handler_1(event) {
      bubble($$self, event);
    }

    $$self.$$set = ($$props) => {
      if ('routes' in $$props) $$invalidate(3, (routes = $$props.routes));
      if ('prefix' in $$props) $$invalidate(4, (prefix = $$props.prefix));
      if ('restoreScrollState' in $$props) $$invalidate(5, (restoreScrollState = $$props.restoreScrollState));
    };

    $$self.$capture_state = () => ({
      readable,
      derived,
      tick,
      _wrap: wrap,
      wrap: wrap$1,
      getLocation,
      loc,
      location,
      querystring,
      push,
      pop,
      replace,
      link,
      updateLink,
      scrollstateHistoryHandler,
      createEventDispatcher,
      afterUpdate,
      regexparam,
      routes,
      prefix,
      restoreScrollState,
      RouteItem,
      routesList,
      component,
      componentParams,
      props,
      dispatch,
      dispatchNextTick,
      previousScrollState,
      lastLoc,
      componentObj,
    });

    $$self.$inject_state = ($$props) => {
      if ('routes' in $$props) $$invalidate(3, (routes = $$props.routes));
      if ('prefix' in $$props) $$invalidate(4, (prefix = $$props.prefix));
      if ('restoreScrollState' in $$props) $$invalidate(5, (restoreScrollState = $$props.restoreScrollState));
      if ('component' in $$props) $$invalidate(0, (component = $$props.component));
      if ('componentParams' in $$props) $$invalidate(1, (componentParams = $$props.componentParams));
      if ('props' in $$props) $$invalidate(2, (props = $$props.props));
      if ('previousScrollState' in $$props) previousScrollState = $$props.previousScrollState;
      if ('lastLoc' in $$props) lastLoc = $$props.lastLoc;
      if ('componentObj' in $$props) componentObj = $$props.componentObj;
    };

    if ($$props && '$$inject' in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    $$self.$$.update = () => {
      if ($$self.$$.dirty & /*restoreScrollState*/ 32) {
        // Update history.scrollRestoration depending on restoreScrollState
        history.scrollRestoration = restoreScrollState ? 'manual' : 'auto';
      }
    };

    return [
      component,
      componentParams,
      props,
      routes,
      prefix,
      restoreScrollState,
      routeEvent_handler,
      routeEvent_handler_1,
    ];
  }

  class Router extends SvelteComponentDev {
    constructor(options) {
      super(options);

      init(this, options, instance, create_fragment, safe_not_equal, {
        routes: 3,
        prefix: 4,
        restoreScrollState: 5,
      });

      dispatch_dev('SvelteRegisterComponent', {
        component: this,
        tagName: 'Router',
        options,
        id: create_fragment.name,
      });
    }

    get routes() {
      throw new Error_1(
        "<Router>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
      );
    }

    set routes(value) {
      throw new Error_1(
        "<Router>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
      );
    }

    get prefix() {
      throw new Error_1(
        "<Router>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
      );
    }

    set prefix(value) {
      throw new Error_1(
        "<Router>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
      );
    }

    get restoreScrollState() {
      throw new Error_1(
        "<Router>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
      );
    }

    set restoreScrollState(value) {
      throw new Error_1(
        "<Router>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
      );
    }
  }

  /* src/_components/card/Card.svelte generated by Svelte v3.32.2 */

  const file = 'src/_components/card/Card.svelte';
  const get_footer_slot_changes_1 = (dirty) => ({});
  const get_footer_slot_context_1 = (ctx) => ({});
  const get_content_slot_changes_1 = (dirty) => ({});
  const get_content_slot_context_1 = (ctx) => ({});
  const get_media_slot_changes_1 = (dirty) => ({});
  const get_media_slot_context_1 = (ctx) => ({});
  const get_header_slot_changes_1 = (dirty) => ({});
  const get_header_slot_context_1 = (ctx) => ({});
  const get_footer_slot_changes = (dirty) => ({});
  const get_footer_slot_context = (ctx) => ({});
  const get_content_slot_changes = (dirty) => ({});
  const get_content_slot_context = (ctx) => ({});
  const get_media_slot_changes = (dirty) => ({});
  const get_media_slot_context = (ctx) => ({ class: 'card-media' });
  const get_header_slot_changes = (dirty) => ({});
  const get_header_slot_context = (ctx) => ({ class: 'card-header' });

  // (41:0) {:else}
  function create_else_block$1(ctx) {
    let div;
    let t0;
    let t1;
    let t2;
    let t3;
    let current;
    let if_block0 = /*$$slots*/ ctx[3].header && create_if_block_8(ctx);
    let if_block1 = /*$$slots*/ ctx[3].media && create_if_block_7(ctx);
    const default_slot_template = /*#slots*/ ctx[7].default;
    const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);
    let if_block2 = /*$$slots*/ ctx[3].content && create_if_block_6(ctx);
    let if_block3 = /*$$slots*/ ctx[3].footer && create_if_block_5(ctx);

    const block = {
      c: function create() {
        div = element('div');
        if (if_block0) if_block0.c();
        t0 = space();
        if (if_block1) if_block1.c();
        t1 = space();
        if (default_slot) default_slot.c();
        t2 = space();
        if (if_block2) if_block2.c();
        t3 = space();
        if (if_block3) if_block3.c();
        attr_dev(div, 'class', /*baseClass*/ ctx[2]);
        attr_dev(div, 'style', /*style*/ ctx[1]);
        add_location(div, file, 41, 2, 1021);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        if (if_block0) if_block0.m(div, null);
        append_dev(div, t0);
        if (if_block1) if_block1.m(div, null);
        append_dev(div, t1);

        if (default_slot) {
          default_slot.m(div, null);
        }

        append_dev(div, t2);
        if (if_block2) if_block2.m(div, null);
        append_dev(div, t3);
        if (if_block3) if_block3.m(div, null);
        current = true;
      },
      p: function update(ctx, dirty) {
        if (/*$$slots*/ ctx[3].header) {
          if (if_block0) {
            if_block0.p(ctx, dirty);

            if (dirty & /*$$slots*/ 8) {
              transition_in(if_block0, 1);
            }
          } else {
            if_block0 = create_if_block_8(ctx);
            if_block0.c();
            transition_in(if_block0, 1);
            if_block0.m(div, t0);
          }
        } else if (if_block0) {
          group_outros();

          transition_out(if_block0, 1, 1, () => {
            if_block0 = null;
          });

          check_outros();
        }

        if (/*$$slots*/ ctx[3].media) {
          if (if_block1) {
            if_block1.p(ctx, dirty);

            if (dirty & /*$$slots*/ 8) {
              transition_in(if_block1, 1);
            }
          } else {
            if_block1 = create_if_block_7(ctx);
            if_block1.c();
            transition_in(if_block1, 1);
            if_block1.m(div, t1);
          }
        } else if (if_block1) {
          group_outros();

          transition_out(if_block1, 1, 1, () => {
            if_block1 = null;
          });

          check_outros();
        }

        if (default_slot) {
          if (default_slot.p && dirty & /*$$scope*/ 64) {
            update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[6], dirty, null, null);
          }
        }

        if (/*$$slots*/ ctx[3].content) {
          if (if_block2) {
            if_block2.p(ctx, dirty);

            if (dirty & /*$$slots*/ 8) {
              transition_in(if_block2, 1);
            }
          } else {
            if_block2 = create_if_block_6(ctx);
            if_block2.c();
            transition_in(if_block2, 1);
            if_block2.m(div, t3);
          }
        } else if (if_block2) {
          group_outros();

          transition_out(if_block2, 1, 1, () => {
            if_block2 = null;
          });

          check_outros();
        }

        if (/*$$slots*/ ctx[3].footer) {
          if (if_block3) {
            if_block3.p(ctx, dirty);

            if (dirty & /*$$slots*/ 8) {
              transition_in(if_block3, 1);
            }
          } else {
            if_block3 = create_if_block_5(ctx);
            if_block3.c();
            transition_in(if_block3, 1);
            if_block3.m(div, null);
          }
        } else if (if_block3) {
          group_outros();

          transition_out(if_block3, 1, 1, () => {
            if_block3 = null;
          });

          check_outros();
        }

        if (!current || dirty & /*baseClass*/ 4) {
          attr_dev(div, 'class', /*baseClass*/ ctx[2]);
        }

        if (!current || dirty & /*style*/ 2) {
          attr_dev(div, 'style', /*style*/ ctx[1]);
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(if_block0);
        transition_in(if_block1);
        transition_in(default_slot, local);
        transition_in(if_block2);
        transition_in(if_block3);
        current = true;
      },
      o: function outro(local) {
        transition_out(if_block0);
        transition_out(if_block1);
        transition_out(default_slot, local);
        transition_out(if_block2);
        transition_out(if_block3);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
        if (if_block0) if_block0.d();
        if (if_block1) if_block1.d();
        if (default_slot) default_slot.d(detaching);
        if (if_block2) if_block2.d();
        if (if_block3) if_block3.d();
      },
    };

    dispatch_dev('SvelteRegisterBlock', {
      block,
      id: create_else_block$1.name,
      type: 'else',
      source: '(41:0) {:else}',
      ctx,
    });

    return block;
  }

  // (21:0) {#if href}
  function create_if_block$1(ctx) {
    let a;
    let t0;
    let t1;
    let t2;
    let t3;
    let current;
    let if_block0 = /*$$slots*/ ctx[3].header && create_if_block_4(ctx);
    let if_block1 = /*$$slots*/ ctx[3].media && create_if_block_3(ctx);
    const default_slot_template = /*#slots*/ ctx[7].default;
    const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);
    let if_block2 = /*$$slots*/ ctx[3].content && create_if_block_2(ctx);
    let if_block3 = /*$$slots*/ ctx[3].footer && create_if_block_1(ctx);

    const block = {
      c: function create() {
        a = element('a');
        if (if_block0) if_block0.c();
        t0 = space();
        if (if_block1) if_block1.c();
        t1 = space();
        if (default_slot) default_slot.c();
        t2 = space();
        if (if_block2) if_block2.c();
        t3 = space();
        if (if_block3) if_block3.c();
        attr_dev(a, 'href', /*href*/ ctx[0]);
        attr_dev(a, 'class', /*baseClass*/ ctx[2]);
        attr_dev(a, 'style', /*style*/ ctx[1]);
        add_location(a, file, 21, 2, 540);
      },
      m: function mount(target, anchor) {
        insert_dev(target, a, anchor);
        if (if_block0) if_block0.m(a, null);
        append_dev(a, t0);
        if (if_block1) if_block1.m(a, null);
        append_dev(a, t1);

        if (default_slot) {
          default_slot.m(a, null);
        }

        append_dev(a, t2);
        if (if_block2) if_block2.m(a, null);
        append_dev(a, t3);
        if (if_block3) if_block3.m(a, null);
        current = true;
      },
      p: function update(ctx, dirty) {
        if (/*$$slots*/ ctx[3].header) {
          if (if_block0) {
            if_block0.p(ctx, dirty);

            if (dirty & /*$$slots*/ 8) {
              transition_in(if_block0, 1);
            }
          } else {
            if_block0 = create_if_block_4(ctx);
            if_block0.c();
            transition_in(if_block0, 1);
            if_block0.m(a, t0);
          }
        } else if (if_block0) {
          group_outros();

          transition_out(if_block0, 1, 1, () => {
            if_block0 = null;
          });

          check_outros();
        }

        if (/*$$slots*/ ctx[3].media) {
          if (if_block1) {
            if_block1.p(ctx, dirty);

            if (dirty & /*$$slots*/ 8) {
              transition_in(if_block1, 1);
            }
          } else {
            if_block1 = create_if_block_3(ctx);
            if_block1.c();
            transition_in(if_block1, 1);
            if_block1.m(a, t1);
          }
        } else if (if_block1) {
          group_outros();

          transition_out(if_block1, 1, 1, () => {
            if_block1 = null;
          });

          check_outros();
        }

        if (default_slot) {
          if (default_slot.p && dirty & /*$$scope*/ 64) {
            update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[6], dirty, null, null);
          }
        }

        if (/*$$slots*/ ctx[3].content) {
          if (if_block2) {
            if_block2.p(ctx, dirty);

            if (dirty & /*$$slots*/ 8) {
              transition_in(if_block2, 1);
            }
          } else {
            if_block2 = create_if_block_2(ctx);
            if_block2.c();
            transition_in(if_block2, 1);
            if_block2.m(a, t3);
          }
        } else if (if_block2) {
          group_outros();

          transition_out(if_block2, 1, 1, () => {
            if_block2 = null;
          });

          check_outros();
        }

        if (/*$$slots*/ ctx[3].footer) {
          if (if_block3) {
            if_block3.p(ctx, dirty);

            if (dirty & /*$$slots*/ 8) {
              transition_in(if_block3, 1);
            }
          } else {
            if_block3 = create_if_block_1(ctx);
            if_block3.c();
            transition_in(if_block3, 1);
            if_block3.m(a, null);
          }
        } else if (if_block3) {
          group_outros();

          transition_out(if_block3, 1, 1, () => {
            if_block3 = null;
          });

          check_outros();
        }

        if (!current || dirty & /*href*/ 1) {
          attr_dev(a, 'href', /*href*/ ctx[0]);
        }

        if (!current || dirty & /*baseClass*/ 4) {
          attr_dev(a, 'class', /*baseClass*/ ctx[2]);
        }

        if (!current || dirty & /*style*/ 2) {
          attr_dev(a, 'style', /*style*/ ctx[1]);
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(if_block0);
        transition_in(if_block1);
        transition_in(default_slot, local);
        transition_in(if_block2);
        transition_in(if_block3);
        current = true;
      },
      o: function outro(local) {
        transition_out(if_block0);
        transition_out(if_block1);
        transition_out(default_slot, local);
        transition_out(if_block2);
        transition_out(if_block3);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(a);
        if (if_block0) if_block0.d();
        if (if_block1) if_block1.d();
        if (default_slot) default_slot.d(detaching);
        if (if_block2) if_block2.d();
        if (if_block3) if_block3.d();
      },
    };

    dispatch_dev('SvelteRegisterBlock', {
      block,
      id: create_if_block$1.name,
      type: 'if',
      source: '(21:0) {#if href}',
      ctx,
    });

    return block;
  }

  // (43:4) {#if $$slots.header}
  function create_if_block_8(ctx) {
    let div;
    let current;
    const header_slot_template = /*#slots*/ ctx[7].header;
    const header_slot = create_slot(header_slot_template, ctx, /*$$scope*/ ctx[6], get_header_slot_context_1);

    const block = {
      c: function create() {
        div = element('div');
        if (header_slot) header_slot.c();
        attr_dev(div, 'class', 'card-header');
        add_location(div, file, 43, 6, 1084);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);

        if (header_slot) {
          header_slot.m(div, null);
        }

        current = true;
      },
      p: function update(ctx, dirty) {
        if (header_slot) {
          if (header_slot.p && dirty & /*$$scope*/ 64) {
            update_slot(
              header_slot,
              header_slot_template,
              ctx,
              /*$$scope*/ ctx[6],
              dirty,
              get_header_slot_changes_1,
              get_header_slot_context_1
            );
          }
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(header_slot, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(header_slot, local);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
        if (header_slot) header_slot.d(detaching);
      },
    };

    dispatch_dev('SvelteRegisterBlock', {
      block,
      id: create_if_block_8.name,
      type: 'if',
      source: '(43:4) {#if $$slots.header}',
      ctx,
    });

    return block;
  }

  // (48:4) {#if $$slots.media}
  function create_if_block_7(ctx) {
    let div;
    let current;
    const media_slot_template = /*#slots*/ ctx[7].media;
    const media_slot = create_slot(media_slot_template, ctx, /*$$scope*/ ctx[6], get_media_slot_context_1);

    const block = {
      c: function create() {
        div = element('div');
        if (media_slot) media_slot.c();
        attr_dev(div, 'class', 'card-media');
        add_location(div, file, 48, 6, 1199);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);

        if (media_slot) {
          media_slot.m(div, null);
        }

        current = true;
      },
      p: function update(ctx, dirty) {
        if (media_slot) {
          if (media_slot.p && dirty & /*$$scope*/ 64) {
            update_slot(
              media_slot,
              media_slot_template,
              ctx,
              /*$$scope*/ ctx[6],
              dirty,
              get_media_slot_changes_1,
              get_media_slot_context_1
            );
          }
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(media_slot, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(media_slot, local);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
        if (media_slot) media_slot.d(detaching);
      },
    };

    dispatch_dev('SvelteRegisterBlock', {
      block,
      id: create_if_block_7.name,
      type: 'if',
      source: '(48:4) {#if $$slots.media}',
      ctx,
    });

    return block;
  }

  // (54:4) {#if $$slots.content}
  function create_if_block_6(ctx) {
    let div;
    let current;
    const content_slot_template = /*#slots*/ ctx[7].content;
    const content_slot = create_slot(content_slot_template, ctx, /*$$scope*/ ctx[6], get_content_slot_context_1);

    const block = {
      c: function create() {
        div = element('div');
        if (content_slot) content_slot.c();
        attr_dev(div, 'class', 'card-content');
        add_location(div, file, 54, 4, 1330);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);

        if (content_slot) {
          content_slot.m(div, null);
        }

        current = true;
      },
      p: function update(ctx, dirty) {
        if (content_slot) {
          if (content_slot.p && dirty & /*$$scope*/ 64) {
            update_slot(
              content_slot,
              content_slot_template,
              ctx,
              /*$$scope*/ ctx[6],
              dirty,
              get_content_slot_changes_1,
              get_content_slot_context_1
            );
          }
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(content_slot, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(content_slot, local);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
        if (content_slot) content_slot.d(detaching);
      },
    };

    dispatch_dev('SvelteRegisterBlock', {
      block,
      id: create_if_block_6.name,
      type: 'if',
      source: '(54:4) {#if $$slots.content}',
      ctx,
    });

    return block;
  }

  // (60:4) {#if $$slots.footer}
  function create_if_block_5(ctx) {
    let div;
    let current;
    const footer_slot_template = /*#slots*/ ctx[7].footer;
    const footer_slot = create_slot(footer_slot_template, ctx, /*$$scope*/ ctx[6], get_footer_slot_context_1);

    const block = {
      c: function create() {
        div = element('div');
        if (footer_slot) footer_slot.c();
        attr_dev(div, 'class', 'card-footer');
        add_location(div, file, 60, 6, 1445);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);

        if (footer_slot) {
          footer_slot.m(div, null);
        }

        current = true;
      },
      p: function update(ctx, dirty) {
        if (footer_slot) {
          if (footer_slot.p && dirty & /*$$scope*/ 64) {
            update_slot(
              footer_slot,
              footer_slot_template,
              ctx,
              /*$$scope*/ ctx[6],
              dirty,
              get_footer_slot_changes_1,
              get_footer_slot_context_1
            );
          }
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(footer_slot, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(footer_slot, local);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
        if (footer_slot) footer_slot.d(detaching);
      },
    };

    dispatch_dev('SvelteRegisterBlock', {
      block,
      id: create_if_block_5.name,
      type: 'if',
      source: '(60:4) {#if $$slots.footer}',
      ctx,
    });

    return block;
  }

  // (23:4) {#if $$slots.header}
  function create_if_block_4(ctx) {
    let current;
    const header_slot_template = /*#slots*/ ctx[7].header;
    const header_slot = create_slot(header_slot_template, ctx, /*$$scope*/ ctx[6], get_header_slot_context);

    const block = {
      c: function create() {
        if (header_slot) header_slot.c();
      },
      m: function mount(target, anchor) {
        if (header_slot) {
          header_slot.m(target, anchor);
        }

        current = true;
      },
      p: function update(ctx, dirty) {
        if (header_slot) {
          if (header_slot.p && dirty & /*$$scope*/ 64) {
            update_slot(
              header_slot,
              header_slot_template,
              ctx,
              /*$$scope*/ ctx[6],
              dirty,
              get_header_slot_changes,
              get_header_slot_context
            );
          }
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(header_slot, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(header_slot, local);
        current = false;
      },
      d: function destroy(detaching) {
        if (header_slot) header_slot.d(detaching);
      },
    };

    dispatch_dev('SvelteRegisterBlock', {
      block,
      id: create_if_block_4.name,
      type: 'if',
      source: '(23:4) {#if $$slots.header}',
      ctx,
    });

    return block;
  }

  // (26:4) {#if $$slots.media}
  function create_if_block_3(ctx) {
    let current;
    const media_slot_template = /*#slots*/ ctx[7].media;
    const media_slot = create_slot(media_slot_template, ctx, /*$$scope*/ ctx[6], get_media_slot_context);

    const block = {
      c: function create() {
        if (media_slot) media_slot.c();
      },
      m: function mount(target, anchor) {
        if (media_slot) {
          media_slot.m(target, anchor);
        }

        current = true;
      },
      p: function update(ctx, dirty) {
        if (media_slot) {
          if (media_slot.p && dirty & /*$$scope*/ 64) {
            update_slot(
              media_slot,
              media_slot_template,
              ctx,
              /*$$scope*/ ctx[6],
              dirty,
              get_media_slot_changes,
              get_media_slot_context
            );
          }
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(media_slot, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(media_slot, local);
        current = false;
      },
      d: function destroy(detaching) {
        if (media_slot) media_slot.d(detaching);
      },
    };

    dispatch_dev('SvelteRegisterBlock', {
      block,
      id: create_if_block_3.name,
      type: 'if',
      source: '(26:4) {#if $$slots.media}',
      ctx,
    });

    return block;
  }

  // (30:4) {#if $$slots.content}
  function create_if_block_2(ctx) {
    let div;
    let current;
    const content_slot_template = /*#slots*/ ctx[7].content;
    const content_slot = create_slot(content_slot_template, ctx, /*$$scope*/ ctx[6], get_content_slot_context);

    const block = {
      c: function create() {
        div = element('div');
        if (content_slot) content_slot.c();
        attr_dev(div, 'class', 'card-content');
        add_location(div, file, 30, 4, 805);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);

        if (content_slot) {
          content_slot.m(div, null);
        }

        current = true;
      },
      p: function update(ctx, dirty) {
        if (content_slot) {
          if (content_slot.p && dirty & /*$$scope*/ 64) {
            update_slot(
              content_slot,
              content_slot_template,
              ctx,
              /*$$scope*/ ctx[6],
              dirty,
              get_content_slot_changes,
              get_content_slot_context
            );
          }
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(content_slot, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(content_slot, local);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
        if (content_slot) content_slot.d(detaching);
      },
    };

    dispatch_dev('SvelteRegisterBlock', {
      block,
      id: create_if_block_2.name,
      type: 'if',
      source: '(30:4) {#if $$slots.content}',
      ctx,
    });

    return block;
  }

  // (35:4) {#if $$slots.footer}
  function create_if_block_1(ctx) {
    let div;
    let current;
    const footer_slot_template = /*#slots*/ ctx[7].footer;
    const footer_slot = create_slot(footer_slot_template, ctx, /*$$scope*/ ctx[6], get_footer_slot_context);

    const block = {
      c: function create() {
        div = element('div');
        if (footer_slot) footer_slot.c();
        attr_dev(div, 'class', 'card-footer');
        add_location(div, file, 35, 6, 919);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);

        if (footer_slot) {
          footer_slot.m(div, null);
        }

        current = true;
      },
      p: function update(ctx, dirty) {
        if (footer_slot) {
          if (footer_slot.p && dirty & /*$$scope*/ 64) {
            update_slot(
              footer_slot,
              footer_slot_template,
              ctx,
              /*$$scope*/ ctx[6],
              dirty,
              get_footer_slot_changes,
              get_footer_slot_context
            );
          }
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(footer_slot, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(footer_slot, local);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
        if (footer_slot) footer_slot.d(detaching);
      },
    };

    dispatch_dev('SvelteRegisterBlock', {
      block,
      id: create_if_block_1.name,
      type: 'if',
      source: '(35:4) {#if $$slots.footer}',
      ctx,
    });

    return block;
  }

  function create_fragment$1(ctx) {
    let current_block_type_index;
    let if_block;
    let if_block_anchor;
    let current;
    const if_block_creators = [create_if_block$1, create_else_block$1];
    const if_blocks = [];

    function select_block_type(ctx, dirty) {
      if (/*href*/ ctx[0]) return 0;
      return 1;
    }

    current_block_type_index = select_block_type(ctx);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    const block = {
      c: function create() {
        if_block.c();
        if_block_anchor = empty();
      },
      l: function claim(nodes) {
        throw new Error('options.hydrate only works if the component was compiled with the `hydratable: true` option');
      },
      m: function mount(target, anchor) {
        if_blocks[current_block_type_index].m(target, anchor);
        insert_dev(target, if_block_anchor, anchor);
        current = true;
      },
      p: function update(ctx, [dirty]) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx);

        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx, dirty);
        } else {
          group_outros();

          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });

          check_outros();
          if_block = if_blocks[current_block_type_index];

          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
            if_block.c();
          } else {
            if_block.p(ctx, dirty);
          }

          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      },
      i: function intro(local) {
        if (current) return;
        transition_in(if_block);
        current = true;
      },
      o: function outro(local) {
        transition_out(if_block);
        current = false;
      },
      d: function destroy(detaching) {
        if_blocks[current_block_type_index].d(detaching);
        if (detaching) detach_dev(if_block_anchor);
      },
    };

    dispatch_dev('SvelteRegisterBlock', {
      block,
      id: create_fragment$1.name,
      type: 'component',
      source: '',
      ctx,
    });

    return block;
  }

  function instance$1($$self, $$props, $$invalidate) {
    let { $$slots: slots = {}, $$scope } = $$props;
    validate_slots('Card', slots, ['header', 'media', 'default', 'content', 'footer']);
    const $$slots = compute_slots(slots);
    let baseClass = 'card';
    let { className } = $$props;
    let { href = undefined } = $$props;
    let { style = undefined } = $$props;
    let { type = undefined } = $$props;
    if (className) baseClass = `${className} ${baseClass}`;

    switch (type) {
      case 'mode':
        baseClass = `${baseClass} card-mode`;
      case 'small-media':
        baseClass = `${baseClass} card--small-media`;
        break;
      case 'small-media--reverse':
        baseClass = `${baseClass} card--small-media card--small-media--reverse`;
        break;
    }

    const writable_props = ['className', 'href', 'style', 'type'];

    Object.keys($$props).forEach((key) => {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$')
        console.warn(`<Card> was created with unknown prop '${key}'`);
    });

    $$self.$$set = ($$props) => {
      if ('className' in $$props) $$invalidate(4, (className = $$props.className));
      if ('href' in $$props) $$invalidate(0, (href = $$props.href));
      if ('style' in $$props) $$invalidate(1, (style = $$props.style));
      if ('type' in $$props) $$invalidate(5, (type = $$props.type));
      if ('$$scope' in $$props) $$invalidate(6, ($$scope = $$props.$$scope));
    };

    $$self.$capture_state = () => ({ baseClass, className, href, style, type });

    $$self.$inject_state = ($$props) => {
      if ('baseClass' in $$props) $$invalidate(2, (baseClass = $$props.baseClass));
      if ('className' in $$props) $$invalidate(4, (className = $$props.className));
      if ('href' in $$props) $$invalidate(0, (href = $$props.href));
      if ('style' in $$props) $$invalidate(1, (style = $$props.style));
      if ('type' in $$props) $$invalidate(5, (type = $$props.type));
    };

    if ($$props && '$$inject' in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [href, style, baseClass, $$slots, className, type, $$scope, slots];
  }

  class Card extends SvelteComponentDev {
    constructor(options) {
      super(options);
      init(this, options, instance$1, create_fragment$1, safe_not_equal, { className: 4, href: 0, style: 1, type: 5 });

      dispatch_dev('SvelteRegisterComponent', {
        component: this,
        tagName: 'Card',
        options,
        id: create_fragment$1.name,
      });

      const { ctx } = this.$$;
      const props = options.props || {};

      if (/*className*/ ctx[4] === undefined && !('className' in props)) {
        console.warn("<Card> was created without expected prop 'className'");
      }
    }

    get className() {
      throw new Error(
        "<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
      );
    }

    set className(value) {
      throw new Error(
        "<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
      );
    }

    get href() {
      throw new Error(
        "<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
      );
    }

    set href(value) {
      throw new Error(
        "<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
      );
    }

    get style() {
      throw new Error(
        "<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
      );
    }

    set style(value) {
      throw new Error(
        "<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
      );
    }

    get type() {
      throw new Error(
        "<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
      );
    }

    set type(value) {
      throw new Error(
        "<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
      );
    }
  }

  /* docs_src/routes/Home.svelte generated by Svelte v3.32.2 */
  const file$1 = 'docs_src/routes/Home.svelte';

  // (33:8) <Card className="padding-m" href={componentsLink}>
  function create_default_slot_2(ctx) {
    let div;
    let h2;
    let t1;
    let i;

    const block = {
      c: function create() {
        div = element('div');
        h2 = element('h2');
        h2.textContent = 'Components';
        t1 = space();
        i = element('i');
        attr_dev(h2, 'class', 'color--graa1');
        add_location(h2, file$1, 34, 12, 1262);
        attr_dev(i, 'class', 'home-section-icon fas fa-cubes svelte-n6iywn');
        add_location(i, file$1, 35, 12, 1315);
        attr_dev(div, 'class', 'flex-item flex-item--center text-align--center');
        add_location(div, file$1, 33, 10, 1189);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        append_dev(div, h2);
        append_dev(div, t1);
        append_dev(div, i);
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
      },
    };

    dispatch_dev('SvelteRegisterBlock', {
      block,
      id: create_default_slot_2.name,
      type: 'slot',
      source: '(33:8) <Card className=\\"padding-m\\" href={componentsLink}>',
      ctx,
    });

    return block;
  }

  // (41:8) <Card className="padding-m" href={utilityLink}>
  function create_default_slot_1(ctx) {
    let div;
    let h2;
    let t1;
    let i;

    const block = {
      c: function create() {
        div = element('div');
        h2 = element('h2');
        h2.textContent = 'Utilites';
        t1 = space();
        i = element('i');
        attr_dev(h2, 'class', 'color--graa1');
        add_location(h2, file$1, 42, 12, 1598);
        attr_dev(i, 'class', 'home-section-icon fab fa-connectdevelop svelte-n6iywn');
        add_location(i, file$1, 43, 12, 1649);
        attr_dev(div, 'class', 'flex-item flex-item--center text-align--center');
        add_location(div, file$1, 41, 10, 1525);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        append_dev(div, h2);
        append_dev(div, t1);
        append_dev(div, i);
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
      },
    };

    dispatch_dev('SvelteRegisterBlock', {
      block,
      id: create_default_slot_1.name,
      type: 'slot',
      source: '(41:8) <Card className=\\"padding-m\\" href={utilityLink}>',
      ctx,
    });

    return block;
  }

  // (51:8) <Card className="padding-m" href={colorLink}>
  function create_default_slot(ctx) {
    let div;
    let h2;
    let t1;
    let i;

    const block = {
      c: function create() {
        div = element('div');
        h2 = element('h2');
        h2.textContent = 'Colors';
        t1 = space();
        i = element('i');
        attr_dev(h2, 'class', 'color--graa1');
        add_location(h2, file$1, 52, 12, 1973);
        attr_dev(i, 'class', 'home-section-icon fas fa-palette svelte-n6iywn');
        add_location(i, file$1, 53, 12, 2022);
        attr_dev(div, 'class', 'flex-item flex-item--center text-align--center');
        add_location(div, file$1, 51, 10, 1900);
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        append_dev(div, h2);
        append_dev(div, t1);
        append_dev(div, i);
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
      },
    };

    dispatch_dev('SvelteRegisterBlock', {
      block,
      id: create_default_slot.name,
      type: 'slot',
      source: '(51:8) <Card className=\\"padding-m\\" href={colorLink}>',
      ctx,
    });

    return block;
  }

  function create_fragment$2(ctx) {
    let div9;
    let div8;
    let div0;
    let img;
    let img_src_value;
    let t0;
    let div1;
    let h1;
    let t2;
    let div2;
    let t4;
    let div5;
    let div3;
    let card0;
    let t5;
    let div4;
    let card1;
    let t6;
    let div7;
    let div6;
    let card2;
    let current;

    card0 = new Card({
      props: {
        className: 'padding-m',
        href: /*componentsLink*/ ctx[0],
        $$slots: { default: [create_default_slot_2] },
        $$scope: { ctx },
      },
      $$inline: true,
    });

    card1 = new Card({
      props: {
        className: 'padding-m',
        href: /*utilityLink*/ ctx[1],
        $$slots: { default: [create_default_slot_1] },
        $$scope: { ctx },
      },
      $$inline: true,
    });

    card2 = new Card({
      props: {
        className: 'padding-m',
        href: /*colorLink*/ ctx[2],
        $$slots: { default: [create_default_slot] },
        $$scope: { ctx },
      },
      $$inline: true,
    });

    const block = {
      c: function create() {
        div9 = element('div');
        div8 = element('div');
        div0 = element('div');
        img = element('img');
        t0 = space();
        div1 = element('div');
        h1 = element('h1');
        h1.textContent = 'Design system';
        t2 = space();
        div2 = element('div');
        div2.textContent = 'yarn add @ekstra-bladet/designsystem';
        t4 = space();
        div5 = element('div');
        div3 = element('div');
        create_component(card0.$$.fragment);
        t5 = space();
        div4 = element('div');
        create_component(card1.$$.fragment);
        t6 = space();
        div7 = element('div');
        div6 = element('div');
        create_component(card2.$$.fragment);
        attr_dev(img, 'alt', '');
        if (img.src !== (img_src_value = 'ekstrabladet.svg')) attr_dev(img, 'src', img_src_value);
        set_style(img, 'height', '70px');
        add_location(img, file$1, 22, 6, 753);
        attr_dev(div0, 'class', 'flex flex-justify--center');
        add_location(div0, file$1, 21, 4, 707);
        add_location(h1, file$1, 25, 6, 886);
        attr_dev(div1, 'class', 'flex flex-justify--center  margin-l--b');
        add_location(div1, file$1, 24, 4, 827);
        attr_dev(div2, 'class', 'text-align--center margin-m--tb padding-m bg--graa7');
        add_location(div2, file$1, 27, 4, 924);
        attr_dev(div3, 'class', 'home-section width-1of1 margin-m svelte-n6iywn');
        add_location(div3, file$1, 31, 6, 1073);
        attr_dev(div4, 'class', 'home-section width-1of1 margin-m svelte-n6iywn');
        add_location(div4, file$1, 39, 6, 1412);
        attr_dev(div5, 'class', 'flex');
        add_location(div5, file$1, 30, 4, 1048);
        attr_dev(div6, 'class', 'home-section width-1of1 margin-m svelte-n6iywn');
        add_location(div6, file$1, 49, 6, 1789);
        attr_dev(div7, 'class', 'flex');
        add_location(div7, file$1, 48, 4, 1764);
        attr_dev(div8, 'class', 'grid-width--medium');
        add_location(div8, file$1, 20, 2, 670);
        attr_dev(div9, 'class', 'flex flex-justify--around width-1of1');
        add_location(div9, file$1, 19, 0, 617);
      },
      l: function claim(nodes) {
        throw new Error('options.hydrate only works if the component was compiled with the `hydratable: true` option');
      },
      m: function mount(target, anchor) {
        insert_dev(target, div9, anchor);
        append_dev(div9, div8);
        append_dev(div8, div0);
        append_dev(div0, img);
        append_dev(div8, t0);
        append_dev(div8, div1);
        append_dev(div1, h1);
        append_dev(div8, t2);
        append_dev(div8, div2);
        append_dev(div8, t4);
        append_dev(div8, div5);
        append_dev(div5, div3);
        mount_component(card0, div3, null);
        append_dev(div5, t5);
        append_dev(div5, div4);
        mount_component(card1, div4, null);
        append_dev(div8, t6);
        append_dev(div8, div7);
        append_dev(div7, div6);
        mount_component(card2, div6, null);
        current = true;
      },
      p: function update(ctx, [dirty]) {
        const card0_changes = {};
        if (dirty & /*componentsLink*/ 1) card0_changes.href = /*componentsLink*/ ctx[0];

        if (dirty & /*$$scope*/ 8) {
          card0_changes.$$scope = { dirty, ctx };
        }

        card0.$set(card0_changes);
        const card1_changes = {};
        if (dirty & /*utilityLink*/ 2) card1_changes.href = /*utilityLink*/ ctx[1];

        if (dirty & /*$$scope*/ 8) {
          card1_changes.$$scope = { dirty, ctx };
        }

        card1.$set(card1_changes);
        const card2_changes = {};
        if (dirty & /*colorLink*/ 4) card2_changes.href = /*colorLink*/ ctx[2];

        if (dirty & /*$$scope*/ 8) {
          card2_changes.$$scope = { dirty, ctx };
        }

        card2.$set(card2_changes);
      },
      i: function intro(local) {
        if (current) return;
        transition_in(card0.$$.fragment, local);
        transition_in(card1.$$.fragment, local);
        transition_in(card2.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(card0.$$.fragment, local);
        transition_out(card1.$$.fragment, local);
        transition_out(card2.$$.fragment, local);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div9);
        destroy_component(card0);
        destroy_component(card1);
        destroy_component(card2);
      },
    };

    dispatch_dev('SvelteRegisterBlock', {
      block,
      id: create_fragment$2.name,
      type: 'component',
      source: '',
      ctx,
    });

    return block;
  }

  function instance$2($$self, $$props, $$invalidate) {
    let { $$slots: slots = {}, $$scope } = $$props;
    validate_slots('Home', slots, []);
    let componentsLink = '#/';
    let utilityLink = '#/';
    let colorLink = '#/';

    // Adds dynamic links to home-section cards. It finds the first element for each type.
    routes.forEach((route) => {
      if (componentsLink === '#/' && route.type === 'component') {
        $$invalidate(0, (componentsLink = `#${route.link}`));
      }

      if (utilityLink === '#/' && route.type === 'utility') {
        $$invalidate(1, (utilityLink = `#${route.link}`));
      }

      if (colorLink === '#/' && route.type === 'color') {
        $$invalidate(2, (colorLink = `#${route.link}`));
      }
    });

    const writable_props = [];

    Object.keys($$props).forEach((key) => {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$')
        console.warn(`<Home> was created with unknown prop '${key}'`);
    });

    $$self.$capture_state = () => ({
      Card,
      Routes: routes,
      componentsLink,
      utilityLink,
      colorLink,
    });

    $$self.$inject_state = ($$props) => {
      if ('componentsLink' in $$props) $$invalidate(0, (componentsLink = $$props.componentsLink));
      if ('utilityLink' in $$props) $$invalidate(1, (utilityLink = $$props.utilityLink));
      if ('colorLink' in $$props) $$invalidate(2, (colorLink = $$props.colorLink));
    };

    if ($$props && '$$inject' in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [componentsLink, utilityLink, colorLink];
  }

  class Home extends SvelteComponentDev {
    constructor(options) {
      super(options);
      init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

      dispatch_dev('SvelteRegisterComponent', {
        component: this,
        tagName: 'Home',
        options,
        id: create_fragment$2.name,
      });
    }
  }

  if (window.Prism)
    console.warn('Prism has already been initiated. Please ensure that svelte-prism is imported first.');

  window.Prism = window.Prism || {};
  window.Prism.manual = true;

  var commonjsGlobal =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : typeof self !== 'undefined'
      ? self
      : {};

  function createCommonjsModule(fn) {
    var module = { exports: {} };
    return fn(module, module.exports), module.exports;
  }

  var prism = createCommonjsModule(function (module) {
    /* **********************************************
         Begin prism-core.js
    ********************************************** */

    /// <reference lib="WebWorker"/>

    var _self =
      typeof window !== 'undefined'
        ? window // if in browser
        : typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope
        ? self // if in worker
        : {}; // if in node js

    /**
=======
var app=function(){"use strict";function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function a(){return Object.create(null)}function s(e){e.forEach(n)}function l(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function r(t,...n){if(null==t)return e;const a=t.subscribe(...n);return a.unsubscribe?()=>a.unsubscribe():a}function i(e,t,n){e.$$.on_destroy.push(r(t,n))}function c(e,t,n,a){if(e){const s=u(e,t,n,a);return e[0](s)}}function u(e,n,a,s){return e[1]&&s?t(a.ctx.slice(),e[1](s(n))):a.ctx}function d(e,t,n,a,s,l,o){const r=function(e,t,n,a){if(e[2]&&a){const s=e[2](a(n));if(void 0===t.dirty)return s;if("object"==typeof s){const e=[],n=Math.max(t.dirty.length,s.length);for(let a=0;a<n;a+=1)e[a]=t.dirty[a]|s[a];return e}return t.dirty|s}return t.dirty}(t,a,s,l);if(r){const s=u(t,n,a,o);e.p(s,r)}}function m(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function g(t){return t&&l(t.destroy)?t.destroy:e}function f(e,t){e.appendChild(t)}function $(e,t,n){e.insertBefore(t,n||null)}function p(e){e.parentNode.removeChild(e)}function h(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function x(e){return document.createElement(e)}function v(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function b(e){return document.createTextNode(e)}function w(){return b(" ")}function y(){return b("")}function k(e,t,n,a){return e.addEventListener(t,n,a),()=>e.removeEventListener(t,n,a)}function C(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function N(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function B(e,t,n,a){e.style.setProperty(t,n,a?"important":"")}class F{constructor(e=null){this.a=e,this.e=this.n=null}m(e,t,n=null){this.e||(this.e=x(t.nodeName),this.t=t,this.h(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)$(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(p)}}let T;function A(e){T=e}function S(){if(!T)throw new Error("Function called outside component initialization");return T}function L(e){S().$$.on_mount.push(e)}function P(e){S().$$.after_update.push(e)}function z(e){S().$$.on_destroy.push(e)}function E(){const e=S();return(t,n)=>{const a=e.$$.callbacks[t];if(a){const s=function(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(t,n);a.slice().forEach((t=>{t.call(e,s)}))}}}function j(e,t){S().$$.context.set(e,t)}function _(e){return S().$$.context.get(e)}function M(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach((e=>e(t)))}const H=[],q=[],O=[],D=[],I=Promise.resolve();let G=!1;function R(){G||(G=!0,I.then(Z))}function V(e){O.push(e)}function U(e){D.push(e)}let W=!1;const Y=new Set;function Z(){if(!W){W=!0;do{for(let e=0;e<H.length;e+=1){const t=H[e];A(t),X(t.$$)}for(A(null),H.length=0;q.length;)q.pop()();for(let e=0;e<O.length;e+=1){const t=O[e];Y.has(t)||(Y.add(t),t())}O.length=0}while(H.length);for(;D.length;)D.pop()();G=!1,W=!1,Y.clear()}}function X(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(V)}}const J=new Set;let K;function Q(){K={r:0,c:[],p:K}}function ee(){K.r||s(K.c),K=K.p}function te(e,t){e&&e.i&&(J.delete(e),e.i(t))}function ne(e,t,n,a){if(e&&e.o){if(J.has(e))return;J.add(e),K.c.push((()=>{J.delete(e),a&&(n&&e.d(1),a())})),e.o(t)}}function ae(e,t){const n={},a={},s={$$scope:1};let l=e.length;for(;l--;){const o=e[l],r=t[l];if(r){for(const e in o)e in r||(a[e]=1);for(const e in r)s[e]||(n[e]=r[e],s[e]=1);e[l]=r}else for(const e in o)s[e]=1}for(const e in a)e in n||(n[e]=void 0);return n}function se(e){return"object"==typeof e&&null!==e?e:{}}function le(e,t,n){const a=e.$$.props[t];void 0!==a&&(e.$$.bound[a]=n,n(e.$$.ctx[a]))}function oe(e){e&&e.c()}function re(e,t,a){const{fragment:o,on_mount:r,on_destroy:i,after_update:c}=e.$$;o&&o.m(t,a),V((()=>{const t=r.map(n).filter(l);i?i.push(...t):s(t),e.$$.on_mount=[]})),c.forEach(V)}function ie(e,t){const n=e.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ce(t,n,l,o,r,i,c=[-1]){const u=T;A(t);const d=t.$$={fragment:null,ctx:null,props:i,update:e,not_equal:r,bound:a(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:a(),dirty:c,skip_bound:!1};let m=!1;if(d.ctx=l?l(t,n.props||{},((e,n,...a)=>{const s=a.length?a[0]:n;return d.ctx&&r(d.ctx[e],d.ctx[e]=s)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](s),m&&function(e,t){-1===e.$$.dirty[0]&&(H.push(e),R(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(t,e)),n})):[],d.update(),m=!0,s(d.before_update),d.fragment=!!o&&o(d.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);d.fragment&&d.fragment.l(e),e.forEach(p)}else d.fragment&&d.fragment.c();n.intro&&te(t.$$.fragment),re(t,n.target,n.anchor),Z()}A(u)}class ue{$destroy(){ie(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const de=[];function me(e,t){return{subscribe:ge(e,t).subscribe}}function ge(t,n=e){let a;const s=[];function l(e){if(o(t,e)&&(t=e,a)){const e=!de.length;for(let e=0;e<s.length;e+=1){const n=s[e];n[1](),de.push(n,t)}if(e){for(let e=0;e<de.length;e+=2)de[e][0](de[e+1]);de.length=0}}}return{set:l,update:function(e){l(e(t))},subscribe:function(o,r=e){const i=[o,r];return s.push(i),1===s.length&&(a=n(l)||e),o(t),()=>{const e=s.indexOf(i);-1!==e&&s.splice(e,1),0===s.length&&(a(),a=null)}}}}function fe(t,n,a){const o=!Array.isArray(t),i=o?[t]:t,c=n.length<2;return me(a,(t=>{let a=!1;const u=[];let d=0,m=e;const g=()=>{if(d)return;m();const a=n(o?u[0]:u,t);c?t(a):m=l(a)?a:e},f=i.map(((e,t)=>r(e,(e=>{u[t]=e,d&=~(1<<t),a&&g()}),(()=>{d|=1<<t}))));return a=!0,g(),function(){s(f),m()}}))}function $e(e){let n,a,s;const l=[e[2]];var o=e[0];function r(e){let n={};for(let e=0;e<l.length;e+=1)n=t(n,l[e]);return{props:n}}return o&&(n=new o(r()),n.$on("routeEvent",e[7])),{c(){n&&oe(n.$$.fragment),a=y()},m(e,t){n&&re(n,e,t),$(e,a,t),s=!0},p(e,t){const s=4&t?ae(l,[se(e[2])]):{};if(o!==(o=e[0])){if(n){Q();const e=n;ne(e.$$.fragment,1,0,(()=>{ie(e,1)})),ee()}o?(n=new o(r()),n.$on("routeEvent",e[7]),oe(n.$$.fragment),te(n.$$.fragment,1),re(n,a.parentNode,a)):n=null}else o&&n.$set(s)},i(e){s||(n&&te(n.$$.fragment,e),s=!0)},o(e){n&&ne(n.$$.fragment,e),s=!1},d(e){e&&p(a),n&&ie(n,e)}}}function pe(e){let n,a,s;const l=[{params:e[1]},e[2]];var o=e[0];function r(e){let n={};for(let e=0;e<l.length;e+=1)n=t(n,l[e]);return{props:n}}return o&&(n=new o(r()),n.$on("routeEvent",e[6])),{c(){n&&oe(n.$$.fragment),a=y()},m(e,t){n&&re(n,e,t),$(e,a,t),s=!0},p(e,t){const s=6&t?ae(l,[2&t&&{params:e[1]},4&t&&se(e[2])]):{};if(o!==(o=e[0])){if(n){Q();const e=n;ne(e.$$.fragment,1,0,(()=>{ie(e,1)})),ee()}o?(n=new o(r()),n.$on("routeEvent",e[6]),oe(n.$$.fragment),te(n.$$.fragment,1),re(n,a.parentNode,a)):n=null}else o&&n.$set(s)},i(e){s||(n&&te(n.$$.fragment,e),s=!0)},o(e){n&&ne(n.$$.fragment,e),s=!1},d(e){e&&p(a),n&&ie(n,e)}}}function he(e){let t,n,a,s;const l=[pe,$e],o=[];function r(e,t){return e[1]?0:1}return t=r(e),n=o[t]=l[t](e),{c(){n.c(),a=y()},m(e,n){o[t].m(e,n),$(e,a,n),s=!0},p(e,[s]){let i=t;t=r(e),t===i?o[t].p(e,s):(Q(),ne(o[i],1,1,(()=>{o[i]=null})),ee(),n=o[t],n?n.p(e,s):(n=o[t]=l[t](e),n.c()),te(n,1),n.m(a.parentNode,a))},i(e){s||(te(n),s=!0)},o(e){ne(n),s=!1},d(e){o[t].d(e),e&&p(a)}}}function xe(){const e=window.location.href.indexOf("#/");let t=e>-1?window.location.href.substr(e+1):"/";const n=t.indexOf("?");let a="";return n>-1&&(a=t.substr(n+1),t=t.substr(0,n)),{location:t,querystring:a}}const ve=me(null,(function(e){e(xe());const t=()=>{e(xe())};return window.addEventListener("hashchange",t,!1),function(){window.removeEventListener("hashchange",t,!1)}}));function be(e,t){if(!e||!e.tagName||"a"!=e.tagName.toLowerCase())throw Error('Action "link" can only be used with <a> tags');return we(e,t||e.getAttribute("href")),{update(t){we(e,t)}}}function we(e,t){if(!t||t.length<1||"/"!=t.charAt(0))throw Error('Invalid value for "href" attribute: '+t);e.setAttribute("href","#"+t),e.addEventListener("click",ye)}function ye(e){e.preventDefault();const t=e.currentTarget.getAttribute("href");history.replaceState({scrollX:window.scrollX,scrollY:window.scrollY},void 0,void 0),window.location.hash=t}function ke(e,t,n){let{routes:a={}}=t,{prefix:s=""}=t,{restoreScrollState:l=!1}=t;class o{constructor(e,t){if(!t||"function"!=typeof t&&("object"!=typeof t||!0!==t._sveltesparouter))throw Error("Invalid component object");if(!e||"string"==typeof e&&(e.length<1||"/"!=e.charAt(0)&&"*"!=e.charAt(0))||"object"==typeof e&&!(e instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:n,keys:a}=function(e,t){if(e instanceof RegExp)return{keys:!1,pattern:e};var n,a,s,l,o=[],r="",i=e.split("/");for(i[0]||i.shift();s=i.shift();)"*"===(n=s[0])?(o.push("wild"),r+="/(.*)"):":"===n?(a=s.indexOf("?",1),l=s.indexOf(".",1),o.push(s.substring(1,~a?a:~l?l:s.length)),r+=~a&&!~l?"(?:/([^/]+?))?":"/([^/]+?)",~l&&(r+=(~a?"?":"")+"\\"+s.substring(l))):r+="/"+s;return{keys:o,pattern:new RegExp("^"+r+(t?"(?=$|/)":"/?$"),"i")}}(e);this.path=e,"object"==typeof t&&!0===t._sveltesparouter?(this.component=t.component,this.conditions=t.conditions||[],this.userData=t.userData,this.props=t.props||{}):(this.component=()=>Promise.resolve(t),this.conditions=[],this.props={}),this._pattern=n,this._keys=a}match(e){if(s)if("string"==typeof s){if(!e.startsWith(s))return null;e=e.substr(s.length)||"/"}else if(s instanceof RegExp){const t=e.match(s);if(!t||!t[0])return null;e=e.substr(t[0].length)||"/"}const t=this._pattern.exec(e);if(null===t)return null;if(!1===this._keys)return t;const n={};let a=0;for(;a<this._keys.length;){try{n[this._keys[a]]=decodeURIComponent(t[a+1]||"")||null}catch(e){n[this._keys[a]]=null}a++}return n}async checkConditions(e){for(let t=0;t<this.conditions.length;t++)if(!await this.conditions[t](e))return!1;return!0}}const r=[];a instanceof Map?a.forEach(((e,t)=>{r.push(new o(t,e))})):Object.keys(a).forEach((e=>{r.push(new o(e,a[e]))}));let i=null,c=null,u={};const d=E();async function m(e,t){await(R(),I),d(e,t)}let g=null;l&&(window.addEventListener("popstate",(e=>{g=e.state&&e.state.scrollY?e.state:null})),P((()=>{g?window.scrollTo(g.scrollX,g.scrollY):window.scrollTo(0,0)})));let f=null,$=null;return ve.subscribe((async e=>{f=e;let t=0;for(;t<r.length;){const a=r[t].match(e.location);if(!a){t++;continue}const s={route:r[t].path,location:e.location,querystring:e.querystring,userData:r[t].userData};if(!await r[t].checkConditions(s))return n(0,i=null),$=null,void m("conditionsFailed",s);m("routeLoading",Object.assign({},s));const l=r[t].component;if($!=l){l.loading?(n(0,i=l.loading),$=l,n(1,c=l.loadingParams),n(2,u={}),m("routeLoaded",Object.assign({},s,{component:i,name:i.name}))):(n(0,i=null),$=null);const t=await l();if(e!=f)return;n(0,i=t&&t.default||t),$=l}return a&&"object"==typeof a&&Object.keys(a).length?n(1,c=a):n(1,c=null),n(2,u=r[t].props),void m("routeLoaded",Object.assign({},s,{component:i,name:i.name}))}n(0,i=null),$=null})),e.$$set=e=>{"routes"in e&&n(3,a=e.routes),"prefix"in e&&n(4,s=e.prefix),"restoreScrollState"in e&&n(5,l=e.restoreScrollState)},e.$$.update=()=>{32&e.$$.dirty&&(history.scrollRestoration=l?"manual":"auto")},[i,c,u,a,s,l,function(t){M(e,t)},function(t){M(e,t)}]}fe(ve,(e=>e.location)),fe(ve,(e=>e.querystring));class Ce extends ue{constructor(e){super(),ce(this,e,ke,he,o,{routes:3,prefix:4,restoreScrollState:5})}}const Ne=e=>({}),Be=e=>({}),Fe=e=>({}),Te=e=>({}),Ae=e=>({}),Se=e=>({}),Le=e=>({}),Pe=e=>({}),ze=e=>({}),Ee=e=>({}),je=e=>({}),_e=e=>({}),Me=e=>({}),He=e=>({class:"card-media"}),qe=e=>({}),Oe=e=>({class:"card-header"});function De(e){let t,n,a,s,l,o,r=e[3].header&&Ge(e),i=e[3].media&&Re(e);const u=e[7].default,m=c(u,e,e[6],null);let g=e[3].content&&Ve(e),h=e[3].footer&&Ue(e);return{c(){t=x("div"),r&&r.c(),n=w(),i&&i.c(),a=w(),m&&m.c(),s=w(),g&&g.c(),l=w(),h&&h.c(),C(t,"class",e[2]),C(t,"style",e[1])},m(e,c){$(e,t,c),r&&r.m(t,null),f(t,n),i&&i.m(t,null),f(t,a),m&&m.m(t,null),f(t,s),g&&g.m(t,null),f(t,l),h&&h.m(t,null),o=!0},p(e,s){e[3].header?r?(r.p(e,s),8&s&&te(r,1)):(r=Ge(e),r.c(),te(r,1),r.m(t,n)):r&&(Q(),ne(r,1,1,(()=>{r=null})),ee()),e[3].media?i?(i.p(e,s),8&s&&te(i,1)):(i=Re(e),i.c(),te(i,1),i.m(t,a)):i&&(Q(),ne(i,1,1,(()=>{i=null})),ee()),m&&m.p&&64&s&&d(m,u,e,e[6],s,null,null),e[3].content?g?(g.p(e,s),8&s&&te(g,1)):(g=Ve(e),g.c(),te(g,1),g.m(t,l)):g&&(Q(),ne(g,1,1,(()=>{g=null})),ee()),e[3].footer?h?(h.p(e,s),8&s&&te(h,1)):(h=Ue(e),h.c(),te(h,1),h.m(t,null)):h&&(Q(),ne(h,1,1,(()=>{h=null})),ee()),(!o||4&s)&&C(t,"class",e[2]),(!o||2&s)&&C(t,"style",e[1])},i(e){o||(te(r),te(i),te(m,e),te(g),te(h),o=!0)},o(e){ne(r),ne(i),ne(m,e),ne(g),ne(h),o=!1},d(e){e&&p(t),r&&r.d(),i&&i.d(),m&&m.d(e),g&&g.d(),h&&h.d()}}}function Ie(e){let t,n,a,s,l,o,r=e[3].header&&We(e),i=e[3].media&&Ye(e);const u=e[7].default,m=c(u,e,e[6],null);let g=e[3].content&&Ze(e),h=e[3].footer&&Xe(e);return{c(){t=x("a"),r&&r.c(),n=w(),i&&i.c(),a=w(),m&&m.c(),s=w(),g&&g.c(),l=w(),h&&h.c(),C(t,"href",e[0]),C(t,"class",e[2]),C(t,"style",e[1])},m(e,c){$(e,t,c),r&&r.m(t,null),f(t,n),i&&i.m(t,null),f(t,a),m&&m.m(t,null),f(t,s),g&&g.m(t,null),f(t,l),h&&h.m(t,null),o=!0},p(e,s){e[3].header?r?(r.p(e,s),8&s&&te(r,1)):(r=We(e),r.c(),te(r,1),r.m(t,n)):r&&(Q(),ne(r,1,1,(()=>{r=null})),ee()),e[3].media?i?(i.p(e,s),8&s&&te(i,1)):(i=Ye(e),i.c(),te(i,1),i.m(t,a)):i&&(Q(),ne(i,1,1,(()=>{i=null})),ee()),m&&m.p&&64&s&&d(m,u,e,e[6],s,null,null),e[3].content?g?(g.p(e,s),8&s&&te(g,1)):(g=Ze(e),g.c(),te(g,1),g.m(t,l)):g&&(Q(),ne(g,1,1,(()=>{g=null})),ee()),e[3].footer?h?(h.p(e,s),8&s&&te(h,1)):(h=Xe(e),h.c(),te(h,1),h.m(t,null)):h&&(Q(),ne(h,1,1,(()=>{h=null})),ee()),(!o||1&s)&&C(t,"href",e[0]),(!o||4&s)&&C(t,"class",e[2]),(!o||2&s)&&C(t,"style",e[1])},i(e){o||(te(r),te(i),te(m,e),te(g),te(h),o=!0)},o(e){ne(r),ne(i),ne(m,e),ne(g),ne(h),o=!1},d(e){e&&p(t),r&&r.d(),i&&i.d(),m&&m.d(e),g&&g.d(),h&&h.d()}}}function Ge(e){let t,n;const a=e[7].header,s=c(a,e,e[6],Pe);return{c(){t=x("div"),s&&s.c(),C(t,"class","card-header")},m(e,a){$(e,t,a),s&&s.m(t,null),n=!0},p(e,t){s&&s.p&&64&t&&d(s,a,e,e[6],t,Le,Pe)},i(e){n||(te(s,e),n=!0)},o(e){ne(s,e),n=!1},d(e){e&&p(t),s&&s.d(e)}}}function Re(e){let t,n;const a=e[7].media,s=c(a,e,e[6],Se);return{c(){t=x("div"),s&&s.c(),C(t,"class","card-media")},m(e,a){$(e,t,a),s&&s.m(t,null),n=!0},p(e,t){s&&s.p&&64&t&&d(s,a,e,e[6],t,Ae,Se)},i(e){n||(te(s,e),n=!0)},o(e){ne(s,e),n=!1},d(e){e&&p(t),s&&s.d(e)}}}function Ve(e){let t,n;const a=e[7].content,s=c(a,e,e[6],Te);return{c(){t=x("div"),s&&s.c(),C(t,"class","card-content")},m(e,a){$(e,t,a),s&&s.m(t,null),n=!0},p(e,t){s&&s.p&&64&t&&d(s,a,e,e[6],t,Fe,Te)},i(e){n||(te(s,e),n=!0)},o(e){ne(s,e),n=!1},d(e){e&&p(t),s&&s.d(e)}}}function Ue(e){let t,n;const a=e[7].footer,s=c(a,e,e[6],Be);return{c(){t=x("div"),s&&s.c(),C(t,"class","card-footer")},m(e,a){$(e,t,a),s&&s.m(t,null),n=!0},p(e,t){s&&s.p&&64&t&&d(s,a,e,e[6],t,Ne,Be)},i(e){n||(te(s,e),n=!0)},o(e){ne(s,e),n=!1},d(e){e&&p(t),s&&s.d(e)}}}function We(e){let t;const n=e[7].header,a=c(n,e,e[6],Oe);return{c(){a&&a.c()},m(e,n){a&&a.m(e,n),t=!0},p(e,t){a&&a.p&&64&t&&d(a,n,e,e[6],t,qe,Oe)},i(e){t||(te(a,e),t=!0)},o(e){ne(a,e),t=!1},d(e){a&&a.d(e)}}}function Ye(e){let t;const n=e[7].media,a=c(n,e,e[6],He);return{c(){a&&a.c()},m(e,n){a&&a.m(e,n),t=!0},p(e,t){a&&a.p&&64&t&&d(a,n,e,e[6],t,Me,He)},i(e){t||(te(a,e),t=!0)},o(e){ne(a,e),t=!1},d(e){a&&a.d(e)}}}function Ze(e){let t,n;const a=e[7].content,s=c(a,e,e[6],_e);return{c(){t=x("div"),s&&s.c(),C(t,"class","card-content")},m(e,a){$(e,t,a),s&&s.m(t,null),n=!0},p(e,t){s&&s.p&&64&t&&d(s,a,e,e[6],t,je,_e)},i(e){n||(te(s,e),n=!0)},o(e){ne(s,e),n=!1},d(e){e&&p(t),s&&s.d(e)}}}function Xe(e){let t,n;const a=e[7].footer,s=c(a,e,e[6],Ee);return{c(){t=x("div"),s&&s.c(),C(t,"class","card-footer")},m(e,a){$(e,t,a),s&&s.m(t,null),n=!0},p(e,t){s&&s.p&&64&t&&d(s,a,e,e[6],t,ze,Ee)},i(e){n||(te(s,e),n=!0)},o(e){ne(s,e),n=!1},d(e){e&&p(t),s&&s.d(e)}}}function Je(e){let t,n,a,s;const l=[Ie,De],o=[];function r(e,t){return e[0]?0:1}return t=r(e),n=o[t]=l[t](e),{c(){n.c(),a=y()},m(e,n){o[t].m(e,n),$(e,a,n),s=!0},p(e,[s]){let i=t;t=r(e),t===i?o[t].p(e,s):(Q(),ne(o[i],1,1,(()=>{o[i]=null})),ee(),n=o[t],n?n.p(e,s):(n=o[t]=l[t](e),n.c()),te(n,1),n.m(a.parentNode,a))},i(e){s||(te(n),s=!0)},o(e){ne(n),s=!1},d(e){o[t].d(e),e&&p(a)}}}function Ke(e,t,n){let{$$slots:a={},$$scope:s}=t;const l=function(e){const t={};for(const n in e)t[n]=!0;return t}(a);let o="card",{className:r}=t,{href:i}=t,{style:c}=t,{type:u}=t;switch(u){case"mode":o="card-mode";break;case"small-media":o=`${o} card--small-media`;break;case"small-media--reverse":o=`${o} card--small-media card--small-media--reverse`}return r&&(o=`${r} ${o}`),e.$$set=e=>{"className"in e&&n(4,r=e.className),"href"in e&&n(0,i=e.href),"style"in e&&n(1,c=e.style),"type"in e&&n(5,u=e.type),"$$scope"in e&&n(6,s=e.$$scope)},[i,c,o,l,r,u,s,a]}class Qe extends ue{constructor(e){super(),ce(this,e,Ke,Je,o,{className:4,href:0,style:1,type:5})}}function et(e){let t;return{c(){t=x("div"),t.innerHTML='<h2 class="color--graa1">Components</h2> \n            <i class="home-section-icon fas fa-cubes svelte-112rkb7"></i>',C(t,"class","flex-item flex-item--center text-align--center")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function tt(e){let t;return{c(){t=x("div"),t.innerHTML='<h2 class="color--graa1">Utilites</h2> \n            <i class="home-section-icon fab fa-connectdevelop svelte-112rkb7"></i>',C(t,"class","flex-item flex-item--center text-align--center")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function nt(e){let t;return{c(){t=x("div"),t.innerHTML='<h2 class="color--graa1">Colors</h2> \n            <i class="home-section-icon fas fa-palette svelte-112rkb7"></i>',C(t,"class","flex-item flex-item--center text-align--center")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function at(e){let t,n,a,s,l,o,r,i,c,u,d,m,g,h,v,b,y,k,N;return d=new Qe({props:{className:"padding-m",href:e[0],$$slots:{default:[et]},$$scope:{ctx:e}}}),h=new Qe({props:{className:"padding-m",href:e[1],$$slots:{default:[tt]},$$scope:{ctx:e}}}),k=new Qe({props:{className:"padding-m",href:e[2],$$slots:{default:[nt]},$$scope:{ctx:e}}}),{c(){t=x("div"),n=x("div"),a=x("div"),a.innerHTML='<img alt="" src="ekstrabladet.svg" style="height:70px;"/>',s=w(),l=x("div"),l.innerHTML="<h1>Design system</h1>",o=w(),r=x("div"),r.textContent="yarn add @ekstra-bladet/designsystem",i=w(),c=x("div"),u=x("div"),oe(d.$$.fragment),m=w(),g=x("div"),oe(h.$$.fragment),v=w(),b=x("div"),y=x("div"),oe(k.$$.fragment),C(a,"class","flex flex-justify--center"),C(l,"class","flex flex-justify--center  margin-l--b"),C(r,"class","text-align--center margin-m--tb padding-m bg--graa7"),C(u,"class","home-section width-1of1 margin-m svelte-112rkb7"),C(g,"class","home-section width-1of1 margin-m svelte-112rkb7"),C(c,"class","flex"),C(y,"class","home-section width-1of1 margin-m svelte-112rkb7"),C(b,"class","flex"),C(n,"class","grid-width--medium"),C(t,"class","flex flex-justify--around width-1of1")},m(e,p){$(e,t,p),f(t,n),f(n,a),f(n,s),f(n,l),f(n,o),f(n,r),f(n,i),f(n,c),f(c,u),re(d,u,null),f(c,m),f(c,g),re(h,g,null),f(n,v),f(n,b),f(b,y),re(k,y,null),N=!0},p(e,[t]){const n={};1&t&&(n.href=e[0]),8&t&&(n.$$scope={dirty:t,ctx:e}),d.$set(n);const a={};2&t&&(a.href=e[1]),8&t&&(a.$$scope={dirty:t,ctx:e}),h.$set(a);const s={};4&t&&(s.href=e[2]),8&t&&(s.$$scope={dirty:t,ctx:e}),k.$set(s)},i(e){N||(te(d.$$.fragment,e),te(h.$$.fragment,e),te(k.$$.fragment,e),N=!0)},o(e){ne(d.$$.fragment,e),ne(h.$$.fragment,e),ne(k.$$.fragment,e),N=!1},d(e){e&&p(t),ie(d),ie(h),ie(k)}}}function st(e,t,n){let a="#/",s="#/",l="#/";return Kl.forEach((e=>{"#/"===a&&"component"===e.type&&n(0,a=`#${e.link}`),"#/"===s&&"utility"===e.type&&n(1,s=`#${e.link}`),"#/"===l&&"color"===e.type&&n(2,l=`#${e.link}`)})),[a,s,l]}window.Prism&&console.warn("Prism has already been initiated. Please ensure that svelte-prism is imported first."),window.Prism=window.Prism||{},window.Prism.manual=!0;var lt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var ot,rt=(function(e){var t=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof s?new s(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var s,l;switch(n=n||{},a.util.type(t)){case"Object":if(l=a.util.objId(t),n[l])return n[l];for(var o in s={},n[l]=s,t)t.hasOwnProperty(o)&&(s[o]=e(t[o],n));return s;case"Array":return l=a.util.objId(t),n[l]?n[l]:(s=[],n[l]=s,t.forEach((function(t,a){s[a]=e(t,n)})),s);default:return t}},getLanguage:function(e){for(;e&&!t.test(e.className);)e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(a.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}},isActive:function(e,t,n){for(var a="no-"+t;e;){var s=e.classList;if(s.contains(t))return!0;if(s.contains(a))return!1;e=e.parentElement}return!!n}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var s in t)n[s]=t[s];return n},insertBefore:function(e,t,n,s){var l=(s=s||a.languages)[e],o={};for(var r in l)if(l.hasOwnProperty(r)){if(r==t)for(var i in n)n.hasOwnProperty(i)&&(o[i]=n[i]);n.hasOwnProperty(r)||(o[r]=l[r])}var c=s[e];return s[e]=o,a.languages.DFS(a.languages,(function(t,n){n===c&&t!=e&&(this[t]=o)})),o},DFS:function e(t,n,s,l){l=l||{};var o=a.util.objId;for(var r in t)if(t.hasOwnProperty(r)){n.call(t,r,t[r],s||r);var i=t[r],c=a.util.type(i);"Object"!==c||l[o(i)]?"Array"!==c||l[o(i)]||(l[o(i)]=!0,e(i,n,r,l)):(l[o(i)]=!0,e(i,n,null,l))}}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var s={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",s),s.elements=Array.prototype.slice.apply(s.container.querySelectorAll(s.selector)),a.hooks.run("before-all-elements-highlight",s);for(var l,o=0;l=s.elements[o++];)a.highlightElement(l,!0===t,s.callback)},highlightElement:function(n,s,l){var o=a.util.getLanguage(n),r=a.languages[o];n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+o;var i=n.parentElement;i&&"pre"===i.nodeName.toLowerCase()&&(i.className=i.className.replace(t,"").replace(/\s+/g," ")+" language-"+o);var c={element:n,language:o,grammar:r,code:n.textContent};function u(e){c.highlightedCode=e,a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,a.hooks.run("after-highlight",c),a.hooks.run("complete",c),l&&l.call(c.element)}if(a.hooks.run("before-sanity-check",c),!c.code)return a.hooks.run("complete",c),void(l&&l.call(c.element));if(a.hooks.run("before-highlight",c),c.grammar)if(s&&e.Worker){var d=new Worker(a.filename);d.onmessage=function(e){u(e.data)},d.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else u(a.highlight(c.code,c.grammar,c.language));else u(a.util.encode(c.code))},highlight:function(e,t,n){var l={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",l),l.tokens=a.tokenize(l.code,l.grammar),a.hooks.run("after-tokenize",l),s.stringify(a.util.encode(l.tokens),l.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var a in n)t[a]=n[a];delete t.rest}var s=new r;return i(s,s.head,e),o(e,s,t,s.head,0),function(e){for(var t=[],n=e.head.next;n!==e.tail;)t.push(n.value),n=n.next;return t}(s)},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var s,l=0;s=n[l++];)s(t)}},Token:s};function s(e,t,n,a){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length}function l(e,t,n,a){e.lastIndex=t;var s=e.exec(n);if(s&&a&&s[1]){var l=s[1].length;s.index+=l,s[0]=s[0].slice(l)}return s}function o(e,t,n,r,u,d){for(var m in n)if(n.hasOwnProperty(m)&&n[m]){var g=n[m];g=Array.isArray(g)?g:[g];for(var f=0;f<g.length;++f){if(d&&d.cause==m+","+f)return;var $=g[f],p=$.inside,h=!!$.lookbehind,x=!!$.greedy,v=$.alias;if(x&&!$.pattern.global){var b=$.pattern.toString().match(/[imsuy]*$/)[0];$.pattern=RegExp($.pattern.source,b+"g")}for(var w=$.pattern||$,y=r.next,k=u;y!==t.tail&&!(d&&k>=d.reach);k+=y.value.length,y=y.next){var C=y.value;if(t.length>e.length)return;if(!(C instanceof s)){var N,B=1;if(x){if(!(N=l(w,k,e,h)))break;var F=N.index,T=N.index+N[0].length,A=k;for(A+=y.value.length;F>=A;)A+=(y=y.next).value.length;if(k=A-=y.value.length,y.value instanceof s)continue;for(var S=y;S!==t.tail&&(A<T||"string"==typeof S.value);S=S.next)B++,A+=S.value.length;B--,C=e.slice(k,A),N.index-=k}else if(!(N=l(w,0,C,h)))continue;F=N.index;var L=N[0],P=C.slice(0,F),z=C.slice(F+L.length),E=k+C.length;d&&E>d.reach&&(d.reach=E);var j=y.prev;P&&(j=i(t,j,P),k+=P.length),c(t,j,B),y=i(t,j,new s(m,p?a.tokenize(L,p):L,v,L)),z&&i(t,y,z),B>1&&o(e,t,n,y.prev,k,{cause:m+","+f,reach:E})}}}}}function r(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function i(e,t,n){var a=t.next,s={value:n,prev:t,next:a};return t.next=s,a.prev=s,e.length++,s}function c(e,t,n){for(var a=t.next,s=0;s<n&&a!==e.tail;s++)a=a.next;t.next=a,a.prev=t,e.length-=s}if(e.Prism=a,s.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var s="";return t.forEach((function(t){s+=e(t,n)})),s}var l={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},o=t.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(l.classes,o):l.classes.push(o)),a.hooks.run("wrap",l);var r="";for(var i in l.attributes)r+=" "+i+'="'+(l.attributes[i]||"").replace(/"/g,"&quot;")+'"';return"<"+l.tag+' class="'+l.classes.join(" ")+'"'+r+">"+l.content+"</"+l.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),s=n.language,l=n.code,o=n.immediateClose;e.postMessage(a.highlight(l,a.languages[s],s)),o&&e.close()}),!1),a):a;var u=a.util.currentScript();function d(){a.manual||a.highlightAll()}if(u&&(a.filename=u.src,u.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var m=document.readyState;"loading"===m||"interactive"===m&&u&&u.defer?document.addEventListener("DOMContentLoaded",d):window.requestAnimationFrame?window.requestAnimationFrame(d):window.setTimeout(d,16)}return a}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});
/**
>>>>>>> 1538544dac43492ad6e8d8398205a26e7e940ae5
     * Prism: Lightweight, robust, elegant syntax highlighting
     *
     * @license MIT <https://opensource.org/licenses/MIT>
     * @author Lea Verou <https://lea.verou.me>
     * @namespace
     * @public
     */e.exports&&(e.exports=t),void 0!==lt&&(lt.Prism=t),t.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/,name:/[^\s<>'"]+/}},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(e,n){var a={};a["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[n]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};s["language-"+n]={pattern:/[\s\S]+/,inside:t.languages[n]};var l={};l[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:s},t.languages.insertBefore("markup","cdata",l)}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:RegExp("[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,lookbehind:!0,inside:{"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{style:{pattern:/(["'])[\s\S]+(?=["']$)/,lookbehind:!0,alias:"language-css",inside:e.languages.css},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},"attr-name":/^style/i}}},n.tag))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-flags":/[a-z]+$/,"regex-delimiter":/^\/|\/$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}}}),t.languages.markup&&t.languages.markup.tag.addInlined("script","javascript"),t.languages.js=t.languages.javascript,function(){if("undefined"!=typeof self&&self.Prism&&self.document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e=window.Prism,t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},n="data-src-status",a="loading",s="loaded",l='pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])',o=/\blang(?:uage)?-([\w-]+)\b/i;e.hooks.add("before-highlightall",(function(e){e.selector+=", "+l})),e.hooks.add("before-sanity-check",(function(o){var r=o.element;if(r.matches(l)){o.code="",r.setAttribute(n,a);var c=r.appendChild(document.createElement("CODE"));c.textContent="Loading…";var u=r.getAttribute("data-src"),d=o.language;if("none"===d){var m=(/\.(\w+)$/.exec(u)||[,"none"])[1];d=t[m]||m}i(c,d),i(r,d);var g=e.plugins.autoloader;g&&g.loadLanguages(d);var f=new XMLHttpRequest;f.open("GET",u,!0),f.onreadystatechange=function(){var t,a;4==f.readyState&&(f.status<400&&f.responseText?(r.setAttribute(n,s),c.textContent=f.responseText,e.highlightElement(c)):(r.setAttribute(n,"failed"),f.status>=400?c.textContent=(t=f.status,a=f.statusText,"✖ Error "+t+" while fetching file: "+a):c.textContent="✖ Error: File does not exist or is empty"))},f.send(null)}})),e.plugins.fileHighlight={highlight:function(t){for(var n,a=(t||document).querySelectorAll(l),s=0;n=a[s++];)e.highlightElement(n)}};var r=!1;e.fileHighlight=function(){r||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),r=!0),e.plugins.fileHighlight.highlight.apply(this,arguments)}}function i(e,t){var n=e.className;n=n.replace(o," ")+" language-"+t,e.className=n.replace(/\s+/g," ").trim()}}()}(ot={exports:{}},ot.exports),ot.exports);const it="(if|else if|await|then|catch|each|html|debug)";function ct(e){let t,n;return{c(){n=y(),t=new F(n)},m(a,s){t.m(e[2],a,s),$(a,n,s)},p(e,n){4&n&&t.p(e[2])},d(e){e&&p(n),e&&t.d()}}}function ut(e){let t;return{c(){t=b(e[2])},m(e,n){$(e,t,n)},p(e,n){4&n&&N(t,e[2])},d(e){e&&p(t)}}}function dt(e){let t,n,a,s,l,o,r;const i=e[6].default,u=c(i,e,e[5],null);function m(e,t){return"none"===e[0]?ut:ct}let g=m(e),h=g(e);return{c(){t=x("code"),u&&u.c(),n=w(),a=x("pre"),s=x("code"),h.c(),B(t,"display","none"),C(s,"class",l="language-"+e[0]),C(a,"class",o="language-"+e[0]),C(a,"command-line",""),C(a,"data-output","2-17")},m(l,o){$(l,t,o),u&&u.m(t,null),e[7](t),$(l,n,o),$(l,a,o),f(a,s),h.m(s,null),r=!0},p(e,[t]){u&&u.p&&32&t&&d(u,i,e,e[5],t,null,null),g===(g=m(e))&&h?h.p(e,t):(h.d(1),h=g(e),h&&(h.c(),h.m(s,null))),(!r||1&t&&l!==(l="language-"+e[0]))&&C(s,"class",l),(!r||1&t&&o!==(o="language-"+e[0]))&&C(a,"class",o)},i(e){r||(te(u,e),r=!0)},o(e){ne(u,e),r=!1},d(s){s&&p(t),u&&u.d(s),e[7](null),s&&p(n),s&&p(a),h.d()}}}Prism.languages.svelte=Prism.languages.extend("markup",{each:{pattern:new RegExp("{[#/]each(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}"),inside:{"language-javascript":[{pattern:/(as[\s\S]*)\([\s\S]*\)(?=\s*\})/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(as[\s]*)[\s\S]*(?=\s*)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(#each[\s]*)[\s\S]*(?=as)/,lookbehind:!0,inside:Prism.languages.javascript}],keyword:/[#/]each|as/,punctuation:/{|}/}},block:{pattern:new RegExp("{[#:/@]/s"+it+"(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}"),inside:{punctuation:/^{|}$/,keyword:[new RegExp("[#:/@]"+it+"( )*"),/as/,/then/],"language-javascript":{pattern:/[\s\S]*/,inside:Prism.languages.javascript}}},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?:"[^"]*"|'[^']*'|{[\s\S]+?}(?=[\s/>])))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"language-javascript":{pattern:/\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,inside:Prism.languages.javascript},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}],"language-javascript":{pattern:/{[\s\S]+}/,inside:Prism.languages.javascript}}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},"language-javascript":{pattern:/\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,lookbehind:!0,inside:Prism.languages.javascript}}),Prism.languages.svelte.tag.inside["attr-value"].inside.entity=Prism.languages.svelte.entity,Prism.hooks.add("wrap",(e=>{"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(Prism.languages.svelte.tag,"addInlined",{value:function(e,t){const n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;const a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};a["language-"+t]={pattern:/[\s\S]+/,inside:Prism.languages[t]};const s={};s[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:a},Prism.languages.insertBefore("svelte","cdata",s)}}),Prism.languages.svelte.tag.addInlined("style","css"),Prism.languages.svelte.tag.addInlined("script","javascript");const mt=rt;rt.highlightElement;const gt=e=>e;function ft(e,n,a){let s,l,{$$slots:o={},$$scope:r}=n,{language:i="javascript"}=n,{source:c=""}=n,{transform:u=(e=>e)}=n;return e.$$set=e=>{a(9,n=t(t({},n),m(e))),"language"in e&&a(0,i=e.language),"source"in e&&a(3,c=e.source),"transform"in e&&a(4,u=e.transform),"$$scope"in e&&a(5,r=e.$$scope)},e.$$.update=()=>{n&&(c||s)&&function(){const e=mt.languages[i];let t=c||s.textContent;t=gt(t),t=u(t),a(2,l="none"===i?t:mt.highlight(t,e,i))}()},n=m(n),[i,s,l,c,u,r,o,function(e){q[e?"unshift":"push"]((()=>{s=e,a(1,s)}))}]}class $t extends ue{constructor(e){super(),ce(this,e,ft,dt,o,{language:0,source:3,transform:4})}}function pt(e,t,n){const a=e.slice();return a[4]=t[n],a}function ht(e){let t,n,a,s,l,o,r,i,c,u,d,m=e[4].title+"",g=e[4].content+"";return{c(){t=x("div"),n=x("div"),a=x("span"),s=b(m),l=w(),o=x("i"),r=w(),i=x("div"),c=x("span"),u=b(g),d=w(),C(a,"class","fontweight-normal fontsize-large"),C(o,"class","fas fa-chevron-down"),C(n,"class","accordion-header flex flex-justify--between padding-m"),C(i,"class","accordion-body padding-m padding-l--rl fontsize-small"),C(t,"class","accordion-tab margin-s--b")},m(e,m){$(e,t,m),f(t,n),f(n,a),f(a,s),f(n,l),f(n,o),f(t,r),f(t,i),f(i,c),f(c,u),f(t,d)},p(e,t){2&t&&m!==(m=e[4].title+"")&&N(s,m),2&t&&g!==(g=e[4].content+"")&&N(u,g)},d(e){e&&p(t)}}}function xt(t){let n,a=t[1],s=[];for(let e=0;e<a.length;e+=1)s[e]=ht(pt(t,a,e));return{c(){n=x("div");for(let e=0;e<s.length;e+=1)s[e].c();C(n,"data-theme",t[0]),C(n,"class","accordion card-mode padding-l ff-secondary width-1of1")},m(e,a){$(e,n,a);for(let e=0;e<s.length;e+=1)s[e].m(n,null);t[3](n)},p(e,[t]){if(2&t){let l;for(a=e[1],l=0;l<a.length;l+=1){const o=pt(e,a,l);s[l]?s[l].p(o,t):(s[l]=ht(o),s[l].c(),s[l].m(n,null))}for(;l<s.length;l+=1)s[l].d(1);s.length=a.length}1&t&&C(n,"data-theme",e[0])},i:e,o:e,d(e){e&&p(n),h(s,e),t[3](null)}}}function vt(e,t,n){let a,{dataTheme:s}=t,{tabs:l}=t;return L((()=>{const e=a.querySelectorAll(".accordion-tab");for(const t of e){t.querySelector(".accordion-header").addEventListener("click",(()=>{for(const n of e)n!==t&&n.classList.remove("accordion-expanded");t.classList.toggle("accordion-expanded")}))}})),e.$$set=e=>{"dataTheme"in e&&n(0,s=e.dataTheme),"tabs"in e&&n(1,l=e.tabs)},[s,l,a,function(e){q[e?"unshift":"push"]((()=>{a=e,n(2,a)}))}]}class bt extends ue{constructor(e){super(),ce(this,e,vt,xt,o,{dataTheme:0,tabs:1})}}function wt(t){let n,a,s,l,o,r,i,c,u,d,m,g,h,v,b,y,k,N,B,F,T,A,S;return l=new $t({props:{language:"js",source:"\n    import Accordion from '@ekstra-bladet/designsystem/src/_components/accordion';\n\n    // Example tabs\n    let tabs = [\n      { title: 'Tab 1', content: 'content 1' },\n      { title: 'Tab 2', content: 'content 2' },\n    ];\n    "}}),c=new bt({props:{tabs:t[0]}}),d=new $t({props:{language:"html",source:"<Accordion {tabs} />"}}),v=new bt({props:{dataTheme:"lightmode",tabs:t[0]}}),y=new $t({props:{language:"html",source:'<Accordion dataTheme="lightmode" {tabs} />'}}),F=new bt({props:{dataTheme:"darkmode",tabs:t[0]}}),A=new $t({props:{language:"html",source:'<Accordion dataTheme="darkmode" {tabs} />'}}),{c(){n=x("div"),a=x("h1"),a.textContent="Accordion",s=w(),oe(l.$$.fragment),o=w(),r=x("h2"),r.textContent="Default accordion",i=w(),oe(c.$$.fragment),u=w(),oe(d.$$.fragment),m=w(),g=x("h2"),g.textContent="Accordion with lightmode",h=w(),oe(v.$$.fragment),b=w(),oe(y.$$.fragment),k=w(),N=x("h2"),N.textContent="Accordion with darkmode",B=w(),oe(F.$$.fragment),T=w(),oe(A.$$.fragment),C(a,"class","color--eb"),C(n,"class","grid-width--small")},m(e,t){$(e,n,t),f(n,a),f(n,s),re(l,n,null),f(n,o),f(n,r),f(n,i),re(c,n,null),f(n,u),re(d,n,null),f(n,m),f(n,g),f(n,h),re(v,n,null),f(n,b),re(y,n,null),f(n,k),f(n,N),f(n,B),re(F,n,null),f(n,T),re(A,n,null),S=!0},p:e,i(e){S||(te(l.$$.fragment,e),te(c.$$.fragment,e),te(d.$$.fragment,e),te(v.$$.fragment,e),te(y.$$.fragment,e),te(F.$$.fragment,e),te(A.$$.fragment,e),S=!0)},o(e){ne(l.$$.fragment,e),ne(c.$$.fragment,e),ne(d.$$.fragment,e),ne(v.$$.fragment,e),ne(y.$$.fragment,e),ne(F.$$.fragment,e),ne(A.$$.fragment,e),S=!1},d(e){e&&p(n),ie(l),ie(c),ie(d),ie(v),ie(y),ie(F),ie(A)}}}function yt(e){return[[{title:"Tab 1",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis porttitor augue sed commodo. Etiam ornare arcu quis turpis pulvinar, ullamcorper ullamcorper nunc ullamcorper. Maecenas porttitor, erat in feugiat faucibus, velit sem luctus leo, nec congue tellus erat sit amet purus."},{title:"Tab 2",content:"Nam condimentum, dui sit amet convallis finibus, tellus mi molestie lorem, sed ornare mauris ex nec lectus. Pellentesque gravida molestie felis sit amet interdum."},{title:"Tab 3",content:"uspendisse at tincidunt eros, vel convallis nisi. Nam pulvinar viverra augue. Vivamus vitae ligula sit amet tellus interdum dictum. Donec accumsan facilisis urna, condimentum mollis diam gravida ac. Donec sed malesuada odio. "}]]}const kt=e=>({}),Ct=e=>({slot:"content"});function Nt(e){let t,n;return{c(){t=x("div"),n=x("div"),C(n,"class","card-image bg--graa4"),C(n,"style",e[9]),C(t,"class","card-media")},m(e,a){$(e,t,a),f(t,n)},p(e,t){512&t&&C(n,"style",e[9])},d(e){e&&p(t)}}}function Bt(e){let t,n,a,s,l;return{c(){t=x("div"),n=x("img"),C(n,"alt",e[0]),C(n,"class","card-image"),n.src!==(a=e[3].src)&&C(n,"src",a),C(n,"height",s=e[3].height),C(n,"width",l=e[3].width),C(t,"class","card-media")},m(e,a){$(e,t,a),f(t,n)},p(e,t){1&t&&C(n,"alt",e[0]),8&t&&n.src!==(a=e[3].src)&&C(n,"src",a),8&t&&s!==(s=e[3].height)&&C(n,"height",s),8&t&&l!==(l=e[3].width)&&C(n,"width",l)},d(e){e&&p(t)}}}function Ft(e){let t,n,a,s,l=e[4]&&Tt(e),o=e[4]&&e[6]&&At(),r=e[6]&&St(e);return{c(){t=x("p"),n=x("small"),l&&l.c(),a=w(),o&&o.c(),s=w(),r&&r.c(),C(t,"class","card-meta color--graa3")},m(e,i){$(e,t,i),f(t,n),l&&l.m(n,null),f(n,a),o&&o.m(n,null),f(n,s),r&&r.m(n,null)},p(e,t){e[4]?l?l.p(e,t):(l=Tt(e),l.c(),l.m(n,a)):l&&(l.d(1),l=null),e[4]&&e[6]?o||(o=At(),o.c(),o.m(n,s)):o&&(o.d(1),o=null),e[6]?r?r.p(e,t):(r=St(e),r.c(),r.m(n,null)):r&&(r.d(1),r=null)},d(e){e&&p(t),l&&l.d(),o&&o.d(),r&&r.d()}}}function Tt(e){let t,n;return{c(){t=x("span"),n=b(e[4]),C(t,"class","color--sport")},m(e,a){$(e,t,a),f(t,n)},p(e,t){16&t&&N(n,e[4])},d(e){e&&p(t)}}}function At(e){let t;return{c(){t=b("-")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function St(e){let t;return{c(){t=b(e[6])},m(e,n){$(e,t,n)},p(e,n){64&n&&N(t,e[6])},d(e){e&&p(t)}}}function Lt(e){let t;const n=e[11].default,a=c(n,e,e[12],Ct),s=a||function(e){let t,n,a,s=(e[4]||e[6])&&Ft(e);return{c(){s&&s.c(),t=w(),n=x("h2"),a=b(e[0]),C(n,"class","card-title")},m(e,l){s&&s.m(e,l),$(e,t,l),$(e,n,l),f(n,a)},p(e,n){e[4]||e[6]?s?s.p(e,n):(s=Ft(e),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null),1&n&&N(a,e[0])},d(e){s&&s.d(e),e&&p(t),e&&p(n)}}}(e);return{c(){s&&s.c()},m(e,n){s&&s.m(e,n),t=!0},p(e,t){a?a.p&&4096&t&&d(a,n,e,e[12],t,kt,Ct):s&&s.p&&81&t&&s.p(e,t)},i(e){t||(te(s,e),t=!0)},o(e){ne(s,e),t=!1},d(e){s&&s.d(e)}}}function Pt(t){let n,a,s=t[2]&&Nt(t),l=t[3]&&Bt(t);return{c(){s&&s.c(),n=w(),l&&l.c(),a=w()},m(e,t){s&&s.m(e,t),$(e,n,t),l&&l.m(e,t),$(e,a,t)},p(e,t){e[2]?s?s.p(e,t):(s=Nt(e),s.c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null),e[3]?l?l.p(e,t):(l=Bt(e),l.c(),l.m(a.parentNode,a)):l&&(l.d(1),l=null)},i:e,o:e,d(e){s&&s.d(e),e&&p(n),l&&l.d(e),e&&p(a)}}}function zt(e){let t,n;return t=new Qe({props:{href:e[1],className:e[8],style:e[5],type:e[7],$$slots:{default:[Pt],content:[Lt]},$$scope:{ctx:e}}}),{c(){oe(t.$$.fragment)},m(e,a){re(t,e,a),n=!0},p(e,[n]){const a={};2&n&&(a.href=e[1]),256&n&&(a.className=e[8]),32&n&&(a.style=e[5]),128&n&&(a.type=e[7]),4701&n&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){n||(te(t.$$.fragment,e),n=!0)},o(e){ne(t.$$.fragment,e),n=!1},d(e){ie(t,e)}}}function Et(e,t,n){let{$$slots:a={},$$scope:s}=t,{className:l}=t,{href:o}=t,{loading:r=!1}=t,{media:i}=t,{section:c}=t,{style:u}=t,{timestamp:d}=t,{title:m}=t,{type:g}=t,f="margin-m";l&&(f=`${l} ${f}`);let $="padding-top: 56.25%; width: 100%;";if(r)switch(f=`${f} animation-fogwave`,m="Loading",g){case"small-media":case"small-media--reverse":$="width: 200px;height: 115px;"}return e.$$set=e=>{"className"in e&&n(10,l=e.className),"href"in e&&n(1,o=e.href),"loading"in e&&n(2,r=e.loading),"media"in e&&n(3,i=e.media),"section"in e&&n(4,c=e.section),"style"in e&&n(5,u=e.style),"timestamp"in e&&n(6,d=e.timestamp),"title"in e&&n(0,m=e.title),"type"in e&&n(7,g=e.type),"$$scope"in e&&n(12,s=e.$$scope)},[m,o,r,i,c,u,d,g,f,$,l,a,s]}class jt extends ue{constructor(e){super(),ce(this,e,Et,zt,o,{className:10,href:1,loading:2,media:3,section:4,style:5,timestamp:6,title:0,type:7})}}function _t(e){let n,a,s,l,o,r,i,c,u,d,m,g,h,v,b,y,k,N,B,F,T,A,S,L,P,z,E,j,_,M,H,q,O,D,I,G,R,V,U,W,Y,Z,X,J,K,Q,ee,le,ce;l=new $t({props:{language:"js",source:"\n    import ArticleCard from '@ekstra-bladet/designsystem/src/_components/articlecard';\n    "}}),c=new $t({props:{language:"js",source:"\n    interface IMediaOptions {\n      className: string;\n      height: string;\n      src: string;\n      width: string;\n    }\n\n    export let className: string = undefined;\n    export let href: string = undefined;\n    export let media: Partial<IMediaOptions> = undefined;\n    export let section: string = undefined;\n    export let style: string = undefined;\n    export let timestamp: string = undefined;\n    export let title: string;\n    export let type: string = undefined;\n  "}});const ue=[e[0]];let de={};for(let e=0;e<ue.length;e+=1)de=t(de,ue[e]);d=new jt({props:de}),g=new $t({props:{language:"js",source:"\n    let article = {\n      href: '#',\n      media: {\n        src: 'https://via.placeholder.com/610x343&text=610x343',\n      },\n      section: 'Sport',\n      timestamp: '2 timer siden',\n      title: 'List element',\n    };\n    "}}),v=new jt({props:{href:e[0].href,media:{src:"https://via.placeholder.com/610x343&text=610x343"},section:e[0].section,timestamp:e[0].timestamp,title:e[0].title}}),y=new $t({props:{language:"html",source:'\n    <ArticleCard href="{article.href}" media="{{src:\'https://via.placeholder.com/610x343&text=610x343\'}}" section="{article.section}" timestamp="{article.timestamp}" title="{article.title}" />\n    <ArticleCard {...article} />\n  '}});const me=[e[0],{title:"Small media card list element"},{type:"small-media"}];let ge={};for(let e=0;e<me.length;e+=1)ge=t(ge,me[e]);N=new jt({props:ge}),F=new $t({props:{language:"html",source:'\n    <ArticleCard {...article} title="Small media card list element" type="small-media" />\n  '}});const fe=[e[0],{media:{height:"115",src:"https://via.placeholder.com/200x112&text=200x112",width:"200"}},{title:"Small media reverse card list element"},{type:"small-media--reverse"}];let $e={};for(let e=0;e<fe.length;e+=1)$e=t($e,fe[e]);A=new jt({props:$e}),L=new $t({props:{language:"html",source:"\n    <ArticleCard {...article} media=\"{{\n      height: '115',\n      src: 'https://via.placeholder.com/200x112&text=200x112',\n      width: '200',\n    }}\" title=\"Small media reverse card list element\" type=\"small-media--reverse\" />\n  "}});const pe=[e[0]];let he={};for(let e=0;e<pe.length;e+=1)he=t(he,pe[e]);E=new jt({props:he});const xe=[e[0]];let ve={};for(let e=0;e<xe.length;e+=1)ve=t(ve,xe[e]);_=new jt({props:ve});const be=[e[0]];let we={};for(let e=0;e<be.length;e+=1)we=t(we,be[e]);q=new jt({props:we});const ye=[e[0]];let ke={};for(let e=0;e<ye.length;e+=1)ke=t(ke,ye[e]);D=new jt({props:ke});const Ce=[e[0]];let Ne={};for(let e=0;e<Ce.length;e+=1)Ne=t(Ne,Ce[e]);return G=new jt({props:Ne}),W=new jt({props:{loading:!0}}),Z=new jt({props:{loading:!0,type:"small-media"}}),J=new jt({props:{loading:!0,type:"small-media--reverse"}}),Q=new jt({props:{loading:!0,type:"mode"}}),le=new $t({props:{language:"html",source:'\n      <ArticleCard loading={true} />\n      <ArticleCard loading={true} type="small-media" />\n      <ArticleCard loading={true} type="small-media--reverse" />\n      <ArticleCard loading={true} type="mode" />\n    '}}),{c(){n=x("div"),a=x("h1"),a.textContent="ArticleCard",s=w(),oe(l.$$.fragment),o=w(),r=x("p"),r.textContent="ArticleCard attributer",i=w(),oe(c.$$.fragment),u=w(),oe(d.$$.fragment),m=w(),oe(g.$$.fragment),h=w(),oe(v.$$.fragment),b=w(),oe(y.$$.fragment),k=w(),oe(N.$$.fragment),B=w(),oe(F.$$.fragment),T=w(),oe(A.$$.fragment),S=w(),oe(L.$$.fragment),P=w(),z=x("div"),oe(E.$$.fragment),j=w(),oe(_.$$.fragment),M=w(),H=x("div"),oe(q.$$.fragment),O=w(),oe(D.$$.fragment),I=w(),oe(G.$$.fragment),R=w(),V=x("h2"),V.textContent="Loading placeholder",U=w(),oe(W.$$.fragment),Y=w(),oe(Z.$$.fragment),X=w(),oe(J.$$.fragment),K=w(),oe(Q.$$.fragment),ee=w(),oe(le.$$.fragment),C(a,"class","color--eb"),C(z,"class","flex"),C(H,"class","flex"),C(n,"class","grid-width--small")},m(e,t){$(e,n,t),f(n,a),f(n,s),re(l,n,null),f(n,o),f(n,r),f(n,i),re(c,n,null),f(n,u),re(d,n,null),f(n,m),re(g,n,null),f(n,h),re(v,n,null),f(n,b),re(y,n,null),f(n,k),re(N,n,null),f(n,B),re(F,n,null),f(n,T),re(A,n,null),f(n,S),re(L,n,null),f(n,P),f(n,z),re(E,z,null),f(z,j),re(_,z,null),f(n,M),f(n,H),re(q,H,null),f(H,O),re(D,H,null),f(H,I),re(G,H,null),f(n,R),f(n,V),f(n,U),re(W,n,null),f(n,Y),re(Z,n,null),f(n,X),re(J,n,null),f(n,K),re(Q,n,null),f(n,ee),re(le,n,null),ce=!0},p(e,[t]){const n=1&t?ae(ue,[se(e[0])]):{};d.$set(n);const a=1&t?ae(me,[se(e[0]),me[1],me[2]]):{};N.$set(a);const s=1&t?ae(fe,[se(e[0]),fe[1],fe[2],fe[3]]):{};A.$set(s);const l=1&t?ae(pe,[se(e[0])]):{};E.$set(l);const o=1&t?ae(xe,[se(e[0])]):{};_.$set(o);const r=1&t?ae(be,[se(e[0])]):{};q.$set(r);const i=1&t?ae(ye,[se(e[0])]):{};D.$set(i);const c=1&t?ae(Ce,[se(e[0])]):{};G.$set(c)},i(e){ce||(te(l.$$.fragment,e),te(c.$$.fragment,e),te(d.$$.fragment,e),te(g.$$.fragment,e),te(v.$$.fragment,e),te(y.$$.fragment,e),te(N.$$.fragment,e),te(F.$$.fragment,e),te(A.$$.fragment,e),te(L.$$.fragment,e),te(E.$$.fragment,e),te(_.$$.fragment,e),te(q.$$.fragment,e),te(D.$$.fragment,e),te(G.$$.fragment,e),te(W.$$.fragment,e),te(Z.$$.fragment,e),te(J.$$.fragment,e),te(Q.$$.fragment,e),te(le.$$.fragment,e),ce=!0)},o(e){ne(l.$$.fragment,e),ne(c.$$.fragment,e),ne(d.$$.fragment,e),ne(g.$$.fragment,e),ne(v.$$.fragment,e),ne(y.$$.fragment,e),ne(N.$$.fragment,e),ne(F.$$.fragment,e),ne(A.$$.fragment,e),ne(L.$$.fragment,e),ne(E.$$.fragment,e),ne(_.$$.fragment,e),ne(q.$$.fragment,e),ne(D.$$.fragment,e),ne(G.$$.fragment,e),ne(W.$$.fragment,e),ne(Z.$$.fragment,e),ne(J.$$.fragment,e),ne(Q.$$.fragment,e),ne(le.$$.fragment,e),ce=!1},d(e){e&&p(n),ie(l),ie(c),ie(d),ie(g),ie(v),ie(y),ie(N),ie(F),ie(A),ie(L),ie(E),ie(_),ie(q),ie(D),ie(G),ie(W),ie(Z),ie(J),ie(Q),ie(le)}}}function Mt(e){return[{href:"#",media:{src:"https://via.placeholder.com/610x343&text=610x343"},section:"Sport",timestamp:"2 timer siden",title:"List element"}]}const Ht={Bordeaux:{backgroundColor:"#8a0c36",color:"#fff"},Reddark:{backgroundColor:"#900",color:"#fff"},Red:{backgroundColor:"#bd1118",color:"#fff"},Rose:{backgroundColor:"#dc7095",color:"#fff"},Orangedark:{backgroundColor:"#e38121",color:"#fff"},Orange:{backgroundColor:"#e5ad02",color:"#fff"},Yellow:{backgroundColor:"#fae500",color:"#fff"},Yellowlight:{backgroundColor:"#ff0",color:"#000"},Sand:{backgroundColor:"#cec4a6",color:"#fff"},Greendark:{backgroundColor:"#2f7820",color:"#fff"},Green:{backgroundColor:"#32a237",color:"#fff"},Greenlight:{backgroundColor:"#93b923",color:"#fff"},Lime:{backgroundColor:"#cbfe33",color:"#000"},Purpledark:{backgroundColor:"#650188",color:"#fff"},Bluedark:{backgroundColor:"#12507b",color:"#fff"},Blue:{backgroundColor:"#31769b",color:"#fff"},Bluelight:{backgroundColor:"#4fa8df",color:"#fff"},Sea:{backgroundColor:"#84a8c4",color:"#fff"},Black:{backgroundColor:"#000",color:"#fff"},Graa1:{backgroundColor:"#3c3c3c",color:"#fff"},Graa2:{backgroundColor:"#484848",color:"#fff"},Graa3:{backgroundColor:"#999",color:"#fff"},Graa4:{backgroundColor:"#c8c8c8",color:"#000"},Graa5:{backgroundColor:"#ddd",color:"#000"},Graa6:{backgroundColor:"#e5e5e5",color:"#000"},Graa7:{backgroundColor:"#efefef",color:"#000"},White:{backgroundColor:"#fff",color:"#000"},PastelRed:{backgroundColor:"#db5040",color:"#fff"},PastelDarkred:{backgroundColor:"#954839",color:"#fff"},PastelLightred:{backgroundColor:"#d67e9b",color:"#fff"},PastelGreen:{backgroundColor:"#9fc29c",color:"#fff"},PastelDarkgreen:{backgroundColor:"#91a34f",color:"#fff"},PastelYellow:{backgroundColor:"#d4c564",color:"#fff"},Eb:{backgroundColor:"#bd1118",color:"#fff"},Eb2:{backgroundColor:"#900",color:"#fff"},Breaking:{backgroundColor:"#ff0",color:"#000"},Bruger:{backgroundColor:"#4fa8df",color:"#fff"},Live:{backgroundColor:"#000",color:"#fff"},Native:{backgroundColor:"#cec4a6",color:"#fff"},Native2:{backgroundColor:"#84a8c4",color:"#fff"},Facebook:{backgroundColor:"#31769b",color:"#fff"},Twitter:{backgroundColor:"#4fa8df",color:"#fff"},Ekstra:{backgroundColor:"#bd1118",color:"#fff"},Filmmagasinet:{backgroundColor:"#650188",color:"#fff"},Flash:{backgroundColor:"#e5ad02",color:"#fff"},Forbrug:{backgroundColor:"#31769b",color:"#fff"},Livescore:{backgroundColor:"#32a237",color:"#fff"},Livescore2:{backgroundColor:"#cbfe33",color:"#000"},Nationen:{backgroundColor:"#e38121",color:"#fff"},Nationen2:{backgroundColor:"#e5ad02",color:"#fff"},Nyheder:{backgroundColor:"#12507b",color:"#fff"},Nyheder2:{backgroundColor:"#000",color:"#fff"},SexSamliv:{backgroundColor:"#8a0c36",color:"#fff"},SexSamliv2:{backgroundColor:"#dc7095",color:"#fff"},Skolefodbold:{backgroundColor:"#93b923",color:"#fff"},Sport:{backgroundColor:"#32a237",color:"#fff"},Tv:{backgroundColor:"#bd1118",color:"#fff"}};function qt(e){let t,n;const a=e[5].default,s=c(a,e,e[4],null);return{c(){t=x("span"),s&&s.c(),C(t,"class",e[0])},m(e,a){$(e,t,a),s&&s.m(t,null),n=!0},p(e,[l]){s&&s.p&&16&l&&d(s,a,e,e[4],l,null,null),(!n||1&l)&&C(t,"class",e[0])},i(e){n||(te(s,e),n=!0)},o(e){ne(s,e),n=!1},d(e){e&&p(t),s&&s.d(e)}}}function Ot(e,t,n){let{$$slots:a={},$$scope:s}=t,{className:l}=t,o="badge";l&&(o=`${o} ${l}`);let{extension:r}=t;r&&("string"==typeof r?o=`${o} button--${r}`:Array.isArray(r)&&(o=`${o} badge--${r.join(" badge--")}`));let{type:i}=t;return i&&(o=`${o} badge--${i}`),e.$$set=e=>{"className"in e&&n(1,l=e.className),"extension"in e&&n(2,r=e.extension),"type"in e&&n(3,i=e.type),"$$scope"in e&&n(4,s=e.$$scope)},[o,l,r,i,s,a]}class Dt extends ue{constructor(e){super(),ce(this,e,Ot,qt,o,{className:1,extension:2,type:3})}}function It(e){let t;return{c(){t=b("Standard badge")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function Gt(e){let t;return{c(){t=b("Primary")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function Rt(e){let t;return{c(){t=b("Secondary")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function Vt(e){let t;return{c(){t=b("Success")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function Ut(e){let t;return{c(){t=b("Danger")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function Wt(e){let t;return{c(){t=b("Bandekriminialitet")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function Yt(e){let t;return{c(){t=b("Sport")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function Zt(e){let t;return{c(){t=b("Nicklas Bendtner")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function Xt(e){let t;return{c(){t=x("small"),t.textContent="Small text uppercase"},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function Jt(e){let t;return{c(){t=b("Native")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function Kt(e){let t;return{c(){t=b("Greendark xsmall")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function Qt(e){let t,n;return{c(){t=b("Badge with icon "),n=x("i"),C(n,"class","fa fal fa-trash")},m(e,a){$(e,t,a),$(e,n,a)},d(e){e&&p(t),e&&p(n)}}}function en(e){let t,n,a,s,l,o,r,i,c,u,d,m,g,h,v,b,y,k,N,B,F,T,A,S,L,P,z,E,j,_,M,H,q,O,D,I,G,R,V,U,W,Y,Z,X,J,K,Q,ee;return l=new $t({props:{language:"js",source:"import Badge from '@ekstra-bladet/designsystem/src/_components/badge';"}}),i=new Dt({props:{className:"margin-s",$$slots:{default:[It]},$$scope:{ctx:e}}}),u=new $t({props:{language:tn,source:'\n  <div class="margin-l--tb">\n    <Badge className="margin-s">Standard badge</Badge>\n  </div>\n  '}}),v=new Dt({props:{className:"margin-s",type:"primary",$$slots:{default:[Gt]},$$scope:{ctx:e}}}),y=new Dt({props:{className:"margin-s",type:"secondary",$$slots:{default:[Rt]},$$scope:{ctx:e}}}),N=new Dt({props:{className:"margin-s",type:"success",$$slots:{default:[Vt]},$$scope:{ctx:e}}}),F=new Dt({props:{className:"margin-s",type:"danger",$$slots:{default:[Ut]},$$scope:{ctx:e}}}),A=new $t({props:{language:tn,source:'\n  <div class="margin-l--tb">\n    <Badge className="margin-s" type="primary">Primary</Badge>\n    <Badge className="margin-s" type="secondary">Secondary</Badge>\n    <Badge className="margin-s" type="success">Success</Badge>\n    <Badge className="margin-s" type="danger">Danger</Badge>\n  </div>\n  '}}),E=new Dt({props:{href:"#",className:"margin-s bg--bluedark",$$slots:{default:[Wt]},$$scope:{ctx:e}}}),_=new Dt({props:{href:"#",className:"margin-s bg--green",$$slots:{default:[Yt]},$$scope:{ctx:e}}}),H=new Dt({props:{href:"#",className:"margin-s bg--greendark",$$slots:{default:[Zt]},$$scope:{ctx:e}}}),O=new $t({props:{language:tn,source:'\n  <div class="margin-l--tb">\n    <Badge href="#" className="margin-s {BluedarkCSSClass}">Bandekriminialitet</Badge>\n    <Badge href="#" className="margin-s {GreenCSSClass}">Sport</Badge>\n    <Badge href="#" className="margin-s {GreendarkCSSClass}">Nicklas Bendtner</Badge>\n  </div>\n  '}}),V=new Dt({props:{className:"text-transform--uppercase",$$slots:{default:[Xt]},$$scope:{ctx:e}}}),W=new Dt({props:{className:"bg--native",$$slots:{default:[Jt]},$$scope:{ctx:e}}}),Z=new Dt({props:{className:"badge--small fontsize-xsmall bg--greendark",$$slots:{default:[Kt]},$$scope:{ctx:e}}}),J=new Dt({props:{$$slots:{default:[Qt]},$$scope:{ctx:e}}}),Q=new $t({props:{language:tn,source:'\n  <div class="margin-l--tb">\n    <Badge className="text-transform--uppercase"><small>Small text uppercase</small></Badge>\n    <Badge className="bg--native">Native</Badge>\n    <Badge className="badge--small {GreendarkCSSClass} fontsize-xsmall">Greendark xsmall</Badge>\n    <Badge>Badge with icon <i class="fa fal fa-trash" /></Badge>\n  </div>\n  '}}),{c(){t=x("h1"),t.textContent="Badge",n=w(),a=x("p"),a.textContent="Badges kan benyttes som mærkater eller som indikation af tags. Størrelsen af et badge kan styres vha. font-sizes.",s=w(),oe(l.$$.fragment),o=w(),r=x("div"),oe(i.$$.fragment),c=w(),oe(u.$$.fragment),d=w(),m=x("p"),m.textContent="Prædefinerede farver:",g=w(),h=x("div"),oe(v.$$.fragment),b=w(),oe(y.$$.fragment),k=w(),oe(N.$$.fragment),B=w(),oe(F.$$.fragment),T=w(),oe(A.$$.fragment),S=w(),L=x("p"),L.textContent="Som links / aktive tags:",P=w(),z=x("div"),oe(E.$$.fragment),j=w(),oe(_.$$.fragment),M=w(),oe(H.$$.fragment),q=w(),oe(O.$$.fragment),D=w(),I=x("p"),I.textContent="Andre farver og variationer:",G=w(),R=x("div"),oe(V.$$.fragment),U=w(),oe(W.$$.fragment),Y=w(),oe(Z.$$.fragment),X=w(),oe(J.$$.fragment),K=w(),oe(Q.$$.fragment),C(t,"class","color--eb"),C(r,"class","margin-l--tb"),C(h,"class","margin-l--tb"),C(z,"class","margin-l--tb"),C(R,"class","margin-l--tb")},m(e,p){$(e,t,p),$(e,n,p),$(e,a,p),$(e,s,p),re(l,e,p),$(e,o,p),$(e,r,p),re(i,r,null),$(e,c,p),re(u,e,p),$(e,d,p),$(e,m,p),$(e,g,p),$(e,h,p),re(v,h,null),f(h,b),re(y,h,null),f(h,k),re(N,h,null),f(h,B),re(F,h,null),$(e,T,p),re(A,e,p),$(e,S,p),$(e,L,p),$(e,P,p),$(e,z,p),re(E,z,null),f(z,j),re(_,z,null),f(z,M),re(H,z,null),$(e,q,p),re(O,e,p),$(e,D,p),$(e,I,p),$(e,G,p),$(e,R,p),re(V,R,null),f(R,U),re(W,R,null),f(R,Y),re(Z,R,null),f(R,X),re(J,R,null),$(e,K,p),re(Q,e,p),ee=!0},p(e,[t]){const n={};1&t&&(n.$$scope={dirty:t,ctx:e}),i.$set(n);const a={};1&t&&(a.$$scope={dirty:t,ctx:e}),v.$set(a);const s={};1&t&&(s.$$scope={dirty:t,ctx:e}),y.$set(s);const l={};1&t&&(l.$$scope={dirty:t,ctx:e}),N.$set(l);const o={};1&t&&(o.$$scope={dirty:t,ctx:e}),F.$set(o);const r={};1&t&&(r.$$scope={dirty:t,ctx:e}),E.$set(r);const c={};1&t&&(c.$$scope={dirty:t,ctx:e}),_.$set(c);const u={};1&t&&(u.$$scope={dirty:t,ctx:e}),H.$set(u);const d={};1&t&&(d.$$scope={dirty:t,ctx:e}),V.$set(d);const m={};1&t&&(m.$$scope={dirty:t,ctx:e}),W.$set(m);const g={};1&t&&(g.$$scope={dirty:t,ctx:e}),Z.$set(g);const f={};1&t&&(f.$$scope={dirty:t,ctx:e}),J.$set(f)},i(e){ee||(te(l.$$.fragment,e),te(i.$$.fragment,e),te(u.$$.fragment,e),te(v.$$.fragment,e),te(y.$$.fragment,e),te(N.$$.fragment,e),te(F.$$.fragment,e),te(A.$$.fragment,e),te(E.$$.fragment,e),te(_.$$.fragment,e),te(H.$$.fragment,e),te(O.$$.fragment,e),te(V.$$.fragment,e),te(W.$$.fragment,e),te(Z.$$.fragment,e),te(J.$$.fragment,e),te(Q.$$.fragment,e),ee=!0)},o(e){ne(l.$$.fragment,e),ne(i.$$.fragment,e),ne(u.$$.fragment,e),ne(v.$$.fragment,e),ne(y.$$.fragment,e),ne(N.$$.fragment,e),ne(F.$$.fragment,e),ne(A.$$.fragment,e),ne(E.$$.fragment,e),ne(_.$$.fragment,e),ne(H.$$.fragment,e),ne(O.$$.fragment,e),ne(V.$$.fragment,e),ne(W.$$.fragment,e),ne(Z.$$.fragment,e),ne(J.$$.fragment,e),ne(Q.$$.fragment,e),ee=!1},d(e){e&&p(t),e&&p(n),e&&p(a),e&&p(s),ie(l,e),e&&p(o),e&&p(r),ie(i),e&&p(c),ie(u,e),e&&p(d),e&&p(m),e&&p(g),e&&p(h),ie(v),ie(y),ie(N),ie(F),e&&p(T),ie(A,e),e&&p(S),e&&p(L),e&&p(P),e&&p(z),ie(E),ie(_),ie(H),e&&p(q),ie(O,e),e&&p(D),e&&p(I),e&&p(G),e&&p(R),ie(V),ie(W),ie(Z),ie(J),e&&p(K),ie(Q,e)}}}const tn="html";function nn(e){let t;return{c(){t=x("style"),t.textContent=".buttongroup--special .button {\n      background: var(--color--white);\n      border-color: var(--groupcolor-main);\n      border-right-width: 0;\n      color: var(--groupcolor-main);\n    }\n\n    .buttongroup--special .button:active,\n    .buttongroup--special .button:hover,\n    .buttongroup--special .button:focus,\n    .buttongroup--special .button[data-selected='true'] {\n      background: var(--groupcolor-main);\n      border-color: var(--groupcolor-main);\n      color: var(--groupcolor-main-foreground);\n    }"},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function an(e){let t,n,a,s=e[0]&&nn();const l=e[7].default,o=c(l,e,e[6],null);return{c(){s&&s.c(),t=w(),n=x("div"),o&&o.c(),C(n,"class",e[1]),B(n,"--groupcolor-main",e[2]),B(n,"--groupcolor-foreground",e[3])},m(e,l){s&&s.m(e,l),$(e,t,l),$(e,n,l),o&&o.m(n,null),a=!0},p(e,[r]){e[0]?s||(s=nn(),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null),o&&o.p&&64&r&&d(o,l,e,e[6],r,null,null),(!a||2&r)&&C(n,"class",e[1])},i(e){a||(te(o,e),a=!0)},o(e){ne(o,e),a=!1},d(e){s&&s.d(e),e&&p(t),e&&p(n),o&&o.d(e)}}}const sn={};function ln(e,t,n){let{$$slots:a={},$$scope:s}=t;const l=[],o=[],r=ge(null),i=ge(null);j(sn,{registerTab:e=>{l.push(e),r.update((t=>t||e)),z((()=>{const t=l.indexOf(e);l.splice(t,1),r.update((n=>n===e?l[t]||l[l.length-1]:n))}))},registerPanel:e=>{o.push(e),i.update((t=>t||e)),z((()=>{const t=o.indexOf(e);o.splice(t,1),i.update((n=>n===e?o[t]||o[o.length-1]:n))}))},selectButton:e=>{const t=l.indexOf(e);r.set(e),i.set(o[t])},selectedButton:r,selectedPanel:i});let{className:c}=t,u="buttongroup";c&&(u=`${c} ${u}`);let{type:d}=t;d&&(u=`${u} buttongroup--${d}`);let{color:m}=t;m&&(u=`${u} buttongroup--special`),console.log("Background",Ht[m]);const{backgroundColor:g,color:f}=Ht[m]?Ht[m]:Ht.Breaking;return e.$$set=e=>{"className"in e&&n(4,c=e.className),"type"in e&&n(5,d=e.type),"color"in e&&n(0,m=e.color),"$$scope"in e&&n(6,s=e.$$scope)},[m,u,g,f,c,d,s,a]}class on extends ue{constructor(e){super(),ce(this,e,ln,an,o,{className:4,type:5,color:0})}}function rn(e){let t,n,a,s,l;const o=e[13].default,r=c(o,e,e[12],null);return{c(){t=x("button"),r&&r.c(),C(t,"class",e[2]),t.disabled=e[0],C(t,"data-selected",n=e[5]===e[6])},m(n,o){$(n,t,o),r&&r.m(t,null),e[17](t),a=!0,s||(l=k(t,"click",e[15]),s=!0)},p(e,s){r&&r.p&&4096&s&&d(r,o,e,e[12],s,null,null),(!a||4&s)&&C(t,"class",e[2]),(!a||1&s)&&(t.disabled=e[0]),(!a||32&s&&n!==(n=e[5]===e[6]))&&C(t,"data-selected",n)},i(e){a||(te(r,e),a=!0)},o(e){ne(r,e),a=!1},d(n){n&&p(t),r&&r.d(n),e[17](null),s=!1,l()}}}function cn(e){let t,n,a,s,l;const o=e[13].default,r=c(o,e,e[12],null);return{c(){t=x("a"),r&&r.c(),C(t,"href",e[1]),C(t,"class",e[2]),C(t,"disabled",e[0]),C(t,"data-selected",n=e[5]===e[6])},m(n,o){$(n,t,o),r&&r.m(t,null),e[16](t),a=!0,s||(l=k(t,"click",e[14]),s=!0)},p(e,s){r&&r.p&&4096&s&&d(r,o,e,e[12],s,null,null),(!a||2&s)&&C(t,"href",e[1]),(!a||4&s)&&C(t,"class",e[2]),(!a||1&s)&&C(t,"disabled",e[0]),(!a||32&s&&n!==(n=e[5]===e[6]))&&C(t,"data-selected",n)},i(e){a||(te(r,e),a=!0)},o(e){ne(r,e),a=!1},d(n){n&&p(t),r&&r.d(n),e[16](null),s=!1,l()}}}function un(e){let t,n,a,s;const l=[cn,rn],o=[];function r(e,t){return e[1]?0:1}return t=r(e),n=o[t]=l[t](e),{c(){n.c(),a=y()},m(e,n){o[t].m(e,n),$(e,a,n),s=!0},p(e,[s]){let i=t;t=r(e),t===i?o[t].p(e,s):(Q(),ne(o[i],1,1,(()=>{o[i]=null})),ee(),n=o[t],n?n.p(e,s):(n=o[t]=l[t](e),n.c()),te(n,1),n.m(a.parentNode,a))},i(e){s||(te(n),s=!0)},o(e){ne(n),s=!1},d(e){o[t].d(e),e&&p(a)}}}function dn(t,n,a){let s,l=e;t.$$.on_destroy.push((()=>l()));let{$$slots:o={},$$scope:i}=n,{className:c}=n,{disabled:u=!1}=n,d="button";c&&(d=`${d} ${c}`);let{extension:m}=n,{href:g}=n,{size:f}=n;if(m){let e=m.split(" ");console.log(e),e.forEach((e=>{a(2,d=`${d} button--${e}`)}))}f&&(d=`${d} button--${f}`);let $,{type:p}=n;p&&(d=`${d} button--${p}`);let h,x,v,{initial:b=!1}=n;const w={},y=_(sn);return y&&(h=y.registerTab,x=y.selectButton,v=y.selectedButton,l(),l=r(v,(e=>a(5,s=e))),h(w),b&&x(w)),L((()=>{void 0!==x&&$.addEventListener("click",(()=>x(w)))})),t.$$set=e=>{"className"in e&&a(7,c=e.className),"disabled"in e&&a(0,u=e.disabled),"extension"in e&&a(8,m=e.extension),"href"in e&&a(1,g=e.href),"size"in e&&a(9,f=e.size),"type"in e&&a(10,p=e.type),"initial"in e&&a(11,b=e.initial),"$$scope"in e&&a(12,i=e.$$scope)},[u,g,d,$,v,s,w,c,m,f,p,b,i,o,function(e){M(t,e)},function(e){M(t,e)},function(e){q[e?"unshift":"push"]((()=>{$=e,a(3,$)}))},function(e){q[e?"unshift":"push"]((()=>{$=e,a(3,$)}))}]}class mn extends ue{constructor(e){super(),ce(this,e,dn,un,o,{className:7,disabled:0,extension:8,href:1,size:9,type:10,initial:11})}}function gn(e){let t;return{c(){t=x("i"),C(t,"class",e[1]),C(t,"aria-hidden","true")},m(e,n){$(e,t,n)},p(e,n){2&n&&C(t,"class",e[1])},d(e){e&&p(t)}}}function fn(e){let t,n,a,s,l,o;return{c(){t=v("svg"),n=v("use"),C(n,"href",a="/svg/symbol/icons.svg#"+e[2]),C(t,"viewBox",e[3]),C(t,"style",e[0]),C(t,"class",s="icon-svg "+e[1])},m(a,s){$(a,t,s),f(t,n),l||(o=k(t,"click",e[6]),l=!0)},p(e,l){4&l&&a!==(a="/svg/symbol/icons.svg#"+e[2])&&C(n,"href",a),8&l&&C(t,"viewBox",e[3]),1&l&&C(t,"style",e[0]),2&l&&s!==(s="icon-svg "+e[1])&&C(t,"class",s)},d(e){e&&p(t),l=!1,o()}}}function $n(t){let n;function a(e,t){return"svg"===e[4]?fn:gn}let s=a(t),l=s(t);return{c(){l.c(),n=y()},m(e,t){l.m(e,t),$(e,n,t)},p(e,[t]){s===(s=a(e))&&l?l.p(e,t):(l.d(1),l=s(e),l&&(l.c(),l.m(n.parentNode,n)))},i:e,o:e,d(e){l.d(e),e&&p(n)}}}function pn(e,t,n){let{className:a}=t,{name:s}=t,{viewBox:l="0 0 50 50"}=t,{type:o="svg"}=t,{width:r=36}=t,{style:i}=t;const c=`width: ${r}px; height: ${r}px;`;return i=i?`${c} ${i}`:c,e.$$set=e=>{"className"in e&&n(1,a=e.className),"name"in e&&n(2,s=e.name),"viewBox"in e&&n(3,l=e.viewBox),"type"in e&&n(4,o=e.type),"width"in e&&n(5,r=e.width),"style"in e&&n(0,i=e.style)},[i,a,s,l,o,r,function(t){M(e,t)}]}class hn extends ue{constructor(e){super(),ce(this,e,pn,$n,o,{className:1,name:2,viewBox:3,type:4,width:5,style:0})}}function xn(e){let t;return{c(){t=b("Base button")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function vn(e){let t;return{c(){t=b("Base button as anchor element")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function bn(e){let t;return{c(){t=b("Button solid")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function wn(e){let t;return{c(){t=b("Button link")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function yn(e){let t;return{c(){t=x("span"),t.textContent="×",B(t,"font-size","30px")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function kn(e){let t;return{c(){t=b("Button big")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function Cn(e){let t;return{c(){t=b("Button small")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function Nn(e){let t;return{c(){t=b("Button big solid")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function Bn(e){let t;return{c(){t=b("Button big link")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function Fn(e){let t;return{c(){t=x("span"),t.textContent="×",B(t,"font-size","30px")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function Tn(e){let t;return{c(){t=b("Button small solid")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function An(e){let t;return{c(){t=b("Button small link")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function Sn(e){let t;return{c(){t=x("span"),t.textContent="×",B(t,"font-size","30px")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function Ln(e){let t;return{c(){t=b("Button primary")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function Pn(e){let t;return{c(){t=b("Button secondary")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function zn(e){let t;return{c(){t=b("Button accept")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function En(e){let t;return{c(){t=b("Button cancel")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function jn(t){let n,a,s,l;return s=new hn({props:{className:"icon",name:"medielogin",width:"20"}}),{c(){n=x("span"),n.textContent="button with icon right",a=w(),oe(s.$$.fragment)},m(e,t){$(e,n,t),$(e,a,t),re(s,e,t),l=!0},p:e,i(e){l||(te(s.$$.fragment,e),l=!0)},o(e){ne(s.$$.fragment,e),l=!1},d(e){e&&p(n),e&&p(a),ie(s,e)}}}function _n(t){let n,a,s,l;return n=new hn({props:{className:"icon",name:"angle-left",width:"20"}}),{c(){oe(n.$$.fragment),a=w(),s=x("span"),s.textContent="button with icon left"},m(e,t){re(n,e,t),$(e,a,t),$(e,s,t),l=!0},p:e,i(e){l||(te(n.$$.fragment,e),l=!0)},o(e){ne(n.$$.fragment,e),l=!1},d(e){ie(n,e),e&&p(a),e&&p(s)}}}function Mn(e){let t;return{c(){t=x("span"),t.textContent="×",B(t,"font-size","30px")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function Hn(e){let t;return{c(){t=x("span"),t.textContent="×",B(t,"font-size","30px")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function qn(e){let t;return{c(){t=x("span"),t.textContent="×",B(t,"font-size","30px")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function On(e){let t;return{c(){t=x("span"),t.textContent="×",B(t,"font-size","40px")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function Dn(e){let t,n,a,s,l,o,r,i,c,u,d,m,g,h,v,b,y,k,N,B,F,T,A,S,L,P,z,E,j,_,M,H,q,O,D,I,G,R,V,U,W,Y,Z,X,J,K,Q,ee,ae,se,le,ce,ue,de,me,ge,fe,$e,pe,he,xe,ve,be,we,ye,ke,Ce,Ne,Be,Fe,Te,Ae,Se,Le,Pe,ze,Ee,je,_e,Me,He,qe,Oe,De,Ie;return a=new $t({props:{language:"js",source:"import Button from '@ekstra-bladet/designsystem/src/_components/button';"}}),l=new mn({props:{$$slots:{default:[xn]},$$scope:{ctx:e}}}),l.$on("click",e[0]),r=new $t({props:{language:In,source:"\n  <Button on:click=\"{() => {\n    console.log('click the button');\n  }}\">Base button</Button>\n  "}}),c=new mn({props:{href:"#",$$slots:{default:[vn]},$$scope:{ctx:e}}}),c.$on("click",Gn),d=new $t({props:{language:In,source:'\n  <Button href="#" on:click="{buttonClick}">Base button</Button>\n  '}}),B=new mn({props:{className:"margin-m",extension:"solid",$$slots:{default:[bn]},$$scope:{ctx:e}}}),T=new mn({props:{className:"margin-m",extension:"link",$$slots:{default:[wn]},$$scope:{ctx:e}}}),S=new mn({props:{className:"margin-m",extension:"icon",$$slots:{default:[yn]},$$scope:{ctx:e}}}),P=new mn({props:{className:"margin-m",size:"big",$$slots:{default:[kn]},$$scope:{ctx:e}}}),E=new mn({props:{className:"margin-m",size:"small",$$slots:{default:[Cn]},$$scope:{ctx:e}}}),_=new $t({props:{language:In,source:'\n  <Button className="margin-m" extension="solid">Button solid</Button>\n  <Button className="margin-m" extension="link">Button link</Button>\n  <Button className="margin-m" extension="icon">\n    <span style="font-size: 30px">&times;</span>\n  </Button>\n  <Button className="margin-m" size="big">Button big</Button>\n  <Button className="margin-m" size="small">Button small</Button>\n  '}}),G=new mn({props:{className:"margin-m",size:"big",extension:"solid",$$slots:{default:[Nn]},$$scope:{ctx:e}}}),V=new mn({props:{className:"margin-m",size:"big",extension:"link",$$slots:{default:[Bn]},$$scope:{ctx:e}}}),W=new mn({props:{className:"margin-m",size:"big",extension:"icon",$$slots:{default:[Fn]},$$scope:{ctx:e}}}),X=new mn({props:{className:"margin-m",size:"small",extension:"solid",$$slots:{default:[Tn]},$$scope:{ctx:e}}}),K=new mn({props:{className:"margin-m",size:"small",extension:"link",$$slots:{default:[An]},$$scope:{ctx:e}}}),ee=new mn({props:{className:"margin-m",size:"small",extension:"icon",$$slots:{default:[Sn]},$$scope:{ctx:e}}}),se=new $t({props:{language:In,source:'\n  <Button className="margin-m" size="big">Button big</Button>\n  <Button className="margin-m" size="big" extension="solid">Button big solid</Button>\n  <Button className="margin-m" size="big" extension="link">Button big link</Button>\n  <Button className="margin-m" size="small" extension="solid">Button small solid</Button>\n  <Button className="margin-m" size="small" extension="link">Button small link</Button>\n  <Button className="margin-m" size="small" extension="icon">\n    <span style="font-size: 30px">&times;</span>\n  </Button>\n  '}}),me=new mn({props:{className:"margin-m",type:"primary",$$slots:{default:[Ln]},$$scope:{ctx:e}}}),fe=new mn({props:{className:"margin-m",type:"secondary",$$slots:{default:[Pn]},$$scope:{ctx:e}}}),pe=new mn({props:{className:"margin-m",type:"accept",$$slots:{default:[zn]},$$scope:{ctx:e}}}),xe=new mn({props:{className:"margin-m",type:"cancel",$$slots:{default:[En]},$$scope:{ctx:e}}}),be=new $t({props:{language:In,source:'\n  <Button className="margin-m" type="primary">Button primary</Button>\n  <Button className="margin-m" type="secondary">Button secondary</Button>\n  <Button className="margin-m" type="accept">Button accept</Button>\n  <Button className="margin-m" type="cancel">Button cancel</Button>\n  '}}),Ce=new mn({props:{className:"margin-m",$$slots:{default:[jn]},$$scope:{ctx:e}}}),Be=new $t({props:{language:In,source:'\n  <Button className="margin-m">\n    <span>button with icon right</span>\n    <Icon className="icon" name="medielogin" width="20"/>\n  </Button>\n  '}}),Te=new mn({props:{className:"margin-m",$$slots:{default:[_n]},$$scope:{ctx:e}}}),Se=new $t({props:{language:In,source:'\n  <Button className="margin-m">\n    <Icon className="icon" name="angle-left" width="20"/>\n    <span>button with icon right</span>\n  </Button>\n  '}}),ze=new mn({props:{className:"margin-m",extension:"icon",$$slots:{default:[Mn]},$$scope:{ctx:e}}}),je=new mn({props:{className:"margin-m",size:"small",extension:"icon solid",$$slots:{default:[Hn]},$$scope:{ctx:e}}}),Me=new mn({props:{className:"margin-m",extension:"icon solid",$$slots:{default:[qn]},$$scope:{ctx:e}}}),qe=new mn({props:{className:"margin-m",size:"big",extension:"icon solid",$$slots:{default:[On]},$$scope:{ctx:e}}}),De=new $t({props:{language:In,source:'\n  <Button className="margin-m" extension="icon">\n    <span style="font-size: 30px">&times;</span>\n  </Button>\n  <Button className="margin-m" size="small" extension="icon solid">\n    <span style="font-size: 30px">&times;</span>\n  </Button>\n  <Button className="margin-m" extension="icon solid">\n    <span style="font-size: 30px">&times;</span>\n  </Button>\n  <Button className="margin-m" size="big" extension="icon solid">\n    <span style="font-size: 40px">&times;</span>\n  </Button>\n  '}}),{c(){t=x("h1"),t.textContent="Buttons",n=w(),oe(a.$$.fragment),s=w(),oe(l.$$.fragment),o=w(),oe(r.$$.fragment),i=w(),oe(c.$$.fragment),u=w(),oe(d.$$.fragment),m=w(),g=x("h3"),g.textContent="extension attribute",h=w(),v=x("p"),v.textContent="options",b=w(),y=x("ul"),y.innerHTML="<li>solid</li> \n  <li>link</li> \n  <li>icon</li> \n  <li>big</li> \n  <li>small</li>",k=w(),N=x("div"),oe(B.$$.fragment),F=w(),oe(T.$$.fragment),A=w(),oe(S.$$.fragment),L=w(),oe(P.$$.fragment),z=w(),oe(E.$$.fragment),j=w(),oe(_.$$.fragment),M=w(),H=x("h3"),H.textContent="Size attribute",q=w(),O=x("p"),O.innerHTML="<b>big</b> and <b>small</b> can be combined with the other three extensions",D=w(),I=x("div"),oe(G.$$.fragment),R=w(),oe(V.$$.fragment),U=w(),oe(W.$$.fragment),Y=w(),Z=x("div"),oe(X.$$.fragment),J=w(),oe(K.$$.fragment),Q=w(),oe(ee.$$.fragment),ae=w(),oe(se.$$.fragment),le=w(),ce=x("h3"),ce.textContent="Styles",ue=w(),de=x("div"),oe(me.$$.fragment),ge=w(),oe(fe.$$.fragment),$e=w(),oe(pe.$$.fragment),he=w(),oe(xe.$$.fragment),ve=w(),oe(be.$$.fragment),we=w(),ye=x("h3"),ye.textContent="Buttons with Icon",ke=w(),oe(Ce.$$.fragment),Ne=w(),oe(Be.$$.fragment),Fe=w(),oe(Te.$$.fragment),Ae=w(),oe(Se.$$.fragment),Le=w(),Pe=x("div"),oe(ze.$$.fragment),Ee=w(),oe(je.$$.fragment),_e=w(),oe(Me.$$.fragment),He=w(),oe(qe.$$.fragment),Oe=w(),oe(De.$$.fragment),C(t,"class","color--eb"),C(N,"class","flex"),C(I,"class","flex"),C(Z,"class","flex"),C(de,"class","flex"),C(Pe,"class","flex")},m(e,p){$(e,t,p),$(e,n,p),re(a,e,p),$(e,s,p),re(l,e,p),$(e,o,p),re(r,e,p),$(e,i,p),re(c,e,p),$(e,u,p),re(d,e,p),$(e,m,p),$(e,g,p),$(e,h,p),$(e,v,p),$(e,b,p),$(e,y,p),$(e,k,p),$(e,N,p),re(B,N,null),f(N,F),re(T,N,null),f(N,A),re(S,N,null),f(N,L),re(P,N,null),f(N,z),re(E,N,null),$(e,j,p),re(_,e,p),$(e,M,p),$(e,H,p),$(e,q,p),$(e,O,p),$(e,D,p),$(e,I,p),re(G,I,null),f(I,R),re(V,I,null),f(I,U),re(W,I,null),$(e,Y,p),$(e,Z,p),re(X,Z,null),f(Z,J),re(K,Z,null),f(Z,Q),re(ee,Z,null),$(e,ae,p),re(se,e,p),$(e,le,p),$(e,ce,p),$(e,ue,p),$(e,de,p),re(me,de,null),f(de,ge),re(fe,de,null),f(de,$e),re(pe,de,null),f(de,he),re(xe,de,null),$(e,ve,p),re(be,e,p),$(e,we,p),$(e,ye,p),$(e,ke,p),re(Ce,e,p),$(e,Ne,p),re(Be,e,p),$(e,Fe,p),re(Te,e,p),$(e,Ae,p),re(Se,e,p),$(e,Le,p),$(e,Pe,p),re(ze,Pe,null),f(Pe,Ee),re(je,Pe,null),f(Pe,_e),re(Me,Pe,null),f(Pe,He),re(qe,Pe,null),$(e,Oe,p),re(De,e,p),Ie=!0},p(e,[t]){const n={};2&t&&(n.$$scope={dirty:t,ctx:e}),l.$set(n);const a={};2&t&&(a.$$scope={dirty:t,ctx:e}),c.$set(a);const s={};2&t&&(s.$$scope={dirty:t,ctx:e}),B.$set(s);const o={};2&t&&(o.$$scope={dirty:t,ctx:e}),T.$set(o);const r={};2&t&&(r.$$scope={dirty:t,ctx:e}),S.$set(r);const i={};2&t&&(i.$$scope={dirty:t,ctx:e}),P.$set(i);const u={};2&t&&(u.$$scope={dirty:t,ctx:e}),E.$set(u);const d={};2&t&&(d.$$scope={dirty:t,ctx:e}),G.$set(d);const m={};2&t&&(m.$$scope={dirty:t,ctx:e}),V.$set(m);const g={};2&t&&(g.$$scope={dirty:t,ctx:e}),W.$set(g);const f={};2&t&&(f.$$scope={dirty:t,ctx:e}),X.$set(f);const $={};2&t&&($.$$scope={dirty:t,ctx:e}),K.$set($);const p={};2&t&&(p.$$scope={dirty:t,ctx:e}),ee.$set(p);const h={};2&t&&(h.$$scope={dirty:t,ctx:e}),me.$set(h);const x={};2&t&&(x.$$scope={dirty:t,ctx:e}),fe.$set(x);const v={};2&t&&(v.$$scope={dirty:t,ctx:e}),pe.$set(v);const b={};2&t&&(b.$$scope={dirty:t,ctx:e}),xe.$set(b);const w={};2&t&&(w.$$scope={dirty:t,ctx:e}),Ce.$set(w);const y={};2&t&&(y.$$scope={dirty:t,ctx:e}),Te.$set(y);const k={};2&t&&(k.$$scope={dirty:t,ctx:e}),ze.$set(k);const C={};2&t&&(C.$$scope={dirty:t,ctx:e}),je.$set(C);const N={};2&t&&(N.$$scope={dirty:t,ctx:e}),Me.$set(N);const F={};2&t&&(F.$$scope={dirty:t,ctx:e}),qe.$set(F)},i(e){Ie||(te(a.$$.fragment,e),te(l.$$.fragment,e),te(r.$$.fragment,e),te(c.$$.fragment,e),te(d.$$.fragment,e),te(B.$$.fragment,e),te(T.$$.fragment,e),te(S.$$.fragment,e),te(P.$$.fragment,e),te(E.$$.fragment,e),te(_.$$.fragment,e),te(G.$$.fragment,e),te(V.$$.fragment,e),te(W.$$.fragment,e),te(X.$$.fragment,e),te(K.$$.fragment,e),te(ee.$$.fragment,e),te(se.$$.fragment,e),te(me.$$.fragment,e),te(fe.$$.fragment,e),te(pe.$$.fragment,e),te(xe.$$.fragment,e),te(be.$$.fragment,e),te(Ce.$$.fragment,e),te(Be.$$.fragment,e),te(Te.$$.fragment,e),te(Se.$$.fragment,e),te(ze.$$.fragment,e),te(je.$$.fragment,e),te(Me.$$.fragment,e),te(qe.$$.fragment,e),te(De.$$.fragment,e),Ie=!0)},o(e){ne(a.$$.fragment,e),ne(l.$$.fragment,e),ne(r.$$.fragment,e),ne(c.$$.fragment,e),ne(d.$$.fragment,e),ne(B.$$.fragment,e),ne(T.$$.fragment,e),ne(S.$$.fragment,e),ne(P.$$.fragment,e),ne(E.$$.fragment,e),ne(_.$$.fragment,e),ne(G.$$.fragment,e),ne(V.$$.fragment,e),ne(W.$$.fragment,e),ne(X.$$.fragment,e),ne(K.$$.fragment,e),ne(ee.$$.fragment,e),ne(se.$$.fragment,e),ne(me.$$.fragment,e),ne(fe.$$.fragment,e),ne(pe.$$.fragment,e),ne(xe.$$.fragment,e),ne(be.$$.fragment,e),ne(Ce.$$.fragment,e),ne(Be.$$.fragment,e),ne(Te.$$.fragment,e),ne(Se.$$.fragment,e),ne(ze.$$.fragment,e),ne(je.$$.fragment,e),ne(Me.$$.fragment,e),ne(qe.$$.fragment,e),ne(De.$$.fragment,e),Ie=!1},d(e){e&&p(t),e&&p(n),ie(a,e),e&&p(s),ie(l,e),e&&p(o),ie(r,e),e&&p(i),ie(c,e),e&&p(u),ie(d,e),e&&p(m),e&&p(g),e&&p(h),e&&p(v),e&&p(b),e&&p(y),e&&p(k),e&&p(N),ie(B),ie(T),ie(S),ie(P),ie(E),e&&p(j),ie(_,e),e&&p(M),e&&p(H),e&&p(q),e&&p(O),e&&p(D),e&&p(I),ie(G),ie(V),ie(W),e&&p(Y),e&&p(Z),ie(X),ie(K),ie(ee),e&&p(ae),ie(se,e),e&&p(le),e&&p(ce),e&&p(ue),e&&p(de),ie(me),ie(fe),ie(pe),ie(xe),e&&p(ve),ie(be,e),e&&p(we),e&&p(ye),e&&p(ke),ie(Ce,e),e&&p(Ne),ie(Be,e),e&&p(Fe),ie(Te,e),e&&p(Ae),ie(Se,e),e&&p(Le),e&&p(Pe),ie(ze),ie(je),ie(Me),ie(qe),e&&p(Oe),ie(De,e)}}}const In="html";function Gn(){console.log("funck!")}function Rn(e){return[()=>{console.log("click the button")}]}function Vn(e){let t;return{c(){t=b("Toggle 1")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function Un(e){let t;return{c(){t=b("Toggle 2")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function Wn(e){let t,n,a,s;return t=new mn({props:{size:"big",$$slots:{default:[Vn]},$$scope:{ctx:e}}}),t.$on("click",e[0]),a=new mn({props:{size:"big",extension:"solid",initial:!0,$$slots:{default:[Un]},$$scope:{ctx:e}}}),a.$on("click",e[1]),{c(){oe(t.$$.fragment),n=w(),oe(a.$$.fragment)},m(e,l){re(t,e,l),$(e,n,l),re(a,e,l),s=!0},p(e,n){const s={};8192&n&&(s.$$scope={dirty:n,ctx:e}),t.$set(s);const l={};8192&n&&(l.$$scope={dirty:n,ctx:e}),a.$set(l)},i(e){s||(te(t.$$.fragment,e),te(a.$$.fragment,e),s=!0)},o(e){ne(t.$$.fragment,e),ne(a.$$.fragment,e),s=!1},d(e){ie(t,e),e&&p(n),ie(a,e)}}}function Yn(e){let t;return{c(){t=b("Toggle 1")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function Zn(e){let t;return{c(){t=b("Toggle 2")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function Xn(e){let t,n,a,s;return t=new mn({props:{size:"big",$$slots:{default:[Yn]},$$scope:{ctx:e}}}),t.$on("click",e[2]),a=new mn({props:{size:"big",extension:"solid",$$slots:{default:[Zn]},$$scope:{ctx:e}}}),a.$on("click",e[3]),{c(){oe(t.$$.fragment),n=w(),oe(a.$$.fragment)},m(e,l){re(t,e,l),$(e,n,l),re(a,e,l),s=!0},p(e,n){const s={};8192&n&&(s.$$scope={dirty:n,ctx:e}),t.$set(s);const l={};8192&n&&(l.$$scope={dirty:n,ctx:e}),a.$set(l)},i(e){s||(te(t.$$.fragment,e),te(a.$$.fragment,e),s=!0)},o(e){ne(t.$$.fragment,e),ne(a.$$.fragment,e),s=!1},d(e){ie(t,e),e&&p(n),ie(a,e)}}}function Jn(e){let t;return{c(){t=b("Toggle 1")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function Kn(e){let t;return{c(){t=b("Toggle 2")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function Qn(e){let t,n,a,s;return t=new mn({props:{size:"big",$$slots:{default:[Jn]},$$scope:{ctx:e}}}),t.$on("click",e[4]),a=new mn({props:{size:"big",extension:"solid",$$slots:{default:[Kn]},$$scope:{ctx:e}}}),a.$on("click",e[5]),{c(){oe(t.$$.fragment),n=w(),oe(a.$$.fragment)},m(e,l){re(t,e,l),$(e,n,l),re(a,e,l),s=!0},p(e,n){const s={};8192&n&&(s.$$scope={dirty:n,ctx:e}),t.$set(s);const l={};8192&n&&(l.$$scope={dirty:n,ctx:e}),a.$set(l)},i(e){s||(te(t.$$.fragment,e),te(a.$$.fragment,e),s=!0)},o(e){ne(t.$$.fragment,e),ne(a.$$.fragment,e),s=!1},d(e){ie(t,e),e&&p(n),ie(a,e)}}}function ea(e){let t;return{c(){t=b("Toggle 1")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function ta(e){let t;return{c(){t=b("Toggle 2")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function na(e){let t,n,a,s;return t=new mn({props:{size:"big",$$slots:{default:[ea]},$$scope:{ctx:e}}}),t.$on("click",e[6]),a=new mn({props:{size:"big",extension:"solid",$$slots:{default:[ta]},$$scope:{ctx:e}}}),a.$on("click",e[7]),{c(){oe(t.$$.fragment),n=w(),oe(a.$$.fragment)},m(e,l){re(t,e,l),$(e,n,l),re(a,e,l),s=!0},p(e,n){const s={};8192&n&&(s.$$scope={dirty:n,ctx:e}),t.$set(s);const l={};8192&n&&(l.$$scope={dirty:n,ctx:e}),a.$set(l)},i(e){s||(te(t.$$.fragment,e),te(a.$$.fragment,e),s=!0)},o(e){ne(t.$$.fragment,e),ne(a.$$.fragment,e),s=!1},d(e){ie(t,e),e&&p(n),ie(a,e)}}}function aa(e){let t;return{c(){t=b("Toggle 1")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function sa(e){let t;return{c(){t=b("Toggle 2")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function la(e){let t,n,a,s;return t=new mn({props:{size:"big",$$slots:{default:[aa]},$$scope:{ctx:e}}}),t.$on("click",e[8]),a=new mn({props:{size:"big",extension:"solid",type:"accept",$$slots:{default:[sa]},$$scope:{ctx:e}}}),a.$on("click",e[9]),{c(){oe(t.$$.fragment),n=w(),oe(a.$$.fragment)},m(e,l){re(t,e,l),$(e,n,l),re(a,e,l),s=!0},p(e,n){const s={};8192&n&&(s.$$scope={dirty:n,ctx:e}),t.$set(s);const l={};8192&n&&(l.$$scope={dirty:n,ctx:e}),a.$set(l)},i(e){s||(te(t.$$.fragment,e),te(a.$$.fragment,e),s=!0)},o(e){ne(t.$$.fragment,e),ne(a.$$.fragment,e),s=!1},d(e){ie(t,e),e&&p(n),ie(a,e)}}}function oa(e){let t;return{c(){t=b("Button 1")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function ra(e){let t;return{c(){t=b("Button 2")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function ia(e){let t;return{c(){t=b("Button 3")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function ca(e){let t,n,a,s,l,o;return t=new mn({props:{$$slots:{default:[oa]},$$scope:{ctx:e}}}),t.$on("click",e[10]),a=new mn({props:{$$slots:{default:[ra]},$$scope:{ctx:e}}}),a.$on("click",e[11]),l=new mn({props:{$$slots:{default:[ia]},$$scope:{ctx:e}}}),l.$on("click",e[12]),{c(){oe(t.$$.fragment),n=w(),oe(a.$$.fragment),s=w(),oe(l.$$.fragment)},m(e,r){re(t,e,r),$(e,n,r),re(a,e,r),$(e,s,r),re(l,e,r),o=!0},p(e,n){const s={};8192&n&&(s.$$scope={dirty:n,ctx:e}),t.$set(s);const o={};8192&n&&(o.$$scope={dirty:n,ctx:e}),a.$set(o);const r={};8192&n&&(r.$$scope={dirty:n,ctx:e}),l.$set(r)},i(e){o||(te(t.$$.fragment,e),te(a.$$.fragment,e),te(l.$$.fragment,e),o=!0)},o(e){ne(t.$$.fragment,e),ne(a.$$.fragment,e),ne(l.$$.fragment,e),o=!1},d(e){ie(t,e),e&&p(n),ie(a,e),e&&p(s),ie(l,e)}}}function ua(e){let t,n,a,s,l,o,r,i,c,u,d,m,g,f,h,v,b,y,k,N,B,F,T,A,S,L;return a=new $t({props:{language:"js",source:"import Button from '@ekstra-bladet/designsystem/src/_components/button';\nimport ButtonGroup  from '@ekstra-bladet/designsystem/src/_components/buttongroup';\n"}}),o=new on({props:{color:"Bordeaux",$$slots:{default:[Wn]},$$scope:{ctx:e}}}),c=new on({props:{type:"primary",color:"PastelDarkgreen",$$slots:{default:[Xn]},$$scope:{ctx:e}}}),m=new on({props:{$$slots:{default:[Qn]},$$scope:{ctx:e}}}),h=new on({props:{type:"accept",$$slots:{default:[na]},$$scope:{ctx:e}}}),y=new on({props:{type:"cancel",$$slots:{default:[la]},$$scope:{ctx:e}}}),N=new $t({props:{language:"html",source:"<ButtonGroup>\n  <Button\n    on:click=\"{() => {\n      console.log('Click 1');\n    }}\">Toggle 1</Button\n  >\n  <Button\n    on:click=\"{() => {\n      console.log('Click 2');\n    }}\">Toggle 2</Button\n  >\n</ButtonGroup>\n"}}),T=new on({props:{$$slots:{default:[ca]},$$scope:{ctx:e}}}),S=new $t({props:{language:"html",source:"<ButtonGroup>\n  <Button\n    on:click=\"{() => {\n      console.log('Button 1');\n    }}\">Toggle 1</Button\n  >\n  <Button\n    on:click=\"{() => {\n      console.log('Button 2');\n    }}\">Toggle 2</Button\n  >\n  <Button\n    on:click=\"{() => {\n      console.log('Button 3');\n    }}\">Toggle 3</Button\n  >\n</ButtonGroup>\n"}}),{c(){t=x("h1"),t.textContent="Button groups",n=w(),oe(a.$$.fragment),s=w(),l=x("div"),oe(o.$$.fragment),r=w(),i=x("div"),oe(c.$$.fragment),u=w(),d=x("div"),oe(m.$$.fragment),g=w(),f=x("div"),oe(h.$$.fragment),v=w(),b=x("div"),oe(y.$$.fragment),k=w(),oe(N.$$.fragment),B=w(),F=x("div"),oe(T.$$.fragment),A=w(),oe(S.$$.fragment),C(t,"class","color--eb"),C(l,"class","margin-l"),C(i,"class","margin-l"),C(d,"class","margin-l"),C(f,"class","margin-l"),C(b,"class","margin-l"),C(F,"class","margin-xl")},m(e,p){$(e,t,p),$(e,n,p),re(a,e,p),$(e,s,p),$(e,l,p),re(o,l,null),$(e,r,p),$(e,i,p),re(c,i,null),$(e,u,p),$(e,d,p),re(m,d,null),$(e,g,p),$(e,f,p),re(h,f,null),$(e,v,p),$(e,b,p),re(y,b,null),$(e,k,p),re(N,e,p),$(e,B,p),$(e,F,p),re(T,F,null),$(e,A,p),re(S,e,p),L=!0},p(e,[t]){const n={};8192&t&&(n.$$scope={dirty:t,ctx:e}),o.$set(n);const a={};8192&t&&(a.$$scope={dirty:t,ctx:e}),c.$set(a);const s={};8192&t&&(s.$$scope={dirty:t,ctx:e}),m.$set(s);const l={};8192&t&&(l.$$scope={dirty:t,ctx:e}),h.$set(l);const r={};8192&t&&(r.$$scope={dirty:t,ctx:e}),y.$set(r);const i={};8192&t&&(i.$$scope={dirty:t,ctx:e}),T.$set(i)},i(e){L||(te(a.$$.fragment,e),te(o.$$.fragment,e),te(c.$$.fragment,e),te(m.$$.fragment,e),te(h.$$.fragment,e),te(y.$$.fragment,e),te(N.$$.fragment,e),te(T.$$.fragment,e),te(S.$$.fragment,e),L=!0)},o(e){ne(a.$$.fragment,e),ne(o.$$.fragment,e),ne(c.$$.fragment,e),ne(m.$$.fragment,e),ne(h.$$.fragment,e),ne(y.$$.fragment,e),ne(N.$$.fragment,e),ne(T.$$.fragment,e),ne(S.$$.fragment,e),L=!1},d(e){e&&p(t),e&&p(n),ie(a,e),e&&p(s),e&&p(l),ie(o),e&&p(r),e&&p(i),ie(c),e&&p(u),e&&p(d),ie(m),e&&p(g),e&&p(f),ie(h),e&&p(v),e&&p(b),ie(y),e&&p(k),ie(N,e),e&&p(B),e&&p(F),ie(T),e&&p(A),ie(S,e)}}}function da(e){return[()=>{console.log("Click 1")},()=>{console.log("Click 2")},()=>{console.log("Click 1")},()=>{console.log("Click 2")},()=>{console.log("Click 1")},()=>{console.log("Click 2")},()=>{console.log("Click 1")},()=>{console.log("Click 2")},()=>{console.log("Click 1")},()=>{console.log("Click 2")},()=>{console.log("Button 1")},()=>{console.log("Button 2")},()=>{console.log("Button 3")}]}function ma(e){let t;return{c(){t=x("div"),t.textContent="Header",C(t,"slot","header")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function ga(e){let t;return{c(){t=x("div"),t.textContent="Her er der indhold, der bare er godt",C(t,"slot","content")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function fa(e){let t;return{c(){t=x("div"),t.textContent="Vi har også en footer",C(t,"slot","footer")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function $a(t){let n,a;return{c(){n=w(),a=w()},m(e,t){$(e,n,t),$(e,a,t)},p:e,d(e){e&&p(n),e&&p(a)}}}function pa(e){let t;return{c(){t=x("div"),t.innerHTML="<b>Avisen</b>",C(t,"class","text-align--center"),C(t,"slot","header")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function ha(e){let t;return{c(){t=x("div"),t.innerHTML='<p class="margin-none margin-l--b">Cras sed viverra tortor. Sed dictum lacus nec velit ultricies viverra sed tincidunt mi. Nulla mi velit, dictum\n        sed tempor vitae, mattis a felis.</p> \n      <p class="card-meta color--graa2 text-align--center">Buy for only:</p> \n      <h3 class="card-title text-align--center">120<small>,-</small></h3>',C(t,"slot","content")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function xa(e){let t;return{c(){t=b("Vælg")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function va(e){let t,n,a;return n=new mn({props:{$$slots:{default:[xa]},$$scope:{ctx:e}}}),{c(){t=x("div"),oe(n.$$.fragment),C(t,"class","text-align--center"),C(t,"slot","footer")},m(e,s){$(e,t,s),re(n,t,null),a=!0},p(e,t){const a={};1&t&&(a.$$scope={dirty:t,ctx:e}),n.$set(a)},i(e){a||(te(n.$$.fragment,e),a=!0)},o(e){ne(n.$$.fragment,e),a=!1},d(e){e&&p(t),ie(n)}}}function ba(t){let n,a;return{c(){n=w(),a=w()},m(e,t){$(e,n,t),$(e,a,t)},p:e,i:e,o:e,d(e){e&&p(n),e&&p(a)}}}function wa(e){let t,n,a,s,l,o,r;return s=new Qe({props:{className:"margin-l",$$slots:{default:[$a],footer:[fa],content:[ga],header:[ma]},$$scope:{ctx:e}}}),o=new Qe({props:{className:"margin-l",$$slots:{default:[ba],footer:[va],content:[ha],header:[pa]},$$scope:{ctx:e}}}),{c(){t=x("div"),n=x("h1"),n.textContent="Card",a=w(),oe(s.$$.fragment),l=w(),oe(o.$$.fragment),C(n,"class","color--eb"),C(t,"class","grid-width--small")},m(e,i){$(e,t,i),f(t,n),f(t,a),re(s,t,null),f(t,l),re(o,t,null),r=!0},p(e,[t]){const n={};1&t&&(n.$$scope={dirty:t,ctx:e}),s.$set(n);const a={};1&t&&(a.$$scope={dirty:t,ctx:e}),o.$set(a)},i(e){r||(te(s.$$.fragment,e),te(o.$$.fragment,e),r=!0)},o(e){ne(s.$$.fragment,e),ne(o.$$.fragment,e),r=!1},d(e){e&&p(t),ie(s),ie(o)}}}function ya(e){let t,n,a;return{c(){t=x("i"),n=w(),a=x("i"),C(t,"class","far fa-check-circle form-checkbox-toggle--on"),C(t,"aria-hidden","true"),C(a,"class","far fa-circle form-checkbox-toggle--off"),C(a,"aria-hidden","true")},m(e,s){$(e,t,s),$(e,n,s),$(e,a,s)},d(e){e&&p(t),e&&p(n),e&&p(a)}}}function ka(e){let t,n,a;return{c(){t=x("i"),n=w(),a=x("i"),C(t,"class","far fa-check-square form-checkbox-toggle--on"),C(t,"aria-hidden","true"),C(a,"class","far fa-square form-checkbox-toggle--off"),C(a,"aria-hidden","true")},m(e,s){$(e,t,s),$(e,n,s),$(e,a,s)},d(e){e&&p(t),e&&p(n),e&&p(a)}}}function Ca(t){let n,a,s,l,o,r;function i(e,t){return"checkbox"===e[3]?ka:ya}let c=i(t),u=c(t);return{c(){n=x("label"),a=x("input"),s=w(),l=x("span"),o=b(t[2]),r=w(),u.c(),C(a,"type",t[3]),C(a,"class",t[5]),C(a,"name",t[0]),C(a,"group",t[1]),a.value=t[4],C(l,"class","form-label")},m(e,t){$(e,n,t),f(n,a),f(n,s),f(n,l),f(l,o),f(l,r),u.m(l,null)},p(e,[t]){8&t&&C(a,"type",e[3]),32&t&&C(a,"class",e[5]),1&t&&C(a,"name",e[0]),2&t&&C(a,"group",e[1]),16&t&&a.value!==e[4]&&(a.value=e[4]),4&t&&N(o,e[2]),c!==(c=i(e))&&(u.d(1),u=c(e),u&&(u.c(),u.m(l,null)))},i:e,o:e,d(e){e&&p(n),u.d()}}}function Na(e,t,n){let{fieldName:a}=t,{group:s}=t,{label:l}=t,{inputtype:o="checkbox"}=t,{value:r}=t,{className:i}=t,c="form-checkbox form-checkbox--icon";return i&&(c=`${i} ${c}`),e.$$set=e=>{"fieldName"in e&&n(0,a=e.fieldName),"group"in e&&n(1,s=e.group),"label"in e&&n(2,l=e.label),"inputtype"in e&&n(3,o=e.inputtype),"value"in e&&n(4,r=e.value),"className"in e&&n(6,i=e.className)},[a,s,l,o,r,c,i]}class Ba extends ue{constructor(e){super(),ce(this,e,Na,Ca,o,{fieldName:0,group:1,label:2,inputtype:3,value:4,className:6})}}function Fa(e){let t,n,a,s,l;const o=e[5].default,r=c(o,e,e[4],null);return{c(){t=x("label"),n=b(e[0]),a=w(),s=x("select"),r&&r.c(),C(t,"class","form-label"),C(t,"for","select"),C(s,"classname",e[1]),C(s,"id","select")},m(e,o){$(e,t,o),f(t,n),$(e,a,o),$(e,s,o),r&&r.m(s,null),l=!0},p(e,[t]){(!l||1&t)&&N(n,e[0]),r&&r.p&&16&t&&d(r,o,e,e[4],t,null,null),(!l||2&t)&&C(s,"classname",e[1])},i(e){l||(te(r,e),l=!0)},o(e){ne(r,e),l=!1},d(e){e&&p(t),e&&p(a),e&&p(s),r&&r.d(e)}}}function Ta(e,t,n){let{$$slots:a={},$$scope:s}=t,{inputtype:l="text"}=t,{label:o}=t,{className:r}=t,i=`form-input form-input--${l}`;return r&&(i=`${r} ${i}`),e.$$set=e=>{"inputtype"in e&&n(2,l=e.inputtype),"label"in e&&n(0,o=e.label),"className"in e&&n(3,r=e.className),"$$scope"in e&&n(4,s=e.$$scope)},[o,i,l,r,s,a]}class Aa extends ue{constructor(e){super(),ce(this,e,Ta,Fa,o,{inputtype:2,label:0,className:3})}}function Sa(e){let t,n,a;return{c(){t=x("span"),n=b(e[1]),a=b(":"),C(t,"class","hidden")},m(e,s){$(e,t,s),f(t,n),f(t,a)},p(e,t){2&t&&N(n,e[1])},d(e){e&&p(t)}}}function La(t){let n,a,s,l,o=t[1]&&Sa(t);return{c(){n=x("div"),o&&o.c(),a=w(),s=x("input"),C(s,"type",t[0]),C(s,"placeholder",t[1]),C(s,"class",t[3]),C(n,"class",l=`form-input-container flex border-radius padding-m--rl ${t[2]}`)},m(e,t){$(e,n,t),o&&o.m(n,null),f(n,a),f(n,s)},p(e,[t]){e[1]?o?o.p(e,t):(o=Sa(e),o.c(),o.m(n,a)):o&&(o.d(1),o=null),1&t&&C(s,"type",e[0]),2&t&&C(s,"placeholder",e[1]),8&t&&C(s,"class",e[3]),4&t&&l!==(l=`form-input-container flex border-radius padding-m--rl ${e[2]}`)&&C(n,"class",l)},i:e,o:e,d(e){e&&p(n),o&&o.d()}}}function Pa(e,t,n){let{inputtype:a="text"}=t,{label:s}=t,{className:l}=t,{size:o="padding-m--tb"}=t,r=`form-input form-input--${a} width-1of1`;return l&&(r=`${l} ${r}`),L((()=>{document.querySelectorAll(".form-input").forEach(((e,t)=>{e.addEventListener("focus",(()=>{e.parentElement.classList.add("focus");e.previousElementSibling.classList.remove("hidden")})),e.addEventListener("focusout",(()=>{e.parentElement.classList.remove("focus");if(0===document.querySelectorAll(".form-input")[t].value.length){e.previousElementSibling.classList.add("hidden")}}))}))})),e.$$set=e=>{"inputtype"in e&&n(0,a=e.inputtype),"label"in e&&n(1,s=e.label),"className"in e&&n(4,l=e.className),"size"in e&&n(2,o=e.size)},[a,s,o,r,l]}class za extends ue{constructor(e){super(),ce(this,e,Pa,La,o,{inputtype:0,label:1,className:4,size:2})}}function Ea(e){let t,n,a;return{c(){t=x("span"),n=b(e[0]),a=b(":"),C(t,"class","hidden")},m(e,s){$(e,t,s),f(t,n),f(t,a)},p(e,t){1&t&&N(n,e[0])},d(e){e&&p(t)}}}function ja(t){let n,a,s,l,o=t[0]&&Ea(t);return{c(){n=x("div"),o&&o.c(),a=w(),s=x("textarea"),C(s,"class",t[2]),C(s,"placeholder",t[0]),C(n,"class",l=`form-input-container flex flex-column border-radius padding-m--rl ${t[1]}`)},m(e,t){$(e,n,t),o&&o.m(n,null),f(n,a),f(n,s)},p(e,[t]){e[0]?o?o.p(e,t):(o=Ea(e),o.c(),o.m(n,a)):o&&(o.d(1),o=null),4&t&&C(s,"class",e[2]),1&t&&C(s,"placeholder",e[0]),2&t&&l!==(l=`form-input-container flex flex-column border-radius padding-m--rl ${e[1]}`)&&C(n,"class",l)},i:e,o:e,d(e){e&&p(n),o&&o.d()}}}function _a(e,t,n){let{inputtype:a="textarea"}=t,{label:s}=t,{className:l}=t,{size:o="padding-m--tb"}=t,r=`form-input form-input--${a} width-1of1`;return l&&(r=`${l} ${r}`),L((()=>{document.querySelectorAll(".form-input").forEach(((e,t)=>{e.addEventListener("focus",(()=>{e.parentElement.classList.add("focus");e.previousElementSibling.classList.remove("hidden")})),e.addEventListener("focusout",(()=>{e.parentElement.classList.remove("focus");if(0===document.querySelectorAll(".form-input")[t].value.length){e.previousElementSibling.classList.add("hidden")}}))}))})),e.$$set=e=>{"inputtype"in e&&n(3,a=e.inputtype),"label"in e&&n(0,s=e.label),"className"in e&&n(4,l=e.className),"size"in e&&n(1,o=e.size)},[s,o,r,a,l]}class Ma extends ue{constructor(e){super(),ce(this,e,_a,ja,o,{inputtype:3,label:0,className:4,size:1})}}function Ha(e){let t;const n=e[8].default,a=c(n,e,e[9],null);return{c(){a&&a.c()},m(e,n){a&&a.m(e,n),t=!0},p(e,t){a&&a.p&&512&t&&d(a,n,e,e[9],t,null,null)},i(e){t||(te(a,e),t=!0)},o(e){ne(a,e),t=!1},d(e){a&&a.d(e)}}}function qa(e){let t,n,a;var s=e[7];function l(e){return{props:{class:e[1],size:e[0],label:e[5],inputtype:e[4],group:e[3],value:e[6],name:e[2],$$slots:{default:[Ha]},$$scope:{ctx:e}}}}return s&&(n=new s(l(e))),{c(){t=x("div"),n&&oe(n.$$.fragment),C(t,"class","form-element margin-l--b")},m(e,s){$(e,t,s),n&&re(n,t,null),a=!0},p(e,[a]){const o={};if(2&a&&(o.class=e[1]),1&a&&(o.size=e[0]),32&a&&(o.label=e[5]),16&a&&(o.inputtype=e[4]),8&a&&(o.group=e[3]),64&a&&(o.value=e[6]),4&a&&(o.name=e[2]),512&a&&(o.$$scope={dirty:a,ctx:e}),s!==(s=e[7])){if(n){Q();const e=n;ne(e.$$.fragment,1,0,(()=>{ie(e,1)})),ee()}s?(n=new s(l(e)),oe(n.$$.fragment),te(n.$$.fragment,1),re(n,t,null)):n=null}else s&&n.$set(o)},i(e){a||(n&&te(n.$$.fragment,e),a=!0)},o(e){n&&ne(n.$$.fragment,e),a=!1},d(e){e&&p(t),n&&ie(n)}}}function Oa(e,t,n){let{$$slots:a={},$$scope:s}=t,{className:l}=t,{fieldName:o}=t,{group:r}=t,{inputtype:i="text"}=t,{label:c}=t,{value:u}=t,{size:d="medium"}=t,m=za;switch(i){case"select":m=Aa;break;case"checkbox":case"radio":m=Ba;break;case"textarea":m=Ma}switch(d){case"small":d="padding-s--tb";break;case"medium":d="padding-m--tb";break;case"large":d="padding-l--tb"}return e.$$set=e=>{"className"in e&&n(1,l=e.className),"fieldName"in e&&n(2,o=e.fieldName),"group"in e&&n(3,r=e.group),"inputtype"in e&&n(4,i=e.inputtype),"label"in e&&n(5,c=e.label),"value"in e&&n(6,u=e.value),"size"in e&&n(0,d=e.size),"$$scope"in e&&n(9,s=e.$$scope)},[d,l,o,r,i,c,u,m,a,s]}class Da extends ue{constructor(e){super(),ce(this,e,Oa,qa,o,{className:1,fieldName:2,group:3,inputtype:4,label:5,value:6,size:0})}}function Ia(e){let t,n,a;return{c(){t=x("option"),t.textContent="Option 1",n=w(),a=x("option"),a.textContent="Option 2",t.__value="optioin1",t.value=t.__value,a.__value="optioin2",a.value=a.__value},m(e,s){$(e,t,s),$(e,n,s),$(e,a,s)},d(e){e&&p(t),e&&p(n),e&&p(a)}}}function Ga(e){let t,n,a,s,l,o,r,i,c,u,d,m,g,f,h,x,v,b,y,k;function C(t){e[1](t)}t=new Da({props:{inputtype:"text",size:"small",label:"input size small"}}),a=new Da({props:{inputtype:"text",label:"input size medium(standard)"}}),l=new Da({props:{inputtype:"text",size:"large",label:"input size large"}}),r=new Da({props:{inputtype:"select",label:"Noget indhold her",$$slots:{default:[Ia]},$$scope:{ctx:e}}}),c=new Da({props:{inputtype:"checkbox",label:"Check denne her"}});let N={inputtype:"radio",label:"Radio denne her",value:1};function B(t){e[2](t)}void 0!==e[0]&&(N.group=e[0]),d=new Da({props:N}),q.push((()=>le(d,"group",C)));let F={inputtype:"radio",label:"Radio denne her også",value:2};return void 0!==e[0]&&(F.group=e[0]),f=new Da({props:F}),q.push((()=>le(f,"group",B))),v=new Da({props:{inputtype:"number",label:"Noget tal indhold her"}}),y=new Da({props:{inputtype:"textarea",label:"Kommentar label"}}),{c(){oe(t.$$.fragment),n=w(),oe(a.$$.fragment),s=w(),oe(l.$$.fragment),o=w(),oe(r.$$.fragment),i=w(),oe(c.$$.fragment),u=w(),oe(d.$$.fragment),g=w(),oe(f.$$.fragment),x=w(),oe(v.$$.fragment),b=w(),oe(y.$$.fragment)},m(e,m){re(t,e,m),$(e,n,m),re(a,e,m),$(e,s,m),re(l,e,m),$(e,o,m),re(r,e,m),$(e,i,m),re(c,e,m),$(e,u,m),re(d,e,m),$(e,g,m),re(f,e,m),$(e,x,m),re(v,e,m),$(e,b,m),re(y,e,m),k=!0},p(e,[t]){const n={};8&t&&(n.$$scope={dirty:t,ctx:e}),r.$set(n);const a={};!m&&1&t&&(m=!0,a.group=e[0],U((()=>m=!1))),d.$set(a);const s={};!h&&1&t&&(h=!0,s.group=e[0],U((()=>h=!1))),f.$set(s)},i(e){k||(te(t.$$.fragment,e),te(a.$$.fragment,e),te(l.$$.fragment,e),te(r.$$.fragment,e),te(c.$$.fragment,e),te(d.$$.fragment,e),te(f.$$.fragment,e),te(v.$$.fragment,e),te(y.$$.fragment,e),k=!0)},o(e){ne(t.$$.fragment,e),ne(a.$$.fragment,e),ne(l.$$.fragment,e),ne(r.$$.fragment,e),ne(c.$$.fragment,e),ne(d.$$.fragment,e),ne(f.$$.fragment,e),ne(v.$$.fragment,e),ne(y.$$.fragment,e),k=!1},d(e){ie(t,e),e&&p(n),ie(a,e),e&&p(s),ie(l,e),e&&p(o),ie(r,e),e&&p(i),ie(c,e),e&&p(u),ie(d,e),e&&p(g),ie(f,e),e&&p(x),ie(v,e),e&&p(b),ie(y,e)}}}function Ra(e,t,n){let a=1;return[a,function(e){a=e,n(0,a)},function(e){a=e,n(0,a)}]}function Va(e,t,n){const a=e.slice();return a[1]=t[n],a}function Ua(t){let n,a,s,l,o,r,i,c=t[1]+"";return a=new hn({props:{className:"margin-s",style:"width: 36px; height: 36px;",name:t[1]}}),{c(){n=x("div"),oe(a.$$.fragment),s=w(),l=x("small"),o=b(c),r=w(),C(n,"class","flex flex-column flex-align--center flex-justify--center margin-m padding-m"),B(n,"border","1px solid #111"),B(n,"border-radius","5px")},m(e,t){$(e,n,t),re(a,n,null),f(n,s),f(n,l),f(l,o),f(n,r),i=!0},p:e,i(e){i||(te(a.$$.fragment,e),i=!0)},o(e){ne(a.$$.fragment,e),i=!1},d(e){e&&p(n),ie(a)}}}function Wa(e){let t,n,a,s,l,o,r,i,c,u=e[0],d=[];for(let t=0;t<u.length;t+=1)d[t]=Ua(Va(e,u,t));const m=e=>ne(d[e],1,1,(()=>{d[e]=null}));return i=new $t({props:{language:"html",source:'<Icon {name} className="margin-s" style="width: 36px; height: 36px;" />'}}),{c(){t=x("div"),n=x("h1"),n.textContent="Icon library",a=w(),s=x("p"),s.textContent="Der findes følgende svg ikoner",l=w(),o=x("div");for(let e=0;e<d.length;e+=1)d[e].c();r=w(),oe(i.$$.fragment),C(n,"class","color--eb"),C(o,"class","flex flex-wrap--wrap"),C(t,"class","grid-width--small")},m(e,u){$(e,t,u),f(t,n),f(t,a),f(t,s),f(t,l),f(t,o);for(let e=0;e<d.length;e+=1)d[e].m(o,null);f(t,r),re(i,t,null),c=!0},p(e,[t]){if(1&t){let n;for(u=e[0],n=0;n<u.length;n+=1){const a=Va(e,u,n);d[n]?(d[n].p(a,t),te(d[n],1)):(d[n]=Ua(a),d[n].c(),te(d[n],1),d[n].m(o,null))}for(Q(),n=u.length;n<d.length;n+=1)m(n);ee()}},i(e){if(!c){for(let e=0;e<u.length;e+=1)te(d[e]);te(i.$$.fragment,e),c=!0}},o(e){d=d.filter(Boolean);for(let e=0;e<d.length;e+=1)ne(d[e]);ne(i.$$.fragment,e),c=!1},d(e){e&&p(t),h(d,e),ie(i)}}}function Ya(e){return[["angle-down","angle-left","angle-right","angle-up","article","check","creditcard","ebplus_icon","ebplus_sort","envelope","gallery","headphones","headset","lock","medielogin","menu-bars","miteb-regular","miteb-solid","newspaper","play","smartphone","tag-regular","tag-solid","tags-regular","tags-solid","video"]]}function Za(e){let t,n,a,s,l,o,r;const i=e[6].default,u=c(i,e,e[5],null);return{c(){t=x("div"),n=x("button"),n.innerHTML='<i class="fa fa-chevron-left"></i>',a=w(),s=x("button"),s.innerHTML='<i class="fa fa-chevron-right"></i>',l=w(),o=x("div"),u&&u.c(),C(n,"class","horizontal-scroll-nav"),C(n,"data-horizontallist","button-prev"),C(s,"class","horizontal-scroll-nav"),C(s,"data-horizontallist","button-next"),C(o,"class","horizontal-scroll-items flex padding-m--l padding-m--r"),C(o,"data-horizontallist","horizontallist"),C(t,"class","horizontal-scroll-container grid-width--large position-relative")},m(i,c){$(i,t,c),f(t,n),e[7](n),f(t,a),f(t,s),e[8](s),f(t,l),f(t,o),u&&u.m(o,null),e[9](o),e[10](t),r=!0},p(e,[t]){u&&u.p&&32&t&&d(u,i,e,e[5],t,null,null)},i(e){r||(te(u,e),r=!0)},o(e){ne(u,e),r=!1},d(n){n&&p(t),e[7](null),e[8](null),u&&u.d(n),e[9](null),e[10](null)}}}function Xa(e,t,n){let a,s,l,o,{$$slots:r={},$$scope:i}=t,{className:c}=t;return P((()=>{const e=s.children,t=e.length,r=a.getBoundingClientRect().right;let i=Array.from(e).filter((e=>e.getBoundingClientRect().right<=r)).length;if(i===t)n(2,l.style.display="none",l),n(3,o.style.display="none",o);else{const n=t-i;let a=0;function c(t){const n=e[t];s.scrollTo({behavior:"smooth",left:n.offsetLeft,top:0})}o.addEventListener("click",(function(){a!==n&&(a++,c(a))})),l.addEventListener("click",(function(){0!==a&&(a--,c(a))}))}})),e.$$set=e=>{"className"in e&&n(4,c=e.className),"$$scope"in e&&n(5,i=e.$$scope)},[a,s,l,o,c,i,r,function(e){q[e?"unshift":"push"]((()=>{l=e,n(2,l)}))},function(e){q[e?"unshift":"push"]((()=>{o=e,n(3,o)}))},function(e){q[e?"unshift":"push"]((()=>{s=e,n(1,s)}))},function(e){q[e?"unshift":"push"]((()=>{a=e,n(0,a)}))}]}class Ja extends ue{constructor(e){super(),ce(this,e,Xa,Za,o,{className:4})}}function Ka(e){let t,n,a,s,l,o,r;return{c(){t=x("div"),t.innerHTML='<a href="#d" class="card height-1of1"><div class="card-content"><p class="card-meta color--graa3"><small><span class="color--flash">flash!</span> - 2 timer siden</small></p> \n        <h3 class="card-title">Aliquam ultricies felis eget orci commodo fringilla</h3></div></a>',n=w(),a=x("div"),a.innerHTML='<a href="#c" class="card height-1of1"><div class="card-content"><p class="card-meta color--graa3"><small><span class="color--tv">TV</span> - 3 timer siden</small></p> \n        <h3 class="card-title">felis eget orci commodo ulimito</h3></div></a>',s=w(),l=x("div"),l.innerHTML='<a href="#b" class="card height-1of1"><div class="card-content"><p class="card-meta color--graa3"><small><span class="color--sport">sport</span> - 5 timer siden</small></p> \n        <h3 class="card-title">Ultricies commodo lecos mania</h3></div></a>',o=w(),r=x("div"),r.innerHTML='<a href="#a" class="card height-1of1"><div class="card-content"><p class="card-meta color--graa3"><small><span class="color--flash">nyheder</span> - 8 timer siden</small></p> \n        <h3 class="card-title">Fringilla levos tumio arcadia</h3></div></a>',C(t,"class","flex-item width-1of3 padding-m"),B(t,"min-width","300px"),C(a,"class","flex-item width-1of3 padding-m"),B(a,"min-width","300px"),C(l,"class","flex-item width-1of3 padding-m"),B(l,"min-width","300px"),C(r,"class","flex-item width-1of3 padding-m"),B(r,"min-width","300px")},m(e,i){$(e,t,i),$(e,n,i),$(e,a,i),$(e,s,i),$(e,l,i),$(e,o,i),$(e,r,i)},d(e){e&&p(t),e&&p(n),e&&p(a),e&&p(s),e&&p(l),e&&p(o),e&&p(r)}}}function Qa(e){let t,n,a,s;return a=new Ja({props:{$$slots:{default:[Ka]},$$scope:{ctx:e}}}),{c(){t=x("h1"),t.textContent="Horizontal Scroll",n=w(),oe(a.$$.fragment),C(t,"class","color--eb")},m(e,l){$(e,t,l),$(e,n,l),re(a,e,l),s=!0},p(e,[t]){const n={};1&t&&(n.$$scope={dirty:t,ctx:e}),a.$set(n)},i(e){s||(te(a.$$.fragment,e),s=!0)},o(e){ne(a.$$.fragment,e),s=!1},d(e){e&&p(t),e&&p(n),ie(a,e)}}}function es(e){let t,n;const a=e[3].default,s=c(a,e,e[2],null);return{c(){t=x("div"),s&&s.c(),C(t,"class",e[0])},m(e,a){$(e,t,a),s&&s.m(t,null),n=!0},p(e,[l]){s&&s.p&&4&l&&d(s,a,e,e[2],l,null,null),(!n||1&l)&&C(t,"class",e[0])},i(e){n||(te(s,e),n=!0)},o(e){ne(s,e),n=!1},d(e){e&&p(t),s&&s.d(e)}}}const ts={};function ns(e,t,n){let{$$slots:a={},$$scope:s}=t;const l=[],o=[],r=ge(null),i=ge(null);j(ts,{registerTab:e=>{l.push(e),r.update((t=>t||e)),z((()=>{const t=l.indexOf(e);l.splice(t,1),r.update((n=>n===e?l[t]||l[l.length-1]:n))}))},registerPanel:e=>{o.push(e),i.update((t=>t||e)),z((()=>{const t=o.indexOf(e);o.splice(t,1),i.update((n=>n===e?o[t]||o[o.length-1]:n))}))},selectButton:e=>{const t=l.indexOf(e);r.set(e),i.set(o[t])},selectedButton:r,selectedPanel:i});let{className:c}=t,u="pillcomponent";return c&&(u=`${c} ${u}`),e.$$set=e=>{"className"in e&&n(1,c=e.className),"$$scope"in e&&n(2,s=e.$$scope)},[u,c,s,a]}class as extends ue{constructor(e){super(),ce(this,e,ns,es,o,{className:1})}}function ss(e){let t,n,a,s,l;const o=e[7].default,r=c(o,e,e[6],null);return{c(){t=x("button"),r&&r.c(),C(t,"class",e[0]),C(t,"data-selected",n=e[1]===e[2])},m(n,o){$(n,t,o),r&&r.m(t,null),a=!0,s||(l=k(t,"click",e[8]),s=!0)},p(e,[s]){r&&r.p&&64&s&&d(r,o,e,e[6],s,null,null),(!a||1&s)&&C(t,"class",e[0]),(!a||2&s&&n!==(n=e[1]===e[2]))&&C(t,"data-selected",n)},i(e){a||(te(r,e),a=!0)},o(e){ne(r,e),a=!1},d(e){e&&p(t),r&&r.d(e),s=!1,l()}}}function ls(e,t,n){let a,{$$slots:s={},$$scope:l}=t;const o={},{registerTab:r,selectButton:c,selectedButton:u}=_(ts);i(e,u,(e=>n(1,a=e))),r(o);let{className:d}=t,m="button";d&&(m=`${d} ${m}`);return e.$$set=e=>{"className"in e&&n(5,d=e.className),"$$scope"in e&&n(6,l=e.$$scope)},[m,a,o,c,u,d,l,s,()=>c(o)]}class os extends ue{constructor(e){super(),ce(this,e,ls,ss,o,{className:5})}}function rs(e){let t;const n=e[4].default,a=c(n,e,e[3],null);return{c(){a&&a.c()},m(e,n){a&&a.m(e,n),t=!0},p(e,t){a&&a.p&&8&t&&d(a,n,e,e[3],t,null,null)},i(e){t||(te(a,e),t=!0)},o(e){ne(a,e),t=!1},d(e){a&&a.d(e)}}}function is(e){let t,n,a=e[0]===e[1]&&rs(e);return{c(){a&&a.c(),t=y()},m(e,s){a&&a.m(e,s),$(e,t,s),n=!0},p(e,[n]){e[0]===e[1]?a?(a.p(e,n),1&n&&te(a,1)):(a=rs(e),a.c(),te(a,1),a.m(t.parentNode,t)):a&&(Q(),ne(a,1,1,(()=>{a=null})),ee())},i(e){n||(te(a),n=!0)},o(e){ne(a),n=!1},d(e){a&&a.d(e),e&&p(t)}}}function cs(e,t,n){let a,{$$slots:s={},$$scope:l}=t;const o={},{registerPanel:r,selectedPanel:c}=_(ts);return i(e,c,(e=>n(0,a=e))),r(o),e.$$set=e=>{"$$scope"in e&&n(3,l=e.$$scope)},[a,o,c,l,s]}class us extends ue{constructor(e){super(),ce(this,e,cs,is,o,{})}}function ds(e){let t,n;const a=e[3].default,s=c(a,e,e[2],null);return{c(){t=x("div"),s&&s.c(),C(t,"class",e[0])},m(e,a){$(e,t,a),s&&s.m(t,null),n=!0},p(e,[l]){s&&s.p&&4&l&&d(s,a,e,e[2],l,null,null),(!n||1&l)&&C(t,"class",e[0])},i(e){n||(te(s,e),n=!0)},o(e){ne(s,e),n=!1},d(e){e&&p(t),s&&s.d(e)}}}function ms(e,t,n){let{$$slots:a={},$$scope:s}=t,{className:l}=t,o="pillnavigation toggle toggle--buttons";return l&&(o=`${l} ${o}`),e.$$set=e=>{"className"in e&&n(1,l=e.className),"$$scope"in e&&n(2,s=e.$$scope)},[o,l,s,a]}class gs extends ue{constructor(e){super(),ce(this,e,ms,ds,o,{className:1})}}function fs(e){let t;return{c(){t=b("Toggle 1")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function $s(e){let t;return{c(){t=b("Toggle 2")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function ps(e){let t,n,a,s;return t=new os({props:{$$slots:{default:[fs]},$$scope:{ctx:e}}}),a=new os({props:{$$slots:{default:[$s]},$$scope:{ctx:e}}}),{c(){oe(t.$$.fragment),n=w(),oe(a.$$.fragment)},m(e,l){re(t,e,l),$(e,n,l),re(a,e,l),s=!0},p(e,n){const s={};1&n&&(s.$$scope={dirty:n,ctx:e}),t.$set(s);const l={};1&n&&(l.$$scope={dirty:n,ctx:e}),a.$set(l)},i(e){s||(te(t.$$.fragment,e),te(a.$$.fragment,e),s=!0)},o(e){ne(t.$$.fragment,e),ne(a.$$.fragment,e),s=!1},d(e){ie(t,e),e&&p(n),ie(a,e)}}}function hs(e){let t;return{c(){t=b("Content 1")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function xs(e){let t;return{c(){t=b("Content 2")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function vs(e){let t,n,a,s,l,o;return t=new gs({props:{$$slots:{default:[ps]},$$scope:{ctx:e}}}),a=new us({props:{$$slots:{default:[hs]},$$scope:{ctx:e}}}),l=new us({props:{$$slots:{default:[xs]},$$scope:{ctx:e}}}),{c(){oe(t.$$.fragment),n=w(),oe(a.$$.fragment),s=w(),oe(l.$$.fragment)},m(e,r){re(t,e,r),$(e,n,r),re(a,e,r),$(e,s,r),re(l,e,r),o=!0},p(e,n){const s={};1&n&&(s.$$scope={dirty:n,ctx:e}),t.$set(s);const o={};1&n&&(o.$$scope={dirty:n,ctx:e}),a.$set(o);const r={};1&n&&(r.$$scope={dirty:n,ctx:e}),l.$set(r)},i(e){o||(te(t.$$.fragment,e),te(a.$$.fragment,e),te(l.$$.fragment,e),o=!0)},o(e){ne(t.$$.fragment,e),ne(a.$$.fragment,e),ne(l.$$.fragment,e),o=!1},d(e){ie(t,e),e&&p(n),ie(a,e),e&&p(s),ie(l,e)}}}function bs(e){let t;return{c(){t=b("Toggle 1")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function ws(e){let t;return{c(){t=b("Toggle 2")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function ys(e){let t;return{c(){t=b("Toggle 3")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function ks(e){let t,n,a,s,l,o;return t=new os({props:{$$slots:{default:[bs]},$$scope:{ctx:e}}}),a=new os({props:{$$slots:{default:[ws]},$$scope:{ctx:e}}}),l=new os({props:{$$slots:{default:[ys]},$$scope:{ctx:e}}}),{c(){oe(t.$$.fragment),n=w(),oe(a.$$.fragment),s=w(),oe(l.$$.fragment)},m(e,r){re(t,e,r),$(e,n,r),re(a,e,r),$(e,s,r),re(l,e,r),o=!0},p(e,n){const s={};1&n&&(s.$$scope={dirty:n,ctx:e}),t.$set(s);const o={};1&n&&(o.$$scope={dirty:n,ctx:e}),a.$set(o);const r={};1&n&&(r.$$scope={dirty:n,ctx:e}),l.$set(r)},i(e){o||(te(t.$$.fragment,e),te(a.$$.fragment,e),te(l.$$.fragment,e),o=!0)},o(e){ne(t.$$.fragment,e),ne(a.$$.fragment,e),ne(l.$$.fragment,e),o=!1},d(e){ie(t,e),e&&p(n),ie(a,e),e&&p(s),ie(l,e)}}}function Cs(e){let t;return{c(){t=x("div"),t.innerHTML="<h1>Content 1</h1> \n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porttitor sagittis metus in efficitur.\n          Phasellus molestie scelerisque commodo. Fusce accumsan efficitur urna eu tristique. Proin semper fermentum\n          ante sed molestie. Sed nec quam orci. Nunc diam neque, blandit a dictum id, posuere in lacus. Nulla rutrum\n          pretium nulla. Aenean sollicitudin, magna et eleifend mollis, tortor turpis varius nibh, non interdum lectus\n          orci ac libero. Curabitur nisi libero, pellentesque ut mi eget, efficitur efficitur sem.</p>"},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function Ns(e){let t;return{c(){t=x("div"),t.innerHTML="<h1>Content 2</h1> \n        <p>Aenean in ipsum varius, facilisis leo nec, aliquam mauris. Nunc sagittis nunc interdum consectetur posuere.\n          Vivamus tempus volutpat orci. Maecenas luctus posuere massa sollicitudin ultrices. Nam venenatis feugiat\n          imperdiet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent efficitur ex vel lacus\n          vehicula convallis. Vivamus a metus facilisis, consequat felis vitae, fringilla nisi. Aliquam maximus nibh eu\n          justo lobortis auctor. In facilisis iaculis sodales. Aliquam vehicula, massa nec eleifend maximus, elit ante\n          convallis eros, ac ultricies justo risus non turpis. Class aptent taciti sociosqu ad litora torquent per\n          conubia nostra, per inceptos himenaeos. Maecenas ornare ex vitae tellus aliquet, a iaculis turpis vehicula.\n          Vestibulum scelerisque metus lectus, id egestas eros dignissim ut. Aenean et nisi vel purus vehicula lacinia\n          ut sit amet ligula. Sed ultrices nisi orci, non pellentesque erat dignissim ac.</p>"},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function Bs(e){let t;return{c(){t=x("div"),t.innerHTML="<h1>Content 3</h1> \n        <p>Donec mattis arcu metus, et accumsan erat consectetur eget. Pellentesque porta sollicitudin lectus, a commodo\n          sem sollicitudin sit amet. Sed pharetra vel nulla id bibendum. In consectetur pulvinar purus non cursus. In\n          hac habitasse platea dictumst. Nullam placerat nunc sem, at auctor massa venenatis nec. Ut at dignissim dolor.\n          Pellentesque vestibulum porta lorem, a iaculis felis accumsan vel. Sed vel orci vehicula dolor congue eleifend\n          et non nibh. Duis a pharetra diam, a dapibus dui. Aenean maximus fringilla nunc, ut sollicitudin erat\n          vulputate tincidunt. Proin nisl ipsum, tristique et varius sit amet, elementum eget magna. Phasellus eu est\n          pretium erat blandit suscipit sed eu nisl.</p>"},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function Fs(e){let t,n,a,s,l,o,r,i;return t=new gs({props:{$$slots:{default:[ks]},$$scope:{ctx:e}}}),a=new us({props:{$$slots:{default:[Cs]},$$scope:{ctx:e}}}),l=new us({props:{$$slots:{default:[Ns]},$$scope:{ctx:e}}}),r=new us({props:{$$slots:{default:[Bs]},$$scope:{ctx:e}}}),{c(){oe(t.$$.fragment),n=w(),oe(a.$$.fragment),s=w(),oe(l.$$.fragment),o=w(),oe(r.$$.fragment)},m(e,c){re(t,e,c),$(e,n,c),re(a,e,c),$(e,s,c),re(l,e,c),$(e,o,c),re(r,e,c),i=!0},p(e,n){const s={};1&n&&(s.$$scope={dirty:n,ctx:e}),t.$set(s);const o={};1&n&&(o.$$scope={dirty:n,ctx:e}),a.$set(o);const i={};1&n&&(i.$$scope={dirty:n,ctx:e}),l.$set(i);const c={};1&n&&(c.$$scope={dirty:n,ctx:e}),r.$set(c)},i(e){i||(te(t.$$.fragment,e),te(a.$$.fragment,e),te(l.$$.fragment,e),te(r.$$.fragment,e),i=!0)},o(e){ne(t.$$.fragment,e),ne(a.$$.fragment,e),ne(l.$$.fragment,e),ne(r.$$.fragment,e),i=!1},d(e){ie(t,e),e&&p(n),ie(a,e),e&&p(s),ie(l,e),e&&p(o),ie(r,e)}}}function Ts(e){let t,n,a,s,l,o,r,i,c,u,d,m,g,f;return a=new $t({props:{language:"js",source:"import PillNavigation, { Pill, PillContent, PillList } from '@ekstra-bladet/designsystem/src/_components/pillnavigation';"}}),o=new as({props:{$$slots:{default:[vs]},$$scope:{ctx:e}}}),i=new $t({props:{language:"html",source:"\n<PillNavigation>\n  <PillList>\n    <Pill>Toggle 1</Pill>\n    <Pill>Toggle 2</Pill>\n  </PillList>\n  <PillContent>Content 1</PillContent>\n  <PillContent>Content 2</PillContent>\n</PillNavigation>\n"}}),d=new as({props:{$$slots:{default:[Fs]},$$scope:{ctx:e}}}),g=new $t({props:{language:"html",source:"\n<PillNavigation>\n    <PillList>\n      <Pill>Toggle 1</Pill>\n      <Pill>Toggle 2</Pill>\n      <Pill>Toggle 3</Pill>\n    </PillList>\n    <PillContent>\n      <div>\n        <h1>Content 1</h1>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipiscing...\n        </p>\n      </div>\n    </PillContent>\n    <PillContent>\n      <div>\n        <h1>Content 2</h1>\n        <p>\n          Aenean in ipsum varius, facilisis leo nec...\n        </p>\n      </div>\n    </PillContent>\n    <PillContent>\n      <div>\n        <h1>Content 3</h1>\n        <p>\n          Donec mattis arcu metus, et accumsan erat...\n        </p>\n      </div>\n    </PillContent>\n  </PillNavigation>\n"}}),{c(){t=x("h1"),t.textContent="Pill navigation / Toggle buttons",n=w(),oe(a.$$.fragment),s=w(),l=x("div"),oe(o.$$.fragment),r=w(),oe(i.$$.fragment),c=w(),u=x("div"),oe(d.$$.fragment),m=w(),oe(g.$$.fragment),C(t,"class","color--eb"),C(l,"class","margin-xl"),C(u,"class","margin-xl")},m(e,p){$(e,t,p),$(e,n,p),re(a,e,p),$(e,s,p),$(e,l,p),re(o,l,null),$(e,r,p),re(i,e,p),$(e,c,p),$(e,u,p),re(d,u,null),$(e,m,p),re(g,e,p),f=!0},p(e,[t]){const n={};1&t&&(n.$$scope={dirty:t,ctx:e}),o.$set(n);const a={};1&t&&(a.$$scope={dirty:t,ctx:e}),d.$set(a)},i(e){f||(te(a.$$.fragment,e),te(o.$$.fragment,e),te(i.$$.fragment,e),te(d.$$.fragment,e),te(g.$$.fragment,e),f=!0)},o(e){ne(a.$$.fragment,e),ne(o.$$.fragment,e),ne(i.$$.fragment,e),ne(d.$$.fragment,e),ne(g.$$.fragment,e),f=!1},d(e){e&&p(t),e&&p(n),ie(a,e),e&&p(s),e&&p(l),ie(o),e&&p(r),ie(i,e),e&&p(c),e&&p(u),ie(d),e&&p(m),ie(g,e)}}}function As(e){let t;return{c(){t=x("div"),t.innerHTML='<i class="fas fa-circle bounce bounce1"></i> \n    <i class="fas fa-circle bounce bounce2"></i> \n    <i class="fas fa-circle bounce bounce3"></i>',C(t,"class","loader flex flex--center")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function Ss(t){let n,a=t[0]&&As();return{c(){a&&a.c(),n=y()},m(e,t){a&&a.m(e,t),$(e,n,t)},p(e,[t]){e[0]?a||(a=As(),a.c(),a.m(n.parentNode,n)):a&&(a.d(1),a=null)},i:e,o:e,d(e){a&&a.d(e),e&&p(n)}}}function Ls(e,t,n){let{isLoading:a=!1}=t;return e.$$set=e=>{"isLoading"in e&&n(0,a=e.isLoading)},[a]}class Ps extends ue{constructor(e){super(),ce(this,e,Ls,Ss,o,{isLoading:0})}}function zs(t){let n,a,s,l,o,r,i,c,u,d,m;return s=new $t({props:{language:"js",source:"import Spinner from '@ekstra-bladet/designsystem/src/_components/spinner'"}}),r=new Ps({props:{isLoading:Es}}),c=new $t({props:{language:"html",source:"<Spinner isLoading={true}/>"}}),d=new $t({props:{language:"html",source:"<Spinner isLoading={false}/>"}}),{c(){n=x("h1"),n.textContent="Spinner",a=w(),oe(s.$$.fragment),l=w(),o=x("div"),oe(r.$$.fragment),i=w(),oe(c.$$.fragment),u=w(),oe(d.$$.fragment),C(n,"class","color--eb"),C(o,"class","padding-l bg--graa5")},m(e,t){$(e,n,t),$(e,a,t),re(s,e,t),$(e,l,t),$(e,o,t),re(r,o,null),$(e,i,t),re(c,e,t),$(e,u,t),re(d,e,t),m=!0},p:e,i(e){m||(te(s.$$.fragment,e),te(r.$$.fragment,e),te(c.$$.fragment,e),te(d.$$.fragment,e),m=!0)},o(e){ne(s.$$.fragment,e),ne(r.$$.fragment,e),ne(c.$$.fragment,e),ne(d.$$.fragment,e),m=!1},d(e){e&&p(n),e&&p(a),ie(s,e),e&&p(l),e&&p(o),ie(r),e&&p(i),ie(c,e),e&&p(u),ie(d,e)}}}let Es=!0;const js=e=>({}),_s=e=>({}),Ms=e=>({}),Hs=e=>({}),qs=e=>({}),Os=e=>({}),Ds=e=>({}),Is=e=>({});function Gs(e){let t,n,a,s,l,o;const r=[Us,Vs],i=[];function c(e,t){return e[2]?0:1}return n=c(e),a=i[n]=r[n](e),{c(){t=x("button"),a.c(),C(t,"class",e[1])},m(a,r){$(a,t,r),i[n].m(t,null),s=!0,l||(o=k(t,"click",e[13]),l=!0)},p(e,l){let o=n;n=c(e),n===o?i[n].p(e,l):(Q(),ne(i[o],1,1,(()=>{i[o]=null})),ee(),a=i[n],a?a.p(e,l):(a=i[n]=r[n](e),a.c()),te(a,1),a.m(t,null)),(!s||2&l)&&C(t,"class",e[1])},i(e){s||(te(a),s=!0)},o(e){ne(a),s=!1},d(e){e&&p(t),i[n].d(),l=!1,o()}}}function Rs(e){let t,n,a,l,o,r,i,u,m,g,h,v;const b=e[8].on,y=c(b,e,e[7],Is);function N(t){e[10](t)}let B={className:"margin-s--rl",width:"20",style:"cursor: pointer;"};void 0!==e[3]&&(B.name=e[3]),o=new hn({props:B}),q.push((()=>le(o,"name",N))),o.$on("click",e[11]);const F=e[8].off,T=c(F,e,e[7],Os);return{c(){t=x("div"),n=x("button"),y&&y.c(),l=w(),oe(o.$$.fragment),i=w(),u=x("button"),T&&T.c(),C(n,"data-status",e[2]),C(n,"class",a="toggle--switch "+e[1]),C(u,"data-status",e[2]),C(u,"class",m="toggle--switch "+e[1]),C(t,"class","flex flex-align--center")},m(a,s){$(a,t,s),f(t,n),y&&y.m(n,null),f(t,l),re(o,t,null),f(t,i),f(t,u),T&&T.m(u,null),g=!0,h||(v=[k(n,"click",e[9]),k(u,"click",e[12])],h=!0)},p(e,t){y&&y.p&&128&t&&d(y,b,e,e[7],t,Ds,Is),(!g||4&t)&&C(n,"data-status",e[2]),(!g||2&t&&a!==(a="toggle--switch "+e[1]))&&C(n,"class",a);const s={};!r&&8&t&&(r=!0,s.name=e[3],U((()=>r=!1))),o.$set(s),T&&T.p&&128&t&&d(T,F,e,e[7],t,qs,Os),(!g||4&t)&&C(u,"data-status",e[2]),(!g||2&t&&m!==(m="toggle--switch "+e[1]))&&C(u,"class",m)},i(e){g||(te(y,e),te(o.$$.fragment,e),te(T,e),g=!0)},o(e){ne(y,e),ne(o.$$.fragment,e),ne(T,e),g=!1},d(e){e&&p(t),y&&y.d(e),ie(o),T&&T.d(e),h=!1,s(v)}}}function Vs(e){let t;const n=e[8].off,a=c(n,e,e[7],_s);return{c(){a&&a.c()},m(e,n){a&&a.m(e,n),t=!0},p(e,t){a&&a.p&&128&t&&d(a,n,e,e[7],t,js,_s)},i(e){t||(te(a,e),t=!0)},o(e){ne(a,e),t=!1},d(e){a&&a.d(e)}}}function Us(e){let t;const n=e[8].on,a=c(n,e,e[7],Hs);return{c(){a&&a.c()},m(e,n){a&&a.m(e,n),t=!0},p(e,t){a&&a.p&&128&t&&d(a,n,e,e[7],t,Ms,Hs)},i(e){t||(te(a,e),t=!0)},o(e){ne(a,e),t=!1},d(e){a&&a.d(e)}}}function Ws(e){let t,n,a,s;const l=[Rs,Gs],o=[];function r(e,t){return e[0]?0:1}return t=r(e),n=o[t]=l[t](e),{c(){n.c(),a=y()},m(e,n){o[t].m(e,n),$(e,a,n),s=!0},p(e,[s]){let i=t;t=r(e),t===i?o[t].p(e,s):(Q(),ne(o[i],1,1,(()=>{o[i]=null})),ee(),n=o[t],n?n.p(e,s):(n=o[t]=l[t](e),n.c()),te(n,1),n.m(a.parentNode,a))},i(e){s||(te(n),s=!0)},o(e){ne(n),s=!1},d(e){o[t].d(e),e&&p(a)}}}function Ys(e,t,n){let{$$slots:a={},$$scope:s}=t,{className:l}=t,{defaultState:o=!0}=t,{isSwitch:r=!1}=t,i="toggle-button";l&&(i=`${l} ${i}`);let c=o,u=c?"toggle-on":"toggle-off";const d=E();function m(e){n(2,c=null!=e?e:!c),n(3,u=c?"toggle-on":"toggle-off"),d("toggle",c)}return e.$$set=e=>{"className"in e&&n(5,l=e.className),"defaultState"in e&&n(6,o=e.defaultState),"isSwitch"in e&&n(0,r=e.isSwitch),"$$scope"in e&&n(7,s=e.$$scope)},[r,i,c,u,m,l,o,s,a,()=>m(!0),function(e){u=e,n(3,u)},()=>m(),()=>m(!1),()=>m()]}class Zs extends ue{constructor(e){super(),ce(this,e,Ys,Ws,o,{className:5,defaultState:6,isSwitch:0})}}const Xs=e=>({}),Js=e=>({slot:"off"}),Ks=e=>({}),Qs=e=>({slot:"on"}),el=e=>({}),tl=e=>({slot:"off"}),nl=e=>({}),al=e=>({slot:"on"}),sl=e=>({}),ll=e=>({slot:"off"}),ol=e=>({}),rl=e=>({slot:"on"}),il=e=>({}),cl=e=>({slot:"off"}),ul=e=>({}),dl=e=>({slot:"on"});function ml(e){let t;const n=e[0].default,a=c(n,e,e[5],dl),s=a||function(e){let t;return{c(){t=b("on")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}();return{c(){s&&s.c()},m(e,n){s&&s.m(e,n),t=!0},p(e,t){a&&a.p&&32&t&&d(a,n,e,e[5],t,ul,dl)},i(e){t||(te(s,e),t=!0)},o(e){ne(s,e),t=!1},d(e){s&&s.d(e)}}}function gl(e){let t;const n=e[0].default,a=c(n,e,e[5],cl),s=a||function(e){let t;return{c(){t=b("off")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}();return{c(){s&&s.c()},m(e,n){s&&s.m(e,n),t=!0},p(e,t){a&&a.p&&32&t&&d(a,n,e,e[5],t,il,cl)},i(e){t||(te(s,e),t=!0)},o(e){ne(s,e),t=!1},d(e){s&&s.d(e)}}}function fl(t){let n;return{c(){n=w()},m(e,t){$(e,n,t)},p:e,i:e,o:e,d(e){e&&p(n)}}}function $l(t){let n;const a=t[0].default,s=c(a,t,t[5],rl),l=s||function(t){let n,a;return n=new hn({props:{name:"angle-down",style:"width: 24px; height: 24px;"}}),{c(){oe(n.$$.fragment)},m(e,t){re(n,e,t),a=!0},p:e,i(e){a||(te(n.$$.fragment,e),a=!0)},o(e){ne(n.$$.fragment,e),a=!1},d(e){ie(n,e)}}}();return{c(){l&&l.c()},m(e,t){l&&l.m(e,t),n=!0},p(e,t){s&&s.p&&32&t&&d(s,a,e,e[5],t,ol,rl)},i(e){n||(te(l,e),n=!0)},o(e){ne(l,e),n=!1},d(e){l&&l.d(e)}}}function pl(t){let n;const a=t[0].default,s=c(a,t,t[5],ll),l=s||function(t){let n,a;return n=new hn({props:{name:"angle-up",style:"width: 24px; height: 24px;"}}),{c(){oe(n.$$.fragment)},m(e,t){re(n,e,t),a=!0},p:e,i(e){a||(te(n.$$.fragment,e),a=!0)},o(e){ne(n.$$.fragment,e),a=!1},d(e){ie(n,e)}}}();return{c(){l&&l.c()},m(e,t){l&&l.m(e,t),n=!0},p(e,t){s&&s.p&&32&t&&d(s,a,e,e[5],t,sl,ll)},i(e){n||(te(l,e),n=!0)},o(e){ne(l,e),n=!1},d(e){l&&l.d(e)}}}function hl(t){let n;return{c(){n=w()},m(e,t){$(e,n,t)},p:e,i:e,o:e,d(e){e&&p(n)}}}function xl(e){let t;const n=e[0].default,a=c(n,e,e[5],al),s=a||function(e){let t;return{c(){t=b("on")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}();return{c(){s&&s.c()},m(e,n){s&&s.m(e,n),t=!0},p(e,t){a&&a.p&&32&t&&d(a,n,e,e[5],t,nl,al)},i(e){t||(te(s,e),t=!0)},o(e){ne(s,e),t=!1},d(e){s&&s.d(e)}}}function vl(e){let t;const n=e[0].default,a=c(n,e,e[5],tl),s=a||function(e){let t;return{c(){t=b("off")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}();return{c(){s&&s.c()},m(e,n){s&&s.m(e,n),t=!0},p(e,t){a&&a.p&&32&t&&d(a,n,e,e[5],t,el,tl)},i(e){t||(te(s,e),t=!0)},o(e){ne(s,e),t=!1},d(e){s&&s.d(e)}}}function bl(t){let n;return{c(){n=w()},m(e,t){$(e,n,t)},p:e,i:e,o:e,d(e){e&&p(n)}}}function wl(e){let t;const n=e[0].default,a=c(n,e,e[5],Qs),s=a||function(e){let t;return{c(){t=b("on")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}();return{c(){s&&s.c()},m(e,n){s&&s.m(e,n),t=!0},p(e,t){a&&a.p&&32&t&&d(a,n,e,e[5],t,Ks,Qs)},i(e){t||(te(s,e),t=!0)},o(e){ne(s,e),t=!1},d(e){s&&s.d(e)}}}function yl(e){let t;const n=e[0].default,a=c(n,e,e[5],Js),s=a||function(e){let t;return{c(){t=b("off")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}();return{c(){s&&s.c()},m(e,n){s&&s.m(e,n),t=!0},p(e,t){a&&a.p&&32&t&&d(a,n,e,e[5],t,Xs,Js)},i(e){t||(te(s,e),t=!0)},o(e){ne(s,e),t=!1},d(e){s&&s.d(e)}}}function kl(t){let n;return{c(){n=w()},m(e,t){$(e,n,t)},p:e,i:e,o:e,d(e){e&&p(n)}}}function Cl(e){let t,n,a,s,l,o,r,i,c,u,d,m,g,f,h,v,b,y,k,N,B,F,T,A;return a=new $t({props:{language:"js",source:"import Toggler from '@ekstra-bladet/designsystem/src/_components/toggler';"}}),r=new Zs({props:{$$slots:{default:[fl],off:[gl],on:[ml]},$$scope:{ctx:e}}}),r.$on("toggle",e[1]),c=new $t({props:{language:"html",source:'\n<Toggler on:toggle="{(event) => {\n    console.log(\'hello its on?\', event.detail);\n  }}">\n  <slot slot="on">on</slot>\n  <slot slot="off">off</slot>\n</Toggler>\n'}}),g=new Zs({props:{$$slots:{default:[hl],off:[pl],on:[$l]},$$scope:{ctx:e}}}),g.$on("toggle",e[2]),h=new $t({props:{language:"html",source:'\n<Toggler on:toggle="{(event) => {\n    console.log(\'hello its on?\', event.detail);\n  }}">\n  <slot slot="on">\n    <Icon name="angle_down_pro" style="width: 24px; height: 24px;" />\n  </slot>\n  <slot slot="off">\n    <Icon name="angle_up_pro" style="width: 24px; height: 24px;" />\n  </slot>\n</Toggler>\n'}}),b=new Zs({props:{isSwitch:!0,$$slots:{default:[bl],off:[vl],on:[xl]},$$scope:{ctx:e}}}),b.$on("toggle",e[3]),k=new $t({props:{language:"html",source:'\n<Toggler\n  isSwitch="{true}"\n  on:toggle="{(event) => {\n    console.log(\'hello its on?\', event.detail);\n  }}"\n>\n  <slot slot="on">on</slot>\n  <slot slot="off">off</slot>\n</Toggler>\n'}}),B=new Zs({props:{isSwitch:!0,defaultState:!1,$$slots:{default:[kl],off:[yl],on:[wl]},$$scope:{ctx:e}}}),B.$on("toggle",e[4]),T=new $t({props:{language:"html",source:'\n<Toggler\n  isSwitch="{true}"\n  defaultState="{false}"\n  on:toggle="{(event) => {\n    console.log(\'hello its on?\', event.detail);\n  }}"\n>\n  <slot slot="on">on</slot>\n  <slot slot="off">off</slot>\n</Toggler>\n'}}),{c(){t=x("h1"),t.textContent="Toggler",n=w(),oe(a.$$.fragment),s=w(),l=x("h2"),l.textContent="Toggler with text",o=w(),oe(r.$$.fragment),i=w(),oe(c.$$.fragment),u=w(),d=x("h2"),d.textContent="Toggler with icon",m=w(),oe(g.$$.fragment),f=w(),oe(h.$$.fragment),v=w(),oe(b.$$.fragment),y=w(),oe(k.$$.fragment),N=w(),oe(B.$$.fragment),F=w(),oe(T.$$.fragment),C(t,"class","color--eb"),C(l,"class","margin-l--tb"),C(d,"class","margin-l--tb")},m(e,p){$(e,t,p),$(e,n,p),re(a,e,p),$(e,s,p),$(e,l,p),$(e,o,p),re(r,e,p),$(e,i,p),re(c,e,p),$(e,u,p),$(e,d,p),$(e,m,p),re(g,e,p),$(e,f,p),re(h,e,p),$(e,v,p),re(b,e,p),$(e,y,p),re(k,e,p),$(e,N,p),re(B,e,p),$(e,F,p),re(T,e,p),A=!0},p(e,[t]){const n={};32&t&&(n.$$scope={dirty:t,ctx:e}),r.$set(n);const a={};32&t&&(a.$$scope={dirty:t,ctx:e}),g.$set(a);const s={};32&t&&(s.$$scope={dirty:t,ctx:e}),b.$set(s);const l={};32&t&&(l.$$scope={dirty:t,ctx:e}),B.$set(l)},i(e){A||(te(a.$$.fragment,e),te(r.$$.fragment,e),te(c.$$.fragment,e),te(g.$$.fragment,e),te(h.$$.fragment,e),te(b.$$.fragment,e),te(k.$$.fragment,e),te(B.$$.fragment,e),te(T.$$.fragment,e),A=!0)},o(e){ne(a.$$.fragment,e),ne(r.$$.fragment,e),ne(c.$$.fragment,e),ne(g.$$.fragment,e),ne(h.$$.fragment,e),ne(b.$$.fragment,e),ne(k.$$.fragment,e),ne(B.$$.fragment,e),ne(T.$$.fragment,e),A=!1},d(e){e&&p(t),e&&p(n),ie(a,e),e&&p(s),e&&p(l),e&&p(o),ie(r,e),e&&p(i),ie(c,e),e&&p(u),e&&p(d),e&&p(m),ie(g,e),e&&p(f),ie(h,e),e&&p(v),ie(b,e),e&&p(y),ie(k,e),e&&p(N),ie(B,e),e&&p(F),ie(T,e)}}}function Nl(e,t,n){let{$$slots:a={},$$scope:s}=t;return e.$$set=e=>{"$$scope"in e&&n(5,s=e.$$scope)},[a,e=>{console.log("hello its on?",e.detail)},e=>{console.log("hello its on?",e.detail)},e=>{console.log("hello its on?",e.detail)},e=>{console.log("hello its on?",e.detail)},s]}function Bl(e){let t,n,a,s,l,o,r,i,u,m,g,h,v;const b=e[6].default,y=c(b,e,e[5],null);return{c(){t=x("label"),n=x("input"),a=w(),s=x("div"),l=x("i"),r=w(),i=x("div"),u=x("i"),g=w(),h=x("div"),y&&y.c(),C(n,"type","checkbox"),n.hidden=!0,C(n,"class","tooltip-input"),C(l,"class",o="tooltip-toggle fas fa-"+e[1]),C(s,"class","tooltip-off"),C(u,"class",m="tooltip-toggle fas fa-"+e[0]),C(h,"class","padding-s"),C(i,"class","tooltip-on"),C(t,"class",e[2])},m(e,o){$(e,t,o),f(t,n),f(t,a),f(t,s),f(s,l),f(t,r),f(t,i),f(i,u),f(i,g),f(i,h),y&&y.m(h,null),v=!0},p(e,[n]){(!v||2&n&&o!==(o="tooltip-toggle fas fa-"+e[1]))&&C(l,"class",o),(!v||1&n&&m!==(m="tooltip-toggle fas fa-"+e[0]))&&C(u,"class",m),y&&y.p&&32&n&&d(y,b,e,e[5],n,null,null),(!v||4&n)&&C(t,"class",e[2])},i(e){v||(te(y,e),v=!0)},o(e){ne(y,e),v=!1},d(e){e&&p(t),y&&y.d(e)}}}function Fl(e,t,n){let{$$slots:a={},$$scope:s}=t,{iconOn:l="times"}=t,{iconOff:o="question"}=t,{position:r="left"}=t,{className:i}=t,c=`tooltip tooltip--${r}`;return i&&(c=`${c} ${i}`),e.$$set=e=>{"iconOn"in e&&n(0,l=e.iconOn),"iconOff"in e&&n(1,o=e.iconOff),"position"in e&&n(3,r=e.position),"className"in e&&n(4,i=e.className),"$$scope"in e&&n(5,s=e.$$scope)},[l,o,c,r,i,s,a]}class Tl extends ue{constructor(e){super(),ce(this,e,Fl,Bl,o,{iconOn:0,iconOff:1,position:3,className:4})}}function Al(e){let t,n,a,s,l;return{c(){t=x("p"),t.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit.",n=w(),a=x("p"),a.textContent="Vestibulum nec felis viverra, aliquam erat vel, ornare ipsum.",s=w(),l=x("p"),l.textContent="Aenean a blandit lacus, sed faucibus ante."},m(e,o){$(e,t,o),$(e,n,o),$(e,a,o),$(e,s,o),$(e,l,o)},d(e){e&&p(t),e&&p(n),e&&p(a),e&&p(s),e&&p(l)}}}function Sl(e){let t,n,a,s,l;return{c(){t=x("p"),t.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit.",n=w(),a=x("p"),a.textContent="Vestibulum nec felis viverra, aliquam erat vel, ornare ipsum.",s=w(),l=x("p"),l.textContent="Aenean a blandit lacus, sed faucibus ante."},m(e,o){$(e,t,o),$(e,n,o),$(e,a,o),$(e,s,o),$(e,l,o)},d(e){e&&p(t),e&&p(n),e&&p(a),e&&p(s),e&&p(l)}}}function Ll(e){let t,n,a,s,l,o,r,i,c,u,d,m,g,h,v,b,y,k,N,B,F;return s=new $t({props:{language:"js",source:"import Tooltip from '@ekstra-bladet/designsystem/src/_components/tooltip';"}}),c=new Tl({props:{$$slots:{default:[Al]},$$scope:{ctx:e}}}),d=new $t({props:{language:"html",source:"\n      <Tooltip>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n        <p>Vestibulum nec felis viverra, aliquam erat vel, ornare ipsum.</p>\n        <p>Aenean a blandit lacus, sed faucibus ante.</p>\n      </Tooltip>\n    "}}),k=new Tl({props:{className:"flex-item flex-item--center",position:"right",$$slots:{default:[Sl]},$$scope:{ctx:e}}}),B=new $t({props:{language:"html",source:'\n      <div class="flex flex-justify--between grid-width--small">\n        <h3 class="flex-item">Flot overskrift</h3>\n        <Tooltip className="flex-item flex-item--center" position="right">\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n          <p>Vestibulum nec felis viverra, aliquam erat vel, ornare ipsum.</p>\n          <p>Aenean a blandit lacus, sed faucibus ante.</p>\n        </Tooltip>\n      </div>\n    '}}),{c(){t=x("h1"),t.textContent="Tooltip",n=w(),a=x("div"),oe(s.$$.fragment),l=w(),o=x("h2"),o.textContent="Default tooltip",r=w(),i=x("div"),oe(c.$$.fragment),u=w(),oe(d.$$.fragment),m=w(),g=x("h2"),g.textContent="Tooltip i højre side",h=w(),v=x("div"),b=x("h3"),b.textContent="Flot overskrift",y=w(),oe(k.$$.fragment),N=w(),oe(B.$$.fragment),C(t,"class","color--eb"),C(i,"class","flex margin-l--tb"),C(b,"class","flex-item"),C(v,"class","flex flex-justify--between grid-width--small margin-l--tb"),C(a,"class","grid-width--small")},m(e,p){$(e,t,p),$(e,n,p),$(e,a,p),re(s,a,null),f(a,l),f(a,o),f(a,r),f(a,i),re(c,i,null),f(a,u),re(d,a,null),f(a,m),f(a,g),f(a,h),f(a,v),f(v,b),f(v,y),re(k,v,null),f(a,N),re(B,a,null),F=!0},p(e,[t]){const n={};1&t&&(n.$$scope={dirty:t,ctx:e}),c.$set(n);const a={};1&t&&(a.$$scope={dirty:t,ctx:e}),k.$set(a)},i(e){F||(te(s.$$.fragment,e),te(c.$$.fragment,e),te(d.$$.fragment,e),te(k.$$.fragment,e),te(B.$$.fragment,e),F=!0)},o(e){ne(s.$$.fragment,e),ne(c.$$.fragment,e),ne(d.$$.fragment,e),ne(k.$$.fragment,e),ne(B.$$.fragment,e),F=!1},d(e){e&&p(t),e&&p(n),e&&p(a),ie(s),ie(c),ie(d),ie(k),ie(B)}}}function Pl(e){let t;return{c(){t=x("i"),C(t,"class","fas fa-cubes")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function zl(e){let t;return{c(){t=x("i"),C(t,"class","fas fa-code")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function El(e){let t,n,a,s;return t=new os({props:{$$slots:{default:[Pl]},$$scope:{ctx:e}}}),a=new os({props:{$$slots:{default:[zl]},$$scope:{ctx:e}}}),{c(){oe(t.$$.fragment),n=w(),oe(a.$$.fragment)},m(e,l){re(t,e,l),$(e,n,l),re(a,e,l),s=!0},p(e,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:e}),t.$set(s);const l={};2&n&&(l.$$scope={dirty:n,ctx:e}),a.$set(l)},i(e){s||(te(t.$$.fragment,e),te(a.$$.fragment,e),s=!0)},o(e){ne(t.$$.fragment,e),ne(a.$$.fragment,e),s=!1},d(e){ie(t,e),e&&p(n),ie(a,e)}}}function jl(e){let t;return{c(){t=b("Bandekriminialitet")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function _l(e){let t;return{c(){t=b("Sport")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function Ml(e){let t;return{c(){t=b("Nicklas Bendtner")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function Hl(e){let t,n,a,s,l,o,r,i,c,u;return n=new jt({props:{className:"animation-fogwave",href:e[0].href,media:{src:"https://via.placeholder.com/610x343&text=610x343"},section:e[0].section,timestamp:e[0].timestamp,title:e[0].title}}),l=new Dt({props:{href:"#",className:"margin-s bg--bluedark animation-fogwave",$$slots:{default:[jl]},$$scope:{ctx:e}}}),r=new Dt({props:{href:"#",className:"margin-s bg--green animation-fogwave",$$slots:{default:[_l]},$$scope:{ctx:e}}}),c=new Dt({props:{href:"#",className:"margin-s bg--greendark animation-fogwave",$$slots:{default:[Ml]},$$scope:{ctx:e}}}),{c(){t=x("div"),oe(n.$$.fragment),a=w(),s=x("div"),oe(l.$$.fragment),o=w(),oe(r.$$.fragment),i=w(),oe(c.$$.fragment),C(t,"class","flex grid-width--small"),C(s,"class","flex grid-width--small")},m(e,d){$(e,t,d),re(n,t,null),$(e,a,d),$(e,s,d),re(l,s,null),f(s,o),re(r,s,null),f(s,i),re(c,s,null),u=!0},p(e,t){const n={};2&t&&(n.$$scope={dirty:t,ctx:e}),l.$set(n);const a={};2&t&&(a.$$scope={dirty:t,ctx:e}),r.$set(a);const s={};2&t&&(s.$$scope={dirty:t,ctx:e}),c.$set(s)},i(e){u||(te(n.$$.fragment,e),te(l.$$.fragment,e),te(r.$$.fragment,e),te(c.$$.fragment,e),u=!0)},o(e){ne(n.$$.fragment,e),ne(l.$$.fragment,e),ne(r.$$.fragment,e),ne(c.$$.fragment,e),u=!1},d(e){e&&p(t),ie(n),e&&p(a),e&&p(s),ie(l),ie(r),ie(c)}}}function ql(t){let n,a,s,l,o,r;return n=new $t({props:{language:"html",source:'<ArticleCard\n          className="animation-fogwave"\n          href="{article.href}"\n          media="{{src:\'https://via.placeholder.com/610x343&text=610x343\'}}"\n          section="{article.section}"\n          timestamp="{article.timestamp}"\n          title="{article.title}"\n          />'}}),s=new $t({props:{language:"html",source:'<Badge href="#" className="margin-s bg--greendark animation-fogwave">Nicklas Bendtner</Badge>'}}),o=new $t({props:{language:"html",source:'<a href="#" class="badge badge--primary animation-fogwave margin-s--r">Bandekriminialitet</a>'}}),{c(){oe(n.$$.fragment),a=w(),oe(s.$$.fragment),l=w(),oe(o.$$.fragment)},m(e,t){re(n,e,t),$(e,a,t),re(s,e,t),$(e,l,t),re(o,e,t),r=!0},p:e,i(e){r||(te(n.$$.fragment,e),te(s.$$.fragment,e),te(o.$$.fragment,e),r=!0)},o(e){ne(n.$$.fragment,e),ne(s.$$.fragment,e),ne(o.$$.fragment,e),r=!1},d(e){ie(n,e),e&&p(a),ie(s,e),e&&p(l),ie(o,e)}}}function Ol(e){let t,n,a,s,l,o,r;return n=new gs({props:{$$slots:{default:[El]},$$scope:{ctx:e}}}),s=new us({props:{$$slots:{default:[Hl]},$$scope:{ctx:e}}}),o=new us({props:{$$slots:{default:[ql]},$$scope:{ctx:e}}}),{c(){t=x("div"),oe(n.$$.fragment),a=w(),oe(s.$$.fragment),l=w(),oe(o.$$.fragment),C(t,"class","flex flex-justify--end width-1of1")},m(e,i){$(e,t,i),re(n,t,null),$(e,a,i),re(s,e,i),$(e,l,i),re(o,e,i),r=!0},p(e,t){const a={};2&t&&(a.$$scope={dirty:t,ctx:e}),n.$set(a);const l={};2&t&&(l.$$scope={dirty:t,ctx:e}),s.$set(l);const r={};2&t&&(r.$$scope={dirty:t,ctx:e}),o.$set(r)},i(e){r||(te(n.$$.fragment,e),te(s.$$.fragment,e),te(o.$$.fragment,e),r=!0)},o(e){ne(n.$$.fragment,e),ne(s.$$.fragment,e),ne(o.$$.fragment,e),r=!1},d(e){e&&p(t),ie(n),e&&p(a),ie(s,e),e&&p(l),ie(o,e)}}}function Dl(e){let t,n,a,s,l,o,r,i,c,u,d,m,g,h,v,b,y,k,N,F,T,A,S,L,P,z;return h=new as({props:{$$slots:{default:[Ol]},$$scope:{ctx:e}}}),P=new $t({props:{language:"html",source:'<component className="animation-fogwave"/></component>'}}),{c(){t=x("div"),n=x("h1"),n.textContent="Animation",a=w(),s=x("h3"),s.textContent="Anvendelse af animationer",l=w(),o=x("p"),o.innerHTML="Animationer anvendes ved tilføjelse af class: <code>className=&quot;animation-navnPåAnimation&quot;</code>",r=w(),i=x("p"),i.textContent="Denne class kan anvendes på tværs af vores komponenter",c=w(),u=x("p"),u.innerHTML="<b>OBS:</b> anvendes en animation direkte på et html-element skal det anvendes på følgende måde:\n    <code>class=&quot;animation-navnPåAnimation&quot;</code>",d=w(),m=x("h3"),m.textContent="Eksempler på animationer",g=w(),oe(h.$$.fragment),v=w(),b=x("h3"),b.textContent="Overblik over animationer",y=w(),k=x("div"),N=x("div"),N.innerHTML='<div class="width-1of3 padding-m fontweight-bold">Class</div> \n      <div class="width-1of3 padding-m fontweight-bold">Use case</div>',F=w(),T=x("div"),A=x("div"),A.textContent="animation-fogwave",S=w(),L=x("div"),oe(P.$$.fragment),C(n,"class","color--eb"),C(N,"class","flex flex-item--center bg--graa7"),B(N,"border-bottom","1px solid rgba(0, 0, 0, .1)"),C(A,"class","flex-item--center width-1of3 padding-m"),C(L,"class","flex-item--center width-2of3 padding-m"),C(T,"class","flex bg--graa7"),B(T,"border-bottom","1px solid rgba(0, 0, 0, .1)"),C(k,"class","grid-width--large"),C(t,"class","grid-width--large")},m(e,p){$(e,t,p),f(t,n),f(t,a),f(t,s),f(t,l),f(t,o),f(t,r),f(t,i),f(t,c),f(t,u),f(t,d),f(t,m),f(t,g),re(h,t,null),f(t,v),f(t,b),f(t,y),f(t,k),f(k,N),f(k,F),f(k,T),f(T,A),f(T,S),f(T,L),re(P,L,null),z=!0},p(e,[t]){const n={};2&t&&(n.$$scope={dirty:t,ctx:e}),h.$set(n)},i(e){z||(te(h.$$.fragment,e),te(P.$$.fragment,e),z=!0)},o(e){ne(h.$$.fragment,e),ne(P.$$.fragment,e),z=!1},d(e){e&&p(t),ie(h),ie(P)}}}function Il(e){return[{href:"#",media:{src:"https://via.placeholder.com/610x343&text=610x343"},section:"Sport",timestamp:"2 timer siden",title:"List element"}]}function Gl(e){let t;return{c(){t=x("i"),C(t,"class","fas fa-cubes")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function Rl(e){let t;return{c(){t=x("i"),C(t,"class","fas fa-code")},m(e,n){$(e,t,n)},d(e){e&&p(t)}}}function Vl(e){let t,n,a,s;return t=new os({props:{$$slots:{default:[Gl]},$$scope:{ctx:e}}}),a=new os({props:{$$slots:{default:[Rl]},$$scope:{ctx:e}}}),{c(){oe(t.$$.fragment),n=w(),oe(a.$$.fragment)},m(e,l){re(t,e,l),$(e,n,l),re(a,e,l),s=!0},p(e,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:e}),t.$set(s);const l={};2&n&&(l.$$scope={dirty:n,ctx:e}),a.$set(l)},i(e){s||(te(t.$$.fragment,e),te(a.$$.fragment,e),s=!0)},o(e){ne(t.$$.fragment,e),ne(a.$$.fragment,e),s=!1},d(e){ie(t,e),e&&p(n),ie(a,e)}}}function Ul(t){let n,a,s,l,o,r,i,c;return n=new bt({props:{dataTheme:"lightmode",tabs:t[0]}}),s=new bt({props:{dataTheme:"darkmode",tabs:t[0]}}),{c(){oe(n.$$.fragment),a=w(),oe(s.$$.fragment),l=w(),o=x("div"),o.innerHTML="<p>I&#39;m now in lightmode</p>",r=w(),i=x("div"),i.innerHTML="<p>I&#39;m now in darkmode</p>",C(o,"data-theme","lightmode"),C(i,"data-theme","darkmode")},m(e,t){re(n,e,t),$(e,a,t),re(s,e,t),$(e,l,t),$(e,o,t),$(e,r,t),$(e,i,t),c=!0},p:e,i(e){c||(te(n.$$.fragment,e),te(s.$$.fragment,e),c=!0)},o(e){ne(n.$$.fragment,e),ne(s.$$.fragment,e),c=!1},d(e){ie(n,e),e&&p(a),ie(s,e),e&&p(l),e&&p(o),e&&p(r),e&&p(i)}}}function Wl(t){let n,a,s,l,o,r,i,c;return n=new $t({props:{language:"html",source:'<Accordion dataTheme="lightmode" {tabs} />'}}),s=new $t({props:{language:"html",source:'<Accordion dataTheme="darkmode" {tabs} />'}}),o=new $t({props:{language:"html",source:'<div data-theme="lightmode"><p>I\'m now in lightmode</p></div>'}}),i=new $t({props:{language:"html",source:'<div data-theme="darkmode"><p>I\'m now in darkmode</p></div>'}}),{c(){oe(n.$$.fragment),a=w(),oe(s.$$.fragment),l=w(),oe(o.$$.fragment),r=w(),oe(i.$$.fragment)},m(e,t){re(n,e,t),$(e,a,t),re(s,e,t),$(e,l,t),re(o,e,t),$(e,r,t),re(i,e,t),c=!0},p:e,i(e){c||(te(n.$$.fragment,e),te(s.$$.fragment,e),te(o.$$.fragment,e),te(i.$$.fragment,e),c=!0)},o(e){ne(n.$$.fragment,e),ne(s.$$.fragment,e),ne(o.$$.fragment,e),ne(i.$$.fragment,e),c=!1},d(e){ie(n,e),e&&p(a),ie(s,e),e&&p(l),ie(o,e),e&&p(r),ie(i,e)}}}function Yl(e){let t,n,a,s,l,o,r;return n=new gs({props:{$$slots:{default:[Vl]},$$scope:{ctx:e}}}),s=new us({props:{$$slots:{default:[Ul]},$$scope:{ctx:e}}}),o=new us({props:{$$slots:{default:[Wl]},$$scope:{ctx:e}}}),{c(){t=x("div"),oe(n.$$.fragment),a=w(),oe(s.$$.fragment),l=w(),oe(o.$$.fragment),C(t,"class","flex flex-justify--end width-1of1 margin-m--b")},m(e,i){$(e,t,i),re(n,t,null),$(e,a,i),re(s,e,i),$(e,l,i),re(o,e,i),r=!0},p(e,t){const a={};2&t&&(a.$$scope={dirty:t,ctx:e}),n.$set(a);const l={};2&t&&(l.$$scope={dirty:t,ctx:e}),s.$set(l);const r={};2&t&&(r.$$scope={dirty:t,ctx:e}),o.$set(r)},i(e){r||(te(n.$$.fragment,e),te(s.$$.fragment,e),te(o.$$.fragment,e),r=!0)},o(e){ne(n.$$.fragment,e),ne(s.$$.fragment,e),ne(o.$$.fragment,e),r=!1},d(e){e&&p(t),ie(n),e&&p(a),ie(s,e),e&&p(l),ie(o,e)}}}function Zl(e){let t,n,a,s,l,o,r,i,c,u,d,m,g,h,v,b,y,k,N;return h=new as({props:{$$slots:{default:[Yl]},$$scope:{ctx:e}}}),{c(){t=x("div"),n=x("h1"),n.textContent="Data Theme",a=w(),s=x("h3"),s.textContent="Anvendelse af data theme",l=w(),o=x("p"),o.innerHTML="Farve tema anvendes ved tilføjelse af data-attribute ved navn dataTheme: <code>dataTheme=&quot;lightmode | darkmode&quot;</code>",r=w(),i=x("p"),i.innerHTML="<code>dataTheme</code> kan anvendes på udvalgte komponenter, som kan ses nederst under <b>overblik</b>",c=w(),u=x("p"),u.innerHTML="<b>OBS:</b> anvendes dataTheme direkte på et html-element skal det anvendes på følgende måde:\n    <code>data-theme=&quot;lightmode&quot;</code>",d=w(),m=x("h3"),m.textContent="Eksempler på data theme",g=w(),oe(h.$$.fragment),v=w(),b=x("h3"),b.textContent="Overblik over komponenter der kan anvende data theme",y=w(),k=x("div"),k.innerHTML='<div class="flex bg--graa7" style="border-bottom: 1px solid rgba(0, 0, 0, .1);"><div class="width-1of3 padding-m fontweight-bold">Component</div> \n      <div class="width-1of3 padding-m fontweight-bold">Dokumentation</div> \n      <div class="width-1of3 padding-m fontweight-bold">dataTheme</div></div> \n    <div class="flex bg--graa7" style="border-bottom: 1px solid rgba(0, 0, 0, .1);"><div class="width-1of3 padding-m">Accordion</div> \n      <div class="width-1of3 padding-m"><a href="#/components/accordion">Accordion</a></div> \n      <div class="width-1of3 padding-m"><p class="margin-none"><i class="fas fa-circle color--white"></i> lightmode</p> \n        <p class="margin-none"><i class="fas fa-circle color--black"></i> darkmode</p></div></div> \n    <div class="flex bg--graa7" style="border-bottom: 1px solid rgba(0, 0, 0, .1);"><div class="width-1of3 padding-m">Card (Card-mode)</div> \n      <div class="width-1of3 padding-m"><a href="#/components/card">Card</a></div> \n      <div class="width-1of3 padding-m"><p class="margin-none"><i class="fas fa-circle color--white"></i> lightmode</p> \n        <p class="margin-none"><i class="fas fa-circle color--black"></i> darkmode</p></div></div>',C(n,"class","color--eb"),C(k,"class","grid-width--large"),C(t,"class","grid-width--large")},m(e,p){$(e,t,p),f(t,n),f(t,a),f(t,s),f(t,l),f(t,o),f(t,r),f(t,i),f(t,c),f(t,u),f(t,d),f(t,m),f(t,g),re(h,t,null),f(t,v),f(t,b),f(t,y),f(t,k),N=!0},p(e,[t]){const n={};2&t&&(n.$$scope={dirty:t,ctx:e}),h.$set(n)},i(e){N||(te(h.$$.fragment,e),N=!0)},o(e){ne(h.$$.fragment,e),N=!1},d(e){e&&p(t),ie(h)}}}function Xl(e){return[[{title:"Tab 1",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis porttitor augue sed commodo. Etiam ornare arcu quis turpis pulvinar, ullamcorper ullamcorper nunc ullamcorper. Maecenas porttitor, erat in feugiat faucibus, velit sem luctus leo, nec congue tellus erat sit amet purus."}]]}function Jl(t){let n,a,s,l,o,r,i,c,u,d,m,g,h,v,b,y,k,N,F,T,A,S,L,P,z,E,j,_,M,H,q,O,D,I,G,R,V,U,W,Y,Z,X,J,K,Q,ee,ae,se,le,ce,ue,de,me,ge,fe,$e,pe,he,xe,ve,be,we,ye,ke,Ce,Ne,Be,Fe,Te,Ae,Se,Le,Pe,ze,Ee,je,_e,Me,He,qe,Oe,De,Ie,Ge,Re,Ve,Ue,We,Ye,Ze,Xe,Je,Ke,Qe,et,tt,nt,at,st,lt,ot,rt,it,ct,ut,dt,mt,gt,ft,pt,ht,xt,vt,bt,wt,yt,kt,Ct,Nt,Bt,Ft,Tt,At;return d=new $t({props:{language:"html",source:'<div class="flex"></div>'}}),v=new $t({props:{language:"html",source:'<component className="flex"></component>'}}),T=new $t({props:{language:"html",source:'<div class="flex">I\'m a flexbox container!</div>'}}),_=new $t({props:{language:"html",source:'<div class="flex flex--center">...</div>'}}),R=new $t({props:{language:"html",source:'<div class="flex flex-justify--start">...</div>'}}),Y=new $t({props:{language:"html",source:'<div class="flex flex-justify--center">...</div>'}}),K=new $t({props:{language:"html",source:'<div class="flex flex-justify--end">...</div>'}}),se=new $t({props:{language:"html",source:'<div class="flex flex-justify--around">...</div>'}}),de=new $t({props:{language:"html",source:'<div class="flex flex-justify--between">...</div>'}}),we=new $t({props:{language:"html",source:'<div class="flex flex-align--start">...</div>'}}),Ne=new $t({props:{language:"html",source:'<div class="flex flex-align--center">...</div>'}}),Ae=new $t({props:{language:"html",source:'<div class="flex flex-align--end">...</div>'}}),ze=new $t({props:{language:"html",source:'<div class="flex flex-align--strech">...</div>'}}),De=new $t({props:{language:"html",source:'<div class="flex flex-column">...</div>'}}),Ve=new $t({props:{language:"html",source:'<div class="flex flex-column--reverse">...</div>'}}),Ze=new $t({props:{language:"html",source:'<div class="flex flex-row--reverse">...</div>'}}),lt=new $t({props:{language:"html",source:'<div class="flex">...</div>'}}),ct=new $t({props:{language:"html",source:'<div class="flex flex-wrap--wrap">...</div>'}}),bt=new $t({props:{language:"html",source:'<div class="flex"><div class="flex-item flex-item--noshrink">Flex item no-shrink</div></div>'}}),Bt=new $t({props:{language:"html",source:'<div class="flex"><div class="flex-item flex-item--grow">Flex item grow</div></div>'}}),{c(){n=x("div"),a=x("h1"),a.textContent="Flex",s=w(),l=x("h3"),l.textContent="Anvendelse af Flex",o=w(),r=x("p"),r.textContent="Flex består af forskellige CSS klasser, som både kan anvendes på komponenter og elementer ved tilføjelse af class.",i=w(),c=x("p"),c.textContent="HTML element",u=w(),oe(d.$$.fragment),m=w(),g=x("p"),g.textContent="Svelte component",h=w(),oe(v.$$.fragment),b=w(),y=x("h3"),y.textContent="Flex container",k=w(),N=x("p"),N.innerHTML="Flex tilføjer <code>display: flex</code> til container element og transformere alle child elementer til flex-items.",F=w(),oe(T.$$.fragment),A=w(),S=x("div"),S.textContent="I'm a flexbox container!",L=w(),P=x("h3"),P.textContent="Flex center",z=w(),E=x("p"),E.textContent="Flex center centrere alle child elementer både horizontalt og vertical.",j=w(),oe(_.$$.fragment),M=w(),H=x("div"),H.innerHTML='<div class="flex-item bg--graa5 padding-l">Flex item</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item</div>',q=w(),O=x("h3"),O.textContent="Flex justify content",D=w(),I=x("p"),I.innerHTML="Justify content anvendes til <i>horizontal</i> placering af child elementer i flex containers.",G=w(),oe(R.$$.fragment),V=w(),U=x("div"),U.innerHTML='<div class="flex-item bg--graa5 padding-l">Flex item</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item</div>',W=w(),oe(Y.$$.fragment),Z=w(),X=x("div"),X.innerHTML='<div class="flex-item bg--graa5 padding-l">Flex item</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item</div>',J=w(),oe(K.$$.fragment),Q=w(),ee=x("div"),ee.innerHTML='<div class="flex-item bg--graa5 padding-l">Flex item</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item</div>',ae=w(),oe(se.$$.fragment),le=w(),ce=x("div"),ce.innerHTML='<div class="flex-item bg--graa5 padding-l">Flex item</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item</div>',ue=w(),oe(de.$$.fragment),me=w(),ge=x("div"),ge.innerHTML='<div class="flex-item bg--graa5 padding-l">Flex item</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item</div>',fe=w(),$e=x("h3"),$e.textContent="Flex align items",pe=w(),he=x("p"),he.innerHTML="Align items anvendes til <i>veritcal</i> placering af child elementer i flex containers.",xe=w(),ve=x("p"),ve.innerHTML="Individuelle child elementer(flex-item) kan også vertical placeres med <code>flex-item--start | center | end | strech</code>",be=w(),oe(we.$$.fragment),ye=w(),ke=x("div"),ke.innerHTML='<div class="flex-item bg--graa5 padding-l">Flex item</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item</div>',Ce=w(),oe(Ne.$$.fragment),Be=w(),Fe=x("div"),Fe.innerHTML='<div class="flex-item bg--graa5 padding-l">Flex item</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item</div>',Te=w(),oe(Ae.$$.fragment),Se=w(),Le=x("div"),Le.innerHTML='<div class="flex-item bg--graa5 padding-l">Flex item</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item</div>',Pe=w(),oe(ze.$$.fragment),Ee=w(),je=x("div"),je.innerHTML='<div class="flex-item bg--graa5 padding-l">Flex item</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item</div>',_e=w(),Me=x("h3"),Me.textContent="Flex directions",He=w(),qe=x("p"),qe.textContent="Flex directions bestemmer rækkefølgen for visning af child elementer i flex containeren.",Oe=w(),oe(De.$$.fragment),Ie=w(),Ge=x("div"),Ge.innerHTML='<div class="flex-item bg--graa5 padding-l">Flex item 1</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item 2</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item 3</div>',Re=w(),oe(Ve.$$.fragment),Ue=w(),We=x("div"),We.innerHTML='<div class="flex-item bg--graa5 padding-l">Flex item 1</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item 2</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item 3</div>',Ye=w(),oe(Ze.$$.fragment),Xe=w(),Je=x("div"),Je.innerHTML='<div class="flex-item bg--graa5 padding-l">Flex item 1</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item 2</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item 3</div>',Ke=w(),Qe=x("h3"),Qe.textContent="Flex wrap",et=w(),tt=x("p"),tt.textContent="Flex wrap sørger for at alle child elementer beholder deres størrelse og istedet wrapper elementerne på multiple lines\n    istedet for one-line.",nt=w(),at=x("p"),at.innerHTML="Ex. browser-default er <code>flex-wrap: nowrap;</code> som forcer alle child elementer til at stå på samme line ved at squeeze\n    dem sammen.",st=w(),oe(lt.$$.fragment),ot=w(),rt=x("div"),rt.innerHTML='<div class="flex-item bg--graa5 padding-l">Flex item 1</div> \n      <div class="flex-item bg--graa5 padding-l">Flex item 2</div> \n      <div class="flex-item bg--graa5 padding-l">Flex item 3</div> \n      <div class="flex-item bg--graa5 padding-l">Flex item 4</div> \n      <div class="flex-item bg--graa5 padding-l">Flex item 5</div> \n      <div class="flex-item bg--graa5 padding-l">Flex item 6</div> \n      <div class="flex-item bg--graa5 padding-l">Flex item 7</div> \n      <div class="flex-item bg--graa5 padding-l">Flex item 8</div> \n      <div class="flex-item bg--graa5 padding-l">Flex item 9</div>',it=w(),oe(ct.$$.fragment),ut=w(),dt=x("div"),dt.innerHTML='<div class="flex-item bg--graa5 padding-l">Flex item 1</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item 2</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item 3</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item 4</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item 5</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item 6</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item 7</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item 8</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item 9</div>',mt=w(),gt=x("h3"),gt.textContent="Flex size",ft=w(),pt=x("p"),pt.textContent="Flex size bestemmer hvordan størrelsen på child elementer skal opføre sig.",ht=w(),xt=x("p"),xt.innerHTML="<code>flex-item--noshrink</code> sørger for at et child element altid vil have den samme størrelse også på scalering.",vt=w(),oe(bt.$$.fragment),wt=w(),yt=x("div"),yt.innerHTML='<div class="flex-item bg--graa5 padding-l">Flex item normal</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item normal</div> \n    <div class="flex-item flex-item--noshrink bg--graa5 padding-l">Flex item no-shrink</div> \n    <div class="flex-item flex-item--noshrink bg--graa5 padding-l">Flex item no-shrink</div> \n    <div class="flex-item flex-item--noshrink bg--graa5 padding-l">Flex item no-shrink</div> \n    <div class="flex-item flex-item--noshrink bg--graa5 padding-l">Flex item no-shrink</div> \n    <div class="flex-item flex-item--noshrink bg--graa5 padding-l">Flex item no-shrink</div>',kt=w(),Ct=x("p"),Ct.innerHTML="<code>flex-item--grow</code> sørger for at child element udfylder den tilbageværende plads i flex containeren.",Nt=w(),oe(Bt.$$.fragment),Ft=w(),Tt=x("div"),Tt.innerHTML='<div class="flex-item bg--graa5 padding-l">Flex item normal</div> \n    <div class="flex-item flex-item--grow bg--graa5 padding-l">Flex item grow</div> \n    <div class="flex-item bg--graa5 padding-l">Flex item normal</div>',C(a,"class","color--eb"),C(S,"class","flex bg--graa7 padding-l"),C(H,"class","flex flex--center bg--graa7"),B(H,"height","100px"),C(U,"class","flex flex-justify--start bg--graa7"),C(X,"class","flex flex-justify--center bg--graa7"),C(ee,"class","flex flex-justify--end bg--graa7"),C(ce,"class","flex flex-justify--around bg--graa7"),C(ge,"class","flex flex-justify--between bg--graa7"),C(ke,"class","flex flex-align--start bg--graa7"),B(ke,"height","100px"),C(Fe,"class","flex flex-align--center bg--graa7"),B(Fe,"height","100px"),C(Le,"class","flex flex-align--end bg--graa7"),B(Le,"height","100px"),C(je,"class","flex flex-align--strech bg--graa7"),B(je,"height","100px"),C(Ge,"class","flex flex-column bg--graa7"),C(We,"class","flex flex-column--reverse bg--graa7"),C(Je,"class","flex flex-row--reverse bg--graa7"),C(rt,"class","flex bg--graa7"),C(dt,"class","flex flex-wrap--wrap bg--graa7"),C(yt,"class","flex bg--graa7"),C(Tt,"class","flex bg--graa7"),C(n,"class","grid-width--large")},m(e,t){$(e,n,t),f(n,a),f(n,s),f(n,l),f(n,o),f(n,r),f(n,i),f(n,c),f(n,u),re(d,n,null),f(n,m),f(n,g),f(n,h),re(v,n,null),f(n,b),f(n,y),f(n,k),f(n,N),f(n,F),re(T,n,null),f(n,A),f(n,S),f(n,L),f(n,P),f(n,z),f(n,E),f(n,j),re(_,n,null),f(n,M),f(n,H),f(n,q),f(n,O),f(n,D),f(n,I),f(n,G),re(R,n,null),f(n,V),f(n,U),f(n,W),re(Y,n,null),f(n,Z),f(n,X),f(n,J),re(K,n,null),f(n,Q),f(n,ee),f(n,ae),re(se,n,null),f(n,le),f(n,ce),f(n,ue),re(de,n,null),f(n,me),f(n,ge),f(n,fe),f(n,$e),f(n,pe),f(n,he),f(n,xe),f(n,ve),f(n,be),re(we,n,null),f(n,ye),f(n,ke),f(n,Ce),re(Ne,n,null),f(n,Be),f(n,Fe),f(n,Te),re(Ae,n,null),f(n,Se),f(n,Le),f(n,Pe),re(ze,n,null),f(n,Ee),f(n,je),f(n,_e),f(n,Me),f(n,He),f(n,qe),f(n,Oe),re(De,n,null),f(n,Ie),f(n,Ge),f(n,Re),re(Ve,n,null),f(n,Ue),f(n,We),f(n,Ye),re(Ze,n,null),f(n,Xe),f(n,Je),f(n,Ke),f(n,Qe),f(n,et),f(n,tt),f(n,nt),f(n,at),f(n,st),re(lt,n,null),f(n,ot),f(n,rt),f(n,it),re(ct,n,null),f(n,ut),f(n,dt),f(n,mt),f(n,gt),f(n,ft),f(n,pt),f(n,ht),f(n,xt),f(n,vt),re(bt,n,null),f(n,wt),f(n,yt),f(n,kt),f(n,Ct),f(n,Nt),re(Bt,n,null),f(n,Ft),f(n,Tt),At=!0},p:e,i(e){At||(te(d.$$.fragment,e),te(v.$$.fragment,e),te(T.$$.fragment,e),te(_.$$.fragment,e),te(R.$$.fragment,e),te(Y.$$.fragment,e),te(K.$$.fragment,e),te(se.$$.fragment,e),te(de.$$.fragment,e),te(we.$$.fragment,e),te(Ne.$$.fragment,e),te(Ae.$$.fragment,e),te(ze.$$.fragment,e),te(De.$$.fragment,e),te(Ve.$$.fragment,e),te(Ze.$$.fragment,e),te(lt.$$.fragment,e),te(ct.$$.fragment,e),te(bt.$$.fragment,e),te(Bt.$$.fragment,e),At=!0)},o(e){ne(d.$$.fragment,e),ne(v.$$.fragment,e),ne(T.$$.fragment,e),ne(_.$$.fragment,e),ne(R.$$.fragment,e),ne(Y.$$.fragment,e),ne(K.$$.fragment,e),ne(se.$$.fragment,e),ne(de.$$.fragment,e),ne(we.$$.fragment,e),ne(Ne.$$.fragment,e),ne(Ae.$$.fragment,e),ne(ze.$$.fragment,e),ne(De.$$.fragment,e),ne(Ve.$$.fragment,e),ne(Ze.$$.fragment,e),ne(lt.$$.fragment,e),ne(ct.$$.fragment,e),ne(bt.$$.fragment,e),ne(Bt.$$.fragment,e),At=!1},d(e){e&&p(n),ie(d),ie(v),ie(T),ie(_),ie(R),ie(Y),ie(K),ie(se),ie(de),ie(we),ie(Ne),ie(Ae),ie(ze),ie(De),ie(Ve),ie(Ze),ie(lt),ie(ct),ie(bt),ie(Bt)}}}const Kl=[{link:"/",title:"Overblik",component:class extends ue{constructor(e){super(),ce(this,e,st,at,o,{})}}},{link:"/components/accordion",title:"Accordion",type:"component",component:class extends ue{constructor(e){super(),ce(this,e,yt,wt,o,{})}}},{link:"/components/articlecard",title:"Article card",type:"component",component:class extends ue{constructor(e){super(),ce(this,e,Mt,_t,o,{})}}},{link:"/components/badge",title:"Badge",type:"component",component:class extends ue{constructor(e){super(),ce(this,e,null,en,o,{})}}},{link:"/components/button",title:"Button",type:"component",component:class extends ue{constructor(e){super(),ce(this,e,Rn,Dn,o,{})}}},{link:"/components/buttongroup",title:"Button group",type:"component",component:class extends ue{constructor(e){super(),ce(this,e,da,ua,o,{})}}},{link:"/components/card",title:"Card",type:"component",component:class extends ue{constructor(e){super(),ce(this,e,null,wa,o,{})}}},{link:"/components/form-elements",title:"Form elements",type:"component",component:class extends ue{constructor(e){super(),ce(this,e,Ra,Ga,o,{})}}},{link:"/components/icon",title:"Icon",type:"component",component:class extends ue{constructor(e){super(),ce(this,e,Ya,Wa,o,{})}}},{link:"/components/horizontalscroll",title:"Horizontal scroll",type:"component",component:class extends ue{constructor(e){super(),ce(this,e,null,Qa,o,{})}}},{link:"/components/pillnavigation",title:"Pill navigation",type:"component",component:class extends ue{constructor(e){super(),ce(this,e,null,Ts,o,{})}}},{link:"/components/spinner",title:"Spinner",type:"component",component:class extends ue{constructor(e){super(),ce(this,e,null,zs,o,{})}}},{link:"/components/toggler",title:"Toggler",type:"component",component:class extends ue{constructor(e){super(),ce(this,e,Nl,Cl,o,{})}}},{link:"/components/tooltip",title:"Tooltip",type:"component",component:class extends ue{constructor(e){super(),ce(this,e,null,Ll,o,{})}}},{link:"/utilities/animation",title:"Animation",type:"utility",component:class extends ue{constructor(e){super(),ce(this,e,Il,Dl,o,{})}}},{link:"/utilities/datatheme",title:"Data theme",type:"utility",component:class extends ue{constructor(e){super(),ce(this,e,Xl,Zl,o,{})}}},{link:"/utilities/flex",title:"Flex",type:"utility",component:class extends ue{constructor(e){super(),ce(this,e,null,Jl,o,{})}}}];function Ql(e,t,n){const a=e.slice();return a[5]=t[n],a}function eo(e,t,n){const a=e.slice();return a[5]=t[n],a}function to(e,t,n){const a=e.slice();return a[5]=t[n],a}function no(e){let t,n,a,s,l,o,r=e[5].title+"";return{c(){t=x("div"),n=x("a"),a=b(r),C(n,"class",s="sidebar-item "+(e[5].link===e[0]?"active-item":"")+" width-1of1 padding-m--t fontsize-large svelte-av0po4"),C(n,"href",e[5].link),C(t,"class","sidebar-menuitem-container padding-l svelte-av0po4")},m(e,s){$(e,t,s),f(t,n),f(n,a),l||(o=g(be.call(null,n)),l=!0)},p(e,t){1&t&&s!==(s="sidebar-item "+(e[5].link===e[0]?"active-item":"")+" width-1of1 padding-m--t fontsize-large svelte-av0po4")&&C(n,"class",s)},d(e){e&&p(t),l=!1,o()}}}function ao(e){let t,n,a,s,l,o,r=e[5].title+"";return{c(){t=x("a"),n=b(r),a=w(),C(t,"class",s="sidebar-item "+(e[5].link===e[0]?"active-item":"")+" width-1of1 padding-m--t padding-m--rl svelte-av0po4"),C(t,"href",e[5].link)},m(e,s){$(e,t,s),f(t,n),f(t,a),l||(o=g(be.call(null,t)),l=!0)},p(e,n){1&n&&s!==(s="sidebar-item "+(e[5].link===e[0]?"active-item":"")+" width-1of1 padding-m--t padding-m--rl svelte-av0po4")&&C(t,"class",s)},d(e){e&&p(t),l=!1,o()}}}function so(e){let t,n,a,s,l,o,r=e[5].title+"";return{c(){t=x("a"),n=b(r),a=w(),C(t,"class",s="sidebar-item "+(e[5].link===e[0]?"active-item":"")+" width-1of1 padding-m--t padding-m--rl svelte-av0po4"),C(t,"href",e[5].link)},m(e,s){$(e,t,s),f(t,n),f(t,a),l||(o=g(be.call(null,t)),l=!0)},p(e,n){1&n&&s!==(s="sidebar-item "+(e[5].link===e[0]?"active-item":"")+" width-1of1 padding-m--t padding-m--rl svelte-av0po4")&&C(t,"class",s)},d(e){e&&p(t),l=!1,o()}}}function lo(t){let n,a,s,l,o,r,i,c,u,d,m,g,v,b=t[1],y=[];for(let e=0;e<b.length;e+=1)y[e]=no(to(t,b,e));let k=t[2],N=[];for(let e=0;e<k.length;e+=1)N[e]=ao(eo(t,k,e));let B=t[3],F=[];for(let e=0;e<B.length;e+=1)F[e]=so(Ql(t,B,e));return{c(){n=x("div"),a=x("div"),a.innerHTML='<div><a href="#/" class="svelte-av0po4"><img alt="" src="ekstrabladet.svg" style="height:70px;"/></a></div> \n    <div class="flex-item flex-item--center"><p class="flex--grow width-1of1 color--graa1 fontweight-bold">Design system</p></div>',s=w();for(let e=0;e<y.length;e+=1)y[e].c();l=w(),o=x("div"),r=x("div"),r.textContent="Components",i=w(),c=x("div");for(let e=0;e<N.length;e+=1)N[e].c();u=w(),d=x("div"),m=x("div"),m.textContent="Utilities",g=w(),v=x("div");for(let e=0;e<F.length;e+=1)F[e].c();C(a,"class","flex flex-justify--around sidebar-logo-container padding-m--rl svelte-av0po4"),C(r,"class","sidebar-submenu-title fontsize-small svelte-av0po4"),C(c,"class","sidebar-submenu-items"),C(o,"class","sidebar-menuitem-container padding-l svelte-av0po4"),C(m,"class","sidebar-submenu-title fontsize-small svelte-av0po4"),C(v,"class","sidebar-submenu-items"),C(d,"class","sidebar-menuitem-container padding-l svelte-av0po4"),C(n,"id","sidebar-menu"),C(n,"class","sidebar-container height-100vh bg--white margin-l--r svelte-av0po4")},m(e,t){$(e,n,t),f(n,a),f(n,s);for(let e=0;e<y.length;e+=1)y[e].m(n,null);f(n,l),f(n,o),f(o,r),f(o,i),f(o,c);for(let e=0;e<N.length;e+=1)N[e].m(c,null);f(n,u),f(n,d),f(d,m),f(d,g),f(d,v);for(let e=0;e<F.length;e+=1)F[e].m(v,null)},p(e,[t]){if(3&t){let a;for(b=e[1],a=0;a<b.length;a+=1){const s=to(e,b,a);y[a]?y[a].p(s,t):(y[a]=no(s),y[a].c(),y[a].m(n,l))}for(;a<y.length;a+=1)y[a].d(1);y.length=b.length}if(5&t){let n;for(k=e[2],n=0;n<k.length;n+=1){const a=eo(e,k,n);N[n]?N[n].p(a,t):(N[n]=ao(a),N[n].c(),N[n].m(c,null))}for(;n<N.length;n+=1)N[n].d(1);N.length=k.length}if(9&t){let n;for(B=e[3],n=0;n<B.length;n+=1){const a=Ql(e,B,n);F[n]?F[n].p(a,t):(F[n]=so(a),F[n].c(),F[n].m(v,null))}for(;n<F.length;n+=1)F[n].d(1);F.length=B.length}},i:e,o:e,d(e){e&&p(n),h(y,e),h(N,e),h(F,e)}}}function oo(e,t,n){let{menuItemList:a=[]}=t,s=window.location.hash.substr(1),l=[],o=[],r=[];return a.forEach((e=>{"component"===e.type&&o.push(e),"utility"===e.type&&r.push(e),e.type||l.push(e)})),L((()=>{document.querySelectorAll("#sidebar-menu .sidebar-item").forEach((e=>{e.addEventListener("click",(()=>{n(0,s=window.location.hash.substr(1))}))}))})),window.addEventListener("hashchange",(()=>{n(0,s=window.location.hash.substr(1))})),e.$$set=e=>{"menuItemList"in e&&n(4,a=e.menuItemList)},[s,l,o,r,a]}class ro extends ue{constructor(e){super(),ce(this,e,oo,lo,o,{menuItemList:4})}}function io(t){let n;return{c(){n=x("div"),n.innerHTML='<nav class="navmenu flex flex-align--center padding-xl--rl svelte-gb8srt"><a href="https://github.com/EkstraBladetUdvikling/eb-designsystem" target="_blank" class="flex svelte-gb8srt"><i class="fab fa-github margin-s--r"></i>Github</a></nav>',C(n,"class","navmenu-container position-fixed width-1of1 margin-xl--b bg-red svelte-gb8srt")},m(e,t){$(e,n,t)},p:e,i:e,o:e,d(e){e&&p(n)}}}class co extends ue{constructor(e){super(),ce(this,e,null,io,o,{})}}function uo(e){let t,n,a,s,l,o,r;return t=new co({}),a=new ro({props:{menuItemList:e[1]}}),o=new Ce({props:{routes:e[0]}}),{c(){oe(t.$$.fragment),n=w(),oe(a.$$.fragment),s=w(),l=x("div"),oe(o.$$.fragment),C(l,"class","content-container padding-xl svelte-1tjuw1s")},m(e,i){re(t,e,i),$(e,n,i),re(a,e,i),$(e,s,i),$(e,l,i),re(o,l,null),r=!0},p(e,[t]){const n={};1&t&&(n.routes=e[0]),o.$set(n)},i(e){r||(te(t.$$.fragment,e),te(a.$$.fragment,e),te(o.$$.fragment,e),r=!0)},o(e){ne(t.$$.fragment,e),ne(a.$$.fragment,e),ne(o.$$.fragment,e),r=!1},d(e){ie(t,e),e&&p(n),ie(a,e),e&&p(s),e&&p(l),ie(o)}}}function mo(e,t,n){let a={},s=[];return Kl.forEach((e=>{n(0,a[e.link]=e.component,a),s.push(e)})),[a,s]}return new class extends ue{constructor(e){super(),ce(this,e,mo,uo,o,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
