
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
var app = (function () {
    'use strict';

    function noop() { }
    function assign(tar, src) {
        // @ts-ignore
        for (const k in src)
            tar[k] = src[k];
        return tar;
    }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
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
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
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
        return definition[1] && fn
            ? assign($$scope.ctx.slice(), definition[1](fn(ctx)))
            : $$scope.ctx;
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
        for (const k in props)
            if (k[0] !== '$')
                result[k] = props[k];
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

    // Track which nodes are claimed during hydration. Unclaimed nodes can then be removed from the DOM
    // at the end of hydration without touching the remaining nodes.
    let is_hydrating = false;
    const nodes_to_detach = new Set();
    function start_hydrating() {
        is_hydrating = true;
    }
    function end_hydrating() {
        is_hydrating = false;
        for (const node of nodes_to_detach) {
            node.parentNode.removeChild(node);
        }
        nodes_to_detach.clear();
    }
    function append(target, node) {
        if (is_hydrating) {
            nodes_to_detach.delete(node);
        }
        if (node.parentNode !== target) {
            target.appendChild(node);
        }
    }
    function insert(target, node, anchor) {
        if (is_hydrating) {
            nodes_to_detach.delete(node);
        }
        if (node.parentNode !== target || (anchor && node.nextSibling !== anchor)) {
            target.insertBefore(node, anchor || null);
        }
    }
    function detach(node) {
        if (is_hydrating) {
            nodes_to_detach.add(node);
        }
        else if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
    }
    function destroy_each(iterations, detaching) {
        for (let i = 0; i < iterations.length; i += 1) {
            if (iterations[i])
                iterations[i].d(detaching);
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
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function set_attributes(node, attributes) {
        // @ts-ignore
        const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);
        for (const key in attributes) {
            if (attributes[key] == null) {
                node.removeAttribute(key);
            }
            else if (key === 'style') {
                node.style.cssText = attributes[key];
            }
            else if (key === '__value') {
                node.value = node[key] = attributes[key];
            }
            else if (descriptors[key] && descriptors[key].set) {
                node[key] = attributes[key];
            }
            else {
                attr(node, key, attributes[key]);
            }
        }
    }
    function set_svg_attributes(node, attributes) {
        for (const key in attributes) {
            attr(node, key, attributes[key]);
        }
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function claim_element(nodes, name, attributes, svg) {
        while (nodes.length > 0) {
            const node = nodes.shift();
            if (node.nodeName === name) {
                let j = 0;
                const remove = [];
                while (j < node.attributes.length) {
                    const attribute = node.attributes[j++];
                    if (!attributes[attribute.name]) {
                        remove.push(attribute.name);
                    }
                }
                for (let k = 0; k < remove.length; k++) {
                    node.removeAttribute(remove[k]);
                }
                return node;
            }
            else {
                detach(node);
            }
        }
        return svg ? svg_element(name) : element(name);
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
        if (!current_component)
            throw new Error('Function called outside component initialization');
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
                callbacks.slice().forEach(fn => {
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
            callbacks.slice().forEach(fn => fn(event));
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
        if (flushing)
            return;
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
            while (binding_callbacks.length)
                binding_callbacks.pop()();
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
            p: outros // parent group
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
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
    }

    const globals = (typeof window !== 'undefined'
        ? window
        : typeof globalThis !== 'undefined'
            ? globalThis
            : global);

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
                    if (!(key in n))
                        to_null_out[key] = 1;
                }
                for (const key in n) {
                    if (!accounted_for[key]) {
                        update[key] = n[key];
                        accounted_for[key] = 1;
                    }
                }
                levels[i] = n;
            }
            else {
                for (const key in o) {
                    accounted_for[key] = 1;
                }
            }
        }
        for (const key in to_null_out) {
            if (!(key in update))
                update[key] = undefined;
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
    function mount_component(component, target, anchor, customElement) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        if (!customElement) {
            // onMount happens before the initial afterUpdate
            add_render_callback(() => {
                const new_on_destroy = on_mount.map(run).filter(is_function);
                if (on_destroy) {
                    on_destroy.push(...new_on_destroy);
                }
                else {
                    // Edge case - component was destroyed immediately,
                    // most likely as a result of a binding initialising
                    run_all(new_on_destroy);
                }
                component.$$.on_mount = [];
            });
        }
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
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const $$ = component.$$ = {
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
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(parent_component ? parent_component.$$.context : options.context || []),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false
        };
        let ready = false;
        $$.ctx = instance
            ? instance(component, options.props || {}, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
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
                start_hydrating();
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor, options.customElement);
            end_hydrating();
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
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
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
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.38.1' }, detail)));
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
        if (has_prevent_default)
            modifiers.push('preventDefault');
        if (has_stop_propagation)
            modifiers.push('stopPropagation');
        dispatch_dev('SvelteDOMAddEventListener', { node, event, handler, modifiers });
        const dispose = listen(node, event, handler, options);
        return () => {
            dispatch_dev('SvelteDOMRemoveEventListener', { node, event, handler, modifiers });
            dispose();
        };
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
        else
            dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
    }
    function prop_dev(node, property, value) {
        node[property] = value;
        dispatch_dev('SvelteDOMSetProperty', { node, property, value });
    }
    function set_data_dev(text, data) {
        data = '' + data;
        if (text.wholeText === data)
            return;
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
        $capture_state() { }
        $inject_state() { }
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
    function wrap$1(args) {
        if (!args) {
            throw Error('Parameter args is required')
        }

        // We need to have one and only one of component and asyncComponent
        // This does a "XNOR"
        if (!args.component == !args.asyncComponent) {
            throw Error('One and only one of component and asyncComponent is required')
        }

        // If the component is not async, wrap it into a function returning a Promise
        if (args.component) {
            args.asyncComponent = () => Promise.resolve(args.component);
        }

        // Parameter asyncComponent and each item of conditions must be functions
        if (typeof args.asyncComponent != 'function') {
            throw Error('Parameter asyncComponent must be a function')
        }
        if (args.conditions) {
            // Ensure it's an array
            if (!Array.isArray(args.conditions)) {
                args.conditions = [args.conditions];
            }
            for (let i = 0; i < args.conditions.length; i++) {
                if (!args.conditions[i] || typeof args.conditions[i] != 'function') {
                    throw Error('Invalid parameter conditions[' + i + ']')
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
            conditions: (args.conditions && args.conditions.length) ? args.conditions : undefined,
            props: (args.props && Object.keys(args.props).length) ? args.props : {},
            _sveltesparouter: true
        };

        return obj
    }

    const subscriber_queue = [];
    /**
     * Creates a `Readable` store that allows reading by subscription.
     * @param value initial value
     * @param {StartStopNotifier}start start and stop notifications for subscriptions
     */
    function readable(value, start) {
        return {
            subscribe: writable(value, start).subscribe
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
                if (stop) { // store is ready
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
        const stores_array = single
            ? [stores]
            : stores;
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
                }
                else {
                    cleanup = is_function(result) ? result : noop;
                }
            };
            const unsubscribers = stores_array.map((store, i) => subscribe(store, (value) => {
                values[i] = value;
                pending &= ~(1 << i);
                if (inited) {
                    sync();
                }
            }, () => {
                pending |= (1 << i);
            }));
            inited = true;
            sync();
            return function stop() {
                run_all(unsubscribers);
                cleanup();
            };
        });
    }

    function regexparam (str, loose) {
    	if (str instanceof RegExp) return { keys:false, pattern:str };
    	var c, o, tmp, ext, keys=[], pattern='', arr = str.split('/');
    	arr[0] || arr.shift();

    	while (tmp = arr.shift()) {
    		c = tmp[0];
    		if (c === '*') {
    			keys.push('wild');
    			pattern += '/(.*)';
    		} else if (c === ':') {
    			o = tmp.indexOf('?', 1);
    			ext = tmp.indexOf('.', 1);
    			keys.push( tmp.substring(1, !!~o ? o : !!~ext ? ext : tmp.length) );
    			pattern += !!~o && !~ext ? '(?:/([^/]+?))?' : '/([^/]+?)';
    			if (!!~ext) pattern += (!!~o ? '?' : '') + '\\' + tmp.substring(ext);
    		} else {
    			pattern += '/' + tmp;
    		}
    	}

    	return {
    		keys: keys,
    		pattern: new RegExp('^' + pattern + (loose ? '(?=$|\/)' : '\/?$'), 'i')
    	};
    }

    /* node_modules/svelte-spa-router/Router.svelte generated by Svelte v3.38.1 */

    const { Error: Error_1, Object: Object_1, console: console_1$5 } = globals;

    // (209:0) {:else}
    function create_else_block$7(ctx) {
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
    			$$inline: true
    		};
    	}

    	if (switch_value) {
    		switch_instance = new switch_value(switch_props());
    		switch_instance.$on("routeEvent", /*routeEvent_handler_1*/ ctx[7]);
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
    			const switch_instance_changes = (dirty & /*props*/ 4)
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
    					switch_instance.$on("routeEvent", /*routeEvent_handler_1*/ ctx[7]);
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
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$7.name,
    		type: "else",
    		source: "(209:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (202:0) {#if componentParams}
    function create_if_block$d(ctx) {
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
    			$$inline: true
    		};
    	}

    	if (switch_value) {
    		switch_instance = new switch_value(switch_props());
    		switch_instance.$on("routeEvent", /*routeEvent_handler*/ ctx[6]);
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
    			const switch_instance_changes = (dirty & /*componentParams, props*/ 6)
    			? get_spread_update(switch_instance_spread_levels, [
    					dirty & /*componentParams*/ 2 && { params: /*componentParams*/ ctx[1] },
    					dirty & /*props*/ 4 && get_spread_object(/*props*/ ctx[2])
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
    					switch_instance.$on("routeEvent", /*routeEvent_handler*/ ctx[6]);
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
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$d.name,
    		type: "if",
    		source: "(202:0) {#if componentParams}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$1f(ctx) {
    	let current_block_type_index;
    	let if_block;
    	let if_block_anchor;
    	let current;
    	const if_block_creators = [create_if_block$d, create_else_block$7];
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
    			throw new Error_1("options.hydrate only works if the component was compiled with the `hydratable: true` option");
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
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1f.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function wrap(component, userData, ...conditions) {
    	// Use the new wrap method and show a deprecation warning
    	// eslint-disable-next-line no-console
    	console.warn("Method `wrap` from `svelte-spa-router` is deprecated and will be removed in a future version. Please use `svelte-spa-router/wrap` instead. See http://bit.ly/svelte-spa-router-upgrading");

    	return wrap$1({ component, userData, conditions });
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
    	const hashPosition = window.location.href.indexOf("#/");

    	let location = hashPosition > -1
    	? window.location.href.substr(hashPosition + 1)
    	: "/";

    	// Check if there's a querystring
    	const qsPosition = location.indexOf("?");

    	let querystring = "";

    	if (qsPosition > -1) {
    		querystring = location.substr(qsPosition + 1);
    		location = location.substr(0, qsPosition);
    	}

    	return { location, querystring };
    }

    const loc = readable(null, // eslint-disable-next-line prefer-arrow-callback
    function start(set) {
    	set(getLocation());

    	const update = () => {
    		set(getLocation());
    	};

    	window.addEventListener("hashchange", update, false);

    	return function stop() {
    		window.removeEventListener("hashchange", update, false);
    	};
    });

    const location = derived(loc, $loc => $loc.location);
    const querystring = derived(loc, $loc => $loc.querystring);

    async function push(location) {
    	if (!location || location.length < 1 || location.charAt(0) != "/" && location.indexOf("#/") !== 0) {
    		throw Error("Invalid parameter location");
    	}

    	// Execute this code when the current call stack is complete
    	await tick();

    	// Note: this will include scroll state in history even when restoreScrollState is false
    	history.replaceState(
    		{
    			scrollX: window.scrollX,
    			scrollY: window.scrollY
    		},
    		undefined,
    		undefined
    	);

    	window.location.hash = (location.charAt(0) == "#" ? "" : "#") + location;
    }

    async function pop() {
    	// Execute this code when the current call stack is complete
    	await tick();

    	window.history.back();
    }

    async function replace(location) {
    	if (!location || location.length < 1 || location.charAt(0) != "/" && location.indexOf("#/") !== 0) {
    		throw Error("Invalid parameter location");
    	}

    	// Execute this code when the current call stack is complete
    	await tick();

    	const dest = (location.charAt(0) == "#" ? "" : "#") + location;

    	try {
    		window.history.replaceState(undefined, undefined, dest);
    	} catch(e) {
    		// eslint-disable-next-line no-console
    		console.warn("Caught exception while replacing the current page. If you're running this in the Svelte REPL, please note that the `replace` method might not work in this environment.");
    	}

    	// The method above doesn't trigger the hashchange event, so let's do that manually
    	window.dispatchEvent(new Event("hashchange"));
    }

    function link(node, hrefVar) {
    	// Only apply to <a> tags
    	if (!node || !node.tagName || node.tagName.toLowerCase() != "a") {
    		throw Error("Action \"link\" can only be used with <a> tags");
    	}

    	updateLink(node, hrefVar || node.getAttribute("href"));

    	return {
    		update(updated) {
    			updateLink(node, updated);
    		}
    	};
    }

    // Internal function used by the link function
    function updateLink(node, href) {
    	// Destination must start with '/'
    	if (!href || href.length < 1 || href.charAt(0) != "/") {
    		throw Error("Invalid value for \"href\" attribute: " + href);
    	}

    	// Add # to the href attribute
    	node.setAttribute("href", "#" + href);

    	node.addEventListener("click", scrollstateHistoryHandler);
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

    	const href = event.currentTarget.getAttribute("href");

    	// Setting the url (3rd arg) to href will break clicking for reasons, so don't try to do that
    	history.replaceState(
    		{
    			scrollX: window.scrollX,
    			scrollY: window.scrollY
    		},
    		undefined,
    		undefined
    	);

    	// This will force an update as desired, but this time our scroll state will be attached
    	window.location.hash = href;
    }

    function instance$1f($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Router", slots, []);
    	let { routes = {} } = $$props;
    	let { prefix = "" } = $$props;
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
    			if (!component || typeof component != "function" && (typeof component != "object" || component._sveltesparouter !== true)) {
    				throw Error("Invalid component object");
    			}

    			// Path must be a regular or expression, or a string starting with '/' or '*'
    			if (!path || typeof path == "string" && (path.length < 1 || path.charAt(0) != "/" && path.charAt(0) != "*") || typeof path == "object" && !(path instanceof RegExp)) {
    				throw Error("Invalid value for \"path\" argument - strings must start with / or *");
    			}

    			const { pattern, keys } = regexparam(path);
    			this.path = path;

    			// Check if the component is wrapped and we have conditions
    			if (typeof component == "object" && component._sveltesparouter === true) {
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
    				if (typeof prefix == "string") {
    					if (path.startsWith(prefix)) {
    						path = path.substr(prefix.length) || "/";
    					} else {
    						return null;
    					}
    				} else if (prefix instanceof RegExp) {
    					const match = path.match(prefix);

    					if (match && match[0]) {
    						path = path.substr(match[0].length) || "/";
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
    					out[this._keys[i]] = decodeURIComponent(matches[i + 1] || "") || null;
    				} catch(e) {
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
    				if (!await this.conditions[i](detail)) {
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
    		Object.keys(routes).forEach(path => {
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
    		window.addEventListener("popstate", event => {
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
    	loc.subscribe(async newLoc => {
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
    				userData: routesList[i].userData
    			};

    			// Check if the route can be loaded - if all conditions succeed
    			if (!await routesList[i].checkConditions(detail)) {
    				// Don't display anything
    				$$invalidate(0, component = null);

    				componentObj = null;

    				// Trigger an event to notify the user, then exit
    				dispatchNextTick("conditionsFailed", detail);

    				return;
    			}

    			// Trigger an event to alert that we're loading the route
    			// We need to clone the object on every event invocation so we don't risk the object to be modified in the next tick
    			dispatchNextTick("routeLoading", Object.assign({}, detail));

    			// If there's a component to show while we're loading the route, display it
    			const obj = routesList[i].component;

    			// Do not replace the component if we're loading the same one as before, to avoid the route being unmounted and re-mounted
    			if (componentObj != obj) {
    				if (obj.loading) {
    					$$invalidate(0, component = obj.loading);
    					componentObj = obj;
    					$$invalidate(1, componentParams = obj.loadingParams);
    					$$invalidate(2, props = {});

    					// Trigger the routeLoaded event for the loading component
    					// Create a copy of detail so we don't modify the object for the dynamic route (and the dynamic route doesn't modify our object too)
    					dispatchNextTick("routeLoaded", Object.assign({}, detail, { component, name: component.name }));
    				} else {
    					$$invalidate(0, component = null);
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
    				$$invalidate(0, component = loaded && loaded.default || loaded);

    				componentObj = obj;
    			}

    			// Set componentParams only if we have a match, to avoid a warning similar to `<Component> was created with unknown prop 'params'`
    			// Of course, this assumes that developers always add a "params" prop when they are expecting parameters
    			if (match && typeof match == "object" && Object.keys(match).length) {
    				$$invalidate(1, componentParams = match);
    			} else {
    				$$invalidate(1, componentParams = null);
    			}

    			// Set static props, if any
    			$$invalidate(2, props = routesList[i].props);

    			// Dispatch the routeLoaded event then exit
    			// We need to clone the object on every event invocation so we don't risk the object to be modified in the next tick
    			dispatchNextTick("routeLoaded", Object.assign({}, detail, { component, name: component.name }));

    			return;
    		}

    		// If we're still here, there was no match, so show the empty component
    		$$invalidate(0, component = null);

    		componentObj = null;
    	});

    	const writable_props = ["routes", "prefix", "restoreScrollState"];

    	Object_1.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1$5.warn(`<Router> was created with unknown prop '${key}'`);
    	});

    	function routeEvent_handler(event) {
    		bubble($$self, event);
    	}

    	function routeEvent_handler_1(event) {
    		bubble($$self, event);
    	}

    	$$self.$$set = $$props => {
    		if ("routes" in $$props) $$invalidate(3, routes = $$props.routes);
    		if ("prefix" in $$props) $$invalidate(4, prefix = $$props.prefix);
    		if ("restoreScrollState" in $$props) $$invalidate(5, restoreScrollState = $$props.restoreScrollState);
    	};

    	$$self.$capture_state = () => ({
    		readable,
    		derived,
    		tick,
    		_wrap: wrap$1,
    		wrap,
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
    		componentObj
    	});

    	$$self.$inject_state = $$props => {
    		if ("routes" in $$props) $$invalidate(3, routes = $$props.routes);
    		if ("prefix" in $$props) $$invalidate(4, prefix = $$props.prefix);
    		if ("restoreScrollState" in $$props) $$invalidate(5, restoreScrollState = $$props.restoreScrollState);
    		if ("component" in $$props) $$invalidate(0, component = $$props.component);
    		if ("componentParams" in $$props) $$invalidate(1, componentParams = $$props.componentParams);
    		if ("props" in $$props) $$invalidate(2, props = $$props.props);
    		if ("previousScrollState" in $$props) previousScrollState = $$props.previousScrollState;
    		if ("lastLoc" in $$props) lastLoc = $$props.lastLoc;
    		if ("componentObj" in $$props) componentObj = $$props.componentObj;
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*restoreScrollState*/ 32) {
    			// Update history.scrollRestoration depending on restoreScrollState
    			history.scrollRestoration = restoreScrollState ? "manual" : "auto";
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
    		routeEvent_handler_1
    	];
    }

    class Router extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$1f, create_fragment$1f, safe_not_equal, {
    			routes: 3,
    			prefix: 4,
    			restoreScrollState: 5
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Router",
    			options,
    			id: create_fragment$1f.name
    		});
    	}

    	get routes() {
    		throw new Error_1("<Router>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set routes(value) {
    		throw new Error_1("<Router>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get prefix() {
    		throw new Error_1("<Router>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set prefix(value) {
    		throw new Error_1("<Router>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get restoreScrollState() {
    		throw new Error_1("<Router>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set restoreScrollState(value) {
    		throw new Error_1("<Router>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/_components/accordion/Accordion.svelte generated by Svelte v3.38.1 */
    const file$I = "src/_components/accordion/Accordion.svelte";

    function get_each_context$3(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[4] = list[i];
    	return child_ctx;
    }

    // (22:2) {#each tabs as tab}
    function create_each_block$3(ctx) {
    	let div2;
    	let div0;
    	let span0;
    	let t0_value = /*tab*/ ctx[4].title + "";
    	let t0;
    	let t1;
    	let i;
    	let t2;
    	let div1;
    	let span1;
    	let t3_value = /*tab*/ ctx[4].content + "";
    	let t3;
    	let t4;

    	const block = {
    		c: function create() {
    			div2 = element("div");
    			div0 = element("div");
    			span0 = element("span");
    			t0 = text(t0_value);
    			t1 = space();
    			i = element("i");
    			t2 = space();
    			div1 = element("div");
    			span1 = element("span");
    			t3 = text(t3_value);
    			t4 = space();
    			attr_dev(span0, "class", "fontweight-bold fontsize-medium");
    			add_location(span0, file$I, 24, 8, 912);
    			attr_dev(i, "class", "fas fa-chevron-down");
    			add_location(i, file$I, 25, 8, 985);
    			attr_dev(div0, "class", "accordion-header flex flex-justify--between flex-align--center padding-m");
    			add_location(div0, file$I, 23, 6, 817);
    			add_location(span1, file$I, 28, 8, 1114);
    			attr_dev(div1, "class", "accordion-body padding-m padding-l--rl fontsize-small");
    			add_location(div1, file$I, 27, 6, 1038);
    			attr_dev(div2, "class", "accordion-tab margin-m--b");
    			add_location(div2, file$I, 22, 4, 771);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div2, anchor);
    			append_dev(div2, div0);
    			append_dev(div0, span0);
    			append_dev(span0, t0);
    			append_dev(div0, t1);
    			append_dev(div0, i);
    			append_dev(div2, t2);
    			append_dev(div2, div1);
    			append_dev(div1, span1);
    			append_dev(span1, t3);
    			append_dev(div2, t4);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*tabs*/ 2 && t0_value !== (t0_value = /*tab*/ ctx[4].title + "")) set_data_dev(t0, t0_value);
    			if (dirty & /*tabs*/ 2 && t3_value !== (t3_value = /*tab*/ ctx[4].content + "")) set_data_dev(t3, t3_value);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div2);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$3.name,
    		type: "each",
    		source: "(22:2) {#each tabs as tab}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$1e(ctx) {
    	let div;
    	let each_value = /*tabs*/ ctx[1];
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$3(get_each_context$3(ctx, each_value, i));
    	}

    	const block = {
    		c: function create() {
    			div = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(div, "data-theme", /*dataTheme*/ ctx[0]);
    			attr_dev(div, "class", "accordion card-mode padding-l ff-secondary width-1of1");
    			add_location(div, file$I, 20, 0, 624);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div, null);
    			}

    			/*div_binding*/ ctx[3](div);
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*tabs*/ 2) {
    				each_value = /*tabs*/ ctx[1];
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$3(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block$3(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(div, null);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value.length;
    			}

    			if (dirty & /*dataTheme*/ 1) {
    				attr_dev(div, "data-theme", /*dataTheme*/ ctx[0]);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_each(each_blocks, detaching);
    			/*div_binding*/ ctx[3](null);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1e.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1e($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Accordion", slots, []);
    	let { dataTheme = undefined } = $$props;
    	let { tabs } = $$props;
    	let selectedAccordion;

    	onMount(() => {
    		const tabs = selectedAccordion.querySelectorAll(".accordion-tab");

    		for (const tab of tabs) {
    			const head = tab.querySelector(".accordion-header");

    			head.addEventListener("click", () => {
    				for (const othertab of tabs) {
    					if (othertab !== tab) {
    						othertab.classList.remove("accordion-expanded");
    					}
    				}

    				tab.classList.toggle("accordion-expanded");
    			});
    		}
    	});

    	const writable_props = ["dataTheme", "tabs"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Accordion> was created with unknown prop '${key}'`);
    	});

    	function div_binding($$value) {
    		binding_callbacks[$$value ? "unshift" : "push"](() => {
    			selectedAccordion = $$value;
    			$$invalidate(2, selectedAccordion);
    		});
    	}

    	$$self.$$set = $$props => {
    		if ("dataTheme" in $$props) $$invalidate(0, dataTheme = $$props.dataTheme);
    		if ("tabs" in $$props) $$invalidate(1, tabs = $$props.tabs);
    	};

    	$$self.$capture_state = () => ({
    		onMount,
    		dataTheme,
    		tabs,
    		selectedAccordion
    	});

    	$$self.$inject_state = $$props => {
    		if ("dataTheme" in $$props) $$invalidate(0, dataTheme = $$props.dataTheme);
    		if ("tabs" in $$props) $$invalidate(1, tabs = $$props.tabs);
    		if ("selectedAccordion" in $$props) $$invalidate(2, selectedAccordion = $$props.selectedAccordion);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [dataTheme, tabs, selectedAccordion, div_binding];
    }

    class Accordion extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1e, create_fragment$1e, safe_not_equal, { dataTheme: 0, tabs: 1 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Accordion",
    			options,
    			id: create_fragment$1e.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*tabs*/ ctx[1] === undefined && !("tabs" in props)) {
    			console.warn("<Accordion> was created without expected prop 'tabs'");
    		}
    	}

    	get dataTheme() {
    		throw new Error("<Accordion>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set dataTheme(value) {
    		throw new Error("<Accordion>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get tabs() {
    		throw new Error("<Accordion>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set tabs(value) {
    		throw new Error("<Accordion>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    const GreendarkCSSClass = "bg--greendark";
    const GreenCSSClass = "bg--green";
    const BluedarkCSSClass = "bg--bluedark";
    const Background = {
      Bordeaux: { backgroundColor: "#8a0c36", color: "#fff" },
      Reddark: { backgroundColor: "#900", color: "#fff" },
      Red: { backgroundColor: "#bd1118", color: "#fff" },
      Pink: { backgroundColor: "#b31e61", color: "#fff" },
      Rose: { backgroundColor: "#dc7095", color: "#fff" },
      Orangedark: { backgroundColor: "#e96c0d", color: "#fff" },
      Orange: { backgroundColor: "#e5ad02", color: "#fff" },
      Yellow: { backgroundColor: "#fae500", color: "#fff" },
      Yellowlight: { backgroundColor: "#ff0", color: "#000" },
      Sand: { backgroundColor: "#cec4a6", color: "#fff" },
      Greendark: { backgroundColor: "#2f7820", color: "#fff" },
      Green: { backgroundColor: "#029e5d", color: "#fff" },
      Greenlight: { backgroundColor: "#93b923", color: "#fff" },
      Lime: { backgroundColor: "#cbfe33", color: "#000" },
      Purpledark: { backgroundColor: "#51208c", color: "#fff" },
      Bluenavy: { backgroundColor: "#1a237e", color: "#fff" },
      Bluedark: { backgroundColor: "#1058c2", color: "#fff" },
      Blue: { backgroundColor: "#31769b", color: "#fff" },
      Bluelight: { backgroundColor: "#4fa8df", color: "#fff" },
      Cyan: { backgroundColor: "#00b6d2", color: "#fff" },
      Sea: { backgroundColor: "#84a8c4", color: "#fff" },
      Black: { backgroundColor: "#000", color: "#fff" },
      Graa1: { backgroundColor: "#3c3c3c", color: "#fff" },
      Graa2: { backgroundColor: "#484848", color: "#fff" },
      Graa3: { backgroundColor: "#999", color: "#fff" },
      Graa4: { backgroundColor: "#c8c8c8", color: "#000" },
      Graa5: { backgroundColor: "#ddd", color: "#000" },
      Graa6: { backgroundColor: "#e5e5e5", color: "#000" },
      Graa7: { backgroundColor: "#efefef", color: "#000" },
      White: { backgroundColor: "#fff", color: "#000" },
      PastelRed: { backgroundColor: "#db5040", color: "#fff" },
      PastelDarkred: { backgroundColor: "#954839", color: "#fff" },
      PastelLightred: { backgroundColor: "#d67e9b", color: "#fff" },
      PastelGreen: { backgroundColor: "#9fc29c", color: "#fff" },
      PastelDarkgreen: { backgroundColor: "#91a34f", color: "#fff" },
      PastelYellow: { backgroundColor: "#d4c564", color: "#fff" },
      Eb: { backgroundColor: "#bd1118", color: "#fff" },
      Eb2: { backgroundColor: "#900", color: "#fff" },
      Breaking: { backgroundColor: "#ff0", color: "#000" },
      Bruger: { backgroundColor: "#4fa8df", color: "#fff" },
      Live: { backgroundColor: "#000", color: "#fff" },
      Native: { backgroundColor: "#cec4a6", color: "#fff" },
      Native2: { backgroundColor: "#84a8c4", color: "#fff" },
      Facebook: { backgroundColor: "#31769b", color: "#fff" },
      Twitter: { backgroundColor: "#4fa8df", color: "#fff" },
      Ekstra: { backgroundColor: "#bd1118", color: "#fff" },
      Flash: { backgroundColor: "#e5ad02", color: "#fff" },
      Forbrug: { backgroundColor: "#00b6d2", color: "#fff" },
      Leder: { backgroundColor: "#1a237e", color: "#fff" },
      Livescore: { backgroundColor: "#029e5d", color: "#fff" },
      Livescore2: { backgroundColor: "#cbfe33", color: "#000" },
      Nyheder: { backgroundColor: "#1058c2", color: "#fff" },
      Nyheder2: { backgroundColor: "#000", color: "#fff" },
      SexSamliv: { backgroundColor: "#b31e61", color: "#fff" },
      SexSamliv2: { backgroundColor: "#dc7095", color: "#fff" },
      Skolefodbold: { backgroundColor: "#93b923", color: "#fff" },
      Sport: { backgroundColor: "#029e5d", color: "#fff" },
      Tv: { backgroundColor: "#bd1118", color: "#fff" },
      Underholdning: { backgroundColor: "#51208c", color: "#fff" },
    };

    function parseDate(datetime) {
        const monthNames = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
        const inputdate = new Date(datetime); // UTC-time from server (Z)
        const now = new Date();
        const inputDateLocalTz = new Date(inputdate.getTime() + now.getTimezoneOffset() * 60);
        const secondsSince = Math.round((now.getTime() - inputDateLocalTz.getTime()) / 1000);
        const days = Math.floor(secondsSince / 86400);
        let output = '';
        if (days) {
            // More than 24 hours old
            const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
            if (inputDateLocalTz.getTime() > yesterday.getTime()) {
                output = 'I går';
            }
            else {
                output = `${inputDateLocalTz.getDate()}. ${monthNames[inputDateLocalTz.getMonth()]}.${now.getFullYear() !== inputDateLocalTz.getFullYear() ? ` ${inputDateLocalTz.getFullYear()}` : ''}`;
            }
        }
        else {
            // Less than 24 hours old
            const hours = Math.floor((secondsSince % 86400) / 3600);
            const minutes = Math.floor(((secondsSince % 86400) % 3600) / 60);
            const seconds = secondsSince % 60;
            if (hours) {
                output = hours === 1 ? `${hours} time` : `${hours} timer`;
            }
            else if (minutes) {
                output = `${minutes} min`;
            }
            else if (seconds) {
                output = `${seconds} sek`;
            }
        }
        return output;
    }

    /* src/_components/card/Card.svelte generated by Svelte v3.38.1 */
    const file$H = "src/_components/card/Card.svelte";
    const get_footer_slot_changes_1 = dirty => ({});
    const get_footer_slot_context_1 = ctx => ({});
    const get_content_slot_changes_1 = dirty => ({});
    const get_content_slot_context_1 = ctx => ({});
    const get_media_slot_changes_1 = dirty => ({});
    const get_media_slot_context_1 = ctx => ({});
    const get_header_slot_changes_1 = dirty => ({});
    const get_header_slot_context_1 = ctx => ({});
    const get_footer_slot_changes = dirty => ({});
    const get_footer_slot_context = ctx => ({});
    const get_content_slot_changes = dirty => ({});
    const get_content_slot_context = ctx => ({});
    const get_media_slot_changes = dirty => ({});
    const get_media_slot_context = ctx => ({ class: "card-media" });
    const get_header_slot_changes = dirty => ({});
    const get_header_slot_context = ctx => ({ class: "card-header" });

    // (65:0) {:else}
    function create_else_block$6(ctx) {
    	let div;
    	let t0;
    	let t1;
    	let t2;
    	let t3;
    	let current;
    	let mounted;
    	let dispose;
    	let if_block0 = /*$$slots*/ ctx[7].header && create_if_block_8(ctx);
    	let if_block1 = /*$$slots*/ ctx[7].media && create_if_block_7(ctx);
    	const default_slot_template = /*#slots*/ ctx[14].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[13], null);
    	let if_block2 = /*$$slots*/ ctx[7].content && create_if_block_6(ctx);
    	let if_block3 = /*$$slots*/ ctx[7].footer && create_if_block_5$1(ctx);

    	const block = {
    		c: function create() {
    			div = element("div");
    			if (if_block0) if_block0.c();
    			t0 = space();
    			if (if_block1) if_block1.c();
    			t1 = space();
    			if (default_slot) default_slot.c();
    			t2 = space();
    			if (if_block2) if_block2.c();
    			t3 = space();
    			if (if_block3) if_block3.c();
    			attr_dev(div, "class", /*baseClass*/ ctx[6]);
    			attr_dev(div, "style", /*style*/ ctx[1]);
    			attr_dev(div, "data-theme", /*theme*/ ctx[2]);
    			add_location(div, file$H, 65, 2, 1870);
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
    			/*div_binding*/ ctx[18](div);
    			current = true;

    			if (!mounted) {
    				dispose = listen_dev(div, "click", /*click_handler_1*/ ctx[16], false, false, false);
    				mounted = true;
    			}
    		},
    		p: function update(ctx, dirty) {
    			if (/*$$slots*/ ctx[7].header) {
    				if (if_block0) {
    					if_block0.p(ctx, dirty);

    					if (dirty & /*$$slots*/ 128) {
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

    			if (/*$$slots*/ ctx[7].media) {
    				if (if_block1) {
    					if_block1.p(ctx, dirty);

    					if (dirty & /*$$slots*/ 128) {
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
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 8192)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[13], dirty, null, null);
    				}
    			}

    			if (/*$$slots*/ ctx[7].content) {
    				if (if_block2) {
    					if_block2.p(ctx, dirty);

    					if (dirty & /*$$slots*/ 128) {
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

    			if (/*$$slots*/ ctx[7].footer) {
    				if (if_block3) {
    					if_block3.p(ctx, dirty);

    					if (dirty & /*$$slots*/ 128) {
    						transition_in(if_block3, 1);
    					}
    				} else {
    					if_block3 = create_if_block_5$1(ctx);
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

    			if (!current || dirty & /*style*/ 2) {
    				attr_dev(div, "style", /*style*/ ctx[1]);
    			}

    			if (!current || dirty & /*theme*/ 4) {
    				attr_dev(div, "data-theme", /*theme*/ ctx[2]);
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
    			/*div_binding*/ ctx[18](null);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$6.name,
    		type: "else",
    		source: "(65:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (45:0) {#if href}
    function create_if_block$c(ctx) {
    	let a;
    	let t0;
    	let t1;
    	let t2;
    	let t3;
    	let current;
    	let mounted;
    	let dispose;
    	let if_block0 = /*$$slots*/ ctx[7].header && create_if_block_4$1(ctx);
    	let if_block1 = /*$$slots*/ ctx[7].media && create_if_block_3$1(ctx);
    	const default_slot_template = /*#slots*/ ctx[14].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[13], null);
    	let if_block2 = /*$$slots*/ ctx[7].content && create_if_block_2$1(ctx);
    	let if_block3 = /*$$slots*/ ctx[7].footer && create_if_block_1$2(ctx);

    	let a_levels = [
    		{ href: /*href*/ ctx[0] },
    		{ class: /*cssClass*/ ctx[5] },
    		{ style: /*style*/ ctx[1] },
    		{ "data-theme": /*theme*/ ctx[2] },
    		/*dataProps*/ ctx[3]
    	];

    	let a_data = {};

    	for (let i = 0; i < a_levels.length; i += 1) {
    		a_data = assign(a_data, a_levels[i]);
    	}

    	const block = {
    		c: function create() {
    			a = element("a");
    			if (if_block0) if_block0.c();
    			t0 = space();
    			if (if_block1) if_block1.c();
    			t1 = space();
    			if (default_slot) default_slot.c();
    			t2 = space();
    			if (if_block2) if_block2.c();
    			t3 = space();
    			if (if_block3) if_block3.c();
    			set_attributes(a, a_data);
    			add_location(a, file$H, 45, 2, 1351);
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
    			/*a_binding*/ ctx[17](a);
    			current = true;

    			if (!mounted) {
    				dispose = listen_dev(a, "click", /*click_handler*/ ctx[15], false, false, false);
    				mounted = true;
    			}
    		},
    		p: function update(ctx, dirty) {
    			if (/*$$slots*/ ctx[7].header) {
    				if (if_block0) {
    					if_block0.p(ctx, dirty);

    					if (dirty & /*$$slots*/ 128) {
    						transition_in(if_block0, 1);
    					}
    				} else {
    					if_block0 = create_if_block_4$1(ctx);
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

    			if (/*$$slots*/ ctx[7].media) {
    				if (if_block1) {
    					if_block1.p(ctx, dirty);

    					if (dirty & /*$$slots*/ 128) {
    						transition_in(if_block1, 1);
    					}
    				} else {
    					if_block1 = create_if_block_3$1(ctx);
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
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 8192)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[13], dirty, null, null);
    				}
    			}

    			if (/*$$slots*/ ctx[7].content) {
    				if (if_block2) {
    					if_block2.p(ctx, dirty);

    					if (dirty & /*$$slots*/ 128) {
    						transition_in(if_block2, 1);
    					}
    				} else {
    					if_block2 = create_if_block_2$1(ctx);
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

    			if (/*$$slots*/ ctx[7].footer) {
    				if (if_block3) {
    					if_block3.p(ctx, dirty);

    					if (dirty & /*$$slots*/ 128) {
    						transition_in(if_block3, 1);
    					}
    				} else {
    					if_block3 = create_if_block_1$2(ctx);
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

    			set_attributes(a, a_data = get_spread_update(a_levels, [
    				(!current || dirty & /*href*/ 1) && { href: /*href*/ ctx[0] },
    				(!current || dirty & /*cssClass*/ 32) && { class: /*cssClass*/ ctx[5] },
    				(!current || dirty & /*style*/ 2) && { style: /*style*/ ctx[1] },
    				(!current || dirty & /*theme*/ 4) && { "data-theme": /*theme*/ ctx[2] },
    				dirty & /*dataProps*/ 8 && /*dataProps*/ ctx[3]
    			]));
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
    			/*a_binding*/ ctx[17](null);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$c.name,
    		type: "if",
    		source: "(45:0) {#if href}",
    		ctx
    	});

    	return block;
    }

    // (67:4) {#if $$slots.header}
    function create_if_block_8(ctx) {
    	let div;
    	let current;
    	const header_slot_template = /*#slots*/ ctx[14].header;
    	const header_slot = create_slot(header_slot_template, ctx, /*$$scope*/ ctx[13], get_header_slot_context_1);

    	const block = {
    		c: function create() {
    			div = element("div");
    			if (header_slot) header_slot.c();
    			attr_dev(div, "class", "card-header");
    			add_location(div, file$H, 67, 6, 1981);
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
    				if (header_slot.p && (!current || dirty & /*$$scope*/ 8192)) {
    					update_slot(header_slot, header_slot_template, ctx, /*$$scope*/ ctx[13], dirty, get_header_slot_changes_1, get_header_slot_context_1);
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
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_8.name,
    		type: "if",
    		source: "(67:4) {#if $$slots.header}",
    		ctx
    	});

    	return block;
    }

    // (72:4) {#if $$slots.media}
    function create_if_block_7(ctx) {
    	let div;
    	let current;
    	const media_slot_template = /*#slots*/ ctx[14].media;
    	const media_slot = create_slot(media_slot_template, ctx, /*$$scope*/ ctx[13], get_media_slot_context_1);

    	const block = {
    		c: function create() {
    			div = element("div");
    			if (media_slot) media_slot.c();
    			attr_dev(div, "class", "card-media");
    			add_location(div, file$H, 72, 6, 2091);
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
    				if (media_slot.p && (!current || dirty & /*$$scope*/ 8192)) {
    					update_slot(media_slot, media_slot_template, ctx, /*$$scope*/ ctx[13], dirty, get_media_slot_changes_1, get_media_slot_context_1);
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
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_7.name,
    		type: "if",
    		source: "(72:4) {#if $$slots.media}",
    		ctx
    	});

    	return block;
    }

    // (78:4) {#if $$slots.content}
    function create_if_block_6(ctx) {
    	let div;
    	let current;
    	const content_slot_template = /*#slots*/ ctx[14].content;
    	const content_slot = create_slot(content_slot_template, ctx, /*$$scope*/ ctx[13], get_content_slot_context_1);

    	const block = {
    		c: function create() {
    			div = element("div");
    			if (content_slot) content_slot.c();
    			attr_dev(div, "class", "card-content");
    			add_location(div, file$H, 78, 6, 2214);
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
    				if (content_slot.p && (!current || dirty & /*$$scope*/ 8192)) {
    					update_slot(content_slot, content_slot_template, ctx, /*$$scope*/ ctx[13], dirty, get_content_slot_changes_1, get_content_slot_context_1);
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
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_6.name,
    		type: "if",
    		source: "(78:4) {#if $$slots.content}",
    		ctx
    	});

    	return block;
    }

    // (83:4) {#if $$slots.footer}
    function create_if_block_5$1(ctx) {
    	let div;
    	let current;
    	const footer_slot_template = /*#slots*/ ctx[14].footer;
    	const footer_slot = create_slot(footer_slot_template, ctx, /*$$scope*/ ctx[13], get_footer_slot_context_1);

    	const block = {
    		c: function create() {
    			div = element("div");
    			if (footer_slot) footer_slot.c();
    			attr_dev(div, "class", "card-footer");
    			add_location(div, file$H, 83, 6, 2327);
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
    				if (footer_slot.p && (!current || dirty & /*$$scope*/ 8192)) {
    					update_slot(footer_slot, footer_slot_template, ctx, /*$$scope*/ ctx[13], dirty, get_footer_slot_changes_1, get_footer_slot_context_1);
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
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_5$1.name,
    		type: "if",
    		source: "(83:4) {#if $$slots.footer}",
    		ctx
    	});

    	return block;
    }

    // (47:4) {#if $$slots.header}
    function create_if_block_4$1(ctx) {
    	let current;
    	const header_slot_template = /*#slots*/ ctx[14].header;
    	const header_slot = create_slot(header_slot_template, ctx, /*$$scope*/ ctx[13], get_header_slot_context);

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
    				if (header_slot.p && (!current || dirty & /*$$scope*/ 8192)) {
    					update_slot(header_slot, header_slot_template, ctx, /*$$scope*/ ctx[13], dirty, get_header_slot_changes, get_header_slot_context);
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
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_4$1.name,
    		type: "if",
    		source: "(47:4) {#if $$slots.header}",
    		ctx
    	});

    	return block;
    }

    // (50:4) {#if $$slots.media}
    function create_if_block_3$1(ctx) {
    	let current;
    	const media_slot_template = /*#slots*/ ctx[14].media;
    	const media_slot = create_slot(media_slot_template, ctx, /*$$scope*/ ctx[13], get_media_slot_context);

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
    				if (media_slot.p && (!current || dirty & /*$$scope*/ 8192)) {
    					update_slot(media_slot, media_slot_template, ctx, /*$$scope*/ ctx[13], dirty, get_media_slot_changes, get_media_slot_context);
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
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_3$1.name,
    		type: "if",
    		source: "(50:4) {#if $$slots.media}",
    		ctx
    	});

    	return block;
    }

    // (54:4) {#if $$slots.content}
    function create_if_block_2$1(ctx) {
    	let div;
    	let current;
    	const content_slot_template = /*#slots*/ ctx[14].content;
    	const content_slot = create_slot(content_slot_template, ctx, /*$$scope*/ ctx[13], get_content_slot_context);

    	const block = {
    		c: function create() {
    			div = element("div");
    			if (content_slot) content_slot.c();
    			attr_dev(div, "class", "card-content");
    			add_location(div, file$H, 54, 6, 1660);
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
    				if (content_slot.p && (!current || dirty & /*$$scope*/ 8192)) {
    					update_slot(content_slot, content_slot_template, ctx, /*$$scope*/ ctx[13], dirty, get_content_slot_changes, get_content_slot_context);
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
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2$1.name,
    		type: "if",
    		source: "(54:4) {#if $$slots.content}",
    		ctx
    	});

    	return block;
    }

    // (59:4) {#if $$slots.footer}
    function create_if_block_1$2(ctx) {
    	let div;
    	let current;
    	const footer_slot_template = /*#slots*/ ctx[14].footer;
    	const footer_slot = create_slot(footer_slot_template, ctx, /*$$scope*/ ctx[13], get_footer_slot_context);

    	const block = {
    		c: function create() {
    			div = element("div");
    			if (footer_slot) footer_slot.c();
    			attr_dev(div, "class", "card-footer");
    			add_location(div, file$H, 59, 6, 1773);
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
    				if (footer_slot.p && (!current || dirty & /*$$scope*/ 8192)) {
    					update_slot(footer_slot, footer_slot_template, ctx, /*$$scope*/ ctx[13], dirty, get_footer_slot_changes, get_footer_slot_context);
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
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$2.name,
    		type: "if",
    		source: "(59:4) {#if $$slots.footer}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$1d(ctx) {
    	let current_block_type_index;
    	let if_block;
    	let if_block_anchor;
    	let current;
    	const if_block_creators = [create_if_block$c, create_else_block$6];
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
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
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
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1d.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1d($$self, $$props, $$invalidate) {
    	let cssClass;
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Card", slots, ['header','media','default','content','footer']);
    	const $$slots = compute_slots(slots);
    	
    	let { className = undefined } = $$props;
    	let { href = undefined } = $$props;
    	let { style = undefined } = $$props;
    	let { theme = undefined } = $$props;
    	let baseClass = "card";
    	const dataProps = {};

    	for (const prop in $$props) {
    		if (prop.indexOf("data-") === 0) {
    			dataProps[prop] = $$props[prop];
    		}
    	}

    	let { intersection = false } = $$props;
    	let { intersectionRoot = undefined } = $$props;
    	let { intersectionThreshold = 0.5 } = $$props;
    	let { intersectionData = {} } = $$props;
    	let element;

    	let options = {
    		root: intersectionRoot
    		? document.querySelector(intersectionRoot)
    		: null,
    		rootMargin: "0px",
    		threshold: intersectionThreshold,
    		trackVisibility: true,
    		delay: 100
    	};

    	let observer = new IntersectionObserver(entries => {
    			const isVisible = entries[0].isVisible
    			? entries[0].isVisible
    			: entries[0].isIntersecting;

    			if (isVisible) {
    				const intersectedEvent = new CustomEvent("articleCardInview", { detail: intersectionData });
    				document.dispatchEvent(intersectedEvent);
    				observer.unobserve(element);
    			}
    		},
    	options);

    	onMount(() => {
    		if (typeof IntersectionObserver !== "undefined" && intersection) {
    			observer.observe(element);
    			return () => observer.unobserve(element);
    		}
    	});

    	function click_handler(event) {
    		bubble($$self, event);
    	}

    	function click_handler_1(event) {
    		bubble($$self, event);
    	}

    	function a_binding($$value) {
    		binding_callbacks[$$value ? "unshift" : "push"](() => {
    			element = $$value;
    			$$invalidate(4, element);
    		});
    	}

    	function div_binding($$value) {
    		binding_callbacks[$$value ? "unshift" : "push"](() => {
    			element = $$value;
    			$$invalidate(4, element);
    		});
    	}

    	$$self.$$set = $$new_props => {
    		$$invalidate(21, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    		if ("className" in $$new_props) $$invalidate(8, className = $$new_props.className);
    		if ("href" in $$new_props) $$invalidate(0, href = $$new_props.href);
    		if ("style" in $$new_props) $$invalidate(1, style = $$new_props.style);
    		if ("theme" in $$new_props) $$invalidate(2, theme = $$new_props.theme);
    		if ("intersection" in $$new_props) $$invalidate(9, intersection = $$new_props.intersection);
    		if ("intersectionRoot" in $$new_props) $$invalidate(10, intersectionRoot = $$new_props.intersectionRoot);
    		if ("intersectionThreshold" in $$new_props) $$invalidate(11, intersectionThreshold = $$new_props.intersectionThreshold);
    		if ("intersectionData" in $$new_props) $$invalidate(12, intersectionData = $$new_props.intersectionData);
    		if ("$$scope" in $$new_props) $$invalidate(13, $$scope = $$new_props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		onMount,
    		className,
    		href,
    		style,
    		theme,
    		baseClass,
    		dataProps,
    		intersection,
    		intersectionRoot,
    		intersectionThreshold,
    		intersectionData,
    		element,
    		options,
    		observer,
    		cssClass
    	});

    	$$self.$inject_state = $$new_props => {
    		$$invalidate(21, $$props = assign(assign({}, $$props), $$new_props));
    		if ("className" in $$props) $$invalidate(8, className = $$new_props.className);
    		if ("href" in $$props) $$invalidate(0, href = $$new_props.href);
    		if ("style" in $$props) $$invalidate(1, style = $$new_props.style);
    		if ("theme" in $$props) $$invalidate(2, theme = $$new_props.theme);
    		if ("baseClass" in $$props) $$invalidate(6, baseClass = $$new_props.baseClass);
    		if ("intersection" in $$props) $$invalidate(9, intersection = $$new_props.intersection);
    		if ("intersectionRoot" in $$props) $$invalidate(10, intersectionRoot = $$new_props.intersectionRoot);
    		if ("intersectionThreshold" in $$props) $$invalidate(11, intersectionThreshold = $$new_props.intersectionThreshold);
    		if ("intersectionData" in $$props) $$invalidate(12, intersectionData = $$new_props.intersectionData);
    		if ("element" in $$props) $$invalidate(4, element = $$new_props.element);
    		if ("options" in $$props) options = $$new_props.options;
    		if ("observer" in $$props) observer = $$new_props.observer;
    		if ("cssClass" in $$props) $$invalidate(5, cssClass = $$new_props.cssClass);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*className*/ 256) {
    			$$invalidate(5, cssClass = `${className} ${baseClass}`);
    		}
    	};

    	$$props = exclude_internal_props($$props);

    	return [
    		href,
    		style,
    		theme,
    		dataProps,
    		element,
    		cssClass,
    		baseClass,
    		$$slots,
    		className,
    		intersection,
    		intersectionRoot,
    		intersectionThreshold,
    		intersectionData,
    		$$scope,
    		slots,
    		click_handler,
    		click_handler_1,
    		a_binding,
    		div_binding
    	];
    }

    class Card extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$1d, create_fragment$1d, safe_not_equal, {
    			className: 8,
    			href: 0,
    			style: 1,
    			theme: 2,
    			intersection: 9,
    			intersectionRoot: 10,
    			intersectionThreshold: 11,
    			intersectionData: 12
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Card",
    			options,
    			id: create_fragment$1d.name
    		});
    	}

    	get className() {
    		throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set className(value) {
    		throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get href() {
    		throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set href(value) {
    		throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get style() {
    		throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set style(value) {
    		throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get theme() {
    		throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set theme(value) {
    		throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get intersection() {
    		throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set intersection(value) {
    		throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get intersectionRoot() {
    		throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set intersectionRoot(value) {
    		throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get intersectionThreshold() {
    		throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set intersectionThreshold(value) {
    		throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get intersectionData() {
    		throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set intersectionData(value) {
    		throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/_components/icon/svgs/angle-down.svg generated by Svelte v3.38.1 */

    function create_fragment$1c(ctx) {
    	let svg;
    	let path;

    	let svg_levels = [
    		{ "aria-hidden": "true" },
    		{ focusable: "false" },
    		{ "data-prefix": "far" },
    		{ "data-icon": "angle-down" },
    		{
    			class: "svg-inline--fa fa-angle-down fa-w-10"
    		},
    		{ role: "img" },
    		{ xmlns: "http://www.w3.org/2000/svg" },
    		{ viewBox: "0 0 320 512" },
    		/*$$props*/ ctx[0]
    	];

    	let svg_data = {};

    	for (let i = 0; i < svg_levels.length; i += 1) {
    		svg_data = assign(svg_data, svg_levels[i]);
    	}

    	return {
    		c() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			this.h();
    		},
    		l(nodes) {
    			svg = claim_element(
    				nodes,
    				"svg",
    				{
    					"aria-hidden": true,
    					focusable: true,
    					"data-prefix": true,
    					"data-icon": true,
    					class: true,
    					role: true,
    					xmlns: true,
    					viewBox: true
    				},
    				1
    			);

    			var svg_nodes = children(svg);
    			path = claim_element(svg_nodes, "path", { fill: true, d: true }, 1);
    			children(path).forEach(detach);
    			svg_nodes.forEach(detach);
    			this.h();
    		},
    		h() {
    			attr(path, "fill", "currentColor");
    			attr(path, "d", "M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z");
    			set_svg_attributes(svg, svg_data);
    		},
    		m(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, path);
    		},
    		p(ctx, [dirty]) {
    			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
    				{ "aria-hidden": "true" },
    				{ focusable: "false" },
    				{ "data-prefix": "far" },
    				{ "data-icon": "angle-down" },
    				{
    					class: "svg-inline--fa fa-angle-down fa-w-10"
    				},
    				{ role: "img" },
    				{ xmlns: "http://www.w3.org/2000/svg" },
    				{ viewBox: "0 0 320 512" },
    				dirty & /*$$props*/ 1 && /*$$props*/ ctx[0]
    			]));
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(svg);
    		}
    	};
    }

    function instance$1c($$self, $$props, $$invalidate) {
    	$$self.$$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class AngleDown extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$1c, create_fragment$1c, safe_not_equal, {});
    	}
    }

    /* src/_components/icon/svgs/angle-left.svg generated by Svelte v3.38.1 */

    function create_fragment$1b(ctx) {
    	let svg;
    	let path;

    	let svg_levels = [
    		{ "aria-hidden": "true" },
    		{ focusable: "false" },
    		{ "data-prefix": "far" },
    		{ "data-icon": "angle-left" },
    		{
    			class: "svg-inline--fa fa-angle-left fa-w-6"
    		},
    		{ role: "img" },
    		{ xmlns: "http://www.w3.org/2000/svg" },
    		{ viewBox: "0 0 192 512" },
    		/*$$props*/ ctx[0]
    	];

    	let svg_data = {};

    	for (let i = 0; i < svg_levels.length; i += 1) {
    		svg_data = assign(svg_data, svg_levels[i]);
    	}

    	return {
    		c() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			this.h();
    		},
    		l(nodes) {
    			svg = claim_element(
    				nodes,
    				"svg",
    				{
    					"aria-hidden": true,
    					focusable: true,
    					"data-prefix": true,
    					"data-icon": true,
    					class: true,
    					role: true,
    					xmlns: true,
    					viewBox: true
    				},
    				1
    			);

    			var svg_nodes = children(svg);
    			path = claim_element(svg_nodes, "path", { fill: true, d: true }, 1);
    			children(path).forEach(detach);
    			svg_nodes.forEach(detach);
    			this.h();
    		},
    		h() {
    			attr(path, "fill", "currentColor");
    			attr(path, "d", "M4.2 247.5L151 99.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17L69.3 256l118.5 119.7c4.7 4.7 4.7 12.3 0 17L168 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 264.5c-4.7-4.7-4.7-12.3 0-17z");
    			set_svg_attributes(svg, svg_data);
    		},
    		m(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, path);
    		},
    		p(ctx, [dirty]) {
    			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
    				{ "aria-hidden": "true" },
    				{ focusable: "false" },
    				{ "data-prefix": "far" },
    				{ "data-icon": "angle-left" },
    				{
    					class: "svg-inline--fa fa-angle-left fa-w-6"
    				},
    				{ role: "img" },
    				{ xmlns: "http://www.w3.org/2000/svg" },
    				{ viewBox: "0 0 192 512" },
    				dirty & /*$$props*/ 1 && /*$$props*/ ctx[0]
    			]));
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(svg);
    		}
    	};
    }

    function instance$1b($$self, $$props, $$invalidate) {
    	$$self.$$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class AngleLeft extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$1b, create_fragment$1b, safe_not_equal, {});
    	}
    }

    /* src/_components/icon/svgs/angle-right.svg generated by Svelte v3.38.1 */

    function create_fragment$1a(ctx) {
    	let svg;
    	let path;

    	let svg_levels = [
    		{ "aria-hidden": "true" },
    		{ focusable: "false" },
    		{ "data-prefix": "far" },
    		{ "data-icon": "angle-right" },
    		{
    			class: "svg-inline--fa fa-angle-right fa-w-6"
    		},
    		{ role: "img" },
    		{ xmlns: "http://www.w3.org/2000/svg" },
    		{ viewBox: "0 0 192 512" },
    		/*$$props*/ ctx[0]
    	];

    	let svg_data = {};

    	for (let i = 0; i < svg_levels.length; i += 1) {
    		svg_data = assign(svg_data, svg_levels[i]);
    	}

    	return {
    		c() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			this.h();
    		},
    		l(nodes) {
    			svg = claim_element(
    				nodes,
    				"svg",
    				{
    					"aria-hidden": true,
    					focusable: true,
    					"data-prefix": true,
    					"data-icon": true,
    					class: true,
    					role: true,
    					xmlns: true,
    					viewBox: true
    				},
    				1
    			);

    			var svg_nodes = children(svg);
    			path = claim_element(svg_nodes, "path", { fill: true, d: true }, 1);
    			children(path).forEach(detach);
    			svg_nodes.forEach(detach);
    			this.h();
    		},
    		h() {
    			attr(path, "fill", "currentColor");
    			attr(path, "d", "M187.8 264.5L41 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 392.7c-4.7-4.7-4.7-12.3 0-17L122.7 256 4.2 136.3c-4.7-4.7-4.7-12.3 0-17L24 99.5c4.7-4.7 12.3-4.7 17 0l146.8 148c4.7 4.7 4.7 12.3 0 17z");
    			set_svg_attributes(svg, svg_data);
    		},
    		m(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, path);
    		},
    		p(ctx, [dirty]) {
    			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
    				{ "aria-hidden": "true" },
    				{ focusable: "false" },
    				{ "data-prefix": "far" },
    				{ "data-icon": "angle-right" },
    				{
    					class: "svg-inline--fa fa-angle-right fa-w-6"
    				},
    				{ role: "img" },
    				{ xmlns: "http://www.w3.org/2000/svg" },
    				{ viewBox: "0 0 192 512" },
    				dirty & /*$$props*/ 1 && /*$$props*/ ctx[0]
    			]));
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(svg);
    		}
    	};
    }

    function instance$1a($$self, $$props, $$invalidate) {
    	$$self.$$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class AngleRight extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$1a, create_fragment$1a, safe_not_equal, {});
    	}
    }

    /* src/_components/icon/svgs/angle-up.svg generated by Svelte v3.38.1 */

    function create_fragment$19(ctx) {
    	let svg;
    	let path;

    	let svg_levels = [
    		{ "aria-hidden": "true" },
    		{ focusable: "false" },
    		{ "data-prefix": "far" },
    		{ "data-icon": "angle-up" },
    		{
    			class: "svg-inline--fa fa-angle-up fa-w-10"
    		},
    		{ role: "img" },
    		{ xmlns: "http://www.w3.org/2000/svg" },
    		{ viewBox: "0 0 320 512" },
    		/*$$props*/ ctx[0]
    	];

    	let svg_data = {};

    	for (let i = 0; i < svg_levels.length; i += 1) {
    		svg_data = assign(svg_data, svg_levels[i]);
    	}

    	return {
    		c() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			this.h();
    		},
    		l(nodes) {
    			svg = claim_element(
    				nodes,
    				"svg",
    				{
    					"aria-hidden": true,
    					focusable: true,
    					"data-prefix": true,
    					"data-icon": true,
    					class: true,
    					role: true,
    					xmlns: true,
    					viewBox: true
    				},
    				1
    			);

    			var svg_nodes = children(svg);
    			path = claim_element(svg_nodes, "path", { fill: true, d: true }, 1);
    			children(path).forEach(detach);
    			svg_nodes.forEach(detach);
    			this.h();
    		},
    		h() {
    			attr(path, "fill", "currentColor");
    			attr(path, "d", "M168.5 164.2l148 146.8c4.7 4.7 4.7 12.3 0 17l-19.8 19.8c-4.7 4.7-12.3 4.7-17 0L160 229.3 40.3 347.8c-4.7 4.7-12.3 4.7-17 0L3.5 328c-4.7-4.7-4.7-12.3 0-17l148-146.8c4.7-4.7 12.3-4.7 17 0z");
    			set_svg_attributes(svg, svg_data);
    		},
    		m(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, path);
    		},
    		p(ctx, [dirty]) {
    			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
    				{ "aria-hidden": "true" },
    				{ focusable: "false" },
    				{ "data-prefix": "far" },
    				{ "data-icon": "angle-up" },
    				{
    					class: "svg-inline--fa fa-angle-up fa-w-10"
    				},
    				{ role: "img" },
    				{ xmlns: "http://www.w3.org/2000/svg" },
    				{ viewBox: "0 0 320 512" },
    				dirty & /*$$props*/ 1 && /*$$props*/ ctx[0]
    			]));
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(svg);
    		}
    	};
    }

    function instance$19($$self, $$props, $$invalidate) {
    	$$self.$$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class AngleUp extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$19, create_fragment$19, safe_not_equal, {});
    	}
    }

    /* src/_components/icon/svgs/article.svg generated by Svelte v3.38.1 */

    function create_fragment$18(ctx) {
    	let svg;
    	let path;

    	let svg_levels = [
    		{ version: "1.1" },
    		{ id: "Layer_1" },
    		{ xmlns: "http://www.w3.org/2000/svg" },
    		{
    			"xmlns:xlink": "http://www.w3.org/1999/xlink"
    		},
    		{ x: "0px" },
    		{ y: "0px" },
    		{ viewBox: "0 0 51 47" },
    		{
    			style: "enable-background:new 0 0 51 47;"
    		},
    		{ "xml:space": "preserve" },
    		/*$$props*/ ctx[0]
    	];

    	let svg_data = {};

    	for (let i = 0; i < svg_levels.length; i += 1) {
    		svg_data = assign(svg_data, svg_levels[i]);
    	}

    	return {
    		c() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			this.h();
    		},
    		l(nodes) {
    			svg = claim_element(
    				nodes,
    				"svg",
    				{
    					version: true,
    					id: true,
    					xmlns: true,
    					"xmlns:xlink": true,
    					x: true,
    					y: true,
    					viewBox: true,
    					style: true,
    					"xml:space": true
    				},
    				1
    			);

    			var svg_nodes = children(svg);
    			path = claim_element(svg_nodes, "path", { d: true }, 1);
    			children(path).forEach(detach);
    			svg_nodes.forEach(detach);
    			this.h();
    		},
    		h() {
    			attr(path, "d", "M27,46.5h-4.5c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5H27c0.8,0,1.5,0.7,1.5,1.5S27.8,46.5,27,46.5z M15,46.5H2\n\tc-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5h13c0.8,0,1.5,0.7,1.5,1.5S15.8,46.5,15,46.5z M49,35.4H2c-0.8,0-1.5-0.7-1.5-1.5\n\ts0.7-1.5,1.5-1.5h47c0.8,0,1.5,0.7,1.5,1.5S49.8,35.4,49,35.4z M49,24.3H33.5c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5H49\n\tc0.8,0,1.5,0.7,1.5,1.5S49.8,24.3,49,24.3z M22.7,24.3H3.3c-1.6,0-2.8-1.2-2.8-2.8V3c0-1.6,1.2-2.8,2.8-2.8h19.4\n\tc1.6,0,2.8,1.2,2.8,2.8v18.5C25.4,23.1,24.3,24.3,22.7,24.3z M3.5,21.3l18.9,0V3.3l-18.9,0L3.5,21.3z M49,13.2H33.5\n\tc-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5H49c0.8,0,1.5,0.7,1.5,1.5S49.8,13.2,49,13.2z M49,3.3H33.5c-0.8,0-1.5-0.7-1.5-1.5\n\ts0.7-1.5,1.5-1.5H49c0.8,0,1.5,0.7,1.5,1.5S49.8,3.3,49,3.3z");
    			set_svg_attributes(svg, svg_data);
    		},
    		m(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, path);
    		},
    		p(ctx, [dirty]) {
    			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
    				{ version: "1.1" },
    				{ id: "Layer_1" },
    				{ xmlns: "http://www.w3.org/2000/svg" },
    				{
    					"xmlns:xlink": "http://www.w3.org/1999/xlink"
    				},
    				{ x: "0px" },
    				{ y: "0px" },
    				{ viewBox: "0 0 51 47" },
    				{
    					style: "enable-background:new 0 0 51 47;"
    				},
    				{ "xml:space": "preserve" },
    				dirty & /*$$props*/ 1 && /*$$props*/ ctx[0]
    			]));
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(svg);
    		}
    	};
    }

    function instance$18($$self, $$props, $$invalidate) {
    	$$self.$$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class Article extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$18, create_fragment$18, safe_not_equal, {});
    	}
    }

    /* src/_components/icon/svgs/check.svg generated by Svelte v3.38.1 */

    function create_fragment$17(ctx) {
    	let svg;
    	let path;

    	let svg_levels = [
    		{ version: "1.1" },
    		{ id: "Layer_1" },
    		{ xmlns: "http://www.w3.org/2000/svg" },
    		{ x: "0px" },
    		{ y: "0px" },
    		{ viewBox: "0 0 442.6 335.1" },
    		{
    			style: "enable-background:new 0 0 442.6 335.1;"
    		},
    		{ "xml:space": "preserve" },
    		/*$$props*/ ctx[0]
    	];

    	let svg_data = {};

    	for (let i = 0; i < svg_levels.length; i += 1) {
    		svg_data = assign(svg_data, svg_levels[i]);
    	}

    	return {
    		c() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			this.h();
    		},
    		l(nodes) {
    			svg = claim_element(
    				nodes,
    				"svg",
    				{
    					version: true,
    					id: true,
    					xmlns: true,
    					x: true,
    					y: true,
    					viewBox: true,
    					style: true,
    					"xml:space": true
    				},
    				1
    			);

    			var svg_nodes = children(svg);
    			path = claim_element(svg_nodes, "path", { d: true }, 1);
    			children(path).forEach(detach);
    			svg_nodes.forEach(detach);
    			this.h();
    		},
    		h() {
    			attr(path, "d", "M410.8,3.5l-280,280l-99-99c-4.7-4.7-12.3-4.7-17,0L3.5,195.8c-4.7,4.7-4.7,12.3,0,17l118.8,118.8c4.7,4.7,12.3,4.7,17,0\n\tL439.1,31.8c4.7-4.7,4.7-12.3,0-17L427.8,3.5C423.1-1.2,415.5-1.2,410.8,3.5L410.8,3.5z");
    			set_svg_attributes(svg, svg_data);
    		},
    		m(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, path);
    		},
    		p(ctx, [dirty]) {
    			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
    				{ version: "1.1" },
    				{ id: "Layer_1" },
    				{ xmlns: "http://www.w3.org/2000/svg" },
    				{ x: "0px" },
    				{ y: "0px" },
    				{ viewBox: "0 0 442.6 335.1" },
    				{
    					style: "enable-background:new 0 0 442.6 335.1;"
    				},
    				{ "xml:space": "preserve" },
    				dirty & /*$$props*/ 1 && /*$$props*/ ctx[0]
    			]));
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(svg);
    		}
    	};
    }

    function instance$17($$self, $$props, $$invalidate) {
    	$$self.$$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class Check extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$17, create_fragment$17, safe_not_equal, {});
    	}
    }

    /* src/_components/icon/svgs/clock.svg generated by Svelte v3.38.1 */

    function create_fragment$16(ctx) {
    	let svg;
    	let path;

    	let svg_levels = [
    		{ "aria-hidden": "true" },
    		{ focusable: "false" },
    		{ "data-prefix": "far" },
    		{ "data-icon": "clock" },
    		{ role: "img" },
    		{ xmlns: "http://www.w3.org/2000/svg" },
    		{ viewBox: "0 0 512 512" },
    		/*$$props*/ ctx[0]
    	];

    	let svg_data = {};

    	for (let i = 0; i < svg_levels.length; i += 1) {
    		svg_data = assign(svg_data, svg_levels[i]);
    	}

    	return {
    		c() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			this.h();
    		},
    		l(nodes) {
    			svg = claim_element(
    				nodes,
    				"svg",
    				{
    					"aria-hidden": true,
    					focusable: true,
    					"data-prefix": true,
    					"data-icon": true,
    					role: true,
    					xmlns: true,
    					viewBox: true
    				},
    				1
    			);

    			var svg_nodes = children(svg);
    			path = claim_element(svg_nodes, "path", { d: true }, 1);
    			children(path).forEach(detach);
    			svg_nodes.forEach(detach);
    			this.h();
    		},
    		h() {
    			attr(path, "d", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z");
    			set_svg_attributes(svg, svg_data);
    		},
    		m(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, path);
    		},
    		p(ctx, [dirty]) {
    			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
    				{ "aria-hidden": "true" },
    				{ focusable: "false" },
    				{ "data-prefix": "far" },
    				{ "data-icon": "clock" },
    				{ role: "img" },
    				{ xmlns: "http://www.w3.org/2000/svg" },
    				{ viewBox: "0 0 512 512" },
    				dirty & /*$$props*/ 1 && /*$$props*/ ctx[0]
    			]));
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(svg);
    		}
    	};
    }

    function instance$16($$self, $$props, $$invalidate) {
    	$$self.$$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class Clock extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$16, create_fragment$16, safe_not_equal, {});
    	}
    }

    /* src/_components/icon/svgs/creditcard.svg generated by Svelte v3.38.1 */

    function create_fragment$15(ctx) {
    	let svg;
    	let path;

    	let svg_levels = [
    		{ version: "1.1" },
    		{ id: "Layer_1" },
    		{ xmlns: "http://www.w3.org/2000/svg" },
    		{ x: "0px" },
    		{ y: "0px" },
    		{ viewBox: "0 0 576 448" },
    		{
    			style: "enable-background:new 0 0 576 448;"
    		},
    		{ "xml:space": "preserve" },
    		/*$$props*/ ctx[0]
    	];

    	let svg_data = {};

    	for (let i = 0; i < svg_levels.length; i += 1) {
    		svg_data = assign(svg_data, svg_levels[i]);
    	}

    	return {
    		c() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			this.h();
    		},
    		l(nodes) {
    			svg = claim_element(
    				nodes,
    				"svg",
    				{
    					version: true,
    					id: true,
    					xmlns: true,
    					x: true,
    					y: true,
    					viewBox: true,
    					style: true,
    					"xml:space": true
    				},
    				1
    			);

    			var svg_nodes = children(svg);
    			path = claim_element(svg_nodes, "path", { d: true }, 1);
    			children(path).forEach(detach);
    			svg_nodes.forEach(detach);
    			this.h();
    		},
    		h() {
    			attr(path, "d", "M528,0H48C21.5,0,0,21.5,0,48v352c0,26.5,21.5,48,48,48h480c26.5,0,48-21.5,48-48V48C576,21.5,554.5,0,528,0z M48,32h480\n\tc8.8,0,16,7.2,16,16v48H32V48C32,39.2,39.2,32,48,32z M528,416H48c-8.8,0-16-7.2-16-16V192h512v208C544,408.8,536.8,416,528,416z\n\t M192,332v8c0,6.6-5.4,12-12,12h-72c-6.6,0-12-5.4-12-12v-8c0-6.6,5.4-12,12-12h72C186.6,320,192,325.4,192,332z M384,332v8\n\tc0,6.6-5.4,12-12,12H236c-6.6,0-12-5.4-12-12v-8c0-6.6,5.4-12,12-12h136C378.6,320,384,325.4,384,332z");
    			set_svg_attributes(svg, svg_data);
    		},
    		m(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, path);
    		},
    		p(ctx, [dirty]) {
    			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
    				{ version: "1.1" },
    				{ id: "Layer_1" },
    				{ xmlns: "http://www.w3.org/2000/svg" },
    				{ x: "0px" },
    				{ y: "0px" },
    				{ viewBox: "0 0 576 448" },
    				{
    					style: "enable-background:new 0 0 576 448;"
    				},
    				{ "xml:space": "preserve" },
    				dirty & /*$$props*/ 1 && /*$$props*/ ctx[0]
    			]));
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(svg);
    		}
    	};
    }

    function instance$15($$self, $$props, $$invalidate) {
    	$$self.$$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class Creditcard extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$15, create_fragment$15, safe_not_equal, {});
    	}
    }

    /* src/_components/icon/svgs/ebplus_icon.svg generated by Svelte v3.38.1 */

    function create_fragment$14(ctx) {
    	let svg;
    	let path;

    	let svg_levels = [
    		{ version: "1.1" },
    		{ id: "Layer_1" },
    		{ xmlns: "http://www.w3.org/2000/svg" },
    		{
    			"xmlns:xlink": "http://www.w3.org/1999/xlink"
    		},
    		{ x: "0px" },
    		{ y: "0px" },
    		{ viewBox: "0 0 72.8 72.8" },
    		{
    			style: "enable-background:new 0 0 72.8 72.8;"
    		},
    		{ "xml:space": "preserve" },
    		/*$$props*/ ctx[0]
    	];

    	let svg_data = {};

    	for (let i = 0; i < svg_levels.length; i += 1) {
    		svg_data = assign(svg_data, svg_levels[i]);
    	}

    	return {
    		c() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			this.h();
    		},
    		l(nodes) {
    			svg = claim_element(
    				nodes,
    				"svg",
    				{
    					version: true,
    					id: true,
    					xmlns: true,
    					"xmlns:xlink": true,
    					x: true,
    					y: true,
    					viewBox: true,
    					style: true,
    					"xml:space": true
    				},
    				1
    			);

    			var svg_nodes = children(svg);
    			path = claim_element(svg_nodes, "path", { d: true }, 1);
    			children(path).forEach(detach);
    			svg_nodes.forEach(detach);
    			this.h();
    		},
    		h() {
    			attr(path, "d", "M36.4,0C16.3,0,0,16.3,0,36.4s16.3,36.4,36.4,36.4s36.4-16.3,36.4-36.4S56.5,0,36.4,0z M56.5,41.9H42.2v14.2\n\tH30.6V41.9H16.3V31.4h14.2V17.2h11.7v14.1h14.2V41.9z");
    			set_svg_attributes(svg, svg_data);
    		},
    		m(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, path);
    		},
    		p(ctx, [dirty]) {
    			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
    				{ version: "1.1" },
    				{ id: "Layer_1" },
    				{ xmlns: "http://www.w3.org/2000/svg" },
    				{
    					"xmlns:xlink": "http://www.w3.org/1999/xlink"
    				},
    				{ x: "0px" },
    				{ y: "0px" },
    				{ viewBox: "0 0 72.8 72.8" },
    				{
    					style: "enable-background:new 0 0 72.8 72.8;"
    				},
    				{ "xml:space": "preserve" },
    				dirty & /*$$props*/ 1 && /*$$props*/ ctx[0]
    			]));
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(svg);
    		}
    	};
    }

    function instance$14($$self, $$props, $$invalidate) {
    	$$self.$$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class Ebplus_icon extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$14, create_fragment$14, safe_not_equal, {});
    	}
    }

    /* src/_components/icon/svgs/ebplus_sort.svg generated by Svelte v3.38.1 */

    function create_fragment$13(ctx) {
    	let svg;
    	let g1;
    	let g0;
    	let path;

    	let svg_levels = [
    		{ version: "1.1" },
    		{ id: "Layer_1" },
    		{ xmlns: "http://www.w3.org/2000/svg" },
    		{
    			"xmlns:xlink": "http://www.w3.org/1999/xlink"
    		},
    		{ x: "0px" },
    		{ y: "0px" },
    		{ viewBox: "0 122.1 595.3 597.4" },
    		{
    			"enable-background": "new 0 122.1 595.3 597.4"
    		},
    		{ "xml:space": "preserve" },
    		/*$$props*/ ctx[0]
    	];

    	let svg_data = {};

    	for (let i = 0; i < svg_levels.length; i += 1) {
    		svg_data = assign(svg_data, svg_levels[i]);
    	}

    	return {
    		c() {
    			svg = svg_element("svg");
    			g1 = svg_element("g");
    			g0 = svg_element("g");
    			path = svg_element("path");
    			this.h();
    		},
    		l(nodes) {
    			svg = claim_element(
    				nodes,
    				"svg",
    				{
    					version: true,
    					id: true,
    					xmlns: true,
    					"xmlns:xlink": true,
    					x: true,
    					y: true,
    					viewBox: true,
    					"enable-background": true,
    					"xml:space": true
    				},
    				1
    			);

    			var svg_nodes = children(svg);
    			g1 = claim_element(svg_nodes, "g", {}, 1);
    			var g1_nodes = children(g1);
    			g0 = claim_element(g1_nodes, "g", {}, 1);
    			var g0_nodes = children(g0);
    			path = claim_element(g0_nodes, "path", { d: true }, 1);
    			children(path).forEach(detach);
    			g0_nodes.forEach(detach);
    			g1_nodes.forEach(detach);
    			svg_nodes.forEach(detach);
    			this.h();
    		},
    		h() {
    			attr(path, "d", "M237.4,122.1h120.5v238.5h237.4V481H357.9v238.5H237.4V481H0V360.5h237.4V122.1z");
    			set_svg_attributes(svg, svg_data);
    		},
    		m(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, g1);
    			append(g1, g0);
    			append(g0, path);
    		},
    		p(ctx, [dirty]) {
    			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
    				{ version: "1.1" },
    				{ id: "Layer_1" },
    				{ xmlns: "http://www.w3.org/2000/svg" },
    				{
    					"xmlns:xlink": "http://www.w3.org/1999/xlink"
    				},
    				{ x: "0px" },
    				{ y: "0px" },
    				{ viewBox: "0 122.1 595.3 597.4" },
    				{
    					"enable-background": "new 0 122.1 595.3 597.4"
    				},
    				{ "xml:space": "preserve" },
    				dirty & /*$$props*/ 1 && /*$$props*/ ctx[0]
    			]));
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(svg);
    		}
    	};
    }

    function instance$13($$self, $$props, $$invalidate) {
    	$$self.$$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class Ebplus_sort extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$13, create_fragment$13, safe_not_equal, {});
    	}
    }

    /* src/_components/icon/svgs/envelope.svg generated by Svelte v3.38.1 */

    function create_fragment$12(ctx) {
    	let svg;
    	let path;

    	let svg_levels = [
    		{ version: "1.1" },
    		{ id: "Layer_1" },
    		{ xmlns: "http://www.w3.org/2000/svg" },
    		{ x: "0px" },
    		{ y: "0px" },
    		{ viewBox: "0 0 512 384" },
    		{
    			style: "enable-background:new 0 0 512 384;"
    		},
    		{ "xml:space": "preserve" },
    		/*$$props*/ ctx[0]
    	];

    	let svg_data = {};

    	for (let i = 0; i < svg_levels.length; i += 1) {
    		svg_data = assign(svg_data, svg_levels[i]);
    	}

    	return {
    		c() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			this.h();
    		},
    		l(nodes) {
    			svg = claim_element(
    				nodes,
    				"svg",
    				{
    					version: true,
    					id: true,
    					xmlns: true,
    					x: true,
    					y: true,
    					viewBox: true,
    					style: true,
    					"xml:space": true
    				},
    				1
    			);

    			var svg_nodes = children(svg);
    			path = claim_element(svg_nodes, "path", { d: true }, 1);
    			children(path).forEach(detach);
    			svg_nodes.forEach(detach);
    			this.h();
    		},
    		h() {
    			attr(path, "d", "M464,0H48C21.5,0,0,21.5,0,48v288c0,26.5,21.5,48,48,48h416c26.5,0,48-21.5,48-48V48C512,21.5,490.5,0,464,0z M48,32h416\n\tc8.8,0,16,7.2,16,16v41.4c-21.9,18.5-53.2,44-150.6,121.3c-16.9,13.4-50.2,45.7-73.4,45.3c-23.2,0.4-56.6-31.9-73.4-45.3\n\tC85.2,133.4,53.9,107.9,32,89.4V48C32,39.2,39.2,32,48,32z M464,352H48c-8.8,0-16-7.2-16-16V131c22.8,18.7,58.8,47.6,130.7,104.7\n\tc20.5,16.4,56.7,52.5,93.3,52.3c36.4,0.3,72.3-35.5,93.3-52.3c71.9-57.1,107.9-86,130.7-104.7v205C480,344.8,472.8,352,464,352z");
    			set_svg_attributes(svg, svg_data);
    		},
    		m(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, path);
    		},
    		p(ctx, [dirty]) {
    			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
    				{ version: "1.1" },
    				{ id: "Layer_1" },
    				{ xmlns: "http://www.w3.org/2000/svg" },
    				{ x: "0px" },
    				{ y: "0px" },
    				{ viewBox: "0 0 512 384" },
    				{
    					style: "enable-background:new 0 0 512 384;"
    				},
    				{ "xml:space": "preserve" },
    				dirty & /*$$props*/ 1 && /*$$props*/ ctx[0]
    			]));
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(svg);
    		}
    	};
    }

    function instance$12($$self, $$props, $$invalidate) {
    	$$self.$$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class Envelope extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$12, create_fragment$12, safe_not_equal, {});
    	}
    }

    /* src/_components/icon/svgs/figcaption-pin.svg generated by Svelte v3.38.1 */

    function create_fragment$11(ctx) {
    	let svg;
    	let path0;
    	let path1;

    	let svg_levels = [
    		{ xmlns: "http://www.w3.org/2000/svg" },
    		{ viewBox: "0 0 34 16.4" },
    		/*$$props*/ ctx[0]
    	];

    	let svg_data = {};

    	for (let i = 0; i < svg_levels.length; i += 1) {
    		svg_data = assign(svg_data, svg_levels[i]);
    	}

    	return {
    		c() {
    			svg = svg_element("svg");
    			path0 = svg_element("path");
    			path1 = svg_element("path");
    			this.h();
    		},
    		l(nodes) {
    			svg = claim_element(nodes, "svg", { xmlns: true, viewBox: true }, 1);
    			var svg_nodes = children(svg);
    			path0 = claim_element(svg_nodes, "path", { d: true, fill: true }, 1);
    			children(path0).forEach(detach);
    			path1 = claim_element(svg_nodes, "path", { d: true }, 1);
    			children(path1).forEach(detach);
    			svg_nodes.forEach(detach);
    			this.h();
    		},
    		h() {
    			attr(path0, "d", "M15.6.8c.8-.8 2-.8 2.8 0l6.7 6.7c1.9 1.9 4.4 2.9 7.1 2.9H34v6H0v-6h1.9c2.7 0 5.2-1.1 7.1-2.9L15.6.8z");
    			attr(path0, "fill", "#fff");
    			attr(path1, "d", "M9.7 12.9l6.6-6.6c.4-.4 1-.4 1.4 0l6.6 6.6c.6.6.2 1.7-.7 1.7H10.4c-.9 0-1.3-1-.7-1.7z");
    			set_svg_attributes(svg, svg_data);
    		},
    		m(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, path0);
    			append(svg, path1);
    		},
    		p(ctx, [dirty]) {
    			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
    				{ xmlns: "http://www.w3.org/2000/svg" },
    				{ viewBox: "0 0 34 16.4" },
    				dirty & /*$$props*/ 1 && /*$$props*/ ctx[0]
    			]));
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(svg);
    		}
    	};
    }

    function instance$11($$self, $$props, $$invalidate) {
    	$$self.$$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class FigcaptionPin extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$11, create_fragment$11, safe_not_equal, {});
    	}
    }

    /* src/_components/icon/svgs/gallery.svg generated by Svelte v3.38.1 */

    function create_fragment$10(ctx) {
    	let svg;
    	let path;

    	let svg_levels = [
    		{ version: "1.1" },
    		{ id: "Layer_1" },
    		{ xmlns: "http://www.w3.org/2000/svg" },
    		{
    			"xmlns:xlink": "http://www.w3.org/1999/xlink"
    		},
    		{ x: "0px" },
    		{ y: "0px" },
    		{ viewBox: "0 0 55 55" },
    		{
    			style: "enable-background:new 0 0 55 55;"
    		},
    		{ "xml:space": "preserve" },
    		/*$$props*/ ctx[0]
    	];

    	let svg_data = {};

    	for (let i = 0; i < svg_levels.length; i += 1) {
    		svg_data = assign(svg_data, svg_levels[i]);
    	}

    	return {
    		c() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			this.h();
    		},
    		l(nodes) {
    			svg = claim_element(
    				nodes,
    				"svg",
    				{
    					version: true,
    					id: true,
    					xmlns: true,
    					"xmlns:xlink": true,
    					x: true,
    					y: true,
    					viewBox: true,
    					style: true,
    					"xml:space": true
    				},
    				1
    			);

    			var svg_nodes = children(svg);
    			path = claim_element(svg_nodes, "path", { d: true }, 1);
    			children(path).forEach(detach);
    			svg_nodes.forEach(detach);
    			this.h();
    		},
    		h() {
    			attr(path, "d", "M43.7,54.5c-0.3,0-0.6,0-0.9-0.1l-32.7-6.6c-0.8-0.2-1.3-1-1.2-1.8c0.2-0.8,1-1.3,1.8-1.2l32.8,6.6c0.1,0,0.1,0,0.2,0\n\tc0.1,0,0.1,0,0.6-0.1l0.1,0c0,0,0-0.1,0.1-0.1c0-0.1,0-0.1,0-0.2l7.1-35c0-0.2,0-0.4-0.1-0.6c-0.1-0.1-0.2-0.2-0.4-0.3L46,14.3\n\tc-0.8-0.1-1.4-0.9-1.2-1.7c0.1-0.8,0.9-1.4,1.7-1.2l4.9,0.9c1,0.2,1.8,0.7,2.4,1.5c0.6,0.9,0.8,1.9,0.6,2.9l-7.1,34.9\n\tc-0.1,1-0.8,2-1.7,2.5c-0.1,0-0.1,0.1-0.2,0.1l-0.2,0.1C44.8,54.3,44.3,54.5,43.7,54.5z M39.6,43.3H4.2c-2.2,0-3.7-1.6-3.7-3.7V4.2\n\tc0-2.2,1.6-3.7,3.7-3.7h35.4c2.2,0,3.7,1.6,3.7,3.7v35.4C43.3,41.8,41.8,43.3,39.6,43.3z M3.5,36.7v2.9c0,0.5,0.2,0.7,0.7,0.7h35.4\n\tc0.5,0,0.7-0.2,0.7-0.7v-2.9H3.5z M37.7,33.7h2.6V4.2c0-0.5-0.2-0.7-0.7-0.7H4.2c-0.5,0-0.7,0.2-0.7,0.7v29.5h2.6\n\tc0.2-1.7,0.6-3.4,1.4-5.1c1.2-2.4,4.8-3.7,9.8-5.4c0.2-0.5,0.2-1.7,0-2.1c-2.1-2.4-3-5.2-2.8-8.1c0-2.2,0.6-4,1.9-5.5\n\tc1.4-1.6,3.3-2.5,5.6-2.5c2,0,3.9,0.9,5.5,2.4c0,0,0.1,0.1,0.1,0.1c1.3,1.6,1.9,3.5,1.7,5.6c0.2,3-0.8,5.9-2.7,7.9\n\tc-0.2,0.5-0.2,1.8,0,2.3c0.6,0.2,1.3,0.5,1.9,0.7c4,1.5,6.9,2.6,7.9,4.6C37.1,30.3,37.6,32,37.7,33.7z M9.1,33.7h25.6\n\tc-0.2-1.3-0.5-2.6-1.1-3.9c-0.4-0.9-3.4-2-6.2-3c-0.7-0.3-1.4-0.5-2.2-0.8c-0.5-0.2-1.2-0.7-1.5-1.8c-0.5-1.5-0.3-3.9,0.4-4.9\n\tc0.1-0.1,0.1-0.2,0.2-0.2c1.4-1.4,2.2-3.6,2-5.9c0-0.1,0-0.2,0-0.3c0.2-1.3-0.1-2.5-0.9-3.4c-0.6-0.6-1.8-1.5-3.3-1.5\n\tc-1.4,0-2.5,0.5-3.3,1.5c-0.8,1-1.2,2.2-1.2,3.7c0,0,0,0.1,0,0.1c-0.2,2.2,0.5,4.2,2.1,6c0.9,0.9,1.1,3.3,0.8,4.6\n\tc-0.4,1.6-1.3,2.1-1.8,2.3c-2.8,0.9-7.5,2.5-8.2,3.9C9.7,31.1,9.3,32.4,9.1,33.7z M17.3,21.1C17.3,21.2,17.3,21.2,17.3,21.1\n\tC17.3,21.2,17.3,21.2,17.3,21.1z");
    			set_svg_attributes(svg, svg_data);
    		},
    		m(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, path);
    		},
    		p(ctx, [dirty]) {
    			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
    				{ version: "1.1" },
    				{ id: "Layer_1" },
    				{ xmlns: "http://www.w3.org/2000/svg" },
    				{
    					"xmlns:xlink": "http://www.w3.org/1999/xlink"
    				},
    				{ x: "0px" },
    				{ y: "0px" },
    				{ viewBox: "0 0 55 55" },
    				{
    					style: "enable-background:new 0 0 55 55;"
    				},
    				{ "xml:space": "preserve" },
    				dirty & /*$$props*/ 1 && /*$$props*/ ctx[0]
    			]));
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(svg);
    		}
    	};
    }

    function instance$10($$self, $$props, $$invalidate) {
    	$$self.$$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class Gallery extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$10, create_fragment$10, safe_not_equal, {});
    	}
    }

    /* src/_components/icon/svgs/headphones.svg generated by Svelte v3.38.1 */

    function create_fragment$$(ctx) {
    	let svg;
    	let path;

    	let svg_levels = [
    		{ version: "1.1" },
    		{ id: "Layer_1" },
    		{ xmlns: "http://www.w3.org/2000/svg" },
    		{
    			"xmlns:xlink": "http://www.w3.org/1999/xlink"
    		},
    		{ x: "0px" },
    		{ y: "0px" },
    		{ viewBox: "0 0 53 53" },
    		{
    			style: "enable-background:new 0 0 53 53;"
    		},
    		{ "xml:space": "preserve" },
    		/*$$props*/ ctx[0]
    	];

    	let svg_data = {};

    	for (let i = 0; i < svg_levels.length; i += 1) {
    		svg_data = assign(svg_data, svg_levels[i]);
    	}

    	return {
    		c() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			this.h();
    		},
    		l(nodes) {
    			svg = claim_element(
    				nodes,
    				"svg",
    				{
    					version: true,
    					id: true,
    					xmlns: true,
    					"xmlns:xlink": true,
    					x: true,
    					y: true,
    					viewBox: true,
    					style: true,
    					"xml:space": true
    				},
    				1
    			);

    			var svg_nodes = children(svg);
    			path = claim_element(svg_nodes, "path", { d: true }, 1);
    			children(path).forEach(detach);
    			svg_nodes.forEach(detach);
    			this.h();
    		},
    		h() {
    			attr(path, "d", "M14.9,52.7c-0.5,0-1.1-0.1-1.6-0.3c-0.9-0.4-1.6-1.2-2-2.3L6.7,38.3c-0.4-1-0.4-2.1,0.1-3c0.4-0.9,1.2-1.6,2.2-1.9l2-0.9\n\tc1-0.4,2.1-0.4,3.1,0c0.9,0.4,1.6,1.2,2,2.3l4.6,11.8c0.4,1,0.4,2.1-0.1,3c-0.4,0.9-1.2,1.6-2.2,1.9l-2,0.9\n\tC15.9,52.6,15.4,52.7,14.9,52.7z M12.5,35.1c-0.1,0-0.2,0-0.3,0.1l-2,0.9c0,0-0.1,0-0.1,0.1c-0.2,0.1-0.4,0.2-0.5,0.4\n\tc-0.1,0.2-0.1,0.4,0,0.7c0,0,0,0,0,0l4.7,11.9c0.1,0.3,0.2,0.5,0.4,0.6c0.2,0.1,0.4,0.1,0.7,0l2-0.9c0,0,0.1,0,0.1-0.1\n\tc0.2-0.1,0.4-0.2,0.5-0.4c0.1-0.2,0.1-0.4,0-0.7l-4.7-11.9c-0.1-0.3-0.2-0.5-0.4-0.6C12.7,35.1,12.6,35.1,12.5,35.1z M38,52.6\n\tc-0.5,0-0.9-0.1-1.3-0.3l-2.2-1c-1.9-0.8-2.9-3.1-2.2-5L37,34.6c0.8-2,3.1-3,5-2.2l2.2,1c0.9,0.3,1.6,1.1,2.1,2c0.5,1,0.5,2,0.1,3\n\tl-4.7,11.9c0,0,0,0,0,0c-0.4,0.9-1.1,1.7-2,2.1C39.1,52.5,38.6,52.6,38,52.6z M40.7,35.1c-0.3,0-0.7,0.3-0.9,0.6l-4.7,11.9\n\tc-0.2,0.4,0.1,0.9,0.6,1.1l2.2,1c0.3,0.1,0.9-0.2,1-0.6l4.7-11.9c0.1-0.2,0.1-0.4,0-0.6c-0.1-0.2-0.3-0.4-0.5-0.5l-2.2-1\n\tC40.8,35.1,40.7,35.1,40.7,35.1z M40.3,49.6L40.3,49.6L40.3,49.6z M44,52.5c-0.2,0-0.5-0.1-0.7-0.2c-0.7-0.4-1-1.3-0.6-2\n\tc0.1-0.1,6.8-12.6,6.8-23.8c0-12.7-10.3-23-23-23c-12.7,0-23,10.3-23,23c0,11.1,6.7,23.7,6.8,23.8c0.4,0.7,0.1,1.6-0.6,2\n\tc-0.7,0.4-1.6,0.1-2-0.6c-0.3-0.5-7.2-13.3-7.2-25.2c0-14.3,11.7-26,26-26c14.3,0,26,11.7,26,26c0,11.9-6.9,24.7-7.2,25.2\n\tC45,52.2,44.5,52.5,44,52.5z");
    			set_svg_attributes(svg, svg_data);
    		},
    		m(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, path);
    		},
    		p(ctx, [dirty]) {
    			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
    				{ version: "1.1" },
    				{ id: "Layer_1" },
    				{ xmlns: "http://www.w3.org/2000/svg" },
    				{
    					"xmlns:xlink": "http://www.w3.org/1999/xlink"
    				},
    				{ x: "0px" },
    				{ y: "0px" },
    				{ viewBox: "0 0 53 53" },
    				{
    					style: "enable-background:new 0 0 53 53;"
    				},
    				{ "xml:space": "preserve" },
    				dirty & /*$$props*/ 1 && /*$$props*/ ctx[0]
    			]));
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(svg);
    		}
    	};
    }

    function instance$$($$self, $$props, $$invalidate) {
    	$$self.$$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class Headphones extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$$, create_fragment$$, safe_not_equal, {});
    	}
    }

    /* src/_components/icon/svgs/headset.svg generated by Svelte v3.38.1 */

    function create_fragment$_(ctx) {
    	let svg;
    	let path;

    	let svg_levels = [
    		{ xmlns: "http://www.w3.org/2000/svg" },
    		{ viewBox: "0 0 512 512" },
    		/*$$props*/ ctx[0]
    	];

    	let svg_data = {};

    	for (let i = 0; i < svg_levels.length; i += 1) {
    		svg_data = assign(svg_data, svg_levels[i]);
    	}

    	return {
    		c() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			this.h();
    		},
    		l(nodes) {
    			svg = claim_element(nodes, "svg", { xmlns: true, viewBox: true }, 1);
    			var svg_nodes = children(svg);
    			path = claim_element(svg_nodes, "path", { d: true }, 1);
    			children(path).forEach(detach);
    			svg_nodes.forEach(detach);
    			this.h();
    		},
    		h() {
    			attr(path, "d", "M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z");
    			set_svg_attributes(svg, svg_data);
    		},
    		m(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, path);
    		},
    		p(ctx, [dirty]) {
    			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
    				{ xmlns: "http://www.w3.org/2000/svg" },
    				{ viewBox: "0 0 512 512" },
    				dirty & /*$$props*/ 1 && /*$$props*/ ctx[0]
    			]));
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(svg);
    		}
    	};
    }

    function instance$_($$self, $$props, $$invalidate) {
    	$$self.$$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class Headset extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$_, create_fragment$_, safe_not_equal, {});
    	}
    }

    /* src/_components/icon/svgs/history-regular.svg generated by Svelte v3.38.1 */

    function create_fragment$Z(ctx) {
    	let svg;
    	let path;

    	let svg_levels = [
    		{ "aria-hidden": "true" },
    		{ focusable: "false" },
    		{ "data-prefix": "far" },
    		{ "data-icon": "history" },
    		{
    			class: "svg-inline--fa fa-history fa-w-16"
    		},
    		{ role: "img" },
    		{ xmlns: "http://www.w3.org/2000/svg" },
    		{ viewBox: "0 0 512 512" },
    		/*$$props*/ ctx[0]
    	];

    	let svg_data = {};

    	for (let i = 0; i < svg_levels.length; i += 1) {
    		svg_data = assign(svg_data, svg_levels[i]);
    	}

    	return {
    		c() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			this.h();
    		},
    		l(nodes) {
    			svg = claim_element(
    				nodes,
    				"svg",
    				{
    					"aria-hidden": true,
    					focusable: true,
    					"data-prefix": true,
    					"data-icon": true,
    					class: true,
    					role: true,
    					xmlns: true,
    					viewBox: true
    				},
    				1
    			);

    			var svg_nodes = children(svg);
    			path = claim_element(svg_nodes, "path", { fill: true, d: true }, 1);
    			children(path).forEach(detach);
    			svg_nodes.forEach(detach);
    			this.h();
    		},
    		h() {
    			attr(path, "fill", "currentColor");
    			attr(path, "d", "M504 255.532c.252 136.64-111.182 248.372-247.822 248.468-64.014.045-122.373-24.163-166.394-63.942-5.097-4.606-5.3-12.543-.443-17.4l16.96-16.96c4.529-4.529 11.776-4.659 16.555-.395C158.208 436.843 204.848 456 256 456c110.549 0 200-89.468 200-200 0-110.549-89.468-200-200-200-55.52 0-105.708 22.574-141.923 59.043l49.091 48.413c7.641 7.535 2.305 20.544-8.426 20.544H26.412c-6.627 0-12-5.373-12-12V45.443c0-10.651 12.843-16.023 20.426-8.544l45.097 44.474C124.866 36.067 187.15 8 256 8c136.811 0 247.747 110.781 248 247.532zm-167.058 90.173l14.116-19.409c3.898-5.36 2.713-12.865-2.647-16.763L280 259.778V116c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v168.222l88.179 64.13c5.36 3.897 12.865 2.712 16.763-2.647z");
    			set_svg_attributes(svg, svg_data);
    		},
    		m(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, path);
    		},
    		p(ctx, [dirty]) {
    			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
    				{ "aria-hidden": "true" },
    				{ focusable: "false" },
    				{ "data-prefix": "far" },
    				{ "data-icon": "history" },
    				{
    					class: "svg-inline--fa fa-history fa-w-16"
    				},
    				{ role: "img" },
    				{ xmlns: "http://www.w3.org/2000/svg" },
    				{ viewBox: "0 0 512 512" },
    				dirty & /*$$props*/ 1 && /*$$props*/ ctx[0]
    			]));
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(svg);
    		}
    	};
    }

    function instance$Z($$self, $$props, $$invalidate) {
    	$$self.$$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class HistoryRegular extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$Z, create_fragment$Z, safe_not_equal, {});
    	}
    }

    /* src/_components/icon/svgs/lock-old.svg generated by Svelte v3.38.1 */

    function create_fragment$Y(ctx) {
    	let svg;
    	let path;

    	let svg_levels = [
    		{ xmlns: "http://www.w3.org/2000/svg" },
    		{ viewBox: "0 0 448 512" },
    		/*$$props*/ ctx[0]
    	];

    	let svg_data = {};

    	for (let i = 0; i < svg_levels.length; i += 1) {
    		svg_data = assign(svg_data, svg_levels[i]);
    	}

    	return {
    		c() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			this.h();
    		},
    		l(nodes) {
    			svg = claim_element(nodes, "svg", { xmlns: true, viewBox: true }, 1);
    			var svg_nodes = children(svg);
    			path = claim_element(svg_nodes, "path", { d: true }, 1);
    			children(path).forEach(detach);
    			svg_nodes.forEach(detach);
    			this.h();
    		},
    		h() {
    			attr(path, "d", "M400 192h-32v-46.6C368 65.8 304 .2 224.4 0 144.8-.2 80 64.5 80 144v48H48c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48zm-272-48c0-52.9 43.1-96 96-96s96 43.1 96 96v48H128v-48zm272 320H48V240h352v224z");
    			set_svg_attributes(svg, svg_data);
    		},
    		m(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, path);
    		},
    		p(ctx, [dirty]) {
    			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
    				{ xmlns: "http://www.w3.org/2000/svg" },
    				{ viewBox: "0 0 448 512" },
    				dirty & /*$$props*/ 1 && /*$$props*/ ctx[0]
    			]));
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(svg);
    		}
    	};
    }

    function instance$Y($$self, $$props, $$invalidate) {
    	$$self.$$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class LockOld extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$Y, create_fragment$Y, safe_not_equal, {});
    	}
    }

    /* src/_components/icon/svgs/lock.svg generated by Svelte v3.38.1 */

    function create_fragment$X(ctx) {
    	let svg;
    	let path;

    	let svg_levels = [
    		{ xmlns: "http://www.w3.org/2000/svg" },
    		{ viewBox: "0 0 448 512" },
    		/*$$props*/ ctx[0]
    	];

    	let svg_data = {};

    	for (let i = 0; i < svg_levels.length; i += 1) {
    		svg_data = assign(svg_data, svg_levels[i]);
    	}

    	return {
    		c() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			this.h();
    		},
    		l(nodes) {
    			svg = claim_element(nodes, "svg", { xmlns: true, viewBox: true }, 1);
    			var svg_nodes = children(svg);
    			path = claim_element(svg_nodes, "path", { d: true }, 1);
    			children(path).forEach(detach);
    			svg_nodes.forEach(detach);
    			this.h();
    		},
    		h() {
    			attr(path, "d", "M400 192h-32v-46.6C368 65.8 304 .2 224.4 0 144.8-.2 80 64.5 80 144v48H48c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48zm-272-48c0-52.9 43.1-96 96-96s96 43.1 96 96v48H128v-48zm272 320H48V240h352v224z");
    			set_svg_attributes(svg, svg_data);
    		},
    		m(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, path);
    		},
    		p(ctx, [dirty]) {
    			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
    				{ xmlns: "http://www.w3.org/2000/svg" },
    				{ viewBox: "0 0 448 512" },
    				dirty & /*$$props*/ 1 && /*$$props*/ ctx[0]
    			]));
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(svg);
    		}
    	};
    }

    function instance$X($$self, $$props, $$invalidate) {
    	$$self.$$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class Lock extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$X, create_fragment$X, safe_not_equal, {});
    	}
    }

    /* src/_components/icon/svgs/medielogin.svg generated by Svelte v3.38.1 */

    function create_fragment$W(ctx) {
    	let svg;
    	let g;
    	let rect;
    	let polygon0;
    	let path;
    	let polygon1;

    	let svg_levels = [
    		{ version: "1.1" },
    		{ id: "Layer_1" },
    		{ xmlns: "http://www.w3.org/2000/svg" },
    		{
    			"xmlns:xlink": "http://www.w3.org/1999/xlink"
    		},
    		{ x: "0px" },
    		{ y: "0px" },
    		{ viewBox: "0 0 63.6 81.5" },
    		{
    			style: "enable-background:new 0 0 63.6 81.5;"
    		},
    		{ "xml:space": "preserve" },
    		/*$$props*/ ctx[0]
    	];

    	let svg_data = {};

    	for (let i = 0; i < svg_levels.length; i += 1) {
    		svg_data = assign(svg_data, svg_levels[i]);
    	}

    	return {
    		c() {
    			svg = svg_element("svg");
    			g = svg_element("g");
    			rect = svg_element("rect");
    			polygon0 = svg_element("polygon");
    			path = svg_element("path");
    			polygon1 = svg_element("polygon");
    			this.h();
    		},
    		l(nodes) {
    			svg = claim_element(
    				nodes,
    				"svg",
    				{
    					version: true,
    					id: true,
    					xmlns: true,
    					"xmlns:xlink": true,
    					x: true,
    					y: true,
    					viewBox: true,
    					style: true,
    					"xml:space": true
    				},
    				1
    			);

    			var svg_nodes = children(svg);
    			g = claim_element(svg_nodes, "g", {}, 1);
    			var g_nodes = children(g);
    			rect = claim_element(g_nodes, "rect", { y: true, width: true, height: true }, 1);
    			children(rect).forEach(detach);
    			polygon0 = claim_element(g_nodes, "polygon", { points: true }, 1);
    			children(polygon0).forEach(detach);
    			path = claim_element(g_nodes, "path", { d: true }, 1);
    			children(path).forEach(detach);
    			polygon1 = claim_element(g_nodes, "polygon", { points: true }, 1);
    			children(polygon1).forEach(detach);
    			g_nodes.forEach(detach);
    			svg_nodes.forEach(detach);
    			this.h();
    		},
    		h() {
    			attr(rect, "y", "70.7");
    			attr(rect, "width", "63.3");
    			attr(rect, "height", "10.9");
    			attr(polygon0, "points", "0,81.5 21.2,61.8 21.2,47.8 0,67.5 \t");
    			attr(path, "d", "M31.8,0C14.2,0,0,14.2,0,31.8c0,13.8,8.9,25.6,21.2,30v-14c-5.2-3.4-8.6-9.3-8.6-16c0-10.6,8.6-19.2,19.2-19.2\n\t\tS51,21.2,51,31.8c0,6.7-3.4,12.5-8.6,16v14c12.3-4.4,21.2-16.1,21.2-30C63.6,14.2,49.3,0,31.8,0z");
    			attr(polygon1, "points", "63.6,81.5 42.4,61.7 42.4,47.8 63.6,67.5 \t");
    			set_svg_attributes(svg, svg_data);
    		},
    		m(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, g);
    			append(g, rect);
    			append(g, polygon0);
    			append(g, path);
    			append(g, polygon1);
    		},
    		p(ctx, [dirty]) {
    			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
    				{ version: "1.1" },
    				{ id: "Layer_1" },
    				{ xmlns: "http://www.w3.org/2000/svg" },
    				{
    					"xmlns:xlink": "http://www.w3.org/1999/xlink"
    				},
    				{ x: "0px" },
    				{ y: "0px" },
    				{ viewBox: "0 0 63.6 81.5" },
    				{
    					style: "enable-background:new 0 0 63.6 81.5;"
    				},
    				{ "xml:space": "preserve" },
    				dirty & /*$$props*/ 1 && /*$$props*/ ctx[0]
    			]));
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(svg);
    		}
    	};
    }

    function instance$W($$self, $$props, $$invalidate) {
    	$$self.$$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class Medielogin extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$W, create_fragment$W, safe_not_equal, {});
    	}
    }

    /* src/_components/icon/svgs/menu-bars.svg generated by Svelte v3.38.1 */

    function create_fragment$V(ctx) {
    	let svg;
    	let g1;
    	let g0;
    	let rect0;
    	let g3;
    	let g2;
    	let rect1;
    	let g5;
    	let g4;
    	let rect2;

    	let svg_levels = [
    		{ version: "1.1" },
    		{ id: "Lag_1" },
    		{ xmlns: "http://www.w3.org/2000/svg" },
    		{
    			"xmlns:xlink": "http://www.w3.org/1999/xlink"
    		},
    		{ x: "0px" },
    		{ y: "0px" },
    		{ viewBox: "0 0 30 30" },
    		{ "enable-background": "new 0 0 30 30" },
    		{ "xml:space": "preserve" },
    		/*$$props*/ ctx[0]
    	];

    	let svg_data = {};

    	for (let i = 0; i < svg_levels.length; i += 1) {
    		svg_data = assign(svg_data, svg_levels[i]);
    	}

    	return {
    		c() {
    			svg = svg_element("svg");
    			g1 = svg_element("g");
    			g0 = svg_element("g");
    			rect0 = svg_element("rect");
    			g3 = svg_element("g");
    			g2 = svg_element("g");
    			rect1 = svg_element("rect");
    			g5 = svg_element("g");
    			g4 = svg_element("g");
    			rect2 = svg_element("rect");
    			this.h();
    		},
    		l(nodes) {
    			svg = claim_element(
    				nodes,
    				"svg",
    				{
    					version: true,
    					id: true,
    					xmlns: true,
    					"xmlns:xlink": true,
    					x: true,
    					y: true,
    					viewBox: true,
    					"enable-background": true,
    					"xml:space": true
    				},
    				1
    			);

    			var svg_nodes = children(svg);
    			g1 = claim_element(svg_nodes, "g", {}, 1);
    			var g1_nodes = children(g1);
    			g0 = claim_element(g1_nodes, "g", {}, 1);
    			var g0_nodes = children(g0);
    			rect0 = claim_element(g0_nodes, "rect", { y: true, width: true, height: true }, 1);
    			children(rect0).forEach(detach);
    			g0_nodes.forEach(detach);
    			g1_nodes.forEach(detach);
    			g3 = claim_element(svg_nodes, "g", {}, 1);
    			var g3_nodes = children(g3);
    			g2 = claim_element(g3_nodes, "g", {}, 1);
    			var g2_nodes = children(g2);
    			rect1 = claim_element(g2_nodes, "rect", { y: true, width: true, height: true }, 1);
    			children(rect1).forEach(detach);
    			g2_nodes.forEach(detach);
    			g3_nodes.forEach(detach);
    			g5 = claim_element(svg_nodes, "g", {}, 1);
    			var g5_nodes = children(g5);
    			g4 = claim_element(g5_nodes, "g", {}, 1);
    			var g4_nodes = children(g4);
    			rect2 = claim_element(g4_nodes, "rect", { y: true, width: true, height: true }, 1);
    			children(rect2).forEach(detach);
    			g4_nodes.forEach(detach);
    			g5_nodes.forEach(detach);
    			svg_nodes.forEach(detach);
    			this.h();
    		},
    		h() {
    			attr(rect0, "y", "4.3");
    			attr(rect0, "width", "30");
    			attr(rect0, "height", "4");
    			attr(rect1, "y", "12.3");
    			attr(rect1, "width", "30");
    			attr(rect1, "height", "4");
    			attr(rect2, "y", "20.3");
    			attr(rect2, "width", "30");
    			attr(rect2, "height", "4");
    			set_svg_attributes(svg, svg_data);
    		},
    		m(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, g1);
    			append(g1, g0);
    			append(g0, rect0);
    			append(svg, g3);
    			append(g3, g2);
    			append(g2, rect1);
    			append(svg, g5);
    			append(g5, g4);
    			append(g4, rect2);
    		},
    		p(ctx, [dirty]) {
    			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
    				{ version: "1.1" },
    				{ id: "Lag_1" },
    				{ xmlns: "http://www.w3.org/2000/svg" },
    				{
    					"xmlns:xlink": "http://www.w3.org/1999/xlink"
    				},
    				{ x: "0px" },
    				{ y: "0px" },
    				{ viewBox: "0 0 30 30" },
    				{ "enable-background": "new 0 0 30 30" },
    				{ "xml:space": "preserve" },
    				dirty & /*$$props*/ 1 && /*$$props*/ ctx[0]
    			]));
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(svg);
    		}
    	};
    }

    function instance$V($$self, $$props, $$invalidate) {
    	$$self.$$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class MenuBars extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$V, create_fragment$V, safe_not_equal, {});
    	}
    }

    /* src/_components/icon/svgs/miteb-regular.svg generated by Svelte v3.38.1 */

    function create_fragment$U(ctx) {
    	let svg;
    	let path;

    	let svg_levels = [
    		{ version: "1.1" },
    		{ id: "miteb-regular" },
    		{ xmlns: "http://www.w3.org/2000/svg" },
    		{
    			"xmlns:xlink": "http://www.w3.org/1999/xlink"
    		},
    		{ x: "0" },
    		{ y: "0" },
    		{ viewBox: "0 0 512 512" },
    		{ "xml:space": "preserve" },
    		/*$$props*/ ctx[0]
    	];

    	let svg_data = {};

    	for (let i = 0; i < svg_levels.length; i += 1) {
    		svg_data = assign(svg_data, svg_levels[i]);
    	}

    	return {
    		c() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			this.h();
    		},
    		l(nodes) {
    			svg = claim_element(
    				nodes,
    				"svg",
    				{
    					version: true,
    					id: true,
    					xmlns: true,
    					"xmlns:xlink": true,
    					x: true,
    					y: true,
    					viewBox: true,
    					"xml:space": true
    				},
    				1
    			);

    			var svg_nodes = children(svg);
    			path = claim_element(svg_nodes, "path", { d: true }, 1);
    			children(path).forEach(detach);
    			svg_nodes.forEach(detach);
    			this.h();
    		},
    		h() {
    			attr(path, "d", "M210.3 26.5H22.5C10 26.5-.1 36.5-.1 48.8v115.4c0 12.3 10.1 22.3 22.6 22.3h187.8c12.5 0 22.6-10 22.6-22.3V48.8c.1-12.3-10.1-22.3-22.6-22.3zm-23.3 115H45.8V71.7H187v69.8zM489.4 26.5H301.6c-12.5 0-22.6 10-22.6 22.3v231.1c0 12.3 10.1 22.3 22.6 22.3h187.8c12.5 0 22.6-10 22.6-22.3V48.8c0-12.3-10.1-22.3-22.6-22.3zm-23.3 230.7H324.9V71.7h141.2v185.5zM210.3 235.3H22.5c-12.5 0-22.6 10-22.6 22.3v205.6c0 12.3 10.1 22.3 22.6 22.3h187.8c12.5 0 22.6-10 22.6-22.3V257.6c.1-12.3-10.1-22.3-22.6-22.3zM187 440.5H45.8v-160H187v160zM489.4 350.1H301.6c-12.5 0-22.6 10-22.6 22.3v90.8c0 12.3 10.1 22.3 22.6 22.3h187.8c12.5 0 22.6-10 22.6-22.3v-90.8c0-12.3-10.1-22.3-22.6-22.3zm-23.3 90.4H324.9v-45.2h141.2v45.2z");
    			set_svg_attributes(svg, svg_data);
    		},
    		m(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, path);
    		},
    		p(ctx, [dirty]) {
    			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
    				{ version: "1.1" },
    				{ id: "miteb-regular" },
    				{ xmlns: "http://www.w3.org/2000/svg" },
    				{
    					"xmlns:xlink": "http://www.w3.org/1999/xlink"
    				},
    				{ x: "0" },
    				{ y: "0" },
    				{ viewBox: "0 0 512 512" },
    				{ "xml:space": "preserve" },
    				dirty & /*$$props*/ 1 && /*$$props*/ ctx[0]
    			]));
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(svg);
    		}
    	};
    }

    function instance$U($$self, $$props, $$invalidate) {
    	$$self.$$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class MitebRegular extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$U, create_fragment$U, safe_not_equal, {});
    	}
    }

    /* src/_components/icon/svgs/miteb-solid.svg generated by Svelte v3.38.1 */

    function create_fragment$T(ctx) {
    	let svg;
    	let path;

    	let svg_levels = [
    		{ version: "1.1" },
    		{ id: "miteb-solid" },
    		{ xmlns: "http://www.w3.org/2000/svg" },
    		{
    			"xmlns:xlink": "http://www.w3.org/1999/xlink"
    		},
    		{ x: "0" },
    		{ y: "0" },
    		{ viewBox: "0 0 512 512" },
    		{ "xml:space": "preserve" },
    		/*$$props*/ ctx[0]
    	];

    	let svg_data = {};

    	for (let i = 0; i < svg_levels.length; i += 1) {
    		svg_data = assign(svg_data, svg_levels[i]);
    	}

    	return {
    		c() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			this.h();
    		},
    		l(nodes) {
    			svg = claim_element(
    				nodes,
    				"svg",
    				{
    					version: true,
    					id: true,
    					xmlns: true,
    					"xmlns:xlink": true,
    					x: true,
    					y: true,
    					viewBox: true,
    					"xml:space": true
    				},
    				1
    			);

    			var svg_nodes = children(svg);
    			path = claim_element(svg_nodes, "path", { d: true }, 1);
    			children(path).forEach(detach);
    			svg_nodes.forEach(detach);
    			this.h();
    		},
    		h() {
    			attr(path, "d", "M210.3 26.5H22.5C10 26.5-.1 36.5-.1 48.8v115.4c0 12.3 10.1 22.3 22.6 22.3h187.8c12.5 0 22.6-10 22.6-22.3V48.8c.1-12.3-10.1-22.3-22.6-22.3zM489.4 26.5H301.6c-12.5 0-22.6 10-22.6 22.3v231.1c0 12.3 10.1 22.3 22.6 22.3h187.8c12.5 0 22.6-10 22.6-22.3V48.8c0-12.3-10.1-22.3-22.6-22.3zM210.3 235.3H22.5c-12.5 0-22.6 10-22.6 22.3v205.6c0 12.3 10.1 22.3 22.6 22.3h187.8c12.5 0 22.6-10 22.6-22.3V257.6c.1-12.3-10.1-22.3-22.6-22.3zM489.4 350.1H301.6c-12.5 0-22.6 10-22.6 22.3v90.8c0 12.3 10.1 22.3 22.6 22.3h187.8c12.5 0 22.6-10 22.6-22.3v-90.8c0-12.3-10.1-22.3-22.6-22.3z");
    			set_svg_attributes(svg, svg_data);
    		},
    		m(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, path);
    		},
    		p(ctx, [dirty]) {
    			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
    				{ version: "1.1" },
    				{ id: "miteb-solid" },
    				{ xmlns: "http://www.w3.org/2000/svg" },
    				{
    					"xmlns:xlink": "http://www.w3.org/1999/xlink"
    				},
    				{ x: "0" },
    				{ y: "0" },
    				{ viewBox: "0 0 512 512" },
    				{ "xml:space": "preserve" },
    				dirty & /*$$props*/ 1 && /*$$props*/ ctx[0]
    			]));
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(svg);
    		}
    	};
    }

    function instance$T($$self, $$props, $$invalidate) {
    	$$self.$$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class MitebSolid extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$T, create_fragment$T, safe_not_equal, {});
    	}
    }

    /* src/_components/icon/svgs/newspaper.svg generated by Svelte v3.38.1 */

    function create_fragment$S(ctx) {
    	let svg;
    	let path;

    	let svg_levels = [
    		{ version: "1.1" },
    		{ id: "Layer_1" },
    		{ xmlns: "http://www.w3.org/2000/svg" },
    		{
    			"xmlns:xlink": "http://www.w3.org/1999/xlink"
    		},
    		{ x: "0px" },
    		{ y: "0px" },
    		{ viewBox: "0 0 42 39" },
    		{
    			style: "enable-background:new 0 0 42 39;"
    		},
    		{ "xml:space": "preserve" },
    		/*$$props*/ ctx[0]
    	];

    	let svg_data = {};

    	for (let i = 0; i < svg_levels.length; i += 1) {
    		svg_data = assign(svg_data, svg_levels[i]);
    	}

    	return {
    		c() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			this.h();
    		},
    		l(nodes) {
    			svg = claim_element(
    				nodes,
    				"svg",
    				{
    					version: true,
    					id: true,
    					xmlns: true,
    					"xmlns:xlink": true,
    					x: true,
    					y: true,
    					viewBox: true,
    					style: true,
    					"xml:space": true
    				},
    				1
    			);

    			var svg_nodes = children(svg);
    			path = claim_element(svg_nodes, "path", { d: true }, 1);
    			children(path).forEach(detach);
    			svg_nodes.forEach(detach);
    			this.h();
    		},
    		h() {
    			attr(path, "d", "M35.8,38.5H6.2c-3.5,0-6.2-2.7-6.2-6.2V2.7C0,1.2,1.2,0,2.7,0h26.1c1.6,0,2.7,1.2,2.7,2.7v29.6c0,2.4,1.8,4.2,4.2,4.2\n\ts4.2-1.8,4.2-4.2V6.2c0-0.6,0.4-1,1-1s1,0.4,1,1v26.1C42,35.8,39.3,38.5,35.8,38.5z M2.7,2C2.2,2,2,2.2,2,2.7v29.6\n\tc0,2.4,1.8,4.2,4.2,4.2h25c-1-1.1-1.6-2.6-1.6-4.2V2.7c0-0.5-0.2-0.7-0.7-0.7H2.7z M35.8,33.8c-0.6,0-1-0.4-1-1V6.2c0-0.6,0.4-1,1-1\n\ts1,0.4,1,1v26.5C36.8,33.3,36.3,33.8,35.8,33.8z M25.3,29.8H6.2c-0.6,0-1-0.4-1-1s0.4-1,1-1h19.1c0.6,0,1,0.4,1,1\n\tS25.9,29.8,25.3,29.8z M25.3,24.6H6.2c-0.6,0-1-0.4-1-1s0.4-1,1-1h19.1c0.6,0,1,0.4,1,1S25.9,24.6,25.3,24.6z M25.3,19.4h-4.9\n\tc-0.6,0-1-0.4-1-1s0.4-1,1-1h4.9c0.6,0,1,0.4,1,1S25.9,19.4,25.3,19.4z M15.8,19.4H7.1c-1.1,0-1.9-0.8-1.9-1.9V8.8\n\tC5.2,7.8,6,7,7.1,7h8.7c1.1,0,1.9,0.8,1.9,1.9v8.7C17.7,18.6,16.8,19.4,15.8,19.4z M7.2,17.4l8.4,0V9L7.2,9L7.2,17.4z M25.3,14.2\n\th-4.9c-0.6,0-1-0.4-1-1s0.4-1,1-1h4.9c0.6,0,1,0.4,1,1S25.9,14.2,25.3,14.2z M25.3,9h-4.9c-0.6,0-1-0.4-1-1s0.4-1,1-1h4.9\n\tc0.6,0,1,0.4,1,1S25.9,9,25.3,9z");
    			set_svg_attributes(svg, svg_data);
    		},
    		m(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, path);
    		},
    		p(ctx, [dirty]) {
    			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
    				{ version: "1.1" },
    				{ id: "Layer_1" },
    				{ xmlns: "http://www.w3.org/2000/svg" },
    				{
    					"xmlns:xlink": "http://www.w3.org/1999/xlink"
    				},
    				{ x: "0px" },
    				{ y: "0px" },
    				{ viewBox: "0 0 42 39" },
    				{
    					style: "enable-background:new 0 0 42 39;"
    				},
    				{ "xml:space": "preserve" },
    				dirty & /*$$props*/ 1 && /*$$props*/ ctx[0]
    			]));
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(svg);
    		}
    	};
    }

    function instance$S($$self, $$props, $$invalidate) {
    	$$self.$$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class Newspaper extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$S, create_fragment$S, safe_not_equal, {});
    	}
    }

    /* src/_components/icon/svgs/play.svg generated by Svelte v3.38.1 */

    function create_fragment$R(ctx) {
    	let svg;
    	let path;

    	let svg_levels = [
    		{ "aria-hidden": "true" },
    		{ focusable: "false" },
    		{ "data-prefix": "fal" },
    		{ "data-icon": "play-circle" },
    		{
    			class: "svg-inline--fa fa-play-circle fa-w-16"
    		},
    		{ role: "img" },
    		{ xmlns: "http://www.w3.org/2000/svg" },
    		{ viewBox: "0 0 512 512" },
    		/*$$props*/ ctx[0]
    	];

    	let svg_data = {};

    	for (let i = 0; i < svg_levels.length; i += 1) {
    		svg_data = assign(svg_data, svg_levels[i]);
    	}

    	return {
    		c() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			this.h();
    		},
    		l(nodes) {
    			svg = claim_element(
    				nodes,
    				"svg",
    				{
    					"aria-hidden": true,
    					focusable: true,
    					"data-prefix": true,
    					"data-icon": true,
    					class: true,
    					role: true,
    					xmlns: true,
    					viewBox: true
    				},
    				1
    			);

    			var svg_nodes = children(svg);
    			path = claim_element(svg_nodes, "path", { d: true }, 1);
    			children(path).forEach(detach);
    			svg_nodes.forEach(detach);
    			this.h();
    		},
    		h() {
    			attr(path, "d", "M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zM40 256c0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216zm331.7-18l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM192 335.8V176.9c0-4.7 5.1-7.6 9.1-5.1l134.5 81.7c3.9 2.4 3.8 8.1-.1 10.3L201 341c-4 2.3-9-.6-9-5.2z");
    			set_svg_attributes(svg, svg_data);
    		},
    		m(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, path);
    		},
    		p(ctx, [dirty]) {
    			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
    				{ "aria-hidden": "true" },
    				{ focusable: "false" },
    				{ "data-prefix": "fal" },
    				{ "data-icon": "play-circle" },
    				{
    					class: "svg-inline--fa fa-play-circle fa-w-16"
    				},
    				{ role: "img" },
    				{ xmlns: "http://www.w3.org/2000/svg" },
    				{ viewBox: "0 0 512 512" },
    				dirty & /*$$props*/ 1 && /*$$props*/ ctx[0]
    			]));
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(svg);
    		}
    	};
    }

    function instance$R($$self, $$props, $$invalidate) {
    	$$self.$$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class Play extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$R, create_fragment$R, safe_not_equal, {});
    	}
    }

    /* src/_components/icon/svgs/smartphone.svg generated by Svelte v3.38.1 */

    function create_fragment$Q(ctx) {
    	let svg;
    	let path;

    	let svg_levels = [
    		{ xmlns: "http://www.w3.org/2000/svg" },
    		{ viewBox: "0 0 320 512" },
    		/*$$props*/ ctx[0]
    	];

    	let svg_data = {};

    	for (let i = 0; i < svg_levels.length; i += 1) {
    		svg_data = assign(svg_data, svg_levels[i]);
    	}

    	return {
    		c() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			this.h();
    		},
    		l(nodes) {
    			svg = claim_element(nodes, "svg", { xmlns: true, viewBox: true }, 1);
    			var svg_nodes = children(svg);
    			path = claim_element(svg_nodes, "path", { d: true }, 1);
    			children(path).forEach(detach);
    			svg_nodes.forEach(detach);
    			this.h();
    		},
    		h() {
    			attr(path, "d", "M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z");
    			set_svg_attributes(svg, svg_data);
    		},
    		m(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, path);
    		},
    		p(ctx, [dirty]) {
    			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
    				{ xmlns: "http://www.w3.org/2000/svg" },
    				{ viewBox: "0 0 320 512" },
    				dirty & /*$$props*/ 1 && /*$$props*/ ctx[0]
    			]));
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(svg);
    		}
    	};
    }

    function instance$Q($$self, $$props, $$invalidate) {
    	$$self.$$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class Smartphone extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$Q, create_fragment$Q, safe_not_equal, {});
    	}
    }

    /* src/_components/icon/svgs/star-regular.svg generated by Svelte v3.38.1 */

    function create_fragment$P(ctx) {
    	let svg;
    	let path;

    	let svg_levels = [
    		{ "aria-hidden": "true" },
    		{ focusable: "false" },
    		{ "data-prefix": "far" },
    		{ "data-icon": "star" },
    		{ class: "svg-inline--fa fa-star fa-w-18" },
    		{ role: "img" },
    		{ xmlns: "http://www.w3.org/2000/svg" },
    		{ viewBox: "0 0 576 512" },
    		/*$$props*/ ctx[0]
    	];

    	let svg_data = {};

    	for (let i = 0; i < svg_levels.length; i += 1) {
    		svg_data = assign(svg_data, svg_levels[i]);
    	}

    	return {
    		c() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			this.h();
    		},
    		l(nodes) {
    			svg = claim_element(
    				nodes,
    				"svg",
    				{
    					"aria-hidden": true,
    					focusable: true,
    					"data-prefix": true,
    					"data-icon": true,
    					class: true,
    					role: true,
    					xmlns: true,
    					viewBox: true
    				},
    				1
    			);

    			var svg_nodes = children(svg);
    			path = claim_element(svg_nodes, "path", { fill: true, d: true }, 1);
    			children(path).forEach(detach);
    			svg_nodes.forEach(detach);
    			this.h();
    		},
    		h() {
    			attr(path, "fill", "currentColor");
    			attr(path, "d", "M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z");
    			set_svg_attributes(svg, svg_data);
    		},
    		m(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, path);
    		},
    		p(ctx, [dirty]) {
    			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
    				{ "aria-hidden": "true" },
    				{ focusable: "false" },
    				{ "data-prefix": "far" },
    				{ "data-icon": "star" },
    				{ class: "svg-inline--fa fa-star fa-w-18" },
    				{ role: "img" },
    				{ xmlns: "http://www.w3.org/2000/svg" },
    				{ viewBox: "0 0 576 512" },
    				dirty & /*$$props*/ 1 && /*$$props*/ ctx[0]
    			]));
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(svg);
    		}
    	};
    }

    function instance$P($$self, $$props, $$invalidate) {
    	$$self.$$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class StarRegular extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$P, create_fragment$P, safe_not_equal, {});
    	}
    }

    /* src/_components/icon/svgs/tag-regular.svg generated by Svelte v3.38.1 */

    function create_fragment$O(ctx) {
    	let svg;
    	let path;

    	let svg_levels = [
    		{ id: "tag-regular" },
    		{ "aria-hidden": "true" },
    		{ focusable: "false" },
    		{ "data-prefix": "far" },
    		{ "data-icon": "tag" },
    		{ class: "svg-inline--fa fa-tag fa-w-16" },
    		{ role: "img" },
    		{ xmlns: "http://www.w3.org/2000/svg" },
    		{ viewBox: "0 0 512 512" },
    		/*$$props*/ ctx[0]
    	];

    	let svg_data = {};

    	for (let i = 0; i < svg_levels.length; i += 1) {
    		svg_data = assign(svg_data, svg_levels[i]);
    	}

    	return {
    		c() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			this.h();
    		},
    		l(nodes) {
    			svg = claim_element(
    				nodes,
    				"svg",
    				{
    					id: true,
    					"aria-hidden": true,
    					focusable: true,
    					"data-prefix": true,
    					"data-icon": true,
    					class: true,
    					role: true,
    					xmlns: true,
    					viewBox: true
    				},
    				1
    			);

    			var svg_nodes = children(svg);
    			path = claim_element(svg_nodes, "path", { d: true }, 1);
    			children(path).forEach(detach);
    			svg_nodes.forEach(detach);
    			this.h();
    		},
    		h() {
    			attr(path, "d", "M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a47.998 47.998 0 0 0 14.059 33.941l211.882 211.882c18.745 18.745 49.137 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM259.886 463.996L48 252.118V48h204.118L464 259.882 259.886 463.996zM192 144c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48z");
    			set_svg_attributes(svg, svg_data);
    		},
    		m(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, path);
    		},
    		p(ctx, [dirty]) {
    			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
    				{ id: "tag-regular" },
    				{ "aria-hidden": "true" },
    				{ focusable: "false" },
    				{ "data-prefix": "far" },
    				{ "data-icon": "tag" },
    				{ class: "svg-inline--fa fa-tag fa-w-16" },
    				{ role: "img" },
    				{ xmlns: "http://www.w3.org/2000/svg" },
    				{ viewBox: "0 0 512 512" },
    				dirty & /*$$props*/ 1 && /*$$props*/ ctx[0]
    			]));
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(svg);
    		}
    	};
    }

    function instance$O($$self, $$props, $$invalidate) {
    	$$self.$$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class TagRegular extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$O, create_fragment$O, safe_not_equal, {});
    	}
    }

    /* src/_components/icon/svgs/tag-solid.svg generated by Svelte v3.38.1 */

    function create_fragment$N(ctx) {
    	let svg;
    	let path;

    	let svg_levels = [
    		{ id: "tag-solid" },
    		{ "aria-hidden": "true" },
    		{ focusable: "false" },
    		{ "data-prefix": "fas" },
    		{ "data-icon": "tag" },
    		{ class: "svg-inline--fa fa-tag fa-w-16" },
    		{ role: "img" },
    		{ xmlns: "http://www.w3.org/2000/svg" },
    		{ viewBox: "0 0 512 512" },
    		/*$$props*/ ctx[0]
    	];

    	let svg_data = {};

    	for (let i = 0; i < svg_levels.length; i += 1) {
    		svg_data = assign(svg_data, svg_levels[i]);
    	}

    	return {
    		c() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			this.h();
    		},
    		l(nodes) {
    			svg = claim_element(
    				nodes,
    				"svg",
    				{
    					id: true,
    					"aria-hidden": true,
    					focusable: true,
    					"data-prefix": true,
    					"data-icon": true,
    					class: true,
    					role: true,
    					xmlns: true,
    					viewBox: true
    				},
    				1
    			);

    			var svg_nodes = children(svg);
    			path = claim_element(svg_nodes, "path", { d: true }, 1);
    			children(path).forEach(detach);
    			svg_nodes.forEach(detach);
    			this.h();
    		},
    		h() {
    			attr(path, "d", "M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z");
    			set_svg_attributes(svg, svg_data);
    		},
    		m(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, path);
    		},
    		p(ctx, [dirty]) {
    			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
    				{ id: "tag-solid" },
    				{ "aria-hidden": "true" },
    				{ focusable: "false" },
    				{ "data-prefix": "fas" },
    				{ "data-icon": "tag" },
    				{ class: "svg-inline--fa fa-tag fa-w-16" },
    				{ role: "img" },
    				{ xmlns: "http://www.w3.org/2000/svg" },
    				{ viewBox: "0 0 512 512" },
    				dirty & /*$$props*/ 1 && /*$$props*/ ctx[0]
    			]));
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(svg);
    		}
    	};
    }

    function instance$N($$self, $$props, $$invalidate) {
    	$$self.$$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class TagSolid extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$N, create_fragment$N, safe_not_equal, {});
    	}
    }

    /* src/_components/icon/svgs/tags-regular.svg generated by Svelte v3.38.1 */

    function create_fragment$M(ctx) {
    	let svg;
    	let path;

    	let svg_levels = [
    		{ id: "tags-regular" },
    		{ "aria-hidden": "true" },
    		{ focusable: "false" },
    		{ "data-prefix": "far" },
    		{ "data-icon": "tags" },
    		{ class: "svg-inline--fa fa-tags fa-w-20" },
    		{ role: "img" },
    		{ xmlns: "http://www.w3.org/2000/svg" },
    		{ viewBox: "0 0 640 512" },
    		/*$$props*/ ctx[0]
    	];

    	let svg_data = {};

    	for (let i = 0; i < svg_levels.length; i += 1) {
    		svg_data = assign(svg_data, svg_levels[i]);
    	}

    	return {
    		c() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			this.h();
    		},
    		l(nodes) {
    			svg = claim_element(
    				nodes,
    				"svg",
    				{
    					id: true,
    					"aria-hidden": true,
    					focusable: true,
    					"data-prefix": true,
    					"data-icon": true,
    					class: true,
    					role: true,
    					xmlns: true,
    					viewBox: true
    				},
    				1
    			);

    			var svg_nodes = children(svg);
    			path = claim_element(svg_nodes, "path", { d: true }, 1);
    			children(path).forEach(detach);
    			svg_nodes.forEach(detach);
    			this.h();
    		},
    		h() {
    			attr(path, "d", "M625.941 293.823L421.823 497.941c-18.746 18.746-49.138 18.745-67.882 0l-.36-.36L592 259.882 331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882zm-128 0L293.823 497.941C284.451 507.314 272.166 512 259.882 512c-12.284 0-24.569-4.686-33.941-14.059L14.059 286.059A48 48 0 0 1 0 252.118V48C0 21.49 21.49 0 48 0h204.118a47.998 47.998 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882zM464 259.882L252.118 48H48v204.118l211.886 211.878L464 259.882zM144 96c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z");
    			set_svg_attributes(svg, svg_data);
    		},
    		m(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, path);
    		},
    		p(ctx, [dirty]) {
    			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
    				{ id: "tags-regular" },
    				{ "aria-hidden": "true" },
    				{ focusable: "false" },
    				{ "data-prefix": "far" },
    				{ "data-icon": "tags" },
    				{ class: "svg-inline--fa fa-tags fa-w-20" },
    				{ role: "img" },
    				{ xmlns: "http://www.w3.org/2000/svg" },
    				{ viewBox: "0 0 640 512" },
    				dirty & /*$$props*/ 1 && /*$$props*/ ctx[0]
    			]));
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(svg);
    		}
    	};
    }

    function instance$M($$self, $$props, $$invalidate) {
    	$$self.$$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class TagsRegular extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$M, create_fragment$M, safe_not_equal, {});
    	}
    }

    /* src/_components/icon/svgs/tags-solid.svg generated by Svelte v3.38.1 */

    function create_fragment$L(ctx) {
    	let svg;
    	let path;

    	let svg_levels = [
    		{ id: "tags-solid" },
    		{ "aria-hidden": "true" },
    		{ focusable: "false" },
    		{ "data-prefix": "fas" },
    		{ "data-icon": "tags" },
    		{ class: "svg-inline--fa fa-tags fa-w-20" },
    		{ role: "img" },
    		{ xmlns: "http://www.w3.org/2000/svg" },
    		{ viewBox: "0 0 640 512" },
    		/*$$props*/ ctx[0]
    	];

    	let svg_data = {};

    	for (let i = 0; i < svg_levels.length; i += 1) {
    		svg_data = assign(svg_data, svg_levels[i]);
    	}

    	return {
    		c() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			this.h();
    		},
    		l(nodes) {
    			svg = claim_element(
    				nodes,
    				"svg",
    				{
    					id: true,
    					"aria-hidden": true,
    					focusable: true,
    					"data-prefix": true,
    					"data-icon": true,
    					class: true,
    					role: true,
    					xmlns: true,
    					viewBox: true
    				},
    				1
    			);

    			var svg_nodes = children(svg);
    			path = claim_element(svg_nodes, "path", { d: true }, 1);
    			children(path).forEach(detach);
    			svg_nodes.forEach(detach);
    			this.h();
    		},
    		h() {
    			attr(path, "d", "M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z");
    			set_svg_attributes(svg, svg_data);
    		},
    		m(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, path);
    		},
    		p(ctx, [dirty]) {
    			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
    				{ id: "tags-solid" },
    				{ "aria-hidden": "true" },
    				{ focusable: "false" },
    				{ "data-prefix": "fas" },
    				{ "data-icon": "tags" },
    				{ class: "svg-inline--fa fa-tags fa-w-20" },
    				{ role: "img" },
    				{ xmlns: "http://www.w3.org/2000/svg" },
    				{ viewBox: "0 0 640 512" },
    				dirty & /*$$props*/ 1 && /*$$props*/ ctx[0]
    			]));
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(svg);
    		}
    	};
    }

    function instance$L($$self, $$props, $$invalidate) {
    	$$self.$$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class TagsSolid extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$L, create_fragment$L, safe_not_equal, {});
    	}
    }

    /* src/_components/icon/svgs/toggle-off.svg generated by Svelte v3.38.1 */

    function create_fragment$K(ctx) {
    	let svg;
    	let path;

    	let svg_levels = [
    		{ "aria-hidden": "true" },
    		{ focusable: "false" },
    		{ "data-prefix": "far" },
    		{ "data-icon": "toggle-off" },
    		{
    			class: "svg-inline--fa fa-toggle-off fa-w-18"
    		},
    		{ role: "img" },
    		{ xmlns: "http://www.w3.org/2000/svg" },
    		{ viewBox: "0 0 576 512" },
    		/*$$props*/ ctx[0]
    	];

    	let svg_data = {};

    	for (let i = 0; i < svg_levels.length; i += 1) {
    		svg_data = assign(svg_data, svg_levels[i]);
    	}

    	return {
    		c() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			this.h();
    		},
    		l(nodes) {
    			svg = claim_element(
    				nodes,
    				"svg",
    				{
    					"aria-hidden": true,
    					focusable: true,
    					"data-prefix": true,
    					"data-icon": true,
    					class: true,
    					role: true,
    					xmlns: true,
    					viewBox: true
    				},
    				1
    			);

    			var svg_nodes = children(svg);
    			path = claim_element(svg_nodes, "path", { fill: true, d: true }, 1);
    			children(path).forEach(detach);
    			svg_nodes.forEach(detach);
    			this.h();
    		},
    		h() {
    			attr(path, "fill", "currentColor");
    			attr(path, "d", "M384 64H192C85.961 64 0 149.961 0 256s85.961 192 192 192h192c106.039 0 192-85.961 192-192S490.039 64 384 64zM48 256c0-79.583 64.404-144 144-144 79.582 0 144 64.404 144 144 0 79.582-64.404 144-144 144-79.582 0-144-64.404-144-144zm336 144h-65.02c86.704-76.515 86.683-211.504 0-288H384c79.582 0 144 64.404 144 144 0 79.582-64.404 144-144 144z");
    			set_svg_attributes(svg, svg_data);
    		},
    		m(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, path);
    		},
    		p(ctx, [dirty]) {
    			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
    				{ "aria-hidden": "true" },
    				{ focusable: "false" },
    				{ "data-prefix": "far" },
    				{ "data-icon": "toggle-off" },
    				{
    					class: "svg-inline--fa fa-toggle-off fa-w-18"
    				},
    				{ role: "img" },
    				{ xmlns: "http://www.w3.org/2000/svg" },
    				{ viewBox: "0 0 576 512" },
    				dirty & /*$$props*/ 1 && /*$$props*/ ctx[0]
    			]));
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(svg);
    		}
    	};
    }

    function instance$K($$self, $$props, $$invalidate) {
    	$$self.$$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class ToggleOff extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$K, create_fragment$K, safe_not_equal, {});
    	}
    }

    /* src/_components/icon/svgs/toggle-on.svg generated by Svelte v3.38.1 */

    function create_fragment$J(ctx) {
    	let svg;
    	let path;

    	let svg_levels = [
    		{ "aria-hidden": "true" },
    		{ focusable: "false" },
    		{ "data-prefix": "far" },
    		{ "data-icon": "toggle-on" },
    		{
    			class: "svg-inline--fa fa-toggle-on fa-w-18"
    		},
    		{ role: "img" },
    		{ xmlns: "http://www.w3.org/2000/svg" },
    		{ viewBox: "0 0 576 512" },
    		/*$$props*/ ctx[0]
    	];

    	let svg_data = {};

    	for (let i = 0; i < svg_levels.length; i += 1) {
    		svg_data = assign(svg_data, svg_levels[i]);
    	}

    	return {
    		c() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			this.h();
    		},
    		l(nodes) {
    			svg = claim_element(
    				nodes,
    				"svg",
    				{
    					"aria-hidden": true,
    					focusable: true,
    					"data-prefix": true,
    					"data-icon": true,
    					class: true,
    					role: true,
    					xmlns: true,
    					viewBox: true
    				},
    				1
    			);

    			var svg_nodes = children(svg);
    			path = claim_element(svg_nodes, "path", { fill: true, d: true }, 1);
    			children(path).forEach(detach);
    			svg_nodes.forEach(detach);
    			this.h();
    		},
    		h() {
    			attr(path, "fill", "currentColor");
    			attr(path, "d", "M384 64H192C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192S490 64 384 64zm0 336c-79.6 0-144-64.4-144-144s64.4-144 144-144 144 64.4 144 144-64.4 144-144 144z");
    			set_svg_attributes(svg, svg_data);
    		},
    		m(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, path);
    		},
    		p(ctx, [dirty]) {
    			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
    				{ "aria-hidden": "true" },
    				{ focusable: "false" },
    				{ "data-prefix": "far" },
    				{ "data-icon": "toggle-on" },
    				{
    					class: "svg-inline--fa fa-toggle-on fa-w-18"
    				},
    				{ role: "img" },
    				{ xmlns: "http://www.w3.org/2000/svg" },
    				{ viewBox: "0 0 576 512" },
    				dirty & /*$$props*/ 1 && /*$$props*/ ctx[0]
    			]));
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(svg);
    		}
    	};
    }

    function instance$J($$self, $$props, $$invalidate) {
    	$$self.$$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class ToggleOn extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$J, create_fragment$J, safe_not_equal, {});
    	}
    }

    /* src/_components/icon/svgs/video.svg generated by Svelte v3.38.1 */

    function create_fragment$I(ctx) {
    	let svg;
    	let path;

    	let svg_levels = [
    		{ version: "1.1" },
    		{ id: "Layer_1" },
    		{ xmlns: "http://www.w3.org/2000/svg" },
    		{
    			"xmlns:xlink": "http://www.w3.org/1999/xlink"
    		},
    		{ x: "0px" },
    		{ y: "0px" },
    		{ viewBox: "0 0 51 48" },
    		{
    			style: "enable-background:new 0 0 51 48;"
    		},
    		{ "xml:space": "preserve" },
    		/*$$props*/ ctx[0]
    	];

    	let svg_data = {};

    	for (let i = 0; i < svg_levels.length; i += 1) {
    		svg_data = assign(svg_data, svg_levels[i]);
    	}

    	return {
    		c() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			this.h();
    		},
    		l(nodes) {
    			svg = claim_element(
    				nodes,
    				"svg",
    				{
    					version: true,
    					id: true,
    					xmlns: true,
    					"xmlns:xlink": true,
    					x: true,
    					y: true,
    					viewBox: true,
    					style: true,
    					"xml:space": true
    				},
    				1
    			);

    			var svg_nodes = children(svg);
    			path = claim_element(svg_nodes, "path", { d: true }, 1);
    			children(path).forEach(detach);
    			svg_nodes.forEach(detach);
    			this.h();
    		},
    		h() {
    			attr(path, "d", "M45,47.5H6.1c-3.1,0-5.6-2.5-5.6-5.6V6.1C0.5,3,3,0.5,6.1,0.5H45c3.1,0,5.6,2.5,5.6,5.6v35.8\n\tC50.6,45,48.1,47.5,45,47.5z M6.1,3.5c-1.4,0-2.6,1.2-2.6,2.6v35.8c0,1.4,1.2,2.6,2.6,2.6H45c1.4,0,2.6-1.2,2.6-2.6V6.1\n\tc0-1.4-1.2-2.6-2.6-2.6H6.1z M30.7,43.4c-2.1,0-3.5-1.5-3.5-3.5v-0.5h-19c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5h19v-0.5\n\tc0-2.1,1.5-3.5,3.5-3.5s3.5,1.5,3.5,3.5v0.5H43c0.8,0,1.5,0.7,1.5,1.5s-0.7,1.5-1.5,1.5h-8.7v0.5C34.2,41.9,32.8,43.4,30.7,43.4z\n\t M30.1,37.8v2c0,0.4,0.1,0.5,0.5,0.5s0.5-0.1,0.5-0.5v-4.1c0-0.4-0.1-0.5-0.5-0.5s-0.5,0.1-0.5,0.5V37.8z M20.2,30.3\n\tc-0.5,0-0.9-0.1-1.3-0.4c-0.8-0.5-1.3-1.3-1.3-2.3V13.7c0-1,0.6-1.9,1.4-2.4c0.9-0.5,1.9-0.4,2.6,0.1l12,6.9\n\tc0.8,0.4,1.4,1.3,1.4,2.3c0,1-0.6,1.9-1.4,2.4l-12,6.9c0,0-0.1,0-0.1,0C21.1,30.2,20.6,30.3,20.2,30.3z M20.8,28.7L20.8,28.7\n\tL20.8,28.7z M20.9,27.6C20.9,27.6,20.9,27.6,20.9,27.6C20.9,27.6,20.9,27.6,20.9,27.6z M20.7,14.3V27l11-6.3L20.7,14.3z M32.2,21\n\tC32.2,21,32.2,21,32.2,21L32.2,21z M32.2,20.4C32.2,20.4,32.2,20.4,32.2,20.4L32.2,20.4z M19.8,13.8C19.8,13.8,19.8,13.8,19.8,13.8\n\tC19.8,13.8,19.8,13.8,19.8,13.8z");
    			set_svg_attributes(svg, svg_data);
    		},
    		m(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, path);
    		},
    		p(ctx, [dirty]) {
    			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
    				{ version: "1.1" },
    				{ id: "Layer_1" },
    				{ xmlns: "http://www.w3.org/2000/svg" },
    				{
    					"xmlns:xlink": "http://www.w3.org/1999/xlink"
    				},
    				{ x: "0px" },
    				{ y: "0px" },
    				{ viewBox: "0 0 51 48" },
    				{
    					style: "enable-background:new 0 0 51 48;"
    				},
    				{ "xml:space": "preserve" },
    				dirty & /*$$props*/ 1 && /*$$props*/ ctx[0]
    			]));
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(svg);
    		}
    	};
    }

    function instance$I($$self, $$props, $$invalidate) {
    	$$self.$$set = $$new_props => {
    		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    	};

    	$$props = exclude_internal_props($$props);
    	return [$$props];
    }

    class Video extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$I, create_fragment$I, safe_not_equal, {});
    	}
    }

    var IconSVGS = /*#__PURE__*/Object.freeze({
        __proto__: null,
        angledown: AngleDown,
        angleleft: AngleLeft,
        angleright: AngleRight,
        angleup: AngleUp,
        article: Article,
        check: Check,
        clock: Clock,
        creditcard: Creditcard,
        ebplus_icon: Ebplus_icon,
        ebplus_sort: Ebplus_sort,
        envelope: Envelope,
        figcaptionpin: FigcaptionPin,
        gallery: Gallery,
        headphones: Headphones,
        headset: Headset,
        historyregular: HistoryRegular,
        lockold: LockOld,
        lock: Lock,
        medielogin: Medielogin,
        menubars: MenuBars,
        mitebregular: MitebRegular,
        mitebsolid: MitebSolid,
        newspaper: Newspaper,
        play: Play,
        smartphone: Smartphone,
        starregular: StarRegular,
        tagregular: TagRegular,
        tagsolid: TagSolid,
        tagsregular: TagsRegular,
        tagssolid: TagsSolid,
        toggleoff: ToggleOff,
        toggleon: ToggleOn,
        video: Video
    });

    /* src/_components/icon/Icon.svelte generated by Svelte v3.38.1 */
    const file$G = "src/_components/icon/Icon.svelte";

    // (18:0) {:else}
    function create_else_block$5(ctx) {
    	let i;

    	const block = {
    		c: function create() {
    			i = element("i");
    			attr_dev(i, "class", /*className*/ ctx[1]);
    			attr_dev(i, "aria-hidden", "true");
    			add_location(i, file$G, 18, 2, 624);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, i, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*className*/ 2) {
    				attr_dev(i, "class", /*className*/ ctx[1]);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(i);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$5.name,
    		type: "else",
    		source: "(18:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (16:0) {#if type === 'svg'}
    function create_if_block$b(ctx) {
    	let switch_instance;
    	let switch_instance_anchor;
    	let current;
    	var switch_value = IconSVGS[/*name*/ ctx[2].replace("-", "")];

    	function switch_props(ctx) {
    		return {
    			props: {
    				style: /*style*/ ctx[0],
    				class: /*baseClass*/ ctx[5],
    				"data-flipped": /*flipped*/ ctx[3]
    			},
    			$$inline: true
    		};
    	}

    	if (switch_value) {
    		switch_instance = new switch_value(switch_props(ctx));
    		switch_instance.$on("click", /*click_handler*/ ctx[7]);
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
    			const switch_instance_changes = {};
    			if (dirty & /*style*/ 1) switch_instance_changes.style = /*style*/ ctx[0];
    			if (dirty & /*flipped*/ 8) switch_instance_changes["data-flipped"] = /*flipped*/ ctx[3];

    			if (switch_value !== (switch_value = IconSVGS[/*name*/ ctx[2].replace("-", "")])) {
    				if (switch_instance) {
    					group_outros();
    					const old_component = switch_instance;

    					transition_out(old_component.$$.fragment, 1, 0, () => {
    						destroy_component(old_component, 1);
    					});

    					check_outros();
    				}

    				if (switch_value) {
    					switch_instance = new switch_value(switch_props(ctx));
    					switch_instance.$on("click", /*click_handler*/ ctx[7]);
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
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$b.name,
    		type: "if",
    		source: "(16:0) {#if type === 'svg'}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$H(ctx) {
    	let current_block_type_index;
    	let if_block;
    	let if_block_anchor;
    	let current;
    	const if_block_creators = [create_if_block$b, create_else_block$5];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*type*/ ctx[4] === "svg") return 0;
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
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
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
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$H.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }



    function instance$H($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Icon", slots, []);
    	let { className = undefined } = $$props;
    	let { name } = $$props;
    	let { flipped = false } = $$props;
    	let { type = "svg" } = $$props;
    	let { width = 36 } = $$props;
    	let { style = undefined } = $$props;
    	const defaultStyle = `width: ${width}px; height: ${width}px;`;
    	style = style ? `${defaultStyle} ${style}` : defaultStyle;
    	let baseClass = className ? `icon-svg ${className}` : "icon-svg";
    	const writable_props = ["className", "name", "flipped", "type", "width", "style"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Icon> was created with unknown prop '${key}'`);
    	});

    	function click_handler(event) {
    		bubble($$self, event);
    	}

    	$$self.$$set = $$props => {
    		if ("className" in $$props) $$invalidate(1, className = $$props.className);
    		if ("name" in $$props) $$invalidate(2, name = $$props.name);
    		if ("flipped" in $$props) $$invalidate(3, flipped = $$props.flipped);
    		if ("type" in $$props) $$invalidate(4, type = $$props.type);
    		if ("width" in $$props) $$invalidate(6, width = $$props.width);
    		if ("style" in $$props) $$invalidate(0, style = $$props.style);
    	};

    	$$self.$capture_state = () => ({
    		IconSVGS,
    		className,
    		name,
    		flipped,
    		type,
    		width,
    		style,
    		defaultStyle,
    		baseClass
    	});

    	$$self.$inject_state = $$props => {
    		if ("className" in $$props) $$invalidate(1, className = $$props.className);
    		if ("name" in $$props) $$invalidate(2, name = $$props.name);
    		if ("flipped" in $$props) $$invalidate(3, flipped = $$props.flipped);
    		if ("type" in $$props) $$invalidate(4, type = $$props.type);
    		if ("width" in $$props) $$invalidate(6, width = $$props.width);
    		if ("style" in $$props) $$invalidate(0, style = $$props.style);
    		if ("baseClass" in $$props) $$invalidate(5, baseClass = $$props.baseClass);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [style, className, name, flipped, type, baseClass, width, click_handler];
    }

    class Icon extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$H, create_fragment$H, safe_not_equal, {
    			className: 1,
    			name: 2,
    			flipped: 3,
    			type: 4,
    			width: 6,
    			style: 0
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Icon",
    			options,
    			id: create_fragment$H.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*name*/ ctx[2] === undefined && !("name" in props)) {
    			console.warn("<Icon> was created without expected prop 'name'");
    		}
    	}

    	get className() {
    		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set className(value) {
    		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get name() {
    		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set name(value) {
    		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get flipped() {
    		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set flipped(value) {
    		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get type() {
    		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set type(value) {
    		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get width() {
    		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set width(value) {
    		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get style() {
    		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set style(value) {
    		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/_components/articlecard/ArticleCard.svelte generated by Svelte v3.38.1 */
    const file$F = "src/_components/articlecard/ArticleCard.svelte";

    // (66:4) {#if loading}
    function create_if_block_5(ctx) {
    	let div1;
    	let div0;

    	const block = {
    		c: function create() {
    			div1 = element("div");
    			div0 = element("div");
    			attr_dev(div0, "class", "card-image bg--graa4");
    			attr_dev(div0, "style", /*loadingStyle*/ ctx[13]);
    			add_location(div0, file$F, 67, 8, 2090);
    			attr_dev(div1, "class", "card-media");
    			add_location(div1, file$F, 66, 6, 2057);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div1, anchor);
    			append_dev(div1, div0);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*loadingStyle*/ 8192) {
    				attr_dev(div0, "style", /*loadingStyle*/ ctx[13]);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_5.name,
    		type: "if",
    		source: "(66:4) {#if loading}",
    		ctx
    	});

    	return block;
    }

    // (71:4) {#if media}
    function create_if_block_4(ctx) {
    	let div;
    	let img;
    	let img_src_value;
    	let img_height_value;
    	let img_width_value;

    	const block = {
    		c: function create() {
    			div = element("div");
    			img = element("img");
    			attr_dev(img, "alt", /*title*/ ctx[0]);
    			attr_dev(img, "class", "card-image");
    			if (img.src !== (img_src_value = /*media*/ ctx[5].src)) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "height", img_height_value = /*media*/ ctx[5].height);
    			attr_dev(img, "width", img_width_value = /*media*/ ctx[5].width);
    			add_location(img, file$F, 72, 8, 2226);
    			attr_dev(div, "class", "card-media");
    			add_location(div, file$F, 71, 6, 2193);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, img);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*title*/ 1) {
    				attr_dev(img, "alt", /*title*/ ctx[0]);
    			}

    			if (dirty & /*media*/ 32 && img.src !== (img_src_value = /*media*/ ctx[5].src)) {
    				attr_dev(img, "src", img_src_value);
    			}

    			if (dirty & /*media*/ 32 && img_height_value !== (img_height_value = /*media*/ ctx[5].height)) {
    				attr_dev(img, "height", img_height_value);
    			}

    			if (dirty & /*media*/ 32 && img_width_value !== (img_width_value = /*media*/ ctx[5].width)) {
    				attr_dev(img, "width", img_width_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_4.name,
    		type: "if",
    		source: "(71:4) {#if media}",
    		ctx
    	});

    	return block;
    }

    // (78:8) {#if isPlus}
    function create_if_block_3(ctx) {
    	let icon;
    	let current;

    	icon = new Icon({
    			props: { name: "ebplus_icon", width: "20" },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(icon.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(icon, target, anchor);
    			current = true;
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(icon.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(icon.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(icon, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_3.name,
    		type: "if",
    		source: "(78:8) {#if isPlus}",
    		ctx
    	});

    	return block;
    }

    // (83:8) {#if section || timestamp}
    function create_if_block$a(ctx) {
    	let div;
    	let t;
    	let current;
    	let if_block0 = /*section*/ ctx[6] && create_if_block_2(ctx);
    	let if_block1 = /*timestamp*/ ctx[7] && create_if_block_1$1(ctx);

    	const block = {
    		c: function create() {
    			div = element("div");
    			if (if_block0) if_block0.c();
    			t = space();
    			if (if_block1) if_block1.c();
    			attr_dev(div, "class", "card-meta flex fontsize-xxsmall padding-s--b");
    			add_location(div, file$F, 83, 10, 2613);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			if (if_block0) if_block0.m(div, null);
    			append_dev(div, t);
    			if (if_block1) if_block1.m(div, null);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (/*section*/ ctx[6]) {
    				if (if_block0) {
    					if_block0.p(ctx, dirty);

    					if (dirty & /*section*/ 64) {
    						transition_in(if_block0, 1);
    					}
    				} else {
    					if_block0 = create_if_block_2(ctx);
    					if_block0.c();
    					transition_in(if_block0, 1);
    					if_block0.m(div, t);
    				}
    			} else if (if_block0) {
    				group_outros();

    				transition_out(if_block0, 1, 1, () => {
    					if_block0 = null;
    				});

    				check_outros();
    			}

    			if (/*timestamp*/ ctx[7]) {
    				if (if_block1) {
    					if_block1.p(ctx, dirty);

    					if (dirty & /*timestamp*/ 128) {
    						transition_in(if_block1, 1);
    					}
    				} else {
    					if_block1 = create_if_block_1$1(ctx);
    					if_block1.c();
    					transition_in(if_block1, 1);
    					if_block1.m(div, null);
    				}
    			} else if (if_block1) {
    				group_outros();

    				transition_out(if_block1, 1, 1, () => {
    					if_block1 = null;
    				});

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block0);
    			transition_in(if_block1);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block0);
    			transition_out(if_block1);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			if (if_block0) if_block0.d();
    			if (if_block1) if_block1.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$a.name,
    		type: "if",
    		source: "(83:8) {#if section || timestamp}",
    		ctx
    	});

    	return block;
    }

    // (85:12) {#if section}
    function create_if_block_2(ctx) {
    	let div;
    	let span1;
    	let icon;
    	let t0;
    	let span0;
    	let t1;
    	let current;

    	icon = new Icon({
    			props: {
    				flipped: true,
    				name: "tag-regular",
    				width: "12"
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div = element("div");
    			span1 = element("span");
    			create_component(icon.$$.fragment);
    			t0 = space();
    			span0 = element("span");
    			t1 = text(/*section*/ ctx[6]);
    			attr_dev(span0, "class", "padding-s--l");
    			add_location(span0, file$F, 88, 18, 2888);
    			attr_dev(span1, "class", "flex flex-justify--center");
    			add_location(span1, file$F, 86, 16, 2757);
    			attr_dev(div, "class", "card-meta-item");
    			add_location(div, file$F, 85, 14, 2712);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, span1);
    			mount_component(icon, span1, null);
    			append_dev(span1, t0);
    			append_dev(span1, span0);
    			append_dev(span0, t1);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (!current || dirty & /*section*/ 64) set_data_dev(t1, /*section*/ ctx[6]);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(icon.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(icon.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_component(icon);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2.name,
    		type: "if",
    		source: "(85:12) {#if section}",
    		ctx
    	});

    	return block;
    }

    // (93:12) {#if timestamp}
    function create_if_block_1$1(ctx) {
    	let div;
    	let icon;
    	let t0;
    	let span;
    	let t1_value = parseDate(/*timestamp*/ ctx[7]) + "";
    	let t1;
    	let current;

    	icon = new Icon({
    			props: { name: "clock", width: "12" },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div = element("div");
    			create_component(icon.$$.fragment);
    			t0 = space();
    			span = element("span");
    			t1 = text(t1_value);
    			attr_dev(span, "class", "padding-s--l");
    			add_location(span, file$F, 95, 16, 3131);
    			attr_dev(div, "class", "card-meta-item");
    			add_location(div, file$F, 93, 14, 3037);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			mount_component(icon, div, null);
    			append_dev(div, t0);
    			append_dev(div, span);
    			append_dev(span, t1);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if ((!current || dirty & /*timestamp*/ 128) && t1_value !== (t1_value = parseDate(/*timestamp*/ ctx[7]) + "")) set_data_dev(t1, t1_value);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(icon.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(icon.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_component(icon);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$1.name,
    		type: "if",
    		source: "(93:12) {#if timestamp}",
    		ctx
    	});

    	return block;
    }

    // (54:0) <Card   {href}   className={cssClass}   style={styleProp}   data-breaking={isBreaking}   {intersection}   {intersectionRoot}   {intersectionThreshold}   {intersectionData}   on:click >
    function create_default_slot$d(ctx) {
    	let div3;
    	let t0;
    	let t1;
    	let div2;
    	let div0;
    	let t2;
    	let div1;
    	let t3;
    	let h2;
    	let t4;
    	let h2_class_value;
    	let current;
    	let if_block0 = /*loading*/ ctx[4] && create_if_block_5(ctx);
    	let if_block1 = /*media*/ ctx[5] && create_if_block_4(ctx);
    	let if_block2 = /*isPlus*/ ctx[3] && create_if_block_3(ctx);
    	let if_block3 = (/*section*/ ctx[6] || /*timestamp*/ ctx[7]) && create_if_block$a(ctx);

    	const block = {
    		c: function create() {
    			div3 = element("div");
    			if (if_block0) if_block0.c();
    			t0 = space();
    			if (if_block1) if_block1.c();
    			t1 = space();
    			div2 = element("div");
    			div0 = element("div");
    			if (if_block2) if_block2.c();
    			t2 = space();
    			div1 = element("div");
    			if (if_block3) if_block3.c();
    			t3 = space();
    			h2 = element("h2");
    			t4 = text(/*title*/ ctx[0]);
    			attr_dev(div0, "class", "card-icon flex flex-justify--end");
    			add_location(div0, file$F, 76, 6, 2391);
    			attr_dev(h2, "class", h2_class_value = "card-title " + (/*truncateTitle*/ ctx[8] ? "card-title--truncated" : ""));
    			attr_dev(h2, "style", /*titleStyle*/ ctx[17]);
    			add_location(h2, file$F, 100, 8, 3266);
    			attr_dev(div1, "class", "card-content");
    			add_location(div1, file$F, 81, 6, 2541);
    			attr_dev(div2, "class", "card-content-wrapper");
    			add_location(div2, file$F, 75, 4, 2350);
    			attr_dev(div3, "class", /*innerClass*/ ctx[14]);
    			add_location(div3, file$F, 64, 2, 2008);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div3, anchor);
    			if (if_block0) if_block0.m(div3, null);
    			append_dev(div3, t0);
    			if (if_block1) if_block1.m(div3, null);
    			append_dev(div3, t1);
    			append_dev(div3, div2);
    			append_dev(div2, div0);
    			if (if_block2) if_block2.m(div0, null);
    			append_dev(div2, t2);
    			append_dev(div2, div1);
    			if (if_block3) if_block3.m(div1, null);
    			append_dev(div1, t3);
    			append_dev(div1, h2);
    			append_dev(h2, t4);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (/*loading*/ ctx[4]) {
    				if (if_block0) {
    					if_block0.p(ctx, dirty);
    				} else {
    					if_block0 = create_if_block_5(ctx);
    					if_block0.c();
    					if_block0.m(div3, t0);
    				}
    			} else if (if_block0) {
    				if_block0.d(1);
    				if_block0 = null;
    			}

    			if (/*media*/ ctx[5]) {
    				if (if_block1) {
    					if_block1.p(ctx, dirty);
    				} else {
    					if_block1 = create_if_block_4(ctx);
    					if_block1.c();
    					if_block1.m(div3, t1);
    				}
    			} else if (if_block1) {
    				if_block1.d(1);
    				if_block1 = null;
    			}

    			if (/*isPlus*/ ctx[3]) {
    				if (if_block2) {
    					if (dirty & /*isPlus*/ 8) {
    						transition_in(if_block2, 1);
    					}
    				} else {
    					if_block2 = create_if_block_3(ctx);
    					if_block2.c();
    					transition_in(if_block2, 1);
    					if_block2.m(div0, null);
    				}
    			} else if (if_block2) {
    				group_outros();

    				transition_out(if_block2, 1, 1, () => {
    					if_block2 = null;
    				});

    				check_outros();
    			}

    			if (/*section*/ ctx[6] || /*timestamp*/ ctx[7]) {
    				if (if_block3) {
    					if_block3.p(ctx, dirty);

    					if (dirty & /*section, timestamp*/ 192) {
    						transition_in(if_block3, 1);
    					}
    				} else {
    					if_block3 = create_if_block$a(ctx);
    					if_block3.c();
    					transition_in(if_block3, 1);
    					if_block3.m(div1, t3);
    				}
    			} else if (if_block3) {
    				group_outros();

    				transition_out(if_block3, 1, 1, () => {
    					if_block3 = null;
    				});

    				check_outros();
    			}

    			if (!current || dirty & /*title*/ 1) set_data_dev(t4, /*title*/ ctx[0]);

    			if (!current || dirty & /*truncateTitle*/ 256 && h2_class_value !== (h2_class_value = "card-title " + (/*truncateTitle*/ ctx[8] ? "card-title--truncated" : ""))) {
    				attr_dev(h2, "class", h2_class_value);
    			}

    			if (!current || dirty & /*innerClass*/ 16384) {
    				attr_dev(div3, "class", /*innerClass*/ ctx[14]);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block2);
    			transition_in(if_block3);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block2);
    			transition_out(if_block3);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div3);
    			if (if_block0) if_block0.d();
    			if (if_block1) if_block1.d();
    			if (if_block2) if_block2.d();
    			if (if_block3) if_block3.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$d.name,
    		type: "slot",
    		source: "(54:0) <Card   {href}   className={cssClass}   style={styleProp}   data-breaking={isBreaking}   {intersection}   {intersectionRoot}   {intersectionThreshold}   {intersectionData}   on:click >",
    		ctx
    	});

    	return block;
    }

    function create_fragment$G(ctx) {
    	let card;
    	let current;

    	card = new Card({
    			props: {
    				href: /*href*/ ctx[1],
    				className: /*cssClass*/ ctx[16],
    				style: /*styleProp*/ ctx[15],
    				"data-breaking": /*isBreaking*/ ctx[2],
    				intersection: /*intersection*/ ctx[9],
    				intersectionRoot: /*intersectionRoot*/ ctx[10],
    				intersectionThreshold: /*intersectionThreshold*/ ctx[11],
    				intersectionData: /*intersectionData*/ ctx[12],
    				$$slots: { default: [create_default_slot$d] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	card.$on("click", /*click_handler*/ ctx[24]);

    	const block = {
    		c: function create() {
    			create_component(card.$$.fragment);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			mount_component(card, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const card_changes = {};
    			if (dirty & /*href*/ 2) card_changes.href = /*href*/ ctx[1];
    			if (dirty & /*cssClass*/ 65536) card_changes.className = /*cssClass*/ ctx[16];
    			if (dirty & /*styleProp*/ 32768) card_changes.style = /*styleProp*/ ctx[15];
    			if (dirty & /*isBreaking*/ 4) card_changes["data-breaking"] = /*isBreaking*/ ctx[2];
    			if (dirty & /*intersection*/ 512) card_changes.intersection = /*intersection*/ ctx[9];
    			if (dirty & /*intersectionRoot*/ 1024) card_changes.intersectionRoot = /*intersectionRoot*/ ctx[10];
    			if (dirty & /*intersectionThreshold*/ 2048) card_changes.intersectionThreshold = /*intersectionThreshold*/ ctx[11];
    			if (dirty & /*intersectionData*/ 4096) card_changes.intersectionData = /*intersectionData*/ ctx[12];

    			if (dirty & /*$$scope, innerClass, truncateTitle, title, timestamp, section, isPlus, media, loadingStyle, loading*/ 33579513) {
    				card_changes.$$scope = { dirty, ctx };
    			}

    			card.$set(card_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(card.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(card.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(card, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$G.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$G($$self, $$props, $$invalidate) {
    	let styleProp;
    	let cssClass;
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("ArticleCard", slots, []);
    	
    	let { title } = $$props;
    	let { className = undefined } = $$props;
    	let { colorClass = undefined } = $$props;
    	let { href = undefined } = $$props;
    	let { isBreaking = false } = $$props;
    	let { isPlus = false } = $$props;
    	let { loading = false } = $$props;
    	let { maxLines = undefined } = $$props;
    	let { media = undefined } = $$props;
    	let { section = undefined } = $$props;
    	let { style = "" } = $$props;
    	let { timestamp = undefined } = $$props;
    	let { truncateTitle = false } = $$props;
    	let { type = undefined } = $$props;
    	let { intersection = false } = $$props;
    	let { intersectionRoot = undefined } = $$props;
    	let { intersectionThreshold = 0.5 } = $$props;
    	let { intersectionData = {} } = $$props;
    	let baseClass = `card-mode card-mode--article margin-s`;
    	let loadingStyle = "padding-top: 56.25%; width: 100%;";

    	if (loading) {
    		baseClass = `${baseClass} animation-fogwave`;
    		title = "Loading";

    		switch (type) {
    			case "small-media":
    			case "small-media--reverse":
    				loadingStyle = "width: 200px;height: 115px;";
    				break;
    		}
    	}

    	let innerClass = "card-inner";

    	switch (type) {
    		case "mode":
    			baseClass = `card-mode card-mode--article`;
    			break;
    		case "small-media":
    			innerClass = `${innerClass} card--small-media`;
    			break;
    		case "small-media--reverse":
    			innerClass = `${innerClass} card--small-media card--small-media--reverse`;
    			break;
    	}

    	const titleStyle = maxLines ? `--max-lines: ${maxLines};` : undefined;

    	const writable_props = [
    		"title",
    		"className",
    		"colorClass",
    		"href",
    		"isBreaking",
    		"isPlus",
    		"loading",
    		"maxLines",
    		"media",
    		"section",
    		"style",
    		"timestamp",
    		"truncateTitle",
    		"type",
    		"intersection",
    		"intersectionRoot",
    		"intersectionThreshold",
    		"intersectionData"
    	];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ArticleCard> was created with unknown prop '${key}'`);
    	});

    	function click_handler(event) {
    		bubble($$self, event);
    	}

    	$$self.$$set = $$props => {
    		if ("title" in $$props) $$invalidate(0, title = $$props.title);
    		if ("className" in $$props) $$invalidate(18, className = $$props.className);
    		if ("colorClass" in $$props) $$invalidate(19, colorClass = $$props.colorClass);
    		if ("href" in $$props) $$invalidate(1, href = $$props.href);
    		if ("isBreaking" in $$props) $$invalidate(2, isBreaking = $$props.isBreaking);
    		if ("isPlus" in $$props) $$invalidate(3, isPlus = $$props.isPlus);
    		if ("loading" in $$props) $$invalidate(4, loading = $$props.loading);
    		if ("maxLines" in $$props) $$invalidate(20, maxLines = $$props.maxLines);
    		if ("media" in $$props) $$invalidate(5, media = $$props.media);
    		if ("section" in $$props) $$invalidate(6, section = $$props.section);
    		if ("style" in $$props) $$invalidate(21, style = $$props.style);
    		if ("timestamp" in $$props) $$invalidate(7, timestamp = $$props.timestamp);
    		if ("truncateTitle" in $$props) $$invalidate(8, truncateTitle = $$props.truncateTitle);
    		if ("type" in $$props) $$invalidate(22, type = $$props.type);
    		if ("intersection" in $$props) $$invalidate(9, intersection = $$props.intersection);
    		if ("intersectionRoot" in $$props) $$invalidate(10, intersectionRoot = $$props.intersectionRoot);
    		if ("intersectionThreshold" in $$props) $$invalidate(11, intersectionThreshold = $$props.intersectionThreshold);
    		if ("intersectionData" in $$props) $$invalidate(12, intersectionData = $$props.intersectionData);
    	};

    	$$self.$capture_state = () => ({
    		Background,
    		parseDate,
    		Card,
    		Icon,
    		title,
    		className,
    		colorClass,
    		href,
    		isBreaking,
    		isPlus,
    		loading,
    		maxLines,
    		media,
    		section,
    		style,
    		timestamp,
    		truncateTitle,
    		type,
    		intersection,
    		intersectionRoot,
    		intersectionThreshold,
    		intersectionData,
    		baseClass,
    		loadingStyle,
    		innerClass,
    		titleStyle,
    		styleProp,
    		cssClass
    	});

    	$$self.$inject_state = $$props => {
    		if ("title" in $$props) $$invalidate(0, title = $$props.title);
    		if ("className" in $$props) $$invalidate(18, className = $$props.className);
    		if ("colorClass" in $$props) $$invalidate(19, colorClass = $$props.colorClass);
    		if ("href" in $$props) $$invalidate(1, href = $$props.href);
    		if ("isBreaking" in $$props) $$invalidate(2, isBreaking = $$props.isBreaking);
    		if ("isPlus" in $$props) $$invalidate(3, isPlus = $$props.isPlus);
    		if ("loading" in $$props) $$invalidate(4, loading = $$props.loading);
    		if ("maxLines" in $$props) $$invalidate(20, maxLines = $$props.maxLines);
    		if ("media" in $$props) $$invalidate(5, media = $$props.media);
    		if ("section" in $$props) $$invalidate(6, section = $$props.section);
    		if ("style" in $$props) $$invalidate(21, style = $$props.style);
    		if ("timestamp" in $$props) $$invalidate(7, timestamp = $$props.timestamp);
    		if ("truncateTitle" in $$props) $$invalidate(8, truncateTitle = $$props.truncateTitle);
    		if ("type" in $$props) $$invalidate(22, type = $$props.type);
    		if ("intersection" in $$props) $$invalidate(9, intersection = $$props.intersection);
    		if ("intersectionRoot" in $$props) $$invalidate(10, intersectionRoot = $$props.intersectionRoot);
    		if ("intersectionThreshold" in $$props) $$invalidate(11, intersectionThreshold = $$props.intersectionThreshold);
    		if ("intersectionData" in $$props) $$invalidate(12, intersectionData = $$props.intersectionData);
    		if ("baseClass" in $$props) $$invalidate(23, baseClass = $$props.baseClass);
    		if ("loadingStyle" in $$props) $$invalidate(13, loadingStyle = $$props.loadingStyle);
    		if ("innerClass" in $$props) $$invalidate(14, innerClass = $$props.innerClass);
    		if ("styleProp" in $$props) $$invalidate(15, styleProp = $$props.styleProp);
    		if ("cssClass" in $$props) $$invalidate(16, cssClass = $$props.cssClass);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*style, colorClass*/ 2621440) {
    			$$invalidate(15, styleProp = `${style}; --color--list-hover: var(--color--${colorClass}); --fgcolor--list-hover: var(--fgcolor--${colorClass});`);
    		}

    		if ($$self.$$.dirty & /*className, baseClass*/ 8650752) {
    			$$invalidate(16, cssClass = className ? `${className} ${baseClass}` : baseClass);
    		}
    	};

    	return [
    		title,
    		href,
    		isBreaking,
    		isPlus,
    		loading,
    		media,
    		section,
    		timestamp,
    		truncateTitle,
    		intersection,
    		intersectionRoot,
    		intersectionThreshold,
    		intersectionData,
    		loadingStyle,
    		innerClass,
    		styleProp,
    		cssClass,
    		titleStyle,
    		className,
    		colorClass,
    		maxLines,
    		style,
    		type,
    		baseClass,
    		click_handler
    	];
    }

    class ArticleCard extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$G, create_fragment$G, safe_not_equal, {
    			title: 0,
    			className: 18,
    			colorClass: 19,
    			href: 1,
    			isBreaking: 2,
    			isPlus: 3,
    			loading: 4,
    			maxLines: 20,
    			media: 5,
    			section: 6,
    			style: 21,
    			timestamp: 7,
    			truncateTitle: 8,
    			type: 22,
    			intersection: 9,
    			intersectionRoot: 10,
    			intersectionThreshold: 11,
    			intersectionData: 12
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "ArticleCard",
    			options,
    			id: create_fragment$G.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*title*/ ctx[0] === undefined && !("title" in props)) {
    			console.warn("<ArticleCard> was created without expected prop 'title'");
    		}
    	}

    	get title() {
    		throw new Error("<ArticleCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set title(value) {
    		throw new Error("<ArticleCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get className() {
    		throw new Error("<ArticleCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set className(value) {
    		throw new Error("<ArticleCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get colorClass() {
    		throw new Error("<ArticleCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set colorClass(value) {
    		throw new Error("<ArticleCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get href() {
    		throw new Error("<ArticleCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set href(value) {
    		throw new Error("<ArticleCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get isBreaking() {
    		throw new Error("<ArticleCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set isBreaking(value) {
    		throw new Error("<ArticleCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get isPlus() {
    		throw new Error("<ArticleCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set isPlus(value) {
    		throw new Error("<ArticleCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get loading() {
    		throw new Error("<ArticleCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set loading(value) {
    		throw new Error("<ArticleCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get maxLines() {
    		throw new Error("<ArticleCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set maxLines(value) {
    		throw new Error("<ArticleCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get media() {
    		throw new Error("<ArticleCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set media(value) {
    		throw new Error("<ArticleCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get section() {
    		throw new Error("<ArticleCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set section(value) {
    		throw new Error("<ArticleCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get style() {
    		throw new Error("<ArticleCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set style(value) {
    		throw new Error("<ArticleCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get timestamp() {
    		throw new Error("<ArticleCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set timestamp(value) {
    		throw new Error("<ArticleCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get truncateTitle() {
    		throw new Error("<ArticleCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set truncateTitle(value) {
    		throw new Error("<ArticleCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get type() {
    		throw new Error("<ArticleCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set type(value) {
    		throw new Error("<ArticleCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get intersection() {
    		throw new Error("<ArticleCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set intersection(value) {
    		throw new Error("<ArticleCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get intersectionRoot() {
    		throw new Error("<ArticleCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set intersectionRoot(value) {
    		throw new Error("<ArticleCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get intersectionThreshold() {
    		throw new Error("<ArticleCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set intersectionThreshold(value) {
    		throw new Error("<ArticleCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get intersectionData() {
    		throw new Error("<ArticleCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set intersectionData(value) {
    		throw new Error("<ArticleCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/_components/badge/Badge.svelte generated by Svelte v3.38.1 */

    const file$E = "src/_components/badge/Badge.svelte";

    // (22:0) {:else}
    function create_else_block$4(ctx) {
    	let span;
    	let current;
    	let mounted;
    	let dispose;
    	const default_slot_template = /*#slots*/ ctx[8].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[7], null);

    	const block = {
    		c: function create() {
    			span = element("span");
    			if (default_slot) default_slot.c();
    			attr_dev(span, "class", /*cssClass*/ ctx[3]);
    			attr_dev(span, "style", /*style*/ ctx[1]);
    			attr_dev(span, "data-type", /*type*/ ctx[2]);
    			add_location(span, file$E, 22, 2, 601);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, span, anchor);

    			if (default_slot) {
    				default_slot.m(span, null);
    			}

    			current = true;

    			if (!mounted) {
    				dispose = listen_dev(span, "click", /*click_handler_1*/ ctx[10], false, false, false);
    				mounted = true;
    			}
    		},
    		p: function update(ctx, dirty) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 128)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[7], dirty, null, null);
    				}
    			}

    			if (!current || dirty & /*cssClass*/ 8) {
    				attr_dev(span, "class", /*cssClass*/ ctx[3]);
    			}

    			if (!current || dirty & /*style*/ 2) {
    				attr_dev(span, "style", /*style*/ ctx[1]);
    			}

    			if (!current || dirty & /*type*/ 4) {
    				attr_dev(span, "data-type", /*type*/ ctx[2]);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(span);
    			if (default_slot) default_slot.d(detaching);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$4.name,
    		type: "else",
    		source: "(22:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (18:0) {#if href}
    function create_if_block$9(ctx) {
    	let a;
    	let current;
    	let mounted;
    	let dispose;
    	const default_slot_template = /*#slots*/ ctx[8].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[7], null);

    	const block = {
    		c: function create() {
    			a = element("a");
    			if (default_slot) default_slot.c();
    			attr_dev(a, "href", /*href*/ ctx[0]);
    			attr_dev(a, "class", /*cssClass*/ ctx[3]);
    			attr_dev(a, "style", /*style*/ ctx[1]);
    			attr_dev(a, "data-type", /*type*/ ctx[2]);
    			add_location(a, file$E, 18, 2, 509);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, a, anchor);

    			if (default_slot) {
    				default_slot.m(a, null);
    			}

    			current = true;

    			if (!mounted) {
    				dispose = listen_dev(a, "click", /*click_handler*/ ctx[9], false, false, false);
    				mounted = true;
    			}
    		},
    		p: function update(ctx, dirty) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 128)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[7], dirty, null, null);
    				}
    			}

    			if (!current || dirty & /*href*/ 1) {
    				attr_dev(a, "href", /*href*/ ctx[0]);
    			}

    			if (!current || dirty & /*cssClass*/ 8) {
    				attr_dev(a, "class", /*cssClass*/ ctx[3]);
    			}

    			if (!current || dirty & /*style*/ 2) {
    				attr_dev(a, "style", /*style*/ ctx[1]);
    			}

    			if (!current || dirty & /*type*/ 4) {
    				attr_dev(a, "data-type", /*type*/ ctx[2]);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(a);
    			if (default_slot) default_slot.d(detaching);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$9.name,
    		type: "if",
    		source: "(18:0) {#if href}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$F(ctx) {
    	let current_block_type_index;
    	let if_block;
    	let if_block_anchor;
    	let current;
    	const if_block_creators = [create_if_block$9, create_else_block$4];
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
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
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
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$F.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$F($$self, $$props, $$invalidate) {
    	let cssClass;
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Badge", slots, ['default']);
    	let { className = undefined } = $$props;
    	let { extension = undefined } = $$props;
    	let { href = undefined } = $$props;
    	let { style = undefined } = $$props;
    	let { type = undefined } = $$props;
    	let baseClass = "badge";

    	if (extension) {
    		if (typeof extension === "string") {
    			baseClass = `${baseClass} button--${extension}`;
    		} else if (Array.isArray(extension)) {
    			baseClass = `${baseClass} badge--${extension.join(" badge--")}`;
    		}
    	}

    	const writable_props = ["className", "extension", "href", "style", "type"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Badge> was created with unknown prop '${key}'`);
    	});

    	function click_handler(event) {
    		bubble($$self, event);
    	}

    	function click_handler_1(event) {
    		bubble($$self, event);
    	}

    	$$self.$$set = $$props => {
    		if ("className" in $$props) $$invalidate(4, className = $$props.className);
    		if ("extension" in $$props) $$invalidate(5, extension = $$props.extension);
    		if ("href" in $$props) $$invalidate(0, href = $$props.href);
    		if ("style" in $$props) $$invalidate(1, style = $$props.style);
    		if ("type" in $$props) $$invalidate(2, type = $$props.type);
    		if ("$$scope" in $$props) $$invalidate(7, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		className,
    		extension,
    		href,
    		style,
    		type,
    		baseClass,
    		cssClass
    	});

    	$$self.$inject_state = $$props => {
    		if ("className" in $$props) $$invalidate(4, className = $$props.className);
    		if ("extension" in $$props) $$invalidate(5, extension = $$props.extension);
    		if ("href" in $$props) $$invalidate(0, href = $$props.href);
    		if ("style" in $$props) $$invalidate(1, style = $$props.style);
    		if ("type" in $$props) $$invalidate(2, type = $$props.type);
    		if ("baseClass" in $$props) $$invalidate(6, baseClass = $$props.baseClass);
    		if ("cssClass" in $$props) $$invalidate(3, cssClass = $$props.cssClass);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*baseClass, className*/ 80) {
    			$$invalidate(3, cssClass = `${baseClass} ${className}`);
    		}
    	};

    	return [
    		href,
    		style,
    		type,
    		cssClass,
    		className,
    		extension,
    		baseClass,
    		$$scope,
    		slots,
    		click_handler,
    		click_handler_1
    	];
    }

    class Badge extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$F, create_fragment$F, safe_not_equal, {
    			className: 4,
    			extension: 5,
    			href: 0,
    			style: 1,
    			type: 2
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Badge",
    			options,
    			id: create_fragment$F.name
    		});
    	}

    	get className() {
    		throw new Error("<Badge>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set className(value) {
    		throw new Error("<Badge>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get extension() {
    		throw new Error("<Badge>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set extension(value) {
    		throw new Error("<Badge>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get href() {
    		throw new Error("<Badge>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set href(value) {
    		throw new Error("<Badge>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get style() {
    		throw new Error("<Badge>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set style(value) {
    		throw new Error("<Badge>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get type() {
    		throw new Error("<Badge>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set type(value) {
    		throw new Error("<Badge>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/_components/buttongroup/ButtonGroup.svelte generated by Svelte v3.38.1 */

    const { console: console_1$4 } = globals;
    const file$D = "src/_components/buttongroup/ButtonGroup.svelte";

    function create_fragment$E(ctx) {
    	let div;
    	let current;
    	const default_slot_template = /*#slots*/ ctx[8].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[7], null);

    	const block = {
    		c: function create() {
    			div = element("div");
    			if (default_slot) default_slot.c();
    			attr_dev(div, "class", /*cssClass*/ ctx[0]);
    			set_style(div, "--groupcolor-main", /*colorBackground*/ ctx[1]);
    			set_style(div, "--groupcolor-foreground", /*colorForeground*/ ctx[2]);
    			add_location(div, file$D, 54, 0, 1854);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);

    			if (default_slot) {
    				default_slot.m(div, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 128)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[7], dirty, null, null);
    				}
    			}

    			if (!current || dirty & /*cssClass*/ 1) {
    				attr_dev(div, "class", /*cssClass*/ ctx[0]);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			if (default_slot) default_slot.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$E.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    const BUTTONS$1 = {};

    function instance$E($$self, $$props, $$invalidate) {
    	let cssClass;
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("ButtonGroup", slots, ['default']);
    	const buttons = [];
    	const panels = [];
    	const selectedButton = writable(null);
    	const selectedPanel = writable(null);

    	setContext(BUTTONS$1, {
    		registerTab: button => {
    			buttons.push(button);
    			selectedButton.update(current => current || button);

    			onDestroy(() => {
    				const i = buttons.indexOf(button);
    				buttons.splice(i, 1);

    				selectedButton.update(current => current === button
    				? buttons[i] || buttons[buttons.length - 1]
    				: current);
    			});
    		},
    		registerPanel: panel => {
    			panels.push(panel);
    			selectedPanel.update(current => current || panel);

    			onDestroy(() => {
    				const i = panels.indexOf(panel);
    				panels.splice(i, 1);

    				selectedPanel.update(current => current === panel
    				? panels[i] || panels[panels.length - 1]
    				: current);
    			});
    		},
    		selectButton: button => {
    			const i = buttons.indexOf(button);
    			selectedButton.set(button);
    			selectedPanel.set(panels[i]);
    		},
    		selectedButton,
    		selectedPanel
    	});

    	let { className = undefined } = $$props;
    	let baseClass = `buttongroup`;
    	let { type = undefined } = $$props;

    	if (type) {
    		baseClass = `${baseClass} buttongroup--${type}`;
    	}

    	let { color = undefined } = $$props;

    	if (color) {
    		baseClass = `${baseClass} buttongroup--special`;
    	}

    	const { backgroundColor: colorBackground, color: colorForeground } = Background[color]
    	? Background[color]
    	: Background["Bruger"];

    	console.log(color, colorBackground, colorForeground);
    	const writable_props = ["className", "type", "color"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1$4.warn(`<ButtonGroup> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("className" in $$props) $$invalidate(3, className = $$props.className);
    		if ("type" in $$props) $$invalidate(4, type = $$props.type);
    		if ("color" in $$props) $$invalidate(5, color = $$props.color);
    		if ("$$scope" in $$props) $$invalidate(7, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		BUTTONS: BUTTONS$1,
    		setContext,
    		onDestroy,
    		writable,
    		Background,
    		buttons,
    		panels,
    		selectedButton,
    		selectedPanel,
    		className,
    		baseClass,
    		type,
    		color,
    		colorBackground,
    		colorForeground,
    		cssClass
    	});

    	$$self.$inject_state = $$props => {
    		if ("className" in $$props) $$invalidate(3, className = $$props.className);
    		if ("baseClass" in $$props) $$invalidate(6, baseClass = $$props.baseClass);
    		if ("type" in $$props) $$invalidate(4, type = $$props.type);
    		if ("color" in $$props) $$invalidate(5, color = $$props.color);
    		if ("cssClass" in $$props) $$invalidate(0, cssClass = $$props.cssClass);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*className, baseClass*/ 72) {
    			$$invalidate(0, cssClass = className ? `${className} ${baseClass}` : baseClass);
    		}
    	};

    	return [
    		cssClass,
    		colorBackground,
    		colorForeground,
    		className,
    		type,
    		color,
    		baseClass,
    		$$scope,
    		slots
    	];
    }

    class ButtonGroup extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$E, create_fragment$E, safe_not_equal, { className: 3, type: 4, color: 5 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "ButtonGroup",
    			options,
    			id: create_fragment$E.name
    		});
    	}

    	get className() {
    		throw new Error("<ButtonGroup>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set className(value) {
    		throw new Error("<ButtonGroup>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get type() {
    		throw new Error("<ButtonGroup>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set type(value) {
    		throw new Error("<ButtonGroup>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get color() {
    		throw new Error("<ButtonGroup>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set color(value) {
    		throw new Error("<ButtonGroup>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/_components/button/Button.svelte generated by Svelte v3.38.1 */
    const file$C = "src/_components/button/Button.svelte";

    // (48:0) {:else}
    function create_else_block$3(ctx) {
    	let button_1;
    	let button_1_data_selected_value;
    	let current;
    	let mounted;
    	let dispose;
    	const default_slot_template = /*#slots*/ ctx[14].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[13], null);

    	const block = {
    		c: function create() {
    			button_1 = element("button");
    			if (default_slot) default_slot.c();
    			attr_dev(button_1, "class", /*cssClass*/ ctx[4]);
    			button_1.disabled = /*disabled*/ ctx[0];
    			attr_dev(button_1, "data-selected", button_1_data_selected_value = /*$selectedButton*/ ctx[5] === /*button*/ ctx[6]);
    			add_location(button_1, file$C, 48, 2, 1400);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, button_1, anchor);

    			if (default_slot) {
    				default_slot.m(button_1, null);
    			}

    			/*button_1_binding*/ ctx[18](button_1);
    			current = true;

    			if (!mounted) {
    				dispose = listen_dev(button_1, "click", /*click_handler_1*/ ctx[16], false, false, false);
    				mounted = true;
    			}
    		},
    		p: function update(ctx, dirty) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 8192)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[13], dirty, null, null);
    				}
    			}

    			if (!current || dirty & /*cssClass*/ 16) {
    				attr_dev(button_1, "class", /*cssClass*/ ctx[4]);
    			}

    			if (!current || dirty & /*disabled*/ 1) {
    				prop_dev(button_1, "disabled", /*disabled*/ ctx[0]);
    			}

    			if (!current || dirty & /*$selectedButton*/ 32 && button_1_data_selected_value !== (button_1_data_selected_value = /*$selectedButton*/ ctx[5] === /*button*/ ctx[6])) {
    				attr_dev(button_1, "data-selected", button_1_data_selected_value);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(button_1);
    			if (default_slot) default_slot.d(detaching);
    			/*button_1_binding*/ ctx[18](null);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$3.name,
    		type: "else",
    		source: "(48:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (44:0) {#if href}
    function create_if_block$8(ctx) {
    	let a;
    	let a_data_selected_value;
    	let current;
    	let mounted;
    	let dispose;
    	const default_slot_template = /*#slots*/ ctx[14].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[13], null);

    	const block = {
    		c: function create() {
    			a = element("a");
    			if (default_slot) default_slot.c();
    			attr_dev(a, "href", /*href*/ ctx[1]);
    			attr_dev(a, "class", /*cssClass*/ ctx[4]);
    			attr_dev(a, "disabled", /*disabled*/ ctx[0]);
    			attr_dev(a, "data-selected", a_data_selected_value = /*$selectedButton*/ ctx[5] === /*button*/ ctx[6]);
    			add_location(a, file$C, 44, 2, 1258);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, a, anchor);

    			if (default_slot) {
    				default_slot.m(a, null);
    			}

    			/*a_binding*/ ctx[17](a);
    			current = true;

    			if (!mounted) {
    				dispose = listen_dev(a, "click", /*click_handler*/ ctx[15], false, false, false);
    				mounted = true;
    			}
    		},
    		p: function update(ctx, dirty) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 8192)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[13], dirty, null, null);
    				}
    			}

    			if (!current || dirty & /*href*/ 2) {
    				attr_dev(a, "href", /*href*/ ctx[1]);
    			}

    			if (!current || dirty & /*cssClass*/ 16) {
    				attr_dev(a, "class", /*cssClass*/ ctx[4]);
    			}

    			if (!current || dirty & /*disabled*/ 1) {
    				attr_dev(a, "disabled", /*disabled*/ ctx[0]);
    			}

    			if (!current || dirty & /*$selectedButton*/ 32 && a_data_selected_value !== (a_data_selected_value = /*$selectedButton*/ ctx[5] === /*button*/ ctx[6])) {
    				attr_dev(a, "data-selected", a_data_selected_value);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(a);
    			if (default_slot) default_slot.d(detaching);
    			/*a_binding*/ ctx[17](null);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$8.name,
    		type: "if",
    		source: "(44:0) {#if href}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$D(ctx) {
    	let current_block_type_index;
    	let if_block;
    	let if_block_anchor;
    	let current;
    	const if_block_creators = [create_if_block$8, create_else_block$3];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*href*/ ctx[1]) return 0;
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
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
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
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$D.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$D($$self, $$props, $$invalidate) {
    	let cssClass;

    	let $selectedButton,
    		$$unsubscribe_selectedButton = noop,
    		$$subscribe_selectedButton = () => ($$unsubscribe_selectedButton(), $$unsubscribe_selectedButton = subscribe(selectedButton, $$value => $$invalidate(5, $selectedButton = $$value)), selectedButton);

    	$$self.$$.on_destroy.push(() => $$unsubscribe_selectedButton());
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Button", slots, ['default']);
    	let { className = undefined } = $$props;
    	let { disabled = false } = $$props;
    	let { extension = undefined } = $$props;
    	let { href = undefined } = $$props;
    	let { size = undefined } = $$props;
    	let { type = undefined } = $$props;
    	let baseClass = "button";

    	if (extension) {
    		let extSplit = extension.split(" ");

    		extSplit.forEach(extClass => {
    			$$invalidate(12, baseClass = `${baseClass} button--${extClass}`);
    		});
    	}

    	if (size) {
    		baseClass = `${baseClass} button--${size}`;
    	}

    	if (type) {
    		baseClass = `${baseClass} button--${type}`;
    	}

    	let buttonEl;
    	let { initial = false } = $$props;
    	let registerTab, selectButton, selectedButton;
    	const button = {};
    	const contextButtons = getContext(BUTTONS$1);

    	if (contextButtons) {
    		registerTab = contextButtons.registerTab;
    		selectButton = contextButtons.selectButton;
    		$$subscribe_selectedButton(selectedButton = contextButtons.selectedButton);
    		registerTab(button);

    		if (initial) {
    			selectButton(button);
    		}
    	}

    	onMount(() => {
    		if (typeof selectButton !== "undefined") {
    			buttonEl.addEventListener("click", () => selectButton(button));
    		}
    	});

    	const writable_props = ["className", "disabled", "extension", "href", "size", "type", "initial"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Button> was created with unknown prop '${key}'`);
    	});

    	function click_handler(event) {
    		bubble($$self, event);
    	}

    	function click_handler_1(event) {
    		bubble($$self, event);
    	}

    	function a_binding($$value) {
    		binding_callbacks[$$value ? "unshift" : "push"](() => {
    			buttonEl = $$value;
    			$$invalidate(2, buttonEl);
    		});
    	}

    	function button_1_binding($$value) {
    		binding_callbacks[$$value ? "unshift" : "push"](() => {
    			buttonEl = $$value;
    			$$invalidate(2, buttonEl);
    		});
    	}

    	$$self.$$set = $$props => {
    		if ("className" in $$props) $$invalidate(7, className = $$props.className);
    		if ("disabled" in $$props) $$invalidate(0, disabled = $$props.disabled);
    		if ("extension" in $$props) $$invalidate(8, extension = $$props.extension);
    		if ("href" in $$props) $$invalidate(1, href = $$props.href);
    		if ("size" in $$props) $$invalidate(9, size = $$props.size);
    		if ("type" in $$props) $$invalidate(10, type = $$props.type);
    		if ("initial" in $$props) $$invalidate(11, initial = $$props.initial);
    		if ("$$scope" in $$props) $$invalidate(13, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		className,
    		disabled,
    		extension,
    		href,
    		size,
    		type,
    		baseClass,
    		buttonEl,
    		getContext,
    		onMount,
    		BUTTONS: BUTTONS$1,
    		initial,
    		registerTab,
    		selectButton,
    		selectedButton,
    		button,
    		contextButtons,
    		cssClass,
    		$selectedButton
    	});

    	$$self.$inject_state = $$props => {
    		if ("className" in $$props) $$invalidate(7, className = $$props.className);
    		if ("disabled" in $$props) $$invalidate(0, disabled = $$props.disabled);
    		if ("extension" in $$props) $$invalidate(8, extension = $$props.extension);
    		if ("href" in $$props) $$invalidate(1, href = $$props.href);
    		if ("size" in $$props) $$invalidate(9, size = $$props.size);
    		if ("type" in $$props) $$invalidate(10, type = $$props.type);
    		if ("baseClass" in $$props) $$invalidate(12, baseClass = $$props.baseClass);
    		if ("buttonEl" in $$props) $$invalidate(2, buttonEl = $$props.buttonEl);
    		if ("initial" in $$props) $$invalidate(11, initial = $$props.initial);
    		if ("registerTab" in $$props) registerTab = $$props.registerTab;
    		if ("selectButton" in $$props) selectButton = $$props.selectButton;
    		if ("selectedButton" in $$props) $$subscribe_selectedButton($$invalidate(3, selectedButton = $$props.selectedButton));
    		if ("cssClass" in $$props) $$invalidate(4, cssClass = $$props.cssClass);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*className, baseClass*/ 4224) {
    			$$invalidate(4, cssClass = className ? `${baseClass} ${className}` : baseClass);
    		}
    	};

    	return [
    		disabled,
    		href,
    		buttonEl,
    		selectedButton,
    		cssClass,
    		$selectedButton,
    		button,
    		className,
    		extension,
    		size,
    		type,
    		initial,
    		baseClass,
    		$$scope,
    		slots,
    		click_handler,
    		click_handler_1,
    		a_binding,
    		button_1_binding
    	];
    }

    class Button extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$D, create_fragment$D, safe_not_equal, {
    			className: 7,
    			disabled: 0,
    			extension: 8,
    			href: 1,
    			size: 9,
    			type: 10,
    			initial: 11
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Button",
    			options,
    			id: create_fragment$D.name
    		});
    	}

    	get className() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set className(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get disabled() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set disabled(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get extension() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set extension(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get href() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set href(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get size() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set size(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get type() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set type(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get initial() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set initial(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/_components/form-elements/Checkbox.svelte generated by Svelte v3.38.1 */

    const file$B = "src/_components/form-elements/Checkbox.svelte";

    // (19:4) {:else}
    function create_else_block$2(ctx) {
    	let i0;
    	let t;
    	let i1;

    	const block = {
    		c: function create() {
    			i0 = element("i");
    			t = space();
    			i1 = element("i");
    			attr_dev(i0, "class", "far fa-check-circle form-checkbox-toggle--on");
    			attr_dev(i0, "aria-hidden", "true");
    			add_location(i0, file$B, 19, 6, 667);
    			attr_dev(i1, "class", "far fa-circle form-checkbox-toggle--off");
    			attr_dev(i1, "aria-hidden", "true");
    			add_location(i1, file$B, 20, 6, 751);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, i0, anchor);
    			insert_dev(target, t, anchor);
    			insert_dev(target, i1, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(i0);
    			if (detaching) detach_dev(t);
    			if (detaching) detach_dev(i1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$2.name,
    		type: "else",
    		source: "(19:4) {:else}",
    		ctx
    	});

    	return block;
    }

    // (16:4) {#if inputtype === 'checkbox'}
    function create_if_block$7(ctx) {
    	let i0;
    	let t;
    	let i1;

    	const block = {
    		c: function create() {
    			i0 = element("i");
    			t = space();
    			i1 = element("i");
    			attr_dev(i0, "class", "far fa-check-square form-checkbox-toggle--on");
    			attr_dev(i0, "aria-hidden", "true");
    			add_location(i0, file$B, 16, 6, 492);
    			attr_dev(i1, "class", "far fa-square form-checkbox-toggle--off");
    			attr_dev(i1, "aria-hidden", "true");
    			add_location(i1, file$B, 17, 6, 576);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, i0, anchor);
    			insert_dev(target, t, anchor);
    			insert_dev(target, i1, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(i0);
    			if (detaching) detach_dev(t);
    			if (detaching) detach_dev(i1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$7.name,
    		type: "if",
    		source: "(16:4) {#if inputtype === 'checkbox'}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$C(ctx) {
    	let label_1;
    	let input;
    	let t0;
    	let span;
    	let t1;
    	let t2;

    	function select_block_type(ctx, dirty) {
    		if (/*inputtype*/ ctx[3] === "checkbox") return create_if_block$7;
    		return create_else_block$2;
    	}

    	let current_block_type = select_block_type(ctx);
    	let if_block = current_block_type(ctx);

    	const block = {
    		c: function create() {
    			label_1 = element("label");
    			input = element("input");
    			t0 = space();
    			span = element("span");
    			t1 = text(/*label*/ ctx[2]);
    			t2 = space();
    			if_block.c();
    			attr_dev(input, "type", /*inputtype*/ ctx[3]);
    			attr_dev(input, "class", /*baseClass*/ ctx[5]);
    			attr_dev(input, "name", /*fieldName*/ ctx[0]);
    			attr_dev(input, "group", /*group*/ ctx[1]);
    			input.value = /*value*/ ctx[4];
    			add_location(input, file$B, 12, 2, 333);
    			attr_dev(span, "class", "form-label");
    			add_location(span, file$B, 13, 2, 413);
    			add_location(label_1, file$B, 11, 0, 323);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, label_1, anchor);
    			append_dev(label_1, input);
    			append_dev(label_1, t0);
    			append_dev(label_1, span);
    			append_dev(span, t1);
    			append_dev(span, t2);
    			if_block.m(span, null);
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*inputtype*/ 8) {
    				attr_dev(input, "type", /*inputtype*/ ctx[3]);
    			}

    			if (dirty & /*baseClass*/ 32) {
    				attr_dev(input, "class", /*baseClass*/ ctx[5]);
    			}

    			if (dirty & /*fieldName*/ 1) {
    				attr_dev(input, "name", /*fieldName*/ ctx[0]);
    			}

    			if (dirty & /*group*/ 2) {
    				attr_dev(input, "group", /*group*/ ctx[1]);
    			}

    			if (dirty & /*value*/ 16 && input.value !== /*value*/ ctx[4]) {
    				prop_dev(input, "value", /*value*/ ctx[4]);
    			}

    			if (dirty & /*label*/ 4) set_data_dev(t1, /*label*/ ctx[2]);

    			if (current_block_type !== (current_block_type = select_block_type(ctx))) {
    				if_block.d(1);
    				if_block = current_block_type(ctx);

    				if (if_block) {
    					if_block.c();
    					if_block.m(span, null);
    				}
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(label_1);
    			if_block.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$C.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$C($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Checkbox", slots, []);
    	let { fieldName = undefined } = $$props;
    	let { group = undefined } = $$props;
    	let { label = undefined } = $$props;
    	let { inputtype = "checkbox" } = $$props;
    	let { value } = $$props;
    	let { className = undefined } = $$props;
    	let baseClass = `form-checkbox form-checkbox--icon`;
    	if (className) baseClass = `${className} ${baseClass}`;
    	const writable_props = ["fieldName", "group", "label", "inputtype", "value", "className"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Checkbox> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("fieldName" in $$props) $$invalidate(0, fieldName = $$props.fieldName);
    		if ("group" in $$props) $$invalidate(1, group = $$props.group);
    		if ("label" in $$props) $$invalidate(2, label = $$props.label);
    		if ("inputtype" in $$props) $$invalidate(3, inputtype = $$props.inputtype);
    		if ("value" in $$props) $$invalidate(4, value = $$props.value);
    		if ("className" in $$props) $$invalidate(6, className = $$props.className);
    	};

    	$$self.$capture_state = () => ({
    		fieldName,
    		group,
    		label,
    		inputtype,
    		value,
    		className,
    		baseClass
    	});

    	$$self.$inject_state = $$props => {
    		if ("fieldName" in $$props) $$invalidate(0, fieldName = $$props.fieldName);
    		if ("group" in $$props) $$invalidate(1, group = $$props.group);
    		if ("label" in $$props) $$invalidate(2, label = $$props.label);
    		if ("inputtype" in $$props) $$invalidate(3, inputtype = $$props.inputtype);
    		if ("value" in $$props) $$invalidate(4, value = $$props.value);
    		if ("className" in $$props) $$invalidate(6, className = $$props.className);
    		if ("baseClass" in $$props) $$invalidate(5, baseClass = $$props.baseClass);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [fieldName, group, label, inputtype, value, baseClass, className];
    }

    class Checkbox extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$C, create_fragment$C, safe_not_equal, {
    			fieldName: 0,
    			group: 1,
    			label: 2,
    			inputtype: 3,
    			value: 4,
    			className: 6
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Checkbox",
    			options,
    			id: create_fragment$C.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*value*/ ctx[4] === undefined && !("value" in props)) {
    			console.warn("<Checkbox> was created without expected prop 'value'");
    		}
    	}

    	get fieldName() {
    		throw new Error("<Checkbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set fieldName(value) {
    		throw new Error("<Checkbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get group() {
    		throw new Error("<Checkbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set group(value) {
    		throw new Error("<Checkbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get label() {
    		throw new Error("<Checkbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set label(value) {
    		throw new Error("<Checkbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get inputtype() {
    		throw new Error("<Checkbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set inputtype(value) {
    		throw new Error("<Checkbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get value() {
    		throw new Error("<Checkbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set value(value) {
    		throw new Error("<Checkbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get className() {
    		throw new Error("<Checkbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set className(value) {
    		throw new Error("<Checkbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/_components/form-elements/Select.svelte generated by Svelte v3.38.1 */

    const file$A = "src/_components/form-elements/Select.svelte";

    function create_fragment$B(ctx) {
    	let label_1;
    	let t0;
    	let t1;
    	let select;
    	let current;
    	const default_slot_template = /*#slots*/ ctx[5].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[4], null);

    	const block = {
    		c: function create() {
    			label_1 = element("label");
    			t0 = text(/*label*/ ctx[0]);
    			t1 = space();
    			select = element("select");
    			if (default_slot) default_slot.c();
    			attr_dev(label_1, "class", "form-label");
    			attr_dev(label_1, "for", "select");
    			add_location(label_1, file$A, 8, 0, 239);
    			attr_dev(select, "classname", /*baseClass*/ ctx[1]);
    			attr_dev(select, "id", "select");
    			add_location(select, file$A, 9, 0, 294);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, label_1, anchor);
    			append_dev(label_1, t0);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, select, anchor);

    			if (default_slot) {
    				default_slot.m(select, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (!current || dirty & /*label*/ 1) set_data_dev(t0, /*label*/ ctx[0]);

    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 16)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[4], dirty, null, null);
    				}
    			}

    			if (!current || dirty & /*baseClass*/ 2) {
    				attr_dev(select, "classname", /*baseClass*/ ctx[1]);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(label_1);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(select);
    			if (default_slot) default_slot.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$B.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$B($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Select", slots, ['default']);
    	let { inputtype = "text" } = $$props;
    	let { label = undefined } = $$props;
    	let { className = undefined } = $$props;
    	let baseClass = `form-input form-input--${inputtype}`;
    	if (className) baseClass = `${className} ${baseClass}`;
    	const writable_props = ["inputtype", "label", "className"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Select> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("inputtype" in $$props) $$invalidate(2, inputtype = $$props.inputtype);
    		if ("label" in $$props) $$invalidate(0, label = $$props.label);
    		if ("className" in $$props) $$invalidate(3, className = $$props.className);
    		if ("$$scope" in $$props) $$invalidate(4, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({ inputtype, label, className, baseClass });

    	$$self.$inject_state = $$props => {
    		if ("inputtype" in $$props) $$invalidate(2, inputtype = $$props.inputtype);
    		if ("label" in $$props) $$invalidate(0, label = $$props.label);
    		if ("className" in $$props) $$invalidate(3, className = $$props.className);
    		if ("baseClass" in $$props) $$invalidate(1, baseClass = $$props.baseClass);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [label, baseClass, inputtype, className, $$scope, slots];
    }

    class Select extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$B, create_fragment$B, safe_not_equal, { inputtype: 2, label: 0, className: 3 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Select",
    			options,
    			id: create_fragment$B.name
    		});
    	}

    	get inputtype() {
    		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set inputtype(value) {
    		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get label() {
    		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set label(value) {
    		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get className() {
    		throw new Error("<Select>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set className(value) {
    		throw new Error("<Select>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/_components/form-elements/TextInput.svelte generated by Svelte v3.38.1 */
    const file$z = "src/_components/form-elements/TextInput.svelte";

    // (28:2) {#if label}
    function create_if_block$6(ctx) {
    	let span;
    	let t0;
    	let t1;

    	const block = {
    		c: function create() {
    			span = element("span");
    			t0 = text(/*label*/ ctx[1]);
    			t1 = text(":");
    			attr_dev(span, "class", "hidden");
    			add_location(span, file$z, 28, 4, 954);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, span, anchor);
    			append_dev(span, t0);
    			append_dev(span, t1);
    			/*span_binding*/ ctx[8](span);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*label*/ 2) set_data_dev(t0, /*label*/ ctx[1]);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(span);
    			/*span_binding*/ ctx[8](null);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$6.name,
    		type: "if",
    		source: "(28:2) {#if label}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$A(ctx) {
    	let div;
    	let t;
    	let input;
    	let div_class_value;
    	let mounted;
    	let dispose;
    	let if_block = /*label*/ ctx[1] && create_if_block$6(ctx);

    	const block = {
    		c: function create() {
    			div = element("div");
    			if (if_block) if_block.c();
    			t = space();
    			input = element("input");
    			attr_dev(input, "type", /*inputtype*/ ctx[0]);
    			attr_dev(input, "placeholder", /*label*/ ctx[1]);
    			attr_dev(input, "class", /*baseClass*/ ctx[5]);
    			add_location(input, file$z, 30, 2, 1026);
    			attr_dev(div, "class", div_class_value = `form-input-container flex border-radius padding-m--rl ${/*size*/ ctx[2]}`);
    			add_location(div, file$z, 26, 0, 858);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			if (if_block) if_block.m(div, null);
    			append_dev(div, t);
    			append_dev(div, input);
    			/*input_binding*/ ctx[9](input);

    			if (!mounted) {
    				dispose = listen_dev(input, "focus", /*focus_handler*/ ctx[7], false, false, false);
    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (/*label*/ ctx[1]) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    				} else {
    					if_block = create_if_block$6(ctx);
    					if_block.c();
    					if_block.m(div, t);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}

    			if (dirty & /*inputtype*/ 1) {
    				attr_dev(input, "type", /*inputtype*/ ctx[0]);
    			}

    			if (dirty & /*label*/ 2) {
    				attr_dev(input, "placeholder", /*label*/ ctx[1]);
    			}

    			if (dirty & /*baseClass*/ 32) {
    				attr_dev(input, "class", /*baseClass*/ ctx[5]);
    			}

    			if (dirty & /*size*/ 4 && div_class_value !== (div_class_value = `form-input-container flex border-radius padding-m--rl ${/*size*/ ctx[2]}`)) {
    				attr_dev(div, "class", div_class_value);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			if (if_block) if_block.d();
    			/*input_binding*/ ctx[9](null);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$A.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$A($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("TextInput", slots, []);
    	let { inputtype = "text" } = $$props;
    	let { label = undefined } = $$props;
    	let { className = undefined } = $$props;
    	let { size = "padding-m--tb" } = $$props;
    	let inputEl;
    	let inputLabelEl;
    	let baseClass = `form-input form-input--${inputtype} width-1of1`;
    	if (className) baseClass = `${className} ${baseClass}`;

    	/* focus effect on form elements */
    	onMount(() => {
    		inputEl.addEventListener("focus", () => {
    			inputEl.parentElement.setAttribute("data-focus", "true");
    			const inputLabel = inputEl.previousElementSibling;
    			inputLabel.classList.remove("hidden");
    		});

    		inputEl.addEventListener("focusout", () => {
    			inputEl.parentElement.setAttribute("data-focus", "false");

    			if (inputEl.value.length === 0) {
    				inputLabelEl.classList.add("hidden");
    			}
    		});
    	});

    	const writable_props = ["inputtype", "label", "className", "size"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<TextInput> was created with unknown prop '${key}'`);
    	});

    	function focus_handler(event) {
    		bubble($$self, event);
    	}

    	function span_binding($$value) {
    		binding_callbacks[$$value ? "unshift" : "push"](() => {
    			inputLabelEl = $$value;
    			$$invalidate(4, inputLabelEl);
    		});
    	}

    	function input_binding($$value) {
    		binding_callbacks[$$value ? "unshift" : "push"](() => {
    			inputEl = $$value;
    			$$invalidate(3, inputEl);
    		});
    	}

    	$$self.$$set = $$props => {
    		if ("inputtype" in $$props) $$invalidate(0, inputtype = $$props.inputtype);
    		if ("label" in $$props) $$invalidate(1, label = $$props.label);
    		if ("className" in $$props) $$invalidate(6, className = $$props.className);
    		if ("size" in $$props) $$invalidate(2, size = $$props.size);
    	};

    	$$self.$capture_state = () => ({
    		onMount,
    		inputtype,
    		label,
    		className,
    		size,
    		inputEl,
    		inputLabelEl,
    		baseClass
    	});

    	$$self.$inject_state = $$props => {
    		if ("inputtype" in $$props) $$invalidate(0, inputtype = $$props.inputtype);
    		if ("label" in $$props) $$invalidate(1, label = $$props.label);
    		if ("className" in $$props) $$invalidate(6, className = $$props.className);
    		if ("size" in $$props) $$invalidate(2, size = $$props.size);
    		if ("inputEl" in $$props) $$invalidate(3, inputEl = $$props.inputEl);
    		if ("inputLabelEl" in $$props) $$invalidate(4, inputLabelEl = $$props.inputLabelEl);
    		if ("baseClass" in $$props) $$invalidate(5, baseClass = $$props.baseClass);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		inputtype,
    		label,
    		size,
    		inputEl,
    		inputLabelEl,
    		baseClass,
    		className,
    		focus_handler,
    		span_binding,
    		input_binding
    	];
    }

    class TextInput extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$A, create_fragment$A, safe_not_equal, {
    			inputtype: 0,
    			label: 1,
    			className: 6,
    			size: 2
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "TextInput",
    			options,
    			id: create_fragment$A.name
    		});
    	}

    	get inputtype() {
    		throw new Error("<TextInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set inputtype(value) {
    		throw new Error("<TextInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get label() {
    		throw new Error("<TextInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set label(value) {
    		throw new Error("<TextInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get className() {
    		throw new Error("<TextInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set className(value) {
    		throw new Error("<TextInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get size() {
    		throw new Error("<TextInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set size(value) {
    		throw new Error("<TextInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/_components/form-elements/TextArea.svelte generated by Svelte v3.38.1 */
    const file$y = "src/_components/form-elements/TextArea.svelte";

    // (28:2) {#if label}
    function create_if_block$5(ctx) {
    	let span;
    	let t0;
    	let t1;

    	const block = {
    		c: function create() {
    			span = element("span");
    			t0 = text(/*label*/ ctx[0]);
    			t1 = text(":");
    			attr_dev(span, "class", "hidden");
    			add_location(span, file$y, 28, 4, 997);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, span, anchor);
    			append_dev(span, t0);
    			append_dev(span, t1);
    			/*span_binding*/ ctx[8](span);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*label*/ 1) set_data_dev(t0, /*label*/ ctx[0]);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(span);
    			/*span_binding*/ ctx[8](null);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$5.name,
    		type: "if",
    		source: "(28:2) {#if label}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$z(ctx) {
    	let div;
    	let t;
    	let textarea;
    	let div_class_value;
    	let mounted;
    	let dispose;
    	let if_block = /*label*/ ctx[0] && create_if_block$5(ctx);

    	const block = {
    		c: function create() {
    			div = element("div");
    			if (if_block) if_block.c();
    			t = space();
    			textarea = element("textarea");
    			attr_dev(textarea, "class", /*baseClass*/ ctx[4]);
    			attr_dev(textarea, "placeholder", /*label*/ ctx[0]);
    			add_location(textarea, file$y, 30, 2, 1072);
    			attr_dev(div, "class", div_class_value = `form-input-container flex flex-column border-radius padding-m--rl ${/*size*/ ctx[1]}`);
    			add_location(div, file$y, 26, 0, 889);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			if (if_block) if_block.m(div, null);
    			append_dev(div, t);
    			append_dev(div, textarea);
    			/*textarea_binding*/ ctx[9](textarea);

    			if (!mounted) {
    				dispose = listen_dev(textarea, "focus", /*focus_handler*/ ctx[7], false, false, false);
    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (/*label*/ ctx[0]) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    				} else {
    					if_block = create_if_block$5(ctx);
    					if_block.c();
    					if_block.m(div, t);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}

    			if (dirty & /*baseClass*/ 16) {
    				attr_dev(textarea, "class", /*baseClass*/ ctx[4]);
    			}

    			if (dirty & /*label*/ 1) {
    				attr_dev(textarea, "placeholder", /*label*/ ctx[0]);
    			}

    			if (dirty & /*size*/ 2 && div_class_value !== (div_class_value = `form-input-container flex flex-column border-radius padding-m--rl ${/*size*/ ctx[1]}`)) {
    				attr_dev(div, "class", div_class_value);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			if (if_block) if_block.d();
    			/*textarea_binding*/ ctx[9](null);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$z.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$z($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("TextArea", slots, []);
    	let { inputtype = "textarea" } = $$props;
    	let { label = undefined } = $$props;
    	let { className = undefined } = $$props;
    	let { size = "padding-m--tb" } = $$props;
    	let textareaEl;
    	let textareaLabelEl;
    	let baseClass = `form-input form-input--${inputtype} width-1of1`;
    	if (className) baseClass = `${className} ${baseClass}`;

    	/* focus effect on form elements */
    	onMount(() => {
    		textareaEl.addEventListener("focus", () => {
    			textareaEl.parentElement.setAttribute("data-focus", "true");
    			const inputLabel = textareaEl.previousElementSibling;
    			inputLabel.classList.remove("hidden");
    		});

    		textareaEl.addEventListener("focusout", () => {
    			textareaEl.parentElement.setAttribute("data-focus", "false");

    			if (textareaEl.value.length === 0) {
    				textareaLabelEl.classList.add("hidden");
    			}
    		});
    	});

    	const writable_props = ["inputtype", "label", "className", "size"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<TextArea> was created with unknown prop '${key}'`);
    	});

    	function focus_handler(event) {
    		bubble($$self, event);
    	}

    	function span_binding($$value) {
    		binding_callbacks[$$value ? "unshift" : "push"](() => {
    			textareaLabelEl = $$value;
    			$$invalidate(3, textareaLabelEl);
    		});
    	}

    	function textarea_binding($$value) {
    		binding_callbacks[$$value ? "unshift" : "push"](() => {
    			textareaEl = $$value;
    			$$invalidate(2, textareaEl);
    		});
    	}

    	$$self.$$set = $$props => {
    		if ("inputtype" in $$props) $$invalidate(5, inputtype = $$props.inputtype);
    		if ("label" in $$props) $$invalidate(0, label = $$props.label);
    		if ("className" in $$props) $$invalidate(6, className = $$props.className);
    		if ("size" in $$props) $$invalidate(1, size = $$props.size);
    	};

    	$$self.$capture_state = () => ({
    		onMount,
    		inputtype,
    		label,
    		className,
    		size,
    		textareaEl,
    		textareaLabelEl,
    		baseClass
    	});

    	$$self.$inject_state = $$props => {
    		if ("inputtype" in $$props) $$invalidate(5, inputtype = $$props.inputtype);
    		if ("label" in $$props) $$invalidate(0, label = $$props.label);
    		if ("className" in $$props) $$invalidate(6, className = $$props.className);
    		if ("size" in $$props) $$invalidate(1, size = $$props.size);
    		if ("textareaEl" in $$props) $$invalidate(2, textareaEl = $$props.textareaEl);
    		if ("textareaLabelEl" in $$props) $$invalidate(3, textareaLabelEl = $$props.textareaLabelEl);
    		if ("baseClass" in $$props) $$invalidate(4, baseClass = $$props.baseClass);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		label,
    		size,
    		textareaEl,
    		textareaLabelEl,
    		baseClass,
    		inputtype,
    		className,
    		focus_handler,
    		span_binding,
    		textarea_binding
    	];
    }

    class TextArea extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$z, create_fragment$z, safe_not_equal, {
    			inputtype: 5,
    			label: 0,
    			className: 6,
    			size: 1
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "TextArea",
    			options,
    			id: create_fragment$z.name
    		});
    	}

    	get inputtype() {
    		throw new Error("<TextArea>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set inputtype(value) {
    		throw new Error("<TextArea>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get label() {
    		throw new Error("<TextArea>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set label(value) {
    		throw new Error("<TextArea>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get className() {
    		throw new Error("<TextArea>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set className(value) {
    		throw new Error("<TextArea>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get size() {
    		throw new Error("<TextArea>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set size(value) {
    		throw new Error("<TextArea>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/_components/form-elements/FormElement.svelte generated by Svelte v3.38.1 */
    const file$x = "src/_components/form-elements/FormElement.svelte";

    // (42:2) <svelte:component this={component} class={className} {size} {label} {inputtype} {group} {value} name={fieldName}>
    function create_default_slot$c(ctx) {
    	let current;
    	const default_slot_template = /*#slots*/ ctx[8].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[9], null);

    	const block = {
    		c: function create() {
    			if (default_slot) default_slot.c();
    		},
    		m: function mount(target, anchor) {
    			if (default_slot) {
    				default_slot.m(target, anchor);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 512)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[9], dirty, null, null);
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (default_slot) default_slot.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$c.name,
    		type: "slot",
    		source: "(42:2) <svelte:component this={component} class={className} {size} {label} {inputtype} {group} {value} name={fieldName}>",
    		ctx
    	});

    	return block;
    }

    function create_fragment$y(ctx) {
    	let div;
    	let switch_instance;
    	let current;
    	var switch_value = /*component*/ ctx[7];

    	function switch_props(ctx) {
    		return {
    			props: {
    				class: /*className*/ ctx[1],
    				size: /*size*/ ctx[0],
    				label: /*label*/ ctx[5],
    				inputtype: /*inputtype*/ ctx[4],
    				group: /*group*/ ctx[3],
    				value: /*value*/ ctx[6],
    				name: /*fieldName*/ ctx[2],
    				$$slots: { default: [create_default_slot$c] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		};
    	}

    	if (switch_value) {
    		switch_instance = new switch_value(switch_props(ctx));
    	}

    	const block = {
    		c: function create() {
    			div = element("div");
    			if (switch_instance) create_component(switch_instance.$$.fragment);
    			attr_dev(div, "class", "form-element margin-l--b");
    			add_location(div, file$x, 40, 0, 900);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);

    			if (switch_instance) {
    				mount_component(switch_instance, div, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const switch_instance_changes = {};
    			if (dirty & /*className*/ 2) switch_instance_changes.class = /*className*/ ctx[1];
    			if (dirty & /*size*/ 1) switch_instance_changes.size = /*size*/ ctx[0];
    			if (dirty & /*label*/ 32) switch_instance_changes.label = /*label*/ ctx[5];
    			if (dirty & /*inputtype*/ 16) switch_instance_changes.inputtype = /*inputtype*/ ctx[4];
    			if (dirty & /*group*/ 8) switch_instance_changes.group = /*group*/ ctx[3];
    			if (dirty & /*value*/ 64) switch_instance_changes.value = /*value*/ ctx[6];
    			if (dirty & /*fieldName*/ 4) switch_instance_changes.name = /*fieldName*/ ctx[2];

    			if (dirty & /*$$scope*/ 512) {
    				switch_instance_changes.$$scope = { dirty, ctx };
    			}

    			if (switch_value !== (switch_value = /*component*/ ctx[7])) {
    				if (switch_instance) {
    					group_outros();
    					const old_component = switch_instance;

    					transition_out(old_component.$$.fragment, 1, 0, () => {
    						destroy_component(old_component, 1);
    					});

    					check_outros();
    				}

    				if (switch_value) {
    					switch_instance = new switch_value(switch_props(ctx));
    					create_component(switch_instance.$$.fragment);
    					transition_in(switch_instance.$$.fragment, 1);
    					mount_component(switch_instance, div, null);
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
    			if (detaching) detach_dev(div);
    			if (switch_instance) destroy_component(switch_instance);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$y.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$y($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("FormElement", slots, ['default']);
    	let { className = undefined } = $$props;
    	let { fieldName = undefined } = $$props;
    	let { group = undefined } = $$props;
    	let { inputtype = "text" } = $$props;
    	let { label = undefined } = $$props;
    	let { value } = $$props;
    	let { size = "medium" } = $$props;
    	let component = TextInput;

    	switch (inputtype) {
    		case "select":
    			component = Select;
    			break;
    		case "checkbox":
    		case "radio":
    			component = Checkbox;
    			break;
    		case "textarea":
    			component = TextArea;
    			break;
    	}

    	switch (size) {
    		case "small":
    			{
    				size = "padding-s--tb";
    				break;
    			}
    		case "medium":
    			{
    				size = "padding-m--tb";
    				break;
    			}
    		case "large":
    			{
    				size = "padding-l--tb";
    				break;
    			}
    	}

    	const writable_props = ["className", "fieldName", "group", "inputtype", "label", "value", "size"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<FormElement> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("className" in $$props) $$invalidate(1, className = $$props.className);
    		if ("fieldName" in $$props) $$invalidate(2, fieldName = $$props.fieldName);
    		if ("group" in $$props) $$invalidate(3, group = $$props.group);
    		if ("inputtype" in $$props) $$invalidate(4, inputtype = $$props.inputtype);
    		if ("label" in $$props) $$invalidate(5, label = $$props.label);
    		if ("value" in $$props) $$invalidate(6, value = $$props.value);
    		if ("size" in $$props) $$invalidate(0, size = $$props.size);
    		if ("$$scope" in $$props) $$invalidate(9, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		Checkbox,
    		Select,
    		TextInput,
    		TextArea,
    		className,
    		fieldName,
    		group,
    		inputtype,
    		label,
    		value,
    		size,
    		component
    	});

    	$$self.$inject_state = $$props => {
    		if ("className" in $$props) $$invalidate(1, className = $$props.className);
    		if ("fieldName" in $$props) $$invalidate(2, fieldName = $$props.fieldName);
    		if ("group" in $$props) $$invalidate(3, group = $$props.group);
    		if ("inputtype" in $$props) $$invalidate(4, inputtype = $$props.inputtype);
    		if ("label" in $$props) $$invalidate(5, label = $$props.label);
    		if ("value" in $$props) $$invalidate(6, value = $$props.value);
    		if ("size" in $$props) $$invalidate(0, size = $$props.size);
    		if ("component" in $$props) $$invalidate(7, component = $$props.component);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		size,
    		className,
    		fieldName,
    		group,
    		inputtype,
    		label,
    		value,
    		component,
    		slots,
    		$$scope
    	];
    }

    class FormElement extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$y, create_fragment$y, safe_not_equal, {
    			className: 1,
    			fieldName: 2,
    			group: 3,
    			inputtype: 4,
    			label: 5,
    			value: 6,
    			size: 0
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "FormElement",
    			options,
    			id: create_fragment$y.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*value*/ ctx[6] === undefined && !("value" in props)) {
    			console.warn("<FormElement> was created without expected prop 'value'");
    		}
    	}

    	get className() {
    		throw new Error("<FormElement>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set className(value) {
    		throw new Error("<FormElement>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get fieldName() {
    		throw new Error("<FormElement>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set fieldName(value) {
    		throw new Error("<FormElement>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get group() {
    		throw new Error("<FormElement>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set group(value) {
    		throw new Error("<FormElement>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get inputtype() {
    		throw new Error("<FormElement>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set inputtype(value) {
    		throw new Error("<FormElement>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get label() {
    		throw new Error("<FormElement>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set label(value) {
    		throw new Error("<FormElement>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get value() {
    		throw new Error("<FormElement>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set value(value) {
    		throw new Error("<FormElement>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get size() {
    		throw new Error("<FormElement>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set size(value) {
    		throw new Error("<FormElement>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    function throttle(callback, wait) {
        let inThrottle;
        return function () {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                callback.apply(context, args);
                inThrottle = true;
                setTimeout(() => (inThrottle = false), wait);
            }
        };
    }

    /* src/_components/horizontalScroll/HorizontalScroll.svelte generated by Svelte v3.38.1 */
    const file$w = "src/_components/horizontalScroll/HorizontalScroll.svelte";

    // (104:0) {#if title}
    function create_if_block$4(ctx) {
    	let h1;
    	let t;

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			t = text(/*title*/ ctx[0]);
    			attr_dev(h1, "class", "horizontal-scroll-padding");
    			add_location(h1, file$w, 104, 2, 3081);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			append_dev(h1, t);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*title*/ 1) set_data_dev(t, /*title*/ ctx[0]);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$4.name,
    		type: "if",
    		source: "(104:0) {#if title}",
    		ctx
    	});

    	return block;
    }

    // (108:2) <Button on:click={prevScroll} className="horizontal-scroll-nav button-prev bg--white" extension="icon">
    function create_default_slot_1$9(ctx) {
    	let i;

    	const block = {
    		c: function create() {
    			i = element("i");
    			attr_dev(i, "class", "fa fa-chevron-left");
    			add_location(i, file$w, 108, 4, 3336);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, i, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(i);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1$9.name,
    		type: "slot",
    		source: "(108:2) <Button on:click={prevScroll} className=\\\"horizontal-scroll-nav button-prev bg--white\\\" extension=\\\"icon\\\">",
    		ctx
    	});

    	return block;
    }

    // (111:2) <Button on:click={nextScroll} className="horizontal-scroll-nav button-next bg--white" extension="icon">
    function create_default_slot$b(ctx) {
    	let i;

    	const block = {
    		c: function create() {
    			i = element("i");
    			attr_dev(i, "class", "fa fa-chevron-right");
    			add_location(i, file$w, 111, 4, 3491);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, i, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(i);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$b.name,
    		type: "slot",
    		source: "(111:2) <Button on:click={nextScroll} className=\\\"horizontal-scroll-nav button-next bg--white\\\" extension=\\\"icon\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$x(ctx) {
    	let t0;
    	let div1;
    	let button0;
    	let t1;
    	let button1;
    	let t2;
    	let div0;
    	let current;
    	let if_block = /*title*/ ctx[0] && create_if_block$4(ctx);

    	button0 = new Button({
    			props: {
    				className: "horizontal-scroll-nav button-prev bg--white",
    				extension: "icon",
    				$$slots: { default: [create_default_slot_1$9] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button0.$on("click", /*prevScroll*/ ctx[4]);

    	button1 = new Button({
    			props: {
    				className: "horizontal-scroll-nav button-next bg--white",
    				extension: "icon",
    				$$slots: { default: [create_default_slot$b] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button1.$on("click", /*nextScroll*/ ctx[3]);
    	const default_slot_template = /*#slots*/ ctx[6].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[9], null);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			t0 = space();
    			div1 = element("div");
    			create_component(button0.$$.fragment);
    			t1 = space();
    			create_component(button1.$$.fragment);
    			t2 = space();
    			div0 = element("div");
    			if (default_slot) default_slot.c();
    			attr_dev(div0, "class", "horizontal-scroll-items flex position-relative");
    			attr_dev(div0, "data-horizontallist", "horizontallist");
    			add_location(div0, file$w, 113, 2, 3539);
    			attr_dev(div1, "class", "horizontal-scroll-container position-relative");
    			add_location(div1, file$w, 106, 0, 3138);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, div1, anchor);
    			mount_component(button0, div1, null);
    			append_dev(div1, t1);
    			mount_component(button1, div1, null);
    			append_dev(div1, t2);
    			append_dev(div1, div0);

    			if (default_slot) {
    				default_slot.m(div0, null);
    			}

    			/*div0_binding*/ ctx[7](div0);
    			/*div1_binding*/ ctx[8](div1);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (/*title*/ ctx[0]) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    				} else {
    					if_block = create_if_block$4(ctx);
    					if_block.c();
    					if_block.m(t0.parentNode, t0);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}

    			const button0_changes = {};

    			if (dirty & /*$$scope*/ 512) {
    				button0_changes.$$scope = { dirty, ctx };
    			}

    			button0.$set(button0_changes);
    			const button1_changes = {};

    			if (dirty & /*$$scope*/ 512) {
    				button1_changes.$$scope = { dirty, ctx };
    			}

    			button1.$set(button1_changes);

    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 512)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[9], dirty, null, null);
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(button0.$$.fragment, local);
    			transition_in(button1.$$.fragment, local);
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(button0.$$.fragment, local);
    			transition_out(button1.$$.fragment, local);
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(div1);
    			destroy_component(button0);
    			destroy_component(button1);
    			if (default_slot) default_slot.d(detaching);
    			/*div0_binding*/ ctx[7](null);
    			/*div1_binding*/ ctx[8](null);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$x.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$x($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("HorizontalScroll", slots, ['default']);
    	let { className = undefined } = $$props;
    	let { title = undefined } = $$props;
    	let baseClass = `horizontal-scroll-container position-relative`;
    	if (className) baseClass = `${className} ${baseClass}`;

    	/* Horizontial Scroll elements */
    	let scrollContainer;

    	let scrollItemContainer;
    	let listCurrent = 0;
    	let children;
    	let maxLength;
    	let listLength;

    	function updateDataSet(pos, fromScroll = false) {
    		switch (pos) {
    			case "neutral":
    				$$invalidate(1, scrollContainer.dataset.atstart = "false", scrollContainer);
    				$$invalidate(1, scrollContainer.dataset.atend = "false", scrollContainer);
    				if (fromScroll) listCurrent = 1;
    				break;
    			case "end":
    				$$invalidate(1, scrollContainer.dataset.atstart = "false", scrollContainer);
    				$$invalidate(1, scrollContainer.dataset.atend = "true", scrollContainer);
    				listCurrent = maxLength;
    				break;
    			case "start":
    				$$invalidate(1, scrollContainer.dataset.atstart = "true", scrollContainer);
    				$$invalidate(1, scrollContainer.dataset.atend = "false", scrollContainer);
    				listCurrent = 0;
    				break;
    		}
    	}

    	function updateButtons() {
    		if (listCurrent === 0) {
    			updateDataSet("start");
    		} else if (listCurrent === maxLength) {
    			updateDataSet("end");
    		} else {
    			updateDataSet("neutral");
    		}
    	}

    	function updateButtonsThroughScroll() {
    		const childLeft = children[0].getBoundingClientRect().left;
    		const wrapLeft = scrollItemContainer.getBoundingClientRect().left;
    		const childRight = children[listLength - 1].getBoundingClientRect().right;
    		const wrapRight = scrollItemContainer.getBoundingClientRect().right;

    		if (childLeft - 5 === wrapLeft) {
    			updateDataSet("start", true);
    		} else if (childRight - 10 <= wrapRight) {
    			updateDataSet("end", true);
    		} else {
    			updateDataSet("neutral", true);
    		}
    	}

    	/**
     * Advance scroll to make next or previous element visible
     */
    	function scroll(listCurrent) {
    		const newPos = children[listCurrent];

    		scrollItemContainer.scrollTo({
    			behavior: "smooth",
    			left: newPos.offsetLeft,
    			top: 0
    		});

    		updateButtons();
    	}

    	function nextScroll(_ev) {
    		if (listCurrent !== maxLength) {
    			listCurrent = listCurrent + 1;
    			scroll(listCurrent);
    		}
    	}

    	function prevScroll(_ev) {
    		if (listCurrent !== 0) {
    			listCurrent = listCurrent - 1;
    			scroll(listCurrent);
    		}
    	}

    	afterUpdate(() => {
    		if (children) return;
    		children = scrollItemContainer.children;
    		listLength = children.length;
    		const containerRight = scrollContainer.getBoundingClientRect().right;

    		/**
     * Find how many visible elements we have
     */
    		let visibleChildren = Array.from(children).filter(child => child.getBoundingClientRect().right <= containerRight).length;

    		maxLength = listLength - visibleChildren;

    		scrollItemContainer.addEventListener("wheel", throttle(
    			() => {
    				updateButtonsThroughScroll();
    			},
    			150
    		));

    		updateButtons();
    	});

    	const writable_props = ["className", "title"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<HorizontalScroll> was created with unknown prop '${key}'`);
    	});

    	function div0_binding($$value) {
    		binding_callbacks[$$value ? "unshift" : "push"](() => {
    			scrollItemContainer = $$value;
    			$$invalidate(2, scrollItemContainer);
    		});
    	}

    	function div1_binding($$value) {
    		binding_callbacks[$$value ? "unshift" : "push"](() => {
    			scrollContainer = $$value;
    			$$invalidate(1, scrollContainer);
    		});
    	}

    	$$self.$$set = $$props => {
    		if ("className" in $$props) $$invalidate(5, className = $$props.className);
    		if ("title" in $$props) $$invalidate(0, title = $$props.title);
    		if ("$$scope" in $$props) $$invalidate(9, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		afterUpdate,
    		throttle,
    		Button,
    		className,
    		title,
    		baseClass,
    		scrollContainer,
    		scrollItemContainer,
    		listCurrent,
    		children,
    		maxLength,
    		listLength,
    		updateDataSet,
    		updateButtons,
    		updateButtonsThroughScroll,
    		scroll,
    		nextScroll,
    		prevScroll
    	});

    	$$self.$inject_state = $$props => {
    		if ("className" in $$props) $$invalidate(5, className = $$props.className);
    		if ("title" in $$props) $$invalidate(0, title = $$props.title);
    		if ("baseClass" in $$props) baseClass = $$props.baseClass;
    		if ("scrollContainer" in $$props) $$invalidate(1, scrollContainer = $$props.scrollContainer);
    		if ("scrollItemContainer" in $$props) $$invalidate(2, scrollItemContainer = $$props.scrollItemContainer);
    		if ("listCurrent" in $$props) listCurrent = $$props.listCurrent;
    		if ("children" in $$props) children = $$props.children;
    		if ("maxLength" in $$props) maxLength = $$props.maxLength;
    		if ("listLength" in $$props) listLength = $$props.listLength;
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		title,
    		scrollContainer,
    		scrollItemContainer,
    		nextScroll,
    		prevScroll,
    		className,
    		slots,
    		div0_binding,
    		div1_binding,
    		$$scope
    	];
    }

    class HorizontalScroll extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$x, create_fragment$x, safe_not_equal, { className: 5, title: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "HorizontalScroll",
    			options,
    			id: create_fragment$x.name
    		});
    	}

    	get className() {
    		throw new Error("<HorizontalScroll>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set className(value) {
    		throw new Error("<HorizontalScroll>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get title() {
    		throw new Error("<HorizontalScroll>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set title(value) {
    		throw new Error("<HorizontalScroll>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/_components/pillnavigation/PillNavigation.svelte generated by Svelte v3.38.1 */
    const file$v = "src/_components/pillnavigation/PillNavigation.svelte";

    function create_fragment$w(ctx) {
    	let div;
    	let current;
    	const default_slot_template = /*#slots*/ ctx[3].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], null);

    	const block = {
    		c: function create() {
    			div = element("div");
    			if (default_slot) default_slot.c();
    			attr_dev(div, "class", /*baseClass*/ ctx[0]);
    			add_location(div, file$v, 42, 0, 1392);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);

    			if (default_slot) {
    				default_slot.m(div, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 4)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[2], dirty, null, null);
    				}
    			}

    			if (!current || dirty & /*baseClass*/ 1) {
    				attr_dev(div, "class", /*baseClass*/ ctx[0]);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			if (default_slot) default_slot.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$w.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    const BUTTONS = {};

    function instance$w($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("PillNavigation", slots, ['default']);
    	const buttons = [];
    	const panels = [];
    	const selectedButton = writable(null);
    	const selectedPanel = writable(null);

    	setContext(BUTTONS, {
    		registerTab: button => {
    			buttons.push(button);
    			selectedButton.update(current => current || button);

    			onDestroy(() => {
    				const i = buttons.indexOf(button);
    				buttons.splice(i, 1);

    				selectedButton.update(current => current === button
    				? buttons[i] || buttons[buttons.length - 1]
    				: current);
    			});
    		},
    		registerPanel: panel => {
    			panels.push(panel);
    			selectedPanel.update(current => current || panel);

    			onDestroy(() => {
    				const i = panels.indexOf(panel);
    				panels.splice(i, 1);

    				selectedPanel.update(current => current === panel
    				? panels[i] || panels[panels.length - 1]
    				: current);
    			});
    		},
    		selectButton: button => {
    			const i = buttons.indexOf(button);
    			selectedButton.set(button);
    			selectedPanel.set(panels[i]);
    		},
    		selectedButton,
    		selectedPanel
    	});

    	let { className = undefined } = $$props;
    	let baseClass = `pillcomponent`;
    	if (className) baseClass = `${className} ${baseClass}`;
    	const writable_props = ["className"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<PillNavigation> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("className" in $$props) $$invalidate(1, className = $$props.className);
    		if ("$$scope" in $$props) $$invalidate(2, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		BUTTONS,
    		setContext,
    		onDestroy,
    		writable,
    		buttons,
    		panels,
    		selectedButton,
    		selectedPanel,
    		className,
    		baseClass
    	});

    	$$self.$inject_state = $$props => {
    		if ("className" in $$props) $$invalidate(1, className = $$props.className);
    		if ("baseClass" in $$props) $$invalidate(0, baseClass = $$props.baseClass);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [baseClass, className, $$scope, slots];
    }

    class PillNavigation extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$w, create_fragment$w, safe_not_equal, { className: 1 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "PillNavigation",
    			options,
    			id: create_fragment$w.name
    		});
    	}

    	get className() {
    		throw new Error("<PillNavigation>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set className(value) {
    		throw new Error("<PillNavigation>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/_components/pillnavigation/Pill.svelte generated by Svelte v3.38.1 */
    const file$u = "src/_components/pillnavigation/Pill.svelte";

    function create_fragment$v(ctx) {
    	let button_1;
    	let button_1_data_selected_value;
    	let current;
    	let mounted;
    	let dispose;
    	const default_slot_template = /*#slots*/ ctx[7].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);

    	const block = {
    		c: function create() {
    			button_1 = element("button");
    			if (default_slot) default_slot.c();
    			attr_dev(button_1, "class", /*baseClass*/ ctx[0]);
    			attr_dev(button_1, "data-selected", button_1_data_selected_value = /*$selectedButton*/ ctx[1] === /*button*/ ctx[2]);
    			add_location(button_1, file$u, 11, 0, 352);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, button_1, anchor);

    			if (default_slot) {
    				default_slot.m(button_1, null);
    			}

    			current = true;

    			if (!mounted) {
    				dispose = listen_dev(button_1, "click", /*click_handler*/ ctx[8], false, false, false);
    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 64)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[6], dirty, null, null);
    				}
    			}

    			if (!current || dirty & /*baseClass*/ 1) {
    				attr_dev(button_1, "class", /*baseClass*/ ctx[0]);
    			}

    			if (!current || dirty & /*$selectedButton*/ 2 && button_1_data_selected_value !== (button_1_data_selected_value = /*$selectedButton*/ ctx[1] === /*button*/ ctx[2])) {
    				attr_dev(button_1, "data-selected", button_1_data_selected_value);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(button_1);
    			if (default_slot) default_slot.d(detaching);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$v.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$v($$self, $$props, $$invalidate) {
    	let $selectedButton;
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Pill", slots, ['default']);
    	const button = {};
    	const { registerTab, selectButton, selectedButton } = getContext(BUTTONS);
    	validate_store(selectedButton, "selectedButton");
    	component_subscribe($$self, selectedButton, value => $$invalidate(1, $selectedButton = value));
    	registerTab(button);
    	let { className = undefined } = $$props;
    	let baseClass = `button`;
    	if (className) baseClass = `${className} ${baseClass}`;
    	const writable_props = ["className"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Pill> was created with unknown prop '${key}'`);
    	});

    	const click_handler = () => selectButton(button);

    	$$self.$$set = $$props => {
    		if ("className" in $$props) $$invalidate(5, className = $$props.className);
    		if ("$$scope" in $$props) $$invalidate(6, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		getContext,
    		BUTTONS,
    		button,
    		registerTab,
    		selectButton,
    		selectedButton,
    		className,
    		baseClass,
    		$selectedButton
    	});

    	$$self.$inject_state = $$props => {
    		if ("className" in $$props) $$invalidate(5, className = $$props.className);
    		if ("baseClass" in $$props) $$invalidate(0, baseClass = $$props.baseClass);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		baseClass,
    		$selectedButton,
    		button,
    		selectButton,
    		selectedButton,
    		className,
    		$$scope,
    		slots,
    		click_handler
    	];
    }

    class Pill extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$v, create_fragment$v, safe_not_equal, { className: 5 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Pill",
    			options,
    			id: create_fragment$v.name
    		});
    	}

    	get className() {
    		throw new Error("<Pill>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set className(value) {
    		throw new Error("<Pill>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/_components/pillnavigation/PillContent.svelte generated by Svelte v3.38.1 */

    // (11:0) {#if $selectedPanel === panel}
    function create_if_block$3(ctx) {
    	let current;
    	const default_slot_template = /*#slots*/ ctx[4].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], null);

    	const block = {
    		c: function create() {
    			if (default_slot) default_slot.c();
    		},
    		m: function mount(target, anchor) {
    			if (default_slot) {
    				default_slot.m(target, anchor);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 8)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[3], dirty, null, null);
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (default_slot) default_slot.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$3.name,
    		type: "if",
    		source: "(11:0) {#if $selectedPanel === panel}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$u(ctx) {
    	let if_block_anchor;
    	let current;
    	let if_block = /*$selectedPanel*/ ctx[0] === /*panel*/ ctx[1] && create_if_block$3(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (/*$selectedPanel*/ ctx[0] === /*panel*/ ctx[1]) {
    				if (if_block) {
    					if_block.p(ctx, dirty);

    					if (dirty & /*$selectedPanel*/ 1) {
    						transition_in(if_block, 1);
    					}
    				} else {
    					if_block = create_if_block$3(ctx);
    					if_block.c();
    					transition_in(if_block, 1);
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				group_outros();

    				transition_out(if_block, 1, 1, () => {
    					if_block = null;
    				});

    				check_outros();
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
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$u.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$u($$self, $$props, $$invalidate) {
    	let $selectedPanel;
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("PillContent", slots, ['default']);
    	const panel = {};
    	const { registerPanel, selectedPanel } = getContext(BUTTONS);
    	validate_store(selectedPanel, "selectedPanel");
    	component_subscribe($$self, selectedPanel, value => $$invalidate(0, $selectedPanel = value));
    	registerPanel(panel);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<PillContent> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("$$scope" in $$props) $$invalidate(3, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		getContext,
    		BUTTONS,
    		panel,
    		registerPanel,
    		selectedPanel,
    		$selectedPanel
    	});

    	return [$selectedPanel, panel, selectedPanel, $$scope, slots];
    }

    class PillContent extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$u, create_fragment$u, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "PillContent",
    			options,
    			id: create_fragment$u.name
    		});
    	}
    }

    /* src/_components/pillnavigation/PillList.svelte generated by Svelte v3.38.1 */

    const file$t = "src/_components/pillnavigation/PillList.svelte";

    function create_fragment$t(ctx) {
    	let div;
    	let current;
    	const default_slot_template = /*#slots*/ ctx[3].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], null);

    	const block = {
    		c: function create() {
    			div = element("div");
    			if (default_slot) default_slot.c();
    			attr_dev(div, "class", /*baseClass*/ ctx[0]);
    			add_location(div, file$t, 6, 0, 180);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);

    			if (default_slot) {
    				default_slot.m(div, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 4)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[2], dirty, null, null);
    				}
    			}

    			if (!current || dirty & /*baseClass*/ 1) {
    				attr_dev(div, "class", /*baseClass*/ ctx[0]);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			if (default_slot) default_slot.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$t.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$t($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("PillList", slots, ['default']);
    	let { className = undefined } = $$props;
    	let baseClass = `pillnavigation toggle toggle--buttons`;
    	if (className) baseClass = `${className} ${baseClass}`;
    	const writable_props = ["className"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<PillList> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("className" in $$props) $$invalidate(1, className = $$props.className);
    		if ("$$scope" in $$props) $$invalidate(2, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({ className, baseClass });

    	$$self.$inject_state = $$props => {
    		if ("className" in $$props) $$invalidate(1, className = $$props.className);
    		if ("baseClass" in $$props) $$invalidate(0, baseClass = $$props.baseClass);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [baseClass, className, $$scope, slots];
    }

    class PillList extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$t, create_fragment$t, safe_not_equal, { className: 1 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "PillList",
    			options,
    			id: create_fragment$t.name
    		});
    	}

    	get className() {
    		throw new Error("<PillList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set className(value) {
    		throw new Error("<PillList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/_components/spinner/Spinner.svelte generated by Svelte v3.38.1 */

    const file$s = "src/_components/spinner/Spinner.svelte";

    // (4:0) {#if isLoading}
    function create_if_block$2(ctx) {
    	let div;
    	let i0;
    	let t0;
    	let i1;
    	let t1;
    	let i2;

    	const block = {
    		c: function create() {
    			div = element("div");
    			i0 = element("i");
    			t0 = space();
    			i1 = element("i");
    			t1 = space();
    			i2 = element("i");
    			attr_dev(i0, "class", "fas fa-circle bounce bounce1");
    			add_location(i0, file$s, 5, 4, 120);
    			attr_dev(i1, "class", "fas fa-circle bounce bounce2");
    			add_location(i1, file$s, 6, 4, 167);
    			attr_dev(i2, "class", "fas fa-circle bounce bounce3");
    			add_location(i2, file$s, 7, 4, 214);
    			attr_dev(div, "class", "loader flex flex--center");
    			add_location(div, file$s, 4, 2, 77);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, i0);
    			append_dev(div, t0);
    			append_dev(div, i1);
    			append_dev(div, t1);
    			append_dev(div, i2);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$2.name,
    		type: "if",
    		source: "(4:0) {#if isLoading}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$s(ctx) {
    	let if_block_anchor;
    	let if_block = /*isLoading*/ ctx[0] && create_if_block$2(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    		},
    		p: function update(ctx, [dirty]) {
    			if (/*isLoading*/ ctx[0]) {
    				if (if_block) ; else {
    					if_block = create_if_block$2(ctx);
    					if_block.c();
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$s.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$s($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Spinner", slots, []);
    	let { isLoading = false } = $$props;
    	const writable_props = ["isLoading"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Spinner> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("isLoading" in $$props) $$invalidate(0, isLoading = $$props.isLoading);
    	};

    	$$self.$capture_state = () => ({ isLoading });

    	$$self.$inject_state = $$props => {
    		if ("isLoading" in $$props) $$invalidate(0, isLoading = $$props.isLoading);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [isLoading];
    }

    class Spinner extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$s, create_fragment$s, safe_not_equal, { isLoading: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Spinner",
    			options,
    			id: create_fragment$s.name
    		});
    	}

    	get isLoading() {
    		throw new Error("<Spinner>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set isLoading(value) {
    		throw new Error("<Spinner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/_components/toggler/Toggler.svelte generated by Svelte v3.38.1 */
    const file$r = "src/_components/toggler/Toggler.svelte";
    const get_off_slot_changes_1 = dirty => ({});
    const get_off_slot_context_1 = ctx => ({});
    const get_on_slot_changes_1 = dirty => ({});
    const get_on_slot_context_1 = ctx => ({});
    const get_off_slot_changes = dirty => ({});
    const get_off_slot_context = ctx => ({});
    const get_on_slot_changes = dirty => ({});
    const get_on_slot_context = ctx => ({});

    // (32:0) {:else}
    function create_else_block$1(ctx) {
    	let button;
    	let current_block_type_index;
    	let if_block;
    	let current;
    	let mounted;
    	let dispose;
    	const if_block_creators = [create_if_block_1, create_else_block_1];
    	const if_blocks = [];

    	function select_block_type_1(ctx, dirty) {
    		if (/*itsOn*/ ctx[2]) return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type_1(ctx);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
    		c: function create() {
    			button = element("button");
    			if_block.c();
    			attr_dev(button, "class", /*baseClass*/ ctx[1]);
    			add_location(button, file$r, 32, 2, 1101);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, button, anchor);
    			if_blocks[current_block_type_index].m(button, null);
    			current = true;

    			if (!mounted) {
    				dispose = listen_dev(button, "click", /*click_handler_3*/ ctx[13], false, false, false);
    				mounted = true;
    			}
    		},
    		p: function update(ctx, dirty) {
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type_1(ctx);

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
    				if_block.m(button, null);
    			}

    			if (!current || dirty & /*baseClass*/ 2) {
    				attr_dev(button, "class", /*baseClass*/ ctx[1]);
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
    			if (detaching) detach_dev(button);
    			if_blocks[current_block_type_index].d();
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$1.name,
    		type: "else",
    		source: "(32:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (22:0) {#if isSwitch}
    function create_if_block$1(ctx) {
    	let div;
    	let button0;
    	let button0_class_value;
    	let t0;
    	let icon;
    	let updating_name;
    	let t1;
    	let button1;
    	let button1_class_value;
    	let current;
    	let mounted;
    	let dispose;
    	const on_slot_template = /*#slots*/ ctx[8].on;
    	const on_slot = create_slot(on_slot_template, ctx, /*$$scope*/ ctx[7], get_on_slot_context);

    	function icon_name_binding(value) {
    		/*icon_name_binding*/ ctx[10](value);
    	}

    	let icon_props = {
    		className: "margin-s--rl",
    		width: "20",
    		style: "cursor: pointer;"
    	};

    	if (/*name*/ ctx[3] !== void 0) {
    		icon_props.name = /*name*/ ctx[3];
    	}

    	icon = new Icon({ props: icon_props, $$inline: true });
    	binding_callbacks.push(() => bind(icon, "name", icon_name_binding));
    	icon.$on("click", /*click_handler_1*/ ctx[11]);
    	const off_slot_template = /*#slots*/ ctx[8].off;
    	const off_slot = create_slot(off_slot_template, ctx, /*$$scope*/ ctx[7], get_off_slot_context);

    	const block = {
    		c: function create() {
    			div = element("div");
    			button0 = element("button");
    			if (on_slot) on_slot.c();
    			t0 = space();
    			create_component(icon.$$.fragment);
    			t1 = space();
    			button1 = element("button");
    			if (off_slot) off_slot.c();
    			attr_dev(button0, "data-status", /*itsOn*/ ctx[2]);
    			attr_dev(button0, "class", button0_class_value = "toggle--switch " + /*baseClass*/ ctx[1]);
    			add_location(button0, file$r, 23, 4, 700);
    			attr_dev(button1, "data-status", /*itsOn*/ ctx[2]);
    			attr_dev(button1, "class", button1_class_value = "toggle--switch " + /*baseClass*/ ctx[1]);
    			add_location(button1, file$r, 27, 4, 947);
    			attr_dev(div, "class", "flex flex-align--center");
    			add_location(div, file$r, 22, 2, 658);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, button0);

    			if (on_slot) {
    				on_slot.m(button0, null);
    			}

    			append_dev(div, t0);
    			mount_component(icon, div, null);
    			append_dev(div, t1);
    			append_dev(div, button1);

    			if (off_slot) {
    				off_slot.m(button1, null);
    			}

    			current = true;

    			if (!mounted) {
    				dispose = [
    					listen_dev(button0, "click", /*click_handler*/ ctx[9], false, false, false),
    					listen_dev(button1, "click", /*click_handler_2*/ ctx[12], false, false, false)
    				];

    				mounted = true;
    			}
    		},
    		p: function update(ctx, dirty) {
    			if (on_slot) {
    				if (on_slot.p && (!current || dirty & /*$$scope*/ 128)) {
    					update_slot(on_slot, on_slot_template, ctx, /*$$scope*/ ctx[7], dirty, get_on_slot_changes, get_on_slot_context);
    				}
    			}

    			if (!current || dirty & /*itsOn*/ 4) {
    				attr_dev(button0, "data-status", /*itsOn*/ ctx[2]);
    			}

    			if (!current || dirty & /*baseClass*/ 2 && button0_class_value !== (button0_class_value = "toggle--switch " + /*baseClass*/ ctx[1])) {
    				attr_dev(button0, "class", button0_class_value);
    			}

    			const icon_changes = {};

    			if (!updating_name && dirty & /*name*/ 8) {
    				updating_name = true;
    				icon_changes.name = /*name*/ ctx[3];
    				add_flush_callback(() => updating_name = false);
    			}

    			icon.$set(icon_changes);

    			if (off_slot) {
    				if (off_slot.p && (!current || dirty & /*$$scope*/ 128)) {
    					update_slot(off_slot, off_slot_template, ctx, /*$$scope*/ ctx[7], dirty, get_off_slot_changes, get_off_slot_context);
    				}
    			}

    			if (!current || dirty & /*itsOn*/ 4) {
    				attr_dev(button1, "data-status", /*itsOn*/ ctx[2]);
    			}

    			if (!current || dirty & /*baseClass*/ 2 && button1_class_value !== (button1_class_value = "toggle--switch " + /*baseClass*/ ctx[1])) {
    				attr_dev(button1, "class", button1_class_value);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(on_slot, local);
    			transition_in(icon.$$.fragment, local);
    			transition_in(off_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(on_slot, local);
    			transition_out(icon.$$.fragment, local);
    			transition_out(off_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			if (on_slot) on_slot.d(detaching);
    			destroy_component(icon);
    			if (off_slot) off_slot.d(detaching);
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$1.name,
    		type: "if",
    		source: "(22:0) {#if isSwitch}",
    		ctx
    	});

    	return block;
    }

    // (36:4) {:else}
    function create_else_block_1(ctx) {
    	let current;
    	const off_slot_template = /*#slots*/ ctx[8].off;
    	const off_slot = create_slot(off_slot_template, ctx, /*$$scope*/ ctx[7], get_off_slot_context_1);

    	const block = {
    		c: function create() {
    			if (off_slot) off_slot.c();
    		},
    		m: function mount(target, anchor) {
    			if (off_slot) {
    				off_slot.m(target, anchor);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (off_slot) {
    				if (off_slot.p && (!current || dirty & /*$$scope*/ 128)) {
    					update_slot(off_slot, off_slot_template, ctx, /*$$scope*/ ctx[7], dirty, get_off_slot_changes_1, get_off_slot_context_1);
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(off_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(off_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (off_slot) off_slot.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block_1.name,
    		type: "else",
    		source: "(36:4) {:else}",
    		ctx
    	});

    	return block;
    }

    // (34:4) {#if itsOn}
    function create_if_block_1(ctx) {
    	let current;
    	const on_slot_template = /*#slots*/ ctx[8].on;
    	const on_slot = create_slot(on_slot_template, ctx, /*$$scope*/ ctx[7], get_on_slot_context_1);

    	const block = {
    		c: function create() {
    			if (on_slot) on_slot.c();
    		},
    		m: function mount(target, anchor) {
    			if (on_slot) {
    				on_slot.m(target, anchor);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (on_slot) {
    				if (on_slot.p && (!current || dirty & /*$$scope*/ 128)) {
    					update_slot(on_slot, on_slot_template, ctx, /*$$scope*/ ctx[7], dirty, get_on_slot_changes_1, get_on_slot_context_1);
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(on_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(on_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (on_slot) on_slot.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1.name,
    		type: "if",
    		source: "(34:4) {#if itsOn}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$r(ctx) {
    	let current_block_type_index;
    	let if_block;
    	let if_block_anchor;
    	let current;
    	const if_block_creators = [create_if_block$1, create_else_block$1];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*isSwitch*/ ctx[0]) return 0;
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
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
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
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$r.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$r($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Toggler", slots, ['on','off']);
    	let { className = undefined } = $$props;
    	let { defaultState = true } = $$props;
    	let { isSwitch = false } = $$props;
    	let baseClass = `toggle-button`;
    	if (className) baseClass = `${className} ${baseClass}`;

    	/**
     * Handle user click on toggle element
     */
    	let itsOn = defaultState;

    	let name = itsOn ? "toggle-on" : "toggle-off";
    	const dispatch = createEventDispatcher();

    	function toggle(status) {
    		$$invalidate(2, itsOn = status !== null && status !== void 0 ? status : !itsOn);
    		$$invalidate(3, name = itsOn ? "toggle-on" : "toggle-off");
    		dispatch("toggle", itsOn);
    	}

    	const writable_props = ["className", "defaultState", "isSwitch"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Toggler> was created with unknown prop '${key}'`);
    	});

    	const click_handler = () => toggle(true);

    	function icon_name_binding(value) {
    		name = value;
    		$$invalidate(3, name);
    	}

    	const click_handler_1 = () => toggle();
    	const click_handler_2 = () => toggle(false);
    	const click_handler_3 = () => toggle();

    	$$self.$$set = $$props => {
    		if ("className" in $$props) $$invalidate(5, className = $$props.className);
    		if ("defaultState" in $$props) $$invalidate(6, defaultState = $$props.defaultState);
    		if ("isSwitch" in $$props) $$invalidate(0, isSwitch = $$props.isSwitch);
    		if ("$$scope" in $$props) $$invalidate(7, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		createEventDispatcher,
    		Icon,
    		className,
    		defaultState,
    		isSwitch,
    		baseClass,
    		itsOn,
    		name,
    		dispatch,
    		toggle
    	});

    	$$self.$inject_state = $$props => {
    		if ("className" in $$props) $$invalidate(5, className = $$props.className);
    		if ("defaultState" in $$props) $$invalidate(6, defaultState = $$props.defaultState);
    		if ("isSwitch" in $$props) $$invalidate(0, isSwitch = $$props.isSwitch);
    		if ("baseClass" in $$props) $$invalidate(1, baseClass = $$props.baseClass);
    		if ("itsOn" in $$props) $$invalidate(2, itsOn = $$props.itsOn);
    		if ("name" in $$props) $$invalidate(3, name = $$props.name);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		isSwitch,
    		baseClass,
    		itsOn,
    		name,
    		toggle,
    		className,
    		defaultState,
    		$$scope,
    		slots,
    		click_handler,
    		icon_name_binding,
    		click_handler_1,
    		click_handler_2,
    		click_handler_3
    	];
    }

    class Toggler extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$r, create_fragment$r, safe_not_equal, {
    			className: 5,
    			defaultState: 6,
    			isSwitch: 0
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Toggler",
    			options,
    			id: create_fragment$r.name
    		});
    	}

    	get className() {
    		throw new Error("<Toggler>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set className(value) {
    		throw new Error("<Toggler>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get defaultState() {
    		throw new Error("<Toggler>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set defaultState(value) {
    		throw new Error("<Toggler>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get isSwitch() {
    		throw new Error("<Toggler>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set isSwitch(value) {
    		throw new Error("<Toggler>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/_components/tooltip/Tooltip.svelte generated by Svelte v3.38.1 */

    const file$q = "src/_components/tooltip/Tooltip.svelte";

    function create_fragment$q(ctx) {
    	let label;
    	let input;
    	let t0;
    	let div0;
    	let i0;
    	let i0_class_value;
    	let t1;
    	let div2;
    	let i1;
    	let i1_class_value;
    	let t2;
    	let div1;
    	let current;
    	const default_slot_template = /*#slots*/ ctx[6].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);

    	const block = {
    		c: function create() {
    			label = element("label");
    			input = element("input");
    			t0 = space();
    			div0 = element("div");
    			i0 = element("i");
    			t1 = space();
    			div2 = element("div");
    			i1 = element("i");
    			t2 = space();
    			div1 = element("div");
    			if (default_slot) default_slot.c();
    			attr_dev(input, "type", "checkbox");
    			input.hidden = true;
    			attr_dev(input, "class", "tooltip-input");
    			add_location(input, file$q, 10, 2, 275);
    			attr_dev(i0, "class", i0_class_value = "tooltip-toggle fas fa-" + /*iconOff*/ ctx[1]);
    			add_location(i0, file$q, 12, 4, 362);
    			attr_dev(div0, "class", "tooltip-off");
    			add_location(div0, file$q, 11, 2, 332);
    			attr_dev(i1, "class", i1_class_value = "tooltip-toggle fas fa-" + /*iconOn*/ ctx[0]);
    			add_location(i1, file$q, 15, 4, 448);
    			attr_dev(div1, "class", "padding-s");
    			add_location(div1, file$q, 16, 4, 497);
    			attr_dev(div2, "class", "tooltip-on");
    			add_location(div2, file$q, 14, 2, 419);
    			attr_dev(label, "class", /*cssClass*/ ctx[2]);
    			add_location(label, file$q, 9, 0, 248);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, label, anchor);
    			append_dev(label, input);
    			append_dev(label, t0);
    			append_dev(label, div0);
    			append_dev(div0, i0);
    			append_dev(label, t1);
    			append_dev(label, div2);
    			append_dev(div2, i1);
    			append_dev(div2, t2);
    			append_dev(div2, div1);

    			if (default_slot) {
    				default_slot.m(div1, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (!current || dirty & /*iconOff*/ 2 && i0_class_value !== (i0_class_value = "tooltip-toggle fas fa-" + /*iconOff*/ ctx[1])) {
    				attr_dev(i0, "class", i0_class_value);
    			}

    			if (!current || dirty & /*iconOn*/ 1 && i1_class_value !== (i1_class_value = "tooltip-toggle fas fa-" + /*iconOn*/ ctx[0])) {
    				attr_dev(i1, "class", i1_class_value);
    			}

    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[5], dirty, null, null);
    				}
    			}

    			if (!current || dirty & /*cssClass*/ 4) {
    				attr_dev(label, "class", /*cssClass*/ ctx[2]);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(label);
    			if (default_slot) default_slot.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$q.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$q($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Tooltip", slots, ['default']);
    	let { iconOn = "times" } = $$props;
    	let { iconOff = "question" } = $$props;
    	let { position = "left" } = $$props;
    	let { className } = $$props;
    	let cssClass = `tooltip tooltip--${position}`;
    	if (className) cssClass = `${cssClass} ${className}`;
    	const writable_props = ["iconOn", "iconOff", "position", "className"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Tooltip> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("iconOn" in $$props) $$invalidate(0, iconOn = $$props.iconOn);
    		if ("iconOff" in $$props) $$invalidate(1, iconOff = $$props.iconOff);
    		if ("position" in $$props) $$invalidate(3, position = $$props.position);
    		if ("className" in $$props) $$invalidate(4, className = $$props.className);
    		if ("$$scope" in $$props) $$invalidate(5, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		iconOn,
    		iconOff,
    		position,
    		className,
    		cssClass
    	});

    	$$self.$inject_state = $$props => {
    		if ("iconOn" in $$props) $$invalidate(0, iconOn = $$props.iconOn);
    		if ("iconOff" in $$props) $$invalidate(1, iconOff = $$props.iconOff);
    		if ("position" in $$props) $$invalidate(3, position = $$props.position);
    		if ("className" in $$props) $$invalidate(4, className = $$props.className);
    		if ("cssClass" in $$props) $$invalidate(2, cssClass = $$props.cssClass);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [iconOn, iconOff, cssClass, position, className, $$scope, slots];
    }

    class Tooltip extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$q, create_fragment$q, safe_not_equal, {
    			iconOn: 0,
    			iconOff: 1,
    			position: 3,
    			className: 4
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Tooltip",
    			options,
    			id: create_fragment$q.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*className*/ ctx[4] === undefined && !("className" in props)) {
    			console.warn("<Tooltip> was created without expected prop 'className'");
    		}
    	}

    	get iconOn() {
    		throw new Error("<Tooltip>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set iconOn(value) {
    		throw new Error("<Tooltip>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get iconOff() {
    		throw new Error("<Tooltip>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set iconOff(value) {
    		throw new Error("<Tooltip>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get position() {
    		throw new Error("<Tooltip>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set position(value) {
    		throw new Error("<Tooltip>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get className() {
    		throw new Error("<Tooltip>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set className(value) {
    		throw new Error("<Tooltip>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* docs_src/routes/Home.svelte generated by Svelte v3.38.1 */
    const file$p = "docs_src/routes/Home.svelte";

    // (31:8) <Card className="padding-m" href={componentsLink}>
    function create_default_slot_2$6(ctx) {
    	let div;
    	let h2;
    	let t1;
    	let i;

    	const block = {
    		c: function create() {
    			div = element("div");
    			h2 = element("h2");
    			h2.textContent = "Components";
    			t1 = space();
    			i = element("i");
    			attr_dev(h2, "class", "color--graa1");
    			add_location(h2, file$p, 32, 12, 1239);
    			attr_dev(i, "class", "home-section-icon fas fa-cubes svelte-112rkb7");
    			add_location(i, file$p, 33, 12, 1292);
    			attr_dev(div, "class", "flex-item flex-item--center text-align--center");
    			add_location(div, file$p, 31, 10, 1166);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, h2);
    			append_dev(div, t1);
    			append_dev(div, i);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2$6.name,
    		type: "slot",
    		source: "(31:8) <Card className=\\\"padding-m\\\" href={componentsLink}>",
    		ctx
    	});

    	return block;
    }

    // (39:8) <Card className="padding-m" href={utilityLink}>
    function create_default_slot_1$8(ctx) {
    	let div;
    	let h2;
    	let t1;
    	let i;

    	const block = {
    		c: function create() {
    			div = element("div");
    			h2 = element("h2");
    			h2.textContent = "Utilities";
    			t1 = space();
    			i = element("i");
    			attr_dev(h2, "class", "color--graa1");
    			add_location(h2, file$p, 40, 12, 1575);
    			attr_dev(i, "class", "home-section-icon fab fa-connectdevelop svelte-112rkb7");
    			add_location(i, file$p, 41, 12, 1627);
    			attr_dev(div, "class", "flex-item flex-item--center text-align--center");
    			add_location(div, file$p, 39, 10, 1502);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, h2);
    			append_dev(div, t1);
    			append_dev(div, i);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1$8.name,
    		type: "slot",
    		source: "(39:8) <Card className=\\\"padding-m\\\" href={utilityLink}>",
    		ctx
    	});

    	return block;
    }

    // (49:8) <Card className="padding-m" href={colorLink}>
    function create_default_slot$a(ctx) {
    	let div;
    	let h2;
    	let t1;
    	let i;

    	const block = {
    		c: function create() {
    			div = element("div");
    			h2 = element("h2");
    			h2.textContent = "Colors";
    			t1 = space();
    			i = element("i");
    			attr_dev(h2, "class", "color--graa1");
    			add_location(h2, file$p, 50, 12, 1951);
    			attr_dev(i, "class", "home-section-icon fas fa-palette svelte-112rkb7");
    			add_location(i, file$p, 51, 12, 2000);
    			attr_dev(div, "class", "flex-item flex-item--center text-align--center");
    			add_location(div, file$p, 49, 10, 1878);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, h2);
    			append_dev(div, t1);
    			append_dev(div, i);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$a.name,
    		type: "slot",
    		source: "(49:8) <Card className=\\\"padding-m\\\" href={colorLink}>",
    		ctx
    	});

    	return block;
    }

    function create_fragment$p(ctx) {
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
    				className: "padding-m",
    				href: /*componentsLink*/ ctx[0],
    				$$slots: { default: [create_default_slot_2$6] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	card1 = new Card({
    			props: {
    				className: "padding-m",
    				href: /*utilityLink*/ ctx[1],
    				$$slots: { default: [create_default_slot_1$8] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	card2 = new Card({
    			props: {
    				className: "padding-m",
    				href: /*colorLink*/ ctx[2],
    				$$slots: { default: [create_default_slot$a] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div9 = element("div");
    			div8 = element("div");
    			div0 = element("div");
    			img = element("img");
    			t0 = space();
    			div1 = element("div");
    			h1 = element("h1");
    			h1.textContent = "Design system";
    			t2 = space();
    			div2 = element("div");
    			div2.textContent = "yarn add @ekstra-bladet/designsystem";
    			t4 = space();
    			div5 = element("div");
    			div3 = element("div");
    			create_component(card0.$$.fragment);
    			t5 = space();
    			div4 = element("div");
    			create_component(card1.$$.fragment);
    			t6 = space();
    			div7 = element("div");
    			div6 = element("div");
    			create_component(card2.$$.fragment);
    			attr_dev(img, "alt", "");
    			if (img.src !== (img_src_value = "ekstrabladet.svg")) attr_dev(img, "src", img_src_value);
    			set_style(img, "height", "70px");
    			add_location(img, file$p, 22, 6, 742);
    			attr_dev(div0, "class", "flex flex-justify--center");
    			add_location(div0, file$p, 21, 4, 696);
    			add_location(h1, file$p, 25, 6, 875);
    			attr_dev(div1, "class", "flex flex-justify--center  margin-l--b");
    			add_location(div1, file$p, 24, 4, 816);
    			attr_dev(div2, "class", "text-align--center margin-m--tb padding-m bg--graa7");
    			add_location(div2, file$p, 27, 4, 913);
    			attr_dev(div3, "class", "home-section width-1of1 margin-m svelte-112rkb7");
    			add_location(div3, file$p, 29, 6, 1050);
    			attr_dev(div4, "class", "home-section width-1of1 margin-m svelte-112rkb7");
    			add_location(div4, file$p, 37, 6, 1389);
    			attr_dev(div5, "class", "flex");
    			add_location(div5, file$p, 28, 4, 1025);
    			attr_dev(div6, "class", "home-section width-1of1 margin-m svelte-112rkb7");
    			add_location(div6, file$p, 47, 6, 1767);
    			attr_dev(div7, "class", "flex");
    			add_location(div7, file$p, 46, 4, 1742);
    			attr_dev(div8, "class", "grid-width--medium");
    			add_location(div8, file$p, 20, 2, 659);
    			attr_dev(div9, "class", "flex flex-justify--around width-1of1");
    			add_location(div9, file$p, 19, 0, 606);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
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
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$p.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$p($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Home", slots, []);
    	let componentsLink = "#/";
    	let utilityLink = "#/";
    	let colorLink = "#/";

    	// Adds dynamic links to home-section cards. It finds the first element for each type.
    	routes.forEach(route => {
    		if (componentsLink === "#/" && route.type === "component") {
    			$$invalidate(0, componentsLink = `#${route.link}`);
    		}

    		if (utilityLink === "#/" && route.type === "utility") {
    			$$invalidate(1, utilityLink = `#${route.link}`);
    		}

    		if (colorLink === "#/" && route.type === "color") {
    			$$invalidate(2, colorLink = `#${route.link}`);
    		}
    	});

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Home> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		Card,
    		Routes: routes,
    		componentsLink,
    		utilityLink,
    		colorLink
    	});

    	$$self.$inject_state = $$props => {
    		if ("componentsLink" in $$props) $$invalidate(0, componentsLink = $$props.componentsLink);
    		if ("utilityLink" in $$props) $$invalidate(1, utilityLink = $$props.utilityLink);
    		if ("colorLink" in $$props) $$invalidate(2, colorLink = $$props.colorLink);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [componentsLink, utilityLink, colorLink];
    }

    class Home extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$p, create_fragment$p, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Home",
    			options,
    			id: create_fragment$p.name
    		});
    	}
    }

    if (window.Prism)
        console.warn('Prism has already been initiated. Please ensure that svelte-prism is imported first.');

    window.Prism = window.Prism || {};
    window.Prism.manual = true;

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule(fn) {
      var module = { exports: {} };
    	return fn(module, module.exports), module.exports;
    }

    var prism$1 = createCommonjsModule(function (module) {
    /* **********************************************
         Begin prism-core.js
    ********************************************** */

    /// <reference lib="WebWorker"/>

    var _self = (typeof window !== 'undefined')
    	? window   // if in browser
    	: (
    		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
    		? self // if in worker
    		: {}   // if in node js
    	);

    /**
     * Prism: Lightweight, robust, elegant syntax highlighting
     *
     * @license MIT <https://opensource.org/licenses/MIT>
     * @author Lea Verou <https://lea.verou.me>
     * @namespace
     * @public
     */
    var Prism = (function (_self){

    // Private helper vars
    var lang = /\blang(?:uage)?-([\w-]+)\b/i;
    var uniqueId = 0;


    var _ = {
    	/**
    	 * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
    	 * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
    	 * additional languages or plugins yourself.
    	 *
    	 * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
    	 *
    	 * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
    	 * empty Prism object into the global scope before loading the Prism script like this:
    	 *
    	 * ```js
    	 * window.Prism = window.Prism || {};
    	 * Prism.manual = true;
    	 * // add a new <script> to load Prism's script
    	 * ```
    	 *
    	 * @default false
    	 * @type {boolean}
    	 * @memberof Prism
    	 * @public
    	 */
    	manual: _self.Prism && _self.Prism.manual,
    	disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,

    	/**
    	 * A namespace for utility methods.
    	 *
    	 * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
    	 * change or disappear at any time.
    	 *
    	 * @namespace
    	 * @memberof Prism
    	 */
    	util: {
    		encode: function encode(tokens) {
    			if (tokens instanceof Token) {
    				return new Token(tokens.type, encode(tokens.content), tokens.alias);
    			} else if (Array.isArray(tokens)) {
    				return tokens.map(encode);
    			} else {
    				return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
    			}
    		},

    		/**
    		 * Returns the name of the type of the given value.
    		 *
    		 * @param {any} o
    		 * @returns {string}
    		 * @example
    		 * type(null)      === 'Null'
    		 * type(undefined) === 'Undefined'
    		 * type(123)       === 'Number'
    		 * type('foo')     === 'String'
    		 * type(true)      === 'Boolean'
    		 * type([1, 2])    === 'Array'
    		 * type({})        === 'Object'
    		 * type(String)    === 'Function'
    		 * type(/abc+/)    === 'RegExp'
    		 */
    		type: function (o) {
    			return Object.prototype.toString.call(o).slice(8, -1);
    		},

    		/**
    		 * Returns a unique number for the given object. Later calls will still return the same number.
    		 *
    		 * @param {Object} obj
    		 * @returns {number}
    		 */
    		objId: function (obj) {
    			if (!obj['__id']) {
    				Object.defineProperty(obj, '__id', { value: ++uniqueId });
    			}
    			return obj['__id'];
    		},

    		/**
    		 * Creates a deep clone of the given object.
    		 *
    		 * The main intended use of this function is to clone language definitions.
    		 *
    		 * @param {T} o
    		 * @param {Record<number, any>} [visited]
    		 * @returns {T}
    		 * @template T
    		 */
    		clone: function deepClone(o, visited) {
    			visited = visited || {};

    			var clone, id;
    			switch (_.util.type(o)) {
    				case 'Object':
    					id = _.util.objId(o);
    					if (visited[id]) {
    						return visited[id];
    					}
    					clone = /** @type {Record<string, any>} */ ({});
    					visited[id] = clone;

    					for (var key in o) {
    						if (o.hasOwnProperty(key)) {
    							clone[key] = deepClone(o[key], visited);
    						}
    					}

    					return /** @type {any} */ (clone);

    				case 'Array':
    					id = _.util.objId(o);
    					if (visited[id]) {
    						return visited[id];
    					}
    					clone = [];
    					visited[id] = clone;

    					(/** @type {Array} */(/** @type {any} */(o))).forEach(function (v, i) {
    						clone[i] = deepClone(v, visited);
    					});

    					return /** @type {any} */ (clone);

    				default:
    					return o;
    			}
    		},

    		/**
    		 * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
    		 *
    		 * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
    		 *
    		 * @param {Element} element
    		 * @returns {string}
    		 */
    		getLanguage: function (element) {
    			while (element && !lang.test(element.className)) {
    				element = element.parentElement;
    			}
    			if (element) {
    				return (element.className.match(lang) || [, 'none'])[1].toLowerCase();
    			}
    			return 'none';
    		},

    		/**
    		 * Returns the script element that is currently executing.
    		 *
    		 * This does __not__ work for line script element.
    		 *
    		 * @returns {HTMLScriptElement | null}
    		 */
    		currentScript: function () {
    			if (typeof document === 'undefined') {
    				return null;
    			}
    			if ('currentScript' in document && 1 < 2 /* hack to trip TS' flow analysis */) {
    				return /** @type {any} */ (document.currentScript);
    			}

    			// IE11 workaround
    			// we'll get the src of the current script by parsing IE11's error stack trace
    			// this will not work for inline scripts

    			try {
    				throw new Error();
    			} catch (err) {
    				// Get file src url from stack. Specifically works with the format of stack traces in IE.
    				// A stack will look like this:
    				//
    				// Error
    				//    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
    				//    at Global code (http://localhost/components/prism-core.js:606:1)

    				var src = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(err.stack) || [])[1];
    				if (src) {
    					var scripts = document.getElementsByTagName('script');
    					for (var i in scripts) {
    						if (scripts[i].src == src) {
    							return scripts[i];
    						}
    					}
    				}
    				return null;
    			}
    		},

    		/**
    		 * Returns whether a given class is active for `element`.
    		 *
    		 * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
    		 * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
    		 * given class is just the given class with a `no-` prefix.
    		 *
    		 * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
    		 * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
    		 * ancestors have the given class or the negated version of it, then the default activation will be returned.
    		 *
    		 * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
    		 * version of it, the class is considered active.
    		 *
    		 * @param {Element} element
    		 * @param {string} className
    		 * @param {boolean} [defaultActivation=false]
    		 * @returns {boolean}
    		 */
    		isActive: function (element, className, defaultActivation) {
    			var no = 'no-' + className;

    			while (element) {
    				var classList = element.classList;
    				if (classList.contains(className)) {
    					return true;
    				}
    				if (classList.contains(no)) {
    					return false;
    				}
    				element = element.parentElement;
    			}
    			return !!defaultActivation;
    		}
    	},

    	/**
    	 * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
    	 *
    	 * @namespace
    	 * @memberof Prism
    	 * @public
    	 */
    	languages: {
    		/**
    		 * Creates a deep copy of the language with the given id and appends the given tokens.
    		 *
    		 * If a token in `redef` also appears in the copied language, then the existing token in the copied language
    		 * will be overwritten at its original position.
    		 *
    		 * ## Best practices
    		 *
    		 * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
    		 * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
    		 * understand the language definition because, normally, the order of tokens matters in Prism grammars.
    		 *
    		 * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
    		 * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
    		 *
    		 * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
    		 * @param {Grammar} redef The new tokens to append.
    		 * @returns {Grammar} The new language created.
    		 * @public
    		 * @example
    		 * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
    		 *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
    		 *     // at its original position
    		 *     'comment': { ... },
    		 *     // CSS doesn't have a 'color' token, so this token will be appended
    		 *     'color': /\b(?:red|green|blue)\b/
    		 * });
    		 */
    		extend: function (id, redef) {
    			var lang = _.util.clone(_.languages[id]);

    			for (var key in redef) {
    				lang[key] = redef[key];
    			}

    			return lang;
    		},

    		/**
    		 * Inserts tokens _before_ another token in a language definition or any other grammar.
    		 *
    		 * ## Usage
    		 *
    		 * This helper method makes it easy to modify existing languages. For example, the CSS language definition
    		 * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
    		 * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
    		 * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
    		 * this:
    		 *
    		 * ```js
    		 * Prism.languages.markup.style = {
    		 *     // token
    		 * };
    		 * ```
    		 *
    		 * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
    		 * before existing tokens. For the CSS example above, you would use it like this:
    		 *
    		 * ```js
    		 * Prism.languages.insertBefore('markup', 'cdata', {
    		 *     'style': {
    		 *         // token
    		 *     }
    		 * });
    		 * ```
    		 *
    		 * ## Special cases
    		 *
    		 * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
    		 * will be ignored.
    		 *
    		 * This behavior can be used to insert tokens after `before`:
    		 *
    		 * ```js
    		 * Prism.languages.insertBefore('markup', 'comment', {
    		 *     'comment': Prism.languages.markup.comment,
    		 *     // tokens after 'comment'
    		 * });
    		 * ```
    		 *
    		 * ## Limitations
    		 *
    		 * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
    		 * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
    		 * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
    		 * deleting properties which is necessary to insert at arbitrary positions.
    		 *
    		 * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
    		 * Instead, it will create a new object and replace all references to the target object with the new one. This
    		 * can be done without temporarily deleting properties, so the iteration order is well-defined.
    		 *
    		 * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
    		 * you hold the target object in a variable, then the value of the variable will not change.
    		 *
    		 * ```js
    		 * var oldMarkup = Prism.languages.markup;
    		 * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
    		 *
    		 * assert(oldMarkup !== Prism.languages.markup);
    		 * assert(newMarkup === Prism.languages.markup);
    		 * ```
    		 *
    		 * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
    		 * object to be modified.
    		 * @param {string} before The key to insert before.
    		 * @param {Grammar} insert An object containing the key-value pairs to be inserted.
    		 * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
    		 * object to be modified.
    		 *
    		 * Defaults to `Prism.languages`.
    		 * @returns {Grammar} The new grammar object.
    		 * @public
    		 */
    		insertBefore: function (inside, before, insert, root) {
    			root = root || /** @type {any} */ (_.languages);
    			var grammar = root[inside];
    			/** @type {Grammar} */
    			var ret = {};

    			for (var token in grammar) {
    				if (grammar.hasOwnProperty(token)) {

    					if (token == before) {
    						for (var newToken in insert) {
    							if (insert.hasOwnProperty(newToken)) {
    								ret[newToken] = insert[newToken];
    							}
    						}
    					}

    					// Do not insert token which also occur in insert. See #1525
    					if (!insert.hasOwnProperty(token)) {
    						ret[token] = grammar[token];
    					}
    				}
    			}

    			var old = root[inside];
    			root[inside] = ret;

    			// Update references in other language definitions
    			_.languages.DFS(_.languages, function(key, value) {
    				if (value === old && key != inside) {
    					this[key] = ret;
    				}
    			});

    			return ret;
    		},

    		// Traverse a language definition with Depth First Search
    		DFS: function DFS(o, callback, type, visited) {
    			visited = visited || {};

    			var objId = _.util.objId;

    			for (var i in o) {
    				if (o.hasOwnProperty(i)) {
    					callback.call(o, i, o[i], type || i);

    					var property = o[i],
    					    propertyType = _.util.type(property);

    					if (propertyType === 'Object' && !visited[objId(property)]) {
    						visited[objId(property)] = true;
    						DFS(property, callback, null, visited);
    					}
    					else if (propertyType === 'Array' && !visited[objId(property)]) {
    						visited[objId(property)] = true;
    						DFS(property, callback, i, visited);
    					}
    				}
    			}
    		}
    	},

    	plugins: {},

    	/**
    	 * This is the most high-level function in Prism’s API.
    	 * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
    	 * each one of them.
    	 *
    	 * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
    	 *
    	 * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
    	 * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
    	 * @memberof Prism
    	 * @public
    	 */
    	highlightAll: function(async, callback) {
    		_.highlightAllUnder(document, async, callback);
    	},

    	/**
    	 * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
    	 * {@link Prism.highlightElement} on each one of them.
    	 *
    	 * The following hooks will be run:
    	 * 1. `before-highlightall`
    	 * 2. `before-all-elements-highlight`
    	 * 3. All hooks of {@link Prism.highlightElement} for each element.
    	 *
    	 * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
    	 * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
    	 * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
    	 * @memberof Prism
    	 * @public
    	 */
    	highlightAllUnder: function(container, async, callback) {
    		var env = {
    			callback: callback,
    			container: container,
    			selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
    		};

    		_.hooks.run('before-highlightall', env);

    		env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

    		_.hooks.run('before-all-elements-highlight', env);

    		for (var i = 0, element; element = env.elements[i++];) {
    			_.highlightElement(element, async === true, env.callback);
    		}
    	},

    	/**
    	 * Highlights the code inside a single element.
    	 *
    	 * The following hooks will be run:
    	 * 1. `before-sanity-check`
    	 * 2. `before-highlight`
    	 * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
    	 * 4. `before-insert`
    	 * 5. `after-highlight`
    	 * 6. `complete`
    	 *
    	 * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
    	 * the element's language.
    	 *
    	 * @param {Element} element The element containing the code.
    	 * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
    	 * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
    	 * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
    	 * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
    	 *
    	 * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
    	 * asynchronous highlighting to work. You can build your own bundle on the
    	 * [Download page](https://prismjs.com/download.html).
    	 * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
    	 * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
    	 * @memberof Prism
    	 * @public
    	 */
    	highlightElement: function(element, async, callback) {
    		// Find language
    		var language = _.util.getLanguage(element);
    		var grammar = _.languages[language];

    		// Set language on the element, if not present
    		element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

    		// Set language on the parent, for styling
    		var parent = element.parentElement;
    		if (parent && parent.nodeName.toLowerCase() === 'pre') {
    			parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
    		}

    		var code = element.textContent;

    		var env = {
    			element: element,
    			language: language,
    			grammar: grammar,
    			code: code
    		};

    		function insertHighlightedCode(highlightedCode) {
    			env.highlightedCode = highlightedCode;

    			_.hooks.run('before-insert', env);

    			env.element.innerHTML = env.highlightedCode;

    			_.hooks.run('after-highlight', env);
    			_.hooks.run('complete', env);
    			callback && callback.call(env.element);
    		}

    		_.hooks.run('before-sanity-check', env);

    		if (!env.code) {
    			_.hooks.run('complete', env);
    			callback && callback.call(env.element);
    			return;
    		}

    		_.hooks.run('before-highlight', env);

    		if (!env.grammar) {
    			insertHighlightedCode(_.util.encode(env.code));
    			return;
    		}

    		if (async && _self.Worker) {
    			var worker = new Worker(_.filename);

    			worker.onmessage = function(evt) {
    				insertHighlightedCode(evt.data);
    			};

    			worker.postMessage(JSON.stringify({
    				language: env.language,
    				code: env.code,
    				immediateClose: true
    			}));
    		}
    		else {
    			insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
    		}
    	},

    	/**
    	 * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
    	 * and the language definitions to use, and returns a string with the HTML produced.
    	 *
    	 * The following hooks will be run:
    	 * 1. `before-tokenize`
    	 * 2. `after-tokenize`
    	 * 3. `wrap`: On each {@link Token}.
    	 *
    	 * @param {string} text A string with the code to be highlighted.
    	 * @param {Grammar} grammar An object containing the tokens to use.
    	 *
    	 * Usually a language definition like `Prism.languages.markup`.
    	 * @param {string} language The name of the language definition passed to `grammar`.
    	 * @returns {string} The highlighted HTML.
    	 * @memberof Prism
    	 * @public
    	 * @example
    	 * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
    	 */
    	highlight: function (text, grammar, language) {
    		var env = {
    			code: text,
    			grammar: grammar,
    			language: language
    		};
    		_.hooks.run('before-tokenize', env);
    		env.tokens = _.tokenize(env.code, env.grammar);
    		_.hooks.run('after-tokenize', env);
    		return Token.stringify(_.util.encode(env.tokens), env.language);
    	},

    	/**
    	 * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
    	 * and the language definitions to use, and returns an array with the tokenized code.
    	 *
    	 * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
    	 *
    	 * This method could be useful in other contexts as well, as a very crude parser.
    	 *
    	 * @param {string} text A string with the code to be highlighted.
    	 * @param {Grammar} grammar An object containing the tokens to use.
    	 *
    	 * Usually a language definition like `Prism.languages.markup`.
    	 * @returns {TokenStream} An array of strings and tokens, a token stream.
    	 * @memberof Prism
    	 * @public
    	 * @example
    	 * let code = `var foo = 0;`;
    	 * let tokens = Prism.tokenize(code, Prism.languages.javascript);
    	 * tokens.forEach(token => {
    	 *     if (token instanceof Prism.Token && token.type === 'number') {
    	 *         console.log(`Found numeric literal: ${token.content}`);
    	 *     }
    	 * });
    	 */
    	tokenize: function(text, grammar) {
    		var rest = grammar.rest;
    		if (rest) {
    			for (var token in rest) {
    				grammar[token] = rest[token];
    			}

    			delete grammar.rest;
    		}

    		var tokenList = new LinkedList();
    		addAfter(tokenList, tokenList.head, text);

    		matchGrammar(text, tokenList, grammar, tokenList.head, 0);

    		return toArray(tokenList);
    	},

    	/**
    	 * @namespace
    	 * @memberof Prism
    	 * @public
    	 */
    	hooks: {
    		all: {},

    		/**
    		 * Adds the given callback to the list of callbacks for the given hook.
    		 *
    		 * The callback will be invoked when the hook it is registered for is run.
    		 * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
    		 *
    		 * One callback function can be registered to multiple hooks and the same hook multiple times.
    		 *
    		 * @param {string} name The name of the hook.
    		 * @param {HookCallback} callback The callback function which is given environment variables.
    		 * @public
    		 */
    		add: function (name, callback) {
    			var hooks = _.hooks.all;

    			hooks[name] = hooks[name] || [];

    			hooks[name].push(callback);
    		},

    		/**
    		 * Runs a hook invoking all registered callbacks with the given environment variables.
    		 *
    		 * Callbacks will be invoked synchronously and in the order in which they were registered.
    		 *
    		 * @param {string} name The name of the hook.
    		 * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
    		 * @public
    		 */
    		run: function (name, env) {
    			var callbacks = _.hooks.all[name];

    			if (!callbacks || !callbacks.length) {
    				return;
    			}

    			for (var i=0, callback; callback = callbacks[i++];) {
    				callback(env);
    			}
    		}
    	},

    	Token: Token
    };
    _self.Prism = _;


    // Typescript note:
    // The following can be used to import the Token type in JSDoc:
    //
    //   @typedef {InstanceType<import("./prism-core")["Token"]>} Token

    /**
     * Creates a new token.
     *
     * @param {string} type See {@link Token#type type}
     * @param {string | TokenStream} content See {@link Token#content content}
     * @param {string|string[]} [alias] The alias(es) of the token.
     * @param {string} [matchedStr=""] A copy of the full string this token was created from.
     * @class
     * @global
     * @public
     */
    function Token(type, content, alias, matchedStr) {
    	/**
    	 * The type of the token.
    	 *
    	 * This is usually the key of a pattern in a {@link Grammar}.
    	 *
    	 * @type {string}
    	 * @see GrammarToken
    	 * @public
    	 */
    	this.type = type;
    	/**
    	 * The strings or tokens contained by this token.
    	 *
    	 * This will be a token stream if the pattern matched also defined an `inside` grammar.
    	 *
    	 * @type {string | TokenStream}
    	 * @public
    	 */
    	this.content = content;
    	/**
    	 * The alias(es) of the token.
    	 *
    	 * @type {string|string[]}
    	 * @see GrammarToken
    	 * @public
    	 */
    	this.alias = alias;
    	// Copy of the full string this token was created from
    	this.length = (matchedStr || '').length | 0;
    }

    /**
     * A token stream is an array of strings and {@link Token Token} objects.
     *
     * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
     * them.
     *
     * 1. No adjacent strings.
     * 2. No empty strings.
     *
     *    The only exception here is the token stream that only contains the empty string and nothing else.
     *
     * @typedef {Array<string | Token>} TokenStream
     * @global
     * @public
     */

    /**
     * Converts the given token or token stream to an HTML representation.
     *
     * The following hooks will be run:
     * 1. `wrap`: On each {@link Token}.
     *
     * @param {string | Token | TokenStream} o The token or token stream to be converted.
     * @param {string} language The name of current language.
     * @returns {string} The HTML representation of the token or token stream.
     * @memberof Token
     * @static
     */
    Token.stringify = function stringify(o, language) {
    	if (typeof o == 'string') {
    		return o;
    	}
    	if (Array.isArray(o)) {
    		var s = '';
    		o.forEach(function (e) {
    			s += stringify(e, language);
    		});
    		return s;
    	}

    	var env = {
    		type: o.type,
    		content: stringify(o.content, language),
    		tag: 'span',
    		classes: ['token', o.type],
    		attributes: {},
    		language: language
    	};

    	var aliases = o.alias;
    	if (aliases) {
    		if (Array.isArray(aliases)) {
    			Array.prototype.push.apply(env.classes, aliases);
    		} else {
    			env.classes.push(aliases);
    		}
    	}

    	_.hooks.run('wrap', env);

    	var attributes = '';
    	for (var name in env.attributes) {
    		attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
    	}

    	return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
    };

    /**
     * @param {RegExp} pattern
     * @param {number} pos
     * @param {string} text
     * @param {boolean} lookbehind
     * @returns {RegExpExecArray | null}
     */
    function matchPattern(pattern, pos, text, lookbehind) {
    	pattern.lastIndex = pos;
    	var match = pattern.exec(text);
    	if (match && lookbehind && match[1]) {
    		// change the match to remove the text matched by the Prism lookbehind group
    		var lookbehindLength = match[1].length;
    		match.index += lookbehindLength;
    		match[0] = match[0].slice(lookbehindLength);
    	}
    	return match;
    }

    /**
     * @param {string} text
     * @param {LinkedList<string | Token>} tokenList
     * @param {any} grammar
     * @param {LinkedListNode<string | Token>} startNode
     * @param {number} startPos
     * @param {RematchOptions} [rematch]
     * @returns {void}
     * @private
     *
     * @typedef RematchOptions
     * @property {string} cause
     * @property {number} reach
     */
    function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
    	for (var token in grammar) {
    		if (!grammar.hasOwnProperty(token) || !grammar[token]) {
    			continue;
    		}

    		var patterns = grammar[token];
    		patterns = Array.isArray(patterns) ? patterns : [patterns];

    		for (var j = 0; j < patterns.length; ++j) {
    			if (rematch && rematch.cause == token + ',' + j) {
    				return;
    			}

    			var patternObj = patterns[j],
    				inside = patternObj.inside,
    				lookbehind = !!patternObj.lookbehind,
    				greedy = !!patternObj.greedy,
    				alias = patternObj.alias;

    			if (greedy && !patternObj.pattern.global) {
    				// Without the global flag, lastIndex won't work
    				var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
    				patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
    			}

    			/** @type {RegExp} */
    			var pattern = patternObj.pattern || patternObj;

    			for ( // iterate the token list and keep track of the current token/string position
    				var currentNode = startNode.next, pos = startPos;
    				currentNode !== tokenList.tail;
    				pos += currentNode.value.length, currentNode = currentNode.next
    			) {

    				if (rematch && pos >= rematch.reach) {
    					break;
    				}

    				var str = currentNode.value;

    				if (tokenList.length > text.length) {
    					// Something went terribly wrong, ABORT, ABORT!
    					return;
    				}

    				if (str instanceof Token) {
    					continue;
    				}

    				var removeCount = 1; // this is the to parameter of removeBetween
    				var match;

    				if (greedy) {
    					match = matchPattern(pattern, pos, text, lookbehind);
    					if (!match) {
    						break;
    					}

    					var from = match.index;
    					var to = match.index + match[0].length;
    					var p = pos;

    					// find the node that contains the match
    					p += currentNode.value.length;
    					while (from >= p) {
    						currentNode = currentNode.next;
    						p += currentNode.value.length;
    					}
    					// adjust pos (and p)
    					p -= currentNode.value.length;
    					pos = p;

    					// the current node is a Token, then the match starts inside another Token, which is invalid
    					if (currentNode.value instanceof Token) {
    						continue;
    					}

    					// find the last node which is affected by this match
    					for (
    						var k = currentNode;
    						k !== tokenList.tail && (p < to || typeof k.value === 'string');
    						k = k.next
    					) {
    						removeCount++;
    						p += k.value.length;
    					}
    					removeCount--;

    					// replace with the new match
    					str = text.slice(pos, p);
    					match.index -= pos;
    				} else {
    					match = matchPattern(pattern, 0, str, lookbehind);
    					if (!match) {
    						continue;
    					}
    				}

    				var from = match.index,
    					matchStr = match[0],
    					before = str.slice(0, from),
    					after = str.slice(from + matchStr.length);

    				var reach = pos + str.length;
    				if (rematch && reach > rematch.reach) {
    					rematch.reach = reach;
    				}

    				var removeFrom = currentNode.prev;

    				if (before) {
    					removeFrom = addAfter(tokenList, removeFrom, before);
    					pos += before.length;
    				}

    				removeRange(tokenList, removeFrom, removeCount);

    				var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
    				currentNode = addAfter(tokenList, removeFrom, wrapped);

    				if (after) {
    					addAfter(tokenList, currentNode, after);
    				}

    				if (removeCount > 1) {
    					// at least one Token object was removed, so we have to do some rematching
    					// this can only happen if the current pattern is greedy
    					matchGrammar(text, tokenList, grammar, currentNode.prev, pos, {
    						cause: token + ',' + j,
    						reach: reach
    					});
    				}
    			}
    		}
    	}
    }

    /**
     * @typedef LinkedListNode
     * @property {T} value
     * @property {LinkedListNode<T> | null} prev The previous node.
     * @property {LinkedListNode<T> | null} next The next node.
     * @template T
     * @private
     */

    /**
     * @template T
     * @private
     */
    function LinkedList() {
    	/** @type {LinkedListNode<T>} */
    	var head = { value: null, prev: null, next: null };
    	/** @type {LinkedListNode<T>} */
    	var tail = { value: null, prev: head, next: null };
    	head.next = tail;

    	/** @type {LinkedListNode<T>} */
    	this.head = head;
    	/** @type {LinkedListNode<T>} */
    	this.tail = tail;
    	this.length = 0;
    }

    /**
     * Adds a new node with the given value to the list.
     * @param {LinkedList<T>} list
     * @param {LinkedListNode<T>} node
     * @param {T} value
     * @returns {LinkedListNode<T>} The added node.
     * @template T
     */
    function addAfter(list, node, value) {
    	// assumes that node != list.tail && values.length >= 0
    	var next = node.next;

    	var newNode = { value: value, prev: node, next: next };
    	node.next = newNode;
    	next.prev = newNode;
    	list.length++;

    	return newNode;
    }
    /**
     * Removes `count` nodes after the given node. The given node will not be removed.
     * @param {LinkedList<T>} list
     * @param {LinkedListNode<T>} node
     * @param {number} count
     * @template T
     */
    function removeRange(list, node, count) {
    	var next = node.next;
    	for (var i = 0; i < count && next !== list.tail; i++) {
    		next = next.next;
    	}
    	node.next = next;
    	next.prev = node;
    	list.length -= i;
    }
    /**
     * @param {LinkedList<T>} list
     * @returns {T[]}
     * @template T
     */
    function toArray(list) {
    	var array = [];
    	var node = list.head.next;
    	while (node !== list.tail) {
    		array.push(node.value);
    		node = node.next;
    	}
    	return array;
    }


    if (!_self.document) {
    	if (!_self.addEventListener) {
    		// in Node.js
    		return _;
    	}

    	if (!_.disableWorkerMessageHandler) {
    		// In worker
    		_self.addEventListener('message', function (evt) {
    			var message = JSON.parse(evt.data),
    				lang = message.language,
    				code = message.code,
    				immediateClose = message.immediateClose;

    			_self.postMessage(_.highlight(code, _.languages[lang], lang));
    			if (immediateClose) {
    				_self.close();
    			}
    		}, false);
    	}

    	return _;
    }

    // Get current script and highlight
    var script = _.util.currentScript();

    if (script) {
    	_.filename = script.src;

    	if (script.hasAttribute('data-manual')) {
    		_.manual = true;
    	}
    }

    function highlightAutomaticallyCallback() {
    	if (!_.manual) {
    		_.highlightAll();
    	}
    }

    if (!_.manual) {
    	// If the document state is "loading", then we'll use DOMContentLoaded.
    	// If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
    	// DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
    	// might take longer one animation frame to execute which can create a race condition where only some plugins have
    	// been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
    	// See https://github.com/PrismJS/prism/issues/2102
    	var readyState = document.readyState;
    	if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
    		document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
    	} else {
    		if (window.requestAnimationFrame) {
    			window.requestAnimationFrame(highlightAutomaticallyCallback);
    		} else {
    			window.setTimeout(highlightAutomaticallyCallback, 16);
    		}
    	}
    }

    return _;

    })(_self);

    if (module.exports) {
    	module.exports = Prism;
    }

    // hack for components to work correctly in node.js
    if (typeof commonjsGlobal !== 'undefined') {
    	commonjsGlobal.Prism = Prism;
    }

    // some additional documentation/types

    /**
     * The expansion of a simple `RegExp` literal to support additional properties.
     *
     * @typedef GrammarToken
     * @property {RegExp} pattern The regular expression of the token.
     * @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
     * behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
     * @property {boolean} [greedy=false] Whether the token is greedy.
     * @property {string|string[]} [alias] An optional alias or list of aliases.
     * @property {Grammar} [inside] The nested grammar of this token.
     *
     * The `inside` grammar will be used to tokenize the text value of each token of this kind.
     *
     * This can be used to make nested and even recursive language definitions.
     *
     * Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
     * each another.
     * @global
     * @public
    */

    /**
     * @typedef Grammar
     * @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
     * @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
     * @global
     * @public
     */

    /**
     * A function which will invoked after an element was successfully highlighted.
     *
     * @callback HighlightCallback
     * @param {Element} element The element successfully highlighted.
     * @returns {void}
     * @global
     * @public
    */

    /**
     * @callback HookCallback
     * @param {Object<string, any>} env The environment variables of the hook.
     * @returns {void}
     * @global
     * @public
     */


    /* **********************************************
         Begin prism-markup.js
    ********************************************** */

    Prism.languages.markup = {
    	'comment': /<!--[\s\S]*?-->/,
    	'prolog': /<\?[\s\S]+?\?>/,
    	'doctype': {
    		// https://www.w3.org/TR/xml/#NT-doctypedecl
    		pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    		greedy: true,
    		inside: {
    			'internal-subset': {
    				pattern: /(\[)[\s\S]+(?=\]>$)/,
    				lookbehind: true,
    				greedy: true,
    				inside: null // see below
    			},
    			'string': {
    				pattern: /"[^"]*"|'[^']*'/,
    				greedy: true
    			},
    			'punctuation': /^<!|>$|[[\]]/,
    			'doctype-tag': /^DOCTYPE/,
    			'name': /[^\s<>'"]+/
    		}
    	},
    	'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
    	'tag': {
    		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    		greedy: true,
    		inside: {
    			'tag': {
    				pattern: /^<\/?[^\s>\/]+/,
    				inside: {
    					'punctuation': /^<\/?/,
    					'namespace': /^[^\s>\/:]+:/
    				}
    			},
    			'attr-value': {
    				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
    				inside: {
    					'punctuation': [
    						{
    							pattern: /^=/,
    							alias: 'attr-equals'
    						},
    						/"|'/
    					]
    				}
    			},
    			'punctuation': /\/?>/,
    			'attr-name': {
    				pattern: /[^\s>\/]+/,
    				inside: {
    					'namespace': /^[^\s>\/:]+:/
    				}
    			}

    		}
    	},
    	'entity': [
    		{
    			pattern: /&[\da-z]{1,8};/i,
    			alias: 'named-entity'
    		},
    		/&#x?[\da-f]{1,8};/i
    	]
    };

    Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
    	Prism.languages.markup['entity'];
    Prism.languages.markup['doctype'].inside['internal-subset'].inside = Prism.languages.markup;

    // Plugin to make entity title show the real entity, idea by Roman Komarov
    Prism.hooks.add('wrap', function (env) {

    	if (env.type === 'entity') {
    		env.attributes['title'] = env.content.replace(/&amp;/, '&');
    	}
    });

    Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
    	/**
    	 * Adds an inlined language to markup.
    	 *
    	 * An example of an inlined language is CSS with `<style>` tags.
    	 *
    	 * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
    	 * case insensitive.
    	 * @param {string} lang The language key.
    	 * @example
    	 * addInlined('style', 'css');
    	 */
    	value: function addInlined(tagName, lang) {
    		var includedCdataInside = {};
    		includedCdataInside['language-' + lang] = {
    			pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
    			lookbehind: true,
    			inside: Prism.languages[lang]
    		};
    		includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;

    		var inside = {
    			'included-cdata': {
    				pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
    				inside: includedCdataInside
    			}
    		};
    		inside['language-' + lang] = {
    			pattern: /[\s\S]+/,
    			inside: Prism.languages[lang]
    		};

    		var def = {};
    		def[tagName] = {
    			pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () { return tagName; }), 'i'),
    			lookbehind: true,
    			greedy: true,
    			inside: inside
    		};

    		Prism.languages.insertBefore('markup', 'cdata', def);
    	}
    });

    Prism.languages.html = Prism.languages.markup;
    Prism.languages.mathml = Prism.languages.markup;
    Prism.languages.svg = Prism.languages.markup;

    Prism.languages.xml = Prism.languages.extend('markup', {});
    Prism.languages.ssml = Prism.languages.xml;
    Prism.languages.atom = Prism.languages.xml;
    Prism.languages.rss = Prism.languages.xml;


    /* **********************************************
         Begin prism-css.js
    ********************************************** */

    (function (Prism) {

    	var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;

    	Prism.languages.css = {
    		'comment': /\/\*[\s\S]*?\*\//,
    		'atrule': {
    			pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
    			inside: {
    				'rule': /^@[\w-]+/,
    				'selector-function-argument': {
    					pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
    					lookbehind: true,
    					alias: 'selector'
    				},
    				'keyword': {
    					pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
    					lookbehind: true
    				}
    				// See rest below
    			}
    		},
    		'url': {
    			// https://drafts.csswg.org/css-values-3/#urls
    			pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
    			greedy: true,
    			inside: {
    				'function': /^url/i,
    				'punctuation': /^\(|\)$/,
    				'string': {
    					pattern: RegExp('^' + string.source + '$'),
    					alias: 'url'
    				}
    			}
    		},
    		'selector': RegExp('[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
    		'string': {
    			pattern: string,
    			greedy: true
    		},
    		'property': /(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
    		'important': /!important\b/i,
    		'function': /[-a-z0-9]+(?=\()/i,
    		'punctuation': /[(){};:,]/
    	};

    	Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

    	var markup = Prism.languages.markup;
    	if (markup) {
    		markup.tag.addInlined('style', 'css');

    		Prism.languages.insertBefore('inside', 'attr-value', {
    			'style-attr': {
    				pattern: /(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,
    				lookbehind: true,
    				inside: {
    					'attr-value': {
    						pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
    						inside: {
    							'style': {
    								pattern: /(["'])[\s\S]+(?=["']$)/,
    								lookbehind: true,
    								alias: 'language-css',
    								inside: Prism.languages.css
    							},
    							'punctuation': [
    								{
    									pattern: /^=/,
    									alias: 'attr-equals'
    								},
    								/"|'/
    							]
    						}
    					},
    					'attr-name': /^style/i
    				}
    			}
    		}, markup.tag);
    	}

    }(Prism));


    /* **********************************************
         Begin prism-clike.js
    ********************************************** */

    Prism.languages.clike = {
    	'comment': [
    		{
    			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
    			lookbehind: true,
    			greedy: true
    		},
    		{
    			pattern: /(^|[^\\:])\/\/.*/,
    			lookbehind: true,
    			greedy: true
    		}
    	],
    	'string': {
    		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    		greedy: true
    	},
    	'class-name': {
    		pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
    		lookbehind: true,
    		inside: {
    			'punctuation': /[.\\]/
    		}
    	},
    	'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    	'boolean': /\b(?:true|false)\b/,
    	'function': /\w+(?=\()/,
    	'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    	'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    	'punctuation': /[{}[\];(),.:]/
    };


    /* **********************************************
         Begin prism-javascript.js
    ********************************************** */

    Prism.languages.javascript = Prism.languages.extend('clike', {
    	'class-name': [
    		Prism.languages.clike['class-name'],
    		{
    			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
    			lookbehind: true
    		}
    	],
    	'keyword': [
    		{
    			pattern: /((?:^|})\s*)(?:catch|finally)\b/,
    			lookbehind: true
    		},
    		{
    			pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
    			lookbehind: true
    		},
    	],
    	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    	'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    	'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
    	'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
    });

    Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;

    Prism.languages.insertBefore('javascript', 'keyword', {
    	'regex': {
    		pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
    		lookbehind: true,
    		greedy: true,
    		inside: {
    			'regex-source': {
    				pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
    				lookbehind: true,
    				alias: 'language-regex',
    				inside: Prism.languages.regex
    			},
    			'regex-flags': /[a-z]+$/,
    			'regex-delimiter': /^\/|\/$/
    		}
    	},
    	// This must be declared before keyword because we use "function" inside the look-forward
    	'function-variable': {
    		pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
    		alias: 'function'
    	},
    	'parameter': [
    		{
    			pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
    			lookbehind: true,
    			inside: Prism.languages.javascript
    		},
    		{
    			pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
    			inside: Prism.languages.javascript
    		},
    		{
    			pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
    			lookbehind: true,
    			inside: Prism.languages.javascript
    		},
    		{
    			pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
    			lookbehind: true,
    			inside: Prism.languages.javascript
    		}
    	],
    	'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    });

    Prism.languages.insertBefore('javascript', 'string', {
    	'template-string': {
    		pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
    		greedy: true,
    		inside: {
    			'template-punctuation': {
    				pattern: /^`|`$/,
    				alias: 'string'
    			},
    			'interpolation': {
    				pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
    				lookbehind: true,
    				inside: {
    					'interpolation-punctuation': {
    						pattern: /^\${|}$/,
    						alias: 'punctuation'
    					},
    					rest: Prism.languages.javascript
    				}
    			},
    			'string': /[\s\S]+/
    		}
    	}
    });

    if (Prism.languages.markup) {
    	Prism.languages.markup.tag.addInlined('script', 'javascript');
    }

    Prism.languages.js = Prism.languages.javascript;


    /* **********************************************
         Begin prism-file-highlight.js
    ********************************************** */

    (function () {
    	if (typeof self === 'undefined' || !self.Prism || !self.document) {
    		return;
    	}

    	// https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
    	if (!Element.prototype.matches) {
    		Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    	}

    	var Prism = window.Prism;

    	var LOADING_MESSAGE = 'Loading…';
    	var FAILURE_MESSAGE = function (status, message) {
    		return '✖ Error ' + status + ' while fetching file: ' + message;
    	};
    	var FAILURE_EMPTY_MESSAGE = '✖ Error: File does not exist or is empty';

    	var EXTENSIONS = {
    		'js': 'javascript',
    		'py': 'python',
    		'rb': 'ruby',
    		'ps1': 'powershell',
    		'psm1': 'powershell',
    		'sh': 'bash',
    		'bat': 'batch',
    		'h': 'c',
    		'tex': 'latex'
    	};

    	var STATUS_ATTR = 'data-src-status';
    	var STATUS_LOADING = 'loading';
    	var STATUS_LOADED = 'loaded';
    	var STATUS_FAILED = 'failed';

    	var SELECTOR = 'pre[data-src]:not([' + STATUS_ATTR + '="' + STATUS_LOADED + '"])'
    		+ ':not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';

    	var lang = /\blang(?:uage)?-([\w-]+)\b/i;

    	/**
    	 * Sets the Prism `language-xxxx` or `lang-xxxx` class to the given language.
    	 *
    	 * @param {HTMLElement} element
    	 * @param {string} language
    	 * @returns {void}
    	 */
    	function setLanguageClass(element, language) {
    		var className = element.className;
    		className = className.replace(lang, ' ') + ' language-' + language;
    		element.className = className.replace(/\s+/g, ' ').trim();
    	}


    	Prism.hooks.add('before-highlightall', function (env) {
    		env.selector += ', ' + SELECTOR;
    	});

    	Prism.hooks.add('before-sanity-check', function (env) {
    		var pre = /** @type {HTMLPreElement} */ (env.element);
    		if (pre.matches(SELECTOR)) {
    			env.code = ''; // fast-path the whole thing and go to complete

    			pre.setAttribute(STATUS_ATTR, STATUS_LOADING); // mark as loading

    			// add code element with loading message
    			var code = pre.appendChild(document.createElement('CODE'));
    			code.textContent = LOADING_MESSAGE;

    			var src = pre.getAttribute('data-src');

    			var language = env.language;
    			if (language === 'none') {
    				// the language might be 'none' because there is no language set;
    				// in this case, we want to use the extension as the language
    				var extension = (/\.(\w+)$/.exec(src) || [, 'none'])[1];
    				language = EXTENSIONS[extension] || extension;
    			}

    			// set language classes
    			setLanguageClass(code, language);
    			setLanguageClass(pre, language);

    			// preload the language
    			var autoloader = Prism.plugins.autoloader;
    			if (autoloader) {
    				autoloader.loadLanguages(language);
    			}

    			// load file
    			var xhr = new XMLHttpRequest();
    			xhr.open('GET', src, true);
    			xhr.onreadystatechange = function () {
    				if (xhr.readyState == 4) {
    					if (xhr.status < 400 && xhr.responseText) {
    						// mark as loaded
    						pre.setAttribute(STATUS_ATTR, STATUS_LOADED);

    						// highlight code
    						code.textContent = xhr.responseText;
    						Prism.highlightElement(code);

    					} else {
    						// mark as failed
    						pre.setAttribute(STATUS_ATTR, STATUS_FAILED);

    						if (xhr.status >= 400) {
    							code.textContent = FAILURE_MESSAGE(xhr.status, xhr.statusText);
    						} else {
    							code.textContent = FAILURE_EMPTY_MESSAGE;
    						}
    					}
    				}
    			};
    			xhr.send(null);
    		}
    	});

    	Prism.plugins.fileHighlight = {
    		/**
    		 * Executes the File Highlight plugin for all matching `pre` elements under the given container.
    		 *
    		 * Note: Elements which are already loaded or currently loading will not be touched by this method.
    		 *
    		 * @param {ParentNode} [container=document]
    		 */
    		highlight: function highlight(container) {
    			var elements = (container || document).querySelectorAll(SELECTOR);

    			for (var i = 0, element; element = elements[i++];) {
    				Prism.highlightElement(element);
    			}
    		}
    	};

    	var logged = false;
    	/** @deprecated Use `Prism.plugins.fileHighlight.highlight` instead. */
    	Prism.fileHighlight = function () {
    		if (!logged) {
    			console.warn('Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.');
    			logged = true;
    		}
    		Prism.plugins.fileHighlight.highlight.apply(this, arguments);
    	};

    })();
    });

    const blocks = '(if|else if|await|then|catch|each|html|debug)';

    Prism.languages.svelte = Prism.languages.extend('markup', {
    	each: {
    		pattern: new RegExp(
    			'{[#/]each' +
    				'(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}'
    		),
    		inside: {
    			'language-javascript': [
    				{
    					pattern: /(as[\s\S]*)\([\s\S]*\)(?=\s*\})/,
    					lookbehind: true,
    					inside: Prism.languages['javascript'],
    				},
    				{
    					pattern: /(as[\s]*)[\s\S]*(?=\s*)/,
    					lookbehind: true,
    					inside: Prism.languages['javascript'],
    				},
    				{
    					pattern: /(#each[\s]*)[\s\S]*(?=as)/,
    					lookbehind: true,
    					inside: Prism.languages['javascript'],
    				},
    			],
    			keyword: /[#/]each|as/,
    			punctuation: /{|}/,
    		},
    	},
    	block: {
    		pattern: new RegExp(
    			'{[#:/@]/s' +
    				blocks +
    				'(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}'
    		),
    		inside: {
    			punctuation: /^{|}$/,
    			keyword: [new RegExp('[#:/@]' + blocks + '( )*'), /as/, /then/],
    			'language-javascript': {
    				pattern: /[\s\S]*/,
    				inside: Prism.languages['javascript'],
    			},
    		},
    	},
    	tag: {
    		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?:"[^"]*"|'[^']*'|{[\s\S]+?}(?=[\s/>])))|(?=[\s/>])))+)?\s*\/?>/i,
    		greedy: true,
    		inside: {
    			tag: {
    				pattern: /^<\/?[^\s>\/]+/i,
    				inside: {
    					punctuation: /^<\/?/,
    					namespace: /^[^\s>\/:]+:/,
    				},
    			},
    			'language-javascript': {
    				pattern: /\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,
    				inside: Prism.languages['javascript'],
    			},
    			'attr-value': {
    				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
    				inside: {
    					punctuation: [
    						/^=/,
    						{
    							pattern: /^(\s*)["']|["']$/,
    							lookbehind: true,
    						},
    					],
    					'language-javascript': {
    						pattern: /{[\s\S]+}/,
    						inside: Prism.languages['javascript'],
    					},
    				},
    			},
    			punctuation: /\/?>/,
    			'attr-name': {
    				pattern: /[^\s>\/]+/,
    				inside: {
    					namespace: /^[^\s>\/:]+:/,
    				},
    			},
    		},
    	},
    	'language-javascript': {
    		pattern: /\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,
    		lookbehind: true,
    		inside: Prism.languages['javascript'],
    	},
    });

    Prism.languages.svelte['tag'].inside['attr-value'].inside['entity'] =
    	Prism.languages.svelte['entity'];

    Prism.hooks.add('wrap', env => {
    	if (env.type === 'entity') {
    		env.attributes['title'] = env.content.replace(/&amp;/, '&');
    	}
    });

    Object.defineProperty(Prism.languages.svelte.tag, 'addInlined', {
    	value: function addInlined(tagName, lang) {
    		const includedCdataInside = {};
    		includedCdataInside['language-' + lang] = {
    			pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
    			lookbehind: true,
    			inside: Prism.languages[lang],
    		};
    		includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;

    		const inside = {
    			'included-cdata': {
    				pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
    				inside: includedCdataInside,
    			},
    		};
    		inside['language-' + lang] = {
    			pattern: /[\s\S]+/,
    			inside: Prism.languages[lang],
    		};

    		const def = {};
    		def[tagName] = {
    			pattern: RegExp(
    				/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(
    					/__/g,
    					tagName
    				),
    				'i'
    			),
    			lookbehind: true,
    			greedy: true,
    			inside,
    		};

    		Prism.languages.insertBefore('svelte', 'cdata', def);
    	},
    });

    Prism.languages.svelte.tag.addInlined('style', 'css');
    Prism.languages.svelte.tag.addInlined('script', 'javascript');

    /* node_modules/svelte-prism/src/Prism.svelte generated by Svelte v3.38.1 */
    const file$o = "node_modules/svelte-prism/src/Prism.svelte";

    // (37:4) {:else}
    function create_else_block(ctx) {
    	let html_tag;
    	let html_anchor;

    	const block = {
    		c: function create() {
    			html_anchor = empty();
    			html_tag = new HtmlTag(html_anchor);
    		},
    		m: function mount(target, anchor) {
    			html_tag.m(/*formattedCode*/ ctx[2], target, anchor);
    			insert_dev(target, html_anchor, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*formattedCode*/ 4) html_tag.p(/*formattedCode*/ ctx[2]);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(html_anchor);
    			if (detaching) html_tag.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block.name,
    		type: "else",
    		source: "(37:4) {:else}",
    		ctx
    	});

    	return block;
    }

    // (35:4) {#if language === 'none'}
    function create_if_block(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text(/*formattedCode*/ ctx[2]);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*formattedCode*/ 4) set_data_dev(t, /*formattedCode*/ ctx[2]);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block.name,
    		type: "if",
    		source: "(35:4) {#if language === 'none'}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$o(ctx) {
    	let code0;
    	let t;
    	let pre;
    	let code1;
    	let code1_class_value;
    	let pre_class_value;
    	let current;
    	const default_slot_template = /*#slots*/ ctx[6].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);

    	function select_block_type(ctx, dirty) {
    		if (/*language*/ ctx[0] === "none") return create_if_block;
    		return create_else_block;
    	}

    	let current_block_type = select_block_type(ctx);
    	let if_block = current_block_type(ctx);

    	const block = {
    		c: function create() {
    			code0 = element("code");
    			if (default_slot) default_slot.c();
    			t = space();
    			pre = element("pre");
    			code1 = element("code");
    			if_block.c();
    			set_style(code0, "display", "none");
    			add_location(code0, file$o, 28, 0, 766);
    			attr_dev(code1, "class", code1_class_value = "language-" + /*language*/ ctx[0]);
    			add_location(code1, file$o, 33, 2, 902);
    			attr_dev(pre, "class", pre_class_value = "language-" + /*language*/ ctx[0]);
    			attr_dev(pre, "command-line", "");
    			attr_dev(pre, "data-output", "2-17");
    			add_location(pre, file$o, 32, 0, 834);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, code0, anchor);

    			if (default_slot) {
    				default_slot.m(code0, null);
    			}

    			/*code0_binding*/ ctx[7](code0);
    			insert_dev(target, t, anchor);
    			insert_dev(target, pre, anchor);
    			append_dev(pre, code1);
    			if_block.m(code1, null);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[5], dirty, null, null);
    				}
    			}

    			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
    				if_block.p(ctx, dirty);
    			} else {
    				if_block.d(1);
    				if_block = current_block_type(ctx);

    				if (if_block) {
    					if_block.c();
    					if_block.m(code1, null);
    				}
    			}

    			if (!current || dirty & /*language*/ 1 && code1_class_value !== (code1_class_value = "language-" + /*language*/ ctx[0])) {
    				attr_dev(code1, "class", code1_class_value);
    			}

    			if (!current || dirty & /*language*/ 1 && pre_class_value !== (pre_class_value = "language-" + /*language*/ ctx[0])) {
    				attr_dev(pre, "class", pre_class_value);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(code0);
    			if (default_slot) default_slot.d(detaching);
    			/*code0_binding*/ ctx[7](null);
    			if (detaching) detach_dev(t);
    			if (detaching) detach_dev(pre);
    			if_block.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$o.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    const prism = prism$1;
    const highlight = prism$1.highlightElement;
    const globalConfig = { transform: x => x };

    function instance$o($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Prism", slots, ['default']);
    	let { language = "javascript" } = $$props;
    	let { source = "" } = $$props;
    	let { transform = x => x } = $$props;
    	let element, formattedCode;

    	function highlightCode() {
    		const grammar = prism.languages[language];
    		let body = source || element.textContent;
    		body = globalConfig.transform(body);
    		body = transform(body);

    		$$invalidate(2, formattedCode = language === "none"
    		? body
    		: prism.highlight(body, grammar, language));
    	}

    	function code0_binding($$value) {
    		binding_callbacks[$$value ? "unshift" : "push"](() => {
    			element = $$value;
    			$$invalidate(1, element);
    		});
    	}

    	$$self.$$set = $$new_props => {
    		$$invalidate(9, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    		if ("language" in $$new_props) $$invalidate(0, language = $$new_props.language);
    		if ("source" in $$new_props) $$invalidate(3, source = $$new_props.source);
    		if ("transform" in $$new_props) $$invalidate(4, transform = $$new_props.transform);
    		if ("$$scope" in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		_prism: prism$1,
    		prism,
    		highlight,
    		globalConfig,
    		tick,
    		language,
    		source,
    		transform,
    		element,
    		formattedCode,
    		highlightCode
    	});

    	$$self.$inject_state = $$new_props => {
    		$$invalidate(9, $$props = assign(assign({}, $$props), $$new_props));
    		if ("language" in $$props) $$invalidate(0, language = $$new_props.language);
    		if ("source" in $$props) $$invalidate(3, source = $$new_props.source);
    		if ("transform" in $$props) $$invalidate(4, transform = $$new_props.transform);
    		if ("element" in $$props) $$invalidate(1, element = $$new_props.element);
    		if ("formattedCode" in $$props) $$invalidate(2, formattedCode = $$new_props.formattedCode);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		$$props && (source || element) && highlightCode();
    	};

    	$$props = exclude_internal_props($$props);

    	return [
    		language,
    		element,
    		formattedCode,
    		source,
    		transform,
    		$$scope,
    		slots,
    		code0_binding
    	];
    }

    class Prism$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$o, create_fragment$o, safe_not_equal, { language: 0, source: 3, transform: 4 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Prism",
    			options,
    			id: create_fragment$o.name
    		});
    	}

    	get language() {
    		throw new Error("<Prism>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set language(value) {
    		throw new Error("<Prism>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get source() {
    		throw new Error("<Prism>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set source(value) {
    		throw new Error("<Prism>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get transform() {
    		throw new Error("<Prism>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set transform(value) {
    		throw new Error("<Prism>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* docs_src/components/Accordion.svelte generated by Svelte v3.38.1 */
    const file$n = "docs_src/components/Accordion.svelte";

    function create_fragment$n(ctx) {
    	let div;
    	let h1;
    	let t1;
    	let prism0;
    	let t2;
    	let h20;
    	let t4;
    	let accordion0;
    	let t5;
    	let prism1;
    	let t6;
    	let h21;
    	let t8;
    	let accordion1;
    	let t9;
    	let prism2;
    	let t10;
    	let h22;
    	let t12;
    	let accordion2;
    	let t13;
    	let prism3;
    	let current;

    	prism0 = new Prism$1({
    			props: {
    				language: "js",
    				source: `
    import { Accordion } from '@ekstra-bladet/designsystem';

    // Example tabs
    let tabs = [
      { title: 'Tab 1', content: 'content 1' },
      { title: 'Tab 2', content: 'content 2' },
    ];
    `
    			},
    			$$inline: true
    		});

    	accordion0 = new Accordion({
    			props: { tabs: /*tabs*/ ctx[0] },
    			$$inline: true
    		});

    	prism1 = new Prism$1({
    			props: {
    				language: "html",
    				source: `<Accordion {tabs} />`
    			},
    			$$inline: true
    		});

    	accordion1 = new Accordion({
    			props: {
    				dataTheme: "lightmode",
    				tabs: /*tabs*/ ctx[0]
    			},
    			$$inline: true
    		});

    	prism2 = new Prism$1({
    			props: {
    				language: "html",
    				source: `<Accordion dataTheme="lightmode" {tabs} />`
    			},
    			$$inline: true
    		});

    	accordion2 = new Accordion({
    			props: {
    				dataTheme: "darkmode",
    				tabs: /*tabs*/ ctx[0]
    			},
    			$$inline: true
    		});

    	prism3 = new Prism$1({
    			props: {
    				language: "html",
    				source: `<Accordion dataTheme="darkmode" {tabs} />`
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div = element("div");
    			h1 = element("h1");
    			h1.textContent = "Accordion";
    			t1 = space();
    			create_component(prism0.$$.fragment);
    			t2 = space();
    			h20 = element("h2");
    			h20.textContent = "Default accordion";
    			t4 = space();
    			create_component(accordion0.$$.fragment);
    			t5 = space();
    			create_component(prism1.$$.fragment);
    			t6 = space();
    			h21 = element("h2");
    			h21.textContent = "Accordion with lightmode";
    			t8 = space();
    			create_component(accordion1.$$.fragment);
    			t9 = space();
    			create_component(prism2.$$.fragment);
    			t10 = space();
    			h22 = element("h2");
    			h22.textContent = "Accordion with darkmode";
    			t12 = space();
    			create_component(accordion2.$$.fragment);
    			t13 = space();
    			create_component(prism3.$$.fragment);
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$n, 19, 2, 1001);
    			add_location(h20, file$n, 34, 2, 1297);
    			add_location(h21, file$n, 40, 2, 1412);
    			add_location(h22, file$n, 45, 2, 1577);
    			attr_dev(div, "class", "grid-width--small");
    			add_location(div, file$n, 18, 0, 967);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, h1);
    			append_dev(div, t1);
    			mount_component(prism0, div, null);
    			append_dev(div, t2);
    			append_dev(div, h20);
    			append_dev(div, t4);
    			mount_component(accordion0, div, null);
    			append_dev(div, t5);
    			mount_component(prism1, div, null);
    			append_dev(div, t6);
    			append_dev(div, h21);
    			append_dev(div, t8);
    			mount_component(accordion1, div, null);
    			append_dev(div, t9);
    			mount_component(prism2, div, null);
    			append_dev(div, t10);
    			append_dev(div, h22);
    			append_dev(div, t12);
    			mount_component(accordion2, div, null);
    			append_dev(div, t13);
    			mount_component(prism3, div, null);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism0.$$.fragment, local);
    			transition_in(accordion0.$$.fragment, local);
    			transition_in(prism1.$$.fragment, local);
    			transition_in(accordion1.$$.fragment, local);
    			transition_in(prism2.$$.fragment, local);
    			transition_in(accordion2.$$.fragment, local);
    			transition_in(prism3.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism0.$$.fragment, local);
    			transition_out(accordion0.$$.fragment, local);
    			transition_out(prism1.$$.fragment, local);
    			transition_out(accordion1.$$.fragment, local);
    			transition_out(prism2.$$.fragment, local);
    			transition_out(accordion2.$$.fragment, local);
    			transition_out(prism3.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_component(prism0);
    			destroy_component(accordion0);
    			destroy_component(prism1);
    			destroy_component(accordion1);
    			destroy_component(prism2);
    			destroy_component(accordion2);
    			destroy_component(prism3);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$n.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$n($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Accordion", slots, []);

    	let tabs = [
    		{
    			title: "Tab 1",
    			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis porttitor augue sed commodo. Etiam ornare arcu quis turpis pulvinar, ullamcorper ullamcorper nunc ullamcorper. Maecenas porttitor, erat in feugiat faucibus, velit sem luctus leo, nec congue tellus erat sit amet purus."
    		},
    		{
    			title: "Tab 2",
    			content: "Nam condimentum, dui sit amet convallis finibus, tellus mi molestie lorem, sed ornare mauris ex nec lectus. Pellentesque gravida molestie felis sit amet interdum."
    		},
    		{
    			title: "Tab 3",
    			content: "uspendisse at tincidunt eros, vel convallis nisi. Nam pulvinar viverra augue. Vivamus vitae ligula sit amet tellus interdum dictum. Donec accumsan facilisis urna, condimentum mollis diam gravida ac. Donec sed malesuada odio. "
    		}
    	];

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Accordion> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ Prism: Prism$1, Accordion, tabs });

    	$$self.$inject_state = $$props => {
    		if ("tabs" in $$props) $$invalidate(0, tabs = $$props.tabs);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [tabs];
    }

    class Accordion_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$n, create_fragment$n, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Accordion_1",
    			options,
    			id: create_fragment$n.name
    		});
    	}
    }

    /* docs_src/components/ArticleCard.svelte generated by Svelte v3.38.1 */

    const { console: console_1$3 } = globals;
    const file$m = "docs_src/components/ArticleCard.svelte";

    function create_fragment$m(ctx) {
    	let div;
    	let h1;
    	let t1;
    	let prism0;
    	let t2;
    	let p;
    	let t4;
    	let prism1;
    	let t5;
    	let articlecard0;
    	let t6;
    	let articlecard1;
    	let t7;
    	let articlecard2;
    	let t8;
    	let prism2;
    	let t9;
    	let articlecard3;
    	let t10;
    	let prism3;
    	let t11;
    	let articlecard4;
    	let t12;
    	let prism4;
    	let t13;
    	let articlecard5;
    	let t14;
    	let prism5;
    	let t15;
    	let h2;
    	let t17;
    	let articlecard6;
    	let t18;
    	let articlecard7;
    	let t19;
    	let articlecard8;
    	let t20;
    	let prism6;
    	let t21;
    	let articlecard9;
    	let current;

    	prism0 = new Prism$1({
    			props: {
    				language: "js",
    				source: `
    import { ArticleCard } from '@ekstra-bladet/designsystem';
    `
    			},
    			$$inline: true
    		});

    	prism1 = new Prism$1({
    			props: {
    				language: "js",
    				source: `
    interface IMediaOptions {
      className: string;
      height: string;
      src: string;
      width: string;
    }

    export let className: string = undefined;
    export let colorClass: string = undefined;
    export let href: string = undefined;
    export let loading: boolean = false;
    export let isBreaking: boolean = false;
    export let isPlus: boolean = false;
    export let media: Partial<IMediaOptions> = undefined;
    export let maxLines: number = undefined;
    export let section: string = undefined;
    export let style: string = undefined;
    export let theme: TThemes = undefined;
    export let timestamp: string = undefined;
    export let title: string;
    export let type: TCardType = undefined;
  `
    			},
    			$$inline: true
    		});

    	const articlecard0_spread_levels = [/*article*/ ctx[0], { intersection: true }];
    	let articlecard0_props = {};

    	for (let i = 0; i < articlecard0_spread_levels.length; i += 1) {
    		articlecard0_props = assign(articlecard0_props, articlecard0_spread_levels[i]);
    	}

    	articlecard0 = new ArticleCard({
    			props: articlecard0_props,
    			$$inline: true
    		});

    	const articlecard1_spread_levels = [/*article1*/ ctx[1]];
    	let articlecard1_props = {};

    	for (let i = 0; i < articlecard1_spread_levels.length; i += 1) {
    		articlecard1_props = assign(articlecard1_props, articlecard1_spread_levels[i]);
    	}

    	articlecard1 = new ArticleCard({
    			props: articlecard1_props,
    			$$inline: true
    		});

    	const articlecard2_spread_levels = [/*article2*/ ctx[2]];
    	let articlecard2_props = {};

    	for (let i = 0; i < articlecard2_spread_levels.length; i += 1) {
    		articlecard2_props = assign(articlecard2_props, articlecard2_spread_levels[i]);
    	}

    	articlecard2 = new ArticleCard({
    			props: articlecard2_props,
    			$$inline: true
    		});

    	prism2 = new Prism$1({
    			props: {
    				language: "js",
    				source: `
    let article = {
      href: '#',
      media: {
        src: 'https://via.placeholder.com/610x343&text=610x343',
      },
      section: 'Sport',
      colorClass: 'sport',
      timestamp: 'Thu Mar 18 2021 20:46:32',
      title: 'List element',
    };
    `
    			},
    			$$inline: true
    		});

    	articlecard3 = new ArticleCard({
    			props: {
    				colorClass: /*article*/ ctx[0].colorClass,
    				href: /*article*/ ctx[0].href,
    				media: undefined,
    				section: /*article*/ ctx[0].section,
    				timestamp: /*article*/ ctx[0].timestamp,
    				title: /*article*/ ctx[0].title
    			},
    			$$inline: true
    		});

    	prism3 = new Prism$1({
    			props: {
    				language: "html",
    				source: `
    <ArticleCard href="{article.href}" media="{{src:'https://via.placeholder.com/610x343&text=610x343'}}" section="{article.section}" timestamp="{article.timestamp}" title="{article.title}" />
    <ArticleCard {...article} />
  `
    			},
    			$$inline: true
    		});

    	const articlecard4_spread_levels = [
    		/*article*/ ctx[0],
    		{ title: "Small media card list element" },
    		{ type: "small-media" }
    	];

    	let articlecard4_props = {};

    	for (let i = 0; i < articlecard4_spread_levels.length; i += 1) {
    		articlecard4_props = assign(articlecard4_props, articlecard4_spread_levels[i]);
    	}

    	articlecard4 = new ArticleCard({
    			props: articlecard4_props,
    			$$inline: true
    		});

    	prism4 = new Prism$1({
    			props: {
    				language: "html",
    				source: `
    <ArticleCard {...article} title="Small media card list element" type="small-media" />
  `
    			},
    			$$inline: true
    		});

    	const articlecard5_spread_levels = [
    		/*article*/ ctx[0],
    		{ maxLines: 2 },
    		{
    			media: {
    				height: "115",
    				src: "https://via.placeholder.com/200x112&text=200x112",
    				width: "200"
    			}
    		},
    		{
    			title: "Small media reverse card list element"
    		},
    		{ type: "small-media--reverse" }
    	];

    	let articlecard5_props = {};

    	for (let i = 0; i < articlecard5_spread_levels.length; i += 1) {
    		articlecard5_props = assign(articlecard5_props, articlecard5_spread_levels[i]);
    	}

    	articlecard5 = new ArticleCard({
    			props: articlecard5_props,
    			$$inline: true
    		});

    	prism5 = new Prism$1({
    			props: {
    				language: "html",
    				source: `
    <ArticleCard
      {...article}
      maxLines={2}
      media="{{
        height: '115',
        src: 'https://via.placeholder.com/200x112&text=200x112',
        width: '200',
      }}"
      title="Small media reverse card list element"
      type="small-media--reverse" />
  `
    			},
    			$$inline: true
    		});

    	articlecard6 = new ArticleCard({ props: { loading: true }, $$inline: true });

    	articlecard7 = new ArticleCard({
    			props: { loading: true, type: "small-media" },
    			$$inline: true
    		});

    	articlecard8 = new ArticleCard({
    			props: {
    				loading: true,
    				type: "small-media--reverse"
    			},
    			$$inline: true
    		});

    	prism6 = new Prism$1({
    			props: {
    				language: "html",
    				source: `
      <ArticleCard loading={true} />
      <ArticleCard loading={true} type="small-media" />
      <ArticleCard loading={true} type="small-media--reverse" />
    `
    			},
    			$$inline: true
    		});

    	const articlecard9_spread_levels = [{ isPlus: true }, /*article*/ ctx[0], { style: "width: 215px;" }];
    	let articlecard9_props = {};

    	for (let i = 0; i < articlecard9_spread_levels.length; i += 1) {
    		articlecard9_props = assign(articlecard9_props, articlecard9_spread_levels[i]);
    	}

    	articlecard9 = new ArticleCard({
    			props: articlecard9_props,
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div = element("div");
    			h1 = element("h1");
    			h1.textContent = "ArticleCard";
    			t1 = space();
    			create_component(prism0.$$.fragment);
    			t2 = space();
    			p = element("p");
    			p.textContent = "ArticleCard attributer";
    			t4 = space();
    			create_component(prism1.$$.fragment);
    			t5 = space();
    			create_component(articlecard0.$$.fragment);
    			t6 = space();
    			create_component(articlecard1.$$.fragment);
    			t7 = space();
    			create_component(articlecard2.$$.fragment);
    			t8 = space();
    			create_component(prism2.$$.fragment);
    			t9 = space();
    			create_component(articlecard3.$$.fragment);
    			t10 = space();
    			create_component(prism3.$$.fragment);
    			t11 = space();
    			create_component(articlecard4.$$.fragment);
    			t12 = space();
    			create_component(prism4.$$.fragment);
    			t13 = space();
    			create_component(articlecard5.$$.fragment);
    			t14 = space();
    			create_component(prism5.$$.fragment);
    			t15 = space();
    			h2 = element("h2");
    			h2.textContent = "Loading placeholder";
    			t17 = space();
    			create_component(articlecard6.$$.fragment);
    			t18 = space();
    			create_component(articlecard7.$$.fragment);
    			t19 = space();
    			create_component(articlecard8.$$.fragment);
    			t20 = space();
    			create_component(prism6.$$.fragment);
    			t21 = space();
    			create_component(articlecard9.$$.fragment);
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$m, 39, 2, 1072);
    			add_location(p, file$m, 46, 2, 1229);
    			add_location(h2, file$m, 146, 2, 3775);
    			attr_dev(div, "class", "grid-width--small");
    			add_location(div, file$m, 38, 0, 1038);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, h1);
    			append_dev(div, t1);
    			mount_component(prism0, div, null);
    			append_dev(div, t2);
    			append_dev(div, p);
    			append_dev(div, t4);
    			mount_component(prism1, div, null);
    			append_dev(div, t5);
    			mount_component(articlecard0, div, null);
    			append_dev(div, t6);
    			mount_component(articlecard1, div, null);
    			append_dev(div, t7);
    			mount_component(articlecard2, div, null);
    			append_dev(div, t8);
    			mount_component(prism2, div, null);
    			append_dev(div, t9);
    			mount_component(articlecard3, div, null);
    			append_dev(div, t10);
    			mount_component(prism3, div, null);
    			append_dev(div, t11);
    			mount_component(articlecard4, div, null);
    			append_dev(div, t12);
    			mount_component(prism4, div, null);
    			append_dev(div, t13);
    			mount_component(articlecard5, div, null);
    			append_dev(div, t14);
    			mount_component(prism5, div, null);
    			append_dev(div, t15);
    			append_dev(div, h2);
    			append_dev(div, t17);
    			mount_component(articlecard6, div, null);
    			append_dev(div, t18);
    			mount_component(articlecard7, div, null);
    			append_dev(div, t19);
    			mount_component(articlecard8, div, null);
    			append_dev(div, t20);
    			mount_component(prism6, div, null);
    			append_dev(div, t21);
    			mount_component(articlecard9, div, null);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const articlecard0_changes = (dirty & /*article*/ 1)
    			? get_spread_update(articlecard0_spread_levels, [get_spread_object(/*article*/ ctx[0]), articlecard0_spread_levels[1]])
    			: {};

    			articlecard0.$set(articlecard0_changes);

    			const articlecard1_changes = (dirty & /*article1*/ 2)
    			? get_spread_update(articlecard1_spread_levels, [get_spread_object(/*article1*/ ctx[1])])
    			: {};

    			articlecard1.$set(articlecard1_changes);

    			const articlecard2_changes = (dirty & /*article2*/ 4)
    			? get_spread_update(articlecard2_spread_levels, [get_spread_object(/*article2*/ ctx[2])])
    			: {};

    			articlecard2.$set(articlecard2_changes);

    			const articlecard4_changes = (dirty & /*article*/ 1)
    			? get_spread_update(articlecard4_spread_levels, [
    					get_spread_object(/*article*/ ctx[0]),
    					articlecard4_spread_levels[1],
    					articlecard4_spread_levels[2]
    				])
    			: {};

    			articlecard4.$set(articlecard4_changes);

    			const articlecard5_changes = (dirty & /*article*/ 1)
    			? get_spread_update(articlecard5_spread_levels, [
    					get_spread_object(/*article*/ ctx[0]),
    					articlecard5_spread_levels[1],
    					articlecard5_spread_levels[2],
    					articlecard5_spread_levels[3],
    					articlecard5_spread_levels[4]
    				])
    			: {};

    			articlecard5.$set(articlecard5_changes);

    			const articlecard9_changes = (dirty & /*article*/ 1)
    			? get_spread_update(articlecard9_spread_levels, [
    					articlecard9_spread_levels[0],
    					get_spread_object(/*article*/ ctx[0]),
    					articlecard9_spread_levels[2]
    				])
    			: {};

    			articlecard9.$set(articlecard9_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism0.$$.fragment, local);
    			transition_in(prism1.$$.fragment, local);
    			transition_in(articlecard0.$$.fragment, local);
    			transition_in(articlecard1.$$.fragment, local);
    			transition_in(articlecard2.$$.fragment, local);
    			transition_in(prism2.$$.fragment, local);
    			transition_in(articlecard3.$$.fragment, local);
    			transition_in(prism3.$$.fragment, local);
    			transition_in(articlecard4.$$.fragment, local);
    			transition_in(prism4.$$.fragment, local);
    			transition_in(articlecard5.$$.fragment, local);
    			transition_in(prism5.$$.fragment, local);
    			transition_in(articlecard6.$$.fragment, local);
    			transition_in(articlecard7.$$.fragment, local);
    			transition_in(articlecard8.$$.fragment, local);
    			transition_in(prism6.$$.fragment, local);
    			transition_in(articlecard9.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism0.$$.fragment, local);
    			transition_out(prism1.$$.fragment, local);
    			transition_out(articlecard0.$$.fragment, local);
    			transition_out(articlecard1.$$.fragment, local);
    			transition_out(articlecard2.$$.fragment, local);
    			transition_out(prism2.$$.fragment, local);
    			transition_out(articlecard3.$$.fragment, local);
    			transition_out(prism3.$$.fragment, local);
    			transition_out(articlecard4.$$.fragment, local);
    			transition_out(prism4.$$.fragment, local);
    			transition_out(articlecard5.$$.fragment, local);
    			transition_out(prism5.$$.fragment, local);
    			transition_out(articlecard6.$$.fragment, local);
    			transition_out(articlecard7.$$.fragment, local);
    			transition_out(articlecard8.$$.fragment, local);
    			transition_out(prism6.$$.fragment, local);
    			transition_out(articlecard9.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_component(prism0);
    			destroy_component(prism1);
    			destroy_component(articlecard0);
    			destroy_component(articlecard1);
    			destroy_component(articlecard2);
    			destroy_component(prism2);
    			destroy_component(articlecard3);
    			destroy_component(prism3);
    			destroy_component(articlecard4);
    			destroy_component(prism4);
    			destroy_component(articlecard5);
    			destroy_component(prism5);
    			destroy_component(articlecard6);
    			destroy_component(articlecard7);
    			destroy_component(articlecard8);
    			destroy_component(prism6);
    			destroy_component(articlecard9);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$m.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$m($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("ArticleCard", slots, []);

    	let article = {
    		href: "#",
    		media: {
    			src: "https://via.placeholder.com/610x343&text=610x343"
    		},
    		section: "Sport",
    		colorClass: "sport",
    		timestamp: "Thu Mar 18 2021 20:46:32",
    		title: "List element"
    	};

    	let article1 = {
    		href: "#",
    		media: {
    			src: "https://via.placeholder.com/610x343&text=610x343"
    		},
    		section: "Underholdning",
    		colorClass: "underholdning",
    		timestamp: "Thu Mar 28 2021 20:46:32",
    		title: "List element"
    	};

    	let article2 = {
    		href: "#",
    		isPlus: true,
    		media: {
    			src: "https://via.placeholder.com/610x343&text=610x343"
    		},
    		section: "Udenlandsk fodbold",
    		colorClass: "sport",
    		timestamp: "Thu Mar 31 2021 20:46:32",
    		title: `Sag om rockervold: 'Når han er på stoffer, siger han ting, der ikke passer'`
    	};

    	document.addEventListener(
    		"articleCardInview",
    		function (e) {
    			console.log("articleCardInview", e);
    		},
    		false
    	);

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1$3.warn(`<ArticleCard> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		Prism: Prism$1,
    		ArticleCard,
    		article,
    		article1,
    		article2
    	});

    	$$self.$inject_state = $$props => {
    		if ("article" in $$props) $$invalidate(0, article = $$props.article);
    		if ("article1" in $$props) $$invalidate(1, article1 = $$props.article1);
    		if ("article2" in $$props) $$invalidate(2, article2 = $$props.article2);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [article, article1, article2];
    }

    class ArticleCard_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$m, create_fragment$m, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "ArticleCard_1",
    			options,
    			id: create_fragment$m.name
    		});
    	}
    }

    /* docs_src/components/Badge.svelte generated by Svelte v3.38.1 */
    const file$l = "docs_src/components/Badge.svelte";

    // (18:2) <Badge className="margin-s">
    function create_default_slot_12$3(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Standard badge");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_12$3.name,
    		type: "slot",
    		source: "(18:2) <Badge className=\\\"margin-s\\\">",
    		ctx
    	});

    	return block;
    }

    // (31:2) <Badge className="margin-s" type="primary">
    function create_default_slot_11$3(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Primary");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_11$3.name,
    		type: "slot",
    		source: "(31:2) <Badge className=\\\"margin-s\\\" type=\\\"primary\\\">",
    		ctx
    	});

    	return block;
    }

    // (32:2) <Badge className="margin-s" type="secondary">
    function create_default_slot_10$3(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Secondary");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_10$3.name,
    		type: "slot",
    		source: "(32:2) <Badge className=\\\"margin-s\\\" type=\\\"secondary\\\">",
    		ctx
    	});

    	return block;
    }

    // (33:2) <Badge className="margin-s" type="success">
    function create_default_slot_9$3(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Success");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_9$3.name,
    		type: "slot",
    		source: "(33:2) <Badge className=\\\"margin-s\\\" type=\\\"success\\\">",
    		ctx
    	});

    	return block;
    }

    // (34:2) <Badge className="margin-s" type="danger">
    function create_default_slot_8$4(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Danger");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_8$4.name,
    		type: "slot",
    		source: "(34:2) <Badge className=\\\"margin-s\\\" type=\\\"danger\\\">",
    		ctx
    	});

    	return block;
    }

    // (51:2) <Badge href="#" className="margin-s {BluedarkCSSClass}">
    function create_default_slot_7$4(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Bandekriminialitet");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_7$4.name,
    		type: "slot",
    		source: "(51:2) <Badge href=\\\"#\\\" className=\\\"margin-s {BluedarkCSSClass}\\\">",
    		ctx
    	});

    	return block;
    }

    // (52:2) <Badge href="#" className="margin-s {GreenCSSClass}">
    function create_default_slot_6$4(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Sport");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_6$4.name,
    		type: "slot",
    		source: "(52:2) <Badge href=\\\"#\\\" className=\\\"margin-s {GreenCSSClass}\\\">",
    		ctx
    	});

    	return block;
    }

    // (53:2) <Badge href="#" className="margin-s {GreendarkCSSClass}">
    function create_default_slot_5$5(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Nicklas Bendtner");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_5$5.name,
    		type: "slot",
    		source: "(53:2) <Badge href=\\\"#\\\" className=\\\"margin-s {GreendarkCSSClass}\\\">",
    		ctx
    	});

    	return block;
    }

    // (70:2) <Badge className="text-transform--uppercase">
    function create_default_slot_4$5(ctx) {
    	let small;

    	const block = {
    		c: function create() {
    			small = element("small");
    			small.textContent = "Small text uppercase";
    			add_location(small, file$l, 69, 47, 2068);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, small, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(small);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_4$5.name,
    		type: "slot",
    		source: "(70:2) <Badge className=\\\"text-transform--uppercase\\\">",
    		ctx
    	});

    	return block;
    }

    // (71:2) <Badge className="bg--native">
    function create_default_slot_3$5(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Native");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_3$5.name,
    		type: "slot",
    		source: "(71:2) <Badge className=\\\"bg--native\\\">",
    		ctx
    	});

    	return block;
    }

    // (72:2) <Badge className="badge--small fontsize-xsmall {GreendarkCSSClass}">
    function create_default_slot_2$5(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Greendark xsmall");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2$5.name,
    		type: "slot",
    		source: "(72:2) <Badge className=\\\"badge--small fontsize-xsmall {GreendarkCSSClass}\\\">",
    		ctx
    	});

    	return block;
    }

    // (73:2) <Badge>
    function create_default_slot_1$7(ctx) {
    	let t;
    	let i;

    	const block = {
    		c: function create() {
    			t = text("Badge with icon ");
    			i = element("i");
    			attr_dev(i, "class", "fa fal fa-trash");
    			add_location(i, file$l, 72, 25, 2279);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    			insert_dev(target, i, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    			if (detaching) detach_dev(i);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1$7.name,
    		type: "slot",
    		source: "(73:2) <Badge>",
    		ctx
    	});

    	return block;
    }

    // (90:2) <Badge onClick={() => alert('Hello World!')}>
    function create_default_slot$9(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Badge with onClick will have cursor pointer");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$9.name,
    		type: "slot",
    		source: "(90:2) <Badge onClick={() => alert('Hello World!')}>",
    		ctx
    	});

    	return block;
    }

    function create_fragment$l(ctx) {
    	let h1;
    	let t1;
    	let p0;
    	let t3;
    	let prism0;
    	let t4;
    	let div0;
    	let badge0;
    	let t5;
    	let prism1;
    	let t6;
    	let p1;
    	let t8;
    	let div1;
    	let badge1;
    	let t9;
    	let badge2;
    	let t10;
    	let badge3;
    	let t11;
    	let badge4;
    	let t12;
    	let prism2;
    	let t13;
    	let p2;
    	let t15;
    	let div2;
    	let badge5;
    	let t16;
    	let badge6;
    	let t17;
    	let badge7;
    	let t18;
    	let prism3;
    	let t19;
    	let p3;
    	let t21;
    	let div3;
    	let badge8;
    	let t22;
    	let badge9;
    	let t23;
    	let badge10;
    	let t24;
    	let badge11;
    	let t25;
    	let prism4;
    	let t26;
    	let p4;
    	let t28;
    	let div4;
    	let badge12;
    	let t29;
    	let prism5;
    	let current;

    	prism0 = new Prism$1({
    			props: {
    				language: "js",
    				source: `import { Badge } from '@ekstra-bladet/designsystem';`
    			},
    			$$inline: true
    		});

    	badge0 = new Badge({
    			props: {
    				className: "margin-s",
    				$$slots: { default: [create_default_slot_12$3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism1 = new Prism$1({
    			props: {
    				language: language$1,
    				source: `
  <div class="margin-l--tb">
    <Badge className="margin-s">Standard badge</Badge>
  </div>
  `
    			},
    			$$inline: true
    		});

    	badge1 = new Badge({
    			props: {
    				className: "margin-s",
    				type: "primary",
    				$$slots: { default: [create_default_slot_11$3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	badge2 = new Badge({
    			props: {
    				className: "margin-s",
    				type: "secondary",
    				$$slots: { default: [create_default_slot_10$3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	badge3 = new Badge({
    			props: {
    				className: "margin-s",
    				type: "success",
    				$$slots: { default: [create_default_slot_9$3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	badge4 = new Badge({
    			props: {
    				className: "margin-s",
    				type: "danger",
    				$$slots: { default: [create_default_slot_8$4] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism2 = new Prism$1({
    			props: {
    				language: language$1,
    				source: `
  <div class="margin-l--tb">
    <Badge className="margin-s" type="primary">Primary</Badge>
    <Badge className="margin-s" type="secondary">Secondary</Badge>
    <Badge className="margin-s" type="success">Success</Badge>
    <Badge className="margin-s" type="danger">Danger</Badge>
  </div>
  `
    			},
    			$$inline: true
    		});

    	badge5 = new Badge({
    			props: {
    				href: "#",
    				className: "margin-s " + BluedarkCSSClass,
    				$$slots: { default: [create_default_slot_7$4] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	badge6 = new Badge({
    			props: {
    				href: "#",
    				className: "margin-s " + GreenCSSClass,
    				$$slots: { default: [create_default_slot_6$4] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	badge7 = new Badge({
    			props: {
    				href: "#",
    				className: "margin-s " + GreendarkCSSClass,
    				$$slots: { default: [create_default_slot_5$5] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism3 = new Prism$1({
    			props: {
    				language: language$1,
    				source: `
  <div class="margin-l--tb">
    <Badge href="#" className="margin-s {BluedarkCSSClass}">Bandekriminialitet</Badge>
    <Badge href="#" className="margin-s {GreenCSSClass}">Sport</Badge>
    <Badge href="#" className="margin-s {GreendarkCSSClass}">Nicklas Bendtner</Badge>
  </div>
  `
    			},
    			$$inline: true
    		});

    	badge8 = new Badge({
    			props: {
    				className: "text-transform--uppercase",
    				$$slots: { default: [create_default_slot_4$5] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	badge9 = new Badge({
    			props: {
    				className: "bg--native",
    				$$slots: { default: [create_default_slot_3$5] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	badge10 = new Badge({
    			props: {
    				className: "badge--small fontsize-xsmall " + GreendarkCSSClass,
    				$$slots: { default: [create_default_slot_2$5] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	badge11 = new Badge({
    			props: {
    				$$slots: { default: [create_default_slot_1$7] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism4 = new Prism$1({
    			props: {
    				language: language$1,
    				source: `
  <div class="margin-l--tb">
    <Badge className="text-transform--uppercase"><small>Small text uppercase</small></Badge>
    <Badge className="bg--native">Native</Badge>
    <Badge className="badge--small {GreendarkCSSClass} fontsize-xsmall">Greendark xsmall</Badge>
    <Badge>Badge with icon <i class="fa fal fa-trash" /></Badge>
  </div>
  `
    			},
    			$$inline: true
    		});

    	badge12 = new Badge({
    			props: {
    				onClick: /*func*/ ctx[0],
    				$$slots: { default: [create_default_slot$9] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism5 = new Prism$1({
    			props: {
    				language: language$1,
    				source: `
  <div class="margin-l--tb">
    <Badge onClick={() => alert('Hello World!')}></Badge>
  </div>
  `
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Badge";
    			t1 = space();
    			p0 = element("p");
    			p0.textContent = "Badges kan benyttes som mærkater eller som indikation af tags. Størrelsen af et badge kan styres vha. font-sizes.";
    			t3 = space();
    			create_component(prism0.$$.fragment);
    			t4 = space();
    			div0 = element("div");
    			create_component(badge0.$$.fragment);
    			t5 = space();
    			create_component(prism1.$$.fragment);
    			t6 = space();
    			p1 = element("p");
    			p1.textContent = "Prædefinerede farver:";
    			t8 = space();
    			div1 = element("div");
    			create_component(badge1.$$.fragment);
    			t9 = space();
    			create_component(badge2.$$.fragment);
    			t10 = space();
    			create_component(badge3.$$.fragment);
    			t11 = space();
    			create_component(badge4.$$.fragment);
    			t12 = space();
    			create_component(prism2.$$.fragment);
    			t13 = space();
    			p2 = element("p");
    			p2.textContent = "Som links / aktive tags:";
    			t15 = space();
    			div2 = element("div");
    			create_component(badge5.$$.fragment);
    			t16 = space();
    			create_component(badge6.$$.fragment);
    			t17 = space();
    			create_component(badge7.$$.fragment);
    			t18 = space();
    			create_component(prism3.$$.fragment);
    			t19 = space();
    			p3 = element("p");
    			p3.textContent = "Andre farver og variationer:";
    			t21 = space();
    			div3 = element("div");
    			create_component(badge8.$$.fragment);
    			t22 = space();
    			create_component(badge9.$$.fragment);
    			t23 = space();
    			create_component(badge10.$$.fragment);
    			t24 = space();
    			create_component(badge11.$$.fragment);
    			t25 = space();
    			create_component(prism4.$$.fragment);
    			t26 = space();
    			p4 = element("p");
    			p4.textContent = "on:click:";
    			t28 = space();
    			div4 = element("div");
    			create_component(badge12.$$.fragment);
    			t29 = space();
    			create_component(prism5.$$.fragment);
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$l, 10, 0, 220);
    			add_location(p0, file$l, 12, 0, 254);
    			attr_dev(div0, "class", "margin-l--tb");
    			add_location(div0, file$l, 16, 0, 465);
    			add_location(p1, file$l, 28, 0, 686);
    			attr_dev(div1, "class", "margin-l--tb");
    			add_location(div1, file$l, 29, 0, 715);
    			add_location(p2, file$l, 48, 0, 1329);
    			attr_dev(div2, "class", "margin-l--tb");
    			add_location(div2, file$l, 49, 0, 1361);
    			add_location(p3, file$l, 66, 0, 1957);
    			attr_dev(div3, "class", "margin-l--tb");
    			add_location(div3, file$l, 68, 0, 1994);
    			add_location(p4, file$l, 87, 0, 2708);
    			attr_dev(div4, "class", "margin-l--tb");
    			add_location(div4, file$l, 88, 0, 2725);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, p0, anchor);
    			insert_dev(target, t3, anchor);
    			mount_component(prism0, target, anchor);
    			insert_dev(target, t4, anchor);
    			insert_dev(target, div0, anchor);
    			mount_component(badge0, div0, null);
    			insert_dev(target, t5, anchor);
    			mount_component(prism1, target, anchor);
    			insert_dev(target, t6, anchor);
    			insert_dev(target, p1, anchor);
    			insert_dev(target, t8, anchor);
    			insert_dev(target, div1, anchor);
    			mount_component(badge1, div1, null);
    			append_dev(div1, t9);
    			mount_component(badge2, div1, null);
    			append_dev(div1, t10);
    			mount_component(badge3, div1, null);
    			append_dev(div1, t11);
    			mount_component(badge4, div1, null);
    			insert_dev(target, t12, anchor);
    			mount_component(prism2, target, anchor);
    			insert_dev(target, t13, anchor);
    			insert_dev(target, p2, anchor);
    			insert_dev(target, t15, anchor);
    			insert_dev(target, div2, anchor);
    			mount_component(badge5, div2, null);
    			append_dev(div2, t16);
    			mount_component(badge6, div2, null);
    			append_dev(div2, t17);
    			mount_component(badge7, div2, null);
    			insert_dev(target, t18, anchor);
    			mount_component(prism3, target, anchor);
    			insert_dev(target, t19, anchor);
    			insert_dev(target, p3, anchor);
    			insert_dev(target, t21, anchor);
    			insert_dev(target, div3, anchor);
    			mount_component(badge8, div3, null);
    			append_dev(div3, t22);
    			mount_component(badge9, div3, null);
    			append_dev(div3, t23);
    			mount_component(badge10, div3, null);
    			append_dev(div3, t24);
    			mount_component(badge11, div3, null);
    			insert_dev(target, t25, anchor);
    			mount_component(prism4, target, anchor);
    			insert_dev(target, t26, anchor);
    			insert_dev(target, p4, anchor);
    			insert_dev(target, t28, anchor);
    			insert_dev(target, div4, anchor);
    			mount_component(badge12, div4, null);
    			insert_dev(target, t29, anchor);
    			mount_component(prism5, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const badge0_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				badge0_changes.$$scope = { dirty, ctx };
    			}

    			badge0.$set(badge0_changes);
    			const badge1_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				badge1_changes.$$scope = { dirty, ctx };
    			}

    			badge1.$set(badge1_changes);
    			const badge2_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				badge2_changes.$$scope = { dirty, ctx };
    			}

    			badge2.$set(badge2_changes);
    			const badge3_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				badge3_changes.$$scope = { dirty, ctx };
    			}

    			badge3.$set(badge3_changes);
    			const badge4_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				badge4_changes.$$scope = { dirty, ctx };
    			}

    			badge4.$set(badge4_changes);
    			const badge5_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				badge5_changes.$$scope = { dirty, ctx };
    			}

    			badge5.$set(badge5_changes);
    			const badge6_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				badge6_changes.$$scope = { dirty, ctx };
    			}

    			badge6.$set(badge6_changes);
    			const badge7_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				badge7_changes.$$scope = { dirty, ctx };
    			}

    			badge7.$set(badge7_changes);
    			const badge8_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				badge8_changes.$$scope = { dirty, ctx };
    			}

    			badge8.$set(badge8_changes);
    			const badge9_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				badge9_changes.$$scope = { dirty, ctx };
    			}

    			badge9.$set(badge9_changes);
    			const badge10_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				badge10_changes.$$scope = { dirty, ctx };
    			}

    			badge10.$set(badge10_changes);
    			const badge11_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				badge11_changes.$$scope = { dirty, ctx };
    			}

    			badge11.$set(badge11_changes);
    			const badge12_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				badge12_changes.$$scope = { dirty, ctx };
    			}

    			badge12.$set(badge12_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism0.$$.fragment, local);
    			transition_in(badge0.$$.fragment, local);
    			transition_in(prism1.$$.fragment, local);
    			transition_in(badge1.$$.fragment, local);
    			transition_in(badge2.$$.fragment, local);
    			transition_in(badge3.$$.fragment, local);
    			transition_in(badge4.$$.fragment, local);
    			transition_in(prism2.$$.fragment, local);
    			transition_in(badge5.$$.fragment, local);
    			transition_in(badge6.$$.fragment, local);
    			transition_in(badge7.$$.fragment, local);
    			transition_in(prism3.$$.fragment, local);
    			transition_in(badge8.$$.fragment, local);
    			transition_in(badge9.$$.fragment, local);
    			transition_in(badge10.$$.fragment, local);
    			transition_in(badge11.$$.fragment, local);
    			transition_in(prism4.$$.fragment, local);
    			transition_in(badge12.$$.fragment, local);
    			transition_in(prism5.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism0.$$.fragment, local);
    			transition_out(badge0.$$.fragment, local);
    			transition_out(prism1.$$.fragment, local);
    			transition_out(badge1.$$.fragment, local);
    			transition_out(badge2.$$.fragment, local);
    			transition_out(badge3.$$.fragment, local);
    			transition_out(badge4.$$.fragment, local);
    			transition_out(prism2.$$.fragment, local);
    			transition_out(badge5.$$.fragment, local);
    			transition_out(badge6.$$.fragment, local);
    			transition_out(badge7.$$.fragment, local);
    			transition_out(prism3.$$.fragment, local);
    			transition_out(badge8.$$.fragment, local);
    			transition_out(badge9.$$.fragment, local);
    			transition_out(badge10.$$.fragment, local);
    			transition_out(badge11.$$.fragment, local);
    			transition_out(prism4.$$.fragment, local);
    			transition_out(badge12.$$.fragment, local);
    			transition_out(prism5.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(p0);
    			if (detaching) detach_dev(t3);
    			destroy_component(prism0, detaching);
    			if (detaching) detach_dev(t4);
    			if (detaching) detach_dev(div0);
    			destroy_component(badge0);
    			if (detaching) detach_dev(t5);
    			destroy_component(prism1, detaching);
    			if (detaching) detach_dev(t6);
    			if (detaching) detach_dev(p1);
    			if (detaching) detach_dev(t8);
    			if (detaching) detach_dev(div1);
    			destroy_component(badge1);
    			destroy_component(badge2);
    			destroy_component(badge3);
    			destroy_component(badge4);
    			if (detaching) detach_dev(t12);
    			destroy_component(prism2, detaching);
    			if (detaching) detach_dev(t13);
    			if (detaching) detach_dev(p2);
    			if (detaching) detach_dev(t15);
    			if (detaching) detach_dev(div2);
    			destroy_component(badge5);
    			destroy_component(badge6);
    			destroy_component(badge7);
    			if (detaching) detach_dev(t18);
    			destroy_component(prism3, detaching);
    			if (detaching) detach_dev(t19);
    			if (detaching) detach_dev(p3);
    			if (detaching) detach_dev(t21);
    			if (detaching) detach_dev(div3);
    			destroy_component(badge8);
    			destroy_component(badge9);
    			destroy_component(badge10);
    			destroy_component(badge11);
    			if (detaching) detach_dev(t25);
    			destroy_component(prism4, detaching);
    			if (detaching) detach_dev(t26);
    			if (detaching) detach_dev(p4);
    			if (detaching) detach_dev(t28);
    			if (detaching) detach_dev(div4);
    			destroy_component(badge12);
    			if (detaching) detach_dev(t29);
    			destroy_component(prism5, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$l.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    const language$1 = "html";

    function instance$l($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Badge", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Badge> was created with unknown prop '${key}'`);
    	});

    	const func = () => alert("Hello World!");

    	$$self.$capture_state = () => ({
    		BluedarkCSSClass,
    		GreenCSSClass,
    		GreendarkCSSClass,
    		Prism: Prism$1,
    		Badge,
    		language: language$1
    	});

    	return [func];
    }

    class Badge_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$l, create_fragment$l, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Badge_1",
    			options,
    			id: create_fragment$l.name
    		});
    	}
    }

    /* docs_src/components/Button.svelte generated by Svelte v3.38.1 */

    const { console: console_1$2 } = globals;
    const file$k = "docs_src/components/Button.svelte";

    // (13:0) <Button   on:click={() => {     console.log('click the button');   }}>
    function create_default_slot_22$1(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Base button");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_22$1.name,
    		type: "slot",
    		source: "(13:0) <Button   on:click={() => {     console.log('click the button');   }}>",
    		ctx
    	});

    	return block;
    }

    // (27:0) <Button href="#" on:click={buttonClick}>
    function create_default_slot_21$1(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Base button as anchor element");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_21$1.name,
    		type: "slot",
    		source: "(27:0) <Button href=\\\"#\\\" on:click={buttonClick}>",
    		ctx
    	});

    	return block;
    }

    // (45:2) <Button className="margin-m" extension="solid">
    function create_default_slot_20$1(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Button solid");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_20$1.name,
    		type: "slot",
    		source: "(45:2) <Button className=\\\"margin-m\\\" extension=\\\"solid\\\">",
    		ctx
    	});

    	return block;
    }

    // (46:2) <Button className="margin-m" extension="link">
    function create_default_slot_19$1(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Button link");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_19$1.name,
    		type: "slot",
    		source: "(46:2) <Button className=\\\"margin-m\\\" extension=\\\"link\\\">",
    		ctx
    	});

    	return block;
    }

    // (47:2) <Button className="margin-m" extension="icon">
    function create_default_slot_18$1(ctx) {
    	let span;

    	const block = {
    		c: function create() {
    			span = element("span");
    			span.textContent = "×";
    			set_style(span, "font-size", "30px");
    			add_location(span, file$k, 47, 4, 1069);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, span, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(span);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_18$1.name,
    		type: "slot",
    		source: "(47:2) <Button className=\\\"margin-m\\\" extension=\\\"icon\\\">",
    		ctx
    	});

    	return block;
    }

    // (50:2) <Button className="margin-m" size="big">
    function create_default_slot_17$1(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Button big");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_17$1.name,
    		type: "slot",
    		source: "(50:2) <Button className=\\\"margin-m\\\" size=\\\"big\\\">",
    		ctx
    	});

    	return block;
    }

    // (51:2) <Button className="margin-m" size="small">
    function create_default_slot_16$1(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Button small");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_16$1.name,
    		type: "slot",
    		source: "(51:2) <Button className=\\\"margin-m\\\" size=\\\"small\\\">",
    		ctx
    	});

    	return block;
    }

    // (69:2) <Button className="margin-m" size="big" extension="solid">
    function create_default_slot_15$1(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Button big solid");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_15$1.name,
    		type: "slot",
    		source: "(69:2) <Button className=\\\"margin-m\\\" size=\\\"big\\\" extension=\\\"solid\\\">",
    		ctx
    	});

    	return block;
    }

    // (70:2) <Button className="margin-m" size="big" extension="link">
    function create_default_slot_14$1(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Button big link");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_14$1.name,
    		type: "slot",
    		source: "(70:2) <Button className=\\\"margin-m\\\" size=\\\"big\\\" extension=\\\"link\\\">",
    		ctx
    	});

    	return block;
    }

    // (71:2) <Button className="margin-m" size="big" extension="icon">
    function create_default_slot_13$2(ctx) {
    	let span;

    	const block = {
    		c: function create() {
    			span = element("span");
    			span.textContent = "×";
    			set_style(span, "font-size", "30px");
    			add_location(span, file$k, 71, 4, 2040);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, span, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(span);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_13$2.name,
    		type: "slot",
    		source: "(71:2) <Button className=\\\"margin-m\\\" size=\\\"big\\\" extension=\\\"icon\\\">",
    		ctx
    	});

    	return block;
    }

    // (76:2) <Button className="margin-m" size="small" extension="solid">
    function create_default_slot_12$2(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Button small solid");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_12$2.name,
    		type: "slot",
    		source: "(76:2) <Button className=\\\"margin-m\\\" size=\\\"small\\\" extension=\\\"solid\\\">",
    		ctx
    	});

    	return block;
    }

    // (77:2) <Button className="margin-m" size="small" extension="link">
    function create_default_slot_11$2(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Button small link");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_11$2.name,
    		type: "slot",
    		source: "(77:2) <Button className=\\\"margin-m\\\" size=\\\"small\\\" extension=\\\"link\\\">",
    		ctx
    	});

    	return block;
    }

    // (78:2) <Button className="margin-m" size="small" extension="icon">
    function create_default_slot_10$2(ctx) {
    	let span;

    	const block = {
    		c: function create() {
    			span = element("span");
    			span.textContent = "×";
    			set_style(span, "font-size", "30px");
    			add_location(span, file$k, 78, 4, 2367);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, span, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(span);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_10$2.name,
    		type: "slot",
    		source: "(78:2) <Button className=\\\"margin-m\\\" size=\\\"small\\\" extension=\\\"icon\\\">",
    		ctx
    	});

    	return block;
    }

    // (99:2) <Button className="margin-m" type="primary">
    function create_default_slot_9$2(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Button primary");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_9$2.name,
    		type: "slot",
    		source: "(99:2) <Button className=\\\"margin-m\\\" type=\\\"primary\\\">",
    		ctx
    	});

    	return block;
    }

    // (100:2) <Button className="margin-m" type="secondary">
    function create_default_slot_8$3(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Button secondary");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_8$3.name,
    		type: "slot",
    		source: "(100:2) <Button className=\\\"margin-m\\\" type=\\\"secondary\\\">",
    		ctx
    	});

    	return block;
    }

    // (101:2) <Button className="margin-m" type="accept">
    function create_default_slot_7$3(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Button accept");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_7$3.name,
    		type: "slot",
    		source: "(101:2) <Button className=\\\"margin-m\\\" type=\\\"accept\\\">",
    		ctx
    	});

    	return block;
    }

    // (102:2) <Button className="margin-m" type="cancel">
    function create_default_slot_6$3(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Button cancel");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_6$3.name,
    		type: "slot",
    		source: "(102:2) <Button className=\\\"margin-m\\\" type=\\\"cancel\\\">",
    		ctx
    	});

    	return block;
    }

    // (116:0) <Button className="margin-m">
    function create_default_slot_5$4(ctx) {
    	let span;
    	let t1;
    	let icon;
    	let current;

    	icon = new Icon({
    			props: {
    				className: "icon",
    				name: "medielogin",
    				width: "20"
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			span = element("span");
    			span.textContent = "button with icon right";
    			t1 = space();
    			create_component(icon.$$.fragment);
    			add_location(span, file$k, 116, 2, 3709);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, span, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(icon, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(icon.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(icon.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(span);
    			if (detaching) detach_dev(t1);
    			destroy_component(icon, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_5$4.name,
    		type: "slot",
    		source: "(116:0) <Button className=\\\"margin-m\\\">",
    		ctx
    	});

    	return block;
    }

    // (130:0) <Button className="margin-m">
    function create_default_slot_4$4(ctx) {
    	let icon;
    	let t0;
    	let span;
    	let current;

    	icon = new Icon({
    			props: {
    				className: "icon",
    				name: "angle-left",
    				width: "20"
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(icon.$$.fragment);
    			t0 = space();
    			span = element("span");
    			span.textContent = "button with icon left";
    			add_location(span, file$k, 131, 2, 4084);
    		},
    		m: function mount(target, anchor) {
    			mount_component(icon, target, anchor);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, span, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(icon.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(icon.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(icon, detaching);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(span);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_4$4.name,
    		type: "slot",
    		source: "(130:0) <Button className=\\\"margin-m\\\">",
    		ctx
    	});

    	return block;
    }

    // (145:2) <Button className="margin-m" extension="icon">
    function create_default_slot_3$4(ctx) {
    	let span;

    	const block = {
    		c: function create() {
    			span = element("span");
    			span.textContent = "×";
    			set_style(span, "font-size", "30px");
    			add_location(span, file$k, 145, 4, 4384);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, span, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(span);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_3$4.name,
    		type: "slot",
    		source: "(145:2) <Button className=\\\"margin-m\\\" extension=\\\"icon\\\">",
    		ctx
    	});

    	return block;
    }

    // (148:2) <Button className="margin-m" size="small" extension="icon solid">
    function create_default_slot_2$4(ctx) {
    	let span;

    	const block = {
    		c: function create() {
    			span = element("span");
    			span.textContent = "×";
    			set_style(span, "font-size", "30px");
    			add_location(span, file$k, 148, 4, 4513);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, span, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(span);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2$4.name,
    		type: "slot",
    		source: "(148:2) <Button className=\\\"margin-m\\\" size=\\\"small\\\" extension=\\\"icon solid\\\">",
    		ctx
    	});

    	return block;
    }

    // (151:2) <Button className="margin-m" extension="icon solid">
    function create_default_slot_1$6(ctx) {
    	let span;

    	const block = {
    		c: function create() {
    			span = element("span");
    			span.textContent = "×";
    			set_style(span, "font-size", "30px");
    			add_location(span, file$k, 151, 4, 4629);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, span, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(span);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1$6.name,
    		type: "slot",
    		source: "(151:2) <Button className=\\\"margin-m\\\" extension=\\\"icon solid\\\">",
    		ctx
    	});

    	return block;
    }

    // (154:2) <Button className="margin-m" size="big" extension="icon solid">
    function create_default_slot$8(ctx) {
    	let span;

    	const block = {
    		c: function create() {
    			span = element("span");
    			span.textContent = "×";
    			set_style(span, "font-size", "40px");
    			add_location(span, file$k, 154, 4, 4756);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, span, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(span);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$8.name,
    		type: "slot",
    		source: "(154:2) <Button className=\\\"margin-m\\\" size=\\\"big\\\" extension=\\\"icon solid\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$k(ctx) {
    	let h1;
    	let t1;
    	let prism0;
    	let t2;
    	let button0;
    	let t3;
    	let prism1;
    	let t4;
    	let button1;
    	let t5;
    	let prism2;
    	let t6;
    	let h30;
    	let t8;
    	let p0;
    	let t10;
    	let ul;
    	let li0;
    	let t12;
    	let li1;
    	let t14;
    	let li2;
    	let t16;
    	let li3;
    	let t18;
    	let li4;
    	let t20;
    	let div0;
    	let button2;
    	let t21;
    	let button3;
    	let t22;
    	let button4;
    	let t23;
    	let button5;
    	let t24;
    	let button6;
    	let t25;
    	let prism3;
    	let t26;
    	let h31;
    	let t28;
    	let p1;
    	let b0;
    	let t30;
    	let b1;
    	let t32;
    	let t33;
    	let div1;
    	let button7;
    	let t34;
    	let button8;
    	let t35;
    	let button9;
    	let t36;
    	let div2;
    	let button10;
    	let t37;
    	let button11;
    	let t38;
    	let button12;
    	let t39;
    	let prism4;
    	let t40;
    	let h32;
    	let t42;
    	let div3;
    	let button13;
    	let t43;
    	let button14;
    	let t44;
    	let button15;
    	let t45;
    	let button16;
    	let t46;
    	let prism5;
    	let t47;
    	let h33;
    	let t49;
    	let button17;
    	let t50;
    	let prism6;
    	let t51;
    	let button18;
    	let t52;
    	let prism7;
    	let t53;
    	let div4;
    	let button19;
    	let t54;
    	let button20;
    	let t55;
    	let button21;
    	let t56;
    	let button22;
    	let t57;
    	let prism8;
    	let current;

    	prism0 = new Prism$1({
    			props: {
    				language: "js",
    				source: `import { Button } from '@ekstra-bladet/designsystem';`
    			},
    			$$inline: true
    		});

    	button0 = new Button({
    			props: {
    				$$slots: { default: [create_default_slot_22$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button0.$on("click", /*click_handler*/ ctx[0]);

    	prism1 = new Prism$1({
    			props: {
    				language,
    				source: `
  <Button on:click="{() => {
    console.log('click the button');
  }}">Base button</Button>
  `
    			},
    			$$inline: true
    		});

    	button1 = new Button({
    			props: {
    				href: "#",
    				$$slots: { default: [create_default_slot_21$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button1.$on("click", buttonClick);

    	prism2 = new Prism$1({
    			props: {
    				language,
    				source: `
  <Button href="#" on:click="{buttonClick}">Base button</Button>
  `
    			},
    			$$inline: true
    		});

    	button2 = new Button({
    			props: {
    				className: "margin-m",
    				extension: "solid",
    				$$slots: { default: [create_default_slot_20$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button3 = new Button({
    			props: {
    				className: "margin-m",
    				extension: "link",
    				$$slots: { default: [create_default_slot_19$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button4 = new Button({
    			props: {
    				className: "margin-m",
    				extension: "icon",
    				$$slots: { default: [create_default_slot_18$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button5 = new Button({
    			props: {
    				className: "margin-m",
    				size: "big",
    				$$slots: { default: [create_default_slot_17$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button6 = new Button({
    			props: {
    				className: "margin-m",
    				size: "small",
    				$$slots: { default: [create_default_slot_16$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism3 = new Prism$1({
    			props: {
    				language,
    				source: `
  <Button className="margin-m" extension="solid">Button solid</Button>
  <Button className="margin-m" extension="link">Button link</Button>
  <Button className="margin-m" extension="icon">
    <span style="font-size: 30px">&times;</span>
  </Button>
  <Button className="margin-m" size="big">Button big</Button>
  <Button className="margin-m" size="small">Button small</Button>
  `
    			},
    			$$inline: true
    		});

    	button7 = new Button({
    			props: {
    				className: "margin-m",
    				size: "big",
    				extension: "solid",
    				$$slots: { default: [create_default_slot_15$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button8 = new Button({
    			props: {
    				className: "margin-m",
    				size: "big",
    				extension: "link",
    				$$slots: { default: [create_default_slot_14$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button9 = new Button({
    			props: {
    				className: "margin-m",
    				size: "big",
    				extension: "icon",
    				$$slots: { default: [create_default_slot_13$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button10 = new Button({
    			props: {
    				className: "margin-m",
    				size: "small",
    				extension: "solid",
    				$$slots: { default: [create_default_slot_12$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button11 = new Button({
    			props: {
    				className: "margin-m",
    				size: "small",
    				extension: "link",
    				$$slots: { default: [create_default_slot_11$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button12 = new Button({
    			props: {
    				className: "margin-m",
    				size: "small",
    				extension: "icon",
    				$$slots: { default: [create_default_slot_10$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism4 = new Prism$1({
    			props: {
    				language,
    				source: `
  <Button className="margin-m" size="big">Button big</Button>
  <Button className="margin-m" size="big" extension="solid">Button big solid</Button>
  <Button className="margin-m" size="big" extension="link">Button big link</Button>
  <Button className="margin-m" size="small" extension="solid">Button small solid</Button>
  <Button className="margin-m" size="small" extension="link">Button small link</Button>
  <Button className="margin-m" size="small" extension="icon">
    <span style="font-size: 30px">&times;</span>
  </Button>
  `
    			},
    			$$inline: true
    		});

    	button13 = new Button({
    			props: {
    				className: "margin-m",
    				type: "primary",
    				$$slots: { default: [create_default_slot_9$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button14 = new Button({
    			props: {
    				className: "margin-m",
    				type: "secondary",
    				$$slots: { default: [create_default_slot_8$3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button15 = new Button({
    			props: {
    				className: "margin-m",
    				type: "accept",
    				$$slots: { default: [create_default_slot_7$3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button16 = new Button({
    			props: {
    				className: "margin-m",
    				type: "cancel",
    				$$slots: { default: [create_default_slot_6$3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism5 = new Prism$1({
    			props: {
    				language,
    				source: `
  <Button className="margin-m" type="primary">Button primary</Button>
  <Button className="margin-m" type="secondary">Button secondary</Button>
  <Button className="margin-m" type="accept">Button accept</Button>
  <Button className="margin-m" type="cancel">Button cancel</Button>
  `
    			},
    			$$inline: true
    		});

    	button17 = new Button({
    			props: {
    				className: "margin-m",
    				$$slots: { default: [create_default_slot_5$4] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism6 = new Prism$1({
    			props: {
    				language,
    				source: `
  <Button className="margin-m">
    <span>button with icon right</span>
    <Icon className="icon" name="medielogin" width="20"/>
  </Button>
  `
    			},
    			$$inline: true
    		});

    	button18 = new Button({
    			props: {
    				className: "margin-m",
    				$$slots: { default: [create_default_slot_4$4] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism7 = new Prism$1({
    			props: {
    				language,
    				source: `
  <Button className="margin-m">
    <Icon className="icon" name="angle-left" width="20"/>
    <span>button with icon right</span>
  </Button>
  `
    			},
    			$$inline: true
    		});

    	button19 = new Button({
    			props: {
    				className: "margin-m",
    				extension: "icon",
    				$$slots: { default: [create_default_slot_3$4] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button20 = new Button({
    			props: {
    				className: "margin-m",
    				size: "small",
    				extension: "icon solid",
    				$$slots: { default: [create_default_slot_2$4] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button21 = new Button({
    			props: {
    				className: "margin-m",
    				extension: "icon solid",
    				$$slots: { default: [create_default_slot_1$6] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button22 = new Button({
    			props: {
    				className: "margin-m",
    				size: "big",
    				extension: "icon solid",
    				$$slots: { default: [create_default_slot$8] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism8 = new Prism$1({
    			props: {
    				language,
    				source: `
  <Button className="margin-m" extension="icon">
    <span style="font-size: 30px">&times;</span>
  </Button>
  <Button className="margin-m" size="small" extension="icon solid">
    <span style="font-size: 30px">&times;</span>
  </Button>
  <Button className="margin-m" extension="icon solid">
    <span style="font-size: 30px">&times;</span>
  </Button>
  <Button className="margin-m" size="big" extension="icon solid">
    <span style="font-size: 40px">&times;</span>
  </Button>
  `
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Buttons";
    			t1 = space();
    			create_component(prism0.$$.fragment);
    			t2 = space();
    			create_component(button0.$$.fragment);
    			t3 = space();
    			create_component(prism1.$$.fragment);
    			t4 = space();
    			create_component(button1.$$.fragment);
    			t5 = space();
    			create_component(prism2.$$.fragment);
    			t6 = space();
    			h30 = element("h3");
    			h30.textContent = "extension attribute";
    			t8 = space();
    			p0 = element("p");
    			p0.textContent = "options";
    			t10 = space();
    			ul = element("ul");
    			li0 = element("li");
    			li0.textContent = "solid";
    			t12 = space();
    			li1 = element("li");
    			li1.textContent = "link";
    			t14 = space();
    			li2 = element("li");
    			li2.textContent = "icon";
    			t16 = space();
    			li3 = element("li");
    			li3.textContent = "big";
    			t18 = space();
    			li4 = element("li");
    			li4.textContent = "small";
    			t20 = space();
    			div0 = element("div");
    			create_component(button2.$$.fragment);
    			t21 = space();
    			create_component(button3.$$.fragment);
    			t22 = space();
    			create_component(button4.$$.fragment);
    			t23 = space();
    			create_component(button5.$$.fragment);
    			t24 = space();
    			create_component(button6.$$.fragment);
    			t25 = space();
    			create_component(prism3.$$.fragment);
    			t26 = space();
    			h31 = element("h3");
    			h31.textContent = "Size attribute";
    			t28 = space();
    			p1 = element("p");
    			b0 = element("b");
    			b0.textContent = "big";
    			t30 = text(" and ");
    			b1 = element("b");
    			b1.textContent = "small";
    			t32 = text(" can be combined with the other three extensions");
    			t33 = space();
    			div1 = element("div");
    			create_component(button7.$$.fragment);
    			t34 = space();
    			create_component(button8.$$.fragment);
    			t35 = space();
    			create_component(button9.$$.fragment);
    			t36 = space();
    			div2 = element("div");
    			create_component(button10.$$.fragment);
    			t37 = space();
    			create_component(button11.$$.fragment);
    			t38 = space();
    			create_component(button12.$$.fragment);
    			t39 = space();
    			create_component(prism4.$$.fragment);
    			t40 = space();
    			h32 = element("h3");
    			h32.textContent = "Styles";
    			t42 = space();
    			div3 = element("div");
    			create_component(button13.$$.fragment);
    			t43 = space();
    			create_component(button14.$$.fragment);
    			t44 = space();
    			create_component(button15.$$.fragment);
    			t45 = space();
    			create_component(button16.$$.fragment);
    			t46 = space();
    			create_component(prism5.$$.fragment);
    			t47 = space();
    			h33 = element("h3");
    			h33.textContent = "Buttons with Icon";
    			t49 = space();
    			create_component(button17.$$.fragment);
    			t50 = space();
    			create_component(prism6.$$.fragment);
    			t51 = space();
    			create_component(button18.$$.fragment);
    			t52 = space();
    			create_component(prism7.$$.fragment);
    			t53 = space();
    			div4 = element("div");
    			create_component(button19.$$.fragment);
    			t54 = space();
    			create_component(button20.$$.fragment);
    			t55 = space();
    			create_component(button21.$$.fragment);
    			t56 = space();
    			create_component(button22.$$.fragment);
    			t57 = space();
    			create_component(prism8.$$.fragment);
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$k, 8, 0, 184);
    			add_location(h30, file$k, 34, 0, 721);
    			add_location(p0, file$k, 35, 0, 750);
    			add_location(li0, file$k, 37, 2, 772);
    			add_location(li1, file$k, 38, 2, 789);
    			add_location(li2, file$k, 39, 2, 805);
    			add_location(li3, file$k, 40, 2, 821);
    			add_location(li4, file$k, 41, 2, 836);
    			add_location(ul, file$k, 36, 0, 765);
    			attr_dev(div0, "class", "flex");
    			add_location(div0, file$k, 43, 0, 857);
    			add_location(h31, file$k, 65, 0, 1680);
    			add_location(b0, file$k, 66, 3, 1707);
    			add_location(b1, file$k, 66, 18, 1722);
    			add_location(p1, file$k, 66, 0, 1704);
    			attr_dev(div1, "class", "flex");
    			add_location(div1, file$k, 67, 0, 1787);
    			attr_dev(div2, "class", "flex");
    			add_location(div2, file$k, 74, 0, 2104);
    			add_location(h32, file$k, 96, 0, 3006);
    			attr_dev(div3, "class", "flex");
    			add_location(div3, file$k, 97, 0, 3022);
    			add_location(h33, file$k, 114, 0, 3650);
    			attr_dev(div4, "class", "flex");
    			add_location(div4, file$k, 143, 0, 4312);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(prism0, target, anchor);
    			insert_dev(target, t2, anchor);
    			mount_component(button0, target, anchor);
    			insert_dev(target, t3, anchor);
    			mount_component(prism1, target, anchor);
    			insert_dev(target, t4, anchor);
    			mount_component(button1, target, anchor);
    			insert_dev(target, t5, anchor);
    			mount_component(prism2, target, anchor);
    			insert_dev(target, t6, anchor);
    			insert_dev(target, h30, anchor);
    			insert_dev(target, t8, anchor);
    			insert_dev(target, p0, anchor);
    			insert_dev(target, t10, anchor);
    			insert_dev(target, ul, anchor);
    			append_dev(ul, li0);
    			append_dev(ul, t12);
    			append_dev(ul, li1);
    			append_dev(ul, t14);
    			append_dev(ul, li2);
    			append_dev(ul, t16);
    			append_dev(ul, li3);
    			append_dev(ul, t18);
    			append_dev(ul, li4);
    			insert_dev(target, t20, anchor);
    			insert_dev(target, div0, anchor);
    			mount_component(button2, div0, null);
    			append_dev(div0, t21);
    			mount_component(button3, div0, null);
    			append_dev(div0, t22);
    			mount_component(button4, div0, null);
    			append_dev(div0, t23);
    			mount_component(button5, div0, null);
    			append_dev(div0, t24);
    			mount_component(button6, div0, null);
    			insert_dev(target, t25, anchor);
    			mount_component(prism3, target, anchor);
    			insert_dev(target, t26, anchor);
    			insert_dev(target, h31, anchor);
    			insert_dev(target, t28, anchor);
    			insert_dev(target, p1, anchor);
    			append_dev(p1, b0);
    			append_dev(p1, t30);
    			append_dev(p1, b1);
    			append_dev(p1, t32);
    			insert_dev(target, t33, anchor);
    			insert_dev(target, div1, anchor);
    			mount_component(button7, div1, null);
    			append_dev(div1, t34);
    			mount_component(button8, div1, null);
    			append_dev(div1, t35);
    			mount_component(button9, div1, null);
    			insert_dev(target, t36, anchor);
    			insert_dev(target, div2, anchor);
    			mount_component(button10, div2, null);
    			append_dev(div2, t37);
    			mount_component(button11, div2, null);
    			append_dev(div2, t38);
    			mount_component(button12, div2, null);
    			insert_dev(target, t39, anchor);
    			mount_component(prism4, target, anchor);
    			insert_dev(target, t40, anchor);
    			insert_dev(target, h32, anchor);
    			insert_dev(target, t42, anchor);
    			insert_dev(target, div3, anchor);
    			mount_component(button13, div3, null);
    			append_dev(div3, t43);
    			mount_component(button14, div3, null);
    			append_dev(div3, t44);
    			mount_component(button15, div3, null);
    			append_dev(div3, t45);
    			mount_component(button16, div3, null);
    			insert_dev(target, t46, anchor);
    			mount_component(prism5, target, anchor);
    			insert_dev(target, t47, anchor);
    			insert_dev(target, h33, anchor);
    			insert_dev(target, t49, anchor);
    			mount_component(button17, target, anchor);
    			insert_dev(target, t50, anchor);
    			mount_component(prism6, target, anchor);
    			insert_dev(target, t51, anchor);
    			mount_component(button18, target, anchor);
    			insert_dev(target, t52, anchor);
    			mount_component(prism7, target, anchor);
    			insert_dev(target, t53, anchor);
    			insert_dev(target, div4, anchor);
    			mount_component(button19, div4, null);
    			append_dev(div4, t54);
    			mount_component(button20, div4, null);
    			append_dev(div4, t55);
    			mount_component(button21, div4, null);
    			append_dev(div4, t56);
    			mount_component(button22, div4, null);
    			insert_dev(target, t57, anchor);
    			mount_component(prism8, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const button0_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				button0_changes.$$scope = { dirty, ctx };
    			}

    			button0.$set(button0_changes);
    			const button1_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				button1_changes.$$scope = { dirty, ctx };
    			}

    			button1.$set(button1_changes);
    			const button2_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				button2_changes.$$scope = { dirty, ctx };
    			}

    			button2.$set(button2_changes);
    			const button3_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				button3_changes.$$scope = { dirty, ctx };
    			}

    			button3.$set(button3_changes);
    			const button4_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				button4_changes.$$scope = { dirty, ctx };
    			}

    			button4.$set(button4_changes);
    			const button5_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				button5_changes.$$scope = { dirty, ctx };
    			}

    			button5.$set(button5_changes);
    			const button6_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				button6_changes.$$scope = { dirty, ctx };
    			}

    			button6.$set(button6_changes);
    			const button7_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				button7_changes.$$scope = { dirty, ctx };
    			}

    			button7.$set(button7_changes);
    			const button8_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				button8_changes.$$scope = { dirty, ctx };
    			}

    			button8.$set(button8_changes);
    			const button9_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				button9_changes.$$scope = { dirty, ctx };
    			}

    			button9.$set(button9_changes);
    			const button10_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				button10_changes.$$scope = { dirty, ctx };
    			}

    			button10.$set(button10_changes);
    			const button11_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				button11_changes.$$scope = { dirty, ctx };
    			}

    			button11.$set(button11_changes);
    			const button12_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				button12_changes.$$scope = { dirty, ctx };
    			}

    			button12.$set(button12_changes);
    			const button13_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				button13_changes.$$scope = { dirty, ctx };
    			}

    			button13.$set(button13_changes);
    			const button14_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				button14_changes.$$scope = { dirty, ctx };
    			}

    			button14.$set(button14_changes);
    			const button15_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				button15_changes.$$scope = { dirty, ctx };
    			}

    			button15.$set(button15_changes);
    			const button16_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				button16_changes.$$scope = { dirty, ctx };
    			}

    			button16.$set(button16_changes);
    			const button17_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				button17_changes.$$scope = { dirty, ctx };
    			}

    			button17.$set(button17_changes);
    			const button18_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				button18_changes.$$scope = { dirty, ctx };
    			}

    			button18.$set(button18_changes);
    			const button19_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				button19_changes.$$scope = { dirty, ctx };
    			}

    			button19.$set(button19_changes);
    			const button20_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				button20_changes.$$scope = { dirty, ctx };
    			}

    			button20.$set(button20_changes);
    			const button21_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				button21_changes.$$scope = { dirty, ctx };
    			}

    			button21.$set(button21_changes);
    			const button22_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				button22_changes.$$scope = { dirty, ctx };
    			}

    			button22.$set(button22_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism0.$$.fragment, local);
    			transition_in(button0.$$.fragment, local);
    			transition_in(prism1.$$.fragment, local);
    			transition_in(button1.$$.fragment, local);
    			transition_in(prism2.$$.fragment, local);
    			transition_in(button2.$$.fragment, local);
    			transition_in(button3.$$.fragment, local);
    			transition_in(button4.$$.fragment, local);
    			transition_in(button5.$$.fragment, local);
    			transition_in(button6.$$.fragment, local);
    			transition_in(prism3.$$.fragment, local);
    			transition_in(button7.$$.fragment, local);
    			transition_in(button8.$$.fragment, local);
    			transition_in(button9.$$.fragment, local);
    			transition_in(button10.$$.fragment, local);
    			transition_in(button11.$$.fragment, local);
    			transition_in(button12.$$.fragment, local);
    			transition_in(prism4.$$.fragment, local);
    			transition_in(button13.$$.fragment, local);
    			transition_in(button14.$$.fragment, local);
    			transition_in(button15.$$.fragment, local);
    			transition_in(button16.$$.fragment, local);
    			transition_in(prism5.$$.fragment, local);
    			transition_in(button17.$$.fragment, local);
    			transition_in(prism6.$$.fragment, local);
    			transition_in(button18.$$.fragment, local);
    			transition_in(prism7.$$.fragment, local);
    			transition_in(button19.$$.fragment, local);
    			transition_in(button20.$$.fragment, local);
    			transition_in(button21.$$.fragment, local);
    			transition_in(button22.$$.fragment, local);
    			transition_in(prism8.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism0.$$.fragment, local);
    			transition_out(button0.$$.fragment, local);
    			transition_out(prism1.$$.fragment, local);
    			transition_out(button1.$$.fragment, local);
    			transition_out(prism2.$$.fragment, local);
    			transition_out(button2.$$.fragment, local);
    			transition_out(button3.$$.fragment, local);
    			transition_out(button4.$$.fragment, local);
    			transition_out(button5.$$.fragment, local);
    			transition_out(button6.$$.fragment, local);
    			transition_out(prism3.$$.fragment, local);
    			transition_out(button7.$$.fragment, local);
    			transition_out(button8.$$.fragment, local);
    			transition_out(button9.$$.fragment, local);
    			transition_out(button10.$$.fragment, local);
    			transition_out(button11.$$.fragment, local);
    			transition_out(button12.$$.fragment, local);
    			transition_out(prism4.$$.fragment, local);
    			transition_out(button13.$$.fragment, local);
    			transition_out(button14.$$.fragment, local);
    			transition_out(button15.$$.fragment, local);
    			transition_out(button16.$$.fragment, local);
    			transition_out(prism5.$$.fragment, local);
    			transition_out(button17.$$.fragment, local);
    			transition_out(prism6.$$.fragment, local);
    			transition_out(button18.$$.fragment, local);
    			transition_out(prism7.$$.fragment, local);
    			transition_out(button19.$$.fragment, local);
    			transition_out(button20.$$.fragment, local);
    			transition_out(button21.$$.fragment, local);
    			transition_out(button22.$$.fragment, local);
    			transition_out(prism8.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			destroy_component(prism0, detaching);
    			if (detaching) detach_dev(t2);
    			destroy_component(button0, detaching);
    			if (detaching) detach_dev(t3);
    			destroy_component(prism1, detaching);
    			if (detaching) detach_dev(t4);
    			destroy_component(button1, detaching);
    			if (detaching) detach_dev(t5);
    			destroy_component(prism2, detaching);
    			if (detaching) detach_dev(t6);
    			if (detaching) detach_dev(h30);
    			if (detaching) detach_dev(t8);
    			if (detaching) detach_dev(p0);
    			if (detaching) detach_dev(t10);
    			if (detaching) detach_dev(ul);
    			if (detaching) detach_dev(t20);
    			if (detaching) detach_dev(div0);
    			destroy_component(button2);
    			destroy_component(button3);
    			destroy_component(button4);
    			destroy_component(button5);
    			destroy_component(button6);
    			if (detaching) detach_dev(t25);
    			destroy_component(prism3, detaching);
    			if (detaching) detach_dev(t26);
    			if (detaching) detach_dev(h31);
    			if (detaching) detach_dev(t28);
    			if (detaching) detach_dev(p1);
    			if (detaching) detach_dev(t33);
    			if (detaching) detach_dev(div1);
    			destroy_component(button7);
    			destroy_component(button8);
    			destroy_component(button9);
    			if (detaching) detach_dev(t36);
    			if (detaching) detach_dev(div2);
    			destroy_component(button10);
    			destroy_component(button11);
    			destroy_component(button12);
    			if (detaching) detach_dev(t39);
    			destroy_component(prism4, detaching);
    			if (detaching) detach_dev(t40);
    			if (detaching) detach_dev(h32);
    			if (detaching) detach_dev(t42);
    			if (detaching) detach_dev(div3);
    			destroy_component(button13);
    			destroy_component(button14);
    			destroy_component(button15);
    			destroy_component(button16);
    			if (detaching) detach_dev(t46);
    			destroy_component(prism5, detaching);
    			if (detaching) detach_dev(t47);
    			if (detaching) detach_dev(h33);
    			if (detaching) detach_dev(t49);
    			destroy_component(button17, detaching);
    			if (detaching) detach_dev(t50);
    			destroy_component(prism6, detaching);
    			if (detaching) detach_dev(t51);
    			destroy_component(button18, detaching);
    			if (detaching) detach_dev(t52);
    			destroy_component(prism7, detaching);
    			if (detaching) detach_dev(t53);
    			if (detaching) detach_dev(div4);
    			destroy_component(button19);
    			destroy_component(button20);
    			destroy_component(button21);
    			destroy_component(button22);
    			if (detaching) detach_dev(t57);
    			destroy_component(prism8, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$k.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    const language = "html";

    function buttonClick() {
    	console.log("funck!");
    }

    function instance$k($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Button", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1$2.warn(`<Button> was created with unknown prop '${key}'`);
    	});

    	const click_handler = () => {
    		console.log("click the button");
    	};

    	$$self.$capture_state = () => ({
    		Prism: Prism$1,
    		Button,
    		Icon,
    		language,
    		buttonClick
    	});

    	return [click_handler];
    }

    class Button_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$k, create_fragment$k, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Button_1",
    			options,
    			id: create_fragment$k.name
    		});
    	}
    }

    /* docs_src/components/ButtonGroup.svelte generated by Svelte v3.38.1 */

    const { console: console_1$1 } = globals;
    const file$j = "docs_src/components/ButtonGroup.svelte";

    // (13:2) <Button     on:click={() => {       console.log('Click 1');     }}>
    function create_default_slot_27(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Toggle 1");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_27.name,
    		type: "slot",
    		source: "(13:2) <Button     on:click={() => {       console.log('Click 1');     }}>",
    		ctx
    	});

    	return block;
    }

    // (18:2) <Button     on:click={() => {       console.log('Click 2');     }}>
    function create_default_slot_26(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Toggle 2");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_26.name,
    		type: "slot",
    		source: "(18:2) <Button     on:click={() => {       console.log('Click 2');     }}>",
    		ctx
    	});

    	return block;
    }

    // (12:0) <ButtonGroup className="buttongroup--solid">
    function create_default_slot_25(ctx) {
    	let button0;
    	let t;
    	let button1;
    	let current;

    	button0 = new Button({
    			props: {
    				$$slots: { default: [create_default_slot_27] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button0.$on("click", /*click_handler*/ ctx[0]);

    	button1 = new Button({
    			props: {
    				$$slots: { default: [create_default_slot_26] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button1.$on("click", /*click_handler_1*/ ctx[1]);

    	const block = {
    		c: function create() {
    			create_component(button0.$$.fragment);
    			t = space();
    			create_component(button1.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(button0, target, anchor);
    			insert_dev(target, t, anchor);
    			mount_component(button1, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const button0_changes = {};

    			if (dirty & /*$$scope*/ 524288) {
    				button0_changes.$$scope = { dirty, ctx };
    			}

    			button0.$set(button0_changes);
    			const button1_changes = {};

    			if (dirty & /*$$scope*/ 524288) {
    				button1_changes.$$scope = { dirty, ctx };
    			}

    			button1.$set(button1_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(button0.$$.fragment, local);
    			transition_in(button1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(button0.$$.fragment, local);
    			transition_out(button1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(button0, detaching);
    			if (detaching) detach_dev(t);
    			destroy_component(button1, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_25.name,
    		type: "slot",
    		source: "(12:0) <ButtonGroup className=\\\"buttongroup--solid\\\">",
    		ctx
    	});

    	return block;
    }

    // (29:6) <Button         on:click={() => {           console.log('Click 1');         }}>
    function create_default_slot_24(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Toggle 1");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_24.name,
    		type: "slot",
    		source: "(29:6) <Button         on:click={() => {           console.log('Click 1');         }}>",
    		ctx
    	});

    	return block;
    }

    // (34:6) <Button         on:click={() => {           console.log('Click 2');         }}>
    function create_default_slot_23(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Toggle 2");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_23.name,
    		type: "slot",
    		source: "(34:6) <Button         on:click={() => {           console.log('Click 2');         }}>",
    		ctx
    	});

    	return block;
    }

    // (28:4) <ButtonGroup>
    function create_default_slot_22(ctx) {
    	let button0;
    	let t;
    	let button1;
    	let current;

    	button0 = new Button({
    			props: {
    				$$slots: { default: [create_default_slot_24] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button0.$on("click", /*click_handler_2*/ ctx[2]);

    	button1 = new Button({
    			props: {
    				$$slots: { default: [create_default_slot_23] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button1.$on("click", /*click_handler_3*/ ctx[3]);

    	const block = {
    		c: function create() {
    			create_component(button0.$$.fragment);
    			t = space();
    			create_component(button1.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(button0, target, anchor);
    			insert_dev(target, t, anchor);
    			mount_component(button1, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const button0_changes = {};

    			if (dirty & /*$$scope*/ 524288) {
    				button0_changes.$$scope = { dirty, ctx };
    			}

    			button0.$set(button0_changes);
    			const button1_changes = {};

    			if (dirty & /*$$scope*/ 524288) {
    				button1_changes.$$scope = { dirty, ctx };
    			}

    			button1.$set(button1_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(button0.$$.fragment, local);
    			transition_in(button1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(button0.$$.fragment, local);
    			transition_out(button1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(button0, detaching);
    			if (detaching) detach_dev(t);
    			destroy_component(button1, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_22.name,
    		type: "slot",
    		source: "(28:4) <ButtonGroup>",
    		ctx
    	});

    	return block;
    }

    // (43:6) <Button         on:click={() => {           console.log('Button 1');         }}>
    function create_default_slot_21(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Button 1");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_21.name,
    		type: "slot",
    		source: "(43:6) <Button         on:click={() => {           console.log('Button 1');         }}>",
    		ctx
    	});

    	return block;
    }

    // (48:6) <Button         on:click={() => {           console.log('Button 2');         }}>
    function create_default_slot_20(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Button 2");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_20.name,
    		type: "slot",
    		source: "(48:6) <Button         on:click={() => {           console.log('Button 2');         }}>",
    		ctx
    	});

    	return block;
    }

    // (53:6) <Button         on:click={() => {           console.log('Button 3');         }}>
    function create_default_slot_19(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Button 3");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_19.name,
    		type: "slot",
    		source: "(53:6) <Button         on:click={() => {           console.log('Button 3');         }}>",
    		ctx
    	});

    	return block;
    }

    // (42:4) <ButtonGroup>
    function create_default_slot_18(ctx) {
    	let button0;
    	let t0;
    	let button1;
    	let t1;
    	let button2;
    	let current;

    	button0 = new Button({
    			props: {
    				$$slots: { default: [create_default_slot_21] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button0.$on("click", /*click_handler_4*/ ctx[4]);

    	button1 = new Button({
    			props: {
    				$$slots: { default: [create_default_slot_20] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button1.$on("click", /*click_handler_5*/ ctx[5]);

    	button2 = new Button({
    			props: {
    				$$slots: { default: [create_default_slot_19] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button2.$on("click", /*click_handler_6*/ ctx[6]);

    	const block = {
    		c: function create() {
    			create_component(button0.$$.fragment);
    			t0 = space();
    			create_component(button1.$$.fragment);
    			t1 = space();
    			create_component(button2.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(button0, target, anchor);
    			insert_dev(target, t0, anchor);
    			mount_component(button1, target, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(button2, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const button0_changes = {};

    			if (dirty & /*$$scope*/ 524288) {
    				button0_changes.$$scope = { dirty, ctx };
    			}

    			button0.$set(button0_changes);
    			const button1_changes = {};

    			if (dirty & /*$$scope*/ 524288) {
    				button1_changes.$$scope = { dirty, ctx };
    			}

    			button1.$set(button1_changes);
    			const button2_changes = {};

    			if (dirty & /*$$scope*/ 524288) {
    				button2_changes.$$scope = { dirty, ctx };
    			}

    			button2.$set(button2_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(button0.$$.fragment, local);
    			transition_in(button1.$$.fragment, local);
    			transition_in(button2.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(button0.$$.fragment, local);
    			transition_out(button1.$$.fragment, local);
    			transition_out(button2.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(button0, detaching);
    			if (detaching) detach_dev(t0);
    			destroy_component(button1, detaching);
    			if (detaching) detach_dev(t1);
    			destroy_component(button2, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_18.name,
    		type: "slot",
    		source: "(42:4) <ButtonGroup>",
    		ctx
    	});

    	return block;
    }

    // (90:4) <Button       size="big"       initial={true}       on:click={() => {         console.log('Click 1');       }}>
    function create_default_slot_17(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Toggle 1");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_17.name,
    		type: "slot",
    		source: "(90:4) <Button       size=\\\"big\\\"       initial={true}       on:click={() => {         console.log('Click 1');       }}>",
    		ctx
    	});

    	return block;
    }

    // (97:4) <Button       size="big"       extension="solid"       on:click={() => {         console.log('Click 2');       }}>
    function create_default_slot_16(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Toggle 2");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_16.name,
    		type: "slot",
    		source: "(97:4) <Button       size=\\\"big\\\"       extension=\\\"solid\\\"       on:click={() => {         console.log('Click 2');       }}>",
    		ctx
    	});

    	return block;
    }

    // (89:2) <ButtonGroup>
    function create_default_slot_15(ctx) {
    	let button0;
    	let t;
    	let button1;
    	let current;

    	button0 = new Button({
    			props: {
    				size: "big",
    				initial: true,
    				$$slots: { default: [create_default_slot_17] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button0.$on("click", /*click_handler_7*/ ctx[7]);

    	button1 = new Button({
    			props: {
    				size: "big",
    				extension: "solid",
    				$$slots: { default: [create_default_slot_16] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button1.$on("click", /*click_handler_8*/ ctx[8]);

    	const block = {
    		c: function create() {
    			create_component(button0.$$.fragment);
    			t = space();
    			create_component(button1.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(button0, target, anchor);
    			insert_dev(target, t, anchor);
    			mount_component(button1, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const button0_changes = {};

    			if (dirty & /*$$scope*/ 524288) {
    				button0_changes.$$scope = { dirty, ctx };
    			}

    			button0.$set(button0_changes);
    			const button1_changes = {};

    			if (dirty & /*$$scope*/ 524288) {
    				button1_changes.$$scope = { dirty, ctx };
    			}

    			button1.$set(button1_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(button0.$$.fragment, local);
    			transition_in(button1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(button0.$$.fragment, local);
    			transition_out(button1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(button0, detaching);
    			if (detaching) detach_dev(t);
    			destroy_component(button1, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_15.name,
    		type: "slot",
    		source: "(89:2) <ButtonGroup>",
    		ctx
    	});

    	return block;
    }

    // (139:4) <Button       size="big"       on:click={() => {         console.log('Click 1');       }}>
    function create_default_slot_14(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Toggle 1");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_14.name,
    		type: "slot",
    		source: "(139:4) <Button       size=\\\"big\\\"       on:click={() => {         console.log('Click 1');       }}>",
    		ctx
    	});

    	return block;
    }

    // (145:4) <Button       size="big"       extension="solid"       on:click={() => {         console.log('Click 2');       }}>
    function create_default_slot_13$1(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Toggle 2");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_13$1.name,
    		type: "slot",
    		source: "(145:4) <Button       size=\\\"big\\\"       extension=\\\"solid\\\"       on:click={() => {         console.log('Click 2');       }}>",
    		ctx
    	});

    	return block;
    }

    // (138:2) <ButtonGroup type="accept">
    function create_default_slot_12$1(ctx) {
    	let button0;
    	let t;
    	let button1;
    	let current;

    	button0 = new Button({
    			props: {
    				size: "big",
    				$$slots: { default: [create_default_slot_14] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button0.$on("click", /*click_handler_9*/ ctx[9]);

    	button1 = new Button({
    			props: {
    				size: "big",
    				extension: "solid",
    				$$slots: { default: [create_default_slot_13$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button1.$on("click", /*click_handler_10*/ ctx[10]);

    	const block = {
    		c: function create() {
    			create_component(button0.$$.fragment);
    			t = space();
    			create_component(button1.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(button0, target, anchor);
    			insert_dev(target, t, anchor);
    			mount_component(button1, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const button0_changes = {};

    			if (dirty & /*$$scope*/ 524288) {
    				button0_changes.$$scope = { dirty, ctx };
    			}

    			button0.$set(button0_changes);
    			const button1_changes = {};

    			if (dirty & /*$$scope*/ 524288) {
    				button1_changes.$$scope = { dirty, ctx };
    			}

    			button1.$set(button1_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(button0.$$.fragment, local);
    			transition_in(button1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(button0.$$.fragment, local);
    			transition_out(button1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(button0, detaching);
    			if (detaching) detach_dev(t);
    			destroy_component(button1, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_12$1.name,
    		type: "slot",
    		source: "(138:2) <ButtonGroup type=\\\"accept\\\">",
    		ctx
    	});

    	return block;
    }

    // (157:4) <Button       size="big"       on:click={() => {         console.log('Click 1');       }}>
    function create_default_slot_11$1(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Toggle 1");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_11$1.name,
    		type: "slot",
    		source: "(157:4) <Button       size=\\\"big\\\"       on:click={() => {         console.log('Click 1');       }}>",
    		ctx
    	});

    	return block;
    }

    // (163:4) <Button       size="big"       extension="solid"       type="accept"       on:click={() => {         console.log('Click 2');       }}>
    function create_default_slot_10$1(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Toggle 2");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_10$1.name,
    		type: "slot",
    		source: "(163:4) <Button       size=\\\"big\\\"       extension=\\\"solid\\\"       type=\\\"accept\\\"       on:click={() => {         console.log('Click 2');       }}>",
    		ctx
    	});

    	return block;
    }

    // (156:2) <ButtonGroup type="cancel">
    function create_default_slot_9$1(ctx) {
    	let button0;
    	let t;
    	let button1;
    	let current;

    	button0 = new Button({
    			props: {
    				size: "big",
    				$$slots: { default: [create_default_slot_11$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button0.$on("click", /*click_handler_11*/ ctx[11]);

    	button1 = new Button({
    			props: {
    				size: "big",
    				extension: "solid",
    				type: "accept",
    				$$slots: { default: [create_default_slot_10$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button1.$on("click", /*click_handler_12*/ ctx[12]);

    	const block = {
    		c: function create() {
    			create_component(button0.$$.fragment);
    			t = space();
    			create_component(button1.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(button0, target, anchor);
    			insert_dev(target, t, anchor);
    			mount_component(button1, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const button0_changes = {};

    			if (dirty & /*$$scope*/ 524288) {
    				button0_changes.$$scope = { dirty, ctx };
    			}

    			button0.$set(button0_changes);
    			const button1_changes = {};

    			if (dirty & /*$$scope*/ 524288) {
    				button1_changes.$$scope = { dirty, ctx };
    			}

    			button1.$set(button1_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(button0.$$.fragment, local);
    			transition_in(button1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(button0.$$.fragment, local);
    			transition_out(button1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(button0, detaching);
    			if (detaching) detach_dev(t);
    			destroy_component(button1, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_9$1.name,
    		type: "slot",
    		source: "(156:2) <ButtonGroup type=\\\"cancel\\\">",
    		ctx
    	});

    	return block;
    }

    // (176:4) <Button       size="big"       on:click={() => {         console.log('Click 1');       }}>
    function create_default_slot_8$2(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Toggle 1");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_8$2.name,
    		type: "slot",
    		source: "(176:4) <Button       size=\\\"big\\\"       on:click={() => {         console.log('Click 1');       }}>",
    		ctx
    	});

    	return block;
    }

    // (182:4) <Button       size="big"       extension="solid"       on:click={() => {         console.log('Click 2');       }}>
    function create_default_slot_7$2(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Toggle 2");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_7$2.name,
    		type: "slot",
    		source: "(182:4) <Button       size=\\\"big\\\"       extension=\\\"solid\\\"       on:click={() => {         console.log('Click 2');       }}>",
    		ctx
    	});

    	return block;
    }

    // (175:2) <ButtonGroup type="primary">
    function create_default_slot_6$2(ctx) {
    	let button0;
    	let t;
    	let button1;
    	let current;

    	button0 = new Button({
    			props: {
    				size: "big",
    				$$slots: { default: [create_default_slot_8$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button0.$on("click", /*click_handler_13*/ ctx[13]);

    	button1 = new Button({
    			props: {
    				size: "big",
    				extension: "solid",
    				$$slots: { default: [create_default_slot_7$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button1.$on("click", /*click_handler_14*/ ctx[14]);

    	const block = {
    		c: function create() {
    			create_component(button0.$$.fragment);
    			t = space();
    			create_component(button1.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(button0, target, anchor);
    			insert_dev(target, t, anchor);
    			mount_component(button1, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const button0_changes = {};

    			if (dirty & /*$$scope*/ 524288) {
    				button0_changes.$$scope = { dirty, ctx };
    			}

    			button0.$set(button0_changes);
    			const button1_changes = {};

    			if (dirty & /*$$scope*/ 524288) {
    				button1_changes.$$scope = { dirty, ctx };
    			}

    			button1.$set(button1_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(button0.$$.fragment, local);
    			transition_in(button1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(button0.$$.fragment, local);
    			transition_out(button1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(button0, detaching);
    			if (detaching) detach_dev(t);
    			destroy_component(button1, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_6$2.name,
    		type: "slot",
    		source: "(175:2) <ButtonGroup type=\\\"primary\\\">",
    		ctx
    	});

    	return block;
    }

    // (194:4) <Button       size="big"       on:click={() => {         console.log('Click 1');       }}>
    function create_default_slot_5$3(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Toggle 1");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_5$3.name,
    		type: "slot",
    		source: "(194:4) <Button       size=\\\"big\\\"       on:click={() => {         console.log('Click 1');       }}>",
    		ctx
    	});

    	return block;
    }

    // (200:4) <Button       size="big"       extension="solid"       on:click={() => {         console.log('Click 2');       }}>
    function create_default_slot_4$3(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Toggle 2");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_4$3.name,
    		type: "slot",
    		source: "(200:4) <Button       size=\\\"big\\\"       extension=\\\"solid\\\"       on:click={() => {         console.log('Click 2');       }}>",
    		ctx
    	});

    	return block;
    }

    // (193:2) <ButtonGroup type="secondary">
    function create_default_slot_3$3(ctx) {
    	let button0;
    	let t;
    	let button1;
    	let current;

    	button0 = new Button({
    			props: {
    				size: "big",
    				$$slots: { default: [create_default_slot_5$3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button0.$on("click", /*click_handler_15*/ ctx[15]);

    	button1 = new Button({
    			props: {
    				size: "big",
    				extension: "solid",
    				$$slots: { default: [create_default_slot_4$3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button1.$on("click", /*click_handler_16*/ ctx[16]);

    	const block = {
    		c: function create() {
    			create_component(button0.$$.fragment);
    			t = space();
    			create_component(button1.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(button0, target, anchor);
    			insert_dev(target, t, anchor);
    			mount_component(button1, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const button0_changes = {};

    			if (dirty & /*$$scope*/ 524288) {
    				button0_changes.$$scope = { dirty, ctx };
    			}

    			button0.$set(button0_changes);
    			const button1_changes = {};

    			if (dirty & /*$$scope*/ 524288) {
    				button1_changes.$$scope = { dirty, ctx };
    			}

    			button1.$set(button1_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(button0.$$.fragment, local);
    			transition_in(button1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(button0.$$.fragment, local);
    			transition_out(button1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(button0, detaching);
    			if (detaching) detach_dev(t);
    			destroy_component(button1, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_3$3.name,
    		type: "slot",
    		source: "(193:2) <ButtonGroup type=\\\"secondary\\\">",
    		ctx
    	});

    	return block;
    }

    // (213:4) <Button       size="big"       on:click={() => {         console.log('Click 1');       }}>
    function create_default_slot_2$3(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Toggle 1");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2$3.name,
    		type: "slot",
    		source: "(213:4) <Button       size=\\\"big\\\"       on:click={() => {         console.log('Click 1');       }}>",
    		ctx
    	});

    	return block;
    }

    // (219:4) <Button       size="big"       extension="solid"       initial={true}       on:click={() => {         console.log('Click 2');       }}>
    function create_default_slot_1$5(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Toggle 2");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1$5.name,
    		type: "slot",
    		source: "(219:4) <Button       size=\\\"big\\\"       extension=\\\"solid\\\"       initial={true}       on:click={() => {         console.log('Click 2');       }}>",
    		ctx
    	});

    	return block;
    }

    // (212:2) <ButtonGroup color="Bordeaux">
    function create_default_slot$7(ctx) {
    	let button0;
    	let t;
    	let button1;
    	let current;

    	button0 = new Button({
    			props: {
    				size: "big",
    				$$slots: { default: [create_default_slot_2$3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button0.$on("click", /*click_handler_17*/ ctx[17]);

    	button1 = new Button({
    			props: {
    				size: "big",
    				extension: "solid",
    				initial: true,
    				$$slots: { default: [create_default_slot_1$5] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button1.$on("click", /*click_handler_18*/ ctx[18]);

    	const block = {
    		c: function create() {
    			create_component(button0.$$.fragment);
    			t = space();
    			create_component(button1.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(button0, target, anchor);
    			insert_dev(target, t, anchor);
    			mount_component(button1, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const button0_changes = {};

    			if (dirty & /*$$scope*/ 524288) {
    				button0_changes.$$scope = { dirty, ctx };
    			}

    			button0.$set(button0_changes);
    			const button1_changes = {};

    			if (dirty & /*$$scope*/ 524288) {
    				button1_changes.$$scope = { dirty, ctx };
    			}

    			button1.$set(button1_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(button0.$$.fragment, local);
    			transition_in(button1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(button0.$$.fragment, local);
    			transition_out(button1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(button0, detaching);
    			if (detaching) detach_dev(t);
    			destroy_component(button1, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$7.name,
    		type: "slot",
    		source: "(212:2) <ButtonGroup color=\\\"Bordeaux\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$j(ctx) {
    	let h1;
    	let t1;
    	let prism0;
    	let t2;
    	let buttongroup0;
    	let t3;
    	let p0;
    	let t5;
    	let div2;
    	let div0;
    	let buttongroup1;
    	let t6;
    	let div1;
    	let buttongroup2;
    	let t7;
    	let div3;
    	let prism1;
    	let t8;
    	let div4;
    	let p1;
    	let t10;
    	let buttongroup3;
    	let t11;
    	let prism2;
    	let t12;
    	let p2;
    	let t14;
    	let ul;
    	let li0;
    	let t16;
    	let li1;
    	let t18;
    	let li2;
    	let t20;
    	let li3;
    	let t22;
    	let div5;
    	let buttongroup4;
    	let t23;
    	let div6;
    	let buttongroup5;
    	let t24;
    	let div7;
    	let buttongroup6;
    	let t25;
    	let div8;
    	let buttongroup7;
    	let t26;
    	let p3;
    	let t28;
    	let div9;
    	let buttongroup8;
    	let t29;
    	let prism3;
    	let current;

    	prism0 = new Prism$1({
    			props: {
    				language: "js",
    				source: `import { Button, ButtonGroup } from '@ekstra-bladet/designsystem';
`
    			},
    			$$inline: true
    		});

    	buttongroup0 = new ButtonGroup({
    			props: {
    				className: "buttongroup--solid",
    				$$slots: { default: [create_default_slot_25] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	buttongroup1 = new ButtonGroup({
    			props: {
    				$$slots: { default: [create_default_slot_22] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	buttongroup2 = new ButtonGroup({
    			props: {
    				$$slots: { default: [create_default_slot_18] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism1 = new Prism$1({
    			props: {
    				language: "svelte",
    				source: `
<ButtonGroup>
  <Button
    on:click="{() => {
      console.log('Button 1');
    }}">Toggle 1</Button
  >
  <Button
    on:click="{() => {
      console.log('Button 2');
    }}">Toggle 2</Button
  >
  <Button
    on:click="{() => {
      console.log('Button 3');
    }}">Toggle 3</Button
  >
</ButtonGroup>
`
    			},
    			$$inline: true
    		});

    	buttongroup3 = new ButtonGroup({
    			props: {
    				$$slots: { default: [create_default_slot_15] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism2 = new Prism$1({
    			props: {
    				language: "svelte",
    				source: `
  <ButtonGroup>
    <Button
      size="big"
      initial={true}
      on:click={() => {
        console.log('Click 1');
      }}>Toggle 1</Button
    >
    <Button
      size="big"
      extension="solid"
      on:click={() => {
        console.log('Click 2');
      }}>Toggle 2</Button
    >
  </ButtonGroup>
  `
    			},
    			$$inline: true
    		});

    	buttongroup4 = new ButtonGroup({
    			props: {
    				type: "accept",
    				$$slots: { default: [create_default_slot_12$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	buttongroup5 = new ButtonGroup({
    			props: {
    				type: "cancel",
    				$$slots: { default: [create_default_slot_9$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	buttongroup6 = new ButtonGroup({
    			props: {
    				type: "primary",
    				$$slots: { default: [create_default_slot_6$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	buttongroup7 = new ButtonGroup({
    			props: {
    				type: "secondary",
    				$$slots: { default: [create_default_slot_3$3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	buttongroup8 = new ButtonGroup({
    			props: {
    				color: "Bordeaux",
    				$$slots: { default: [create_default_slot$7] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism3 = new Prism$1({
    			props: {
    				language: "svelte",
    				source: `
<ButtonGroup color="Bordeaux">
    <Button
      size="big"
      on:click={() => {
        console.log('Click 1');
      }}>Toggle 1</Button
    >
    <Button
      size="big"
      extension="solid"
      initial={true}
      on:click={() => {
        console.log('Click 2');
      }}>Toggle 2</Button
    >
  </ButtonGroup>
  `
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Button groups";
    			t1 = space();
    			create_component(prism0.$$.fragment);
    			t2 = space();
    			create_component(buttongroup0.$$.fragment);
    			t3 = space();
    			p0 = element("p");
    			p0.textContent = "Default";
    			t5 = space();
    			div2 = element("div");
    			div0 = element("div");
    			create_component(buttongroup1.$$.fragment);
    			t6 = space();
    			div1 = element("div");
    			create_component(buttongroup2.$$.fragment);
    			t7 = space();
    			div3 = element("div");
    			create_component(prism1.$$.fragment);
    			t8 = space();
    			div4 = element("div");
    			p1 = element("p");
    			p1.textContent = "Default Big";
    			t10 = space();
    			create_component(buttongroup3.$$.fragment);
    			t11 = space();
    			create_component(prism2.$$.fragment);
    			t12 = space();
    			p2 = element("p");
    			p2.textContent = "type muligheder";
    			t14 = space();
    			ul = element("ul");
    			li0 = element("li");
    			li0.textContent = "accept";
    			t16 = space();
    			li1 = element("li");
    			li1.textContent = "cancel";
    			t18 = space();
    			li2 = element("li");
    			li2.textContent = "primary";
    			t20 = space();
    			li3 = element("li");
    			li3.textContent = "secondary";
    			t22 = space();
    			div5 = element("div");
    			create_component(buttongroup4.$$.fragment);
    			t23 = space();
    			div6 = element("div");
    			create_component(buttongroup5.$$.fragment);
    			t24 = space();
    			div7 = element("div");
    			create_component(buttongroup6.$$.fragment);
    			t25 = space();
    			div8 = element("div");
    			create_component(buttongroup7.$$.fragment);
    			t26 = space();
    			p3 = element("p");
    			p3.textContent = "Farve muligheder fra eb-colors";
    			t28 = space();
    			div9 = element("div");
    			create_component(buttongroup8.$$.fragment);
    			t29 = space();
    			create_component(prism3.$$.fragment);
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$j, 4, 0, 112);
    			add_location(p0, file$j, 24, 0, 502);
    			attr_dev(div0, "class", "flex-item margin-l--r");
    			add_location(div0, file$j, 26, 2, 547);
    			attr_dev(div1, "class", "flex-item margin-l--l");
    			add_location(div1, file$j, 40, 2, 851);
    			attr_dev(div2, "class", "margin-l flex");
    			add_location(div2, file$j, 25, 0, 517);
    			attr_dev(div3, "class", "margin-l");
    			add_location(div3, file$j, 61, 0, 1274);
    			add_location(p1, file$j, 87, 2, 1691);
    			attr_dev(div4, "class", "margin-l");
    			add_location(div4, file$j, 86, 0, 1666);
    			add_location(p2, file$j, 128, 0, 2390);
    			add_location(li0, file$j, 131, 2, 2421);
    			add_location(li1, file$j, 132, 2, 2439);
    			add_location(li2, file$j, 133, 2, 2457);
    			add_location(li3, file$j, 134, 2, 2476);
    			add_location(ul, file$j, 130, 0, 2414);
    			attr_dev(div5, "class", "margin-l");
    			add_location(div5, file$j, 136, 0, 2501);
    			attr_dev(div6, "class", "margin-l");
    			add_location(div6, file$j, 154, 0, 2837);
    			attr_dev(div7, "class", "margin-l");
    			add_location(div7, file$j, 173, 0, 3193);
    			attr_dev(div8, "class", "margin-l");
    			add_location(div8, file$j, 191, 0, 3530);
    			add_location(p3, file$j, 209, 0, 3869);
    			attr_dev(div9, "class", "margin-l");
    			add_location(div9, file$j, 210, 0, 3907);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(prism0, target, anchor);
    			insert_dev(target, t2, anchor);
    			mount_component(buttongroup0, target, anchor);
    			insert_dev(target, t3, anchor);
    			insert_dev(target, p0, anchor);
    			insert_dev(target, t5, anchor);
    			insert_dev(target, div2, anchor);
    			append_dev(div2, div0);
    			mount_component(buttongroup1, div0, null);
    			append_dev(div2, t6);
    			append_dev(div2, div1);
    			mount_component(buttongroup2, div1, null);
    			insert_dev(target, t7, anchor);
    			insert_dev(target, div3, anchor);
    			mount_component(prism1, div3, null);
    			insert_dev(target, t8, anchor);
    			insert_dev(target, div4, anchor);
    			append_dev(div4, p1);
    			append_dev(div4, t10);
    			mount_component(buttongroup3, div4, null);
    			insert_dev(target, t11, anchor);
    			mount_component(prism2, target, anchor);
    			insert_dev(target, t12, anchor);
    			insert_dev(target, p2, anchor);
    			insert_dev(target, t14, anchor);
    			insert_dev(target, ul, anchor);
    			append_dev(ul, li0);
    			append_dev(ul, t16);
    			append_dev(ul, li1);
    			append_dev(ul, t18);
    			append_dev(ul, li2);
    			append_dev(ul, t20);
    			append_dev(ul, li3);
    			insert_dev(target, t22, anchor);
    			insert_dev(target, div5, anchor);
    			mount_component(buttongroup4, div5, null);
    			insert_dev(target, t23, anchor);
    			insert_dev(target, div6, anchor);
    			mount_component(buttongroup5, div6, null);
    			insert_dev(target, t24, anchor);
    			insert_dev(target, div7, anchor);
    			mount_component(buttongroup6, div7, null);
    			insert_dev(target, t25, anchor);
    			insert_dev(target, div8, anchor);
    			mount_component(buttongroup7, div8, null);
    			insert_dev(target, t26, anchor);
    			insert_dev(target, p3, anchor);
    			insert_dev(target, t28, anchor);
    			insert_dev(target, div9, anchor);
    			mount_component(buttongroup8, div9, null);
    			insert_dev(target, t29, anchor);
    			mount_component(prism3, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const buttongroup0_changes = {};

    			if (dirty & /*$$scope*/ 524288) {
    				buttongroup0_changes.$$scope = { dirty, ctx };
    			}

    			buttongroup0.$set(buttongroup0_changes);
    			const buttongroup1_changes = {};

    			if (dirty & /*$$scope*/ 524288) {
    				buttongroup1_changes.$$scope = { dirty, ctx };
    			}

    			buttongroup1.$set(buttongroup1_changes);
    			const buttongroup2_changes = {};

    			if (dirty & /*$$scope*/ 524288) {
    				buttongroup2_changes.$$scope = { dirty, ctx };
    			}

    			buttongroup2.$set(buttongroup2_changes);
    			const buttongroup3_changes = {};

    			if (dirty & /*$$scope*/ 524288) {
    				buttongroup3_changes.$$scope = { dirty, ctx };
    			}

    			buttongroup3.$set(buttongroup3_changes);
    			const buttongroup4_changes = {};

    			if (dirty & /*$$scope*/ 524288) {
    				buttongroup4_changes.$$scope = { dirty, ctx };
    			}

    			buttongroup4.$set(buttongroup4_changes);
    			const buttongroup5_changes = {};

    			if (dirty & /*$$scope*/ 524288) {
    				buttongroup5_changes.$$scope = { dirty, ctx };
    			}

    			buttongroup5.$set(buttongroup5_changes);
    			const buttongroup6_changes = {};

    			if (dirty & /*$$scope*/ 524288) {
    				buttongroup6_changes.$$scope = { dirty, ctx };
    			}

    			buttongroup6.$set(buttongroup6_changes);
    			const buttongroup7_changes = {};

    			if (dirty & /*$$scope*/ 524288) {
    				buttongroup7_changes.$$scope = { dirty, ctx };
    			}

    			buttongroup7.$set(buttongroup7_changes);
    			const buttongroup8_changes = {};

    			if (dirty & /*$$scope*/ 524288) {
    				buttongroup8_changes.$$scope = { dirty, ctx };
    			}

    			buttongroup8.$set(buttongroup8_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism0.$$.fragment, local);
    			transition_in(buttongroup0.$$.fragment, local);
    			transition_in(buttongroup1.$$.fragment, local);
    			transition_in(buttongroup2.$$.fragment, local);
    			transition_in(prism1.$$.fragment, local);
    			transition_in(buttongroup3.$$.fragment, local);
    			transition_in(prism2.$$.fragment, local);
    			transition_in(buttongroup4.$$.fragment, local);
    			transition_in(buttongroup5.$$.fragment, local);
    			transition_in(buttongroup6.$$.fragment, local);
    			transition_in(buttongroup7.$$.fragment, local);
    			transition_in(buttongroup8.$$.fragment, local);
    			transition_in(prism3.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism0.$$.fragment, local);
    			transition_out(buttongroup0.$$.fragment, local);
    			transition_out(buttongroup1.$$.fragment, local);
    			transition_out(buttongroup2.$$.fragment, local);
    			transition_out(prism1.$$.fragment, local);
    			transition_out(buttongroup3.$$.fragment, local);
    			transition_out(prism2.$$.fragment, local);
    			transition_out(buttongroup4.$$.fragment, local);
    			transition_out(buttongroup5.$$.fragment, local);
    			transition_out(buttongroup6.$$.fragment, local);
    			transition_out(buttongroup7.$$.fragment, local);
    			transition_out(buttongroup8.$$.fragment, local);
    			transition_out(prism3.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			destroy_component(prism0, detaching);
    			if (detaching) detach_dev(t2);
    			destroy_component(buttongroup0, detaching);
    			if (detaching) detach_dev(t3);
    			if (detaching) detach_dev(p0);
    			if (detaching) detach_dev(t5);
    			if (detaching) detach_dev(div2);
    			destroy_component(buttongroup1);
    			destroy_component(buttongroup2);
    			if (detaching) detach_dev(t7);
    			if (detaching) detach_dev(div3);
    			destroy_component(prism1);
    			if (detaching) detach_dev(t8);
    			if (detaching) detach_dev(div4);
    			destroy_component(buttongroup3);
    			if (detaching) detach_dev(t11);
    			destroy_component(prism2, detaching);
    			if (detaching) detach_dev(t12);
    			if (detaching) detach_dev(p2);
    			if (detaching) detach_dev(t14);
    			if (detaching) detach_dev(ul);
    			if (detaching) detach_dev(t22);
    			if (detaching) detach_dev(div5);
    			destroy_component(buttongroup4);
    			if (detaching) detach_dev(t23);
    			if (detaching) detach_dev(div6);
    			destroy_component(buttongroup5);
    			if (detaching) detach_dev(t24);
    			if (detaching) detach_dev(div7);
    			destroy_component(buttongroup6);
    			if (detaching) detach_dev(t25);
    			if (detaching) detach_dev(div8);
    			destroy_component(buttongroup7);
    			if (detaching) detach_dev(t26);
    			if (detaching) detach_dev(p3);
    			if (detaching) detach_dev(t28);
    			if (detaching) detach_dev(div9);
    			destroy_component(buttongroup8);
    			if (detaching) detach_dev(t29);
    			destroy_component(prism3, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$j.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$j($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("ButtonGroup", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1$1.warn(`<ButtonGroup> was created with unknown prop '${key}'`);
    	});

    	const click_handler = () => {
    		console.log("Click 1");
    	};

    	const click_handler_1 = () => {
    		console.log("Click 2");
    	};

    	const click_handler_2 = () => {
    		console.log("Click 1");
    	};

    	const click_handler_3 = () => {
    		console.log("Click 2");
    	};

    	const click_handler_4 = () => {
    		console.log("Button 1");
    	};

    	const click_handler_5 = () => {
    		console.log("Button 2");
    	};

    	const click_handler_6 = () => {
    		console.log("Button 3");
    	};

    	const click_handler_7 = () => {
    		console.log("Click 1");
    	};

    	const click_handler_8 = () => {
    		console.log("Click 2");
    	};

    	const click_handler_9 = () => {
    		console.log("Click 1");
    	};

    	const click_handler_10 = () => {
    		console.log("Click 2");
    	};

    	const click_handler_11 = () => {
    		console.log("Click 1");
    	};

    	const click_handler_12 = () => {
    		console.log("Click 2");
    	};

    	const click_handler_13 = () => {
    		console.log("Click 1");
    	};

    	const click_handler_14 = () => {
    		console.log("Click 2");
    	};

    	const click_handler_15 = () => {
    		console.log("Click 1");
    	};

    	const click_handler_16 = () => {
    		console.log("Click 2");
    	};

    	const click_handler_17 = () => {
    		console.log("Click 1");
    	};

    	const click_handler_18 = () => {
    		console.log("Click 2");
    	};

    	$$self.$capture_state = () => ({ Prism: Prism$1, Button, ButtonGroup });

    	return [
    		click_handler,
    		click_handler_1,
    		click_handler_2,
    		click_handler_3,
    		click_handler_4,
    		click_handler_5,
    		click_handler_6,
    		click_handler_7,
    		click_handler_8,
    		click_handler_9,
    		click_handler_10,
    		click_handler_11,
    		click_handler_12,
    		click_handler_13,
    		click_handler_14,
    		click_handler_15,
    		click_handler_16,
    		click_handler_17,
    		click_handler_18
    	];
    }

    class ButtonGroup_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$j, create_fragment$j, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "ButtonGroup_1",
    			options,
    			id: create_fragment$j.name
    		});
    	}
    }

    /* docs_src/components/Card.svelte generated by Svelte v3.38.1 */
    const file$i = "docs_src/components/Card.svelte";

    // (7:4) 
    function create_header_slot_1(ctx) {
    	let div;

    	const block = {
    		c: function create() {
    			div = element("div");
    			div.textContent = "Header";
    			attr_dev(div, "slot", "header");
    			add_location(div, file$i, 6, 4, 171);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_header_slot_1.name,
    		type: "slot",
    		source: "(7:4) ",
    		ctx
    	});

    	return block;
    }

    // (8:4) 
    function create_content_slot_1(ctx) {
    	let div;

    	const block = {
    		c: function create() {
    			div = element("div");
    			div.textContent = "Her er der indhold, der bare er godt";
    			attr_dev(div, "slot", "content");
    			add_location(div, file$i, 7, 4, 207);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_content_slot_1.name,
    		type: "slot",
    		source: "(8:4) ",
    		ctx
    	});

    	return block;
    }

    // (9:4) 
    function create_footer_slot_1(ctx) {
    	let div;

    	const block = {
    		c: function create() {
    			div = element("div");
    			div.textContent = "Vi har også en footer";
    			attr_dev(div, "slot", "footer");
    			add_location(div, file$i, 8, 4, 274);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_footer_slot_1.name,
    		type: "slot",
    		source: "(9:4) ",
    		ctx
    	});

    	return block;
    }

    // (12:4) 
    function create_header_slot(ctx) {
    	let div;
    	let b;

    	const block = {
    		c: function create() {
    			div = element("div");
    			b = element("b");
    			b.textContent = "Avisen";
    			add_location(b, file$i, 12, 6, 418);
    			attr_dev(div, "class", "text-align--center");
    			attr_dev(div, "slot", "header");
    			add_location(div, file$i, 11, 4, 365);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, b);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_header_slot.name,
    		type: "slot",
    		source: "(12:4) ",
    		ctx
    	});

    	return block;
    }

    // (15:4) 
    function create_content_slot(ctx) {
    	let div;
    	let p0;
    	let t1;
    	let p1;
    	let t3;
    	let h3;
    	let t4;
    	let small;

    	const block = {
    		c: function create() {
    			div = element("div");
    			p0 = element("p");
    			p0.textContent = "Cras sed viverra tortor. Sed dictum lacus nec velit ultricies viverra sed tincidunt mi. Nulla mi velit, dictum\n        sed tempor vitae, mattis a felis.";
    			t1 = space();
    			p1 = element("p");
    			p1.textContent = "Buy for only:";
    			t3 = space();
    			h3 = element("h3");
    			t4 = text("120");
    			small = element("small");
    			small.textContent = ",-";
    			attr_dev(p0, "class", "margin-none margin-l--b");
    			add_location(p0, file$i, 15, 6, 474);
    			attr_dev(p1, "class", "card-meta color--graa2 text-align--center");
    			add_location(p1, file$i, 19, 6, 688);
    			add_location(small, file$i, 20, 51, 810);
    			attr_dev(h3, "class", "card-title text-align--center");
    			add_location(h3, file$i, 20, 6, 765);
    			attr_dev(div, "slot", "content");
    			add_location(div, file$i, 14, 4, 447);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, p0);
    			append_dev(div, t1);
    			append_dev(div, p1);
    			append_dev(div, t3);
    			append_dev(div, h3);
    			append_dev(h3, t4);
    			append_dev(h3, small);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_content_slot.name,
    		type: "slot",
    		source: "(15:4) ",
    		ctx
    	});

    	return block;
    }

    // (24:6) <Button>
    function create_default_slot_1$4(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Vælg");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1$4.name,
    		type: "slot",
    		source: "(24:6) <Button>",
    		ctx
    	});

    	return block;
    }

    // (23:4) 
    function create_footer_slot(ctx) {
    	let div;
    	let button;
    	let current;

    	button = new Button({
    			props: {
    				$$slots: { default: [create_default_slot_1$4] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div = element("div");
    			create_component(button.$$.fragment);
    			attr_dev(div, "class", "text-align--center");
    			attr_dev(div, "slot", "footer");
    			add_location(div, file$i, 22, 4, 848);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			mount_component(button, div, null);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const button_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				button_changes.$$scope = { dirty, ctx };
    			}

    			button.$set(button_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(button.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(button.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_component(button);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_footer_slot.name,
    		type: "slot",
    		source: "(23:4) ",
    		ctx
    	});

    	return block;
    }

    // (27:2) <Card className="margin-l card--small-media">
    function create_default_slot$6(ctx) {
    	let div0;
    	let img;
    	let img_src_value;
    	let t0;
    	let div1;
    	let p;
    	let small;
    	let span;
    	let t2;
    	let t3;
    	let h2;

    	const block = {
    		c: function create() {
    			div0 = element("div");
    			img = element("img");
    			t0 = space();
    			div1 = element("div");
    			p = element("p");
    			small = element("small");
    			span = element("span");
    			span.textContent = "Danske kongelige";
    			t2 = text(" - 5 timer siden");
    			t3 = space();
    			h2 = element("h2");
    			h2.textContent = "Grundet corona: Tjener millioner";
    			attr_dev(img, "class", "card-image");
    			if (img.src !== (img_src_value = "https://via.placeholder.com/150x84&text=150x84")) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "loading", "lazy");
    			attr_dev(img, "alt", "");
    			attr_dev(img, "title", "");
    			attr_dev(img, "height", "84");
    			attr_dev(img, "width", "150");
    			add_location(img, file$i, 28, 6, 1027);
    			attr_dev(div0, "class", "card-media");
    			add_location(div0, file$i, 27, 4, 996);
    			attr_dev(span, "class", "color--flash");
    			add_location(span, file$i, 40, 15, 1322);
    			add_location(small, file$i, 40, 8, 1315);
    			attr_dev(p, "class", "card-meta color--graa3");
    			add_location(p, file$i, 39, 6, 1272);
    			attr_dev(h2, "class", "card-title");
    			add_location(h2, file$i, 42, 6, 1414);
    			attr_dev(div1, "class", "card-content");
    			add_location(div1, file$i, 38, 4, 1239);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div0, anchor);
    			append_dev(div0, img);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, div1, anchor);
    			append_dev(div1, p);
    			append_dev(p, small);
    			append_dev(small, span);
    			append_dev(small, t2);
    			append_dev(div1, t3);
    			append_dev(div1, h2);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div0);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(div1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$6.name,
    		type: "slot",
    		source: "(27:2) <Card className=\\\"margin-l card--small-media\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$i(ctx) {
    	let div;
    	let h1;
    	let t1;
    	let card0;
    	let t2;
    	let card1;
    	let t3;
    	let card2;
    	let current;

    	card0 = new Card({
    			props: {
    				className: "margin-l",
    				$$slots: {
    					footer: [create_footer_slot_1],
    					content: [create_content_slot_1],
    					header: [create_header_slot_1]
    				},
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	card1 = new Card({
    			props: {
    				className: "margin-l",
    				$$slots: {
    					footer: [create_footer_slot],
    					content: [create_content_slot],
    					header: [create_header_slot]
    				},
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	card2 = new Card({
    			props: {
    				className: "margin-l card--small-media",
    				$$slots: { default: [create_default_slot$6] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div = element("div");
    			h1 = element("h1");
    			h1.textContent = "Card";
    			t1 = space();
    			create_component(card0.$$.fragment);
    			t2 = space();
    			create_component(card1.$$.fragment);
    			t3 = space();
    			create_component(card2.$$.fragment);
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$i, 4, 2, 105);
    			attr_dev(div, "class", "grid-width--small");
    			add_location(div, file$i, 3, 0, 71);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, h1);
    			append_dev(div, t1);
    			mount_component(card0, div, null);
    			append_dev(div, t2);
    			mount_component(card1, div, null);
    			append_dev(div, t3);
    			mount_component(card2, div, null);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const card0_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				card0_changes.$$scope = { dirty, ctx };
    			}

    			card0.$set(card0_changes);
    			const card1_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				card1_changes.$$scope = { dirty, ctx };
    			}

    			card1.$set(card1_changes);
    			const card2_changes = {};

    			if (dirty & /*$$scope*/ 1) {
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
    			if (detaching) detach_dev(div);
    			destroy_component(card0);
    			destroy_component(card1);
    			destroy_component(card2);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$i.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$i($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Card", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Card> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ Button, Card });
    	return [];
    }

    class Card_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$i, create_fragment$i, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Card_1",
    			options,
    			id: create_fragment$i.name
    		});
    	}
    }

    /* docs_src/components/FormElement.svelte generated by Svelte v3.38.1 */
    const file$h = "docs_src/components/FormElement.svelte";

    // (9:0) <FormElement inputtype="select" label="Noget indhold her">
    function create_default_slot$5(ctx) {
    	let option0;
    	let t1;
    	let option1;

    	const block = {
    		c: function create() {
    			option0 = element("option");
    			option0.textContent = "Option 1";
    			t1 = space();
    			option1 = element("option");
    			option1.textContent = "Option 2";
    			option0.__value = "optioin1";
    			option0.value = option0.__value;
    			add_location(option0, file$h, 9, 2, 358);
    			option1.__value = "optioin2";
    			option1.value = option1.__value;
    			add_location(option1, file$h, 10, 2, 403);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, option0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, option1, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(option0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(option1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$5.name,
    		type: "slot",
    		source: "(9:0) <FormElement inputtype=\\\"select\\\" label=\\\"Noget indhold her\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$h(ctx) {
    	let formelement0;
    	let t0;
    	let formelement1;
    	let t1;
    	let formelement2;
    	let t2;
    	let formelement3;
    	let t3;
    	let formelement4;
    	let t4;
    	let formelement5;
    	let updating_group;
    	let t5;
    	let formelement6;
    	let updating_group_1;
    	let t6;
    	let formelement7;
    	let t7;
    	let formelement8;
    	let current;

    	formelement0 = new FormElement({
    			props: {
    				inputtype: "text",
    				size: "small",
    				label: "input size small"
    			},
    			$$inline: true
    		});

    	formelement1 = new FormElement({
    			props: {
    				inputtype: "text",
    				label: "input size medium(standard)"
    			},
    			$$inline: true
    		});

    	formelement2 = new FormElement({
    			props: {
    				inputtype: "text",
    				size: "large",
    				label: "input size large"
    			},
    			$$inline: true
    		});

    	formelement3 = new FormElement({
    			props: {
    				inputtype: "select",
    				label: "Noget indhold her",
    				$$slots: { default: [create_default_slot$5] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	formelement4 = new FormElement({
    			props: {
    				inputtype: "checkbox",
    				label: "Check denne her"
    			},
    			$$inline: true
    		});

    	function formelement5_group_binding(value) {
    		/*formelement5_group_binding*/ ctx[1](value);
    	}

    	let formelement5_props = {
    		inputtype: "radio",
    		label: "Radio denne her",
    		value: 1
    	};

    	if (/*radio*/ ctx[0] !== void 0) {
    		formelement5_props.group = /*radio*/ ctx[0];
    	}

    	formelement5 = new FormElement({
    			props: formelement5_props,
    			$$inline: true
    		});

    	binding_callbacks.push(() => bind(formelement5, "group", formelement5_group_binding));

    	function formelement6_group_binding(value) {
    		/*formelement6_group_binding*/ ctx[2](value);
    	}

    	let formelement6_props = {
    		inputtype: "radio",
    		label: "Radio denne her også",
    		value: 2
    	};

    	if (/*radio*/ ctx[0] !== void 0) {
    		formelement6_props.group = /*radio*/ ctx[0];
    	}

    	formelement6 = new FormElement({
    			props: formelement6_props,
    			$$inline: true
    		});

    	binding_callbacks.push(() => bind(formelement6, "group", formelement6_group_binding));

    	formelement7 = new FormElement({
    			props: {
    				inputtype: "number",
    				label: "Noget tal indhold her"
    			},
    			$$inline: true
    		});

    	formelement8 = new FormElement({
    			props: {
    				inputtype: "textarea",
    				label: "Kommentar label"
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(formelement0.$$.fragment);
    			t0 = space();
    			create_component(formelement1.$$.fragment);
    			t1 = space();
    			create_component(formelement2.$$.fragment);
    			t2 = space();
    			create_component(formelement3.$$.fragment);
    			t3 = space();
    			create_component(formelement4.$$.fragment);
    			t4 = space();
    			create_component(formelement5.$$.fragment);
    			t5 = space();
    			create_component(formelement6.$$.fragment);
    			t6 = space();
    			create_component(formelement7.$$.fragment);
    			t7 = space();
    			create_component(formelement8.$$.fragment);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			mount_component(formelement0, target, anchor);
    			insert_dev(target, t0, anchor);
    			mount_component(formelement1, target, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(formelement2, target, anchor);
    			insert_dev(target, t2, anchor);
    			mount_component(formelement3, target, anchor);
    			insert_dev(target, t3, anchor);
    			mount_component(formelement4, target, anchor);
    			insert_dev(target, t4, anchor);
    			mount_component(formelement5, target, anchor);
    			insert_dev(target, t5, anchor);
    			mount_component(formelement6, target, anchor);
    			insert_dev(target, t6, anchor);
    			mount_component(formelement7, target, anchor);
    			insert_dev(target, t7, anchor);
    			mount_component(formelement8, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const formelement3_changes = {};

    			if (dirty & /*$$scope*/ 8) {
    				formelement3_changes.$$scope = { dirty, ctx };
    			}

    			formelement3.$set(formelement3_changes);
    			const formelement5_changes = {};

    			if (!updating_group && dirty & /*radio*/ 1) {
    				updating_group = true;
    				formelement5_changes.group = /*radio*/ ctx[0];
    				add_flush_callback(() => updating_group = false);
    			}

    			formelement5.$set(formelement5_changes);
    			const formelement6_changes = {};

    			if (!updating_group_1 && dirty & /*radio*/ 1) {
    				updating_group_1 = true;
    				formelement6_changes.group = /*radio*/ ctx[0];
    				add_flush_callback(() => updating_group_1 = false);
    			}

    			formelement6.$set(formelement6_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(formelement0.$$.fragment, local);
    			transition_in(formelement1.$$.fragment, local);
    			transition_in(formelement2.$$.fragment, local);
    			transition_in(formelement3.$$.fragment, local);
    			transition_in(formelement4.$$.fragment, local);
    			transition_in(formelement5.$$.fragment, local);
    			transition_in(formelement6.$$.fragment, local);
    			transition_in(formelement7.$$.fragment, local);
    			transition_in(formelement8.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(formelement0.$$.fragment, local);
    			transition_out(formelement1.$$.fragment, local);
    			transition_out(formelement2.$$.fragment, local);
    			transition_out(formelement3.$$.fragment, local);
    			transition_out(formelement4.$$.fragment, local);
    			transition_out(formelement5.$$.fragment, local);
    			transition_out(formelement6.$$.fragment, local);
    			transition_out(formelement7.$$.fragment, local);
    			transition_out(formelement8.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(formelement0, detaching);
    			if (detaching) detach_dev(t0);
    			destroy_component(formelement1, detaching);
    			if (detaching) detach_dev(t1);
    			destroy_component(formelement2, detaching);
    			if (detaching) detach_dev(t2);
    			destroy_component(formelement3, detaching);
    			if (detaching) detach_dev(t3);
    			destroy_component(formelement4, detaching);
    			if (detaching) detach_dev(t4);
    			destroy_component(formelement5, detaching);
    			if (detaching) detach_dev(t5);
    			destroy_component(formelement6, detaching);
    			if (detaching) detach_dev(t6);
    			destroy_component(formelement7, detaching);
    			if (detaching) detach_dev(t7);
    			destroy_component(formelement8, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$h.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$h($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("FormElement", slots, []);
    	let radio = 1;
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<FormElement> was created with unknown prop '${key}'`);
    	});

    	function formelement5_group_binding(value) {
    		radio = value;
    		$$invalidate(0, radio);
    	}

    	function formelement6_group_binding(value) {
    		radio = value;
    		$$invalidate(0, radio);
    	}

    	$$self.$capture_state = () => ({ FormElement, radio });

    	$$self.$inject_state = $$props => {
    		if ("radio" in $$props) $$invalidate(0, radio = $$props.radio);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [radio, formelement5_group_binding, formelement6_group_binding];
    }

    class FormElement_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$h, create_fragment$h, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "FormElement_1",
    			options,
    			id: create_fragment$h.name
    		});
    	}
    }

    /* docs_src/components/Icon.svelte generated by Svelte v3.38.1 */
    const file$g = "docs_src/components/Icon.svelte";

    function get_each_context$2(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[1] = list[i];
    	return child_ctx;
    }

    // (46:4) {#each icons as name}
    function create_each_block$2(ctx) {
    	let div;
    	let icon;
    	let t0;
    	let small;
    	let t1_value = /*name*/ ctx[1] + "";
    	let t1;
    	let t2;
    	let current;

    	icon = new Icon({
    			props: {
    				className: "margin-s",
    				style: "width: 36px; height: 36px;",
    				name: /*name*/ ctx[1]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div = element("div");
    			create_component(icon.$$.fragment);
    			t0 = space();
    			small = element("small");
    			t1 = text(t1_value);
    			t2 = space();
    			add_location(small, file$g, 51, 8, 1124);
    			attr_dev(div, "class", "flex flex-column flex-align--center flex-justify--center margin-m padding-m");
    			set_style(div, "border", "1px solid #111");
    			set_style(div, "border-radius", "5px");
    			add_location(div, file$g, 46, 6, 871);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			mount_component(icon, div, null);
    			append_dev(div, t0);
    			append_dev(div, small);
    			append_dev(small, t1);
    			append_dev(div, t2);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(icon.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(icon.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_component(icon);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$2.name,
    		type: "each",
    		source: "(46:4) {#each icons as name}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$g(ctx) {
    	let div1;
    	let h1;
    	let t1;
    	let p;
    	let t3;
    	let div0;
    	let t4;
    	let prism;
    	let current;
    	let each_value = /*icons*/ ctx[0];
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				source: `<Icon {name} className="margin-s" style="width: 36px; height: 36px;" />`
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div1 = element("div");
    			h1 = element("h1");
    			h1.textContent = "Icon library";
    			t1 = space();
    			p = element("p");
    			p.textContent = "Der findes følgende svg ikoner";
    			t3 = space();
    			div0 = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t4 = space();
    			create_component(prism.$$.fragment);
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$g, 41, 2, 721);
    			add_location(p, file$g, 42, 2, 763);
    			attr_dev(div0, "class", "flex flex-wrap--wrap");
    			add_location(div0, file$g, 44, 2, 804);
    			attr_dev(div1, "class", "grid-width--small");
    			add_location(div1, file$g, 40, 0, 687);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div1, anchor);
    			append_dev(div1, h1);
    			append_dev(div1, t1);
    			append_dev(div1, p);
    			append_dev(div1, t3);
    			append_dev(div1, div0);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div0, null);
    			}

    			append_dev(div1, t4);
    			mount_component(prism, div1, null);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*icons*/ 1) {
    				each_value = /*icons*/ ctx[0];
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$2(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$2(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(div0, null);
    					}
    				}

    				group_outros();

    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div1);
    			destroy_each(each_blocks, detaching);
    			destroy_component(prism);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$g.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$g($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Icon", slots, []);
    	

    	const icons = [
    		"angle-down",
    		"angle-left",
    		"angle-right",
    		"angle-up",
    		"article",
    		"check",
    		"clock",
    		"creditcard",
    		"ebplus_icon",
    		"ebplus_sort",
    		"envelope",
    		"figcaption-pin",
    		"gallery",
    		"headphones",
    		"headset",
    		"history-regular",
    		"lock-old",
    		"lock",
    		"medielogin",
    		"menu-bars",
    		"miteb-regular",
    		"miteb-solid",
    		"newspaper",
    		"play",
    		"smartphone",
    		"star-regular",
    		"tag-regular",
    		"tag-solid",
    		"tags-regular",
    		"tags-solid",
    		"toggle-off",
    		"toggle-on",
    		"video"
    	];

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Icon> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ Prism: Prism$1, Icon, icons });
    	return [icons];
    }

    class Icon_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$g, create_fragment$g, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Icon_1",
    			options,
    			id: create_fragment$g.name
    		});
    	}
    }

    /* docs_src/components/HorizontalScroll.svelte generated by Svelte v3.38.1 */
    const file$f = "docs_src/components/HorizontalScroll.svelte";

    function get_each_context$1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[1] = list[i];
    	return child_ctx;
    }

    // (89:4) {#each articles as article}
    function create_each_block$1(ctx) {
    	let articlecard;
    	let current;
    	const articlecard_spread_levels = [/*article*/ ctx[1], { style: "width: 215px;" }];
    	let articlecard_props = {};

    	for (let i = 0; i < articlecard_spread_levels.length; i += 1) {
    		articlecard_props = assign(articlecard_props, articlecard_spread_levels[i]);
    	}

    	articlecard = new ArticleCard({ props: articlecard_props, $$inline: true });

    	const block = {
    		c: function create() {
    			create_component(articlecard.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(articlecard, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const articlecard_changes = (dirty & /*articles*/ 1)
    			? get_spread_update(articlecard_spread_levels, [get_spread_object(/*article*/ ctx[1]), articlecard_spread_levels[1]])
    			: {};

    			articlecard.$set(articlecard_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(articlecard.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(articlecard.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(articlecard, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block$1.name,
    		type: "each",
    		source: "(89:4) {#each articles as article}",
    		ctx
    	});

    	return block;
    }

    // (88:2) <HorizontalScroll title="Liste med artikler">
    function create_default_slot$4(ctx) {
    	let each_1_anchor;
    	let current;
    	let each_value = /*articles*/ ctx[0];
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*articles*/ 1) {
    				each_value = /*articles*/ ctx[0];
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$1(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block$1(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				group_outros();

    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(each_1_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$4.name,
    		type: "slot",
    		source: "(88:2) <HorizontalScroll title=\\\"Liste med artikler\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$f(ctx) {
    	let h1;
    	let t1;
    	let div;
    	let horizontalscroll;
    	let current;

    	horizontalscroll = new HorizontalScroll({
    			props: {
    				title: "Liste med artikler",
    				$$slots: { default: [create_default_slot$4] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Horizontal Scroll";
    			t1 = space();
    			div = element("div");
    			create_component(horizontalscroll.$$.fragment);
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$f, 85, 0, 2445);
    			attr_dev(div, "class", "grid-width--small");
    			add_location(div, file$f, 86, 0, 2490);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div, anchor);
    			mount_component(horizontalscroll, div, null);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const horizontalscroll_changes = {};

    			if (dirty & /*$$scope*/ 16) {
    				horizontalscroll_changes.$$scope = { dirty, ctx };
    			}

    			horizontalscroll.$set(horizontalscroll_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(horizontalscroll.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(horizontalscroll.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div);
    			destroy_component(horizontalscroll);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$f.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$f($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("HorizontalScroll", slots, []);

    	let articles = [
    		{
    			href: "#",
    			isPlus: true,
    			media: {
    				src: "https://via.placeholder.com/610x343&text=610x343"
    			},
    			section: "Udenlandsk fodbold",
    			colorClass: "sport",
    			timestamp: "Thu Mar 18 2021 20:46:32",
    			title: `Sag om rockervold: 'Når han er på stoffer, siger han ting, der ikke passer'`
    		},
    		{
    			href: "#",
    			media: {
    				src: "https://via.placeholder.com/610x343&text=610x343"
    			},
    			section: "Landsholds foldbold",
    			colorClass: "sport",
    			timestamp: "Thu Mar 18 2021 17:46:32",
    			title: `Sag om rockervold: 'Når han er på stoffer, siger han ting, der ikke passer' - to til tre gange `
    		},
    		{
    			href: "#",
    			isPlus: true,
    			section: "Nyheder",
    			colorClass: "nyheder",
    			timestamp: "Thu Mar 18 2021 18:46:32",
    			title: `Sag om rockervold: 'Når han er på stoffer, siger han ting, der ikke passer' - to til tre gange`
    		},
    		{
    			href: "#",
    			isBreaking: true,
    			media: {
    				src: "https://via.placeholder.com/610x343&text=610x343"
    			},
    			section: "Sport",
    			colorClass: "sport",
    			timestamp: "Thu Mar 17 2021 21:46:32",
    			title: "List element 4"
    		},
    		{
    			href: "#",
    			isPlus: true,
    			media: {
    				src: "https://via.placeholder.com/610x343&text=610x343"
    			},
    			section: "Sport",
    			colorClass: "sport",
    			timestamp: "Thu Mar 18 2021 20:46:32",
    			title: "List element 1"
    		},
    		{
    			href: "#",
    			isPlus: true,
    			section: "Nyheder",
    			colorClass: "nyheder",
    			timestamp: "Thu Mar 18 2021 18:46:32",
    			title: "Det skal jo altså ikke være for nemt"
    		},
    		{
    			href: "#",
    			isBreaking: true,
    			media: {
    				src: "https://via.placeholder.com/610x343&text=610x343"
    			},
    			section: "Sport",
    			colorClass: "sport",
    			timestamp: "Thu Mar 18 2021 17:46:32",
    			title: "List element 3"
    		},
    		{
    			href: "#",
    			media: {
    				src: "https://via.placeholder.com/610x343&text=610x343"
    			},
    			section: "Sport",
    			colorClass: "sport",
    			timestamp: "Thu Mar 17 2021 21:46:32",
    			title: "List element 4"
    		}
    	];

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<HorizontalScroll> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ ArticleCard, HorizontalScroll, articles });

    	$$self.$inject_state = $$props => {
    		if ("articles" in $$props) $$invalidate(0, articles = $$props.articles);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [articles];
    }

    class HorizontalScroll_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$f, create_fragment$f, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "HorizontalScroll_1",
    			options,
    			id: create_fragment$f.name
    		});
    	}
    }

    /* docs_src/components/PillNavigation.svelte generated by Svelte v3.38.1 */
    const file$e = "docs_src/components/PillNavigation.svelte";

    // (15:6) <Pill>
    function create_default_slot_13(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Toggle 1");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_13.name,
    		type: "slot",
    		source: "(15:6) <Pill>",
    		ctx
    	});

    	return block;
    }

    // (16:6) <Pill>
    function create_default_slot_12(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Toggle 2");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_12.name,
    		type: "slot",
    		source: "(16:6) <Pill>",
    		ctx
    	});

    	return block;
    }

    // (14:4) <PillList>
    function create_default_slot_11(ctx) {
    	let pill0;
    	let t;
    	let pill1;
    	let current;

    	pill0 = new Pill({
    			props: {
    				$$slots: { default: [create_default_slot_13] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	pill1 = new Pill({
    			props: {
    				$$slots: { default: [create_default_slot_12] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(pill0.$$.fragment);
    			t = space();
    			create_component(pill1.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(pill0, target, anchor);
    			insert_dev(target, t, anchor);
    			mount_component(pill1, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const pill0_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				pill0_changes.$$scope = { dirty, ctx };
    			}

    			pill0.$set(pill0_changes);
    			const pill1_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				pill1_changes.$$scope = { dirty, ctx };
    			}

    			pill1.$set(pill1_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(pill0.$$.fragment, local);
    			transition_in(pill1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(pill0.$$.fragment, local);
    			transition_out(pill1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(pill0, detaching);
    			if (detaching) detach_dev(t);
    			destroy_component(pill1, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_11.name,
    		type: "slot",
    		source: "(14:4) <PillList>",
    		ctx
    	});

    	return block;
    }

    // (18:4) <PillContent>
    function create_default_slot_10(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Content 1");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_10.name,
    		type: "slot",
    		source: "(18:4) <PillContent>",
    		ctx
    	});

    	return block;
    }

    // (19:4) <PillContent>
    function create_default_slot_9(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Content 2");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_9.name,
    		type: "slot",
    		source: "(19:4) <PillContent>",
    		ctx
    	});

    	return block;
    }

    // (13:2) <PillNavigation>
    function create_default_slot_8$1(ctx) {
    	let pilllist;
    	let t0;
    	let pillcontent0;
    	let t1;
    	let pillcontent1;
    	let current;

    	pilllist = new PillList({
    			props: {
    				$$slots: { default: [create_default_slot_11] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	pillcontent0 = new PillContent({
    			props: {
    				$$slots: { default: [create_default_slot_10] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	pillcontent1 = new PillContent({
    			props: {
    				$$slots: { default: [create_default_slot_9] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(pilllist.$$.fragment);
    			t0 = space();
    			create_component(pillcontent0.$$.fragment);
    			t1 = space();
    			create_component(pillcontent1.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(pilllist, target, anchor);
    			insert_dev(target, t0, anchor);
    			mount_component(pillcontent0, target, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(pillcontent1, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const pilllist_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				pilllist_changes.$$scope = { dirty, ctx };
    			}

    			pilllist.$set(pilllist_changes);
    			const pillcontent0_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				pillcontent0_changes.$$scope = { dirty, ctx };
    			}

    			pillcontent0.$set(pillcontent0_changes);
    			const pillcontent1_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				pillcontent1_changes.$$scope = { dirty, ctx };
    			}

    			pillcontent1.$set(pillcontent1_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(pilllist.$$.fragment, local);
    			transition_in(pillcontent0.$$.fragment, local);
    			transition_in(pillcontent1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(pilllist.$$.fragment, local);
    			transition_out(pillcontent0.$$.fragment, local);
    			transition_out(pillcontent1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(pilllist, detaching);
    			if (detaching) detach_dev(t0);
    			destroy_component(pillcontent0, detaching);
    			if (detaching) detach_dev(t1);
    			destroy_component(pillcontent1, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_8$1.name,
    		type: "slot",
    		source: "(13:2) <PillNavigation>",
    		ctx
    	});

    	return block;
    }

    // (40:6) <Pill>
    function create_default_slot_7$1(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Toggle 1");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_7$1.name,
    		type: "slot",
    		source: "(40:6) <Pill>",
    		ctx
    	});

    	return block;
    }

    // (41:6) <Pill>
    function create_default_slot_6$1(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Toggle 2");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_6$1.name,
    		type: "slot",
    		source: "(41:6) <Pill>",
    		ctx
    	});

    	return block;
    }

    // (42:6) <Pill>
    function create_default_slot_5$2(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Toggle 3");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_5$2.name,
    		type: "slot",
    		source: "(42:6) <Pill>",
    		ctx
    	});

    	return block;
    }

    // (39:4) <PillList>
    function create_default_slot_4$2(ctx) {
    	let pill0;
    	let t0;
    	let pill1;
    	let t1;
    	let pill2;
    	let current;

    	pill0 = new Pill({
    			props: {
    				$$slots: { default: [create_default_slot_7$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	pill1 = new Pill({
    			props: {
    				$$slots: { default: [create_default_slot_6$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	pill2 = new Pill({
    			props: {
    				$$slots: { default: [create_default_slot_5$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(pill0.$$.fragment);
    			t0 = space();
    			create_component(pill1.$$.fragment);
    			t1 = space();
    			create_component(pill2.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(pill0, target, anchor);
    			insert_dev(target, t0, anchor);
    			mount_component(pill1, target, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(pill2, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const pill0_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				pill0_changes.$$scope = { dirty, ctx };
    			}

    			pill0.$set(pill0_changes);
    			const pill1_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				pill1_changes.$$scope = { dirty, ctx };
    			}

    			pill1.$set(pill1_changes);
    			const pill2_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				pill2_changes.$$scope = { dirty, ctx };
    			}

    			pill2.$set(pill2_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(pill0.$$.fragment, local);
    			transition_in(pill1.$$.fragment, local);
    			transition_in(pill2.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(pill0.$$.fragment, local);
    			transition_out(pill1.$$.fragment, local);
    			transition_out(pill2.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(pill0, detaching);
    			if (detaching) detach_dev(t0);
    			destroy_component(pill1, detaching);
    			if (detaching) detach_dev(t1);
    			destroy_component(pill2, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_4$2.name,
    		type: "slot",
    		source: "(39:4) <PillList>",
    		ctx
    	});

    	return block;
    }

    // (44:4) <PillContent>
    function create_default_slot_3$2(ctx) {
    	let div;
    	let h1;
    	let t1;
    	let p;

    	const block = {
    		c: function create() {
    			div = element("div");
    			h1 = element("h1");
    			h1.textContent = "Content 1";
    			t1 = space();
    			p = element("p");
    			p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porttitor sagittis metus in efficitur.\n          Phasellus molestie scelerisque commodo. Fusce accumsan efficitur urna eu tristique. Proin semper fermentum\n          ante sed molestie. Sed nec quam orci. Nunc diam neque, blandit a dictum id, posuere in lacus. Nulla rutrum\n          pretium nulla. Aenean sollicitudin, magna et eleifend mollis, tortor turpis varius nibh, non interdum lectus\n          orci ac libero. Curabitur nisi libero, pellentesque ut mi eget, efficitur efficitur sem.";
    			add_location(h1, file$e, 45, 8, 1000);
    			add_location(p, file$e, 46, 8, 1027);
    			add_location(div, file$e, 44, 6, 986);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, h1);
    			append_dev(div, t1);
    			append_dev(div, p);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_3$2.name,
    		type: "slot",
    		source: "(44:4) <PillContent>",
    		ctx
    	});

    	return block;
    }

    // (56:4) <PillContent>
    function create_default_slot_2$2(ctx) {
    	let div;
    	let h1;
    	let t1;
    	let p;

    	const block = {
    		c: function create() {
    			div = element("div");
    			h1 = element("h1");
    			h1.textContent = "Content 2";
    			t1 = space();
    			p = element("p");
    			p.textContent = "Aenean in ipsum varius, facilisis leo nec, aliquam mauris. Nunc sagittis nunc interdum consectetur posuere.\n          Vivamus tempus volutpat orci. Maecenas luctus posuere massa sollicitudin ultrices. Nam venenatis feugiat\n          imperdiet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent efficitur ex vel lacus\n          vehicula convallis. Vivamus a metus facilisis, consequat felis vitae, fringilla nisi. Aliquam maximus nibh eu\n          justo lobortis auctor. In facilisis iaculis sodales. Aliquam vehicula, massa nec eleifend maximus, elit ante\n          convallis eros, ac ultricies justo risus non turpis. Class aptent taciti sociosqu ad litora torquent per\n          conubia nostra, per inceptos himenaeos. Maecenas ornare ex vitae tellus aliquet, a iaculis turpis vehicula.\n          Vestibulum scelerisque metus lectus, id egestas eros dignissim ut. Aenean et nisi vel purus vehicula lacinia\n          ut sit amet ligula. Sed ultrices nisi orci, non pellentesque erat dignissim ac.";
    			add_location(h1, file$e, 57, 8, 1682);
    			add_location(p, file$e, 58, 8, 1709);
    			add_location(div, file$e, 56, 6, 1668);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, h1);
    			append_dev(div, t1);
    			append_dev(div, p);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2$2.name,
    		type: "slot",
    		source: "(56:4) <PillContent>",
    		ctx
    	});

    	return block;
    }

    // (72:4) <PillContent>
    function create_default_slot_1$3(ctx) {
    	let div;
    	let h1;
    	let t1;
    	let p;

    	const block = {
    		c: function create() {
    			div = element("div");
    			h1 = element("h1");
    			h1.textContent = "Content 3";
    			t1 = space();
    			p = element("p");
    			p.textContent = "Donec mattis arcu metus, et accumsan erat consectetur eget. Pellentesque porta sollicitudin lectus, a commodo\n          sem sollicitudin sit amet. Sed pharetra vel nulla id bibendum. In consectetur pulvinar purus non cursus. In\n          hac habitasse platea dictumst. Nullam placerat nunc sem, at auctor massa venenatis nec. Ut at dignissim dolor.\n          Pellentesque vestibulum porta lorem, a iaculis felis accumsan vel. Sed vel orci vehicula dolor congue eleifend\n          et non nibh. Duis a pharetra diam, a dapibus dui. Aenean maximus fringilla nunc, ut sollicitudin erat\n          vulputate tincidunt. Proin nisl ipsum, tristique et varius sit amet, elementum eget magna. Phasellus eu est\n          pretium erat blandit suscipit sed eu nisl.";
    			add_location(h1, file$e, 73, 8, 2825);
    			add_location(p, file$e, 74, 8, 2852);
    			add_location(div, file$e, 72, 6, 2811);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, h1);
    			append_dev(div, t1);
    			append_dev(div, p);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1$3.name,
    		type: "slot",
    		source: "(72:4) <PillContent>",
    		ctx
    	});

    	return block;
    }

    // (38:2) <PillNavigation>
    function create_default_slot$3(ctx) {
    	let pilllist;
    	let t0;
    	let pillcontent0;
    	let t1;
    	let pillcontent1;
    	let t2;
    	let pillcontent2;
    	let current;

    	pilllist = new PillList({
    			props: {
    				$$slots: { default: [create_default_slot_4$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	pillcontent0 = new PillContent({
    			props: {
    				$$slots: { default: [create_default_slot_3$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	pillcontent1 = new PillContent({
    			props: {
    				$$slots: { default: [create_default_slot_2$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	pillcontent2 = new PillContent({
    			props: {
    				$$slots: { default: [create_default_slot_1$3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(pilllist.$$.fragment);
    			t0 = space();
    			create_component(pillcontent0.$$.fragment);
    			t1 = space();
    			create_component(pillcontent1.$$.fragment);
    			t2 = space();
    			create_component(pillcontent2.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(pilllist, target, anchor);
    			insert_dev(target, t0, anchor);
    			mount_component(pillcontent0, target, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(pillcontent1, target, anchor);
    			insert_dev(target, t2, anchor);
    			mount_component(pillcontent2, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const pilllist_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				pilllist_changes.$$scope = { dirty, ctx };
    			}

    			pilllist.$set(pilllist_changes);
    			const pillcontent0_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				pillcontent0_changes.$$scope = { dirty, ctx };
    			}

    			pillcontent0.$set(pillcontent0_changes);
    			const pillcontent1_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				pillcontent1_changes.$$scope = { dirty, ctx };
    			}

    			pillcontent1.$set(pillcontent1_changes);
    			const pillcontent2_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				pillcontent2_changes.$$scope = { dirty, ctx };
    			}

    			pillcontent2.$set(pillcontent2_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(pilllist.$$.fragment, local);
    			transition_in(pillcontent0.$$.fragment, local);
    			transition_in(pillcontent1.$$.fragment, local);
    			transition_in(pillcontent2.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(pilllist.$$.fragment, local);
    			transition_out(pillcontent0.$$.fragment, local);
    			transition_out(pillcontent1.$$.fragment, local);
    			transition_out(pillcontent2.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(pilllist, detaching);
    			if (detaching) detach_dev(t0);
    			destroy_component(pillcontent0, detaching);
    			if (detaching) detach_dev(t1);
    			destroy_component(pillcontent1, detaching);
    			if (detaching) detach_dev(t2);
    			destroy_component(pillcontent2, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$3.name,
    		type: "slot",
    		source: "(38:2) <PillNavigation>",
    		ctx
    	});

    	return block;
    }

    function create_fragment$e(ctx) {
    	let h1;
    	let t1;
    	let prism0;
    	let t2;
    	let div0;
    	let pillnavigation0;
    	let t3;
    	let prism1;
    	let t4;
    	let div1;
    	let pillnavigation1;
    	let t5;
    	let prism2;
    	let current;

    	prism0 = new Prism$1({
    			props: {
    				language: "js",
    				source: `import { PillNavigation, Pill, PillContent, PillList } from '@ekstra-bladet/designsystem';`
    			},
    			$$inline: true
    		});

    	pillnavigation0 = new PillNavigation({
    			props: {
    				$$slots: { default: [create_default_slot_8$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism1 = new Prism$1({
    			props: {
    				language: "html",
    				source: `
<PillNavigation>
  <PillList>
    <Pill>Toggle 1</Pill>
    <Pill>Toggle 2</Pill>
  </PillList>
  <PillContent>Content 1</PillContent>
  <PillContent>Content 2</PillContent>
</PillNavigation>
`
    			},
    			$$inline: true
    		});

    	pillnavigation1 = new PillNavigation({
    			props: {
    				$$slots: { default: [create_default_slot$3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism2 = new Prism$1({
    			props: {
    				language: "html",
    				source: `
<PillNavigation>
    <PillList>
      <Pill>Toggle 1</Pill>
      <Pill>Toggle 2</Pill>
      <Pill>Toggle 3</Pill>
    </PillList>
    <PillContent>
      <div>
        <h1>Content 1</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing...
        </p>
      </div>
    </PillContent>
    <PillContent>
      <div>
        <h1>Content 2</h1>
        <p>
          Aenean in ipsum varius, facilisis leo nec...
        </p>
      </div>
    </PillContent>
    <PillContent>
      <div>
        <h1>Content 3</h1>
        <p>
          Donec mattis arcu metus, et accumsan erat...
        </p>
      </div>
    </PillContent>
  </PillNavigation>
`
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Pill navigation / Toggle buttons";
    			t1 = space();
    			create_component(prism0.$$.fragment);
    			t2 = space();
    			div0 = element("div");
    			create_component(pillnavigation0.$$.fragment);
    			t3 = space();
    			create_component(prism1.$$.fragment);
    			t4 = space();
    			div1 = element("div");
    			create_component(pillnavigation1.$$.fragment);
    			t5 = space();
    			create_component(prism2.$$.fragment);
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$e, 4, 0, 136);
    			attr_dev(div0, "class", "margin-xl");
    			add_location(div0, file$e, 11, 0, 328);
    			attr_dev(div1, "class", "margin-xl");
    			add_location(div1, file$e, 36, 0, 804);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(prism0, target, anchor);
    			insert_dev(target, t2, anchor);
    			insert_dev(target, div0, anchor);
    			mount_component(pillnavigation0, div0, null);
    			insert_dev(target, t3, anchor);
    			mount_component(prism1, target, anchor);
    			insert_dev(target, t4, anchor);
    			insert_dev(target, div1, anchor);
    			mount_component(pillnavigation1, div1, null);
    			insert_dev(target, t5, anchor);
    			mount_component(prism2, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const pillnavigation0_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				pillnavigation0_changes.$$scope = { dirty, ctx };
    			}

    			pillnavigation0.$set(pillnavigation0_changes);
    			const pillnavigation1_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				pillnavigation1_changes.$$scope = { dirty, ctx };
    			}

    			pillnavigation1.$set(pillnavigation1_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism0.$$.fragment, local);
    			transition_in(pillnavigation0.$$.fragment, local);
    			transition_in(prism1.$$.fragment, local);
    			transition_in(pillnavigation1.$$.fragment, local);
    			transition_in(prism2.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism0.$$.fragment, local);
    			transition_out(pillnavigation0.$$.fragment, local);
    			transition_out(prism1.$$.fragment, local);
    			transition_out(pillnavigation1.$$.fragment, local);
    			transition_out(prism2.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			destroy_component(prism0, detaching);
    			if (detaching) detach_dev(t2);
    			if (detaching) detach_dev(div0);
    			destroy_component(pillnavigation0);
    			if (detaching) detach_dev(t3);
    			destroy_component(prism1, detaching);
    			if (detaching) detach_dev(t4);
    			if (detaching) detach_dev(div1);
    			destroy_component(pillnavigation1);
    			if (detaching) detach_dev(t5);
    			destroy_component(prism2, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$e.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$e($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("PillNavigation", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<PillNavigation> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		Prism: Prism$1,
    		PillNavigation,
    		Pill,
    		PillContent,
    		PillList
    	});

    	return [];
    }

    class PillNavigation_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$e, create_fragment$e, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "PillNavigation_1",
    			options,
    			id: create_fragment$e.name
    		});
    	}
    }

    /* docs_src/components/Spinner.svelte generated by Svelte v3.38.1 */
    const file$d = "docs_src/components/Spinner.svelte";

    function create_fragment$d(ctx) {
    	let h1;
    	let t1;
    	let prism0;
    	let t2;
    	let div;
    	let spinner;
    	let t3;
    	let prism1;
    	let t4;
    	let prism2;
    	let current;

    	prism0 = new Prism$1({
    			props: {
    				language: "js",
    				source: `import { Spinner } from '@ekstra-bladet/designsystem'`
    			},
    			$$inline: true
    		});

    	spinner = new Spinner({
    			props: { isLoading: /*spinnerActive*/ ctx[0] },
    			$$inline: true
    		});

    	prism1 = new Prism$1({
    			props: {
    				language: "html",
    				source: `<Spinner isLoading={true}/>`
    			},
    			$$inline: true
    		});

    	prism2 = new Prism$1({
    			props: {
    				language: "html",
    				source: `<Spinner isLoading={false}/>`
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Spinner";
    			t1 = space();
    			create_component(prism0.$$.fragment);
    			t2 = space();
    			div = element("div");
    			create_component(spinner.$$.fragment);
    			t3 = space();
    			create_component(prism1.$$.fragment);
    			t4 = space();
    			create_component(prism2.$$.fragment);
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$d, 5, 0, 126);
    			attr_dev(div, "class", "padding-l bg--graa5");
    			add_location(div, file$d, 9, 0, 252);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(prism0, target, anchor);
    			insert_dev(target, t2, anchor);
    			insert_dev(target, div, anchor);
    			mount_component(spinner, div, null);
    			insert_dev(target, t3, anchor);
    			mount_component(prism1, target, anchor);
    			insert_dev(target, t4, anchor);
    			mount_component(prism2, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism0.$$.fragment, local);
    			transition_in(spinner.$$.fragment, local);
    			transition_in(prism1.$$.fragment, local);
    			transition_in(prism2.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism0.$$.fragment, local);
    			transition_out(spinner.$$.fragment, local);
    			transition_out(prism1.$$.fragment, local);
    			transition_out(prism2.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			destroy_component(prism0, detaching);
    			if (detaching) detach_dev(t2);
    			if (detaching) detach_dev(div);
    			destroy_component(spinner);
    			if (detaching) detach_dev(t3);
    			destroy_component(prism1, detaching);
    			if (detaching) detach_dev(t4);
    			destroy_component(prism2, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$d.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$d($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Spinner", slots, []);
    	let spinnerActive = true;
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Spinner> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ Prism: Prism$1, Spinner, spinnerActive });

    	$$self.$inject_state = $$props => {
    		if ("spinnerActive" in $$props) $$invalidate(0, spinnerActive = $$props.spinnerActive);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [spinnerActive];
    }

    class Spinner_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$d, create_fragment$d, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Spinner_1",
    			options,
    			id: create_fragment$d.name
    		});
    	}
    }

    /* docs_src/components/Toggler.svelte generated by Svelte v3.38.1 */

    const { console: console_1 } = globals;
    const file$c = "docs_src/components/Toggler.svelte";
    const get_default_slot_changes_7 = dirty => ({});
    const get_default_slot_context_7 = ctx => ({ slot: "on" });
    const get_default_slot_changes_6 = dirty => ({});
    const get_default_slot_context_6 = ctx => ({ slot: "off" });
    const get_default_slot_changes_5 = dirty => ({});
    const get_default_slot_context_5 = ctx => ({ slot: "on" });
    const get_default_slot_changes_4 = dirty => ({});
    const get_default_slot_context_4 = ctx => ({ slot: "off" });
    const get_default_slot_changes_3 = dirty => ({});
    const get_default_slot_context_3 = ctx => ({ slot: "on" });
    const get_default_slot_changes_2 = dirty => ({});
    const get_default_slot_context_2 = ctx => ({ slot: "off" });
    const get_default_slot_changes_1 = dirty => ({});
    const get_default_slot_context_1 = ctx => ({ slot: "on" });
    const get_default_slot_changes = dirty => ({});
    const get_default_slot_context = ctx => ({ slot: "off" });

    // (15:18) on
    function fallback_block_7(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("on");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: fallback_block_7.name,
    		type: "fallback",
    		source: "(15:18) on",
    		ctx
    	});

    	return block;
    }

    // (15:2) 
    function create_on_slot_3(ctx) {
    	let current;
    	const default_slot_template = /*#slots*/ ctx[0].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], get_default_slot_context_1);
    	const default_slot_or_fallback = default_slot || fallback_block_7(ctx);

    	const block = {
    		c: function create() {
    			if (default_slot_or_fallback) default_slot_or_fallback.c();
    		},
    		m: function mount(target, anchor) {
    			if (default_slot_or_fallback) {
    				default_slot_or_fallback.m(target, anchor);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[5], dirty, get_default_slot_changes_1, get_default_slot_context_1);
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot_or_fallback, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot_or_fallback, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_on_slot_3.name,
    		type: "slot",
    		source: "(15:2) ",
    		ctx
    	});

    	return block;
    }

    // (16:19) off
    function fallback_block_6(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("off");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: fallback_block_6.name,
    		type: "fallback",
    		source: "(16:19) off",
    		ctx
    	});

    	return block;
    }

    // (16:2) 
    function create_off_slot_3(ctx) {
    	let current;
    	const default_slot_template = /*#slots*/ ctx[0].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], get_default_slot_context);
    	const default_slot_or_fallback = default_slot || fallback_block_6(ctx);

    	const block = {
    		c: function create() {
    			if (default_slot_or_fallback) default_slot_or_fallback.c();
    		},
    		m: function mount(target, anchor) {
    			if (default_slot_or_fallback) {
    				default_slot_or_fallback.m(target, anchor);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[5], dirty, get_default_slot_changes, get_default_slot_context);
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot_or_fallback, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot_or_fallback, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_off_slot_3.name,
    		type: "slot",
    		source: "(16:2) ",
    		ctx
    	});

    	return block;
    }

    // (38:18)      
    function fallback_block_5(ctx) {
    	let icon;
    	let current;

    	icon = new Icon({
    			props: {
    				name: "angle-down",
    				style: "width: 24px; height: 24px;"
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(icon.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(icon, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(icon.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(icon.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(icon, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: fallback_block_5.name,
    		type: "fallback",
    		source: "(38:18)      ",
    		ctx
    	});

    	return block;
    }

    // (38:2) 
    function create_on_slot_2(ctx) {
    	let current;
    	const default_slot_template = /*#slots*/ ctx[0].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], get_default_slot_context_3);
    	const default_slot_or_fallback = default_slot || fallback_block_5(ctx);

    	const block = {
    		c: function create() {
    			if (default_slot_or_fallback) default_slot_or_fallback.c();
    		},
    		m: function mount(target, anchor) {
    			if (default_slot_or_fallback) {
    				default_slot_or_fallback.m(target, anchor);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[5], dirty, get_default_slot_changes_3, get_default_slot_context_3);
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot_or_fallback, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot_or_fallback, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_on_slot_2.name,
    		type: "slot",
    		source: "(38:2) ",
    		ctx
    	});

    	return block;
    }

    // (41:19)      
    function fallback_block_4(ctx) {
    	let icon;
    	let current;

    	icon = new Icon({
    			props: {
    				name: "angle-up",
    				style: "width: 24px; height: 24px;"
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(icon.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(icon, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(icon.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(icon.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(icon, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: fallback_block_4.name,
    		type: "fallback",
    		source: "(41:19)      ",
    		ctx
    	});

    	return block;
    }

    // (41:2) 
    function create_off_slot_2(ctx) {
    	let current;
    	const default_slot_template = /*#slots*/ ctx[0].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], get_default_slot_context_2);
    	const default_slot_or_fallback = default_slot || fallback_block_4(ctx);

    	const block = {
    		c: function create() {
    			if (default_slot_or_fallback) default_slot_or_fallback.c();
    		},
    		m: function mount(target, anchor) {
    			if (default_slot_or_fallback) {
    				default_slot_or_fallback.m(target, anchor);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[5], dirty, get_default_slot_changes_2, get_default_slot_context_2);
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot_or_fallback, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot_or_fallback, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_off_slot_2.name,
    		type: "slot",
    		source: "(41:2) ",
    		ctx
    	});

    	return block;
    }

    // (68:18) on
    function fallback_block_3(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("on");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: fallback_block_3.name,
    		type: "fallback",
    		source: "(68:18) on",
    		ctx
    	});

    	return block;
    }

    // (68:2) 
    function create_on_slot_1(ctx) {
    	let current;
    	const default_slot_template = /*#slots*/ ctx[0].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], get_default_slot_context_5);
    	const default_slot_or_fallback = default_slot || fallback_block_3(ctx);

    	const block = {
    		c: function create() {
    			if (default_slot_or_fallback) default_slot_or_fallback.c();
    		},
    		m: function mount(target, anchor) {
    			if (default_slot_or_fallback) {
    				default_slot_or_fallback.m(target, anchor);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[5], dirty, get_default_slot_changes_5, get_default_slot_context_5);
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot_or_fallback, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot_or_fallback, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_on_slot_1.name,
    		type: "slot",
    		source: "(68:2) ",
    		ctx
    	});

    	return block;
    }

    // (69:19) off
    function fallback_block_2(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("off");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: fallback_block_2.name,
    		type: "fallback",
    		source: "(69:19) off",
    		ctx
    	});

    	return block;
    }

    // (69:2) 
    function create_off_slot_1(ctx) {
    	let current;
    	const default_slot_template = /*#slots*/ ctx[0].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], get_default_slot_context_4);
    	const default_slot_or_fallback = default_slot || fallback_block_2(ctx);

    	const block = {
    		c: function create() {
    			if (default_slot_or_fallback) default_slot_or_fallback.c();
    		},
    		m: function mount(target, anchor) {
    			if (default_slot_or_fallback) {
    				default_slot_or_fallback.m(target, anchor);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[5], dirty, get_default_slot_changes_4, get_default_slot_context_4);
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot_or_fallback, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot_or_fallback, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_off_slot_1.name,
    		type: "slot",
    		source: "(69:2) ",
    		ctx
    	});

    	return block;
    }

    // (94:18) on
    function fallback_block_1(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("on");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: fallback_block_1.name,
    		type: "fallback",
    		source: "(94:18) on",
    		ctx
    	});

    	return block;
    }

    // (94:2) 
    function create_on_slot(ctx) {
    	let current;
    	const default_slot_template = /*#slots*/ ctx[0].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], get_default_slot_context_7);
    	const default_slot_or_fallback = default_slot || fallback_block_1(ctx);

    	const block = {
    		c: function create() {
    			if (default_slot_or_fallback) default_slot_or_fallback.c();
    		},
    		m: function mount(target, anchor) {
    			if (default_slot_or_fallback) {
    				default_slot_or_fallback.m(target, anchor);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[5], dirty, get_default_slot_changes_7, get_default_slot_context_7);
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot_or_fallback, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot_or_fallback, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_on_slot.name,
    		type: "slot",
    		source: "(94:2) ",
    		ctx
    	});

    	return block;
    }

    // (95:19) off
    function fallback_block(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("off");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: fallback_block.name,
    		type: "fallback",
    		source: "(95:19) off",
    		ctx
    	});

    	return block;
    }

    // (95:2) 
    function create_off_slot(ctx) {
    	let current;
    	const default_slot_template = /*#slots*/ ctx[0].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], get_default_slot_context_6);
    	const default_slot_or_fallback = default_slot || fallback_block(ctx);

    	const block = {
    		c: function create() {
    			if (default_slot_or_fallback) default_slot_or_fallback.c();
    		},
    		m: function mount(target, anchor) {
    			if (default_slot_or_fallback) {
    				default_slot_or_fallback.m(target, anchor);
    			}

    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[5], dirty, get_default_slot_changes_6, get_default_slot_context_6);
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot_or_fallback, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot_or_fallback, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_off_slot.name,
    		type: "slot",
    		source: "(95:2) ",
    		ctx
    	});

    	return block;
    }

    function create_fragment$c(ctx) {
    	let h1;
    	let t1;
    	let prism0;
    	let t2;
    	let h20;
    	let t4;
    	let toggler0;
    	let t5;
    	let prism1;
    	let t6;
    	let h21;
    	let t8;
    	let toggler1;
    	let t9;
    	let prism2;
    	let t10;
    	let toggler2;
    	let t11;
    	let prism3;
    	let t12;
    	let toggler3;
    	let t13;
    	let prism4;
    	let current;

    	prism0 = new Prism$1({
    			props: {
    				language: "js",
    				source: `import { Toggler } from '@ekstra-bladet/designsystem';`
    			},
    			$$inline: true
    		});

    	toggler0 = new Toggler({
    			props: {
    				$$slots: {
    					off: [create_off_slot_3],
    					on: [create_on_slot_3]
    				},
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	toggler0.$on("toggle", /*toggle_handler*/ ctx[1]);

    	prism1 = new Prism$1({
    			props: {
    				language: "html",
    				source: `
<Toggler on:toggle="{(event) => {
    console.log('hello its on?', event.detail);
  }}">
  <slot slot="on">on</slot>
  <slot slot="off">off</slot>
</Toggler>
`
    			},
    			$$inline: true
    		});

    	toggler1 = new Toggler({
    			props: {
    				$$slots: {
    					off: [create_off_slot_2],
    					on: [create_on_slot_2]
    				},
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	toggler1.$on("toggle", /*toggle_handler_1*/ ctx[2]);

    	prism2 = new Prism$1({
    			props: {
    				language: "html",
    				source: `
<Toggler on:toggle="{(event) => {
    console.log('hello its on?', event.detail);
  }}">
  <slot slot="on">
    <Icon name="angle_down_pro" style="width: 24px; height: 24px;" />
  </slot>
  <slot slot="off">
    <Icon name="angle_up_pro" style="width: 24px; height: 24px;" />
  </slot>
</Toggler>
`
    			},
    			$$inline: true
    		});

    	toggler2 = new Toggler({
    			props: {
    				isSwitch: true,
    				$$slots: {
    					off: [create_off_slot_1],
    					on: [create_on_slot_1]
    				},
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	toggler2.$on("toggle", /*toggle_handler_2*/ ctx[3]);

    	prism3 = new Prism$1({
    			props: {
    				language: "html",
    				source: `
<Toggler
  isSwitch="{true}"
  on:toggle="{(event) => {
    console.log('hello its on?', event.detail);
  }}"
>
  <slot slot="on">on</slot>
  <slot slot="off">off</slot>
</Toggler>
`
    			},
    			$$inline: true
    		});

    	toggler3 = new Toggler({
    			props: {
    				isSwitch: true,
    				defaultState: false,
    				$$slots: {
    					off: [create_off_slot],
    					on: [create_on_slot]
    				},
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	toggler3.$on("toggle", /*toggle_handler_3*/ ctx[4]);

    	prism4 = new Prism$1({
    			props: {
    				language: "html",
    				source: `
<Toggler
  isSwitch="{true}"
  defaultState="{false}"
  on:toggle="{(event) => {
    console.log('hello its on?', event.detail);
  }}"
>
  <slot slot="on">on</slot>
  <slot slot="off">off</slot>
</Toggler>
`
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Toggler";
    			t1 = space();
    			create_component(prism0.$$.fragment);
    			t2 = space();
    			h20 = element("h2");
    			h20.textContent = "Toggler with text";
    			t4 = space();
    			create_component(toggler0.$$.fragment);
    			t5 = space();
    			create_component(prism1.$$.fragment);
    			t6 = space();
    			h21 = element("h2");
    			h21.textContent = "Toggler with icon";
    			t8 = space();
    			create_component(toggler1.$$.fragment);
    			t9 = space();
    			create_component(prism2.$$.fragment);
    			t10 = space();
    			create_component(toggler2.$$.fragment);
    			t11 = space();
    			create_component(prism3.$$.fragment);
    			t12 = space();
    			create_component(toggler3.$$.fragment);
    			t13 = space();
    			create_component(prism4.$$.fragment);
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$c, 4, 0, 106);
    			attr_dev(h20, "class", "margin-l--tb");
    			add_location(h20, file$c, 8, 0, 233);
    			attr_dev(h21, "class", "margin-l--tb");
    			add_location(h21, file$c, 30, 0, 643);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(prism0, target, anchor);
    			insert_dev(target, t2, anchor);
    			insert_dev(target, h20, anchor);
    			insert_dev(target, t4, anchor);
    			mount_component(toggler0, target, anchor);
    			insert_dev(target, t5, anchor);
    			mount_component(prism1, target, anchor);
    			insert_dev(target, t6, anchor);
    			insert_dev(target, h21, anchor);
    			insert_dev(target, t8, anchor);
    			mount_component(toggler1, target, anchor);
    			insert_dev(target, t9, anchor);
    			mount_component(prism2, target, anchor);
    			insert_dev(target, t10, anchor);
    			mount_component(toggler2, target, anchor);
    			insert_dev(target, t11, anchor);
    			mount_component(prism3, target, anchor);
    			insert_dev(target, t12, anchor);
    			mount_component(toggler3, target, anchor);
    			insert_dev(target, t13, anchor);
    			mount_component(prism4, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const toggler0_changes = {};

    			if (dirty & /*$$scope*/ 32) {
    				toggler0_changes.$$scope = { dirty, ctx };
    			}

    			toggler0.$set(toggler0_changes);
    			const toggler1_changes = {};

    			if (dirty & /*$$scope*/ 32) {
    				toggler1_changes.$$scope = { dirty, ctx };
    			}

    			toggler1.$set(toggler1_changes);
    			const toggler2_changes = {};

    			if (dirty & /*$$scope*/ 32) {
    				toggler2_changes.$$scope = { dirty, ctx };
    			}

    			toggler2.$set(toggler2_changes);
    			const toggler3_changes = {};

    			if (dirty & /*$$scope*/ 32) {
    				toggler3_changes.$$scope = { dirty, ctx };
    			}

    			toggler3.$set(toggler3_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism0.$$.fragment, local);
    			transition_in(toggler0.$$.fragment, local);
    			transition_in(prism1.$$.fragment, local);
    			transition_in(toggler1.$$.fragment, local);
    			transition_in(prism2.$$.fragment, local);
    			transition_in(toggler2.$$.fragment, local);
    			transition_in(prism3.$$.fragment, local);
    			transition_in(toggler3.$$.fragment, local);
    			transition_in(prism4.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism0.$$.fragment, local);
    			transition_out(toggler0.$$.fragment, local);
    			transition_out(prism1.$$.fragment, local);
    			transition_out(toggler1.$$.fragment, local);
    			transition_out(prism2.$$.fragment, local);
    			transition_out(toggler2.$$.fragment, local);
    			transition_out(prism3.$$.fragment, local);
    			transition_out(toggler3.$$.fragment, local);
    			transition_out(prism4.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			destroy_component(prism0, detaching);
    			if (detaching) detach_dev(t2);
    			if (detaching) detach_dev(h20);
    			if (detaching) detach_dev(t4);
    			destroy_component(toggler0, detaching);
    			if (detaching) detach_dev(t5);
    			destroy_component(prism1, detaching);
    			if (detaching) detach_dev(t6);
    			if (detaching) detach_dev(h21);
    			if (detaching) detach_dev(t8);
    			destroy_component(toggler1, detaching);
    			if (detaching) detach_dev(t9);
    			destroy_component(prism2, detaching);
    			if (detaching) detach_dev(t10);
    			destroy_component(toggler2, detaching);
    			if (detaching) detach_dev(t11);
    			destroy_component(prism3, detaching);
    			if (detaching) detach_dev(t12);
    			destroy_component(toggler3, detaching);
    			if (detaching) detach_dev(t13);
    			destroy_component(prism4, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$c.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$c($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Toggler", slots, ['default']);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Toggler> was created with unknown prop '${key}'`);
    	});

    	const toggle_handler = event => {
    		console.log("hello its on?", event.detail);
    	};

    	const toggle_handler_1 = event => {
    		console.log("hello its on?", event.detail);
    	};

    	const toggle_handler_2 = event => {
    		console.log("hello its on?", event.detail);
    	};

    	const toggle_handler_3 = event => {
    		console.log("hello its on?", event.detail);
    	};

    	$$self.$$set = $$props => {
    		if ("$$scope" in $$props) $$invalidate(5, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({ Prism: Prism$1, Icon, Toggler });

    	return [
    		slots,
    		toggle_handler,
    		toggle_handler_1,
    		toggle_handler_2,
    		toggle_handler_3,
    		$$scope
    	];
    }

    class Toggler_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$c, create_fragment$c, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Toggler_1",
    			options,
    			id: create_fragment$c.name
    		});
    	}
    }

    /* docs_src/components/Tooltip.svelte generated by Svelte v3.38.1 */
    const file$b = "docs_src/components/Tooltip.svelte";

    // (13:4) <Tooltip>
    function create_default_slot_1$2(ctx) {
    	let p0;
    	let t1;
    	let p1;
    	let t3;
    	let p2;

    	const block = {
    		c: function create() {
    			p0 = element("p");
    			p0.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    			t1 = space();
    			p1 = element("p");
    			p1.textContent = "Vestibulum nec felis viverra, aliquam erat vel, ornare ipsum.";
    			t3 = space();
    			p2 = element("p");
    			p2.textContent = "Aenean a blandit lacus, sed faucibus ante.";
    			add_location(p0, file$b, 13, 6, 337);
    			add_location(p1, file$b, 14, 6, 407);
    			add_location(p2, file$b, 15, 6, 482);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, p1, anchor);
    			insert_dev(target, t3, anchor);
    			insert_dev(target, p2, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(p1);
    			if (detaching) detach_dev(t3);
    			if (detaching) detach_dev(p2);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1$2.name,
    		type: "slot",
    		source: "(13:4) <Tooltip>",
    		ctx
    	});

    	return block;
    }

    // (35:4) <Tooltip className="flex-item flex-item--center" position="right">
    function create_default_slot$2(ctx) {
    	let p0;
    	let t1;
    	let p1;
    	let t3;
    	let p2;

    	const block = {
    		c: function create() {
    			p0 = element("p");
    			p0.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    			t1 = space();
    			p1 = element("p");
    			p1.textContent = "Vestibulum nec felis viverra, aliquam erat vel, ornare ipsum.";
    			t3 = space();
    			p2 = element("p");
    			p2.textContent = "Aenean a blandit lacus, sed faucibus ante.";
    			add_location(p0, file$b, 35, 6, 1084);
    			add_location(p1, file$b, 36, 6, 1154);
    			add_location(p2, file$b, 37, 6, 1229);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, p1, anchor);
    			insert_dev(target, t3, anchor);
    			insert_dev(target, p2, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(p1);
    			if (detaching) detach_dev(t3);
    			if (detaching) detach_dev(p2);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$2.name,
    		type: "slot",
    		source: "(35:4) <Tooltip className=\\\"flex-item flex-item--center\\\" position=\\\"right\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$b(ctx) {
    	let h1;
    	let t1;
    	let div2;
    	let prism0;
    	let t2;
    	let h20;
    	let t4;
    	let div0;
    	let tooltip0;
    	let t5;
    	let prism1;
    	let t6;
    	let h21;
    	let t8;
    	let div1;
    	let h3;
    	let t10;
    	let tooltip1;
    	let t11;
    	let prism2;
    	let current;

    	prism0 = new Prism$1({
    			props: {
    				language: "js",
    				source: `import { Tooltip } from '@ekstra-bladet/designsystem';`
    			},
    			$$inline: true
    		});

    	tooltip0 = new Tooltip({
    			props: {
    				$$slots: { default: [create_default_slot_1$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism1 = new Prism$1({
    			props: {
    				language: "html",
    				source: `
      <Tooltip>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Vestibulum nec felis viverra, aliquam erat vel, ornare ipsum.</p>
        <p>Aenean a blandit lacus, sed faucibus ante.</p>
      </Tooltip>
    `
    			},
    			$$inline: true
    		});

    	tooltip1 = new Tooltip({
    			props: {
    				className: "flex-item flex-item--center",
    				position: "right",
    				$$slots: { default: [create_default_slot$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism2 = new Prism$1({
    			props: {
    				language: "html",
    				source: `
      <div class="flex flex-justify--between grid-width--small">
        <h3 class="flex-item">Flot overskrift</h3>
        <Tooltip className="flex-item flex-item--center" position="right">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Vestibulum nec felis viverra, aliquam erat vel, ornare ipsum.</p>
          <p>Aenean a blandit lacus, sed faucibus ante.</p>
        </Tooltip>
      </div>
    `
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Tooltip";
    			t1 = space();
    			div2 = element("div");
    			create_component(prism0.$$.fragment);
    			t2 = space();
    			h20 = element("h2");
    			h20.textContent = "Default tooltip";
    			t4 = space();
    			div0 = element("div");
    			create_component(tooltip0.$$.fragment);
    			t5 = space();
    			create_component(prism1.$$.fragment);
    			t6 = space();
    			h21 = element("h2");
    			h21.textContent = "Tooltip i højre side";
    			t8 = space();
    			div1 = element("div");
    			h3 = element("h3");
    			h3.textContent = "Flot overskrift";
    			t10 = space();
    			create_component(tooltip1.$$.fragment);
    			t11 = space();
    			create_component(prism2.$$.fragment);
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$b, 6, 0, 96);
    			add_location(h20, file$b, 10, 2, 258);
    			attr_dev(div0, "class", "flex margin-l--tb");
    			add_location(div0, file$b, 11, 2, 285);
    			add_location(h21, file$b, 30, 2, 855);
    			attr_dev(h3, "class", "flex-item");
    			add_location(h3, file$b, 33, 4, 964);
    			attr_dev(div1, "class", "flex flex-justify--between grid-width--small margin-l--tb");
    			add_location(div1, file$b, 32, 2, 888);
    			attr_dev(div2, "class", "grid-width--small");
    			add_location(div2, file$b, 7, 0, 131);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div2, anchor);
    			mount_component(prism0, div2, null);
    			append_dev(div2, t2);
    			append_dev(div2, h20);
    			append_dev(div2, t4);
    			append_dev(div2, div0);
    			mount_component(tooltip0, div0, null);
    			append_dev(div2, t5);
    			mount_component(prism1, div2, null);
    			append_dev(div2, t6);
    			append_dev(div2, h21);
    			append_dev(div2, t8);
    			append_dev(div2, div1);
    			append_dev(div1, h3);
    			append_dev(div1, t10);
    			mount_component(tooltip1, div1, null);
    			append_dev(div2, t11);
    			mount_component(prism2, div2, null);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const tooltip0_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				tooltip0_changes.$$scope = { dirty, ctx };
    			}

    			tooltip0.$set(tooltip0_changes);
    			const tooltip1_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				tooltip1_changes.$$scope = { dirty, ctx };
    			}

    			tooltip1.$set(tooltip1_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism0.$$.fragment, local);
    			transition_in(tooltip0.$$.fragment, local);
    			transition_in(prism1.$$.fragment, local);
    			transition_in(tooltip1.$$.fragment, local);
    			transition_in(prism2.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism0.$$.fragment, local);
    			transition_out(tooltip0.$$.fragment, local);
    			transition_out(prism1.$$.fragment, local);
    			transition_out(tooltip1.$$.fragment, local);
    			transition_out(prism2.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div2);
    			destroy_component(prism0);
    			destroy_component(tooltip0);
    			destroy_component(prism1);
    			destroy_component(tooltip1);
    			destroy_component(prism2);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$b.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$b($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Tooltip", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Tooltip> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ Prism: Prism$1, Tooltip });
    	return [];
    }

    class Tooltip_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$b, create_fragment$b, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Tooltip_1",
    			options,
    			id: create_fragment$b.name
    		});
    	}
    }

    /* docs_src/utilities/Animation/Animation.svelte generated by Svelte v3.38.1 */

    const file$a = "docs_src/utilities/Animation/Animation.svelte";

    // (30:8) <Pill>
    function create_default_slot_8(ctx) {
    	let i;

    	const block = {
    		c: function create() {
    			i = element("i");
    			attr_dev(i, "class", "fas fa-cubes");
    			add_location(i, file$a, 29, 14, 940);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, i, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(i);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_8.name,
    		type: "slot",
    		source: "(30:8) <Pill>",
    		ctx
    	});

    	return block;
    }

    // (31:8) <Pill>
    function create_default_slot_7(ctx) {
    	let i;

    	const block = {
    		c: function create() {
    			i = element("i");
    			attr_dev(i, "class", "fas fa-code");
    			add_location(i, file$a, 30, 14, 988);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, i, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(i);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_7.name,
    		type: "slot",
    		source: "(31:8) <Pill>",
    		ctx
    	});

    	return block;
    }

    // (29:6) <PillList>
    function create_default_slot_6(ctx) {
    	let pill0;
    	let t;
    	let pill1;
    	let current;

    	pill0 = new Pill({
    			props: {
    				$$slots: { default: [create_default_slot_8] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	pill1 = new Pill({
    			props: {
    				$$slots: { default: [create_default_slot_7] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(pill0.$$.fragment);
    			t = space();
    			create_component(pill1.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(pill0, target, anchor);
    			insert_dev(target, t, anchor);
    			mount_component(pill1, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const pill0_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				pill0_changes.$$scope = { dirty, ctx };
    			}

    			pill0.$set(pill0_changes);
    			const pill1_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				pill1_changes.$$scope = { dirty, ctx };
    			}

    			pill1.$set(pill1_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(pill0.$$.fragment, local);
    			transition_in(pill1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(pill0.$$.fragment, local);
    			transition_out(pill1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(pill0, detaching);
    			if (detaching) detach_dev(t);
    			destroy_component(pill1, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_6.name,
    		type: "slot",
    		source: "(29:6) <PillList>",
    		ctx
    	});

    	return block;
    }

    // (46:8) <Badge href="#" className="margin-s bg--bluedark animation-fogwave">
    function create_default_slot_5$1(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Bandekriminialitet");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_5$1.name,
    		type: "slot",
    		source: "(46:8) <Badge href=\\\"#\\\" className=\\\"margin-s bg--bluedark animation-fogwave\\\">",
    		ctx
    	});

    	return block;
    }

    // (47:8) <Badge href="#" className="margin-s bg--green animation-fogwave">
    function create_default_slot_4$1(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Sport");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_4$1.name,
    		type: "slot",
    		source: "(47:8) <Badge href=\\\"#\\\" className=\\\"margin-s bg--green animation-fogwave\\\">",
    		ctx
    	});

    	return block;
    }

    // (48:8) <Badge href="#" className="margin-s bg--greendark animation-fogwave">
    function create_default_slot_3$1(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("Nicklas Bendtner");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_3$1.name,
    		type: "slot",
    		source: "(48:8) <Badge href=\\\"#\\\" className=\\\"margin-s bg--greendark animation-fogwave\\\">",
    		ctx
    	});

    	return block;
    }

    // (34:4) <PillContent>
    function create_default_slot_2$1(ctx) {
    	let div0;
    	let articlecard;
    	let t0;
    	let div1;
    	let badge0;
    	let t1;
    	let badge1;
    	let t2;
    	let badge2;
    	let current;

    	articlecard = new ArticleCard({
    			props: {
    				className: "animation-fogwave",
    				href: /*article*/ ctx[0].href,
    				media: {
    					src: "https://via.placeholder.com/610x343&text=610x343"
    				},
    				section: /*article*/ ctx[0].section,
    				timestamp: /*article*/ ctx[0].timestamp,
    				title: /*article*/ ctx[0].title
    			},
    			$$inline: true
    		});

    	badge0 = new Badge({
    			props: {
    				href: "#",
    				className: "margin-s bg--bluedark animation-fogwave",
    				$$slots: { default: [create_default_slot_5$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	badge1 = new Badge({
    			props: {
    				href: "#",
    				className: "margin-s bg--green animation-fogwave",
    				$$slots: { default: [create_default_slot_4$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	badge2 = new Badge({
    			props: {
    				href: "#",
    				className: "margin-s bg--greendark animation-fogwave",
    				$$slots: { default: [create_default_slot_3$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div0 = element("div");
    			create_component(articlecard.$$.fragment);
    			t0 = space();
    			div1 = element("div");
    			create_component(badge0.$$.fragment);
    			t1 = space();
    			create_component(badge1.$$.fragment);
    			t2 = space();
    			create_component(badge2.$$.fragment);
    			attr_dev(div0, "class", "flex grid-width--small");
    			add_location(div0, file$a, 34, 6, 1074);
    			attr_dev(div1, "class", "flex grid-width--small");
    			add_location(div1, file$a, 44, 6, 1418);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div0, anchor);
    			mount_component(articlecard, div0, null);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, div1, anchor);
    			mount_component(badge0, div1, null);
    			append_dev(div1, t1);
    			mount_component(badge1, div1, null);
    			append_dev(div1, t2);
    			mount_component(badge2, div1, null);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const badge0_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				badge0_changes.$$scope = { dirty, ctx };
    			}

    			badge0.$set(badge0_changes);
    			const badge1_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				badge1_changes.$$scope = { dirty, ctx };
    			}

    			badge1.$set(badge1_changes);
    			const badge2_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				badge2_changes.$$scope = { dirty, ctx };
    			}

    			badge2.$set(badge2_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(articlecard.$$.fragment, local);
    			transition_in(badge0.$$.fragment, local);
    			transition_in(badge1.$$.fragment, local);
    			transition_in(badge2.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(articlecard.$$.fragment, local);
    			transition_out(badge0.$$.fragment, local);
    			transition_out(badge1.$$.fragment, local);
    			transition_out(badge2.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div0);
    			destroy_component(articlecard);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(div1);
    			destroy_component(badge0);
    			destroy_component(badge1);
    			destroy_component(badge2);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2$1.name,
    		type: "slot",
    		source: "(34:4) <PillContent>",
    		ctx
    	});

    	return block;
    }

    // (51:4) <PillContent>
    function create_default_slot_1$1(ctx) {
    	let prism0;
    	let t0;
    	let prism1;
    	let t1;
    	let prism2;
    	let current;

    	prism0 = new Prism$1({
    			props: {
    				language: "html",
    				source: `<ArticleCard
          className="animation-fogwave"
          href="{article.href}"
          media="{{src:'https://via.placeholder.com/610x343&text=610x343'}}"
          section="{article.section}"
          timestamp="{article.timestamp}"
          title="{article.title}"
          />`
    			},
    			$$inline: true
    		});

    	prism1 = new Prism$1({
    			props: {
    				language: "html",
    				source: `<Badge href="#" className="margin-s bg--greendark animation-fogwave">Nicklas Bendtner</Badge>`
    			},
    			$$inline: true
    		});

    	prism2 = new Prism$1({
    			props: {
    				language: "html",
    				source: `<a href="#" class="badge badge--primary animation-fogwave margin-s--r">Bandekriminialitet</a>`
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism0.$$.fragment);
    			t0 = space();
    			create_component(prism1.$$.fragment);
    			t1 = space();
    			create_component(prism2.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism0, target, anchor);
    			insert_dev(target, t0, anchor);
    			mount_component(prism1, target, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(prism2, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism0.$$.fragment, local);
    			transition_in(prism1.$$.fragment, local);
    			transition_in(prism2.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism0.$$.fragment, local);
    			transition_out(prism1.$$.fragment, local);
    			transition_out(prism2.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism0, detaching);
    			if (detaching) detach_dev(t0);
    			destroy_component(prism1, detaching);
    			if (detaching) detach_dev(t1);
    			destroy_component(prism2, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1$1.name,
    		type: "slot",
    		source: "(51:4) <PillContent>",
    		ctx
    	});

    	return block;
    }

    // (27:2) <PillNavigation>
    function create_default_slot$1(ctx) {
    	let div;
    	let pilllist;
    	let t0;
    	let pillcontent0;
    	let t1;
    	let pillcontent1;
    	let current;

    	pilllist = new PillList({
    			props: {
    				$$slots: { default: [create_default_slot_6] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	pillcontent0 = new PillContent({
    			props: {
    				$$slots: { default: [create_default_slot_2$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	pillcontent1 = new PillContent({
    			props: {
    				$$slots: { default: [create_default_slot_1$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div = element("div");
    			create_component(pilllist.$$.fragment);
    			t0 = space();
    			create_component(pillcontent0.$$.fragment);
    			t1 = space();
    			create_component(pillcontent1.$$.fragment);
    			attr_dev(div, "class", "flex flex-justify--end width-1of1");
    			add_location(div, file$a, 27, 4, 861);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			mount_component(pilllist, div, null);
    			insert_dev(target, t0, anchor);
    			mount_component(pillcontent0, target, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(pillcontent1, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const pilllist_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				pilllist_changes.$$scope = { dirty, ctx };
    			}

    			pilllist.$set(pilllist_changes);
    			const pillcontent0_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				pillcontent0_changes.$$scope = { dirty, ctx };
    			}

    			pillcontent0.$set(pillcontent0_changes);
    			const pillcontent1_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				pillcontent1_changes.$$scope = { dirty, ctx };
    			}

    			pillcontent1.$set(pillcontent1_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(pilllist.$$.fragment, local);
    			transition_in(pillcontent0.$$.fragment, local);
    			transition_in(pillcontent1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(pilllist.$$.fragment, local);
    			transition_out(pillcontent0.$$.fragment, local);
    			transition_out(pillcontent1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_component(pilllist);
    			if (detaching) detach_dev(t0);
    			destroy_component(pillcontent0, detaching);
    			if (detaching) detach_dev(t1);
    			destroy_component(pillcontent1, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$1.name,
    		type: "slot",
    		source: "(27:2) <PillNavigation>",
    		ctx
    	});

    	return block;
    }

    function create_fragment$a(ctx) {
    	let div7;
    	let h1;
    	let t1;
    	let h30;
    	let t3;
    	let p0;
    	let t4;
    	let code0;
    	let t6;
    	let p1;
    	let t8;
    	let p2;
    	let b;
    	let t10;
    	let code1;
    	let t12;
    	let h31;
    	let t14;
    	let pillnavigation;
    	let t15;
    	let h32;
    	let t17;
    	let div6;
    	let div2;
    	let div0;
    	let t19;
    	let div1;
    	let t21;
    	let div5;
    	let div3;
    	let t23;
    	let div4;
    	let prism;
    	let current;

    	pillnavigation = new PillNavigation({
    			props: {
    				$$slots: { default: [create_default_slot$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				source: `<component className="animation-fogwave"/></component>`
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div7 = element("div");
    			h1 = element("h1");
    			h1.textContent = "Animation";
    			t1 = space();
    			h30 = element("h3");
    			h30.textContent = "Anvendelse af animationer";
    			t3 = space();
    			p0 = element("p");
    			t4 = text("Animationer anvendes ved tilføjelse af class: ");
    			code0 = element("code");
    			code0.textContent = "className=\"animation-navnPåAnimation\"";
    			t6 = space();
    			p1 = element("p");
    			p1.textContent = "Denne class kan anvendes på tværs af vores komponenter";
    			t8 = space();
    			p2 = element("p");
    			b = element("b");
    			b.textContent = "OBS:";
    			t10 = text(" anvendes en animation direkte på et html-element skal det anvendes på følgende måde:\n    ");
    			code1 = element("code");
    			code1.textContent = "class=\"animation-navnPåAnimation\"";
    			t12 = space();
    			h31 = element("h3");
    			h31.textContent = "Eksempler på animationer";
    			t14 = space();
    			create_component(pillnavigation.$$.fragment);
    			t15 = space();
    			h32 = element("h3");
    			h32.textContent = "Overblik over animationer";
    			t17 = space();
    			div6 = element("div");
    			div2 = element("div");
    			div0 = element("div");
    			div0.textContent = "Class";
    			t19 = space();
    			div1 = element("div");
    			div1.textContent = "Use case";
    			t21 = space();
    			div5 = element("div");
    			div3 = element("div");
    			div3.textContent = "animation-fogwave";
    			t23 = space();
    			div4 = element("div");
    			create_component(prism.$$.fragment);
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$a, 17, 2, 393);
    			add_location(h30, file$a, 18, 2, 432);
    			add_location(code0, file$a, 19, 51, 518);
    			add_location(p0, file$a, 19, 2, 469);
    			add_location(p1, file$a, 20, 2, 575);
    			add_location(b, file$a, 22, 4, 647);
    			add_location(code1, file$a, 23, 4, 748);
    			add_location(p2, file$a, 21, 2, 639);
    			add_location(h31, file$a, 25, 2, 804);
    			add_location(h32, file$a, 73, 2, 2511);
    			attr_dev(div0, "class", "width-1of3 padding-m fontweight-bold");
    			add_location(div0, file$a, 76, 6, 2689);
    			attr_dev(div1, "class", "width-1of3 padding-m fontweight-bold");
    			add_location(div1, file$a, 77, 6, 2757);
    			attr_dev(div2, "class", "flex flex-item--center bg--graa7");
    			set_style(div2, "border-bottom", "1px solid rgba(0, 0, 0, .1)");
    			add_location(div2, file$a, 75, 4, 2584);
    			attr_dev(div3, "class", "flex-item--center width-1of3 padding-m");
    			add_location(div3, file$a, 80, 6, 2924);
    			attr_dev(div4, "class", "flex-item--center width-2of3 padding-m");
    			add_location(div4, file$a, 81, 6, 3006);
    			attr_dev(div5, "class", "flex bg--graa7");
    			set_style(div5, "border-bottom", "1px solid rgba(0, 0, 0, .1)");
    			add_location(div5, file$a, 79, 4, 2837);
    			attr_dev(div6, "class", "grid-width--large");
    			add_location(div6, file$a, 74, 2, 2548);
    			attr_dev(div7, "class", "grid-width--large");
    			add_location(div7, file$a, 16, 0, 359);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div7, anchor);
    			append_dev(div7, h1);
    			append_dev(div7, t1);
    			append_dev(div7, h30);
    			append_dev(div7, t3);
    			append_dev(div7, p0);
    			append_dev(p0, t4);
    			append_dev(p0, code0);
    			append_dev(div7, t6);
    			append_dev(div7, p1);
    			append_dev(div7, t8);
    			append_dev(div7, p2);
    			append_dev(p2, b);
    			append_dev(p2, t10);
    			append_dev(p2, code1);
    			append_dev(div7, t12);
    			append_dev(div7, h31);
    			append_dev(div7, t14);
    			mount_component(pillnavigation, div7, null);
    			append_dev(div7, t15);
    			append_dev(div7, h32);
    			append_dev(div7, t17);
    			append_dev(div7, div6);
    			append_dev(div6, div2);
    			append_dev(div2, div0);
    			append_dev(div2, t19);
    			append_dev(div2, div1);
    			append_dev(div6, t21);
    			append_dev(div6, div5);
    			append_dev(div5, div3);
    			append_dev(div5, t23);
    			append_dev(div5, div4);
    			mount_component(prism, div4, null);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const pillnavigation_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				pillnavigation_changes.$$scope = { dirty, ctx };
    			}

    			pillnavigation.$set(pillnavigation_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(pillnavigation.$$.fragment, local);
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(pillnavigation.$$.fragment, local);
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div7);
    			destroy_component(pillnavigation);
    			destroy_component(prism);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$a.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$a($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Animation", slots, []);

    	let article = {
    		href: "#",
    		media: {
    			src: "https://via.placeholder.com/610x343&text=610x343"
    		},
    		section: "Sport",
    		timestamp: "2 timer siden",
    		title: "List element"
    	};

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Animation> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		Prism: Prism$1,
    		ArticleCard,
    		Badge,
    		PillNavigation,
    		Pill,
    		PillContent,
    		PillList,
    		article
    	});

    	$$self.$inject_state = $$props => {
    		if ("article" in $$props) $$invalidate(0, article = $$props.article);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [article];
    }

    class Animation extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$a, create_fragment$a, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Animation",
    			options,
    			id: create_fragment$a.name
    		});
    	}
    }

    /* docs_src/utilities/DataTheme/DataTheme.svelte generated by Svelte v3.38.1 */

    const file$9 = "docs_src/utilities/DataTheme/DataTheme.svelte";

    // (33:8) <Pill>
    function create_default_slot_5(ctx) {
    	let i;

    	const block = {
    		c: function create() {
    			i = element("i");
    			attr_dev(i, "class", "fas fa-cubes");
    			add_location(i, file$9, 32, 14, 1187);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, i, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(i);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_5.name,
    		type: "slot",
    		source: "(33:8) <Pill>",
    		ctx
    	});

    	return block;
    }

    // (34:8) <Pill>
    function create_default_slot_4(ctx) {
    	let i;

    	const block = {
    		c: function create() {
    			i = element("i");
    			attr_dev(i, "class", "fas fa-code");
    			add_location(i, file$9, 33, 14, 1235);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, i, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(i);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_4.name,
    		type: "slot",
    		source: "(34:8) <Pill>",
    		ctx
    	});

    	return block;
    }

    // (32:6) <PillList>
    function create_default_slot_3(ctx) {
    	let pill0;
    	let t;
    	let pill1;
    	let current;

    	pill0 = new Pill({
    			props: {
    				$$slots: { default: [create_default_slot_5] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	pill1 = new Pill({
    			props: {
    				$$slots: { default: [create_default_slot_4] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(pill0.$$.fragment);
    			t = space();
    			create_component(pill1.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(pill0, target, anchor);
    			insert_dev(target, t, anchor);
    			mount_component(pill1, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const pill0_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				pill0_changes.$$scope = { dirty, ctx };
    			}

    			pill0.$set(pill0_changes);
    			const pill1_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				pill1_changes.$$scope = { dirty, ctx };
    			}

    			pill1.$set(pill1_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(pill0.$$.fragment, local);
    			transition_in(pill1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(pill0.$$.fragment, local);
    			transition_out(pill1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(pill0, detaching);
    			if (detaching) detach_dev(t);
    			destroy_component(pill1, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_3.name,
    		type: "slot",
    		source: "(32:6) <PillList>",
    		ctx
    	});

    	return block;
    }

    // (37:4) <PillContent>
    function create_default_slot_2(ctx) {
    	let accordion0;
    	let t0;
    	let accordion1;
    	let t1;
    	let div0;
    	let p0;
    	let t3;
    	let div1;
    	let p1;
    	let current;

    	accordion0 = new Accordion({
    			props: {
    				dataTheme: "lightmode",
    				tabs: /*tabs*/ ctx[0]
    			},
    			$$inline: true
    		});

    	accordion1 = new Accordion({
    			props: {
    				dataTheme: "darkmode",
    				tabs: /*tabs*/ ctx[0]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(accordion0.$$.fragment);
    			t0 = space();
    			create_component(accordion1.$$.fragment);
    			t1 = space();
    			div0 = element("div");
    			p0 = element("p");
    			p0.textContent = "I'm now in lightmode";
    			t3 = space();
    			div1 = element("div");
    			p1 = element("p");
    			p1.textContent = "I'm now in darkmode";
    			add_location(p0, file$9, 40, 8, 1455);
    			attr_dev(div0, "data-theme", "lightmode");
    			add_location(div0, file$9, 39, 6, 1418);
    			add_location(p1, file$9, 43, 8, 1538);
    			attr_dev(div1, "data-theme", "darkmode");
    			add_location(div1, file$9, 42, 6, 1502);
    		},
    		m: function mount(target, anchor) {
    			mount_component(accordion0, target, anchor);
    			insert_dev(target, t0, anchor);
    			mount_component(accordion1, target, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div0, anchor);
    			append_dev(div0, p0);
    			insert_dev(target, t3, anchor);
    			insert_dev(target, div1, anchor);
    			append_dev(div1, p1);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(accordion0.$$.fragment, local);
    			transition_in(accordion1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(accordion0.$$.fragment, local);
    			transition_out(accordion1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(accordion0, detaching);
    			if (detaching) detach_dev(t0);
    			destroy_component(accordion1, detaching);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div0);
    			if (detaching) detach_dev(t3);
    			if (detaching) detach_dev(div1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2.name,
    		type: "slot",
    		source: "(37:4) <PillContent>",
    		ctx
    	});

    	return block;
    }

    // (47:4) <PillContent>
    function create_default_slot_1(ctx) {
    	let prism0;
    	let t0;
    	let prism1;
    	let t1;
    	let prism2;
    	let t2;
    	let prism3;
    	let current;

    	prism0 = new Prism$1({
    			props: {
    				language: "html",
    				source: `<Accordion dataTheme="lightmode" {tabs} />`
    			},
    			$$inline: true
    		});

    	prism1 = new Prism$1({
    			props: {
    				language: "html",
    				source: `<Accordion dataTheme="darkmode" {tabs} />`
    			},
    			$$inline: true
    		});

    	prism2 = new Prism$1({
    			props: {
    				language: "html",
    				source: `<div data-theme="lightmode"><p>I'm now in lightmode</p></div>`
    			},
    			$$inline: true
    		});

    	prism3 = new Prism$1({
    			props: {
    				language: "html",
    				source: `<div data-theme="darkmode"><p>I'm now in darkmode</p></div>`
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(prism0.$$.fragment);
    			t0 = space();
    			create_component(prism1.$$.fragment);
    			t1 = space();
    			create_component(prism2.$$.fragment);
    			t2 = space();
    			create_component(prism3.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(prism0, target, anchor);
    			insert_dev(target, t0, anchor);
    			mount_component(prism1, target, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(prism2, target, anchor);
    			insert_dev(target, t2, anchor);
    			mount_component(prism3, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism0.$$.fragment, local);
    			transition_in(prism1.$$.fragment, local);
    			transition_in(prism2.$$.fragment, local);
    			transition_in(prism3.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism0.$$.fragment, local);
    			transition_out(prism1.$$.fragment, local);
    			transition_out(prism2.$$.fragment, local);
    			transition_out(prism3.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(prism0, detaching);
    			if (detaching) detach_dev(t0);
    			destroy_component(prism1, detaching);
    			if (detaching) detach_dev(t1);
    			destroy_component(prism2, detaching);
    			if (detaching) detach_dev(t2);
    			destroy_component(prism3, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1.name,
    		type: "slot",
    		source: "(47:4) <PillContent>",
    		ctx
    	});

    	return block;
    }

    // (30:2) <PillNavigation>
    function create_default_slot(ctx) {
    	let div;
    	let pilllist;
    	let t0;
    	let pillcontent0;
    	let t1;
    	let pillcontent1;
    	let current;

    	pilllist = new PillList({
    			props: {
    				$$slots: { default: [create_default_slot_3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	pillcontent0 = new PillContent({
    			props: {
    				$$slots: { default: [create_default_slot_2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	pillcontent1 = new PillContent({
    			props: {
    				$$slots: { default: [create_default_slot_1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div = element("div");
    			create_component(pilllist.$$.fragment);
    			t0 = space();
    			create_component(pillcontent0.$$.fragment);
    			t1 = space();
    			create_component(pillcontent1.$$.fragment);
    			attr_dev(div, "class", "flex flex-justify--end width-1of1 margin-m--b");
    			add_location(div, file$9, 30, 4, 1096);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			mount_component(pilllist, div, null);
    			insert_dev(target, t0, anchor);
    			mount_component(pillcontent0, target, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(pillcontent1, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const pilllist_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				pilllist_changes.$$scope = { dirty, ctx };
    			}

    			pilllist.$set(pilllist_changes);
    			const pillcontent0_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				pillcontent0_changes.$$scope = { dirty, ctx };
    			}

    			pillcontent0.$set(pillcontent0_changes);
    			const pillcontent1_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				pillcontent1_changes.$$scope = { dirty, ctx };
    			}

    			pillcontent1.$set(pillcontent1_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(pilllist.$$.fragment, local);
    			transition_in(pillcontent0.$$.fragment, local);
    			transition_in(pillcontent1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(pilllist.$$.fragment, local);
    			transition_out(pillcontent0.$$.fragment, local);
    			transition_out(pillcontent1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_component(pilllist);
    			if (detaching) detach_dev(t0);
    			destroy_component(pillcontent0, detaching);
    			if (detaching) detach_dev(t1);
    			destroy_component(pillcontent1, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot.name,
    		type: "slot",
    		source: "(30:2) <PillNavigation>",
    		ctx
    	});

    	return block;
    }

    function create_fragment$9(ctx) {
    	let div13;
    	let h1;
    	let t1;
    	let h30;
    	let t3;
    	let p0;
    	let t4;
    	let code0;
    	let t6;
    	let p1;
    	let code1;
    	let t8;
    	let b0;
    	let t10;
    	let p2;
    	let b1;
    	let t12;
    	let code2;
    	let t14;
    	let h31;
    	let t16;
    	let pillnavigation;
    	let t17;
    	let h32;
    	let t19;
    	let div12;
    	let div3;
    	let div0;
    	let t21;
    	let div1;
    	let t23;
    	let div2;
    	let t25;
    	let div7;
    	let div4;
    	let t27;
    	let div5;
    	let a0;
    	let t29;
    	let div6;
    	let p3;
    	let i0;
    	let t30;
    	let t31;
    	let p4;
    	let i1;
    	let t32;
    	let t33;
    	let div11;
    	let div8;
    	let t35;
    	let div9;
    	let a1;
    	let t37;
    	let div10;
    	let p5;
    	let i2;
    	let t38;
    	let t39;
    	let p6;
    	let i3;
    	let t40;
    	let current;

    	pillnavigation = new PillNavigation({
    			props: {
    				$$slots: { default: [create_default_slot] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div13 = element("div");
    			h1 = element("h1");
    			h1.textContent = "Data Theme";
    			t1 = space();
    			h30 = element("h3");
    			h30.textContent = "Anvendelse af data theme";
    			t3 = space();
    			p0 = element("p");
    			t4 = text("Farve tema anvendes ved tilføjelse af data-attribute ved navn dataTheme: ");
    			code0 = element("code");
    			code0.textContent = "dataTheme=\"lightmode | darkmode\"";
    			t6 = space();
    			p1 = element("p");
    			code1 = element("code");
    			code1.textContent = "dataTheme";
    			t8 = text(" kan anvendes på udvalgte komponenter, som kan ses nederst under ");
    			b0 = element("b");
    			b0.textContent = "overblik";
    			t10 = space();
    			p2 = element("p");
    			b1 = element("b");
    			b1.textContent = "OBS:";
    			t12 = text(" anvendes dataTheme direkte på et html-element skal det anvendes på følgende måde:\n    ");
    			code2 = element("code");
    			code2.textContent = "data-theme=\"lightmode\"";
    			t14 = space();
    			h31 = element("h3");
    			h31.textContent = "Eksempler på data theme";
    			t16 = space();
    			create_component(pillnavigation.$$.fragment);
    			t17 = space();
    			h32 = element("h3");
    			h32.textContent = "Overblik over komponenter der kan anvende data theme";
    			t19 = space();
    			div12 = element("div");
    			div3 = element("div");
    			div0 = element("div");
    			div0.textContent = "Component";
    			t21 = space();
    			div1 = element("div");
    			div1.textContent = "Dokumentation";
    			t23 = space();
    			div2 = element("div");
    			div2.textContent = "dataTheme";
    			t25 = space();
    			div7 = element("div");
    			div4 = element("div");
    			div4.textContent = "Accordion";
    			t27 = space();
    			div5 = element("div");
    			a0 = element("a");
    			a0.textContent = "Accordion";
    			t29 = space();
    			div6 = element("div");
    			p3 = element("p");
    			i0 = element("i");
    			t30 = text(" lightmode");
    			t31 = space();
    			p4 = element("p");
    			i1 = element("i");
    			t32 = text(" darkmode");
    			t33 = space();
    			div11 = element("div");
    			div8 = element("div");
    			div8.textContent = "Card (Card-mode)";
    			t35 = space();
    			div9 = element("div");
    			a1 = element("a");
    			a1.textContent = "Card";
    			t37 = space();
    			div10 = element("div");
    			p5 = element("p");
    			i2 = element("i");
    			t38 = text(" lightmode");
    			t39 = space();
    			p6 = element("p");
    			i3 = element("i");
    			t40 = text(" darkmode");
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$9, 15, 2, 552);
    			add_location(h30, file$9, 16, 2, 592);
    			add_location(code0, file$9, 18, 77, 709);
    			add_location(p0, file$9, 17, 2, 628);
    			add_location(code1, file$9, 22, 5, 779);
    			add_location(b0, file$9, 22, 92, 866);
    			add_location(p1, file$9, 22, 2, 776);
    			add_location(b1, file$9, 24, 4, 896);
    			add_location(code2, file$9, 25, 4, 994);
    			add_location(p2, file$9, 23, 2, 888);
    			add_location(h31, file$9, 28, 2, 1040);
    			add_location(h32, file$9, 54, 2, 2036);
    			attr_dev(div0, "class", "width-1of3 padding-m fontweight-bold");
    			add_location(div0, file$9, 57, 6, 2223);
    			attr_dev(div1, "class", "width-1of3 padding-m fontweight-bold");
    			add_location(div1, file$9, 58, 6, 2295);
    			attr_dev(div2, "class", "width-1of3 padding-m fontweight-bold");
    			add_location(div2, file$9, 59, 6, 2371);
    			attr_dev(div3, "class", "flex bg--graa7");
    			set_style(div3, "border-bottom", "1px solid rgba(0, 0, 0, .1)");
    			add_location(div3, file$9, 56, 4, 2136);
    			attr_dev(div4, "class", "width-1of3 padding-m");
    			add_location(div4, file$9, 62, 6, 2539);
    			attr_dev(a0, "href", "#/components/accordion");
    			add_location(a0, file$9, 64, 8, 2638);
    			attr_dev(div5, "class", "width-1of3 padding-m");
    			add_location(div5, file$9, 63, 6, 2595);
    			attr_dev(i0, "class", "fas fa-circle color--white");
    			add_location(i0, file$9, 67, 31, 2770);
    			attr_dev(p3, "class", "margin-none");
    			add_location(p3, file$9, 67, 8, 2747);
    			attr_dev(i1, "class", "fas fa-circle color--black");
    			add_location(i1, file$9, 68, 31, 2856);
    			attr_dev(p4, "class", "margin-none");
    			add_location(p4, file$9, 68, 8, 2833);
    			attr_dev(div6, "class", "width-1of3 padding-m");
    			add_location(div6, file$9, 66, 6, 2704);
    			attr_dev(div7, "class", "flex bg--graa7");
    			set_style(div7, "border-bottom", "1px solid rgba(0, 0, 0, .1)");
    			add_location(div7, file$9, 61, 4, 2452);
    			attr_dev(div8, "class", "width-1of3 padding-m");
    			add_location(div8, file$9, 72, 6, 3025);
    			attr_dev(a1, "href", "#/components/card");
    			add_location(a1, file$9, 74, 8, 3131);
    			attr_dev(div9, "class", "width-1of3 padding-m");
    			add_location(div9, file$9, 73, 6, 3088);
    			attr_dev(i2, "class", "fas fa-circle color--white");
    			add_location(i2, file$9, 77, 31, 3253);
    			attr_dev(p5, "class", "margin-none");
    			add_location(p5, file$9, 77, 8, 3230);
    			attr_dev(i3, "class", "fas fa-circle color--black");
    			add_location(i3, file$9, 78, 31, 3339);
    			attr_dev(p6, "class", "margin-none");
    			add_location(p6, file$9, 78, 8, 3316);
    			attr_dev(div10, "class", "width-1of3 padding-m");
    			add_location(div10, file$9, 76, 6, 3187);
    			attr_dev(div11, "class", "flex bg--graa7");
    			set_style(div11, "border-bottom", "1px solid rgba(0, 0, 0, .1)");
    			add_location(div11, file$9, 71, 4, 2938);
    			attr_dev(div12, "class", "grid-width--large");
    			add_location(div12, file$9, 55, 2, 2100);
    			attr_dev(div13, "class", "grid-width--large");
    			add_location(div13, file$9, 14, 0, 518);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div13, anchor);
    			append_dev(div13, h1);
    			append_dev(div13, t1);
    			append_dev(div13, h30);
    			append_dev(div13, t3);
    			append_dev(div13, p0);
    			append_dev(p0, t4);
    			append_dev(p0, code0);
    			append_dev(div13, t6);
    			append_dev(div13, p1);
    			append_dev(p1, code1);
    			append_dev(p1, t8);
    			append_dev(p1, b0);
    			append_dev(div13, t10);
    			append_dev(div13, p2);
    			append_dev(p2, b1);
    			append_dev(p2, t12);
    			append_dev(p2, code2);
    			append_dev(div13, t14);
    			append_dev(div13, h31);
    			append_dev(div13, t16);
    			mount_component(pillnavigation, div13, null);
    			append_dev(div13, t17);
    			append_dev(div13, h32);
    			append_dev(div13, t19);
    			append_dev(div13, div12);
    			append_dev(div12, div3);
    			append_dev(div3, div0);
    			append_dev(div3, t21);
    			append_dev(div3, div1);
    			append_dev(div3, t23);
    			append_dev(div3, div2);
    			append_dev(div12, t25);
    			append_dev(div12, div7);
    			append_dev(div7, div4);
    			append_dev(div7, t27);
    			append_dev(div7, div5);
    			append_dev(div5, a0);
    			append_dev(div7, t29);
    			append_dev(div7, div6);
    			append_dev(div6, p3);
    			append_dev(p3, i0);
    			append_dev(p3, t30);
    			append_dev(div6, t31);
    			append_dev(div6, p4);
    			append_dev(p4, i1);
    			append_dev(p4, t32);
    			append_dev(div12, t33);
    			append_dev(div12, div11);
    			append_dev(div11, div8);
    			append_dev(div11, t35);
    			append_dev(div11, div9);
    			append_dev(div9, a1);
    			append_dev(div11, t37);
    			append_dev(div11, div10);
    			append_dev(div10, p5);
    			append_dev(p5, i2);
    			append_dev(p5, t38);
    			append_dev(div10, t39);
    			append_dev(div10, p6);
    			append_dev(p6, i3);
    			append_dev(p6, t40);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const pillnavigation_changes = {};

    			if (dirty & /*$$scope*/ 2) {
    				pillnavigation_changes.$$scope = { dirty, ctx };
    			}

    			pillnavigation.$set(pillnavigation_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(pillnavigation.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(pillnavigation.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div13);
    			destroy_component(pillnavigation);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$9.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$9($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("DataTheme", slots, []);

    	let tabs = [
    		{
    			title: "Tab 1",
    			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis porttitor augue sed commodo. Etiam ornare arcu quis turpis pulvinar, ullamcorper ullamcorper nunc ullamcorper. Maecenas porttitor, erat in feugiat faucibus, velit sem luctus leo, nec congue tellus erat sit amet purus."
    		}
    	];

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<DataTheme> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		Prism: Prism$1,
    		Accordion,
    		PillNavigation,
    		Pill,
    		PillContent,
    		PillList,
    		tabs
    	});

    	$$self.$inject_state = $$props => {
    		if ("tabs" in $$props) $$invalidate(0, tabs = $$props.tabs);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [tabs];
    }

    class DataTheme extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$9, create_fragment$9, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "DataTheme",
    			options,
    			id: create_fragment$9.name
    		});
    	}
    }

    /* docs_src/utilities/Flex/Flex.svelte generated by Svelte v3.38.1 */
    const file$8 = "docs_src/utilities/Flex/Flex.svelte";

    function create_fragment$8(ctx) {
    	let div85;
    	let h1;
    	let t1;
    	let h30;
    	let t3;
    	let p0;
    	let t5;
    	let p1;
    	let t7;
    	let prism0;
    	let t8;
    	let p2;
    	let t10;
    	let prism1;
    	let t11;
    	let h31;
    	let t13;
    	let p3;
    	let t14;
    	let code0;
    	let t16;
    	let t17;
    	let prism2;
    	let t18;
    	let div0;
    	let t20;
    	let h32;
    	let t22;
    	let p4;
    	let t24;
    	let prism3;
    	let t25;
    	let div4;
    	let div1;
    	let t27;
    	let div2;
    	let t29;
    	let div3;
    	let t31;
    	let h33;
    	let t33;
    	let p5;
    	let t34;
    	let i0;
    	let t36;
    	let t37;
    	let prism4;
    	let t38;
    	let div8;
    	let div5;
    	let t40;
    	let div6;
    	let t42;
    	let div7;
    	let t44;
    	let prism5;
    	let t45;
    	let div12;
    	let div9;
    	let t47;
    	let div10;
    	let t49;
    	let div11;
    	let t51;
    	let prism6;
    	let t52;
    	let div16;
    	let div13;
    	let t54;
    	let div14;
    	let t56;
    	let div15;
    	let t58;
    	let prism7;
    	let t59;
    	let div20;
    	let div17;
    	let t61;
    	let div18;
    	let t63;
    	let div19;
    	let t65;
    	let prism8;
    	let t66;
    	let div24;
    	let div21;
    	let t68;
    	let div22;
    	let t70;
    	let div23;
    	let t72;
    	let h34;
    	let t74;
    	let p6;
    	let t75;
    	let i1;
    	let t77;
    	let t78;
    	let p7;
    	let t79;
    	let code1;
    	let t81;
    	let prism9;
    	let t82;
    	let div28;
    	let div25;
    	let t84;
    	let div26;
    	let t86;
    	let div27;
    	let t88;
    	let prism10;
    	let t89;
    	let div32;
    	let div29;
    	let t91;
    	let div30;
    	let t93;
    	let div31;
    	let t95;
    	let prism11;
    	let t96;
    	let div36;
    	let div33;
    	let t98;
    	let div34;
    	let t100;
    	let div35;
    	let t102;
    	let prism12;
    	let t103;
    	let div40;
    	let div37;
    	let t105;
    	let div38;
    	let t107;
    	let div39;
    	let t109;
    	let h35;
    	let t111;
    	let p8;
    	let t113;
    	let prism13;
    	let t114;
    	let div44;
    	let div41;
    	let t116;
    	let div42;
    	let t118;
    	let div43;
    	let t120;
    	let prism14;
    	let t121;
    	let div48;
    	let div45;
    	let t123;
    	let div46;
    	let t125;
    	let div47;
    	let t127;
    	let prism15;
    	let t128;
    	let div52;
    	let div49;
    	let t130;
    	let div50;
    	let t132;
    	let div51;
    	let t134;
    	let h36;
    	let t136;
    	let p9;
    	let t138;
    	let p10;
    	let t139;
    	let code2;
    	let t141;
    	let t142;
    	let prism16;
    	let t143;
    	let div62;
    	let div53;
    	let t145;
    	let div54;
    	let t147;
    	let div55;
    	let t149;
    	let div56;
    	let t151;
    	let div57;
    	let t153;
    	let div58;
    	let t155;
    	let div59;
    	let t157;
    	let div60;
    	let t159;
    	let div61;
    	let t161;
    	let prism17;
    	let t162;
    	let div72;
    	let div63;
    	let t164;
    	let div64;
    	let t166;
    	let div65;
    	let t168;
    	let div66;
    	let t170;
    	let div67;
    	let t172;
    	let div68;
    	let t174;
    	let div69;
    	let t176;
    	let div70;
    	let t178;
    	let div71;
    	let t180;
    	let h37;
    	let t182;
    	let p11;
    	let t184;
    	let p12;
    	let code3;
    	let t186;
    	let t187;
    	let prism18;
    	let t188;
    	let div80;
    	let div73;
    	let t190;
    	let div74;
    	let t192;
    	let div75;
    	let t194;
    	let div76;
    	let t196;
    	let div77;
    	let t198;
    	let div78;
    	let t200;
    	let div79;
    	let t202;
    	let p13;
    	let code4;
    	let t204;
    	let t205;
    	let prism19;
    	let t206;
    	let div84;
    	let div81;
    	let t208;
    	let div82;
    	let t210;
    	let div83;
    	let current;

    	prism0 = new Prism$1({
    			props: {
    				language: "html",
    				source: `<div class="flex"></div>`
    			},
    			$$inline: true
    		});

    	prism1 = new Prism$1({
    			props: {
    				language: "html",
    				source: `<component className="flex"></component>`
    			},
    			$$inline: true
    		});

    	prism2 = new Prism$1({
    			props: {
    				language: "html",
    				source: `<div class="flex">I'm a flexbox container!</div>`
    			},
    			$$inline: true
    		});

    	prism3 = new Prism$1({
    			props: {
    				language: "html",
    				source: `<div class="flex flex--center">...</div>`
    			},
    			$$inline: true
    		});

    	prism4 = new Prism$1({
    			props: {
    				language: "html",
    				source: `<div class="flex flex-justify--start">...</div>`
    			},
    			$$inline: true
    		});

    	prism5 = new Prism$1({
    			props: {
    				language: "html",
    				source: `<div class="flex flex-justify--center">...</div>`
    			},
    			$$inline: true
    		});

    	prism6 = new Prism$1({
    			props: {
    				language: "html",
    				source: `<div class="flex flex-justify--end">...</div>`
    			},
    			$$inline: true
    		});

    	prism7 = new Prism$1({
    			props: {
    				language: "html",
    				source: `<div class="flex flex-justify--around">...</div>`
    			},
    			$$inline: true
    		});

    	prism8 = new Prism$1({
    			props: {
    				language: "html",
    				source: `<div class="flex flex-justify--between">...</div>`
    			},
    			$$inline: true
    		});

    	prism9 = new Prism$1({
    			props: {
    				language: "html",
    				source: `<div class="flex flex-align--start">...</div>`
    			},
    			$$inline: true
    		});

    	prism10 = new Prism$1({
    			props: {
    				language: "html",
    				source: `<div class="flex flex-align--center">...</div>`
    			},
    			$$inline: true
    		});

    	prism11 = new Prism$1({
    			props: {
    				language: "html",
    				source: `<div class="flex flex-align--end">...</div>`
    			},
    			$$inline: true
    		});

    	prism12 = new Prism$1({
    			props: {
    				language: "html",
    				source: `<div class="flex flex-align--strech">...</div>`
    			},
    			$$inline: true
    		});

    	prism13 = new Prism$1({
    			props: {
    				language: "html",
    				source: `<div class="flex flex-column">...</div>`
    			},
    			$$inline: true
    		});

    	prism14 = new Prism$1({
    			props: {
    				language: "html",
    				source: `<div class="flex flex-column--reverse">...</div>`
    			},
    			$$inline: true
    		});

    	prism15 = new Prism$1({
    			props: {
    				language: "html",
    				source: `<div class="flex flex-row--reverse">...</div>`
    			},
    			$$inline: true
    		});

    	prism16 = new Prism$1({
    			props: {
    				language: "html",
    				source: `<div class="flex">...</div>`
    			},
    			$$inline: true
    		});

    	prism17 = new Prism$1({
    			props: {
    				language: "html",
    				source: `<div class="flex flex-wrap--wrap">...</div>`
    			},
    			$$inline: true
    		});

    	prism18 = new Prism$1({
    			props: {
    				language: "html",
    				source: `<div class="flex"><div class="flex-item flex-item--noshrink">Flex item no-shrink</div></div>`
    			},
    			$$inline: true
    		});

    	prism19 = new Prism$1({
    			props: {
    				language: "html",
    				source: `<div class="flex"><div class="flex-item flex-item--grow">Flex item grow</div></div>`
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div85 = element("div");
    			h1 = element("h1");
    			h1.textContent = "Flex";
    			t1 = space();
    			h30 = element("h3");
    			h30.textContent = "Anvendelse af Flex";
    			t3 = space();
    			p0 = element("p");
    			p0.textContent = "Flex består af forskellige CSS klasser, som både kan anvendes på komponenter og elementer ved tilføjelse af class.";
    			t5 = space();
    			p1 = element("p");
    			p1.textContent = "HTML element";
    			t7 = space();
    			create_component(prism0.$$.fragment);
    			t8 = space();
    			p2 = element("p");
    			p2.textContent = "Svelte component";
    			t10 = space();
    			create_component(prism1.$$.fragment);
    			t11 = space();
    			h31 = element("h3");
    			h31.textContent = "Flex container";
    			t13 = space();
    			p3 = element("p");
    			t14 = text("Flex tilføjer ");
    			code0 = element("code");
    			code0.textContent = "display: flex";
    			t16 = text(" til container element og transformere alle child elementer til flex-items.");
    			t17 = space();
    			create_component(prism2.$$.fragment);
    			t18 = space();
    			div0 = element("div");
    			div0.textContent = "I'm a flexbox container!";
    			t20 = space();
    			h32 = element("h3");
    			h32.textContent = "Flex center";
    			t22 = space();
    			p4 = element("p");
    			p4.textContent = "Flex center centrere alle child elementer både horizontalt og vertical.";
    			t24 = space();
    			create_component(prism3.$$.fragment);
    			t25 = space();
    			div4 = element("div");
    			div1 = element("div");
    			div1.textContent = "Flex item";
    			t27 = space();
    			div2 = element("div");
    			div2.textContent = "Flex item";
    			t29 = space();
    			div3 = element("div");
    			div3.textContent = "Flex item";
    			t31 = space();
    			h33 = element("h3");
    			h33.textContent = "Flex justify content";
    			t33 = space();
    			p5 = element("p");
    			t34 = text("Justify content anvendes til ");
    			i0 = element("i");
    			i0.textContent = "horizontal";
    			t36 = text(" placering af child elementer i flex containers.");
    			t37 = space();
    			create_component(prism4.$$.fragment);
    			t38 = space();
    			div8 = element("div");
    			div5 = element("div");
    			div5.textContent = "Flex item";
    			t40 = space();
    			div6 = element("div");
    			div6.textContent = "Flex item";
    			t42 = space();
    			div7 = element("div");
    			div7.textContent = "Flex item";
    			t44 = space();
    			create_component(prism5.$$.fragment);
    			t45 = space();
    			div12 = element("div");
    			div9 = element("div");
    			div9.textContent = "Flex item";
    			t47 = space();
    			div10 = element("div");
    			div10.textContent = "Flex item";
    			t49 = space();
    			div11 = element("div");
    			div11.textContent = "Flex item";
    			t51 = space();
    			create_component(prism6.$$.fragment);
    			t52 = space();
    			div16 = element("div");
    			div13 = element("div");
    			div13.textContent = "Flex item";
    			t54 = space();
    			div14 = element("div");
    			div14.textContent = "Flex item";
    			t56 = space();
    			div15 = element("div");
    			div15.textContent = "Flex item";
    			t58 = space();
    			create_component(prism7.$$.fragment);
    			t59 = space();
    			div20 = element("div");
    			div17 = element("div");
    			div17.textContent = "Flex item";
    			t61 = space();
    			div18 = element("div");
    			div18.textContent = "Flex item";
    			t63 = space();
    			div19 = element("div");
    			div19.textContent = "Flex item";
    			t65 = space();
    			create_component(prism8.$$.fragment);
    			t66 = space();
    			div24 = element("div");
    			div21 = element("div");
    			div21.textContent = "Flex item";
    			t68 = space();
    			div22 = element("div");
    			div22.textContent = "Flex item";
    			t70 = space();
    			div23 = element("div");
    			div23.textContent = "Flex item";
    			t72 = space();
    			h34 = element("h3");
    			h34.textContent = "Flex align items";
    			t74 = space();
    			p6 = element("p");
    			t75 = text("Align items anvendes til ");
    			i1 = element("i");
    			i1.textContent = "veritcal";
    			t77 = text(" placering af child elementer i flex containers.");
    			t78 = space();
    			p7 = element("p");
    			t79 = text("Individuelle child elementer(flex-item) kan også vertical placeres med ");
    			code1 = element("code");
    			code1.textContent = "flex-item--start | center | end | strech";
    			t81 = space();
    			create_component(prism9.$$.fragment);
    			t82 = space();
    			div28 = element("div");
    			div25 = element("div");
    			div25.textContent = "Flex item";
    			t84 = space();
    			div26 = element("div");
    			div26.textContent = "Flex item";
    			t86 = space();
    			div27 = element("div");
    			div27.textContent = "Flex item";
    			t88 = space();
    			create_component(prism10.$$.fragment);
    			t89 = space();
    			div32 = element("div");
    			div29 = element("div");
    			div29.textContent = "Flex item";
    			t91 = space();
    			div30 = element("div");
    			div30.textContent = "Flex item";
    			t93 = space();
    			div31 = element("div");
    			div31.textContent = "Flex item";
    			t95 = space();
    			create_component(prism11.$$.fragment);
    			t96 = space();
    			div36 = element("div");
    			div33 = element("div");
    			div33.textContent = "Flex item";
    			t98 = space();
    			div34 = element("div");
    			div34.textContent = "Flex item";
    			t100 = space();
    			div35 = element("div");
    			div35.textContent = "Flex item";
    			t102 = space();
    			create_component(prism12.$$.fragment);
    			t103 = space();
    			div40 = element("div");
    			div37 = element("div");
    			div37.textContent = "Flex item";
    			t105 = space();
    			div38 = element("div");
    			div38.textContent = "Flex item";
    			t107 = space();
    			div39 = element("div");
    			div39.textContent = "Flex item";
    			t109 = space();
    			h35 = element("h3");
    			h35.textContent = "Flex directions";
    			t111 = space();
    			p8 = element("p");
    			p8.textContent = "Flex directions bestemmer rækkefølgen for visning af child elementer i flex containeren.";
    			t113 = space();
    			create_component(prism13.$$.fragment);
    			t114 = space();
    			div44 = element("div");
    			div41 = element("div");
    			div41.textContent = "Flex item 1";
    			t116 = space();
    			div42 = element("div");
    			div42.textContent = "Flex item 2";
    			t118 = space();
    			div43 = element("div");
    			div43.textContent = "Flex item 3";
    			t120 = space();
    			create_component(prism14.$$.fragment);
    			t121 = space();
    			div48 = element("div");
    			div45 = element("div");
    			div45.textContent = "Flex item 1";
    			t123 = space();
    			div46 = element("div");
    			div46.textContent = "Flex item 2";
    			t125 = space();
    			div47 = element("div");
    			div47.textContent = "Flex item 3";
    			t127 = space();
    			create_component(prism15.$$.fragment);
    			t128 = space();
    			div52 = element("div");
    			div49 = element("div");
    			div49.textContent = "Flex item 1";
    			t130 = space();
    			div50 = element("div");
    			div50.textContent = "Flex item 2";
    			t132 = space();
    			div51 = element("div");
    			div51.textContent = "Flex item 3";
    			t134 = space();
    			h36 = element("h3");
    			h36.textContent = "Flex wrap";
    			t136 = space();
    			p9 = element("p");
    			p9.textContent = "Flex wrap sørger for at alle child elementer beholder deres størrelse og istedet wrapper elementerne på multiple lines\n    istedet for one-line.";
    			t138 = space();
    			p10 = element("p");
    			t139 = text("Ex. browser-default er ");
    			code2 = element("code");
    			code2.textContent = "flex-wrap: nowrap;";
    			t141 = text(" som forcer alle child elementer til at stå på samme line ved at squeeze\n    dem sammen.");
    			t142 = space();
    			create_component(prism16.$$.fragment);
    			t143 = space();
    			div62 = element("div");
    			div53 = element("div");
    			div53.textContent = "Flex item 1";
    			t145 = space();
    			div54 = element("div");
    			div54.textContent = "Flex item 2";
    			t147 = space();
    			div55 = element("div");
    			div55.textContent = "Flex item 3";
    			t149 = space();
    			div56 = element("div");
    			div56.textContent = "Flex item 4";
    			t151 = space();
    			div57 = element("div");
    			div57.textContent = "Flex item 5";
    			t153 = space();
    			div58 = element("div");
    			div58.textContent = "Flex item 6";
    			t155 = space();
    			div59 = element("div");
    			div59.textContent = "Flex item 7";
    			t157 = space();
    			div60 = element("div");
    			div60.textContent = "Flex item 8";
    			t159 = space();
    			div61 = element("div");
    			div61.textContent = "Flex item 9";
    			t161 = space();
    			create_component(prism17.$$.fragment);
    			t162 = space();
    			div72 = element("div");
    			div63 = element("div");
    			div63.textContent = "Flex item 1";
    			t164 = space();
    			div64 = element("div");
    			div64.textContent = "Flex item 2";
    			t166 = space();
    			div65 = element("div");
    			div65.textContent = "Flex item 3";
    			t168 = space();
    			div66 = element("div");
    			div66.textContent = "Flex item 4";
    			t170 = space();
    			div67 = element("div");
    			div67.textContent = "Flex item 5";
    			t172 = space();
    			div68 = element("div");
    			div68.textContent = "Flex item 6";
    			t174 = space();
    			div69 = element("div");
    			div69.textContent = "Flex item 7";
    			t176 = space();
    			div70 = element("div");
    			div70.textContent = "Flex item 8";
    			t178 = space();
    			div71 = element("div");
    			div71.textContent = "Flex item 9";
    			t180 = space();
    			h37 = element("h3");
    			h37.textContent = "Flex size";
    			t182 = space();
    			p11 = element("p");
    			p11.textContent = "Flex size bestemmer hvordan størrelsen på child elementer skal opføre sig.";
    			t184 = space();
    			p12 = element("p");
    			code3 = element("code");
    			code3.textContent = "flex-item--noshrink";
    			t186 = text(" sørger for at et child element altid vil have den samme størrelse også på scalering.");
    			t187 = space();
    			create_component(prism18.$$.fragment);
    			t188 = space();
    			div80 = element("div");
    			div73 = element("div");
    			div73.textContent = "Flex item normal";
    			t190 = space();
    			div74 = element("div");
    			div74.textContent = "Flex item normal";
    			t192 = space();
    			div75 = element("div");
    			div75.textContent = "Flex item no-shrink";
    			t194 = space();
    			div76 = element("div");
    			div76.textContent = "Flex item no-shrink";
    			t196 = space();
    			div77 = element("div");
    			div77.textContent = "Flex item no-shrink";
    			t198 = space();
    			div78 = element("div");
    			div78.textContent = "Flex item no-shrink";
    			t200 = space();
    			div79 = element("div");
    			div79.textContent = "Flex item no-shrink";
    			t202 = space();
    			p13 = element("p");
    			code4 = element("code");
    			code4.textContent = "flex-item--grow";
    			t204 = text(" sørger for at child element udfylder den tilbageværende plads i flex containeren.");
    			t205 = space();
    			create_component(prism19.$$.fragment);
    			t206 = space();
    			div84 = element("div");
    			div81 = element("div");
    			div81.textContent = "Flex item normal";
    			t208 = space();
    			div82 = element("div");
    			div82.textContent = "Flex item grow";
    			t210 = space();
    			div83 = element("div");
    			div83.textContent = "Flex item normal";
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$8, 5, 2, 90);
    			add_location(h30, file$8, 6, 2, 124);
    			add_location(p0, file$8, 7, 2, 154);
    			add_location(p1, file$8, 10, 2, 286);
    			add_location(p2, file$8, 12, 2, 372);
    			add_location(h31, file$8, 15, 2, 479);
    			add_location(code0, file$8, 17, 18, 527);
    			add_location(p3, file$8, 16, 2, 505);
    			attr_dev(div0, "class", "flex bg--graa7 padding-l");
    			add_location(div0, file$8, 20, 2, 726);
    			add_location(h32, file$8, 22, 2, 798);
    			add_location(p4, file$8, 23, 2, 821);
    			attr_dev(div1, "class", "flex-item bg--graa5 padding-l");
    			add_location(div1, file$8, 26, 4, 1051);
    			attr_dev(div2, "class", "flex-item bg--graa5 padding-l");
    			add_location(div2, file$8, 27, 4, 1114);
    			attr_dev(div3, "class", "flex-item bg--graa5 padding-l");
    			add_location(div3, file$8, 28, 4, 1177);
    			attr_dev(div4, "class", "flex flex--center bg--graa7");
    			set_style(div4, "height", "100px");
    			add_location(div4, file$8, 25, 2, 982);
    			add_location(h33, file$8, 31, 2, 1248);
    			add_location(i0, file$8, 32, 34, 1312);
    			add_location(p5, file$8, 32, 2, 1280);
    			attr_dev(div5, "class", "flex-item bg--graa5 padding-l");
    			add_location(div5, file$8, 35, 4, 1524);
    			attr_dev(div6, "class", "flex-item bg--graa5 padding-l");
    			add_location(div6, file$8, 36, 4, 1587);
    			attr_dev(div7, "class", "flex-item bg--graa5 padding-l");
    			add_location(div7, file$8, 37, 4, 1650);
    			attr_dev(div8, "class", "flex flex-justify--start bg--graa7");
    			add_location(div8, file$8, 34, 2, 1471);
    			attr_dev(div9, "class", "flex-item bg--graa5 padding-l");
    			add_location(div9, file$8, 41, 4, 1862);
    			attr_dev(div10, "class", "flex-item bg--graa5 padding-l");
    			add_location(div10, file$8, 42, 4, 1925);
    			attr_dev(div11, "class", "flex-item bg--graa5 padding-l");
    			add_location(div11, file$8, 43, 4, 1988);
    			attr_dev(div12, "class", "flex flex-justify--center bg--graa7");
    			add_location(div12, file$8, 40, 2, 1808);
    			attr_dev(div13, "class", "flex-item bg--graa5 padding-l");
    			add_location(div13, file$8, 47, 4, 2194);
    			attr_dev(div14, "class", "flex-item bg--graa5 padding-l");
    			add_location(div14, file$8, 48, 4, 2257);
    			attr_dev(div15, "class", "flex-item bg--graa5 padding-l");
    			add_location(div15, file$8, 49, 4, 2320);
    			attr_dev(div16, "class", "flex flex-justify--end bg--graa7");
    			add_location(div16, file$8, 46, 2, 2143);
    			attr_dev(div17, "class", "flex-item bg--graa5 padding-l");
    			add_location(div17, file$8, 53, 4, 2532);
    			attr_dev(div18, "class", "flex-item bg--graa5 padding-l");
    			add_location(div18, file$8, 54, 4, 2595);
    			attr_dev(div19, "class", "flex-item bg--graa5 padding-l");
    			add_location(div19, file$8, 55, 4, 2658);
    			attr_dev(div20, "class", "flex flex-justify--around bg--graa7");
    			add_location(div20, file$8, 52, 2, 2478);
    			attr_dev(div21, "class", "flex-item bg--graa5 padding-l");
    			add_location(div21, file$8, 59, 4, 2872);
    			attr_dev(div22, "class", "flex-item bg--graa5 padding-l");
    			add_location(div22, file$8, 60, 4, 2935);
    			attr_dev(div23, "class", "flex-item bg--graa5 padding-l");
    			add_location(div23, file$8, 61, 4, 2998);
    			attr_dev(div24, "class", "flex flex-justify--between bg--graa7");
    			add_location(div24, file$8, 58, 2, 2817);
    			add_location(h34, file$8, 64, 2, 3069);
    			add_location(i1, file$8, 65, 30, 3125);
    			add_location(p6, file$8, 65, 2, 3097);
    			add_location(code1, file$8, 66, 76, 3269);
    			add_location(p7, file$8, 66, 2, 3195);
    			attr_dev(div25, "class", "flex-item bg--graa5 padding-l");
    			add_location(div25, file$8, 69, 4, 3488);
    			attr_dev(div26, "class", "flex-item bg--graa5 padding-l");
    			add_location(div26, file$8, 70, 4, 3551);
    			attr_dev(div27, "class", "flex-item bg--graa5 padding-l");
    			add_location(div27, file$8, 71, 4, 3614);
    			attr_dev(div28, "class", "flex flex-align--start bg--graa7");
    			set_style(div28, "height", "100px");
    			add_location(div28, file$8, 68, 2, 3414);
    			attr_dev(div29, "class", "flex-item bg--graa5 padding-l");
    			add_location(div29, file$8, 75, 4, 3845);
    			attr_dev(div30, "class", "flex-item bg--graa5 padding-l");
    			add_location(div30, file$8, 76, 4, 3908);
    			attr_dev(div31, "class", "flex-item bg--graa5 padding-l");
    			add_location(div31, file$8, 77, 4, 3971);
    			attr_dev(div32, "class", "flex flex-align--center bg--graa7");
    			set_style(div32, "height", "100px");
    			add_location(div32, file$8, 74, 2, 3770);
    			attr_dev(div33, "class", "flex-item bg--graa5 padding-l");
    			add_location(div33, file$8, 81, 4, 4196);
    			attr_dev(div34, "class", "flex-item bg--graa5 padding-l");
    			add_location(div34, file$8, 82, 4, 4259);
    			attr_dev(div35, "class", "flex-item bg--graa5 padding-l");
    			add_location(div35, file$8, 83, 4, 4322);
    			attr_dev(div36, "class", "flex flex-align--end bg--graa7");
    			set_style(div36, "height", "100px");
    			add_location(div36, file$8, 80, 2, 4124);
    			attr_dev(div37, "class", "flex-item bg--graa5 padding-l");
    			add_location(div37, file$8, 87, 4, 4553);
    			attr_dev(div38, "class", "flex-item bg--graa5 padding-l");
    			add_location(div38, file$8, 88, 4, 4616);
    			attr_dev(div39, "class", "flex-item bg--graa5 padding-l");
    			add_location(div39, file$8, 89, 4, 4679);
    			attr_dev(div40, "class", "flex flex-align--strech bg--graa7");
    			set_style(div40, "height", "100px");
    			add_location(div40, file$8, 86, 2, 4478);
    			add_location(h35, file$8, 92, 2, 4750);
    			add_location(p8, file$8, 93, 2, 4777);
    			attr_dev(div41, "class", "flex-item bg--graa5 padding-l");
    			add_location(div41, file$8, 96, 4, 4999);
    			attr_dev(div42, "class", "flex-item bg--graa5 padding-l");
    			add_location(div42, file$8, 97, 4, 5064);
    			attr_dev(div43, "class", "flex-item bg--graa5 padding-l");
    			add_location(div43, file$8, 98, 4, 5129);
    			attr_dev(div44, "class", "flex flex-column bg--graa7");
    			add_location(div44, file$8, 95, 2, 4954);
    			attr_dev(div45, "class", "flex-item bg--graa5 padding-l");
    			add_location(div45, file$8, 102, 4, 5343);
    			attr_dev(div46, "class", "flex-item bg--graa5 padding-l");
    			add_location(div46, file$8, 103, 4, 5408);
    			attr_dev(div47, "class", "flex-item bg--graa5 padding-l");
    			add_location(div47, file$8, 104, 4, 5473);
    			attr_dev(div48, "class", "flex flex-column--reverse bg--graa7");
    			add_location(div48, file$8, 101, 2, 5289);
    			attr_dev(div49, "class", "flex-item bg--graa5 padding-l");
    			add_location(div49, file$8, 108, 4, 5681);
    			attr_dev(div50, "class", "flex-item bg--graa5 padding-l");
    			add_location(div50, file$8, 109, 4, 5746);
    			attr_dev(div51, "class", "flex-item bg--graa5 padding-l");
    			add_location(div51, file$8, 110, 4, 5811);
    			attr_dev(div52, "class", "flex flex-row--reverse bg--graa7");
    			add_location(div52, file$8, 107, 2, 5630);
    			add_location(h36, file$8, 113, 2, 5884);
    			add_location(p9, file$8, 114, 2, 5905);
    			add_location(code2, file$8, 119, 27, 6098);
    			add_location(p10, file$8, 118, 2, 6067);
    			attr_dev(div53, "class", "flex-item bg--graa5 padding-l");
    			add_location(div53, file$8, 125, 6, 6332);
    			attr_dev(div54, "class", "flex-item bg--graa5 padding-l");
    			add_location(div54, file$8, 126, 6, 6399);
    			attr_dev(div55, "class", "flex-item bg--graa5 padding-l");
    			add_location(div55, file$8, 127, 6, 6466);
    			attr_dev(div56, "class", "flex-item bg--graa5 padding-l");
    			add_location(div56, file$8, 128, 6, 6533);
    			attr_dev(div57, "class", "flex-item bg--graa5 padding-l");
    			add_location(div57, file$8, 129, 6, 6600);
    			attr_dev(div58, "class", "flex-item bg--graa5 padding-l");
    			add_location(div58, file$8, 130, 6, 6667);
    			attr_dev(div59, "class", "flex-item bg--graa5 padding-l");
    			add_location(div59, file$8, 131, 6, 6734);
    			attr_dev(div60, "class", "flex-item bg--graa5 padding-l");
    			add_location(div60, file$8, 132, 6, 6801);
    			attr_dev(div61, "class", "flex-item bg--graa5 padding-l");
    			add_location(div61, file$8, 133, 6, 6868);
    			attr_dev(div62, "class", "flex bg--graa7");
    			add_location(div62, file$8, 124, 4, 6297);
    			attr_dev(div63, "class", "flex-item bg--graa5 padding-l");
    			add_location(div63, file$8, 138, 4, 7075);
    			attr_dev(div64, "class", "flex-item bg--graa5 padding-l");
    			add_location(div64, file$8, 139, 4, 7140);
    			attr_dev(div65, "class", "flex-item bg--graa5 padding-l");
    			add_location(div65, file$8, 140, 4, 7205);
    			attr_dev(div66, "class", "flex-item bg--graa5 padding-l");
    			add_location(div66, file$8, 141, 4, 7270);
    			attr_dev(div67, "class", "flex-item bg--graa5 padding-l");
    			add_location(div67, file$8, 142, 4, 7335);
    			attr_dev(div68, "class", "flex-item bg--graa5 padding-l");
    			add_location(div68, file$8, 143, 4, 7400);
    			attr_dev(div69, "class", "flex-item bg--graa5 padding-l");
    			add_location(div69, file$8, 144, 4, 7465);
    			attr_dev(div70, "class", "flex-item bg--graa5 padding-l");
    			add_location(div70, file$8, 145, 4, 7530);
    			attr_dev(div71, "class", "flex-item bg--graa5 padding-l");
    			add_location(div71, file$8, 146, 4, 7595);
    			attr_dev(div72, "class", "flex flex-wrap--wrap bg--graa7");
    			add_location(div72, file$8, 137, 2, 7026);
    			add_location(h37, file$8, 149, 2, 7668);
    			add_location(p11, file$8, 150, 2, 7689);
    			add_location(code3, file$8, 152, 4, 7781);
    			add_location(p12, file$8, 151, 2, 7773);
    			attr_dev(div73, "class", "flex-item bg--graa5 padding-l");
    			add_location(div73, file$8, 159, 4, 8083);
    			attr_dev(div74, "class", "flex-item bg--graa5 padding-l");
    			add_location(div74, file$8, 160, 4, 8153);
    			attr_dev(div75, "class", "flex-item flex-item--noshrink bg--graa5 padding-l");
    			add_location(div75, file$8, 161, 4, 8223);
    			attr_dev(div76, "class", "flex-item flex-item--noshrink bg--graa5 padding-l");
    			add_location(div76, file$8, 162, 4, 8316);
    			attr_dev(div77, "class", "flex-item flex-item--noshrink bg--graa5 padding-l");
    			add_location(div77, file$8, 163, 4, 8409);
    			attr_dev(div78, "class", "flex-item flex-item--noshrink bg--graa5 padding-l");
    			add_location(div78, file$8, 164, 4, 8502);
    			attr_dev(div79, "class", "flex-item flex-item--noshrink bg--graa5 padding-l");
    			add_location(div79, file$8, 165, 4, 8595);
    			attr_dev(div80, "class", "flex bg--graa7");
    			add_location(div80, file$8, 158, 2, 8050);
    			add_location(code4, file$8, 169, 4, 8704);
    			add_location(p13, file$8, 168, 2, 8696);
    			attr_dev(div81, "class", "flex-item bg--graa5 padding-l");
    			add_location(div81, file$8, 176, 4, 8990);
    			attr_dev(div82, "class", "flex-item flex-item--grow bg--graa5 padding-l");
    			add_location(div82, file$8, 177, 4, 9060);
    			attr_dev(div83, "class", "flex-item bg--graa5 padding-l");
    			add_location(div83, file$8, 178, 4, 9144);
    			attr_dev(div84, "class", "flex bg--graa7");
    			add_location(div84, file$8, 175, 2, 8957);
    			attr_dev(div85, "class", "grid-width--large");
    			add_location(div85, file$8, 4, 0, 56);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div85, anchor);
    			append_dev(div85, h1);
    			append_dev(div85, t1);
    			append_dev(div85, h30);
    			append_dev(div85, t3);
    			append_dev(div85, p0);
    			append_dev(div85, t5);
    			append_dev(div85, p1);
    			append_dev(div85, t7);
    			mount_component(prism0, div85, null);
    			append_dev(div85, t8);
    			append_dev(div85, p2);
    			append_dev(div85, t10);
    			mount_component(prism1, div85, null);
    			append_dev(div85, t11);
    			append_dev(div85, h31);
    			append_dev(div85, t13);
    			append_dev(div85, p3);
    			append_dev(p3, t14);
    			append_dev(p3, code0);
    			append_dev(p3, t16);
    			append_dev(div85, t17);
    			mount_component(prism2, div85, null);
    			append_dev(div85, t18);
    			append_dev(div85, div0);
    			append_dev(div85, t20);
    			append_dev(div85, h32);
    			append_dev(div85, t22);
    			append_dev(div85, p4);
    			append_dev(div85, t24);
    			mount_component(prism3, div85, null);
    			append_dev(div85, t25);
    			append_dev(div85, div4);
    			append_dev(div4, div1);
    			append_dev(div4, t27);
    			append_dev(div4, div2);
    			append_dev(div4, t29);
    			append_dev(div4, div3);
    			append_dev(div85, t31);
    			append_dev(div85, h33);
    			append_dev(div85, t33);
    			append_dev(div85, p5);
    			append_dev(p5, t34);
    			append_dev(p5, i0);
    			append_dev(p5, t36);
    			append_dev(div85, t37);
    			mount_component(prism4, div85, null);
    			append_dev(div85, t38);
    			append_dev(div85, div8);
    			append_dev(div8, div5);
    			append_dev(div8, t40);
    			append_dev(div8, div6);
    			append_dev(div8, t42);
    			append_dev(div8, div7);
    			append_dev(div85, t44);
    			mount_component(prism5, div85, null);
    			append_dev(div85, t45);
    			append_dev(div85, div12);
    			append_dev(div12, div9);
    			append_dev(div12, t47);
    			append_dev(div12, div10);
    			append_dev(div12, t49);
    			append_dev(div12, div11);
    			append_dev(div85, t51);
    			mount_component(prism6, div85, null);
    			append_dev(div85, t52);
    			append_dev(div85, div16);
    			append_dev(div16, div13);
    			append_dev(div16, t54);
    			append_dev(div16, div14);
    			append_dev(div16, t56);
    			append_dev(div16, div15);
    			append_dev(div85, t58);
    			mount_component(prism7, div85, null);
    			append_dev(div85, t59);
    			append_dev(div85, div20);
    			append_dev(div20, div17);
    			append_dev(div20, t61);
    			append_dev(div20, div18);
    			append_dev(div20, t63);
    			append_dev(div20, div19);
    			append_dev(div85, t65);
    			mount_component(prism8, div85, null);
    			append_dev(div85, t66);
    			append_dev(div85, div24);
    			append_dev(div24, div21);
    			append_dev(div24, t68);
    			append_dev(div24, div22);
    			append_dev(div24, t70);
    			append_dev(div24, div23);
    			append_dev(div85, t72);
    			append_dev(div85, h34);
    			append_dev(div85, t74);
    			append_dev(div85, p6);
    			append_dev(p6, t75);
    			append_dev(p6, i1);
    			append_dev(p6, t77);
    			append_dev(div85, t78);
    			append_dev(div85, p7);
    			append_dev(p7, t79);
    			append_dev(p7, code1);
    			append_dev(div85, t81);
    			mount_component(prism9, div85, null);
    			append_dev(div85, t82);
    			append_dev(div85, div28);
    			append_dev(div28, div25);
    			append_dev(div28, t84);
    			append_dev(div28, div26);
    			append_dev(div28, t86);
    			append_dev(div28, div27);
    			append_dev(div85, t88);
    			mount_component(prism10, div85, null);
    			append_dev(div85, t89);
    			append_dev(div85, div32);
    			append_dev(div32, div29);
    			append_dev(div32, t91);
    			append_dev(div32, div30);
    			append_dev(div32, t93);
    			append_dev(div32, div31);
    			append_dev(div85, t95);
    			mount_component(prism11, div85, null);
    			append_dev(div85, t96);
    			append_dev(div85, div36);
    			append_dev(div36, div33);
    			append_dev(div36, t98);
    			append_dev(div36, div34);
    			append_dev(div36, t100);
    			append_dev(div36, div35);
    			append_dev(div85, t102);
    			mount_component(prism12, div85, null);
    			append_dev(div85, t103);
    			append_dev(div85, div40);
    			append_dev(div40, div37);
    			append_dev(div40, t105);
    			append_dev(div40, div38);
    			append_dev(div40, t107);
    			append_dev(div40, div39);
    			append_dev(div85, t109);
    			append_dev(div85, h35);
    			append_dev(div85, t111);
    			append_dev(div85, p8);
    			append_dev(div85, t113);
    			mount_component(prism13, div85, null);
    			append_dev(div85, t114);
    			append_dev(div85, div44);
    			append_dev(div44, div41);
    			append_dev(div44, t116);
    			append_dev(div44, div42);
    			append_dev(div44, t118);
    			append_dev(div44, div43);
    			append_dev(div85, t120);
    			mount_component(prism14, div85, null);
    			append_dev(div85, t121);
    			append_dev(div85, div48);
    			append_dev(div48, div45);
    			append_dev(div48, t123);
    			append_dev(div48, div46);
    			append_dev(div48, t125);
    			append_dev(div48, div47);
    			append_dev(div85, t127);
    			mount_component(prism15, div85, null);
    			append_dev(div85, t128);
    			append_dev(div85, div52);
    			append_dev(div52, div49);
    			append_dev(div52, t130);
    			append_dev(div52, div50);
    			append_dev(div52, t132);
    			append_dev(div52, div51);
    			append_dev(div85, t134);
    			append_dev(div85, h36);
    			append_dev(div85, t136);
    			append_dev(div85, p9);
    			append_dev(div85, t138);
    			append_dev(div85, p10);
    			append_dev(p10, t139);
    			append_dev(p10, code2);
    			append_dev(p10, t141);
    			append_dev(div85, t142);
    			mount_component(prism16, div85, null);
    			append_dev(div85, t143);
    			append_dev(div85, div62);
    			append_dev(div62, div53);
    			append_dev(div62, t145);
    			append_dev(div62, div54);
    			append_dev(div62, t147);
    			append_dev(div62, div55);
    			append_dev(div62, t149);
    			append_dev(div62, div56);
    			append_dev(div62, t151);
    			append_dev(div62, div57);
    			append_dev(div62, t153);
    			append_dev(div62, div58);
    			append_dev(div62, t155);
    			append_dev(div62, div59);
    			append_dev(div62, t157);
    			append_dev(div62, div60);
    			append_dev(div62, t159);
    			append_dev(div62, div61);
    			append_dev(div85, t161);
    			mount_component(prism17, div85, null);
    			append_dev(div85, t162);
    			append_dev(div85, div72);
    			append_dev(div72, div63);
    			append_dev(div72, t164);
    			append_dev(div72, div64);
    			append_dev(div72, t166);
    			append_dev(div72, div65);
    			append_dev(div72, t168);
    			append_dev(div72, div66);
    			append_dev(div72, t170);
    			append_dev(div72, div67);
    			append_dev(div72, t172);
    			append_dev(div72, div68);
    			append_dev(div72, t174);
    			append_dev(div72, div69);
    			append_dev(div72, t176);
    			append_dev(div72, div70);
    			append_dev(div72, t178);
    			append_dev(div72, div71);
    			append_dev(div85, t180);
    			append_dev(div85, h37);
    			append_dev(div85, t182);
    			append_dev(div85, p11);
    			append_dev(div85, t184);
    			append_dev(div85, p12);
    			append_dev(p12, code3);
    			append_dev(p12, t186);
    			append_dev(div85, t187);
    			mount_component(prism18, div85, null);
    			append_dev(div85, t188);
    			append_dev(div85, div80);
    			append_dev(div80, div73);
    			append_dev(div80, t190);
    			append_dev(div80, div74);
    			append_dev(div80, t192);
    			append_dev(div80, div75);
    			append_dev(div80, t194);
    			append_dev(div80, div76);
    			append_dev(div80, t196);
    			append_dev(div80, div77);
    			append_dev(div80, t198);
    			append_dev(div80, div78);
    			append_dev(div80, t200);
    			append_dev(div80, div79);
    			append_dev(div85, t202);
    			append_dev(div85, p13);
    			append_dev(p13, code4);
    			append_dev(p13, t204);
    			append_dev(div85, t205);
    			mount_component(prism19, div85, null);
    			append_dev(div85, t206);
    			append_dev(div85, div84);
    			append_dev(div84, div81);
    			append_dev(div84, t208);
    			append_dev(div84, div82);
    			append_dev(div84, t210);
    			append_dev(div84, div83);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism0.$$.fragment, local);
    			transition_in(prism1.$$.fragment, local);
    			transition_in(prism2.$$.fragment, local);
    			transition_in(prism3.$$.fragment, local);
    			transition_in(prism4.$$.fragment, local);
    			transition_in(prism5.$$.fragment, local);
    			transition_in(prism6.$$.fragment, local);
    			transition_in(prism7.$$.fragment, local);
    			transition_in(prism8.$$.fragment, local);
    			transition_in(prism9.$$.fragment, local);
    			transition_in(prism10.$$.fragment, local);
    			transition_in(prism11.$$.fragment, local);
    			transition_in(prism12.$$.fragment, local);
    			transition_in(prism13.$$.fragment, local);
    			transition_in(prism14.$$.fragment, local);
    			transition_in(prism15.$$.fragment, local);
    			transition_in(prism16.$$.fragment, local);
    			transition_in(prism17.$$.fragment, local);
    			transition_in(prism18.$$.fragment, local);
    			transition_in(prism19.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism0.$$.fragment, local);
    			transition_out(prism1.$$.fragment, local);
    			transition_out(prism2.$$.fragment, local);
    			transition_out(prism3.$$.fragment, local);
    			transition_out(prism4.$$.fragment, local);
    			transition_out(prism5.$$.fragment, local);
    			transition_out(prism6.$$.fragment, local);
    			transition_out(prism7.$$.fragment, local);
    			transition_out(prism8.$$.fragment, local);
    			transition_out(prism9.$$.fragment, local);
    			transition_out(prism10.$$.fragment, local);
    			transition_out(prism11.$$.fragment, local);
    			transition_out(prism12.$$.fragment, local);
    			transition_out(prism13.$$.fragment, local);
    			transition_out(prism14.$$.fragment, local);
    			transition_out(prism15.$$.fragment, local);
    			transition_out(prism16.$$.fragment, local);
    			transition_out(prism17.$$.fragment, local);
    			transition_out(prism18.$$.fragment, local);
    			transition_out(prism19.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div85);
    			destroy_component(prism0);
    			destroy_component(prism1);
    			destroy_component(prism2);
    			destroy_component(prism3);
    			destroy_component(prism4);
    			destroy_component(prism5);
    			destroy_component(prism6);
    			destroy_component(prism7);
    			destroy_component(prism8);
    			destroy_component(prism9);
    			destroy_component(prism10);
    			destroy_component(prism11);
    			destroy_component(prism12);
    			destroy_component(prism13);
    			destroy_component(prism14);
    			destroy_component(prism15);
    			destroy_component(prism16);
    			destroy_component(prism17);
    			destroy_component(prism18);
    			destroy_component(prism19);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$8.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$8($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Flex", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Flex> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ Prism: Prism$1 });
    	return [];
    }

    class Flex extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$8, create_fragment$8, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Flex",
    			options,
    			id: create_fragment$8.name
    		});
    	}
    }

    /* docs_src/utilities/Fonts.svelte generated by Svelte v3.38.1 */
    const file$7 = "docs_src/utilities/Fonts.svelte";

    function create_fragment$7(ctx) {
    	let h1;
    	let t1;
    	let h2;
    	let t3;
    	let p0;
    	let t5;
    	let div0;
    	let t6;
    	let p1;
    	let t8;
    	let prism0;
    	let t9;
    	let p2;
    	let t11;
    	let div1;
    	let t12;
    	let p3;
    	let t14;
    	let prism1;
    	let t15;
    	let p4;
    	let t17;
    	let p5;
    	let t18;
    	let br0;
    	let t19;
    	let br1;
    	let t20;
    	let t21;
    	let div29;
    	let div4;
    	let t22;
    	let div2;
    	let t24;
    	let div3;
    	let t26;
    	let div7;
    	let t27;
    	let div5;
    	let t29;
    	let div6;
    	let t31;
    	let div10;
    	let t32;
    	let div8;
    	let t34;
    	let div9;
    	let t36;
    	let div13;
    	let t37;
    	let div11;
    	let t39;
    	let div12;
    	let t41;
    	let div16;
    	let t42;
    	let div14;
    	let t44;
    	let div15;
    	let t46;
    	let div19;
    	let t47;
    	let div17;
    	let t49;
    	let div18;
    	let t51;
    	let div22;
    	let t52;
    	let div20;
    	let t54;
    	let div21;
    	let t56;
    	let div25;
    	let t57;
    	let div23;
    	let t59;
    	let div24;
    	let t61;
    	let div28;
    	let t62;
    	let div26;
    	let t64;
    	let div27;
    	let t66;
    	let prism2;
    	let t67;
    	let p6;
    	let t69;
    	let div30;
    	let p7;
    	let t71;
    	let p8;
    	let t73;
    	let p9;
    	let t75;
    	let prism3;
    	let current;

    	prism0 = new Prism$1({
    			props: {
    				language: "html",
    				source: `
  <div class="ff-primary">
    Her er ff-primary
  </div>
`
    			},
    			$$inline: true
    		});

    	prism1 = new Prism$1({
    			props: {
    				language: "html",
    				source: `
<div class="ff-secondary">
  Her er ff-secondary
</div>
`
    			},
    			$$inline: true
    		});

    	prism2 = new Prism$1({
    			props: {
    				language: "html",
    				source: `
<div class="fontsize-xxsmall">
  fontsize-xxsmall = .625rem ~ 10px;
  <div class="fontsize-smaller">fontsize-smaller</div>
  <div class="fontsize-larger">fontsize-larger</div>
</div>
<div class="fontsize-xsmall">
  fontsize-xsmall = .75rem ~ 12px;
  <div class="fontsize-smaller">fontsize-smaller</div>
  <div class="fontsize-larger">fontsize-larger</div>
</div>
<div class="fontsize-small">
  fontsize-small = .875rem ~ 14px;
  <div class="fontsize-smaller">fontsize-smaller</div>
  <div class="fontsize-larger">fontsize-larger</div>
</div>
<div class="fontsize-medium">
  fontsize-medium = 1rem ~ 16px;
  <div class="fontsize-smaller">fontsize-smaller</div>
  <div class="fontsize-larger">fontsize-larger</div>
</div>
<div class="fontsize-large">
  fontsize-large = 1.125rem ~18px;
  <div class="fontsize-smaller">fontsize-smaller</div>
  <div class="fontsize-larger">fontsize-larger</div>
  </div>
<div class="fontsize-xlarge">
  fontsize-xlarge = 1.25rem ~20px;
  <div class="fontsize-smaller">fontsize-smaller</div>
  <div class="fontsize-larger">fontsize-larger</div>
  </div>
<div class="fontsize-xxlarge">
  fontsize-xxlarge = 1.875rem ~30px;
  <div class="fontsize-smaller">fontsize-smaller</div>
  <div class="fontsize-larger">fontsize-larger</div>
  </div>
<div class="fontsize-xxxlarge">
  fontsize-xxxlarge = 2.25rem ~36px;
  <div class="fontsize-smaller">fontsize-smaller</div>
  <div class="fontsize-larger">fontsize-larger</div>
  </div>
<div class="fontsize-xxxxlarge">
  fontsize-xxxxlarge = 3.125rem ~50px;
  <div class="fontsize-smaller">fontsize-smaller</div>
  <div class="fontsize-larger">fontsize-larger</div>
  </div>
`
    			},
    			$$inline: true
    		});

    	prism3 = new Prism$1({
    			props: {
    				language: "html",
    				source: `
<p class="fontweight-normal">fontweight-normal</p>
<p class="fontweight-bold">fontweight-bold</p>
<p class="fontweight-bolder">fontweight-bolder</p>
`
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Fonts";
    			t1 = space();
    			h2 = element("h2");
    			h2.textContent = "Font family";
    			t3 = space();
    			p0 = element("p");
    			p0.textContent = "Primary";
    			t5 = space();
    			div0 = element("div");
    			t6 = text("Her er .ff-primary\n  ");
    			p1 = element("p");
    			p1.textContent = "Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz Ææ Øø Åå 1234567890";
    			t8 = space();
    			create_component(prism0.$$.fragment);
    			t9 = space();
    			p2 = element("p");
    			p2.textContent = "Secondary";
    			t11 = space();
    			div1 = element("div");
    			t12 = text("Her er .ff-secondary\n  ");
    			p3 = element("p");
    			p3.textContent = "Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz Ææ Øø Åå 1234567890";
    			t14 = space();
    			create_component(prism1.$$.fragment);
    			t15 = space();
    			p4 = element("p");
    			p4.textContent = "Font-size";
    			t17 = space();
    			p5 = element("p");
    			t18 = text("Font-size er sat i rem for at understøtte brugerens font-size valg i browseren.\n  ");
    			br0 = element("br");
    			t19 = text("\n  rem værdien er udregnet i forhold til en basis font-size på 16px, hvilket er browser-standarden\n  ");
    			br1 = element("br");
    			t20 = text("\n  Der er både en _larger_ og en _smaller_ mulighed, der begge er relative til parent fontsize");
    			t21 = space();
    			div29 = element("div");
    			div4 = element("div");
    			t22 = text("fontsize-xxsmall = .625rem ~ 10px;\n    ");
    			div2 = element("div");
    			div2.textContent = "fontsize-smaller";
    			t24 = space();
    			div3 = element("div");
    			div3.textContent = "fontsize-larger";
    			t26 = space();
    			div7 = element("div");
    			t27 = text("fontsize-xsmall = .75rem ~ 12px;\n    ");
    			div5 = element("div");
    			div5.textContent = "fontsize-smaller";
    			t29 = space();
    			div6 = element("div");
    			div6.textContent = "fontsize-larger";
    			t31 = space();
    			div10 = element("div");
    			t32 = text("fontsize-small = .875rem ~ 14px;\n    ");
    			div8 = element("div");
    			div8.textContent = "fontsize-smaller";
    			t34 = space();
    			div9 = element("div");
    			div9.textContent = "fontsize-larger";
    			t36 = space();
    			div13 = element("div");
    			t37 = text("fontsize-medium = 1rem ~ 16px;\n    ");
    			div11 = element("div");
    			div11.textContent = "fontsize-smaller";
    			t39 = space();
    			div12 = element("div");
    			div12.textContent = "fontsize-larger";
    			t41 = space();
    			div16 = element("div");
    			t42 = text("fontsize-large = 1.125rem ~ 18px;\n    ");
    			div14 = element("div");
    			div14.textContent = "fontsize-smaller";
    			t44 = space();
    			div15 = element("div");
    			div15.textContent = "fontsize-larger";
    			t46 = space();
    			div19 = element("div");
    			t47 = text("fontsize-xlarge = 1.25rem ~ 20px;\n    ");
    			div17 = element("div");
    			div17.textContent = "fontsize-smaller";
    			t49 = space();
    			div18 = element("div");
    			div18.textContent = "fontsize-larger";
    			t51 = space();
    			div22 = element("div");
    			t52 = text("fontsize-xxlarge = 1.875rem ~ 30px;\n    ");
    			div20 = element("div");
    			div20.textContent = "fontsize-smaller";
    			t54 = space();
    			div21 = element("div");
    			div21.textContent = "fontsize-larger";
    			t56 = space();
    			div25 = element("div");
    			t57 = text("fontsize-xxxlarge = 2.25rem ~ 36px;\n    ");
    			div23 = element("div");
    			div23.textContent = "fontsize-smaller";
    			t59 = space();
    			div24 = element("div");
    			div24.textContent = "fontsize-larger";
    			t61 = space();
    			div28 = element("div");
    			t62 = text("fontsize-xxxxlarge = 3.125rem ~ 50px;\n    ");
    			div26 = element("div");
    			div26.textContent = "fontsize-smaller";
    			t64 = space();
    			div27 = element("div");
    			div27.textContent = "fontsize-larger";
    			t66 = space();
    			create_component(prism2.$$.fragment);
    			t67 = space();
    			p6 = element("p");
    			p6.textContent = "Font-weight";
    			t69 = space();
    			div30 = element("div");
    			p7 = element("p");
    			p7.textContent = "fontweight-normal";
    			t71 = space();
    			p8 = element("p");
    			p8.textContent = "fontweight-bold";
    			t73 = space();
    			p9 = element("p");
    			p9.textContent = "fontweight-bolder";
    			t75 = space();
    			create_component(prism3.$$.fragment);
    			add_location(h1, file$7, 3, 0, 63);
    			add_location(h2, file$7, 4, 0, 78);
    			add_location(p0, file$7, 6, 0, 100);
    			add_location(p1, file$7, 10, 2, 164);
    			attr_dev(div0, "class", "ff-primary");
    			add_location(div0, file$7, 8, 0, 116);
    			add_location(p2, file$7, 22, 0, 379);
    			add_location(p3, file$7, 26, 2, 449);
    			attr_dev(div1, "class", "ff-secondary");
    			add_location(div1, file$7, 24, 0, 397);
    			add_location(p4, file$7, 38, 0, 662);
    			add_location(br0, file$7, 42, 2, 768);
    			add_location(br1, file$7, 44, 2, 875);
    			add_location(p5, file$7, 40, 0, 680);
    			attr_dev(div2, "class", "fontsize-smaller");
    			add_location(div2, file$7, 51, 4, 1078);
    			attr_dev(div3, "class", "fontsize-larger");
    			add_location(div3, file$7, 52, 4, 1135);
    			attr_dev(div4, "class", "fontsize-xxsmall padding-m--tb");
    			add_location(div4, file$7, 49, 2, 990);
    			attr_dev(div5, "class", "fontsize-smaller");
    			add_location(div5, file$7, 56, 4, 1282);
    			attr_dev(div6, "class", "fontsize-larger");
    			add_location(div6, file$7, 57, 4, 1339);
    			attr_dev(div7, "class", "fontsize-xsmall padding-m--tb");
    			add_location(div7, file$7, 54, 2, 1197);
    			attr_dev(div8, "class", "fontsize-smaller");
    			add_location(div8, file$7, 61, 4, 1485);
    			attr_dev(div9, "class", "fontsize-larger");
    			add_location(div9, file$7, 62, 4, 1542);
    			attr_dev(div10, "class", "fontsize-small padding-m--tb");
    			add_location(div10, file$7, 59, 2, 1401);
    			attr_dev(div11, "class", "fontsize-smaller");
    			add_location(div11, file$7, 66, 4, 1687);
    			attr_dev(div12, "class", "fontsize-larger");
    			add_location(div12, file$7, 67, 4, 1744);
    			attr_dev(div13, "class", "fontsize-medium padding-m--tb");
    			add_location(div13, file$7, 64, 2, 1604);
    			attr_dev(div14, "class", "fontsize-smaller");
    			add_location(div14, file$7, 71, 4, 1891);
    			attr_dev(div15, "class", "fontsize-larger");
    			add_location(div15, file$7, 72, 4, 1948);
    			attr_dev(div16, "class", "fontsize-large padding-m--tb");
    			add_location(div16, file$7, 69, 2, 1806);
    			attr_dev(div17, "class", "fontsize-smaller");
    			add_location(div17, file$7, 76, 4, 2096);
    			attr_dev(div18, "class", "fontsize-larger");
    			add_location(div18, file$7, 77, 4, 2153);
    			attr_dev(div19, "class", "fontsize-xlarge padding-m--tb");
    			add_location(div19, file$7, 74, 2, 2010);
    			attr_dev(div20, "class", "fontsize-smaller");
    			add_location(div20, file$7, 81, 4, 2304);
    			attr_dev(div21, "class", "fontsize-larger");
    			add_location(div21, file$7, 82, 4, 2361);
    			attr_dev(div22, "class", "fontsize-xxlarge padding-m--tb");
    			add_location(div22, file$7, 79, 2, 2215);
    			attr_dev(div23, "class", "fontsize-smaller");
    			add_location(div23, file$7, 86, 4, 2513);
    			attr_dev(div24, "class", "fontsize-larger");
    			add_location(div24, file$7, 87, 4, 2570);
    			attr_dev(div25, "class", "fontsize-xxxlarge padding-m--tb");
    			add_location(div25, file$7, 84, 2, 2423);
    			attr_dev(div26, "class", "fontsize-smaller");
    			add_location(div26, file$7, 91, 4, 2725);
    			attr_dev(div27, "class", "fontsize-larger");
    			add_location(div27, file$7, 92, 4, 2782);
    			attr_dev(div28, "class", "fontsize-xxxxlarge padding-m--tb");
    			add_location(div28, file$7, 89, 2, 2632);
    			add_location(div29, file$7, 48, 0, 982);
    			add_location(p6, file$7, 147, 0, 4537);
    			attr_dev(p7, "class", "fontweight-normal");
    			add_location(p7, file$7, 150, 2, 4565);
    			attr_dev(p8, "class", "fontweight-bold");
    			add_location(p8, file$7, 151, 2, 4618);
    			attr_dev(p9, "class", "fontweight-bolder");
    			add_location(p9, file$7, 152, 2, 4667);
    			add_location(div30, file$7, 149, 0, 4557);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, h2, anchor);
    			insert_dev(target, t3, anchor);
    			insert_dev(target, p0, anchor);
    			insert_dev(target, t5, anchor);
    			insert_dev(target, div0, anchor);
    			append_dev(div0, t6);
    			append_dev(div0, p1);
    			insert_dev(target, t8, anchor);
    			mount_component(prism0, target, anchor);
    			insert_dev(target, t9, anchor);
    			insert_dev(target, p2, anchor);
    			insert_dev(target, t11, anchor);
    			insert_dev(target, div1, anchor);
    			append_dev(div1, t12);
    			append_dev(div1, p3);
    			insert_dev(target, t14, anchor);
    			mount_component(prism1, target, anchor);
    			insert_dev(target, t15, anchor);
    			insert_dev(target, p4, anchor);
    			insert_dev(target, t17, anchor);
    			insert_dev(target, p5, anchor);
    			append_dev(p5, t18);
    			append_dev(p5, br0);
    			append_dev(p5, t19);
    			append_dev(p5, br1);
    			append_dev(p5, t20);
    			insert_dev(target, t21, anchor);
    			insert_dev(target, div29, anchor);
    			append_dev(div29, div4);
    			append_dev(div4, t22);
    			append_dev(div4, div2);
    			append_dev(div4, t24);
    			append_dev(div4, div3);
    			append_dev(div29, t26);
    			append_dev(div29, div7);
    			append_dev(div7, t27);
    			append_dev(div7, div5);
    			append_dev(div7, t29);
    			append_dev(div7, div6);
    			append_dev(div29, t31);
    			append_dev(div29, div10);
    			append_dev(div10, t32);
    			append_dev(div10, div8);
    			append_dev(div10, t34);
    			append_dev(div10, div9);
    			append_dev(div29, t36);
    			append_dev(div29, div13);
    			append_dev(div13, t37);
    			append_dev(div13, div11);
    			append_dev(div13, t39);
    			append_dev(div13, div12);
    			append_dev(div29, t41);
    			append_dev(div29, div16);
    			append_dev(div16, t42);
    			append_dev(div16, div14);
    			append_dev(div16, t44);
    			append_dev(div16, div15);
    			append_dev(div29, t46);
    			append_dev(div29, div19);
    			append_dev(div19, t47);
    			append_dev(div19, div17);
    			append_dev(div19, t49);
    			append_dev(div19, div18);
    			append_dev(div29, t51);
    			append_dev(div29, div22);
    			append_dev(div22, t52);
    			append_dev(div22, div20);
    			append_dev(div22, t54);
    			append_dev(div22, div21);
    			append_dev(div29, t56);
    			append_dev(div29, div25);
    			append_dev(div25, t57);
    			append_dev(div25, div23);
    			append_dev(div25, t59);
    			append_dev(div25, div24);
    			append_dev(div29, t61);
    			append_dev(div29, div28);
    			append_dev(div28, t62);
    			append_dev(div28, div26);
    			append_dev(div28, t64);
    			append_dev(div28, div27);
    			insert_dev(target, t66, anchor);
    			mount_component(prism2, target, anchor);
    			insert_dev(target, t67, anchor);
    			insert_dev(target, p6, anchor);
    			insert_dev(target, t69, anchor);
    			insert_dev(target, div30, anchor);
    			append_dev(div30, p7);
    			append_dev(div30, t71);
    			append_dev(div30, p8);
    			append_dev(div30, t73);
    			append_dev(div30, p9);
    			insert_dev(target, t75, anchor);
    			mount_component(prism3, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism0.$$.fragment, local);
    			transition_in(prism1.$$.fragment, local);
    			transition_in(prism2.$$.fragment, local);
    			transition_in(prism3.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism0.$$.fragment, local);
    			transition_out(prism1.$$.fragment, local);
    			transition_out(prism2.$$.fragment, local);
    			transition_out(prism3.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(h2);
    			if (detaching) detach_dev(t3);
    			if (detaching) detach_dev(p0);
    			if (detaching) detach_dev(t5);
    			if (detaching) detach_dev(div0);
    			if (detaching) detach_dev(t8);
    			destroy_component(prism0, detaching);
    			if (detaching) detach_dev(t9);
    			if (detaching) detach_dev(p2);
    			if (detaching) detach_dev(t11);
    			if (detaching) detach_dev(div1);
    			if (detaching) detach_dev(t14);
    			destroy_component(prism1, detaching);
    			if (detaching) detach_dev(t15);
    			if (detaching) detach_dev(p4);
    			if (detaching) detach_dev(t17);
    			if (detaching) detach_dev(p5);
    			if (detaching) detach_dev(t21);
    			if (detaching) detach_dev(div29);
    			if (detaching) detach_dev(t66);
    			destroy_component(prism2, detaching);
    			if (detaching) detach_dev(t67);
    			if (detaching) detach_dev(p6);
    			if (detaching) detach_dev(t69);
    			if (detaching) detach_dev(div30);
    			if (detaching) detach_dev(t75);
    			destroy_component(prism3, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$7.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$7($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Fonts", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Fonts> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ Prism: Prism$1 });
    	return [];
    }

    class Fonts extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$7, create_fragment$7, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Fonts",
    			options,
    			id: create_fragment$7.name
    		});
    	}
    }

    /* docs_src/utilities/Grid.svelte generated by Svelte v3.38.1 */
    const file$6 = "docs_src/utilities/Grid.svelte";

    function create_fragment$6(ctx) {
    	let h1;
    	let t1;
    	let div3;
    	let p0;
    	let t3;
    	let p1;
    	let t5;
    	let div2;
    	let p2;
    	let t7;
    	let p3;
    	let t9;
    	let div1;
    	let p4;
    	let t11;
    	let p5;
    	let t13;
    	let div0;
    	let p6;
    	let t15;
    	let p7;
    	let t17;
    	let prism0;
    	let t18;
    	let prism1;
    	let current;

    	prism0 = new Prism$1({
    			props: {
    				language: "html",
    				source: `
<div class="grid-width--small">Small grid</div>
<div class="grid-width--medium">Medium grid</div>
<div class="grid-width--large">Large grid</div>
<div class="grid-width--xlarge">Xlarge grid</div>
`
    			},
    			$$inline: true
    		});

    	prism1 = new Prism$1({
    			props: {
    				language: "css",
    				source: `
--grid-small: 610px;
--grid-medium: 730px;
--grid-large: 910px;
--grid-xlarge: 930px;
`
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Grid";
    			t1 = space();
    			div3 = element("div");
    			p0 = element("p");
    			p0.textContent = "grid-width--xlarge: 930px";
    			t3 = space();
    			p1 = element("p");
    			p1.textContent = "Page content width - frontpage";
    			t5 = space();
    			div2 = element("div");
    			p2 = element("p");
    			p2.textContent = "grid-width--large: 910px";
    			t7 = space();
    			p3 = element("p");
    			p3.textContent = "Page content width";
    			t9 = space();
    			div1 = element("div");
    			p4 = element("p");
    			p4.textContent = "grid-width--medium: 730px";
    			t11 = space();
    			p5 = element("p");
    			p5.textContent = "Bodytext container width";
    			t13 = space();
    			div0 = element("div");
    			p6 = element("p");
    			p6.textContent = "grid-width--small: 610px";
    			t15 = space();
    			p7 = element("p");
    			p7.textContent = "Widget width";
    			t17 = text("\n\n### Brugseksempler\n\n");
    			create_component(prism0.$$.fragment);
    			t18 = text("\n\n### CSS variable names\n\n");
    			create_component(prism1.$$.fragment);
    			add_location(h1, file$6, 3, 0, 63);
    			add_location(p0, file$6, 6, 2, 167);
    			add_location(p1, file$6, 7, 2, 202);
    			add_location(p2, file$6, 9, 4, 329);
    			add_location(p3, file$6, 10, 4, 365);
    			add_location(p4, file$6, 12, 6, 485);
    			add_location(p5, file$6, 13, 6, 524);
    			add_location(p6, file$6, 15, 8, 653);
    			add_location(p7, file$6, 16, 8, 693);
    			attr_dev(div0, "class", "grid-width--small vertical-center bg--graa5");
    			set_style(div0, "overflow", "hidden");
    			add_location(div0, file$6, 14, 6, 562);
    			attr_dev(div1, "class", "grid-width--medium vertical-center bg--graa4");
    			set_style(div1, "overflow", "hidden");
    			add_location(div1, file$6, 11, 4, 395);
    			attr_dev(div2, "class", "grid-width--large vertical-center bg--graa3");
    			set_style(div2, "overflow", "hidden");
    			add_location(div2, file$6, 8, 2, 242);
    			attr_dev(div3, "class", "grid-width--xlarge text-align--center bg--graa1");
    			set_style(div3, "overflow", "hidden");
    			add_location(div3, file$6, 5, 0, 78);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div3, anchor);
    			append_dev(div3, p0);
    			append_dev(div3, t3);
    			append_dev(div3, p1);
    			append_dev(div3, t5);
    			append_dev(div3, div2);
    			append_dev(div2, p2);
    			append_dev(div2, t7);
    			append_dev(div2, p3);
    			append_dev(div2, t9);
    			append_dev(div2, div1);
    			append_dev(div1, p4);
    			append_dev(div1, t11);
    			append_dev(div1, p5);
    			append_dev(div1, t13);
    			append_dev(div1, div0);
    			append_dev(div0, p6);
    			append_dev(div0, t15);
    			append_dev(div0, p7);
    			insert_dev(target, t17, anchor);
    			mount_component(prism0, target, anchor);
    			insert_dev(target, t18, anchor);
    			mount_component(prism1, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism0.$$.fragment, local);
    			transition_in(prism1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism0.$$.fragment, local);
    			transition_out(prism1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div3);
    			if (detaching) detach_dev(t17);
    			destroy_component(prism0, detaching);
    			if (detaching) detach_dev(t18);
    			destroy_component(prism1, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$6.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$6($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Grid", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Grid> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ Prism: Prism$1 });
    	return [];
    }

    class Grid extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$6, create_fragment$6, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Grid",
    			options,
    			id: create_fragment$6.name
    		});
    	}
    }

    /* docs_src/utilities/Helpers.svelte generated by Svelte v3.38.1 */
    const file$5 = "docs_src/utilities/Helpers.svelte";

    function create_fragment$5(ctx) {
    	let h1;
    	let t1;
    	let prism0;
    	let t2;
    	let prism1;
    	let t3;
    	let prism2;
    	let t4;
    	let prism3;
    	let t5;
    	let div2;
    	let div0;
    	let t7;
    	let div1;
    	let t9;
    	let prism4;
    	let t10;
    	let prism5;
    	let t11;
    	let prism6;
    	let t12;
    	let prism7;
    	let t13;
    	let prism8;
    	let t14;
    	let prism9;
    	let t15;
    	let prism10;
    	let current;

    	prism0 = new Prism$1({
    			props: {
    				language: "html",
    				source: `
<div class="hidden"></div>
`
    			},
    			$$inline: true
    		});

    	prism1 = new Prism$1({
    			props: {
    				language: "html",
    				source: `
<div class="position-absolute"></div>
<div class="position-fixed"></div>
<div class="position-relative"></div>
`
    			},
    			$$inline: true
    		});

    	prism2 = new Prism$1({
    			props: {
    				language: "html",
    				source: `
<div class="float-left"></div>
<div class="float-right"></div>
`
    			},
    			$$inline: true
    		});

    	prism3 = new Prism$1({
    			props: {
    				language: "html",
    				source: `
<div class="clear"></div>
`
    			},
    			$$inline: true
    		});

    	prism4 = new Prism$1({
    			props: {
    				language: "html",
    				source: `
<div class="text-align--center bg--graa1">
  <div class="width-1of3 text-align--left bg--graa3">Jeg er ikke centreret</div>
  <div class="width-1of3 vertical-center text-align--left bg--graa3">Jeg er centreret</div>
</div>
`
    			},
    			$$inline: true
    		});

    	prism5 = new Prism$1({
    			props: {
    				language: "html",
    				source: `
<div class="margin-none padding-none"></div>
<div class="margin-s padding-s"></div>
<div class="margin-m padding-m"></div>
<div class="margin-l padding-l"></div>
<div class="margin-xl padding-xl"></div>
<div class="margin-none padding-xxl"></div>
`
    			},
    			$$inline: true
    		});

    	prism6 = new Prism$1({
    			props: {
    				language: "html",
    				source: `
<div class="margin-l--t padding-l--t"></div>
<div class="margin-l--r padding-l--r"></div>
<div class="margin-l--b padding-l--b"></div>
<div class="margin-l--l padding-l--l"></div>
`
    			},
    			$$inline: true
    		});

    	prism7 = new Prism$1({
    			props: {
    				language: "html",
    				source: `
<div class="margin-l--tb padding-l--tb"></div>
<div class="margin-l--rl padding-l--rl"></div>
`
    			},
    			$$inline: true
    		});

    	prism8 = new Prism$1({
    			props: {
    				language: "html",
    				source: `
<div class="border-radius-s"></div>
<div class="border-radius"></div>
`
    			},
    			$$inline: true
    		});

    	prism9 = new Prism$1({
    			props: {
    				language: "html",
    				source: `
<div class="border-radius-s--t"></div>
<div class="border-radius--t"></div>
`
    			},
    			$$inline: true
    		});

    	prism10 = new Prism$1({
    			props: {
    				language: "html",
    				source: `
<div class="border-radius-s--b"></div>
<div class="border-radius--b"></div>
`
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Helpers";
    			t1 = text("\n\n## Hidden Skjul element.\n\n");
    			create_component(prism0.$$.fragment);
    			t2 = text("\n\n## Position Findes som absolute, fixed og relative\n\n");
    			create_component(prism1.$$.fragment);
    			t3 = text("\n\n## Floats Findes som left og right\n\n");
    			create_component(prism2.$$.fragment);
    			t4 = text("\n\n## Clear\n\n");
    			create_component(prism3.$$.fragment);
    			t5 = text("\n\n## Centrér vertikalt Centrér element vertikal i sin container. Kræver at containeren har text-align--center\n\n");
    			div2 = element("div");
    			div0 = element("div");
    			div0.textContent = "Jeg er ikke centreret";
    			t7 = space();
    			div1 = element("div");
    			div1.textContent = "Jeg er centreret";
    			t9 = space();
    			create_component(prism4.$$.fragment);
    			t10 = text("\n\n## Margin + padding - boxmodel illustration For både **margin** og **padding** klassen har vi fem størrelser *(s, m, l,\nxl og xxl)* og så *none* som sættes på med bindesteg.\n\n");
    			create_component(prism5.$$.fragment);
    			t11 = text("\n\nOverstående vil give henholdsvis **margin** og **padding** hele vejen rundt. Ønskes der derimod kun at have **margin**\nog **padding** i en retning tilføjes dette med double bindestreg.\n\n");
    			create_component(prism6.$$.fragment);
    			t12 = text("\n\nVi har også to samle klasser for *top-bottom* og *right-left*.\n\n");
    			create_component(prism7.$$.fragment);
    			t13 = text("\n\n## Border-radius Alle border-radius\n\n");
    			create_component(prism8.$$.fragment);
    			t14 = text("\n\nTop border-radius\n\n");
    			create_component(prism9.$$.fragment);
    			t15 = text("\n\nBottom border-radius\n\n");
    			create_component(prism10.$$.fragment);
    			add_location(h1, file$5, 4, 0, 56);
    			attr_dev(div0, "class", "width-1of3 text-align--left bg--graa3");
    			add_location(div0, file$5, 48, 2, 755);
    			attr_dev(div1, "class", "width-1of3 vertical-center text-align--left bg--graa3");
    			add_location(div1, file$5, 49, 2, 836);
    			attr_dev(div2, "class", "text-align--center bg--graa1");
    			add_location(div2, file$5, 47, 0, 710);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(prism0, target, anchor);
    			insert_dev(target, t2, anchor);
    			mount_component(prism1, target, anchor);
    			insert_dev(target, t3, anchor);
    			mount_component(prism2, target, anchor);
    			insert_dev(target, t4, anchor);
    			mount_component(prism3, target, anchor);
    			insert_dev(target, t5, anchor);
    			insert_dev(target, div2, anchor);
    			append_dev(div2, div0);
    			append_dev(div2, t7);
    			append_dev(div2, div1);
    			insert_dev(target, t9, anchor);
    			mount_component(prism4, target, anchor);
    			insert_dev(target, t10, anchor);
    			mount_component(prism5, target, anchor);
    			insert_dev(target, t11, anchor);
    			mount_component(prism6, target, anchor);
    			insert_dev(target, t12, anchor);
    			mount_component(prism7, target, anchor);
    			insert_dev(target, t13, anchor);
    			mount_component(prism8, target, anchor);
    			insert_dev(target, t14, anchor);
    			mount_component(prism9, target, anchor);
    			insert_dev(target, t15, anchor);
    			mount_component(prism10, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism0.$$.fragment, local);
    			transition_in(prism1.$$.fragment, local);
    			transition_in(prism2.$$.fragment, local);
    			transition_in(prism3.$$.fragment, local);
    			transition_in(prism4.$$.fragment, local);
    			transition_in(prism5.$$.fragment, local);
    			transition_in(prism6.$$.fragment, local);
    			transition_in(prism7.$$.fragment, local);
    			transition_in(prism8.$$.fragment, local);
    			transition_in(prism9.$$.fragment, local);
    			transition_in(prism10.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism0.$$.fragment, local);
    			transition_out(prism1.$$.fragment, local);
    			transition_out(prism2.$$.fragment, local);
    			transition_out(prism3.$$.fragment, local);
    			transition_out(prism4.$$.fragment, local);
    			transition_out(prism5.$$.fragment, local);
    			transition_out(prism6.$$.fragment, local);
    			transition_out(prism7.$$.fragment, local);
    			transition_out(prism8.$$.fragment, local);
    			transition_out(prism9.$$.fragment, local);
    			transition_out(prism10.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			destroy_component(prism0, detaching);
    			if (detaching) detach_dev(t2);
    			destroy_component(prism1, detaching);
    			if (detaching) detach_dev(t3);
    			destroy_component(prism2, detaching);
    			if (detaching) detach_dev(t4);
    			destroy_component(prism3, detaching);
    			if (detaching) detach_dev(t5);
    			if (detaching) detach_dev(div2);
    			if (detaching) detach_dev(t9);
    			destroy_component(prism4, detaching);
    			if (detaching) detach_dev(t10);
    			destroy_component(prism5, detaching);
    			if (detaching) detach_dev(t11);
    			destroy_component(prism6, detaching);
    			if (detaching) detach_dev(t12);
    			destroy_component(prism7, detaching);
    			if (detaching) detach_dev(t13);
    			destroy_component(prism8, detaching);
    			if (detaching) detach_dev(t14);
    			destroy_component(prism9, detaching);
    			if (detaching) detach_dev(t15);
    			destroy_component(prism10, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$5.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$5($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Helpers", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Helpers> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ Prism: Prism$1 });
    	return [];
    }

    class Helpers extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$5, create_fragment$5, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Helpers",
    			options,
    			id: create_fragment$5.name
    		});
    	}
    }

    /* docs_src/utilities/Sizing.svelte generated by Svelte v3.38.1 */
    const file$4 = "docs_src/utilities/Sizing.svelte";

    function create_fragment$4(ctx) {
    	let div10;
    	let h1;
    	let t1;
    	let h30;
    	let t3;
    	let ul0;
    	let li0;
    	let t5;
    	let li1;
    	let t7;
    	let li2;
    	let t9;
    	let li3;
    	let t11;
    	let li4;
    	let t13;
    	let li5;
    	let t15;
    	let li6;
    	let t17;
    	let li7;
    	let t19;
    	let li8;
    	let t21;
    	let li9;
    	let t23;
    	let li10;
    	let t25;
    	let p;
    	let t27;
    	let div9;
    	let div0;
    	let t28;
    	let div1;
    	let t29;
    	let div2;
    	let t30;
    	let div3;
    	let t31;
    	let div4;
    	let t32;
    	let div5;
    	let t33;
    	let div6;
    	let t34;
    	let div7;
    	let t35;
    	let div8;
    	let t36;
    	let prism;
    	let t37;
    	let h31;
    	let t39;
    	let ul1;
    	let li11;
    	let t41;
    	let li12;
    	let t43;
    	let li13;
    	let t45;
    	let current;

    	prism = new Prism$1({
    			props: {
    				language: "html",
    				source: `
  <div class="bg--graa5 padding-l">
    <div class="bg--white margin-l--b padding-l width-1of1" />
    <div class="bg--white margin-l--tb padding-l width-1of2" />
    <div class="bg--white margin-l--tb padding-l width-1of3" />
    <div class="bg--white margin-l--tb padding-l width-1of4" />
    <div class="bg--white margin-l--tb padding-l width-1of5" />
    <div class="bg--white margin-l--tb padding-l width-1of6" />
    <div class="bg--white margin-l--tb padding-l width-2of3" />
    <div class="bg--white margin-l--tb padding-l width-3of4" />
    <div class="bg--white margin-l--t padding-l width-5of6" />
  </div>
`
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div10 = element("div");
    			h1 = element("h1");
    			h1.textContent = "Sizing";
    			t1 = space();
    			h30 = element("h3");
    			h30.textContent = "Bredder";
    			t3 = space();
    			ul0 = element("ul");
    			li0 = element("li");
    			li0.textContent = "width-auto";
    			t5 = space();
    			li1 = element("li");
    			li1.textContent = "width-100vw";
    			t7 = space();
    			li2 = element("li");
    			li2.textContent = "width-1of1";
    			t9 = space();
    			li3 = element("li");
    			li3.textContent = "width-1of2";
    			t11 = space();
    			li4 = element("li");
    			li4.textContent = "width-1of3";
    			t13 = space();
    			li5 = element("li");
    			li5.textContent = "width-1of4";
    			t15 = space();
    			li6 = element("li");
    			li6.textContent = "width-1of5";
    			t17 = space();
    			li7 = element("li");
    			li7.textContent = "width-1of6";
    			t19 = space();
    			li8 = element("li");
    			li8.textContent = "width-2of3";
    			t21 = space();
    			li9 = element("li");
    			li9.textContent = "width-3of4";
    			t23 = space();
    			li10 = element("li");
    			li10.textContent = "width-5of6";
    			t25 = space();
    			p = element("p");
    			p.textContent = "Bredde i brøkdele";
    			t27 = space();
    			div9 = element("div");
    			div0 = element("div");
    			t28 = space();
    			div1 = element("div");
    			t29 = space();
    			div2 = element("div");
    			t30 = space();
    			div3 = element("div");
    			t31 = space();
    			div4 = element("div");
    			t32 = space();
    			div5 = element("div");
    			t33 = space();
    			div6 = element("div");
    			t34 = space();
    			div7 = element("div");
    			t35 = space();
    			div8 = element("div");
    			t36 = space();
    			create_component(prism.$$.fragment);
    			t37 = space();
    			h31 = element("h3");
    			h31.textContent = "Højder";
    			t39 = space();
    			ul1 = element("ul");
    			li11 = element("li");
    			li11.textContent = "height-auto";
    			t41 = space();
    			li12 = element("li");
    			li12.textContent = "height-1of1";
    			t43 = space();
    			li13 = element("li");
    			li13.textContent = "height-100vh *";
    			t45 = text("\n\n  * Viewport height - Vær opmærksom på at disse opfører sig meget forskelligt på forskellige devices html");
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$4, 5, 2, 90);
    			add_location(h30, file$4, 7, 2, 127);
    			add_location(li0, file$4, 10, 4, 156);
    			add_location(li1, file$4, 11, 4, 180);
    			add_location(li2, file$4, 12, 4, 205);
    			add_location(li3, file$4, 13, 4, 229);
    			add_location(li4, file$4, 14, 4, 253);
    			add_location(li5, file$4, 15, 4, 277);
    			add_location(li6, file$4, 16, 4, 301);
    			add_location(li7, file$4, 17, 4, 325);
    			add_location(li8, file$4, 18, 4, 349);
    			add_location(li9, file$4, 19, 4, 373);
    			add_location(li10, file$4, 20, 4, 397);
    			add_location(ul0, file$4, 9, 2, 147);
    			add_location(p, file$4, 23, 2, 428);
    			attr_dev(div0, "class", "bg--white margin-l--b padding-l width-1of1");
    			add_location(div0, file$4, 26, 4, 494);
    			attr_dev(div1, "class", "bg--white margin-l--tb padding-l width-1of2");
    			add_location(div1, file$4, 27, 4, 557);
    			attr_dev(div2, "class", "bg--white margin-l--tb padding-l width-1of3");
    			add_location(div2, file$4, 28, 4, 621);
    			attr_dev(div3, "class", "bg--white margin-l--tb padding-l width-1of4");
    			add_location(div3, file$4, 29, 4, 685);
    			attr_dev(div4, "class", "bg--white margin-l--tb padding-l width-1of5");
    			add_location(div4, file$4, 30, 4, 749);
    			attr_dev(div5, "class", "bg--white margin-l--tb padding-l width-1of6");
    			add_location(div5, file$4, 31, 4, 813);
    			attr_dev(div6, "class", "bg--white margin-l--tb padding-l width-2of3");
    			add_location(div6, file$4, 32, 4, 877);
    			attr_dev(div7, "class", "bg--white margin-l--tb padding-l width-3of4");
    			add_location(div7, file$4, 33, 4, 941);
    			attr_dev(div8, "class", "bg--white margin-l--t padding-l width-5of6");
    			add_location(div8, file$4, 34, 4, 1005);
    			attr_dev(div9, "class", "bg--graa5 padding-l");
    			add_location(div9, file$4, 25, 2, 456);
    			add_location(h31, file$4, 54, 2, 1747);
    			add_location(li11, file$4, 57, 4, 1775);
    			add_location(li12, file$4, 58, 4, 1800);
    			add_location(li13, file$4, 59, 4, 1825);
    			add_location(ul1, file$4, 56, 2, 1766);
    			attr_dev(div10, "class", "grid-width--large");
    			add_location(div10, file$4, 4, 0, 56);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div10, anchor);
    			append_dev(div10, h1);
    			append_dev(div10, t1);
    			append_dev(div10, h30);
    			append_dev(div10, t3);
    			append_dev(div10, ul0);
    			append_dev(ul0, li0);
    			append_dev(ul0, t5);
    			append_dev(ul0, li1);
    			append_dev(ul0, t7);
    			append_dev(ul0, li2);
    			append_dev(ul0, t9);
    			append_dev(ul0, li3);
    			append_dev(ul0, t11);
    			append_dev(ul0, li4);
    			append_dev(ul0, t13);
    			append_dev(ul0, li5);
    			append_dev(ul0, t15);
    			append_dev(ul0, li6);
    			append_dev(ul0, t17);
    			append_dev(ul0, li7);
    			append_dev(ul0, t19);
    			append_dev(ul0, li8);
    			append_dev(ul0, t21);
    			append_dev(ul0, li9);
    			append_dev(ul0, t23);
    			append_dev(ul0, li10);
    			append_dev(div10, t25);
    			append_dev(div10, p);
    			append_dev(div10, t27);
    			append_dev(div10, div9);
    			append_dev(div9, div0);
    			append_dev(div9, t28);
    			append_dev(div9, div1);
    			append_dev(div9, t29);
    			append_dev(div9, div2);
    			append_dev(div9, t30);
    			append_dev(div9, div3);
    			append_dev(div9, t31);
    			append_dev(div9, div4);
    			append_dev(div9, t32);
    			append_dev(div9, div5);
    			append_dev(div9, t33);
    			append_dev(div9, div6);
    			append_dev(div9, t34);
    			append_dev(div9, div7);
    			append_dev(div9, t35);
    			append_dev(div9, div8);
    			append_dev(div10, t36);
    			mount_component(prism, div10, null);
    			append_dev(div10, t37);
    			append_dev(div10, h31);
    			append_dev(div10, t39);
    			append_dev(div10, ul1);
    			append_dev(ul1, li11);
    			append_dev(ul1, t41);
    			append_dev(ul1, li12);
    			append_dev(ul1, t43);
    			append_dev(ul1, li13);
    			append_dev(div10, t45);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div10);
    			destroy_component(prism);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$4.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$4($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Sizing", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Sizing> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ Prism: Prism$1 });
    	return [];
    }

    class Sizing extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$4, create_fragment$4, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Sizing",
    			options,
    			id: create_fragment$4.name
    		});
    	}
    }

    /* docs_src/utilities/Text.svelte generated by Svelte v3.38.1 */
    const file$3 = "docs_src/utilities/Text.svelte";

    function create_fragment$3(ctx) {
    	let h1;
    	let t1;
    	let div;
    	let p0;
    	let t3;
    	let p1;
    	let t5;
    	let p2;
    	let t7;
    	let prism0;
    	let t8;
    	let prism1;
    	let current;

    	prism0 = new Prism$1({
    			props: {
    				language: "html",
    				source: `
<p class="text-align--center">Centreret tekst</p>
<p class="text-align--left">Venstrestillet tekst</p>
<p class="text-align--right">Højrestillet tekst</p>
`
    			},
    			$$inline: true
    		});

    	prism1 = new Prism$1({
    			props: {
    				language: "html",
    				source: `
<p class="text-transform--lowercase">små bogstaver</p>
<p class="text-transform--uppercase">STORE BOGSTAVER</p>
`
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Text";
    			t1 = text("\n\n## Text alignment Findes som center, left og right\n\n");
    			div = element("div");
    			p0 = element("p");
    			p0.textContent = "Centreret tekst";
    			t3 = space();
    			p1 = element("p");
    			p1.textContent = "Venstrestillet tekst";
    			t5 = space();
    			p2 = element("p");
    			p2.textContent = "Højrestillet tekst";
    			t7 = space();
    			create_component(prism0.$$.fragment);
    			t8 = text("\n\n## Text transform Findes som lowercase og uppercase\n\n");
    			create_component(prism1.$$.fragment);
    			add_location(h1, file$3, 4, 0, 56);
    			attr_dev(p0, "class", "text-align--center");
    			add_location(p0, file$3, 9, 2, 152);
    			attr_dev(p1, "class", "text-align--left");
    			add_location(p1, file$3, 10, 2, 204);
    			attr_dev(p2, "class", "text-align--right");
    			add_location(p2, file$3, 11, 2, 259);
    			attr_dev(div, "class", "margin-l--tb");
    			add_location(div, file$3, 8, 0, 123);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div, anchor);
    			append_dev(div, p0);
    			append_dev(div, t3);
    			append_dev(div, p1);
    			append_dev(div, t5);
    			append_dev(div, p2);
    			insert_dev(target, t7, anchor);
    			mount_component(prism0, target, anchor);
    			insert_dev(target, t8, anchor);
    			mount_component(prism1, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism0.$$.fragment, local);
    			transition_in(prism1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism0.$$.fragment, local);
    			transition_out(prism1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(h1);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div);
    			if (detaching) detach_dev(t7);
    			destroy_component(prism0, detaching);
    			if (detaching) detach_dev(t8);
    			destroy_component(prism1, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$3.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$3($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Text", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Text> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ Prism: Prism$1 });
    	return [];
    }

    class Text extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Text",
    			options,
    			id: create_fragment$3.name
    		});
    	}
    }

    const routes = [
        { link: '/', title: 'Overblik', component: Home },
        { link: '/components/accordion', title: 'Accordion', type: 'component', component: Accordion_1 },
        { link: '/components/articlecard', title: 'Article card', type: 'component', component: ArticleCard_1 },
        { link: '/components/badge', title: 'Badge', type: 'component', component: Badge_1 },
        { link: '/components/button', title: 'Button', type: 'component', component: Button_1 },
        { link: '/components/buttongroup', title: 'Button group', type: 'component', component: ButtonGroup_1 },
        { link: '/components/card', title: 'Card', type: 'component', component: Card_1 },
        { link: '/components/form-elements', title: 'Form elements', type: 'component', component: FormElement_1 },
        { link: '/components/icon', title: 'Icon', type: 'component', component: Icon_1 },
        { link: '/components/horizontalscroll', title: 'Horizontal scroll', type: 'component', component: HorizontalScroll_1 },
        { link: '/components/pillnavigation', title: 'Pill navigation', type: 'component', component: PillNavigation_1 },
        { link: '/components/spinner', title: 'Spinner', type: 'component', component: Spinner_1 },
        { link: '/components/toggler', title: 'Toggler', type: 'component', component: Toggler_1 },
        { link: '/components/tooltip', title: 'Tooltip', type: 'component', component: Tooltip_1 },
        { link: '/utilities/animation', title: 'Animation', type: 'utility', component: Animation },
        { link: '/utilities/datatheme', title: 'Data theme', type: 'utility', component: DataTheme },
        { link: '/utilities/flex', title: 'Flex', type: 'utility', component: Flex },
        { link: '/utilities/fonts', title: 'Fonts', type: 'utility', component: Fonts },
        { link: '/utilities/grid', title: 'Grid', type: 'utility', component: Grid },
        { link: '/utilities/helpers', title: 'Helpers', type: 'utility', component: Helpers },
        { link: '/utilities/sizing', title: 'Sizing', type: 'utility', component: Sizing },
        { link: '/utilities/text', title: 'Text', type: 'utility', component: Text },
    ];

    /* docs_src/routes/Sidebar.svelte generated by Svelte v3.38.1 */
    const file$2 = "docs_src/routes/Sidebar.svelte";

    function get_each_context(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[5] = list[i];
    	return child_ctx;
    }

    function get_each_context_1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[5] = list[i];
    	return child_ctx;
    }

    function get_each_context_2(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[5] = list[i];
    	return child_ctx;
    }

    // (42:2) {#each menuItems as menuItem}
    function create_each_block_2(ctx) {
    	let div;
    	let a;
    	let t_value = /*menuItem*/ ctx[5].title + "";
    	let t;
    	let a_class_value;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			div = element("div");
    			a = element("a");
    			t = text(t_value);

    			attr_dev(a, "class", a_class_value = "sidebar-item " + `${/*menuItem*/ ctx[5].link === /*url*/ ctx[0]
			? "active-item"
			: ""}` + " width-1of1 padding-m--t fontsize-large" + " svelte-av0po4");

    			attr_dev(a, "href", /*menuItem*/ ctx[5].link);
    			add_location(a, file$2, 43, 6, 1474);
    			attr_dev(div, "class", "sidebar-menuitem-container padding-l svelte-av0po4");
    			add_location(div, file$2, 42, 4, 1417);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, a);
    			append_dev(a, t);

    			if (!mounted) {
    				dispose = action_destroyer(link.call(null, a));
    				mounted = true;
    			}
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*url*/ 1 && a_class_value !== (a_class_value = "sidebar-item " + `${/*menuItem*/ ctx[5].link === /*url*/ ctx[0]
			? "active-item"
			: ""}` + " width-1of1 padding-m--t fontsize-large" + " svelte-av0po4")) {
    				attr_dev(a, "class", a_class_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_2.name,
    		type: "each",
    		source: "(42:2) {#each menuItems as menuItem}",
    		ctx
    	});

    	return block;
    }

    // (56:6) {#each componentMenuItems as menuItem}
    function create_each_block_1(ctx) {
    	let a;
    	let t0_value = /*menuItem*/ ctx[5].title + "";
    	let t0;
    	let t1;
    	let a_class_value;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			a = element("a");
    			t0 = text(t0_value);
    			t1 = space();

    			attr_dev(a, "class", a_class_value = "sidebar-item " + `${/*menuItem*/ ctx[5].link === /*url*/ ctx[0]
			? "active-item"
			: ""}` + " width-1of1 padding-m--t padding-m--rl" + " svelte-av0po4");

    			attr_dev(a, "href", /*menuItem*/ ctx[5].link);
    			add_location(a, file$2, 56, 8, 1923);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, a, anchor);
    			append_dev(a, t0);
    			append_dev(a, t1);

    			if (!mounted) {
    				dispose = action_destroyer(link.call(null, a));
    				mounted = true;
    			}
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*url*/ 1 && a_class_value !== (a_class_value = "sidebar-item " + `${/*menuItem*/ ctx[5].link === /*url*/ ctx[0]
			? "active-item"
			: ""}` + " width-1of1 padding-m--t padding-m--rl" + " svelte-av0po4")) {
    				attr_dev(a, "class", a_class_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(a);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_1.name,
    		type: "each",
    		source: "(56:6) {#each componentMenuItems as menuItem}",
    		ctx
    	});

    	return block;
    }

    // (70:6) {#each utilityMenuItems as menuItem}
    function create_each_block(ctx) {
    	let a;
    	let t0_value = /*menuItem*/ ctx[5].title + "";
    	let t0;
    	let t1;
    	let a_class_value;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			a = element("a");
    			t0 = text(t0_value);
    			t1 = space();

    			attr_dev(a, "class", a_class_value = "sidebar-item " + `${/*menuItem*/ ctx[5].link === /*url*/ ctx[0]
			? "active-item"
			: ""}` + " width-1of1 padding-m--t padding-m--rl" + " svelte-av0po4");

    			attr_dev(a, "href", /*menuItem*/ ctx[5].link);
    			add_location(a, file$2, 70, 8, 2393);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, a, anchor);
    			append_dev(a, t0);
    			append_dev(a, t1);

    			if (!mounted) {
    				dispose = action_destroyer(link.call(null, a));
    				mounted = true;
    			}
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*url*/ 1 && a_class_value !== (a_class_value = "sidebar-item " + `${/*menuItem*/ ctx[5].link === /*url*/ ctx[0]
			? "active-item"
			: ""}` + " width-1of1 padding-m--t padding-m--rl" + " svelte-av0po4")) {
    				attr_dev(a, "class", a_class_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(a);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block.name,
    		type: "each",
    		source: "(70:6) {#each utilityMenuItems as menuItem}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$2(ctx) {
    	let div9;
    	let div2;
    	let div0;
    	let a;
    	let img;
    	let img_src_value;
    	let t0;
    	let div1;
    	let p;
    	let t2;
    	let t3;
    	let div5;
    	let div3;
    	let t5;
    	let div4;
    	let t6;
    	let div8;
    	let div6;
    	let t8;
    	let div7;
    	let each_value_2 = /*menuItems*/ ctx[1];
    	validate_each_argument(each_value_2);
    	let each_blocks_2 = [];

    	for (let i = 0; i < each_value_2.length; i += 1) {
    		each_blocks_2[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
    	}

    	let each_value_1 = /*componentMenuItems*/ ctx[2];
    	validate_each_argument(each_value_1);
    	let each_blocks_1 = [];

    	for (let i = 0; i < each_value_1.length; i += 1) {
    		each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
    	}

    	let each_value = /*utilityMenuItems*/ ctx[3];
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    	}

    	const block = {
    		c: function create() {
    			div9 = element("div");
    			div2 = element("div");
    			div0 = element("div");
    			a = element("a");
    			img = element("img");
    			t0 = space();
    			div1 = element("div");
    			p = element("p");
    			p.textContent = "Design system";
    			t2 = space();

    			for (let i = 0; i < each_blocks_2.length; i += 1) {
    				each_blocks_2[i].c();
    			}

    			t3 = space();
    			div5 = element("div");
    			div3 = element("div");
    			div3.textContent = "Components";
    			t5 = space();
    			div4 = element("div");

    			for (let i = 0; i < each_blocks_1.length; i += 1) {
    				each_blocks_1[i].c();
    			}

    			t6 = space();
    			div8 = element("div");
    			div6 = element("div");
    			div6.textContent = "Utilities";
    			t8 = space();
    			div7 = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(img, "alt", "");
    			if (img.src !== (img_src_value = "ekstrabladet.svg")) attr_dev(img, "src", img_src_value);
    			set_style(img, "height", "70px");
    			add_location(img, file$2, 34, 8, 1148);
    			attr_dev(a, "href", "#/");
    			attr_dev(a, "class", "svelte-av0po4");
    			add_location(a, file$2, 33, 6, 1126);
    			add_location(div0, file$2, 32, 4, 1114);
    			attr_dev(p, "class", "flex--grow width-1of1 color--graa1 fontweight-bold");
    			add_location(p, file$2, 38, 6, 1281);
    			attr_dev(div1, "class", "flex-item flex-item--center");
    			add_location(div1, file$2, 37, 4, 1233);
    			attr_dev(div2, "class", "flex flex-justify--around sidebar-logo-container padding-m--rl svelte-av0po4");
    			add_location(div2, file$2, 31, 2, 1033);
    			attr_dev(div3, "class", "sidebar-submenu-title fontsize-small svelte-av0po4");
    			add_location(div3, file$2, 53, 4, 1763);
    			attr_dev(div4, "class", "sidebar-submenu-items");
    			add_location(div4, file$2, 54, 4, 1834);
    			attr_dev(div5, "class", "sidebar-menuitem-container padding-l svelte-av0po4");
    			add_location(div5, file$2, 52, 2, 1708);
    			attr_dev(div6, "class", "sidebar-submenu-title fontsize-small svelte-av0po4");
    			add_location(div6, file$2, 67, 4, 2236);
    			attr_dev(div7, "class", "sidebar-submenu-items");
    			add_location(div7, file$2, 68, 4, 2306);
    			attr_dev(div8, "class", "sidebar-menuitem-container padding-l svelte-av0po4");
    			add_location(div8, file$2, 66, 2, 2181);
    			attr_dev(div9, "id", "sidebar-menu");
    			attr_dev(div9, "class", "sidebar-container height-100vh bg--white margin-l--r svelte-av0po4");
    			add_location(div9, file$2, 30, 0, 946);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div9, anchor);
    			append_dev(div9, div2);
    			append_dev(div2, div0);
    			append_dev(div0, a);
    			append_dev(a, img);
    			append_dev(div2, t0);
    			append_dev(div2, div1);
    			append_dev(div1, p);
    			append_dev(div9, t2);

    			for (let i = 0; i < each_blocks_2.length; i += 1) {
    				each_blocks_2[i].m(div9, null);
    			}

    			append_dev(div9, t3);
    			append_dev(div9, div5);
    			append_dev(div5, div3);
    			append_dev(div5, t5);
    			append_dev(div5, div4);

    			for (let i = 0; i < each_blocks_1.length; i += 1) {
    				each_blocks_1[i].m(div4, null);
    			}

    			append_dev(div9, t6);
    			append_dev(div9, div8);
    			append_dev(div8, div6);
    			append_dev(div8, t8);
    			append_dev(div8, div7);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div7, null);
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*menuItems, url*/ 3) {
    				each_value_2 = /*menuItems*/ ctx[1];
    				validate_each_argument(each_value_2);
    				let i;

    				for (i = 0; i < each_value_2.length; i += 1) {
    					const child_ctx = get_each_context_2(ctx, each_value_2, i);

    					if (each_blocks_2[i]) {
    						each_blocks_2[i].p(child_ctx, dirty);
    					} else {
    						each_blocks_2[i] = create_each_block_2(child_ctx);
    						each_blocks_2[i].c();
    						each_blocks_2[i].m(div9, t3);
    					}
    				}

    				for (; i < each_blocks_2.length; i += 1) {
    					each_blocks_2[i].d(1);
    				}

    				each_blocks_2.length = each_value_2.length;
    			}

    			if (dirty & /*componentMenuItems, url*/ 5) {
    				each_value_1 = /*componentMenuItems*/ ctx[2];
    				validate_each_argument(each_value_1);
    				let i;

    				for (i = 0; i < each_value_1.length; i += 1) {
    					const child_ctx = get_each_context_1(ctx, each_value_1, i);

    					if (each_blocks_1[i]) {
    						each_blocks_1[i].p(child_ctx, dirty);
    					} else {
    						each_blocks_1[i] = create_each_block_1(child_ctx);
    						each_blocks_1[i].c();
    						each_blocks_1[i].m(div4, null);
    					}
    				}

    				for (; i < each_blocks_1.length; i += 1) {
    					each_blocks_1[i].d(1);
    				}

    				each_blocks_1.length = each_value_1.length;
    			}

    			if (dirty & /*utilityMenuItems, url*/ 9) {
    				each_value = /*utilityMenuItems*/ ctx[3];
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(div7, null);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value.length;
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div9);
    			destroy_each(each_blocks_2, detaching);
    			destroy_each(each_blocks_1, detaching);
    			destroy_each(each_blocks, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$2.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$2($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Sidebar", slots, []);
    	let { menuItemList = [] } = $$props;
    	let url = window.location.hash.substr(1);
    	let menuItems = [];
    	let componentMenuItems = [];
    	let utilityMenuItems = [];

    	menuItemList.forEach(menuItem => {
    		if (menuItem.type === "component") componentMenuItems.push(menuItem);
    		if (menuItem.type === "utility") utilityMenuItems.push(menuItem);
    		if (!menuItem.type) menuItems.push(menuItem);
    	});

    	// Chance URL on menu-click
    	onMount(() => {
    		const m = document.querySelectorAll("#sidebar-menu .sidebar-item");

    		m.forEach(item => {
    			item.addEventListener("click", () => {
    				$$invalidate(0, url = window.location.hash.substr(1));
    			});
    		});
    	});

    	// Listener to check whenever the hash URL changes make sure to match the menu
    	window.addEventListener("hashchange", () => {
    		$$invalidate(0, url = window.location.hash.substr(1));
    	});

    	const writable_props = ["menuItemList"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Sidebar> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("menuItemList" in $$props) $$invalidate(4, menuItemList = $$props.menuItemList);
    	};

    	$$self.$capture_state = () => ({
    		link,
    		onMount,
    		menuItemList,
    		url,
    		menuItems,
    		componentMenuItems,
    		utilityMenuItems
    	});

    	$$self.$inject_state = $$props => {
    		if ("menuItemList" in $$props) $$invalidate(4, menuItemList = $$props.menuItemList);
    		if ("url" in $$props) $$invalidate(0, url = $$props.url);
    		if ("menuItems" in $$props) $$invalidate(1, menuItems = $$props.menuItems);
    		if ("componentMenuItems" in $$props) $$invalidate(2, componentMenuItems = $$props.componentMenuItems);
    		if ("utilityMenuItems" in $$props) $$invalidate(3, utilityMenuItems = $$props.utilityMenuItems);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [url, menuItems, componentMenuItems, utilityMenuItems, menuItemList];
    }

    class Sidebar extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$2, create_fragment$2, safe_not_equal, { menuItemList: 4 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Sidebar",
    			options,
    			id: create_fragment$2.name
    		});
    	}

    	get menuItemList() {
    		throw new Error("<Sidebar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set menuItemList(value) {
    		throw new Error("<Sidebar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* docs_src/routes/Navbar.svelte generated by Svelte v3.38.1 */

    const file$1 = "docs_src/routes/Navbar.svelte";

    function create_fragment$1(ctx) {
    	let div;
    	let nav;
    	let a;
    	let i;
    	let t;

    	const block = {
    		c: function create() {
    			div = element("div");
    			nav = element("nav");
    			a = element("a");
    			i = element("i");
    			t = text("Github");
    			attr_dev(i, "class", "fab fa-github margin-s--r");
    			add_location(i, file$1, 3, 7, 248);
    			attr_dev(a, "href", "https://github.com/EkstraBladetUdvikling/eb-designsystem");
    			attr_dev(a, "target", "_blank");
    			attr_dev(a, "class", "flex svelte-gb8srt");
    			add_location(a, file$1, 2, 4, 145);
    			attr_dev(nav, "class", "navmenu flex flex-align--center padding-xl--rl svelte-gb8srt");
    			add_location(nav, file$1, 1, 2, 80);
    			attr_dev(div, "class", "navmenu-container position-fixed width-1of1 margin-xl--b bg-red svelte-gb8srt");
    			add_location(div, file$1, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, nav);
    			append_dev(nav, a);
    			append_dev(a, i);
    			append_dev(a, t);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Navbar", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Navbar> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Navbar extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Navbar",
    			options,
    			id: create_fragment$1.name
    		});
    	}
    }

    /* docs_src/App.svelte generated by Svelte v3.38.1 */
    const file = "docs_src/App.svelte";

    function create_fragment(ctx) {
    	let navbar;
    	let t0;
    	let sidebar;
    	let t1;
    	let div;
    	let router;
    	let current;
    	navbar = new Navbar({ $$inline: true });

    	sidebar = new Sidebar({
    			props: { menuItemList: /*menuItemList*/ ctx[1] },
    			$$inline: true
    		});

    	router = new Router({
    			props: { routes: /*routes*/ ctx[0] },
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(navbar.$$.fragment);
    			t0 = space();
    			create_component(sidebar.$$.fragment);
    			t1 = space();
    			div = element("div");
    			create_component(router.$$.fragment);
    			attr_dev(div, "class", "content-container padding-xl svelte-1tjuw1s");
    			add_location(div, file, 16, 0, 454);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			mount_component(navbar, target, anchor);
    			insert_dev(target, t0, anchor);
    			mount_component(sidebar, target, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div, anchor);
    			mount_component(router, div, null);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const router_changes = {};
    			if (dirty & /*routes*/ 1) router_changes.routes = /*routes*/ ctx[0];
    			router.$set(router_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(navbar.$$.fragment, local);
    			transition_in(sidebar.$$.fragment, local);
    			transition_in(router.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(navbar.$$.fragment, local);
    			transition_out(sidebar.$$.fragment, local);
    			transition_out(router.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(navbar, detaching);
    			if (detaching) detach_dev(t0);
    			destroy_component(sidebar, detaching);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div);
    			destroy_component(router);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("App", slots, []);
    	const routeList = routes;

    	// Fills the object to create a SPA routing
    	let routes$1 = {};

    	let menuItemList = [];

    	routeList.forEach(route => {
    		$$invalidate(0, routes$1[route.link] = route.component, routes$1);
    		menuItemList.push(route);
    	});

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		Router,
    		Routes: routes,
    		Sidebar,
    		Navbar,
    		routeList,
    		routes: routes$1,
    		menuItemList
    	});

    	$$self.$inject_state = $$props => {
    		if ("routes" in $$props) $$invalidate(0, routes$1 = $$props.routes);
    		if ("menuItemList" in $$props) $$invalidate(1, menuItemList = $$props.menuItemList);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [routes$1, menuItemList];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment.name
    		});
    	}
    }

    const app = new App({
        target: document.body,
        props: {
            name: 'world',
        },
    });

    return app;

}());
