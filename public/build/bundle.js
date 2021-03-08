
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
    function mount_component(component, target, anchor) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
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
            before_update: [],
            after_update: [],
            context: new Map(parent_component ? parent_component.$$.context : []),
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
    function wrap(args) {
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
    		id: create_else_block.name,
    		type: "else",
    		source: "(209:0) {:else}",
    		ctx
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
    		id: create_if_block.name,
    		type: "if",
    		source: "(202:0) {#if componentParams}",
    		ctx
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
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function wrap$1(component, userData, ...conditions) {
    	// Use the new wrap method and show a deprecation warning
    	// eslint-disable-next-line no-console
    	console.warn("Method `wrap` from `svelte-spa-router` is deprecated and will be removed in a future version. Please use `svelte-spa-router/wrap` instead. See http://bit.ly/svelte-spa-router-upgrading");

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

    function instance($$self, $$props, $$invalidate) {
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
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Router> was created with unknown prop '${key}'`);
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

    		init(this, options, instance, create_fragment, safe_not_equal, {
    			routes: 3,
    			prefix: 4,
    			restoreScrollState: 5
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Router",
    			options,
    			id: create_fragment.name
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

    /* src/_components/card/Card.svelte generated by Svelte v3.32.2 */

    const file = "src/_components/card/Card.svelte";
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
    			attr_dev(div, "class", /*baseClass*/ ctx[2]);
    			attr_dev(div, "style", /*style*/ ctx[1]);
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
    				attr_dev(div, "class", /*baseClass*/ ctx[2]);
    			}

    			if (!current || dirty & /*style*/ 2) {
    				attr_dev(div, "style", /*style*/ ctx[1]);
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
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$1.name,
    		type: "else",
    		source: "(41:0) {:else}",
    		ctx
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
    			attr_dev(a, "href", /*href*/ ctx[0]);
    			attr_dev(a, "class", /*baseClass*/ ctx[2]);
    			attr_dev(a, "style", /*style*/ ctx[1]);
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
    				attr_dev(a, "href", /*href*/ ctx[0]);
    			}

    			if (!current || dirty & /*baseClass*/ 4) {
    				attr_dev(a, "class", /*baseClass*/ ctx[2]);
    			}

    			if (!current || dirty & /*style*/ 2) {
    				attr_dev(a, "style", /*style*/ ctx[1]);
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
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$1.name,
    		type: "if",
    		source: "(21:0) {#if href}",
    		ctx
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
    			div = element("div");
    			if (header_slot) header_slot.c();
    			attr_dev(div, "class", "card-header");
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
    					update_slot(header_slot, header_slot_template, ctx, /*$$scope*/ ctx[6], dirty, get_header_slot_changes_1, get_header_slot_context_1);
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
    		source: "(43:4) {#if $$slots.header}",
    		ctx
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
    			div = element("div");
    			if (media_slot) media_slot.c();
    			attr_dev(div, "class", "card-media");
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
    					update_slot(media_slot, media_slot_template, ctx, /*$$scope*/ ctx[6], dirty, get_media_slot_changes_1, get_media_slot_context_1);
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
    		source: "(48:4) {#if $$slots.media}",
    		ctx
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
    			div = element("div");
    			if (content_slot) content_slot.c();
    			attr_dev(div, "class", "card-content");
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
    					update_slot(content_slot, content_slot_template, ctx, /*$$scope*/ ctx[6], dirty, get_content_slot_changes_1, get_content_slot_context_1);
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
    		source: "(54:4) {#if $$slots.content}",
    		ctx
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
    			div = element("div");
    			if (footer_slot) footer_slot.c();
    			attr_dev(div, "class", "card-footer");
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
    					update_slot(footer_slot, footer_slot_template, ctx, /*$$scope*/ ctx[6], dirty, get_footer_slot_changes_1, get_footer_slot_context_1);
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
    		id: create_if_block_5.name,
    		type: "if",
    		source: "(60:4) {#if $$slots.footer}",
    		ctx
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
    					update_slot(header_slot, header_slot_template, ctx, /*$$scope*/ ctx[6], dirty, get_header_slot_changes, get_header_slot_context);
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
    		id: create_if_block_4.name,
    		type: "if",
    		source: "(23:4) {#if $$slots.header}",
    		ctx
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
    					update_slot(media_slot, media_slot_template, ctx, /*$$scope*/ ctx[6], dirty, get_media_slot_changes, get_media_slot_context);
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
    		id: create_if_block_3.name,
    		type: "if",
    		source: "(26:4) {#if $$slots.media}",
    		ctx
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
    			div = element("div");
    			if (content_slot) content_slot.c();
    			attr_dev(div, "class", "card-content");
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
    					update_slot(content_slot, content_slot_template, ctx, /*$$scope*/ ctx[6], dirty, get_content_slot_changes, get_content_slot_context);
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
    		id: create_if_block_2.name,
    		type: "if",
    		source: "(30:4) {#if $$slots.content}",
    		ctx
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
    			div = element("div");
    			if (footer_slot) footer_slot.c();
    			attr_dev(div, "class", "card-footer");
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
    					update_slot(footer_slot, footer_slot_template, ctx, /*$$scope*/ ctx[6], dirty, get_footer_slot_changes, get_footer_slot_context);
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
    		id: create_if_block_1.name,
    		type: "if",
    		source: "(35:4) {#if $$slots.footer}",
    		ctx
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
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Card", slots, ['header','media','default','content','footer']);
    	const $$slots = compute_slots(slots);
    	let baseClass = "card";
    	let { className } = $$props;
    	let { href = undefined } = $$props;
    	let { style = undefined } = $$props;
    	let { type = undefined } = $$props;
    	if (className) baseClass = `${className} ${baseClass}`;

    	switch (type) {
    		case "mode":
    			baseClass = `${baseClass} card-mode`;
    		case "small-media":
    			baseClass = `${baseClass} card--small-media`;
    			break;
    		case "small-media--reverse":
    			baseClass = `${baseClass} card--small-media card--small-media--reverse`;
    			break;
    	}

    	const writable_props = ["className", "href", "style", "type"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Card> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("className" in $$props) $$invalidate(4, className = $$props.className);
    		if ("href" in $$props) $$invalidate(0, href = $$props.href);
    		if ("style" in $$props) $$invalidate(1, style = $$props.style);
    		if ("type" in $$props) $$invalidate(5, type = $$props.type);
    		if ("$$scope" in $$props) $$invalidate(6, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({ baseClass, className, href, style, type });

    	$$self.$inject_state = $$props => {
    		if ("baseClass" in $$props) $$invalidate(2, baseClass = $$props.baseClass);
    		if ("className" in $$props) $$invalidate(4, className = $$props.className);
    		if ("href" in $$props) $$invalidate(0, href = $$props.href);
    		if ("style" in $$props) $$invalidate(1, style = $$props.style);
    		if ("type" in $$props) $$invalidate(5, type = $$props.type);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [href, style, baseClass, $$slots, className, type, $$scope, slots];
    }

    class Card extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, { className: 4, href: 0, style: 1, type: 5 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Card",
    			options,
    			id: create_fragment$1.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*className*/ ctx[4] === undefined && !("className" in props)) {
    			console.warn("<Card> was created without expected prop 'className'");
    		}
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

    	get type() {
    		throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set type(value) {
    		throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/_components/icon/Icon.svelte generated by Svelte v3.32.2 */

    const file$1 = "src/_components/icon/Icon.svelte";

    // (15:0) {:else}
    function create_else_block$2(ctx) {
    	let i;

    	const block = {
    		c: function create() {
    			i = element("i");
    			attr_dev(i, "class", /*className*/ ctx[1]);
    			attr_dev(i, "aria-hidden", "true");
    			add_location(i, file$1, 15, 2, 335);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, i, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*className*/ 2) {
    				attr_dev(i, "class", /*className*/ ctx[1]);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(i);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block$2.name,
    		type: "else",
    		source: "(15:0) {:else}",
    		ctx
    	});

    	return block;
    }

    // (11:0) {#if type === 'svg'}
    function create_if_block$2(ctx) {
    	let svg;
    	let use;
    	let use_href_value;
    	let svg_class_value;

    	const block = {
    		c: function create() {
    			svg = svg_element("svg");
    			use = svg_element("use");
    			attr_dev(use, "href", use_href_value = "eb.svg#" + /*name*/ ctx[2]);
    			add_location(use, file$1, 12, 4, 287);
    			attr_dev(svg, "viewBox", /*viewBox*/ ctx[0]);
    			attr_dev(svg, "style", /*style*/ ctx[3]);
    			attr_dev(svg, "class", svg_class_value = "icon-svg " + /*className*/ ctx[1]);
    			add_location(svg, file$1, 11, 2, 230);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, svg, anchor);
    			append_dev(svg, use);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*name*/ 4 && use_href_value !== (use_href_value = "eb.svg#" + /*name*/ ctx[2])) {
    				attr_dev(use, "href", use_href_value);
    			}

    			if (dirty & /*viewBox*/ 1) {
    				attr_dev(svg, "viewBox", /*viewBox*/ ctx[0]);
    			}

    			if (dirty & /*style*/ 8) {
    				attr_dev(svg, "style", /*style*/ ctx[3]);
    			}

    			if (dirty & /*className*/ 2 && svg_class_value !== (svg_class_value = "icon-svg " + /*className*/ ctx[1])) {
    				attr_dev(svg, "class", svg_class_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(svg);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$2.name,
    		type: "if",
    		source: "(11:0) {#if type === 'svg'}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$2(ctx) {
    	let if_block_anchor;

    	function select_block_type(ctx, dirty) {
    		if (/*type*/ ctx[4] === "svg") return create_if_block$2;
    		return create_else_block$2;
    	}

    	let current_block_type = select_block_type(ctx);
    	let if_block = current_block_type(ctx);

    	const block = {
    		c: function create() {
    			if_block.c();
    			if_block_anchor = empty();
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    		},
    		p: function update(ctx, [dirty]) {
    			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
    				if_block.p(ctx, dirty);
    			} else {
    				if_block.d(1);
    				if_block = current_block_type(ctx);

    				if (if_block) {
    					if_block.c();
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
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
    	validate_slots("Icon", slots, []);
    	let { className } = $$props;
    	let { name } = $$props;
    	let { style = "width: 36px; height: 36px;" } = $$props;
    	let { viewBox } = $$props;
    	let { type = "svg" } = $$props;

    	if (!viewBox) {
    		viewBox = "0 0 50 50";
    	}

    	const writable_props = ["className", "name", "style", "viewBox", "type"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Icon> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("className" in $$props) $$invalidate(1, className = $$props.className);
    		if ("name" in $$props) $$invalidate(2, name = $$props.name);
    		if ("style" in $$props) $$invalidate(3, style = $$props.style);
    		if ("viewBox" in $$props) $$invalidate(0, viewBox = $$props.viewBox);
    		if ("type" in $$props) $$invalidate(4, type = $$props.type);
    	};

    	$$self.$capture_state = () => ({ className, name, style, viewBox, type });

    	$$self.$inject_state = $$props => {
    		if ("className" in $$props) $$invalidate(1, className = $$props.className);
    		if ("name" in $$props) $$invalidate(2, name = $$props.name);
    		if ("style" in $$props) $$invalidate(3, style = $$props.style);
    		if ("viewBox" in $$props) $$invalidate(0, viewBox = $$props.viewBox);
    		if ("type" in $$props) $$invalidate(4, type = $$props.type);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [viewBox, className, name, style, type];
    }

    class Icon extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$2, create_fragment$2, safe_not_equal, {
    			className: 1,
    			name: 2,
    			style: 3,
    			viewBox: 0,
    			type: 4
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Icon",
    			options,
    			id: create_fragment$2.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*className*/ ctx[1] === undefined && !("className" in props)) {
    			console.warn("<Icon> was created without expected prop 'className'");
    		}

    		if (/*name*/ ctx[2] === undefined && !("name" in props)) {
    			console.warn("<Icon> was created without expected prop 'name'");
    		}

    		if (/*viewBox*/ ctx[0] === undefined && !("viewBox" in props)) {
    			console.warn("<Icon> was created without expected prop 'viewBox'");
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

    	get style() {
    		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set style(value) {
    		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get viewBox() {
    		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set viewBox(value) {
    		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get type() {
    		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set type(value) {
    		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    const svgIcons = [
        'angle_down_pro',
        'angle_left_pro',
        'angle_up_pro',
        'article',
        'check_pro',
        'credit_card',
        'ebplus_icon',
        'ebplus_sort',
        'envelope',
        'gallery',
        'headphones',
        'headset',
        'lock',
        'medielogin',
        'menu-bars',
        'miteb-regular',
        'miteb-solid',
        'mobil_fone',
        'newspaper',
        'play-circle-light',
        'tag-regular',
        'tag-solid',
        'tags-regular',
        'tags-solid',
        'video',
    ];

    /* documentation/routes/Home.svelte generated by Svelte v3.32.2 */
    const file$2 = "documentation/routes/Home.svelte";

    // (30:8) <Card className="padding-m" href={componentsLink}>
    function create_default_slot_2(ctx) {
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
    			add_location(h2, file$2, 31, 12, 1147);
    			attr_dev(i, "class", "home-section-icon fas fa-cubes svelte-n6iywn");
    			add_location(i, file$2, 32, 12, 1200);
    			attr_dev(div, "class", "flex-item flex-item--center text-align--center");
    			add_location(div, file$2, 30, 10, 1074);
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
    		id: create_default_slot_2.name,
    		type: "slot",
    		source: "(30:8) <Card className=\\\"padding-m\\\" href={componentsLink}>",
    		ctx
    	});

    	return block;
    }

    // (38:8) <Card className="padding-m" href={utilityLink}>
    function create_default_slot_1(ctx) {
    	let div;
    	let h2;
    	let t1;
    	let i;

    	const block = {
    		c: function create() {
    			div = element("div");
    			h2 = element("h2");
    			h2.textContent = "Utilites";
    			t1 = space();
    			i = element("i");
    			attr_dev(h2, "class", "color--graa1");
    			add_location(h2, file$2, 39, 12, 1483);
    			attr_dev(i, "class", "home-section-icon fab fa-connectdevelop svelte-n6iywn");
    			add_location(i, file$2, 40, 12, 1534);
    			attr_dev(div, "class", "flex-item flex-item--center text-align--center");
    			add_location(div, file$2, 38, 10, 1410);
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
    		id: create_default_slot_1.name,
    		type: "slot",
    		source: "(38:8) <Card className=\\\"padding-m\\\" href={utilityLink}>",
    		ctx
    	});

    	return block;
    }

    // (48:8) <Card className="padding-m" href={colorLink}>
    function create_default_slot(ctx) {
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
    			add_location(h2, file$2, 49, 12, 1858);
    			attr_dev(i, "class", "home-section-icon fas fa-palette svelte-n6iywn");
    			add_location(i, file$2, 50, 12, 1907);
    			attr_dev(div, "class", "flex-item flex-item--center text-align--center");
    			add_location(div, file$2, 48, 10, 1785);
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
    		id: create_default_slot.name,
    		type: "slot",
    		source: "(48:8) <Card className=\\\"padding-m\\\" href={colorLink}>",
    		ctx
    	});

    	return block;
    }

    function create_fragment$3(ctx) {
    	let div8;
    	let div7;
    	let div0;
    	let img;
    	let img_src_value;
    	let t0;
    	let div1;
    	let h1;
    	let t2;
    	let div4;
    	let div2;
    	let card0;
    	let t3;
    	let div3;
    	let card1;
    	let t4;
    	let div6;
    	let div5;
    	let card2;
    	let current;

    	card0 = new Card({
    			props: {
    				className: "padding-m",
    				href: /*componentsLink*/ ctx[0],
    				$$slots: { default: [create_default_slot_2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	card1 = new Card({
    			props: {
    				className: "padding-m",
    				href: /*utilityLink*/ ctx[1],
    				$$slots: { default: [create_default_slot_1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	card2 = new Card({
    			props: {
    				className: "padding-m",
    				href: /*colorLink*/ ctx[2],
    				$$slots: { default: [create_default_slot] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div8 = element("div");
    			div7 = element("div");
    			div0 = element("div");
    			img = element("img");
    			t0 = space();
    			div1 = element("div");
    			h1 = element("h1");
    			h1.textContent = "Design system";
    			t2 = space();
    			div4 = element("div");
    			div2 = element("div");
    			create_component(card0.$$.fragment);
    			t3 = space();
    			div3 = element("div");
    			create_component(card1.$$.fragment);
    			t4 = space();
    			div6 = element("div");
    			div5 = element("div");
    			create_component(card2.$$.fragment);
    			attr_dev(img, "alt", "");
    			if (img.src !== (img_src_value = "ekstrabladet.svg")) attr_dev(img, "src", img_src_value);
    			set_style(img, "height", "70px");
    			add_location(img, file$2, 22, 6, 762);
    			attr_dev(div0, "class", "flex flex-justify--center");
    			add_location(div0, file$2, 21, 4, 716);
    			add_location(h1, file$2, 25, 6, 895);
    			attr_dev(div1, "class", "flex flex-justify--center  margin-l--b");
    			add_location(div1, file$2, 24, 4, 836);
    			attr_dev(div2, "class", "home-section width-1of1 margin-m svelte-n6iywn");
    			add_location(div2, file$2, 28, 6, 958);
    			attr_dev(div3, "class", "home-section width-1of1 margin-m svelte-n6iywn");
    			add_location(div3, file$2, 36, 6, 1297);
    			attr_dev(div4, "class", "flex");
    			add_location(div4, file$2, 27, 4, 933);
    			attr_dev(div5, "class", "home-section width-1of1 margin-m svelte-n6iywn");
    			add_location(div5, file$2, 46, 6, 1674);
    			attr_dev(div6, "class", "flex");
    			add_location(div6, file$2, 45, 4, 1649);
    			attr_dev(div7, "class", "grid-width--medium");
    			add_location(div7, file$2, 20, 2, 679);
    			attr_dev(div8, "class", "flex flex-justify--around width-1of1");
    			add_location(div8, file$2, 19, 0, 626);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div8, anchor);
    			append_dev(div8, div7);
    			append_dev(div7, div0);
    			append_dev(div0, img);
    			append_dev(div7, t0);
    			append_dev(div7, div1);
    			append_dev(div1, h1);
    			append_dev(div7, t2);
    			append_dev(div7, div4);
    			append_dev(div4, div2);
    			mount_component(card0, div2, null);
    			append_dev(div4, t3);
    			append_dev(div4, div3);
    			mount_component(card1, div3, null);
    			append_dev(div7, t4);
    			append_dev(div7, div6);
    			append_dev(div6, div5);
    			mount_component(card2, div5, null);
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
    			if (detaching) detach_dev(div8);
    			destroy_component(card0);
    			destroy_component(card1);
    			destroy_component(card2);
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
    	validate_slots("Home", slots, []);
    	let componentsLink = "/#/";
    	let utilityLink = "/#/";
    	let colorLink = "/#/";

    	// Adds dynamic links to home-section cards. It finds the first element for each type.
    	routes.forEach(route => {
    		if (componentsLink === "/#/" && route.type === "component") {
    			$$invalidate(0, componentsLink = `/#${route.link}`);
    		}

    		if (utilityLink === "/#/" && route.type === "utility") {
    			$$invalidate(1, utilityLink = `/#${route.link}`);
    		}

    		if (colorLink === "/#/" && route.type === "color") {
    			$$invalidate(2, colorLink = `/#${route.link}`);
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
    		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Home",
    			options,
    			id: create_fragment$3.name
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

    var prism = createCommonjsModule(function (module) {
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

    /* node_modules/svelte-prism/src/Prism.svelte generated by Svelte v3.32.2 */
    const file$3 = "node_modules/svelte-prism/src/Prism.svelte";

    // (37:4) {:else}
    function create_else_block$3(ctx) {
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
    		id: create_else_block$3.name,
    		type: "else",
    		source: "(37:4) {:else}",
    		ctx
    	});

    	return block;
    }

    // (35:4) {#if language === 'none'}
    function create_if_block$3(ctx) {
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
    		id: create_if_block$3.name,
    		type: "if",
    		source: "(35:4) {#if language === 'none'}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$4(ctx) {
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
    		if (/*language*/ ctx[0] === "none") return create_if_block$3;
    		return create_else_block$3;
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
    			add_location(code0, file$3, 28, 0, 766);
    			attr_dev(code1, "class", code1_class_value = "language-" + /*language*/ ctx[0]);
    			add_location(code1, file$3, 33, 2, 902);
    			attr_dev(pre, "class", pre_class_value = "language-" + /*language*/ ctx[0]);
    			attr_dev(pre, "command-line", "");
    			attr_dev(pre, "data-output", "2-17");
    			add_location(pre, file$3, 32, 0, 834);
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
    				if (default_slot.p && dirty & /*$$scope*/ 32) {
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
    		id: create_fragment$4.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    const prism$1 = prism;
    const highlight = prism.highlightElement;
    const globalConfig = { transform: x => x };

    function instance$4($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Prism", slots, ['default']);
    	let { language = "javascript" } = $$props;
    	let { source = "" } = $$props;
    	let { transform = x => x } = $$props;
    	let element, formattedCode;

    	function highlightCode() {
    		const grammar = prism$1.languages[language];
    		let body = source || element.textContent;
    		body = globalConfig.transform(body);
    		body = transform(body);

    		$$invalidate(2, formattedCode = language === "none"
    		? body
    		: prism$1.highlight(body, grammar, language));
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
    		_prism: prism,
    		prism: prism$1,
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
    		init(this, options, instance$4, create_fragment$4, safe_not_equal, { language: 0, source: 3, transform: 4 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Prism",
    			options,
    			id: create_fragment$4.name
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

    /* src/_components/accordion/Accordion.svelte generated by Svelte v3.32.2 */
    const file$4 = "src/_components/accordion/Accordion.svelte";

    function get_each_context(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[4] = list[i];
    	return child_ctx;
    }

    // (22:2) {#each tabs as tab}
    function create_each_block(ctx) {
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
    			attr_dev(span0, "class", "fontweight-normal fontsize-large");
    			add_location(span0, file$4, 24, 8, 893);
    			attr_dev(i, "class", "fas fa-chevron-down");
    			add_location(i, file$4, 25, 8, 967);
    			attr_dev(div0, "class", "accordion-header flex flex-justify--between padding-m");
    			add_location(div0, file$4, 23, 6, 817);
    			add_location(span1, file$4, 28, 8, 1096);
    			attr_dev(div1, "class", "accordion-body padding-m padding-l--rl fontsize-small");
    			add_location(div1, file$4, 27, 6, 1020);
    			attr_dev(div2, "class", "accordion-tab margin-s--b");
    			add_location(div2, file$4, 22, 4, 771);
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
    		id: create_each_block.name,
    		type: "each",
    		source: "(22:2) {#each tabs as tab}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$5(ctx) {
    	let div;
    	let each_value = /*tabs*/ ctx[1];
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    	}

    	const block = {
    		c: function create() {
    			div = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			attr_dev(div, "data-theme", /*dataTheme*/ ctx[0]);
    			attr_dev(div, "class", "accordion card-mode padding-l ff-secondary width-1of1");
    			add_location(div, file$4, 20, 0, 624);
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
    					const child_ctx = get_each_context(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block(child_ctx);
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
    		id: create_fragment$5.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$5($$self, $$props, $$invalidate) {
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
    		init(this, options, instance$5, create_fragment$5, safe_not_equal, { dataTheme: 0, tabs: 1 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Accordion",
    			options,
    			id: create_fragment$5.name
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

    /* documentation/components/Accordion.svelte generated by Svelte v3.32.2 */
    const file$5 = "documentation/components/Accordion.svelte";

    function create_fragment$6(ctx) {
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
    import Accordion from '../../src/_components/accordion';

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
    			add_location(h1, file$5, 19, 2, 1019);
    			add_location(h20, file$5, 34, 2, 1315);
    			add_location(h21, file$5, 40, 2, 1430);
    			add_location(h22, file$5, 45, 2, 1595);
    			attr_dev(div, "class", "grid-width--small");
    			add_location(div, file$5, 18, 0, 985);
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
    		id: create_fragment$6.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$6($$self, $$props, $$invalidate) {
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
    		init(this, options, instance$6, create_fragment$6, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Accordion_1",
    			options,
    			id: create_fragment$6.name
    		});
    	}
    }

    /* src/_components/articlecard/ArticleCard.svelte generated by Svelte v3.32.2 */
    const file$6 = "src/_components/articlecard/ArticleCard.svelte";
    const get_default_slot_changes = dirty => ({});
    const get_default_slot_context = ctx => ({ slot: "content" });

    // (16:2) {#if media}
    function create_if_block_4$1(ctx) {
    	let div;
    	let img;
    	let img_src_value;
    	let img_height_value;
    	let img_width_value;

    	const block = {
    		c: function create() {
    			div = element("div");
    			img = element("img");
    			attr_dev(img, "alt", /*title*/ ctx[5]);
    			attr_dev(img, "class", "card-image");
    			if (img.src !== (img_src_value = /*media*/ ctx[1].src)) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "height", img_height_value = /*media*/ ctx[1].height);
    			attr_dev(img, "width", img_width_value = /*media*/ ctx[1].width);
    			add_location(img, file$6, 17, 6, 481);
    			attr_dev(div, "class", "card-media");
    			add_location(div, file$6, 16, 4, 450);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, img);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*title*/ 32) {
    				attr_dev(img, "alt", /*title*/ ctx[5]);
    			}

    			if (dirty & /*media*/ 2 && img.src !== (img_src_value = /*media*/ ctx[1].src)) {
    				attr_dev(img, "src", img_src_value);
    			}

    			if (dirty & /*media*/ 2 && img_height_value !== (img_height_value = /*media*/ ctx[1].height)) {
    				attr_dev(img, "height", img_height_value);
    			}

    			if (dirty & /*media*/ 2 && img_width_value !== (img_width_value = /*media*/ ctx[1].width)) {
    				attr_dev(img, "width", img_width_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_4$1.name,
    		type: "if",
    		source: "(16:2) {#if media}",
    		ctx
    	});

    	return block;
    }

    // (22:4) {#if section || timestamp}
    function create_if_block$4(ctx) {
    	let p;
    	let small;
    	let t0;
    	let t1;
    	let if_block0 = /*section*/ ctx[2] && create_if_block_3$1(ctx);
    	let if_block1 = /*section*/ ctx[2] && /*timestamp*/ ctx[4] && create_if_block_2$1(ctx);
    	let if_block2 = /*timestamp*/ ctx[4] && create_if_block_1$1(ctx);

    	const block = {
    		c: function create() {
    			p = element("p");
    			small = element("small");
    			if (if_block0) if_block0.c();
    			t0 = space();
    			if (if_block1) if_block1.c();
    			t1 = space();
    			if (if_block2) if_block2.c();
    			add_location(small, file$6, 23, 8, 701);
    			attr_dev(p, "class", "card-meta color--graa3");
    			add_location(p, file$6, 22, 6, 658);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, p, anchor);
    			append_dev(p, small);
    			if (if_block0) if_block0.m(small, null);
    			append_dev(small, t0);
    			if (if_block1) if_block1.m(small, null);
    			append_dev(small, t1);
    			if (if_block2) if_block2.m(small, null);
    		},
    		p: function update(ctx, dirty) {
    			if (/*section*/ ctx[2]) {
    				if (if_block0) {
    					if_block0.p(ctx, dirty);
    				} else {
    					if_block0 = create_if_block_3$1(ctx);
    					if_block0.c();
    					if_block0.m(small, t0);
    				}
    			} else if (if_block0) {
    				if_block0.d(1);
    				if_block0 = null;
    			}

    			if (/*section*/ ctx[2] && /*timestamp*/ ctx[4]) {
    				if (if_block1) ; else {
    					if_block1 = create_if_block_2$1(ctx);
    					if_block1.c();
    					if_block1.m(small, t1);
    				}
    			} else if (if_block1) {
    				if_block1.d(1);
    				if_block1 = null;
    			}

    			if (/*timestamp*/ ctx[4]) {
    				if (if_block2) {
    					if_block2.p(ctx, dirty);
    				} else {
    					if_block2 = create_if_block_1$1(ctx);
    					if_block2.c();
    					if_block2.m(small, null);
    				}
    			} else if (if_block2) {
    				if_block2.d(1);
    				if_block2 = null;
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(p);
    			if (if_block0) if_block0.d();
    			if (if_block1) if_block1.d();
    			if (if_block2) if_block2.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$4.name,
    		type: "if",
    		source: "(22:4) {#if section || timestamp}",
    		ctx
    	});

    	return block;
    }

    // (25:10) {#if section}
    function create_if_block_3$1(ctx) {
    	let span;
    	let t;

    	const block = {
    		c: function create() {
    			span = element("span");
    			t = text(/*section*/ ctx[2]);
    			attr_dev(span, "class", "color--sport");
    			add_location(span, file$6, 25, 12, 745);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, span, anchor);
    			append_dev(span, t);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*section*/ 4) set_data_dev(t, /*section*/ ctx[2]);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(span);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_3$1.name,
    		type: "if",
    		source: "(25:10) {#if section}",
    		ctx
    	});

    	return block;
    }

    // (28:10) {#if section && timestamp}
    function create_if_block_2$1(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text("-");
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
    		id: create_if_block_2$1.name,
    		type: "if",
    		source: "(28:10) {#if section && timestamp}",
    		ctx
    	});

    	return block;
    }

    // (31:10) {#if timestamp}
    function create_if_block_1$1(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = text(/*timestamp*/ ctx[4]);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*timestamp*/ 16) set_data_dev(t, /*timestamp*/ ctx[4]);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1$1.name,
    		type: "if",
    		source: "(31:10) {#if timestamp}",
    		ctx
    	});

    	return block;
    }

    // (21:2) <slot slot="content">     {#if section || timestamp}
    function create_content_slot(ctx) {
    	let current;
    	const default_slot_template = /*#slots*/ ctx[9].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[10], get_default_slot_context);
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
    				if (default_slot.p && dirty & /*$$scope*/ 1024) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[10], dirty, get_default_slot_changes, get_default_slot_context);
    				}
    			} else {
    				if (default_slot_or_fallback && default_slot_or_fallback.p && dirty & /*title, timestamp, section*/ 52) {
    					default_slot_or_fallback.p(ctx, dirty);
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
    		id: create_content_slot.name,
    		type: "slot",
    		source: "(21:2) <slot slot=\\\"content\\\">     {#if section || timestamp}",
    		ctx
    	});

    	return block;
    }

    // (21:23)      
    function fallback_block(ctx) {
    	let t0;
    	let h2;
    	let t1;
    	let if_block = (/*section*/ ctx[2] || /*timestamp*/ ctx[4]) && create_if_block$4(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			t0 = space();
    			h2 = element("h2");
    			t1 = text(/*title*/ ctx[5]);
    			attr_dev(h2, "class", "card-title");
    			add_location(h2, file$6, 36, 4, 980);
    		},
    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, h2, anchor);
    			append_dev(h2, t1);
    		},
    		p: function update(ctx, dirty) {
    			if (/*section*/ ctx[2] || /*timestamp*/ ctx[4]) {
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

    			if (dirty & /*title*/ 32) set_data_dev(t1, /*title*/ ctx[5]);
    		},
    		d: function destroy(detaching) {
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(h2);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: fallback_block.name,
    		type: "fallback",
    		source: "(21:23)      ",
    		ctx
    	});

    	return block;
    }

    // (15:0) <Card {href} className={baseClass} {style} {type}>
    function create_default_slot$1(ctx) {
    	let t;
    	let if_block = /*media*/ ctx[1] && create_if_block_4$1(ctx);

    	const block = {
    		c: function create() {
    			if (if_block) if_block.c();
    			t = space();
    		},
    		m: function mount(target, anchor) {
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, t, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (/*media*/ ctx[1]) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    				} else {
    					if_block = create_if_block_4$1(ctx);
    					if_block.c();
    					if_block.m(t.parentNode, t);
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
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$1.name,
    		type: "slot",
    		source: "(15:0) <Card {href} className={baseClass} {style} {type}>",
    		ctx
    	});

    	return block;
    }

    function create_fragment$7(ctx) {
    	let card;
    	let current;

    	card = new Card({
    			props: {
    				href: /*href*/ ctx[0],
    				className: /*baseClass*/ ctx[7],
    				style: /*style*/ ctx[3],
    				type: /*type*/ ctx[6],
    				$$slots: {
    					default: [create_default_slot$1],
    					content: [create_content_slot]
    				},
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

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
    			if (dirty & /*href*/ 1) card_changes.href = /*href*/ ctx[0];
    			if (dirty & /*baseClass*/ 128) card_changes.className = /*baseClass*/ ctx[7];
    			if (dirty & /*style*/ 8) card_changes.style = /*style*/ ctx[3];
    			if (dirty & /*type*/ 64) card_changes.type = /*type*/ ctx[6];

    			if (dirty & /*$$scope, title, timestamp, section, media*/ 1078) {
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
    		id: create_fragment$7.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$7($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("ArticleCard", slots, ['default']);
    	let { className = undefined } = $$props;
    	let { href = undefined } = $$props;
    	let { media = undefined } = $$props;
    	let { section = undefined } = $$props;
    	let { style = undefined } = $$props;
    	let { timestamp = undefined } = $$props;
    	let { title } = $$props;
    	let { type = undefined } = $$props;
    	let baseClass = `margin-m`;
    	if (className) baseClass = `${className} ${baseClass}`;
    	const writable_props = ["className", "href", "media", "section", "style", "timestamp", "title", "type"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ArticleCard> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("className" in $$props) $$invalidate(8, className = $$props.className);
    		if ("href" in $$props) $$invalidate(0, href = $$props.href);
    		if ("media" in $$props) $$invalidate(1, media = $$props.media);
    		if ("section" in $$props) $$invalidate(2, section = $$props.section);
    		if ("style" in $$props) $$invalidate(3, style = $$props.style);
    		if ("timestamp" in $$props) $$invalidate(4, timestamp = $$props.timestamp);
    		if ("title" in $$props) $$invalidate(5, title = $$props.title);
    		if ("type" in $$props) $$invalidate(6, type = $$props.type);
    		if ("$$scope" in $$props) $$invalidate(10, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		Card,
    		className,
    		href,
    		media,
    		section,
    		style,
    		timestamp,
    		title,
    		type,
    		baseClass
    	});

    	$$self.$inject_state = $$props => {
    		if ("className" in $$props) $$invalidate(8, className = $$props.className);
    		if ("href" in $$props) $$invalidate(0, href = $$props.href);
    		if ("media" in $$props) $$invalidate(1, media = $$props.media);
    		if ("section" in $$props) $$invalidate(2, section = $$props.section);
    		if ("style" in $$props) $$invalidate(3, style = $$props.style);
    		if ("timestamp" in $$props) $$invalidate(4, timestamp = $$props.timestamp);
    		if ("title" in $$props) $$invalidate(5, title = $$props.title);
    		if ("type" in $$props) $$invalidate(6, type = $$props.type);
    		if ("baseClass" in $$props) $$invalidate(7, baseClass = $$props.baseClass);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		href,
    		media,
    		section,
    		style,
    		timestamp,
    		title,
    		type,
    		baseClass,
    		className,
    		slots,
    		$$scope
    	];
    }

    class ArticleCard extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$7, create_fragment$7, safe_not_equal, {
    			className: 8,
    			href: 0,
    			media: 1,
    			section: 2,
    			style: 3,
    			timestamp: 4,
    			title: 5,
    			type: 6
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "ArticleCard",
    			options,
    			id: create_fragment$7.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*title*/ ctx[5] === undefined && !("title" in props)) {
    			console.warn("<ArticleCard> was created without expected prop 'title'");
    		}
    	}

    	get className() {
    		throw new Error("<ArticleCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set className(value) {
    		throw new Error("<ArticleCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get href() {
    		throw new Error("<ArticleCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set href(value) {
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

    	get title() {
    		throw new Error("<ArticleCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set title(value) {
    		throw new Error("<ArticleCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get type() {
    		throw new Error("<ArticleCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set type(value) {
    		throw new Error("<ArticleCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* documentation/components/ArticleCard.svelte generated by Svelte v3.32.2 */
    const file$7 = "documentation/components/ArticleCard.svelte";

    function create_fragment$8(ctx) {
    	let div2;
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
    	let prism2;
    	let t7;
    	let articlecard1;
    	let t8;
    	let prism3;
    	let t9;
    	let articlecard2;
    	let t10;
    	let prism4;
    	let t11;
    	let articlecard3;
    	let t12;
    	let prism5;
    	let t13;
    	let div0;
    	let articlecard4;
    	let t14;
    	let articlecard5;
    	let t15;
    	let div1;
    	let articlecard6;
    	let t16;
    	let articlecard7;
    	let t17;
    	let articlecard8;
    	let current;

    	prism0 = new Prism$1({
    			props: {
    				language: "js",
    				source: `
    import ArticleCard from '../../src/_components/articlecard';
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
    export let href: string = undefined;
    export let media: Partial<IMediaOptions> = undefined;
    export let section: string = undefined;
    export let style: string = undefined;
    export let timestamp: string = undefined;
    export let title: string;
    export let type: string = undefined;
  `
    			},
    			$$inline: true
    		});

    	const articlecard0_spread_levels = [/*article*/ ctx[0]];
    	let articlecard0_props = {};

    	for (let i = 0; i < articlecard0_spread_levels.length; i += 1) {
    		articlecard0_props = assign(articlecard0_props, articlecard0_spread_levels[i]);
    	}

    	articlecard0 = new ArticleCard({
    			props: articlecard0_props,
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
      timestamp: '2 timer siden',
      title: 'List element',
    };
    `
    			},
    			$$inline: true
    		});

    	articlecard1 = new ArticleCard({
    			props: {
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

    	const articlecard2_spread_levels = [
    		/*article*/ ctx[0],
    		{ title: "Small media card list element" },
    		{ type: "small-media" }
    	];

    	let articlecard2_props = {};

    	for (let i = 0; i < articlecard2_spread_levels.length; i += 1) {
    		articlecard2_props = assign(articlecard2_props, articlecard2_spread_levels[i]);
    	}

    	articlecard2 = new ArticleCard({
    			props: articlecard2_props,
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

    	const articlecard3_spread_levels = [
    		/*article*/ ctx[0],
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

    	let articlecard3_props = {};

    	for (let i = 0; i < articlecard3_spread_levels.length; i += 1) {
    		articlecard3_props = assign(articlecard3_props, articlecard3_spread_levels[i]);
    	}

    	articlecard3 = new ArticleCard({
    			props: articlecard3_props,
    			$$inline: true
    		});

    	prism5 = new Prism$1({
    			props: {
    				language: "html",
    				source: `
    <ArticleCard {...article} media="{{
      height: '115',
      src: 'https://via.placeholder.com/200x112&text=200x112',
      width: '200',
    }}" title="Small media reverse card list element" type="small-media--reverse" />
  `
    			},
    			$$inline: true
    		});

    	const articlecard4_spread_levels = [/*article*/ ctx[0]];
    	let articlecard4_props = {};

    	for (let i = 0; i < articlecard4_spread_levels.length; i += 1) {
    		articlecard4_props = assign(articlecard4_props, articlecard4_spread_levels[i]);
    	}

    	articlecard4 = new ArticleCard({
    			props: articlecard4_props,
    			$$inline: true
    		});

    	const articlecard5_spread_levels = [/*article*/ ctx[0]];
    	let articlecard5_props = {};

    	for (let i = 0; i < articlecard5_spread_levels.length; i += 1) {
    		articlecard5_props = assign(articlecard5_props, articlecard5_spread_levels[i]);
    	}

    	articlecard5 = new ArticleCard({
    			props: articlecard5_props,
    			$$inline: true
    		});

    	const articlecard6_spread_levels = [/*article*/ ctx[0]];
    	let articlecard6_props = {};

    	for (let i = 0; i < articlecard6_spread_levels.length; i += 1) {
    		articlecard6_props = assign(articlecard6_props, articlecard6_spread_levels[i]);
    	}

    	articlecard6 = new ArticleCard({
    			props: articlecard6_props,
    			$$inline: true
    		});

    	const articlecard7_spread_levels = [/*article*/ ctx[0]];
    	let articlecard7_props = {};

    	for (let i = 0; i < articlecard7_spread_levels.length; i += 1) {
    		articlecard7_props = assign(articlecard7_props, articlecard7_spread_levels[i]);
    	}

    	articlecard7 = new ArticleCard({
    			props: articlecard7_props,
    			$$inline: true
    		});

    	const articlecard8_spread_levels = [/*article*/ ctx[0]];
    	let articlecard8_props = {};

    	for (let i = 0; i < articlecard8_spread_levels.length; i += 1) {
    		articlecard8_props = assign(articlecard8_props, articlecard8_spread_levels[i]);
    	}

    	articlecard8 = new ArticleCard({
    			props: articlecard8_props,
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			div2 = element("div");
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
    			create_component(prism2.$$.fragment);
    			t7 = space();
    			create_component(articlecard1.$$.fragment);
    			t8 = space();
    			create_component(prism3.$$.fragment);
    			t9 = space();
    			create_component(articlecard2.$$.fragment);
    			t10 = space();
    			create_component(prism4.$$.fragment);
    			t11 = space();
    			create_component(articlecard3.$$.fragment);
    			t12 = space();
    			create_component(prism5.$$.fragment);
    			t13 = space();
    			div0 = element("div");
    			create_component(articlecard4.$$.fragment);
    			t14 = space();
    			create_component(articlecard5.$$.fragment);
    			t15 = space();
    			div1 = element("div");
    			create_component(articlecard6.$$.fragment);
    			t16 = space();
    			create_component(articlecard7.$$.fragment);
    			t17 = space();
    			create_component(articlecard8.$$.fragment);
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$7, 14, 2, 358);
    			add_location(p, file$7, 21, 2, 517);
    			attr_dev(div0, "class", "flex");
    			add_location(div0, file$7, 103, 2, 2622);
    			attr_dev(div1, "class", "flex");
    			add_location(div1, file$7, 107, 2, 2718);
    			attr_dev(div2, "class", "grid-width--small");
    			add_location(div2, file$7, 13, 0, 324);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div2, anchor);
    			append_dev(div2, h1);
    			append_dev(div2, t1);
    			mount_component(prism0, div2, null);
    			append_dev(div2, t2);
    			append_dev(div2, p);
    			append_dev(div2, t4);
    			mount_component(prism1, div2, null);
    			append_dev(div2, t5);
    			mount_component(articlecard0, div2, null);
    			append_dev(div2, t6);
    			mount_component(prism2, div2, null);
    			append_dev(div2, t7);
    			mount_component(articlecard1, div2, null);
    			append_dev(div2, t8);
    			mount_component(prism3, div2, null);
    			append_dev(div2, t9);
    			mount_component(articlecard2, div2, null);
    			append_dev(div2, t10);
    			mount_component(prism4, div2, null);
    			append_dev(div2, t11);
    			mount_component(articlecard3, div2, null);
    			append_dev(div2, t12);
    			mount_component(prism5, div2, null);
    			append_dev(div2, t13);
    			append_dev(div2, div0);
    			mount_component(articlecard4, div0, null);
    			append_dev(div0, t14);
    			mount_component(articlecard5, div0, null);
    			append_dev(div2, t15);
    			append_dev(div2, div1);
    			mount_component(articlecard6, div1, null);
    			append_dev(div1, t16);
    			mount_component(articlecard7, div1, null);
    			append_dev(div1, t17);
    			mount_component(articlecard8, div1, null);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const articlecard0_changes = (dirty & /*article*/ 1)
    			? get_spread_update(articlecard0_spread_levels, [get_spread_object(/*article*/ ctx[0])])
    			: {};

    			articlecard0.$set(articlecard0_changes);

    			const articlecard2_changes = (dirty & /*article*/ 1)
    			? get_spread_update(articlecard2_spread_levels, [
    					get_spread_object(/*article*/ ctx[0]),
    					articlecard2_spread_levels[1],
    					articlecard2_spread_levels[2]
    				])
    			: {};

    			articlecard2.$set(articlecard2_changes);

    			const articlecard3_changes = (dirty & /*article*/ 1)
    			? get_spread_update(articlecard3_spread_levels, [
    					get_spread_object(/*article*/ ctx[0]),
    					articlecard3_spread_levels[1],
    					articlecard3_spread_levels[2],
    					articlecard3_spread_levels[3]
    				])
    			: {};

    			articlecard3.$set(articlecard3_changes);

    			const articlecard4_changes = (dirty & /*article*/ 1)
    			? get_spread_update(articlecard4_spread_levels, [get_spread_object(/*article*/ ctx[0])])
    			: {};

    			articlecard4.$set(articlecard4_changes);

    			const articlecard5_changes = (dirty & /*article*/ 1)
    			? get_spread_update(articlecard5_spread_levels, [get_spread_object(/*article*/ ctx[0])])
    			: {};

    			articlecard5.$set(articlecard5_changes);

    			const articlecard6_changes = (dirty & /*article*/ 1)
    			? get_spread_update(articlecard6_spread_levels, [get_spread_object(/*article*/ ctx[0])])
    			: {};

    			articlecard6.$set(articlecard6_changes);

    			const articlecard7_changes = (dirty & /*article*/ 1)
    			? get_spread_update(articlecard7_spread_levels, [get_spread_object(/*article*/ ctx[0])])
    			: {};

    			articlecard7.$set(articlecard7_changes);

    			const articlecard8_changes = (dirty & /*article*/ 1)
    			? get_spread_update(articlecard8_spread_levels, [get_spread_object(/*article*/ ctx[0])])
    			: {};

    			articlecard8.$set(articlecard8_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism0.$$.fragment, local);
    			transition_in(prism1.$$.fragment, local);
    			transition_in(articlecard0.$$.fragment, local);
    			transition_in(prism2.$$.fragment, local);
    			transition_in(articlecard1.$$.fragment, local);
    			transition_in(prism3.$$.fragment, local);
    			transition_in(articlecard2.$$.fragment, local);
    			transition_in(prism4.$$.fragment, local);
    			transition_in(articlecard3.$$.fragment, local);
    			transition_in(prism5.$$.fragment, local);
    			transition_in(articlecard4.$$.fragment, local);
    			transition_in(articlecard5.$$.fragment, local);
    			transition_in(articlecard6.$$.fragment, local);
    			transition_in(articlecard7.$$.fragment, local);
    			transition_in(articlecard8.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism0.$$.fragment, local);
    			transition_out(prism1.$$.fragment, local);
    			transition_out(articlecard0.$$.fragment, local);
    			transition_out(prism2.$$.fragment, local);
    			transition_out(articlecard1.$$.fragment, local);
    			transition_out(prism3.$$.fragment, local);
    			transition_out(articlecard2.$$.fragment, local);
    			transition_out(prism4.$$.fragment, local);
    			transition_out(articlecard3.$$.fragment, local);
    			transition_out(prism5.$$.fragment, local);
    			transition_out(articlecard4.$$.fragment, local);
    			transition_out(articlecard5.$$.fragment, local);
    			transition_out(articlecard6.$$.fragment, local);
    			transition_out(articlecard7.$$.fragment, local);
    			transition_out(articlecard8.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div2);
    			destroy_component(prism0);
    			destroy_component(prism1);
    			destroy_component(articlecard0);
    			destroy_component(prism2);
    			destroy_component(articlecard1);
    			destroy_component(prism3);
    			destroy_component(articlecard2);
    			destroy_component(prism4);
    			destroy_component(articlecard3);
    			destroy_component(prism5);
    			destroy_component(articlecard4);
    			destroy_component(articlecard5);
    			destroy_component(articlecard6);
    			destroy_component(articlecard7);
    			destroy_component(articlecard8);
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
    	validate_slots("ArticleCard", slots, []);

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
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ArticleCard> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ Prism: Prism$1, ArticleCard, article });

    	$$self.$inject_state = $$props => {
    		if ("article" in $$props) $$invalidate(0, article = $$props.article);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [article];
    }

    class ArticleCard_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$8, create_fragment$8, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "ArticleCard_1",
    			options,
    			id: create_fragment$8.name
    		});
    	}
    }

    /* src/_components/badge/Badge.svelte generated by Svelte v3.32.2 */

    const file$8 = "src/_components/badge/Badge.svelte";

    function create_fragment$9(ctx) {
    	let span;
    	let current;
    	const default_slot_template = /*#slots*/ ctx[5].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[4], null);

    	const block = {
    		c: function create() {
    			span = element("span");
    			if (default_slot) default_slot.c();
    			attr_dev(span, "class", /*cssClass*/ ctx[0]);
    			add_location(span, file$8, 20, 0, 474);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, span, anchor);

    			if (default_slot) {
    				default_slot.m(span, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (default_slot) {
    				if (default_slot.p && dirty & /*$$scope*/ 16) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[4], dirty, null, null);
    				}
    			}

    			if (!current || dirty & /*cssClass*/ 1) {
    				attr_dev(span, "class", /*cssClass*/ ctx[0]);
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
    	validate_slots("Badge", slots, ['default']);
    	let { className } = $$props;
    	let cssClass = "badge";

    	if (className) {
    		cssClass = `${cssClass} ${className}`;
    	}

    	let { extension } = $$props;

    	if (extension) {
    		if (typeof extension === "string") {
    			cssClass = `${cssClass} button--${extension}`;
    		} else if (Array.isArray(extension)) {
    			cssClass = `${cssClass} badge--${extension.join(" badge--")}`;
    		}
    	}

    	let { type } = $$props;

    	if (type) {
    		cssClass = `${cssClass} badge--${type}`;
    	}

    	const writable_props = ["className", "extension", "type"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Badge> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("className" in $$props) $$invalidate(1, className = $$props.className);
    		if ("extension" in $$props) $$invalidate(2, extension = $$props.extension);
    		if ("type" in $$props) $$invalidate(3, type = $$props.type);
    		if ("$$scope" in $$props) $$invalidate(4, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({ className, cssClass, extension, type });

    	$$self.$inject_state = $$props => {
    		if ("className" in $$props) $$invalidate(1, className = $$props.className);
    		if ("cssClass" in $$props) $$invalidate(0, cssClass = $$props.cssClass);
    		if ("extension" in $$props) $$invalidate(2, extension = $$props.extension);
    		if ("type" in $$props) $$invalidate(3, type = $$props.type);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [cssClass, className, extension, type, $$scope, slots];
    }

    class Badge extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$9, create_fragment$9, safe_not_equal, { className: 1, extension: 2, type: 3 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Badge",
    			options,
    			id: create_fragment$9.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*className*/ ctx[1] === undefined && !("className" in props)) {
    			console.warn("<Badge> was created without expected prop 'className'");
    		}

    		if (/*extension*/ ctx[2] === undefined && !("extension" in props)) {
    			console.warn("<Badge> was created without expected prop 'extension'");
    		}

    		if (/*type*/ ctx[3] === undefined && !("type" in props)) {
    			console.warn("<Badge> was created without expected prop 'type'");
    		}
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

    	get type() {
    		throw new Error("<Badge>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set type(value) {
    		throw new Error("<Badge>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* documentation/components/Badge.svelte generated by Svelte v3.32.2 */
    const file$9 = "documentation/components/Badge.svelte";

    // (16:2) <Badge className="margin-s">
    function create_default_slot_11(ctx) {
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
    		id: create_default_slot_11.name,
    		type: "slot",
    		source: "(16:2) <Badge className=\\\"margin-s\\\">",
    		ctx
    	});

    	return block;
    }

    // (29:2) <Badge className="margin-s" type="primary">
    function create_default_slot_10(ctx) {
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
    		id: create_default_slot_10.name,
    		type: "slot",
    		source: "(29:2) <Badge className=\\\"margin-s\\\" type=\\\"primary\\\">",
    		ctx
    	});

    	return block;
    }

    // (30:2) <Badge className="margin-s" type="secondary">
    function create_default_slot_9(ctx) {
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
    		id: create_default_slot_9.name,
    		type: "slot",
    		source: "(30:2) <Badge className=\\\"margin-s\\\" type=\\\"secondary\\\">",
    		ctx
    	});

    	return block;
    }

    // (31:2) <Badge className="margin-s" type="success">
    function create_default_slot_8(ctx) {
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
    		id: create_default_slot_8.name,
    		type: "slot",
    		source: "(31:2) <Badge className=\\\"margin-s\\\" type=\\\"success\\\">",
    		ctx
    	});

    	return block;
    }

    // (32:2) <Badge className="margin-s" type="danger">
    function create_default_slot_7(ctx) {
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
    		id: create_default_slot_7.name,
    		type: "slot",
    		source: "(32:2) <Badge className=\\\"margin-s\\\" type=\\\"danger\\\">",
    		ctx
    	});

    	return block;
    }

    // (49:2) <Badge href="#" className="margin-s bg--bluedark">
    function create_default_slot_6(ctx) {
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
    		id: create_default_slot_6.name,
    		type: "slot",
    		source: "(49:2) <Badge href=\\\"#\\\" className=\\\"margin-s bg--bluedark\\\">",
    		ctx
    	});

    	return block;
    }

    // (50:2) <Badge href="#" className="margin-s bg--green">
    function create_default_slot_5(ctx) {
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
    		id: create_default_slot_5.name,
    		type: "slot",
    		source: "(50:2) <Badge href=\\\"#\\\" className=\\\"margin-s bg--green\\\">",
    		ctx
    	});

    	return block;
    }

    // (51:2) <Badge href="#" className="margin-s bg--greendark">
    function create_default_slot_4(ctx) {
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
    		id: create_default_slot_4.name,
    		type: "slot",
    		source: "(51:2) <Badge href=\\\"#\\\" className=\\\"margin-s bg--greendark\\\">",
    		ctx
    	});

    	return block;
    }

    // (68:2) <Badge className="text-transform--uppercase">
    function create_default_slot_3(ctx) {
    	let small;

    	const block = {
    		c: function create() {
    			small = element("small");
    			small.textContent = "Small text uppercase";
    			add_location(small, file$9, 67, 47, 1953);
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
    		id: create_default_slot_3.name,
    		type: "slot",
    		source: "(68:2) <Badge className=\\\"text-transform--uppercase\\\">",
    		ctx
    	});

    	return block;
    }

    // (69:2) <Badge className="bg--native">
    function create_default_slot_2$1(ctx) {
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
    		id: create_default_slot_2$1.name,
    		type: "slot",
    		source: "(69:2) <Badge className=\\\"bg--native\\\">",
    		ctx
    	});

    	return block;
    }

    // (70:2) <Badge className="badge--small bg--greendark fontsize-xsmall">
    function create_default_slot_1$1(ctx) {
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
    		id: create_default_slot_1$1.name,
    		type: "slot",
    		source: "(70:2) <Badge className=\\\"badge--small bg--greendark fontsize-xsmall\\\">",
    		ctx
    	});

    	return block;
    }

    // (71:2) <Badge>
    function create_default_slot$2(ctx) {
    	let t;
    	let i;

    	const block = {
    		c: function create() {
    			t = text("Badge with icon ");
    			i = element("i");
    			attr_dev(i, "class", "fa fal fa-trash");
    			add_location(i, file$9, 70, 25, 2158);
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
    		id: create_default_slot$2.name,
    		type: "slot",
    		source: "(71:2) <Badge>",
    		ctx
    	});

    	return block;
    }

    function create_fragment$a(ctx) {
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
    	let current;

    	prism0 = new Prism$1({
    			props: {
    				language: "js",
    				source: `import Badge from './src/_components/badge/Badge.svelte';`
    			},
    			$$inline: true
    		});

    	badge0 = new Badge({
    			props: {
    				className: "margin-s",
    				$$slots: { default: [create_default_slot_11] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism1 = new Prism$1({
    			props: {
    				language,
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
    				$$slots: { default: [create_default_slot_10] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	badge2 = new Badge({
    			props: {
    				className: "margin-s",
    				type: "secondary",
    				$$slots: { default: [create_default_slot_9] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	badge3 = new Badge({
    			props: {
    				className: "margin-s",
    				type: "success",
    				$$slots: { default: [create_default_slot_8] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	badge4 = new Badge({
    			props: {
    				className: "margin-s",
    				type: "danger",
    				$$slots: { default: [create_default_slot_7] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism2 = new Prism$1({
    			props: {
    				language,
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
    				className: "margin-s bg--bluedark",
    				$$slots: { default: [create_default_slot_6] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	badge6 = new Badge({
    			props: {
    				href: "#",
    				className: "margin-s bg--green",
    				$$slots: { default: [create_default_slot_5] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	badge7 = new Badge({
    			props: {
    				href: "#",
    				className: "margin-s bg--greendark",
    				$$slots: { default: [create_default_slot_4] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism3 = new Prism$1({
    			props: {
    				language,
    				source: `
  <div class="margin-l--tb">
    <Badge href="#" className="margin-s bg--bluedark">Bandekriminialitet</Badge>
    <Badge href="#" className="margin-s bg--green">Sport</Badge>
    <Badge href="#" className="margin-s bg--greendark">Nicklas Bendtner</Badge>
  </div>
  `
    			},
    			$$inline: true
    		});

    	badge8 = new Badge({
    			props: {
    				className: "text-transform--uppercase",
    				$$slots: { default: [create_default_slot_3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	badge9 = new Badge({
    			props: {
    				className: "bg--native",
    				$$slots: { default: [create_default_slot_2$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	badge10 = new Badge({
    			props: {
    				className: "badge--small bg--greendark fontsize-xsmall",
    				$$slots: { default: [create_default_slot_1$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	badge11 = new Badge({
    			props: {
    				$$slots: { default: [create_default_slot$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism4 = new Prism$1({
    			props: {
    				language,
    				source: `
  <div class="margin-l--tb">
    <Badge className="text-transform--uppercase"><small>Small text uppercase</small></Badge>
    <Badge className="bg--native">Native</Badge>
    <Badge className="badge--small bg--greendark fontsize-xsmall">Greendark xsmall</Badge>
    <Badge>Badge with icon <i class="fa fal fa-trash" /></Badge>
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
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$9, 8, 0, 136);
    			add_location(p0, file$9, 10, 0, 170);
    			attr_dev(div0, "class", "margin-l--tb");
    			add_location(div0, file$9, 14, 0, 386);
    			add_location(p1, file$9, 26, 0, 607);
    			attr_dev(div1, "class", "margin-l--tb");
    			add_location(div1, file$9, 27, 0, 636);
    			add_location(p2, file$9, 46, 0, 1250);
    			attr_dev(div2, "class", "margin-l--tb");
    			add_location(div2, file$9, 47, 0, 1282);
    			add_location(p3, file$9, 64, 0, 1842);
    			attr_dev(div3, "class", "margin-l--tb");
    			add_location(div3, file$9, 66, 0, 1879);
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
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const badge0_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				badge0_changes.$$scope = { dirty, ctx };
    			}

    			badge0.$set(badge0_changes);
    			const badge1_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				badge1_changes.$$scope = { dirty, ctx };
    			}

    			badge1.$set(badge1_changes);
    			const badge2_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				badge2_changes.$$scope = { dirty, ctx };
    			}

    			badge2.$set(badge2_changes);
    			const badge3_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				badge3_changes.$$scope = { dirty, ctx };
    			}

    			badge3.$set(badge3_changes);
    			const badge4_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				badge4_changes.$$scope = { dirty, ctx };
    			}

    			badge4.$set(badge4_changes);
    			const badge5_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				badge5_changes.$$scope = { dirty, ctx };
    			}

    			badge5.$set(badge5_changes);
    			const badge6_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				badge6_changes.$$scope = { dirty, ctx };
    			}

    			badge6.$set(badge6_changes);
    			const badge7_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				badge7_changes.$$scope = { dirty, ctx };
    			}

    			badge7.$set(badge7_changes);
    			const badge8_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				badge8_changes.$$scope = { dirty, ctx };
    			}

    			badge8.$set(badge8_changes);
    			const badge9_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				badge9_changes.$$scope = { dirty, ctx };
    			}

    			badge9.$set(badge9_changes);
    			const badge10_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				badge10_changes.$$scope = { dirty, ctx };
    			}

    			badge10.$set(badge10_changes);
    			const badge11_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				badge11_changes.$$scope = { dirty, ctx };
    			}

    			badge11.$set(badge11_changes);
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

    const language = "html";

    function instance$a($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Badge", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Badge> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ Prism: Prism$1, Badge, language });
    	return [];
    }

    class Badge_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$a, create_fragment$a, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Badge_1",
    			options,
    			id: create_fragment$a.name
    		});
    	}
    }

    /* src/_components/button/Button.svelte generated by Svelte v3.32.2 */

    const file$a = "src/_components/button/Button.svelte";

    function create_fragment$b(ctx) {
    	let button;
    	let current;
    	let mounted;
    	let dispose;
    	const default_slot_template = /*#slots*/ ctx[8].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[7], null);

    	const block = {
    		c: function create() {
    			button = element("button");
    			if (default_slot) default_slot.c();
    			attr_dev(button, "class", /*cssClass*/ ctx[3]);
    			button.disabled = /*disabled*/ ctx[1];
    			attr_dev(button, "data-selected", /*selected*/ ctx[2]);
    			add_location(button, file$a, 23, 0, 554);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, button, anchor);

    			if (default_slot) {
    				default_slot.m(button, null);
    			}

    			current = true;

    			if (!mounted) {
    				dispose = listen_dev(
    					button,
    					"click",
    					function () {
    						if (is_function(/*click*/ ctx[0])) /*click*/ ctx[0].apply(this, arguments);
    					},
    					false,
    					false,
    					false
    				);

    				mounted = true;
    			}
    		},
    		p: function update(new_ctx, [dirty]) {
    			ctx = new_ctx;

    			if (default_slot) {
    				if (default_slot.p && dirty & /*$$scope*/ 128) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[7], dirty, null, null);
    				}
    			}

    			if (!current || dirty & /*cssClass*/ 8) {
    				attr_dev(button, "class", /*cssClass*/ ctx[3]);
    			}

    			if (!current || dirty & /*disabled*/ 2) {
    				prop_dev(button, "disabled", /*disabled*/ ctx[1]);
    			}

    			if (!current || dirty & /*selected*/ 4) {
    				attr_dev(button, "data-selected", /*selected*/ ctx[2]);
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
    			if (detaching) detach_dev(button);
    			if (default_slot) default_slot.d(detaching);
    			mounted = false;
    			dispose();
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
    	validate_slots("Button", slots, ['default']);
    	let { className } = $$props;
    	let { click } = $$props;
    	let { disabled = false } = $$props;
    	let { selected = false } = $$props;
    	let cssClass = "button";

    	if (className) {
    		cssClass = `${cssClass} ${className}`;
    	}

    	let { extension } = $$props;

    	if (extension) {
    		if (typeof extension === "string") {
    			cssClass = `${cssClass} button--${extension}`;
    		} else if (Array.isArray(extension)) {
    			cssClass = `${cssClass} button--${extension.join(" button--")}`;
    		}
    	}

    	let { type } = $$props;

    	if (type) {
    		cssClass = `${cssClass} button--${type}`;
    	}

    	const writable_props = ["className", "click", "disabled", "selected", "extension", "type"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Button> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("className" in $$props) $$invalidate(4, className = $$props.className);
    		if ("click" in $$props) $$invalidate(0, click = $$props.click);
    		if ("disabled" in $$props) $$invalidate(1, disabled = $$props.disabled);
    		if ("selected" in $$props) $$invalidate(2, selected = $$props.selected);
    		if ("extension" in $$props) $$invalidate(5, extension = $$props.extension);
    		if ("type" in $$props) $$invalidate(6, type = $$props.type);
    		if ("$$scope" in $$props) $$invalidate(7, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		className,
    		click,
    		disabled,
    		selected,
    		cssClass,
    		extension,
    		type
    	});

    	$$self.$inject_state = $$props => {
    		if ("className" in $$props) $$invalidate(4, className = $$props.className);
    		if ("click" in $$props) $$invalidate(0, click = $$props.click);
    		if ("disabled" in $$props) $$invalidate(1, disabled = $$props.disabled);
    		if ("selected" in $$props) $$invalidate(2, selected = $$props.selected);
    		if ("cssClass" in $$props) $$invalidate(3, cssClass = $$props.cssClass);
    		if ("extension" in $$props) $$invalidate(5, extension = $$props.extension);
    		if ("type" in $$props) $$invalidate(6, type = $$props.type);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		click,
    		disabled,
    		selected,
    		cssClass,
    		className,
    		extension,
    		type,
    		$$scope,
    		slots
    	];
    }

    class Button extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$b, create_fragment$b, safe_not_equal, {
    			className: 4,
    			click: 0,
    			disabled: 1,
    			selected: 2,
    			extension: 5,
    			type: 6
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Button",
    			options,
    			id: create_fragment$b.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*className*/ ctx[4] === undefined && !("className" in props)) {
    			console.warn("<Button> was created without expected prop 'className'");
    		}

    		if (/*click*/ ctx[0] === undefined && !("click" in props)) {
    			console.warn("<Button> was created without expected prop 'click'");
    		}

    		if (/*extension*/ ctx[5] === undefined && !("extension" in props)) {
    			console.warn("<Button> was created without expected prop 'extension'");
    		}

    		if (/*type*/ ctx[6] === undefined && !("type" in props)) {
    			console.warn("<Button> was created without expected prop 'type'");
    		}
    	}

    	get className() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set className(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get click() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set click(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get disabled() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set disabled(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get selected() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set selected(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get extension() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set extension(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get type() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set type(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* documentation/components/Button.svelte generated by Svelte v3.32.2 */
    const file$b = "documentation/components/Button.svelte";

    // (11:0) <Button>
    function create_default_slot_21(ctx) {
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
    		id: create_default_slot_21.name,
    		type: "slot",
    		source: "(11:0) <Button>",
    		ctx
    	});

    	return block;
    }

    // (29:2) <Button className="margin-m" extension="solid">
    function create_default_slot_20(ctx) {
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
    		id: create_default_slot_20.name,
    		type: "slot",
    		source: "(29:2) <Button className=\\\"margin-m\\\" extension=\\\"solid\\\">",
    		ctx
    	});

    	return block;
    }

    // (30:2) <Button className="margin-m" extension="link">
    function create_default_slot_19(ctx) {
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
    		id: create_default_slot_19.name,
    		type: "slot",
    		source: "(30:2) <Button className=\\\"margin-m\\\" extension=\\\"link\\\">",
    		ctx
    	});

    	return block;
    }

    // (31:2) <Button className="margin-m" extension="icon">
    function create_default_slot_18(ctx) {
    	let span;

    	const block = {
    		c: function create() {
    			span = element("span");
    			span.textContent = "×";
    			set_style(span, "font-size", "30px");
    			add_location(span, file$b, 31, 4, 770);
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
    		id: create_default_slot_18.name,
    		type: "slot",
    		source: "(31:2) <Button className=\\\"margin-m\\\" extension=\\\"icon\\\">",
    		ctx
    	});

    	return block;
    }

    // (34:2) <Button className="margin-m" extension="big">
    function create_default_slot_17(ctx) {
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
    		id: create_default_slot_17.name,
    		type: "slot",
    		source: "(34:2) <Button className=\\\"margin-m\\\" extension=\\\"big\\\">",
    		ctx
    	});

    	return block;
    }

    // (35:2) <Button className="margin-m" extension="small">
    function create_default_slot_16(ctx) {
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
    		id: create_default_slot_16.name,
    		type: "slot",
    		source: "(35:2) <Button className=\\\"margin-m\\\" extension=\\\"small\\\">",
    		ctx
    	});

    	return block;
    }

    // (52:2) <Button className="margin-m" extension={['big', 'solid']}>
    function create_default_slot_15(ctx) {
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
    		id: create_default_slot_15.name,
    		type: "slot",
    		source: "(52:2) <Button className=\\\"margin-m\\\" extension={['big', 'solid']}>",
    		ctx
    	});

    	return block;
    }

    // (53:2) <Button className="margin-m" extension={['big', 'link']}>
    function create_default_slot_14(ctx) {
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
    		id: create_default_slot_14.name,
    		type: "slot",
    		source: "(53:2) <Button className=\\\"margin-m\\\" extension={['big', 'link']}>",
    		ctx
    	});

    	return block;
    }

    // (54:2) <Button className="margin-m" extension={['big', 'icon']}>
    function create_default_slot_13(ctx) {
    	let span;

    	const block = {
    		c: function create() {
    			span = element("span");
    			span.textContent = "×";
    			set_style(span, "font-size", "30px");
    			add_location(span, file$b, 54, 4, 1708);
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
    		id: create_default_slot_13.name,
    		type: "slot",
    		source: "(54:2) <Button className=\\\"margin-m\\\" extension={['big', 'icon']}>",
    		ctx
    	});

    	return block;
    }

    // (59:2) <Button className="margin-m" extension={['small', 'solid']}>
    function create_default_slot_12(ctx) {
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
    		id: create_default_slot_12.name,
    		type: "slot",
    		source: "(59:2) <Button className=\\\"margin-m\\\" extension={['small', 'solid']}>",
    		ctx
    	});

    	return block;
    }

    // (60:2) <Button className="margin-m" extension={['small', 'link']}>
    function create_default_slot_11$1(ctx) {
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
    		id: create_default_slot_11$1.name,
    		type: "slot",
    		source: "(60:2) <Button className=\\\"margin-m\\\" extension={['small', 'link']}>",
    		ctx
    	});

    	return block;
    }

    // (61:2) <Button className="margin-m" extension={['small', 'icon']}>
    function create_default_slot_10$1(ctx) {
    	let span;

    	const block = {
    		c: function create() {
    			span = element("span");
    			span.textContent = "×";
    			set_style(span, "font-size", "30px");
    			add_location(span, file$b, 61, 4, 2035);
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
    		id: create_default_slot_10$1.name,
    		type: "slot",
    		source: "(61:2) <Button className=\\\"margin-m\\\" extension={['small', 'icon']}>",
    		ctx
    	});

    	return block;
    }

    // (82:2) <Button className="margin-m" type="primary">
    function create_default_slot_9$1(ctx) {
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
    		id: create_default_slot_9$1.name,
    		type: "slot",
    		source: "(82:2) <Button className=\\\"margin-m\\\" type=\\\"primary\\\">",
    		ctx
    	});

    	return block;
    }

    // (83:2) <Button className="margin-m" type="secondary">
    function create_default_slot_8$1(ctx) {
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
    		id: create_default_slot_8$1.name,
    		type: "slot",
    		source: "(83:2) <Button className=\\\"margin-m\\\" type=\\\"secondary\\\">",
    		ctx
    	});

    	return block;
    }

    // (84:2) <Button className="margin-m" type="accept">
    function create_default_slot_7$1(ctx) {
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
    		id: create_default_slot_7$1.name,
    		type: "slot",
    		source: "(84:2) <Button className=\\\"margin-m\\\" type=\\\"accept\\\">",
    		ctx
    	});

    	return block;
    }

    // (85:2) <Button className="margin-m" type="cancel">
    function create_default_slot_6$1(ctx) {
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
    		id: create_default_slot_6$1.name,
    		type: "slot",
    		source: "(85:2) <Button className=\\\"margin-m\\\" type=\\\"cancel\\\">",
    		ctx
    	});

    	return block;
    }

    // (99:0) <Button className="margin-m">
    function create_default_slot_5$1(ctx) {
    	let span;
    	let t1;
    	let icon;
    	let current;

    	icon = new Icon({
    			props: {
    				className: "icon",
    				name: "medielogin",
    				style: "height:20px;"
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			span = element("span");
    			span.textContent = "button with icon right";
    			t1 = space();
    			create_component(icon.$$.fragment);
    			add_location(span, file$b, 99, 2, 3386);
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
    		id: create_default_slot_5$1.name,
    		type: "slot",
    		source: "(99:0) <Button className=\\\"margin-m\\\">",
    		ctx
    	});

    	return block;
    }

    // (113:0) <Button className="margin-m">
    function create_default_slot_4$1(ctx) {
    	let icon;
    	let t0;
    	let span;
    	let current;

    	icon = new Icon({
    			props: {
    				className: "icon",
    				name: "angle_left_pro",
    				style: "height:20px;"
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(icon.$$.fragment);
    			t0 = space();
    			span = element("span");
    			span.textContent = "button with icon left";
    			add_location(span, file$b, 114, 2, 3796);
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
    		id: create_default_slot_4$1.name,
    		type: "slot",
    		source: "(113:0) <Button className=\\\"margin-m\\\">",
    		ctx
    	});

    	return block;
    }

    // (127:0) <Button className="margin-m" extension="icon">
    function create_default_slot_3$1(ctx) {
    	let span;

    	const block = {
    		c: function create() {
    			span = element("span");
    			span.textContent = "×";
    			set_style(span, "font-size", "30px");
    			add_location(span, file$b, 127, 2, 4088);
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
    		id: create_default_slot_3$1.name,
    		type: "slot",
    		source: "(127:0) <Button className=\\\"margin-m\\\" extension=\\\"icon\\\">",
    		ctx
    	});

    	return block;
    }

    // (130:0) <Button className="margin-m" extension={['icon', 'solid', 'small']}>
    function create_default_slot_2$2(ctx) {
    	let span;

    	const block = {
    		c: function create() {
    			span = element("span");
    			span.textContent = "×";
    			set_style(span, "font-size", "30px");
    			add_location(span, file$b, 130, 2, 4214);
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
    		id: create_default_slot_2$2.name,
    		type: "slot",
    		source: "(130:0) <Button className=\\\"margin-m\\\" extension={['icon', 'solid', 'small']}>",
    		ctx
    	});

    	return block;
    }

    // (133:0) <Button className="margin-m" extension={['icon', 'solid']}>
    function create_default_slot_1$2(ctx) {
    	let span;

    	const block = {
    		c: function create() {
    			span = element("span");
    			span.textContent = "×";
    			set_style(span, "font-size", "30px");
    			add_location(span, file$b, 133, 2, 4331);
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
    		id: create_default_slot_1$2.name,
    		type: "slot",
    		source: "(133:0) <Button className=\\\"margin-m\\\" extension={['icon', 'solid']}>",
    		ctx
    	});

    	return block;
    }

    // (136:0) <Button className="margin-m" extension={['icon', 'solid', 'big']}>
    function create_default_slot$3(ctx) {
    	let span;

    	const block = {
    		c: function create() {
    			span = element("span");
    			span.textContent = "×";
    			set_style(span, "font-size", "40px");
    			add_location(span, file$b, 136, 2, 4455);
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
    		id: create_default_slot$3.name,
    		type: "slot",
    		source: "(136:0) <Button className=\\\"margin-m\\\" extension={['icon', 'solid', 'big']}>",
    		ctx
    	});

    	return block;
    }

    function create_fragment$c(ctx) {
    	let h1;
    	let t1;
    	let prism0;
    	let t2;
    	let button0;
    	let t3;
    	let prism1;
    	let t4;
    	let h30;
    	let t6;
    	let p0;
    	let t8;
    	let ul;
    	let li0;
    	let t10;
    	let li1;
    	let t12;
    	let li2;
    	let t14;
    	let li3;
    	let t16;
    	let li4;
    	let t18;
    	let div0;
    	let button1;
    	let t19;
    	let button2;
    	let t20;
    	let button3;
    	let t21;
    	let button4;
    	let t22;
    	let button5;
    	let t23;
    	let prism2;
    	let t24;
    	let h31;
    	let t26;
    	let p1;
    	let b0;
    	let t28;
    	let b1;
    	let t30;
    	let t31;
    	let div1;
    	let button6;
    	let t32;
    	let button7;
    	let t33;
    	let button8;
    	let t34;
    	let div2;
    	let button9;
    	let t35;
    	let button10;
    	let t36;
    	let button11;
    	let t37;
    	let prism3;
    	let t38;
    	let h32;
    	let t40;
    	let div3;
    	let button12;
    	let t41;
    	let button13;
    	let t42;
    	let button14;
    	let t43;
    	let button15;
    	let t44;
    	let prism4;
    	let t45;
    	let h33;
    	let t47;
    	let button16;
    	let t48;
    	let prism5;
    	let t49;
    	let button17;
    	let t50;
    	let prism6;
    	let t51;
    	let button18;
    	let t52;
    	let button19;
    	let t53;
    	let button20;
    	let t54;
    	let button21;
    	let t55;
    	let prism7;
    	let current;

    	prism0 = new Prism$1({
    			props: {
    				language: "js",
    				source: `import Button from './src/_components/button/Button.svelte';`
    			},
    			$$inline: true
    		});

    	button0 = new Button({
    			props: {
    				$$slots: { default: [create_default_slot_21] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism1 = new Prism$1({
    			props: {
    				language: language$1,
    				source: `
    <Button>Base button</Button>
  `
    			},
    			$$inline: true
    		});

    	button1 = new Button({
    			props: {
    				className: "margin-m",
    				extension: "solid",
    				$$slots: { default: [create_default_slot_20] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button2 = new Button({
    			props: {
    				className: "margin-m",
    				extension: "link",
    				$$slots: { default: [create_default_slot_19] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button3 = new Button({
    			props: {
    				className: "margin-m",
    				extension: "icon",
    				$$slots: { default: [create_default_slot_18] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button4 = new Button({
    			props: {
    				className: "margin-m",
    				extension: "big",
    				$$slots: { default: [create_default_slot_17] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button5 = new Button({
    			props: {
    				className: "margin-m",
    				extension: "small",
    				$$slots: { default: [create_default_slot_16] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism2 = new Prism$1({
    			props: {
    				language: language$1,
    				source: `
  <Button className="margin-m" extension="solid">Button solid</Button>
  <Button className="margin-m" extension="link">Button link</Button>
  <Button className="margin-m" extension="icon">
    <span style="font-size: 30px">&times;</span>
  </Button>
  <Button className="margin-m" extension="big">Button big</Button>
  `
    			},
    			$$inline: true
    		});

    	button6 = new Button({
    			props: {
    				className: "margin-m",
    				extension: ["big", "solid"],
    				$$slots: { default: [create_default_slot_15] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button7 = new Button({
    			props: {
    				className: "margin-m",
    				extension: ["big", "link"],
    				$$slots: { default: [create_default_slot_14] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button8 = new Button({
    			props: {
    				className: "margin-m",
    				extension: ["big", "icon"],
    				$$slots: { default: [create_default_slot_13] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button9 = new Button({
    			props: {
    				className: "margin-m",
    				extension: ["small", "solid"],
    				$$slots: { default: [create_default_slot_12] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button10 = new Button({
    			props: {
    				className: "margin-m",
    				extension: ["small", "link"],
    				$$slots: { default: [create_default_slot_11$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button11 = new Button({
    			props: {
    				className: "margin-m",
    				extension: ["small", "icon"],
    				$$slots: { default: [create_default_slot_10$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism3 = new Prism$1({
    			props: {
    				language: language$1,
    				source: `
  <Button className="margin-m" extension="big">Button big</Button>
  <Button className="margin-m" extension="{['big', 'solid']}">Button big solid</Button>
  <Button className="margin-m" extension="{['big', 'link']}">Button big link</Button>
  <Button className="margin-m" extension={['small', 'solid']}>Button small solid</Button>
  <Button className="margin-m" extension={['small', 'link']}>Button small link</Button>
  <Button className="margin-m" extension={['small', 'icon']}>
    <span style="font-size: 30px">&times;</span>
  </Button>
  `
    			},
    			$$inline: true
    		});

    	button12 = new Button({
    			props: {
    				className: "margin-m",
    				type: "primary",
    				$$slots: { default: [create_default_slot_9$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button13 = new Button({
    			props: {
    				className: "margin-m",
    				type: "secondary",
    				$$slots: { default: [create_default_slot_8$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button14 = new Button({
    			props: {
    				className: "margin-m",
    				type: "accept",
    				$$slots: { default: [create_default_slot_7$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button15 = new Button({
    			props: {
    				className: "margin-m",
    				type: "cancel",
    				$$slots: { default: [create_default_slot_6$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism4 = new Prism$1({
    			props: {
    				language: language$1,
    				source: `
  <Button className="margin-m" type="primary">Button primary</Button>
  <Button className="margin-m" type="secondary">Button secondary</Button>
  <Button className="margin-m" type="accept">Button accept</Button>
  <Button className="margin-m" type="cancel">Button cancel</Button>
  `
    			},
    			$$inline: true
    		});

    	button16 = new Button({
    			props: {
    				className: "margin-m",
    				$$slots: { default: [create_default_slot_5$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism5 = new Prism$1({
    			props: {
    				language: language$1,
    				source: `
  <Button className="margin-m">
    <span>button with icon right</span>
    <Icon className="icon" name="medielogin" style="height:20px;" />
  </Button>
  `
    			},
    			$$inline: true
    		});

    	button17 = new Button({
    			props: {
    				className: "margin-m",
    				$$slots: { default: [create_default_slot_4$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism6 = new Prism$1({
    			props: {
    				language: language$1,
    				source: `
  <Button className="margin-m">
    <Icon className="icon" name="angle_left_pro" style="height:20px;" />
    <span>button with icon right</span>
  </Button>
  `
    			},
    			$$inline: true
    		});

    	button18 = new Button({
    			props: {
    				className: "margin-m",
    				extension: "icon",
    				$$slots: { default: [create_default_slot_3$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button19 = new Button({
    			props: {
    				className: "margin-m",
    				extension: ["icon", "solid", "small"],
    				$$slots: { default: [create_default_slot_2$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button20 = new Button({
    			props: {
    				className: "margin-m",
    				extension: ["icon", "solid"],
    				$$slots: { default: [create_default_slot_1$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	button21 = new Button({
    			props: {
    				className: "margin-m",
    				extension: ["icon", "solid", "big"],
    				$$slots: { default: [create_default_slot$3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	prism7 = new Prism$1({
    			props: {
    				language: language$1,
    				source: `
  <Button className="margin-m" extension="icon">
    <span style="font-size: 30px">&times;</span>
  </Button>
  <Button className="margin-m" extension="{['icon', 'solid', 'small']}">
    <span style="font-size: 30px">&times;</span>
  </Button>
  <Button className="margin-m" extension="{['icon', 'solid']}">
    <span style="font-size: 30px">&times;</span>
  </Button>
  <Button className="margin-m" extension="{['icon', 'solid', 'big']}">
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
    			h30 = element("h3");
    			h30.textContent = "extension attribute";
    			t6 = space();
    			p0 = element("p");
    			p0.textContent = "options";
    			t8 = space();
    			ul = element("ul");
    			li0 = element("li");
    			li0.textContent = "solid";
    			t10 = space();
    			li1 = element("li");
    			li1.textContent = "link";
    			t12 = space();
    			li2 = element("li");
    			li2.textContent = "icon";
    			t14 = space();
    			li3 = element("li");
    			li3.textContent = "big";
    			t16 = space();
    			li4 = element("li");
    			li4.textContent = "small";
    			t18 = space();
    			div0 = element("div");
    			create_component(button1.$$.fragment);
    			t19 = space();
    			create_component(button2.$$.fragment);
    			t20 = space();
    			create_component(button3.$$.fragment);
    			t21 = space();
    			create_component(button4.$$.fragment);
    			t22 = space();
    			create_component(button5.$$.fragment);
    			t23 = space();
    			create_component(prism2.$$.fragment);
    			t24 = space();
    			h31 = element("h3");
    			h31.textContent = "extension attribute combinations";
    			t26 = space();
    			p1 = element("p");
    			b0 = element("b");
    			b0.textContent = "big";
    			t28 = text(" and ");
    			b1 = element("b");
    			b1.textContent = "small";
    			t30 = text(" can be combined with the other three extensions");
    			t31 = space();
    			div1 = element("div");
    			create_component(button6.$$.fragment);
    			t32 = space();
    			create_component(button7.$$.fragment);
    			t33 = space();
    			create_component(button8.$$.fragment);
    			t34 = space();
    			div2 = element("div");
    			create_component(button9.$$.fragment);
    			t35 = space();
    			create_component(button10.$$.fragment);
    			t36 = space();
    			create_component(button11.$$.fragment);
    			t37 = space();
    			create_component(prism3.$$.fragment);
    			t38 = space();
    			h32 = element("h3");
    			h32.textContent = "Styles";
    			t40 = space();
    			div3 = element("div");
    			create_component(button12.$$.fragment);
    			t41 = space();
    			create_component(button13.$$.fragment);
    			t42 = space();
    			create_component(button14.$$.fragment);
    			t43 = space();
    			create_component(button15.$$.fragment);
    			t44 = space();
    			create_component(prism4.$$.fragment);
    			t45 = space();
    			h33 = element("h3");
    			h33.textContent = "Buttons with Icon";
    			t47 = space();
    			create_component(button16.$$.fragment);
    			t48 = space();
    			create_component(prism5.$$.fragment);
    			t49 = space();
    			create_component(button17.$$.fragment);
    			t50 = space();
    			create_component(prism6.$$.fragment);
    			t51 = space();
    			create_component(button18.$$.fragment);
    			t52 = space();
    			create_component(button19.$$.fragment);
    			t53 = space();
    			create_component(button20.$$.fragment);
    			t54 = space();
    			create_component(button21.$$.fragment);
    			t55 = space();
    			create_component(prism7.$$.fragment);
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$b, 6, 0, 186);
    			add_location(h30, file$b, 18, 0, 422);
    			add_location(p0, file$b, 19, 0, 451);
    			add_location(li0, file$b, 21, 2, 473);
    			add_location(li1, file$b, 22, 2, 490);
    			add_location(li2, file$b, 23, 2, 506);
    			add_location(li3, file$b, 24, 2, 522);
    			add_location(li4, file$b, 25, 2, 537);
    			add_location(ul, file$b, 20, 0, 466);
    			attr_dev(div0, "class", "flex");
    			add_location(div0, file$b, 27, 0, 558);
    			add_location(h31, file$b, 48, 0, 1330);
    			add_location(b0, file$b, 49, 3, 1375);
    			add_location(b1, file$b, 49, 18, 1390);
    			add_location(p1, file$b, 49, 0, 1372);
    			attr_dev(div1, "class", "flex");
    			add_location(div1, file$b, 50, 0, 1455);
    			attr_dev(div2, "class", "flex");
    			add_location(div2, file$b, 57, 0, 1772);
    			add_location(h32, file$b, 79, 0, 2683);
    			attr_dev(div3, "class", "flex");
    			add_location(div3, file$b, 80, 0, 2699);
    			add_location(h33, file$b, 97, 0, 3327);
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
    			insert_dev(target, h30, anchor);
    			insert_dev(target, t6, anchor);
    			insert_dev(target, p0, anchor);
    			insert_dev(target, t8, anchor);
    			insert_dev(target, ul, anchor);
    			append_dev(ul, li0);
    			append_dev(ul, t10);
    			append_dev(ul, li1);
    			append_dev(ul, t12);
    			append_dev(ul, li2);
    			append_dev(ul, t14);
    			append_dev(ul, li3);
    			append_dev(ul, t16);
    			append_dev(ul, li4);
    			insert_dev(target, t18, anchor);
    			insert_dev(target, div0, anchor);
    			mount_component(button1, div0, null);
    			append_dev(div0, t19);
    			mount_component(button2, div0, null);
    			append_dev(div0, t20);
    			mount_component(button3, div0, null);
    			append_dev(div0, t21);
    			mount_component(button4, div0, null);
    			append_dev(div0, t22);
    			mount_component(button5, div0, null);
    			insert_dev(target, t23, anchor);
    			mount_component(prism2, target, anchor);
    			insert_dev(target, t24, anchor);
    			insert_dev(target, h31, anchor);
    			insert_dev(target, t26, anchor);
    			insert_dev(target, p1, anchor);
    			append_dev(p1, b0);
    			append_dev(p1, t28);
    			append_dev(p1, b1);
    			append_dev(p1, t30);
    			insert_dev(target, t31, anchor);
    			insert_dev(target, div1, anchor);
    			mount_component(button6, div1, null);
    			append_dev(div1, t32);
    			mount_component(button7, div1, null);
    			append_dev(div1, t33);
    			mount_component(button8, div1, null);
    			insert_dev(target, t34, anchor);
    			insert_dev(target, div2, anchor);
    			mount_component(button9, div2, null);
    			append_dev(div2, t35);
    			mount_component(button10, div2, null);
    			append_dev(div2, t36);
    			mount_component(button11, div2, null);
    			insert_dev(target, t37, anchor);
    			mount_component(prism3, target, anchor);
    			insert_dev(target, t38, anchor);
    			insert_dev(target, h32, anchor);
    			insert_dev(target, t40, anchor);
    			insert_dev(target, div3, anchor);
    			mount_component(button12, div3, null);
    			append_dev(div3, t41);
    			mount_component(button13, div3, null);
    			append_dev(div3, t42);
    			mount_component(button14, div3, null);
    			append_dev(div3, t43);
    			mount_component(button15, div3, null);
    			insert_dev(target, t44, anchor);
    			mount_component(prism4, target, anchor);
    			insert_dev(target, t45, anchor);
    			insert_dev(target, h33, anchor);
    			insert_dev(target, t47, anchor);
    			mount_component(button16, target, anchor);
    			insert_dev(target, t48, anchor);
    			mount_component(prism5, target, anchor);
    			insert_dev(target, t49, anchor);
    			mount_component(button17, target, anchor);
    			insert_dev(target, t50, anchor);
    			mount_component(prism6, target, anchor);
    			insert_dev(target, t51, anchor);
    			mount_component(button18, target, anchor);
    			insert_dev(target, t52, anchor);
    			mount_component(button19, target, anchor);
    			insert_dev(target, t53, anchor);
    			mount_component(button20, target, anchor);
    			insert_dev(target, t54, anchor);
    			mount_component(button21, target, anchor);
    			insert_dev(target, t55, anchor);
    			mount_component(prism7, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const button0_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				button0_changes.$$scope = { dirty, ctx };
    			}

    			button0.$set(button0_changes);
    			const button1_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				button1_changes.$$scope = { dirty, ctx };
    			}

    			button1.$set(button1_changes);
    			const button2_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				button2_changes.$$scope = { dirty, ctx };
    			}

    			button2.$set(button2_changes);
    			const button3_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				button3_changes.$$scope = { dirty, ctx };
    			}

    			button3.$set(button3_changes);
    			const button4_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				button4_changes.$$scope = { dirty, ctx };
    			}

    			button4.$set(button4_changes);
    			const button5_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				button5_changes.$$scope = { dirty, ctx };
    			}

    			button5.$set(button5_changes);
    			const button6_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				button6_changes.$$scope = { dirty, ctx };
    			}

    			button6.$set(button6_changes);
    			const button7_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				button7_changes.$$scope = { dirty, ctx };
    			}

    			button7.$set(button7_changes);
    			const button8_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				button8_changes.$$scope = { dirty, ctx };
    			}

    			button8.$set(button8_changes);
    			const button9_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				button9_changes.$$scope = { dirty, ctx };
    			}

    			button9.$set(button9_changes);
    			const button10_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				button10_changes.$$scope = { dirty, ctx };
    			}

    			button10.$set(button10_changes);
    			const button11_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				button11_changes.$$scope = { dirty, ctx };
    			}

    			button11.$set(button11_changes);
    			const button12_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				button12_changes.$$scope = { dirty, ctx };
    			}

    			button12.$set(button12_changes);
    			const button13_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				button13_changes.$$scope = { dirty, ctx };
    			}

    			button13.$set(button13_changes);
    			const button14_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				button14_changes.$$scope = { dirty, ctx };
    			}

    			button14.$set(button14_changes);
    			const button15_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				button15_changes.$$scope = { dirty, ctx };
    			}

    			button15.$set(button15_changes);
    			const button16_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				button16_changes.$$scope = { dirty, ctx };
    			}

    			button16.$set(button16_changes);
    			const button17_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				button17_changes.$$scope = { dirty, ctx };
    			}

    			button17.$set(button17_changes);
    			const button18_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				button18_changes.$$scope = { dirty, ctx };
    			}

    			button18.$set(button18_changes);
    			const button19_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				button19_changes.$$scope = { dirty, ctx };
    			}

    			button19.$set(button19_changes);
    			const button20_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				button20_changes.$$scope = { dirty, ctx };
    			}

    			button20.$set(button20_changes);
    			const button21_changes = {};

    			if (dirty & /*$$scope*/ 1) {
    				button21_changes.$$scope = { dirty, ctx };
    			}

    			button21.$set(button21_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism0.$$.fragment, local);
    			transition_in(button0.$$.fragment, local);
    			transition_in(prism1.$$.fragment, local);
    			transition_in(button1.$$.fragment, local);
    			transition_in(button2.$$.fragment, local);
    			transition_in(button3.$$.fragment, local);
    			transition_in(button4.$$.fragment, local);
    			transition_in(button5.$$.fragment, local);
    			transition_in(prism2.$$.fragment, local);
    			transition_in(button6.$$.fragment, local);
    			transition_in(button7.$$.fragment, local);
    			transition_in(button8.$$.fragment, local);
    			transition_in(button9.$$.fragment, local);
    			transition_in(button10.$$.fragment, local);
    			transition_in(button11.$$.fragment, local);
    			transition_in(prism3.$$.fragment, local);
    			transition_in(button12.$$.fragment, local);
    			transition_in(button13.$$.fragment, local);
    			transition_in(button14.$$.fragment, local);
    			transition_in(button15.$$.fragment, local);
    			transition_in(prism4.$$.fragment, local);
    			transition_in(button16.$$.fragment, local);
    			transition_in(prism5.$$.fragment, local);
    			transition_in(button17.$$.fragment, local);
    			transition_in(prism6.$$.fragment, local);
    			transition_in(button18.$$.fragment, local);
    			transition_in(button19.$$.fragment, local);
    			transition_in(button20.$$.fragment, local);
    			transition_in(button21.$$.fragment, local);
    			transition_in(prism7.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism0.$$.fragment, local);
    			transition_out(button0.$$.fragment, local);
    			transition_out(prism1.$$.fragment, local);
    			transition_out(button1.$$.fragment, local);
    			transition_out(button2.$$.fragment, local);
    			transition_out(button3.$$.fragment, local);
    			transition_out(button4.$$.fragment, local);
    			transition_out(button5.$$.fragment, local);
    			transition_out(prism2.$$.fragment, local);
    			transition_out(button6.$$.fragment, local);
    			transition_out(button7.$$.fragment, local);
    			transition_out(button8.$$.fragment, local);
    			transition_out(button9.$$.fragment, local);
    			transition_out(button10.$$.fragment, local);
    			transition_out(button11.$$.fragment, local);
    			transition_out(prism3.$$.fragment, local);
    			transition_out(button12.$$.fragment, local);
    			transition_out(button13.$$.fragment, local);
    			transition_out(button14.$$.fragment, local);
    			transition_out(button15.$$.fragment, local);
    			transition_out(prism4.$$.fragment, local);
    			transition_out(button16.$$.fragment, local);
    			transition_out(prism5.$$.fragment, local);
    			transition_out(button17.$$.fragment, local);
    			transition_out(prism6.$$.fragment, local);
    			transition_out(button18.$$.fragment, local);
    			transition_out(button19.$$.fragment, local);
    			transition_out(button20.$$.fragment, local);
    			transition_out(button21.$$.fragment, local);
    			transition_out(prism7.$$.fragment, local);
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
    			if (detaching) detach_dev(h30);
    			if (detaching) detach_dev(t6);
    			if (detaching) detach_dev(p0);
    			if (detaching) detach_dev(t8);
    			if (detaching) detach_dev(ul);
    			if (detaching) detach_dev(t18);
    			if (detaching) detach_dev(div0);
    			destroy_component(button1);
    			destroy_component(button2);
    			destroy_component(button3);
    			destroy_component(button4);
    			destroy_component(button5);
    			if (detaching) detach_dev(t23);
    			destroy_component(prism2, detaching);
    			if (detaching) detach_dev(t24);
    			if (detaching) detach_dev(h31);
    			if (detaching) detach_dev(t26);
    			if (detaching) detach_dev(p1);
    			if (detaching) detach_dev(t31);
    			if (detaching) detach_dev(div1);
    			destroy_component(button6);
    			destroy_component(button7);
    			destroy_component(button8);
    			if (detaching) detach_dev(t34);
    			if (detaching) detach_dev(div2);
    			destroy_component(button9);
    			destroy_component(button10);
    			destroy_component(button11);
    			if (detaching) detach_dev(t37);
    			destroy_component(prism3, detaching);
    			if (detaching) detach_dev(t38);
    			if (detaching) detach_dev(h32);
    			if (detaching) detach_dev(t40);
    			if (detaching) detach_dev(div3);
    			destroy_component(button12);
    			destroy_component(button13);
    			destroy_component(button14);
    			destroy_component(button15);
    			if (detaching) detach_dev(t44);
    			destroy_component(prism4, detaching);
    			if (detaching) detach_dev(t45);
    			if (detaching) detach_dev(h33);
    			if (detaching) detach_dev(t47);
    			destroy_component(button16, detaching);
    			if (detaching) detach_dev(t48);
    			destroy_component(prism5, detaching);
    			if (detaching) detach_dev(t49);
    			destroy_component(button17, detaching);
    			if (detaching) detach_dev(t50);
    			destroy_component(prism6, detaching);
    			if (detaching) detach_dev(t51);
    			destroy_component(button18, detaching);
    			if (detaching) detach_dev(t52);
    			destroy_component(button19, detaching);
    			if (detaching) detach_dev(t53);
    			destroy_component(button20, detaching);
    			if (detaching) detach_dev(t54);
    			destroy_component(button21, detaching);
    			if (detaching) detach_dev(t55);
    			destroy_component(prism7, detaching);
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

    const language$1 = "html";

    function instance$c($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Button", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Button> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ Prism: Prism$1, Button, Icon, language: language$1 });
    	return [];
    }

    class Button_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$c, create_fragment$c, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Button_1",
    			options,
    			id: create_fragment$c.name
    		});
    	}
    }

    /* documentation/components/Card.svelte generated by Svelte v3.32.2 */
    const file$c = "documentation/components/Card.svelte";

    // (8:4) <div slot="header">
    function create_header_slot_1(ctx) {
    	let div;

    	const block = {
    		c: function create() {
    			div = element("div");
    			div.textContent = "Header";
    			attr_dev(div, "slot", "header");
    			add_location(div, file$c, 7, 4, 227);
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
    		source: "(8:4) <div slot=\\\"header\\\">",
    		ctx
    	});

    	return block;
    }

    // (9:4) <div slot="content">
    function create_content_slot_1(ctx) {
    	let div;

    	const block = {
    		c: function create() {
    			div = element("div");
    			div.textContent = "Her er der indhold, der bare er godt";
    			attr_dev(div, "slot", "content");
    			add_location(div, file$c, 8, 4, 263);
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
    		source: "(9:4) <div slot=\\\"content\\\">",
    		ctx
    	});

    	return block;
    }

    // (10:4) <div slot="footer">
    function create_footer_slot_1(ctx) {
    	let div;

    	const block = {
    		c: function create() {
    			div = element("div");
    			div.textContent = "Vi har også en footer";
    			attr_dev(div, "slot", "footer");
    			add_location(div, file$c, 9, 4, 330);
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
    		source: "(10:4) <div slot=\\\"footer\\\">",
    		ctx
    	});

    	return block;
    }

    // (7:2) <Card className="margin-l">
    function create_default_slot_2$3(ctx) {
    	let t0;
    	let t1;

    	const block = {
    		c: function create() {
    			t0 = space();
    			t1 = space();
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t0, anchor);
    			insert_dev(target, t1, anchor);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(t1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_2$3.name,
    		type: "slot",
    		source: "(7:2) <Card className=\\\"margin-l\\\">",
    		ctx
    	});

    	return block;
    }

    // (13:4) <div class="text-align--center" slot="header">
    function create_header_slot(ctx) {
    	let div;
    	let b;

    	const block = {
    		c: function create() {
    			div = element("div");
    			b = element("b");
    			b.textContent = "Avisen";
    			add_location(b, file$c, 13, 6, 474);
    			attr_dev(div, "class", "text-align--center");
    			attr_dev(div, "slot", "header");
    			add_location(div, file$c, 12, 4, 421);
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
    		source: "(13:4) <div class=\\\"text-align--center\\\" slot=\\\"header\\\">",
    		ctx
    	});

    	return block;
    }

    // (16:4) <div slot="content">
    function create_content_slot$1(ctx) {
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
    			add_location(p0, file$c, 16, 6, 530);
    			attr_dev(p1, "class", "card-meta color--graa2 text-align--center");
    			add_location(p1, file$c, 20, 6, 744);
    			add_location(small, file$c, 21, 51, 866);
    			attr_dev(h3, "class", "card-title text-align--center");
    			add_location(h3, file$c, 21, 6, 821);
    			attr_dev(div, "slot", "content");
    			add_location(div, file$c, 15, 4, 503);
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
    		id: create_content_slot$1.name,
    		type: "slot",
    		source: "(16:4) <div slot=\\\"content\\\">",
    		ctx
    	});

    	return block;
    }

    // (25:6) <Button>
    function create_default_slot_1$3(ctx) {
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
    		id: create_default_slot_1$3.name,
    		type: "slot",
    		source: "(25:6) <Button>",
    		ctx
    	});

    	return block;
    }

    // (24:4) <div class="text-align--center" slot="footer">
    function create_footer_slot(ctx) {
    	let div;
    	let button;
    	let current;

    	button = new Button({
    			props: {
    				$$slots: { default: [create_default_slot_1$3] },
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
    			add_location(div, file$c, 23, 4, 904);
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
    		source: "(24:4) <div class=\\\"text-align--center\\\" slot=\\\"footer\\\">",
    		ctx
    	});

    	return block;
    }

    // (12:2) <Card className="margin-l">
    function create_default_slot$4(ctx) {
    	let t0;
    	let t1;

    	const block = {
    		c: function create() {
    			t0 = space();
    			t1 = space();
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t0, anchor);
    			insert_dev(target, t1, anchor);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(t1);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$4.name,
    		type: "slot",
    		source: "(12:2) <Card className=\\\"margin-l\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$d(ctx) {
    	let div;
    	let h1;
    	let t1;
    	let card0;
    	let t2;
    	let card1;
    	let current;

    	card0 = new Card({
    			props: {
    				className: "margin-l",
    				$$slots: {
    					default: [create_default_slot_2$3],
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
    					default: [create_default_slot$4],
    					footer: [create_footer_slot],
    					content: [create_content_slot$1],
    					header: [create_header_slot]
    				},
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
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$c, 5, 2, 161);
    			attr_dev(div, "class", "grid-width--small");
    			add_location(div, file$c, 4, 0, 127);
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
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(card0.$$.fragment, local);
    			transition_in(card1.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(card0.$$.fragment, local);
    			transition_out(card1.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			destroy_component(card0);
    			destroy_component(card1);
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
    		init(this, options, instance$d, create_fragment$d, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Card_1",
    			options,
    			id: create_fragment$d.name
    		});
    	}
    }

    /* src/_components/form-elements/Checkbox.svelte generated by Svelte v3.32.2 */

    const file$d = "src/_components/form-elements/Checkbox.svelte";

    // (19:4) {:else}
    function create_else_block$4(ctx) {
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
    			add_location(i0, file$d, 19, 6, 667);
    			attr_dev(i1, "class", "far fa-circle form-checkbox-toggle--off");
    			attr_dev(i1, "aria-hidden", "true");
    			add_location(i1, file$d, 20, 6, 751);
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
    		id: create_else_block$4.name,
    		type: "else",
    		source: "(19:4) {:else}",
    		ctx
    	});

    	return block;
    }

    // (16:4) {#if inputtype === 'checkbox'}
    function create_if_block$5(ctx) {
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
    			add_location(i0, file$d, 16, 6, 492);
    			attr_dev(i1, "class", "far fa-square form-checkbox-toggle--off");
    			attr_dev(i1, "aria-hidden", "true");
    			add_location(i1, file$d, 17, 6, 576);
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
    		id: create_if_block$5.name,
    		type: "if",
    		source: "(16:4) {#if inputtype === 'checkbox'}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$e(ctx) {
    	let label_1;
    	let input;
    	let t0;
    	let span;
    	let t1;
    	let t2;

    	function select_block_type(ctx, dirty) {
    		if (/*inputtype*/ ctx[3] === "checkbox") return create_if_block$5;
    		return create_else_block$4;
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
    			add_location(input, file$d, 12, 2, 333);
    			attr_dev(span, "class", "form-label");
    			add_location(span, file$d, 13, 2, 413);
    			add_location(label_1, file$d, 11, 0, 323);
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
    		id: create_fragment$e.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$e($$self, $$props, $$invalidate) {
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

    		init(this, options, instance$e, create_fragment$e, safe_not_equal, {
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
    			id: create_fragment$e.name
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

    /* src/_components/form-elements/Select.svelte generated by Svelte v3.32.2 */

    const file$e = "src/_components/form-elements/Select.svelte";

    function create_fragment$f(ctx) {
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
    			add_location(label_1, file$e, 8, 0, 239);
    			attr_dev(select, "classname", /*baseClass*/ ctx[1]);
    			attr_dev(select, "id", "select");
    			add_location(select, file$e, 9, 0, 294);
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
    				if (default_slot.p && dirty & /*$$scope*/ 16) {
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
    		id: create_fragment$f.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$f($$self, $$props, $$invalidate) {
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
    		init(this, options, instance$f, create_fragment$f, safe_not_equal, { inputtype: 2, label: 0, className: 3 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Select",
    			options,
    			id: create_fragment$f.name
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

    /* src/_components/form-elements/TextInput.svelte generated by Svelte v3.32.2 */

    const file$f = "src/_components/form-elements/TextInput.svelte";

    // (10:0) {#if label}
    function create_if_block$6(ctx) {
    	let span;
    	let t;

    	const block = {
    		c: function create() {
    			span = element("span");
    			t = text(/*label*/ ctx[1]);
    			attr_dev(span, "class", "form-label");
    			add_location(span, file$f, 10, 2, 318);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, span, anchor);
    			append_dev(span, t);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*label*/ 2) set_data_dev(t, /*label*/ ctx[1]);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(span);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block$6.name,
    		type: "if",
    		source: "(10:0) {#if label}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$g(ctx) {
    	let input;
    	let t;
    	let if_block_anchor;
    	let if_block = /*label*/ ctx[1] && create_if_block$6(ctx);

    	const block = {
    		c: function create() {
    			input = element("input");
    			t = space();
    			if (if_block) if_block.c();
    			if_block_anchor = empty();
    			attr_dev(input, "type", /*inputtype*/ ctx[0]);
    			attr_dev(input, "placeholder", /*label*/ ctx[1]);
    			attr_dev(input, "class", /*baseClass*/ ctx[2]);
    			add_location(input, file$f, 8, 0, 239);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, input, anchor);
    			insert_dev(target, t, anchor);
    			if (if_block) if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*inputtype*/ 1) {
    				attr_dev(input, "type", /*inputtype*/ ctx[0]);
    			}

    			if (dirty & /*label*/ 2) {
    				attr_dev(input, "placeholder", /*label*/ ctx[1]);
    			}

    			if (dirty & /*baseClass*/ 4) {
    				attr_dev(input, "class", /*baseClass*/ ctx[2]);
    			}

    			if (/*label*/ ctx[1]) {
    				if (if_block) {
    					if_block.p(ctx, dirty);
    				} else {
    					if_block = create_if_block$6(ctx);
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
    			if (detaching) detach_dev(input);
    			if (detaching) detach_dev(t);
    			if (if_block) if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
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
    	validate_slots("TextInput", slots, []);
    	let { inputtype = "text" } = $$props;
    	let { label = undefined } = $$props;
    	let { className = undefined } = $$props;
    	let baseClass = `form-input form-input--${inputtype}`;
    	if (className) baseClass = `${className} ${baseClass}`;
    	const writable_props = ["inputtype", "label", "className"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<TextInput> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("inputtype" in $$props) $$invalidate(0, inputtype = $$props.inputtype);
    		if ("label" in $$props) $$invalidate(1, label = $$props.label);
    		if ("className" in $$props) $$invalidate(3, className = $$props.className);
    	};

    	$$self.$capture_state = () => ({ inputtype, label, className, baseClass });

    	$$self.$inject_state = $$props => {
    		if ("inputtype" in $$props) $$invalidate(0, inputtype = $$props.inputtype);
    		if ("label" in $$props) $$invalidate(1, label = $$props.label);
    		if ("className" in $$props) $$invalidate(3, className = $$props.className);
    		if ("baseClass" in $$props) $$invalidate(2, baseClass = $$props.baseClass);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [inputtype, label, baseClass, className];
    }

    class TextInput extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$g, create_fragment$g, safe_not_equal, { inputtype: 0, label: 1, className: 3 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "TextInput",
    			options,
    			id: create_fragment$g.name
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
    }

    /* src/_components/form-elements/FormElement.svelte generated by Svelte v3.32.2 */
    const file$g = "src/_components/form-elements/FormElement.svelte";

    // (23:2) <svelte:component this={component} class={className} {label} {inputtype} {group} {value} name={fieldName}>
    function create_default_slot$5(ctx) {
    	let current;
    	const default_slot_template = /*#slots*/ ctx[7].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[8], null);

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
    				if (default_slot.p && dirty & /*$$scope*/ 256) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[8], dirty, null, null);
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
    		id: create_default_slot$5.name,
    		type: "slot",
    		source: "(23:2) <svelte:component this={component} class={className} {label} {inputtype} {group} {value} name={fieldName}>",
    		ctx
    	});

    	return block;
    }

    function create_fragment$h(ctx) {
    	let div;
    	let switch_instance;
    	let current;
    	var switch_value = /*component*/ ctx[6];

    	function switch_props(ctx) {
    		return {
    			props: {
    				class: /*className*/ ctx[0],
    				label: /*label*/ ctx[4],
    				inputtype: /*inputtype*/ ctx[3],
    				group: /*group*/ ctx[2],
    				value: /*value*/ ctx[5],
    				name: /*fieldName*/ ctx[1],
    				$$slots: { default: [create_default_slot$5] },
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
    			add_location(div, file$g, 21, 0, 526);
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
    			if (dirty & /*className*/ 1) switch_instance_changes.class = /*className*/ ctx[0];
    			if (dirty & /*label*/ 16) switch_instance_changes.label = /*label*/ ctx[4];
    			if (dirty & /*inputtype*/ 8) switch_instance_changes.inputtype = /*inputtype*/ ctx[3];
    			if (dirty & /*group*/ 4) switch_instance_changes.group = /*group*/ ctx[2];
    			if (dirty & /*value*/ 32) switch_instance_changes.value = /*value*/ ctx[5];
    			if (dirty & /*fieldName*/ 2) switch_instance_changes.name = /*fieldName*/ ctx[1];

    			if (dirty & /*$$scope*/ 256) {
    				switch_instance_changes.$$scope = { dirty, ctx };
    			}

    			if (switch_value !== (switch_value = /*component*/ ctx[6])) {
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
    		id: create_fragment$h.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$h($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("FormElement", slots, ['default']);
    	let { className = undefined } = $$props;
    	let { fieldName = undefined } = $$props;
    	let { group = undefined } = $$props;
    	let { inputtype = "text" } = $$props;
    	let { label = undefined } = $$props;
    	let { value } = $$props;
    	let component = TextInput;

    	switch (inputtype) {
    		case "select":
    			component = Select;
    			break;
    		case "checkbox":
    		case "radio":
    			component = Checkbox;
    			break;
    	}

    	const writable_props = ["className", "fieldName", "group", "inputtype", "label", "value"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<FormElement> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("className" in $$props) $$invalidate(0, className = $$props.className);
    		if ("fieldName" in $$props) $$invalidate(1, fieldName = $$props.fieldName);
    		if ("group" in $$props) $$invalidate(2, group = $$props.group);
    		if ("inputtype" in $$props) $$invalidate(3, inputtype = $$props.inputtype);
    		if ("label" in $$props) $$invalidate(4, label = $$props.label);
    		if ("value" in $$props) $$invalidate(5, value = $$props.value);
    		if ("$$scope" in $$props) $$invalidate(8, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		Checkbox,
    		Select,
    		TextInput,
    		className,
    		fieldName,
    		group,
    		inputtype,
    		label,
    		value,
    		component
    	});

    	$$self.$inject_state = $$props => {
    		if ("className" in $$props) $$invalidate(0, className = $$props.className);
    		if ("fieldName" in $$props) $$invalidate(1, fieldName = $$props.fieldName);
    		if ("group" in $$props) $$invalidate(2, group = $$props.group);
    		if ("inputtype" in $$props) $$invalidate(3, inputtype = $$props.inputtype);
    		if ("label" in $$props) $$invalidate(4, label = $$props.label);
    		if ("value" in $$props) $$invalidate(5, value = $$props.value);
    		if ("component" in $$props) $$invalidate(6, component = $$props.component);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
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

    		init(this, options, instance$h, create_fragment$h, safe_not_equal, {
    			className: 0,
    			fieldName: 1,
    			group: 2,
    			inputtype: 3,
    			label: 4,
    			value: 5
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "FormElement",
    			options,
    			id: create_fragment$h.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*value*/ ctx[5] === undefined && !("value" in props)) {
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
    }

    /* documentation/components/FormElement.svelte generated by Svelte v3.32.2 */
    const file$h = "documentation/components/FormElement.svelte";

    // (8:0) <FormElement inputtype="select" label="Noget indhold her">
    function create_default_slot$6(ctx) {
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
    			add_location(option0, file$h, 8, 2, 312);
    			option1.__value = "optioin2";
    			option1.value = option1.__value;
    			add_location(option1, file$h, 9, 2, 357);
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
    		id: create_default_slot$6.name,
    		type: "slot",
    		source: "(8:0) <FormElement inputtype=\\\"select\\\" label=\\\"Noget indhold her\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$i(ctx) {
    	let formelement0;
    	let t0;
    	let formelement1;
    	let t1;
    	let formelement2;
    	let t2;
    	let formelement3;
    	let t3;
    	let formelement4;
    	let updating_group;
    	let t4;
    	let formelement5;
    	let updating_group_1;
    	let t5;
    	let formelement6;
    	let current;

    	formelement0 = new FormElement({
    			props: {
    				inputtype: "text",
    				label: "Noget indhold her"
    			},
    			$$inline: true
    		});

    	formelement1 = new FormElement({
    			props: {
    				inputtype: "text",
    				label: "Noget ANDET indhold her"
    			},
    			$$inline: true
    		});

    	formelement2 = new FormElement({
    			props: {
    				inputtype: "select",
    				label: "Noget indhold her",
    				$$slots: { default: [create_default_slot$6] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	formelement3 = new FormElement({
    			props: {
    				inputtype: "checkbox",
    				label: "Check denne her"
    			},
    			$$inline: true
    		});

    	function formelement4_group_binding(value) {
    		/*formelement4_group_binding*/ ctx[1](value);
    	}

    	let formelement4_props = {
    		inputtype: "radio",
    		label: "Radio denne her",
    		value: 1
    	};

    	if (/*radio*/ ctx[0] !== void 0) {
    		formelement4_props.group = /*radio*/ ctx[0];
    	}

    	formelement4 = new FormElement({
    			props: formelement4_props,
    			$$inline: true
    		});

    	binding_callbacks.push(() => bind(formelement4, "group", formelement4_group_binding));

    	function formelement5_group_binding(value) {
    		/*formelement5_group_binding*/ ctx[2](value);
    	}

    	let formelement5_props = {
    		inputtype: "radio",
    		label: "Radio denne her også",
    		value: 2
    	};

    	if (/*radio*/ ctx[0] !== void 0) {
    		formelement5_props.group = /*radio*/ ctx[0];
    	}

    	formelement5 = new FormElement({
    			props: formelement5_props,
    			$$inline: true
    		});

    	binding_callbacks.push(() => bind(formelement5, "group", formelement5_group_binding));

    	formelement6 = new FormElement({
    			props: {
    				inputtype: "number",
    				label: "Noget tal indhold her"
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
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const formelement2_changes = {};

    			if (dirty & /*$$scope*/ 8) {
    				formelement2_changes.$$scope = { dirty, ctx };
    			}

    			formelement2.$set(formelement2_changes);
    			const formelement4_changes = {};

    			if (!updating_group && dirty & /*radio*/ 1) {
    				updating_group = true;
    				formelement4_changes.group = /*radio*/ ctx[0];
    				add_flush_callback(() => updating_group = false);
    			}

    			formelement4.$set(formelement4_changes);
    			const formelement5_changes = {};

    			if (!updating_group_1 && dirty & /*radio*/ 1) {
    				updating_group_1 = true;
    				formelement5_changes.group = /*radio*/ ctx[0];
    				add_flush_callback(() => updating_group_1 = false);
    			}

    			formelement5.$set(formelement5_changes);
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
    	validate_slots("FormElement", slots, []);
    	let radio = 1;
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<FormElement> was created with unknown prop '${key}'`);
    	});

    	function formelement4_group_binding(value) {
    		radio = value;
    		$$invalidate(0, radio);
    	}

    	function formelement5_group_binding(value) {
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

    	return [radio, formelement4_group_binding, formelement5_group_binding];
    }

    class FormElement_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$i, create_fragment$i, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "FormElement_1",
    			options,
    			id: create_fragment$i.name
    		});
    	}
    }

    /* documentation/components/Icon.svelte generated by Svelte v3.32.2 */
    const file$i = "documentation/components/Icon.svelte";

    function get_each_context$1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[0] = list[i];
    	return child_ctx;
    }

    function get_each_context_1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[0] = list[i];
    	return child_ctx;
    }

    // (9:4) {#each svgIcons as name}
    function create_each_block_1(ctx) {
    	let li;
    	let t_value = /*name*/ ctx[0] + "";
    	let t;

    	const block = {
    		c: function create() {
    			li = element("li");
    			t = text(t_value);
    			add_location(li, file$i, 9, 6, 280);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, li, anchor);
    			append_dev(li, t);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(li);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_1.name,
    		type: "each",
    		source: "(9:4) {#each svgIcons as name}",
    		ctx
    	});

    	return block;
    }

    // (14:4) {#each svgIcons as name}
    function create_each_block$1(ctx) {
    	let div;
    	let icon;
    	let t0;
    	let small;
    	let t1_value = /*name*/ ctx[0] + "";
    	let t1;
    	let t2;
    	let current;

    	icon = new Icon({
    			props: {
    				className: "margin-s",
    				style: "width: 36px; height: 36px;",
    				name: /*name*/ ctx[0]
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
    			add_location(small, file$i, 19, 8, 641);
    			attr_dev(div, "class", "flex flex-column flex-align--center flex-justify--center margin-m padding-m");
    			set_style(div, "border", "1px solid #111");
    			set_style(div, "border-radius", "5px");
    			add_location(div, file$i, 14, 6, 388);
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
    		id: create_each_block$1.name,
    		type: "each",
    		source: "(14:4) {#each svgIcons as name}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$j(ctx) {
    	let div1;
    	let h1;
    	let t1;
    	let p;
    	let t3;
    	let ul;
    	let t4;
    	let div0;
    	let t5;
    	let prism;
    	let current;
    	let each_value_1 = svgIcons;
    	validate_each_argument(each_value_1);
    	let each_blocks_1 = [];

    	for (let i = 0; i < each_value_1.length; i += 1) {
    		each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
    	}

    	let each_value = svgIcons;
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
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
    			ul = element("ul");

    			for (let i = 0; i < each_blocks_1.length; i += 1) {
    				each_blocks_1[i].c();
    			}

    			t4 = space();
    			div0 = element("div");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t5 = space();
    			create_component(prism.$$.fragment);
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$i, 5, 2, 158);
    			add_location(p, file$i, 6, 2, 200);
    			add_location(ul, file$i, 7, 2, 240);
    			attr_dev(div0, "class", "flex flex-wrap--wrap");
    			add_location(div0, file$i, 12, 2, 318);
    			attr_dev(div1, "class", "grid-width--small");
    			add_location(div1, file$i, 4, 0, 124);
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
    			append_dev(div1, ul);

    			for (let i = 0; i < each_blocks_1.length; i += 1) {
    				each_blocks_1[i].m(ul, null);
    			}

    			append_dev(div1, t4);
    			append_dev(div1, div0);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div0, null);
    			}

    			append_dev(div1, t5);
    			mount_component(prism, div1, null);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*svgIcons*/ 0) {
    				each_value_1 = svgIcons;
    				validate_each_argument(each_value_1);
    				let i;

    				for (i = 0; i < each_value_1.length; i += 1) {
    					const child_ctx = get_each_context_1(ctx, each_value_1, i);

    					if (each_blocks_1[i]) {
    						each_blocks_1[i].p(child_ctx, dirty);
    					} else {
    						each_blocks_1[i] = create_each_block_1(child_ctx);
    						each_blocks_1[i].c();
    						each_blocks_1[i].m(ul, null);
    					}
    				}

    				for (; i < each_blocks_1.length; i += 1) {
    					each_blocks_1[i].d(1);
    				}

    				each_blocks_1.length = each_value_1.length;
    			}

    			if (dirty & /*svgIcons*/ 0) {
    				each_value = svgIcons;
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
    			destroy_each(each_blocks_1, detaching);
    			destroy_each(each_blocks, detaching);
    			destroy_component(prism);
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
    	validate_slots("Icon", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Icon> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ Prism: Prism$1, Icon, svgIcons });
    	return [];
    }

    class Icon_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$j, create_fragment$j, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Icon_1",
    			options,
    			id: create_fragment$j.name
    		});
    	}
    }

    /* src/_components/horizontalScroll/HorizontalScroll.svelte generated by Svelte v3.32.2 */
    const file$j = "src/_components/horizontalScroll/HorizontalScroll.svelte";

    function create_fragment$k(ctx) {
    	let div1;
    	let button0;
    	let i0;
    	let t0;
    	let button1;
    	let i1;
    	let t1;
    	let div0;
    	let current;
    	const default_slot_template = /*#slots*/ ctx[6].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);

    	const block = {
    		c: function create() {
    			div1 = element("div");
    			button0 = element("button");
    			i0 = element("i");
    			t0 = space();
    			button1 = element("button");
    			i1 = element("i");
    			t1 = space();
    			div0 = element("div");
    			if (default_slot) default_slot.c();
    			attr_dev(i0, "class", "fa fa-chevron-left");
    			add_location(i0, file$j, 62, 4, 2172);
    			attr_dev(button0, "class", "horizontal-scroll-nav");
    			attr_dev(button0, "data-horizontallist", "button-prev");
    			add_location(button0, file$j, 61, 2, 2069);
    			attr_dev(i1, "class", "fa fa-chevron-right");
    			add_location(i1, file$j, 65, 4, 2322);
    			attr_dev(button1, "class", "horizontal-scroll-nav");
    			attr_dev(button1, "data-horizontallist", "button-next");
    			add_location(button1, file$j, 64, 2, 2219);
    			attr_dev(div0, "class", "horizontal-scroll-items flex padding-m--l padding-m--r");
    			attr_dev(div0, "data-horizontallist", "horizontallist");
    			add_location(div0, file$j, 67, 2, 2370);
    			attr_dev(div1, "class", "horizontal-scroll-container grid-width--large  position-relative");
    			add_location(div1, file$j, 60, 0, 1960);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div1, anchor);
    			append_dev(div1, button0);
    			append_dev(button0, i0);
    			/*button0_binding*/ ctx[7](button0);
    			append_dev(div1, t0);
    			append_dev(div1, button1);
    			append_dev(button1, i1);
    			/*button1_binding*/ ctx[8](button1);
    			append_dev(div1, t1);
    			append_dev(div1, div0);

    			if (default_slot) {
    				default_slot.m(div0, null);
    			}

    			/*div0_binding*/ ctx[9](div0);
    			/*div1_binding*/ ctx[10](div1);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (default_slot) {
    				if (default_slot.p && dirty & /*$$scope*/ 32) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[5], dirty, null, null);
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
    			if (detaching) detach_dev(div1);
    			/*button0_binding*/ ctx[7](null);
    			/*button1_binding*/ ctx[8](null);
    			if (default_slot) default_slot.d(detaching);
    			/*div0_binding*/ ctx[9](null);
    			/*div1_binding*/ ctx[10](null);
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

    function instance$k($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("HorizontalScroll", slots, ['default']);
    	let { className = undefined } = $$props;
    	let baseClass = `horizontal-scroll-container position-relative`;
    	if (className) baseClass = `${className} ${baseClass}`;

    	/* Horizontial Scroll elements */
    	let scrollContainer;

    	let scrollItemContainer;
    	let prevScrollBtn;
    	let nextScrollBtn;

    	onMount(() => {
    		const children = scrollItemContainer.children;
    		const listLength = children.length;
    		const containerRight = scrollContainer.getBoundingClientRect().right;

    		/**
     * Find how many visible elements we have
     */
    		let visibleChildren = Array.from(children).filter(child => child.getBoundingClientRect().right <= containerRight).length;

    		if (visibleChildren === listLength) {
    			/**
     * If there is no invisible elements hide buttons
     */
    			$$invalidate(2, prevScrollBtn.style.display = "none", prevScrollBtn);

    			$$invalidate(3, nextScrollBtn.style.display = "none", nextScrollBtn);
    		} else {
    			/**
     * We dont need to count the visible elements
     */
    			const maxLength = listLength - visibleChildren;

    			let listCurrent = 0;

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
    			}

    			/* Horizontial scroll to the left */
    			nextScrollBtn.addEventListener("click", function () {
    				if (listCurrent !== maxLength) {
    					listCurrent++;
    					scroll(listCurrent);
    				}
    			});

    			/* Horizontial scroll to the right */
    			prevScrollBtn.addEventListener("click", function () {
    				if (listCurrent !== 0) {
    					listCurrent--;
    					scroll(listCurrent);
    				}
    			});
    		}
    	});

    	const writable_props = ["className"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<HorizontalScroll> was created with unknown prop '${key}'`);
    	});

    	function button0_binding($$value) {
    		binding_callbacks[$$value ? "unshift" : "push"](() => {
    			prevScrollBtn = $$value;
    			$$invalidate(2, prevScrollBtn);
    		});
    	}

    	function button1_binding($$value) {
    		binding_callbacks[$$value ? "unshift" : "push"](() => {
    			nextScrollBtn = $$value;
    			$$invalidate(3, nextScrollBtn);
    		});
    	}

    	function div0_binding($$value) {
    		binding_callbacks[$$value ? "unshift" : "push"](() => {
    			scrollItemContainer = $$value;
    			$$invalidate(1, scrollItemContainer);
    		});
    	}

    	function div1_binding($$value) {
    		binding_callbacks[$$value ? "unshift" : "push"](() => {
    			scrollContainer = $$value;
    			$$invalidate(0, scrollContainer);
    		});
    	}

    	$$self.$$set = $$props => {
    		if ("className" in $$props) $$invalidate(4, className = $$props.className);
    		if ("$$scope" in $$props) $$invalidate(5, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		onMount,
    		className,
    		baseClass,
    		scrollContainer,
    		scrollItemContainer,
    		prevScrollBtn,
    		nextScrollBtn
    	});

    	$$self.$inject_state = $$props => {
    		if ("className" in $$props) $$invalidate(4, className = $$props.className);
    		if ("baseClass" in $$props) baseClass = $$props.baseClass;
    		if ("scrollContainer" in $$props) $$invalidate(0, scrollContainer = $$props.scrollContainer);
    		if ("scrollItemContainer" in $$props) $$invalidate(1, scrollItemContainer = $$props.scrollItemContainer);
    		if ("prevScrollBtn" in $$props) $$invalidate(2, prevScrollBtn = $$props.prevScrollBtn);
    		if ("nextScrollBtn" in $$props) $$invalidate(3, nextScrollBtn = $$props.nextScrollBtn);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		scrollContainer,
    		scrollItemContainer,
    		prevScrollBtn,
    		nextScrollBtn,
    		className,
    		$$scope,
    		slots,
    		button0_binding,
    		button1_binding,
    		div0_binding,
    		div1_binding
    	];
    }

    class HorizontalScroll extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$k, create_fragment$k, safe_not_equal, { className: 4 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "HorizontalScroll",
    			options,
    			id: create_fragment$k.name
    		});
    	}

    	get className() {
    		throw new Error("<HorizontalScroll>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set className(value) {
    		throw new Error("<HorizontalScroll>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* documentation/components/HorizontalScroll.svelte generated by Svelte v3.32.2 */
    const file$k = "documentation/components/HorizontalScroll.svelte";

    // (5:0) <HorizontalScroll>
    function create_default_slot$7(ctx) {
    	let div1;
    	let a0;
    	let div0;
    	let p0;
    	let small0;
    	let span0;
    	let t1;
    	let t2;
    	let h30;
    	let t4;
    	let div3;
    	let a1;
    	let div2;
    	let p1;
    	let small1;
    	let span1;
    	let t6;
    	let t7;
    	let h31;
    	let t9;
    	let div5;
    	let a2;
    	let div4;
    	let p2;
    	let small2;
    	let span2;
    	let t11;
    	let t12;
    	let h32;
    	let t14;
    	let div7;
    	let a3;
    	let div6;
    	let p3;
    	let small3;
    	let span3;
    	let t16;
    	let t17;
    	let h33;

    	const block = {
    		c: function create() {
    			div1 = element("div");
    			a0 = element("a");
    			div0 = element("div");
    			p0 = element("p");
    			small0 = element("small");
    			span0 = element("span");
    			span0.textContent = "flash!";
    			t1 = text(" - 2 timer siden");
    			t2 = space();
    			h30 = element("h3");
    			h30.textContent = "Aliquam ultricies felis eget orci commodo fringilla";
    			t4 = space();
    			div3 = element("div");
    			a1 = element("a");
    			div2 = element("div");
    			p1 = element("p");
    			small1 = element("small");
    			span1 = element("span");
    			span1.textContent = "TV";
    			t6 = text(" - 3 timer siden");
    			t7 = space();
    			h31 = element("h3");
    			h31.textContent = "felis eget orci commodo ulimito";
    			t9 = space();
    			div5 = element("div");
    			a2 = element("a");
    			div4 = element("div");
    			p2 = element("p");
    			small2 = element("small");
    			span2 = element("span");
    			span2.textContent = "sport";
    			t11 = text(" - 5 timer siden");
    			t12 = space();
    			h32 = element("h3");
    			h32.textContent = "Ultricies commodo lecos mania";
    			t14 = space();
    			div7 = element("div");
    			a3 = element("a");
    			div6 = element("div");
    			p3 = element("p");
    			small3 = element("small");
    			span3 = element("span");
    			span3.textContent = "nyheder";
    			t16 = text(" - 8 timer siden");
    			t17 = space();
    			h33 = element("h3");
    			h33.textContent = "Fringilla levos tumio arcadia";
    			attr_dev(span0, "class", "color--flash");
    			add_location(span0, file$k, 8, 49, 362);
    			add_location(small0, file$k, 8, 42, 355);
    			attr_dev(p0, "class", "card-meta color--graa3");
    			add_location(p0, file$k, 8, 8, 321);
    			attr_dev(h30, "class", "card-title");
    			add_location(h30, file$k, 9, 8, 439);
    			attr_dev(div0, "class", "card-content");
    			add_location(div0, file$k, 7, 6, 286);
    			attr_dev(a0, "href", "#d");
    			attr_dev(a0, "class", "card height-1of1");
    			add_location(a0, file$k, 6, 4, 241);
    			attr_dev(div1, "class", "flex-item width-1of3 padding-m");
    			set_style(div1, "min-width", "300px");
    			add_location(div1, file$k, 5, 2, 166);
    			attr_dev(span1, "class", "color--tv");
    			add_location(span1, file$k, 16, 49, 748);
    			add_location(small1, file$k, 16, 42, 741);
    			attr_dev(p1, "class", "card-meta color--graa3");
    			add_location(p1, file$k, 16, 8, 707);
    			attr_dev(h31, "class", "card-title");
    			add_location(h31, file$k, 17, 8, 818);
    			attr_dev(div2, "class", "card-content");
    			add_location(div2, file$k, 15, 6, 672);
    			attr_dev(a1, "href", "#c");
    			attr_dev(a1, "class", "card height-1of1");
    			add_location(a1, file$k, 14, 4, 627);
    			attr_dev(div3, "class", "flex-item width-1of3 padding-m");
    			set_style(div3, "min-width", "300px");
    			add_location(div3, file$k, 13, 2, 552);
    			attr_dev(span2, "class", "color--sport");
    			add_location(span2, file$k, 24, 49, 1107);
    			add_location(small2, file$k, 24, 42, 1100);
    			attr_dev(p2, "class", "card-meta color--graa3");
    			add_location(p2, file$k, 24, 8, 1066);
    			attr_dev(h32, "class", "card-title");
    			add_location(h32, file$k, 25, 8, 1183);
    			attr_dev(div4, "class", "card-content");
    			add_location(div4, file$k, 23, 6, 1031);
    			attr_dev(a2, "href", "#b");
    			attr_dev(a2, "class", "card height-1of1");
    			add_location(a2, file$k, 22, 4, 986);
    			attr_dev(div5, "class", "flex-item width-1of3 padding-m");
    			set_style(div5, "min-width", "300px");
    			add_location(div5, file$k, 21, 2, 911);
    			attr_dev(span3, "class", "color--flash");
    			add_location(span3, file$k, 32, 49, 1470);
    			add_location(small3, file$k, 32, 42, 1463);
    			attr_dev(p3, "class", "card-meta color--graa3");
    			add_location(p3, file$k, 32, 8, 1429);
    			attr_dev(h33, "class", "card-title");
    			add_location(h33, file$k, 33, 8, 1548);
    			attr_dev(div6, "class", "card-content");
    			add_location(div6, file$k, 31, 6, 1394);
    			attr_dev(a3, "href", "#a");
    			attr_dev(a3, "class", "card height-1of1");
    			add_location(a3, file$k, 30, 4, 1349);
    			attr_dev(div7, "class", "flex-item width-1of3 padding-m");
    			set_style(div7, "min-width", "300px");
    			add_location(div7, file$k, 29, 2, 1274);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div1, anchor);
    			append_dev(div1, a0);
    			append_dev(a0, div0);
    			append_dev(div0, p0);
    			append_dev(p0, small0);
    			append_dev(small0, span0);
    			append_dev(small0, t1);
    			append_dev(div0, t2);
    			append_dev(div0, h30);
    			insert_dev(target, t4, anchor);
    			insert_dev(target, div3, anchor);
    			append_dev(div3, a1);
    			append_dev(a1, div2);
    			append_dev(div2, p1);
    			append_dev(p1, small1);
    			append_dev(small1, span1);
    			append_dev(small1, t6);
    			append_dev(div2, t7);
    			append_dev(div2, h31);
    			insert_dev(target, t9, anchor);
    			insert_dev(target, div5, anchor);
    			append_dev(div5, a2);
    			append_dev(a2, div4);
    			append_dev(div4, p2);
    			append_dev(p2, small2);
    			append_dev(small2, span2);
    			append_dev(small2, t11);
    			append_dev(div4, t12);
    			append_dev(div4, h32);
    			insert_dev(target, t14, anchor);
    			insert_dev(target, div7, anchor);
    			append_dev(div7, a3);
    			append_dev(a3, div6);
    			append_dev(div6, p3);
    			append_dev(p3, small3);
    			append_dev(small3, span3);
    			append_dev(small3, t16);
    			append_dev(div6, t17);
    			append_dev(div6, h33);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div1);
    			if (detaching) detach_dev(t4);
    			if (detaching) detach_dev(div3);
    			if (detaching) detach_dev(t9);
    			if (detaching) detach_dev(div5);
    			if (detaching) detach_dev(t14);
    			if (detaching) detach_dev(div7);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$7.name,
    		type: "slot",
    		source: "(5:0) <HorizontalScroll>",
    		ctx
    	});

    	return block;
    }

    function create_fragment$l(ctx) {
    	let h1;
    	let t1;
    	let horizontalscroll;
    	let current;

    	horizontalscroll = new HorizontalScroll({
    			props: {
    				$$slots: { default: [create_default_slot$7] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			h1 = element("h1");
    			h1.textContent = "Horizontal Scroll";
    			t1 = space();
    			create_component(horizontalscroll.$$.fragment);
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$k, 3, 0, 100);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, h1, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(horizontalscroll, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const horizontalscroll_changes = {};

    			if (dirty & /*$$scope*/ 1) {
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
    			destroy_component(horizontalscroll, detaching);
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

    function instance$l($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("HorizontalScroll", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<HorizontalScroll> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ HorizontalScroll });
    	return [];
    }

    class HorizontalScroll_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$l, create_fragment$l, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "HorizontalScroll_1",
    			options,
    			id: create_fragment$l.name
    		});
    	}
    }

    /* src/_components/pillnavigation/PillNavigation.svelte generated by Svelte v3.32.2 */
    const file$l = "src/_components/pillnavigation/PillNavigation.svelte";

    function create_fragment$m(ctx) {
    	let div;
    	let current;
    	const default_slot_template = /*#slots*/ ctx[3].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], null);

    	const block = {
    		c: function create() {
    			div = element("div");
    			if (default_slot) default_slot.c();
    			attr_dev(div, "class", /*baseClass*/ ctx[0]);
    			add_location(div, file$l, 42, 0, 1392);
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
    				if (default_slot.p && dirty & /*$$scope*/ 4) {
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
    		id: create_fragment$m.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    const BUTTONS = {};

    function instance$m($$self, $$props, $$invalidate) {
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
    		init(this, options, instance$m, create_fragment$m, safe_not_equal, { className: 1 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "PillNavigation",
    			options,
    			id: create_fragment$m.name
    		});
    	}

    	get className() {
    		throw new Error("<PillNavigation>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set className(value) {
    		throw new Error("<PillNavigation>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/_components/pillnavigation/Pill.svelte generated by Svelte v3.32.2 */
    const file$m = "src/_components/pillnavigation/Pill.svelte";

    function create_fragment$n(ctx) {
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
    			add_location(button_1, file$m, 11, 0, 352);
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
    				if (default_slot.p && dirty & /*$$scope*/ 64) {
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
    		id: create_fragment$n.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$n($$self, $$props, $$invalidate) {
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
    		init(this, options, instance$n, create_fragment$n, safe_not_equal, { className: 5 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Pill",
    			options,
    			id: create_fragment$n.name
    		});
    	}

    	get className() {
    		throw new Error("<Pill>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set className(value) {
    		throw new Error("<Pill>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/_components/pillnavigation/PillContent.svelte generated by Svelte v3.32.2 */

    // (11:0) {#if $selectedPanel === panel}
    function create_if_block$7(ctx) {
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
    				if (default_slot.p && dirty & /*$$scope*/ 8) {
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
    		id: create_if_block$7.name,
    		type: "if",
    		source: "(11:0) {#if $selectedPanel === panel}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$o(ctx) {
    	let if_block_anchor;
    	let current;
    	let if_block = /*$selectedPanel*/ ctx[0] === /*panel*/ ctx[1] && create_if_block$7(ctx);

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
    					if_block = create_if_block$7(ctx);
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
    		id: create_fragment$o.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$o($$self, $$props, $$invalidate) {
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
    		init(this, options, instance$o, create_fragment$o, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "PillContent",
    			options,
    			id: create_fragment$o.name
    		});
    	}
    }

    /* src/_components/pillnavigation/PillList.svelte generated by Svelte v3.32.2 */

    const file$n = "src/_components/pillnavigation/PillList.svelte";

    function create_fragment$p(ctx) {
    	let div;
    	let current;
    	const default_slot_template = /*#slots*/ ctx[3].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], null);

    	const block = {
    		c: function create() {
    			div = element("div");
    			if (default_slot) default_slot.c();
    			attr_dev(div, "class", /*baseClass*/ ctx[0]);
    			add_location(div, file$n, 6, 0, 180);
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
    				if (default_slot.p && dirty & /*$$scope*/ 4) {
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
    		id: create_fragment$p.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$p($$self, $$props, $$invalidate) {
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
    		init(this, options, instance$p, create_fragment$p, safe_not_equal, { className: 1 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "PillList",
    			options,
    			id: create_fragment$p.name
    		});
    	}

    	get className() {
    		throw new Error("<PillList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set className(value) {
    		throw new Error("<PillList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* documentation/components/PillNavigation.svelte generated by Svelte v3.32.2 */

    const file$o = "documentation/components/PillNavigation.svelte";

    // (15:6) <Pill>
    function create_default_slot_13$1(ctx) {
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
    		id: create_default_slot_13$1.name,
    		type: "slot",
    		source: "(15:6) <Pill>",
    		ctx
    	});

    	return block;
    }

    // (16:6) <Pill>
    function create_default_slot_12$1(ctx) {
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
    		id: create_default_slot_12$1.name,
    		type: "slot",
    		source: "(16:6) <Pill>",
    		ctx
    	});

    	return block;
    }

    // (14:4) <PillList>
    function create_default_slot_11$2(ctx) {
    	let pill0;
    	let t;
    	let pill1;
    	let current;

    	pill0 = new Pill({
    			props: {
    				$$slots: { default: [create_default_slot_13$1] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	pill1 = new Pill({
    			props: {
    				$$slots: { default: [create_default_slot_12$1] },
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
    		id: create_default_slot_11$2.name,
    		type: "slot",
    		source: "(14:4) <PillList>",
    		ctx
    	});

    	return block;
    }

    // (18:4) <PillContent>
    function create_default_slot_10$2(ctx) {
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
    		id: create_default_slot_10$2.name,
    		type: "slot",
    		source: "(18:4) <PillContent>",
    		ctx
    	});

    	return block;
    }

    // (19:4) <PillContent>
    function create_default_slot_9$2(ctx) {
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
    		id: create_default_slot_9$2.name,
    		type: "slot",
    		source: "(19:4) <PillContent>",
    		ctx
    	});

    	return block;
    }

    // (13:2) <PillNavigation>
    function create_default_slot_8$2(ctx) {
    	let pilllist;
    	let t0;
    	let pillcontent0;
    	let t1;
    	let pillcontent1;
    	let current;

    	pilllist = new PillList({
    			props: {
    				$$slots: { default: [create_default_slot_11$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	pillcontent0 = new PillContent({
    			props: {
    				$$slots: { default: [create_default_slot_10$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	pillcontent1 = new PillContent({
    			props: {
    				$$slots: { default: [create_default_slot_9$2] },
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
    		id: create_default_slot_8$2.name,
    		type: "slot",
    		source: "(13:2) <PillNavigation>",
    		ctx
    	});

    	return block;
    }

    // (40:6) <Pill>
    function create_default_slot_7$2(ctx) {
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
    		id: create_default_slot_7$2.name,
    		type: "slot",
    		source: "(40:6) <Pill>",
    		ctx
    	});

    	return block;
    }

    // (41:6) <Pill>
    function create_default_slot_6$2(ctx) {
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
    		id: create_default_slot_6$2.name,
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
    				$$slots: { default: [create_default_slot_7$2] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	pill1 = new Pill({
    			props: {
    				$$slots: { default: [create_default_slot_6$2] },
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
    			add_location(h1, file$o, 45, 8, 1032);
    			add_location(p, file$o, 46, 8, 1059);
    			add_location(div, file$o, 44, 6, 1018);
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
    function create_default_slot_2$4(ctx) {
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
    			add_location(h1, file$o, 57, 8, 1714);
    			add_location(p, file$o, 58, 8, 1741);
    			add_location(div, file$o, 56, 6, 1700);
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
    		id: create_default_slot_2$4.name,
    		type: "slot",
    		source: "(56:4) <PillContent>",
    		ctx
    	});

    	return block;
    }

    // (72:4) <PillContent>
    function create_default_slot_1$4(ctx) {
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
    			add_location(h1, file$o, 73, 8, 2857);
    			add_location(p, file$o, 74, 8, 2884);
    			add_location(div, file$o, 72, 6, 2843);
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
    		id: create_default_slot_1$4.name,
    		type: "slot",
    		source: "(72:4) <PillContent>",
    		ctx
    	});

    	return block;
    }

    // (38:2) <PillNavigation>
    function create_default_slot$8(ctx) {
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
    				$$slots: { default: [create_default_slot_2$4] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	pillcontent2 = new PillContent({
    			props: {
    				$$slots: { default: [create_default_slot_1$4] },
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
    		id: create_default_slot$8.name,
    		type: "slot",
    		source: "(38:2) <PillNavigation>",
    		ctx
    	});

    	return block;
    }

    function create_fragment$q(ctx) {
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
    				source: `import PillNavigation, { Pill, PillContent, PillList } from './src/_components/pillnavigation';`
    			},
    			$$inline: true
    		});

    	pillnavigation0 = new PillNavigation({
    			props: {
    				$$slots: { default: [create_default_slot_8$2] },
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
    				$$slots: { default: [create_default_slot$8] },
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
    			add_location(h1, file$o, 4, 0, 163);
    			attr_dev(div0, "class", "margin-xl");
    			add_location(div0, file$o, 11, 0, 360);
    			attr_dev(div1, "class", "margin-xl");
    			add_location(div1, file$o, 36, 0, 836);
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
    		id: create_fragment$q.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$q($$self, $$props, $$invalidate) {
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
    		init(this, options, instance$q, create_fragment$q, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "PillNavigation_1",
    			options,
    			id: create_fragment$q.name
    		});
    	}
    }

    /* src/_components/spinner/Spinner.svelte generated by Svelte v3.32.2 */

    const file$p = "src/_components/spinner/Spinner.svelte";

    // (4:0) {#if isLoading}
    function create_if_block$8(ctx) {
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
    			add_location(i0, file$p, 5, 4, 120);
    			attr_dev(i1, "class", "fas fa-circle bounce bounce2");
    			add_location(i1, file$p, 6, 4, 167);
    			attr_dev(i2, "class", "fas fa-circle bounce bounce3");
    			add_location(i2, file$p, 7, 4, 214);
    			attr_dev(div, "class", "loader flex flex--center");
    			add_location(div, file$p, 4, 2, 77);
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
    		id: create_if_block$8.name,
    		type: "if",
    		source: "(4:0) {#if isLoading}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$r(ctx) {
    	let if_block_anchor;
    	let if_block = /*isLoading*/ ctx[0] && create_if_block$8(ctx);

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
    					if_block = create_if_block$8(ctx);
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
    		id: create_fragment$r.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$r($$self, $$props, $$invalidate) {
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
    		init(this, options, instance$r, create_fragment$r, safe_not_equal, { isLoading: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Spinner",
    			options,
    			id: create_fragment$r.name
    		});
    	}

    	get isLoading() {
    		throw new Error("<Spinner>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set isLoading(value) {
    		throw new Error("<Spinner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* documentation/components/Spinner.svelte generated by Svelte v3.32.2 */
    const file$q = "documentation/components/Spinner.svelte";

    function create_fragment$s(ctx) {
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
    				source: `import Spinner from './src/_components/spinner/Spinner.svelte'`
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
    			add_location(h1, file$q, 5, 0, 157);
    			attr_dev(div, "class", "padding-l bg--graa5");
    			add_location(div, file$q, 9, 0, 292);
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
    		init(this, options, instance$s, create_fragment$s, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Spinner_1",
    			options,
    			id: create_fragment$s.name
    		});
    	}
    }

    /* src/_components/toggler/Toggler.svelte generated by Svelte v3.32.2 */
    const file$r = "src/_components/toggler/Toggler.svelte";
    const get_off_slot_changes = dirty => ({});
    const get_off_slot_context = ctx => ({});
    const get_on_slot_changes = dirty => ({});
    const get_on_slot_context = ctx => ({});

    // (20:2) {:else}
    function create_else_block$5(ctx) {
    	let current;
    	const off_slot_template = /*#slots*/ ctx[5].off;
    	const off_slot = create_slot(off_slot_template, ctx, /*$$scope*/ ctx[4], get_off_slot_context);

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
    				if (off_slot.p && dirty & /*$$scope*/ 16) {
    					update_slot(off_slot, off_slot_template, ctx, /*$$scope*/ ctx[4], dirty, get_off_slot_changes, get_off_slot_context);
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
    		id: create_else_block$5.name,
    		type: "else",
    		source: "(20:2) {:else}",
    		ctx
    	});

    	return block;
    }

    // (18:2) {#if itsOn}
    function create_if_block$9(ctx) {
    	let current;
    	const on_slot_template = /*#slots*/ ctx[5].on;
    	const on_slot = create_slot(on_slot_template, ctx, /*$$scope*/ ctx[4], get_on_slot_context);

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
    				if (on_slot.p && dirty & /*$$scope*/ 16) {
    					update_slot(on_slot, on_slot_template, ctx, /*$$scope*/ ctx[4], dirty, get_on_slot_changes, get_on_slot_context);
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
    		id: create_if_block$9.name,
    		type: "if",
    		source: "(18:2) {#if itsOn}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$t(ctx) {
    	let button;
    	let current_block_type_index;
    	let if_block;
    	let current;
    	let mounted;
    	let dispose;
    	const if_block_creators = [create_if_block$9, create_else_block$5];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*itsOn*/ ctx[1]) return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(ctx);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const block = {
    		c: function create() {
    			button = element("button");
    			if_block.c();
    			attr_dev(button, "class", /*baseClass*/ ctx[0]);
    			add_location(button, file$r, 16, 0, 377);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, button, anchor);
    			if_blocks[current_block_type_index].m(button, null);
    			current = true;

    			if (!mounted) {
    				dispose = listen_dev(button, "click", /*toggle*/ ctx[2], false, false, false);
    				mounted = true;
    			}
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
    				if_block.m(button, null);
    			}

    			if (!current || dirty & /*baseClass*/ 1) {
    				attr_dev(button, "class", /*baseClass*/ ctx[0]);
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
    		id: create_fragment$t.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$t($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Toggler", slots, ['on','off']);
    	let { className = undefined } = $$props;
    	let baseClass = `toggle`;
    	if (className) baseClass = `${className} ${baseClass}`;

    	/**
     * Handle user click on toggle element
     */
    	const dispatch = createEventDispatcher();

    	let itsOn = true;

    	function toggle() {
    		$$invalidate(1, itsOn = !itsOn);
    		dispatch("toggle", itsOn);
    	}

    	const writable_props = ["className"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Toggler> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("className" in $$props) $$invalidate(3, className = $$props.className);
    		if ("$$scope" in $$props) $$invalidate(4, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		createEventDispatcher,
    		className,
    		baseClass,
    		dispatch,
    		itsOn,
    		toggle
    	});

    	$$self.$inject_state = $$props => {
    		if ("className" in $$props) $$invalidate(3, className = $$props.className);
    		if ("baseClass" in $$props) $$invalidate(0, baseClass = $$props.baseClass);
    		if ("itsOn" in $$props) $$invalidate(1, itsOn = $$props.itsOn);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [baseClass, itsOn, toggle, className, $$scope, slots];
    }

    class Toggler extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$t, create_fragment$t, safe_not_equal, { className: 3 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Toggler",
    			options,
    			id: create_fragment$t.name
    		});
    	}

    	get className() {
    		throw new Error("<Toggler>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set className(value) {
    		throw new Error("<Toggler>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* documentation/components/Toggler.svelte generated by Svelte v3.32.2 */

    const { console: console_1$1 } = globals;
    const file$s = "documentation/components/Toggler.svelte";
    const get_default_slot_changes_3 = dirty => ({});
    const get_default_slot_context_3 = ctx => ({ slot: "off" });
    const get_default_slot_changes_2 = dirty => ({});
    const get_default_slot_context_2 = ctx => ({ slot: "on" });
    const get_default_slot_changes_1 = dirty => ({});
    const get_default_slot_context_1 = ctx => ({ slot: "off" });
    const get_default_slot_changes$1 = dirty => ({});
    const get_default_slot_context$1 = ctx => ({ slot: "on" });

    // (16:2) <slot slot="on">on</slot>   <slot slot="off">off</slot> </Toggler>  <Prism   language="html"   source={` <Toggler on:toggle="{(event) => {     console.log('hello its on?', event.detail);   }}
    function create_on_slot_1(ctx) {
    	let current;
    	const default_slot_template = /*#slots*/ ctx[0].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], get_default_slot_context$1);
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
    				if (default_slot.p && dirty & /*$$scope*/ 8) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[3], dirty, get_default_slot_changes$1, get_default_slot_context$1);
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
    		source: "(16:2) <slot slot=\\\"on\\\">on</slot>   <slot slot=\\\"off\\\">off</slot> </Toggler>  <Prism   language=\\\"html\\\"   source={` <Toggler on:toggle=\\\"{(event) => {     console.log('hello its on?', event.detail);   }}",
    		ctx
    	});

    	return block;
    }

    // (16:18) on
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
    		source: "(16:18) on",
    		ctx
    	});

    	return block;
    }

    // (17:2) <slot slot="off">off</slot> </Toggler>  <Prism   language="html"   source={` <Toggler on:toggle="{(event) => {     console.log('hello its on?', event.detail);   }}
    function create_off_slot_1(ctx) {
    	let current;
    	const default_slot_template = /*#slots*/ ctx[0].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], get_default_slot_context_1);
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
    				if (default_slot.p && dirty & /*$$scope*/ 8) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[3], dirty, get_default_slot_changes_1, get_default_slot_context_1);
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
    		source: "(17:2) <slot slot=\\\"off\\\">off</slot> </Toggler>  <Prism   language=\\\"html\\\"   source={` <Toggler on:toggle=\\\"{(event) => {     console.log('hello its on?', event.detail);   }}",
    		ctx
    	});

    	return block;
    }

    // (17:19) off
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
    		source: "(17:19) off",
    		ctx
    	});

    	return block;
    }

    // (11:0) <Toggler   on:toggle={(event) => {     console.log('hello its on?', event.detail);   }} >
    function create_default_slot_1$5(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = space();
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot_1$5.name,
    		type: "slot",
    		source: "(11:0) <Toggler   on:toggle={(event) => {     console.log('hello its on?', event.detail);   }} >",
    		ctx
    	});

    	return block;
    }

    // (39:2) <slot slot="on">     <Icon name="angle_down_pro" style="width: 24px; height: 24px;" />   </slot>   <slot slot="off">     <Icon name="angle_up_pro" style="width: 24px; height: 24px;" />   </slot> </Toggler>  <Prism   language="html"   source={` <Toggler on:toggle="{(event) => {     console.log('hello its on?', event.detail);   }}
    function create_on_slot(ctx) {
    	let current;
    	const default_slot_template = /*#slots*/ ctx[0].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], get_default_slot_context_2);
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
    				if (default_slot.p && dirty & /*$$scope*/ 8) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[3], dirty, get_default_slot_changes_2, get_default_slot_context_2);
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
    		source: "(39:2) <slot slot=\\\"on\\\">     <Icon name=\\\"angle_down_pro\\\" style=\\\"width: 24px; height: 24px;\\\" />   </slot>   <slot slot=\\\"off\\\">     <Icon name=\\\"angle_up_pro\\\" style=\\\"width: 24px; height: 24px;\\\" />   </slot> </Toggler>  <Prism   language=\\\"html\\\"   source={` <Toggler on:toggle=\\\"{(event) => {     console.log('hello its on?', event.detail);   }}",
    		ctx
    	});

    	return block;
    }

    // (39:18)      
    function fallback_block_1(ctx) {
    	let icon;
    	let current;

    	icon = new Icon({
    			props: {
    				name: "angle_down_pro",
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
    		id: fallback_block_1.name,
    		type: "fallback",
    		source: "(39:18)      ",
    		ctx
    	});

    	return block;
    }

    // (42:2) <slot slot="off">     <Icon name="angle_up_pro" style="width: 24px; height: 24px;" />   </slot> </Toggler>  <Prism   language="html"   source={` <Toggler on:toggle="{(event) => {     console.log('hello its on?', event.detail);   }}
    function create_off_slot(ctx) {
    	let current;
    	const default_slot_template = /*#slots*/ ctx[0].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], get_default_slot_context_3);
    	const default_slot_or_fallback = default_slot || fallback_block$1(ctx);

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
    				if (default_slot.p && dirty & /*$$scope*/ 8) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[3], dirty, get_default_slot_changes_3, get_default_slot_context_3);
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
    		source: "(42:2) <slot slot=\\\"off\\\">     <Icon name=\\\"angle_up_pro\\\" style=\\\"width: 24px; height: 24px;\\\" />   </slot> </Toggler>  <Prism   language=\\\"html\\\"   source={` <Toggler on:toggle=\\\"{(event) => {     console.log('hello its on?', event.detail);   }}",
    		ctx
    	});

    	return block;
    }

    // (42:19)      
    function fallback_block$1(ctx) {
    	let icon;
    	let current;

    	icon = new Icon({
    			props: {
    				name: "angle_up_pro",
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
    		id: fallback_block$1.name,
    		type: "fallback",
    		source: "(42:19)      ",
    		ctx
    	});

    	return block;
    }

    // (34:0) <Toggler   on:toggle={(event) => {     console.log('hello its on?', event.detail);   }} >
    function create_default_slot$9(ctx) {
    	let t;

    	const block = {
    		c: function create() {
    			t = space();
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t, anchor);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot$9.name,
    		type: "slot",
    		source: "(34:0) <Toggler   on:toggle={(event) => {     console.log('hello its on?', event.detail);   }} >",
    		ctx
    	});

    	return block;
    }

    function create_fragment$u(ctx) {
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
    	let current;

    	prism0 = new Prism$1({
    			props: {
    				language: "js",
    				source: `import Toggler from './src/_components/toggler/Toggler.svelte';`
    			},
    			$$inline: true
    		});

    	toggler0 = new Toggler({
    			props: {
    				$$slots: {
    					default: [create_default_slot_1$5],
    					off: [create_off_slot_1],
    					on: [create_on_slot_1]
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
    					default: [create_default_slot$9],
    					off: [create_off_slot],
    					on: [create_on_slot]
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
    			attr_dev(h1, "class", "color--eb");
    			add_location(h1, file$s, 5, 0, 178);
    			attr_dev(h20, "class", "margin-l--tb");
    			add_location(h20, file$s, 9, 0, 314);
    			attr_dev(h21, "class", "margin-l--tb");
    			add_location(h21, file$s, 31, 0, 724);
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
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const toggler0_changes = {};

    			if (dirty & /*$$scope*/ 8) {
    				toggler0_changes.$$scope = { dirty, ctx };
    			}

    			toggler0.$set(toggler0_changes);
    			const toggler1_changes = {};

    			if (dirty & /*$$scope*/ 8) {
    				toggler1_changes.$$scope = { dirty, ctx };
    			}

    			toggler1.$set(toggler1_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(prism0.$$.fragment, local);
    			transition_in(toggler0.$$.fragment, local);
    			transition_in(prism1.$$.fragment, local);
    			transition_in(toggler1.$$.fragment, local);
    			transition_in(prism2.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(prism0.$$.fragment, local);
    			transition_out(toggler0.$$.fragment, local);
    			transition_out(prism1.$$.fragment, local);
    			transition_out(toggler1.$$.fragment, local);
    			transition_out(prism2.$$.fragment, local);
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
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Toggler", slots, ['default']);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1$1.warn(`<Toggler> was created with unknown prop '${key}'`);
    	});

    	const toggle_handler = event => {
    		console.log("hello its on?", event.detail);
    	};

    	const toggle_handler_1 = event => {
    		console.log("hello its on?", event.detail);
    	};

    	$$self.$$set = $$props => {
    		if ("$$scope" in $$props) $$invalidate(3, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({ Prism: Prism$1, Icon, Toggler });
    	return [slots, toggle_handler, toggle_handler_1, $$scope];
    }

    class Toggler_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$u, create_fragment$u, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Toggler_1",
    			options,
    			id: create_fragment$u.name
    		});
    	}
    }

    /* src/_components/tooltip/Tooltip.svelte generated by Svelte v3.32.2 */

    const file$t = "src/_components/tooltip/Tooltip.svelte";

    function create_fragment$v(ctx) {
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
    			add_location(input, file$t, 10, 2, 275);
    			attr_dev(i0, "class", i0_class_value = "tooltip-toggle fas fa-" + /*iconOff*/ ctx[1]);
    			add_location(i0, file$t, 12, 4, 362);
    			attr_dev(div0, "class", "tooltip-off");
    			add_location(div0, file$t, 11, 2, 332);
    			attr_dev(i1, "class", i1_class_value = "tooltip-toggle fas fa-" + /*iconOn*/ ctx[0]);
    			add_location(i1, file$t, 15, 4, 448);
    			attr_dev(div1, "class", "padding-s");
    			add_location(div1, file$t, 16, 4, 497);
    			attr_dev(div2, "class", "tooltip-on");
    			add_location(div2, file$t, 14, 2, 419);
    			attr_dev(label, "class", /*cssClass*/ ctx[2]);
    			add_location(label, file$t, 9, 0, 248);
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
    				if (default_slot.p && dirty & /*$$scope*/ 32) {
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
    		id: create_fragment$v.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$v($$self, $$props, $$invalidate) {
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

    		init(this, options, instance$v, create_fragment$v, safe_not_equal, {
    			iconOn: 0,
    			iconOff: 1,
    			position: 3,
    			className: 4
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Tooltip",
    			options,
    			id: create_fragment$v.name
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

    /* documentation/components/Tooltip.svelte generated by Svelte v3.32.2 */
    const file$u = "documentation/components/Tooltip.svelte";

    // (13:4) <Tooltip>
    function create_default_slot_1$6(ctx) {
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
    			add_location(p0, file$u, 13, 6, 347);
    			add_location(p1, file$u, 14, 6, 417);
    			add_location(p2, file$u, 15, 6, 492);
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
    		id: create_default_slot_1$6.name,
    		type: "slot",
    		source: "(13:4) <Tooltip>",
    		ctx
    	});

    	return block;
    }

    // (35:4) <Tooltip className="flex-item flex-item--center" position="right">
    function create_default_slot$a(ctx) {
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
    			add_location(p0, file$u, 35, 6, 1094);
    			add_location(p1, file$u, 36, 6, 1164);
    			add_location(p2, file$u, 37, 6, 1239);
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
    		id: create_default_slot$a.name,
    		type: "slot",
    		source: "(35:4) <Tooltip className=\\\"flex-item flex-item--center\\\" position=\\\"right\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$w(ctx) {
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
    				source: `import Tooltip from './src/_components/tooltip';`
    			},
    			$$inline: true
    		});

    	tooltip0 = new Tooltip({
    			props: {
    				$$slots: { default: [create_default_slot_1$6] },
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
    				$$slots: { default: [create_default_slot$a] },
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
    			add_location(h1, file$u, 6, 0, 112);
    			add_location(h20, file$u, 10, 2, 268);
    			attr_dev(div0, "class", "flex margin-l--tb");
    			add_location(div0, file$u, 11, 2, 295);
    			add_location(h21, file$u, 30, 2, 865);
    			attr_dev(h3, "class", "flex-item");
    			add_location(h3, file$u, 33, 4, 974);
    			attr_dev(div1, "class", "flex flex-justify--between grid-width--small margin-l--tb");
    			add_location(div1, file$u, 32, 2, 898);
    			attr_dev(div2, "class", "grid-width--small");
    			add_location(div2, file$u, 7, 0, 147);
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
    		id: create_fragment$w.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$w($$self, $$props, $$invalidate) {
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
    		init(this, options, instance$w, create_fragment$w, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Tooltip_1",
    			options,
    			id: create_fragment$w.name
    		});
    	}
    }

    /* documentation/utilities/Animation/Animation.svelte generated by Svelte v3.32.2 */

    const file$v = "documentation/utilities/Animation/Animation.svelte";

    // (32:8) <Pill>
    function create_default_slot_8$3(ctx) {
    	let i;

    	const block = {
    		c: function create() {
    			i = element("i");
    			attr_dev(i, "class", "fas fa-cubes");
    			add_location(i, file$v, 31, 14, 1066);
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
    		id: create_default_slot_8$3.name,
    		type: "slot",
    		source: "(32:8) <Pill>",
    		ctx
    	});

    	return block;
    }

    // (33:8) <Pill>
    function create_default_slot_7$3(ctx) {
    	let i;

    	const block = {
    		c: function create() {
    			i = element("i");
    			attr_dev(i, "class", "fas fa-code");
    			add_location(i, file$v, 32, 14, 1114);
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
    		id: create_default_slot_7$3.name,
    		type: "slot",
    		source: "(33:8) <Pill>",
    		ctx
    	});

    	return block;
    }

    // (31:6) <PillList>
    function create_default_slot_6$3(ctx) {
    	let pill0;
    	let t;
    	let pill1;
    	let current;

    	pill0 = new Pill({
    			props: {
    				$$slots: { default: [create_default_slot_8$3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	pill1 = new Pill({
    			props: {
    				$$slots: { default: [create_default_slot_7$3] },
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
    		id: create_default_slot_6$3.name,
    		type: "slot",
    		source: "(31:6) <PillList>",
    		ctx
    	});

    	return block;
    }

    // (48:8) <Badge href="#" className="margin-s bg--bluedark animation-fogwave">
    function create_default_slot_5$3(ctx) {
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
    		id: create_default_slot_5$3.name,
    		type: "slot",
    		source: "(48:8) <Badge href=\\\"#\\\" className=\\\"margin-s bg--bluedark animation-fogwave\\\">",
    		ctx
    	});

    	return block;
    }

    // (49:8) <Badge href="#" className="margin-s bg--green animation-fogwave">
    function create_default_slot_4$3(ctx) {
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
    		id: create_default_slot_4$3.name,
    		type: "slot",
    		source: "(49:8) <Badge href=\\\"#\\\" className=\\\"margin-s bg--green animation-fogwave\\\">",
    		ctx
    	});

    	return block;
    }

    // (50:8) <Badge href="#" className="margin-s bg--greendark animation-fogwave">
    function create_default_slot_3$3(ctx) {
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
    		id: create_default_slot_3$3.name,
    		type: "slot",
    		source: "(50:8) <Badge href=\\\"#\\\" className=\\\"margin-s bg--greendark animation-fogwave\\\">",
    		ctx
    	});

    	return block;
    }

    // (36:4) <PillContent>
    function create_default_slot_2$5(ctx) {
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
    				$$slots: { default: [create_default_slot_5$3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	badge1 = new Badge({
    			props: {
    				href: "#",
    				className: "margin-s bg--green animation-fogwave",
    				$$slots: { default: [create_default_slot_4$3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	badge2 = new Badge({
    			props: {
    				href: "#",
    				className: "margin-s bg--greendark animation-fogwave",
    				$$slots: { default: [create_default_slot_3$3] },
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
    			add_location(div0, file$v, 36, 6, 1200);
    			attr_dev(div1, "class", "flex grid-width--small");
    			add_location(div1, file$v, 46, 6, 1544);
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
    		id: create_default_slot_2$5.name,
    		type: "slot",
    		source: "(36:4) <PillContent>",
    		ctx
    	});

    	return block;
    }

    // (53:4) <PillContent>
    function create_default_slot_1$7(ctx) {
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
    		id: create_default_slot_1$7.name,
    		type: "slot",
    		source: "(53:4) <PillContent>",
    		ctx
    	});

    	return block;
    }

    // (29:2) <PillNavigation>
    function create_default_slot$b(ctx) {
    	let div;
    	let pilllist;
    	let t0;
    	let pillcontent0;
    	let t1;
    	let pillcontent1;
    	let current;

    	pilllist = new PillList({
    			props: {
    				$$slots: { default: [create_default_slot_6$3] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	pillcontent0 = new PillContent({
    			props: {
    				$$slots: { default: [create_default_slot_2$5] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	pillcontent1 = new PillContent({
    			props: {
    				$$slots: { default: [create_default_slot_1$7] },
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
    			add_location(div, file$v, 29, 4, 987);
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
    		id: create_default_slot$b.name,
    		type: "slot",
    		source: "(29:2) <PillNavigation>",
    		ctx
    	});

    	return block;
    }

    function create_fragment$x(ctx) {
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
    				$$slots: { default: [create_default_slot$b] },
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
    			add_location(h1, file$v, 19, 2, 519);
    			add_location(h30, file$v, 20, 2, 558);
    			add_location(code0, file$v, 21, 51, 644);
    			add_location(p0, file$v, 21, 2, 595);
    			add_location(p1, file$v, 22, 2, 701);
    			add_location(b, file$v, 24, 4, 773);
    			add_location(code1, file$v, 25, 4, 874);
    			add_location(p2, file$v, 23, 2, 765);
    			add_location(h31, file$v, 27, 2, 930);
    			add_location(h32, file$v, 75, 2, 2637);
    			attr_dev(div0, "class", "width-1of3 padding-m fontweight-bold");
    			add_location(div0, file$v, 78, 6, 2815);
    			attr_dev(div1, "class", "width-1of3 padding-m fontweight-bold");
    			add_location(div1, file$v, 79, 6, 2883);
    			attr_dev(div2, "class", "flex flex-item--center bg--graa7");
    			set_style(div2, "border-bottom", "1px solid rgba(0, 0, 0, .1)");
    			add_location(div2, file$v, 77, 4, 2710);
    			attr_dev(div3, "class", "flex-item--center width-1of3 padding-m");
    			add_location(div3, file$v, 82, 6, 3050);
    			attr_dev(div4, "class", "flex-item--center width-2of3 padding-m");
    			add_location(div4, file$v, 83, 6, 3132);
    			attr_dev(div5, "class", "flex bg--graa7");
    			set_style(div5, "border-bottom", "1px solid rgba(0, 0, 0, .1)");
    			add_location(div5, file$v, 81, 4, 2963);
    			attr_dev(div6, "class", "grid-width--large");
    			add_location(div6, file$v, 76, 2, 2674);
    			attr_dev(div7, "class", "grid-width--large");
    			add_location(div7, file$v, 18, 0, 485);
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
    		id: create_fragment$x.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$x($$self, $$props, $$invalidate) {
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
    		Badge,
    		ArticleCard,
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
    		init(this, options, instance$x, create_fragment$x, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Animation",
    			options,
    			id: create_fragment$x.name
    		});
    	}
    }

    /* documentation/utilities/DataTheme/DataTheme.svelte generated by Svelte v3.32.2 */

    const file$w = "documentation/utilities/DataTheme/DataTheme.svelte";

    // (34:8) <Pill>
    function create_default_slot_5$4(ctx) {
    	let i;

    	const block = {
    		c: function create() {
    			i = element("i");
    			attr_dev(i, "class", "fas fa-cubes");
    			add_location(i, file$w, 33, 14, 1264);
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
    		id: create_default_slot_5$4.name,
    		type: "slot",
    		source: "(34:8) <Pill>",
    		ctx
    	});

    	return block;
    }

    // (35:8) <Pill>
    function create_default_slot_4$4(ctx) {
    	let i;

    	const block = {
    		c: function create() {
    			i = element("i");
    			attr_dev(i, "class", "fas fa-code");
    			add_location(i, file$w, 34, 14, 1312);
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
    		id: create_default_slot_4$4.name,
    		type: "slot",
    		source: "(35:8) <Pill>",
    		ctx
    	});

    	return block;
    }

    // (33:6) <PillList>
    function create_default_slot_3$4(ctx) {
    	let pill0;
    	let t;
    	let pill1;
    	let current;

    	pill0 = new Pill({
    			props: {
    				$$slots: { default: [create_default_slot_5$4] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	pill1 = new Pill({
    			props: {
    				$$slots: { default: [create_default_slot_4$4] },
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
    		id: create_default_slot_3$4.name,
    		type: "slot",
    		source: "(33:6) <PillList>",
    		ctx
    	});

    	return block;
    }

    // (38:4) <PillContent>
    function create_default_slot_2$6(ctx) {
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
    			add_location(p0, file$w, 41, 8, 1532);
    			attr_dev(div0, "data-theme", "lightmode");
    			add_location(div0, file$w, 40, 6, 1495);
    			add_location(p1, file$w, 44, 8, 1615);
    			attr_dev(div1, "data-theme", "darkmode");
    			add_location(div1, file$w, 43, 6, 1579);
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
    		id: create_default_slot_2$6.name,
    		type: "slot",
    		source: "(38:4) <PillContent>",
    		ctx
    	});

    	return block;
    }

    // (48:4) <PillContent>
    function create_default_slot_1$8(ctx) {
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
    		id: create_default_slot_1$8.name,
    		type: "slot",
    		source: "(48:4) <PillContent>",
    		ctx
    	});

    	return block;
    }

    // (31:2) <PillNavigation>
    function create_default_slot$c(ctx) {
    	let div;
    	let pilllist;
    	let t0;
    	let pillcontent0;
    	let t1;
    	let pillcontent1;
    	let current;

    	pilllist = new PillList({
    			props: {
    				$$slots: { default: [create_default_slot_3$4] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	pillcontent0 = new PillContent({
    			props: {
    				$$slots: { default: [create_default_slot_2$6] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	pillcontent1 = new PillContent({
    			props: {
    				$$slots: { default: [create_default_slot_1$8] },
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
    			add_location(div, file$w, 31, 4, 1173);
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
    		id: create_default_slot$c.name,
    		type: "slot",
    		source: "(31:2) <PillNavigation>",
    		ctx
    	});

    	return block;
    }

    function create_fragment$y(ctx) {
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
    				$$slots: { default: [create_default_slot$c] },
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
    			add_location(h1, file$w, 16, 2, 629);
    			add_location(h30, file$w, 17, 2, 669);
    			add_location(code0, file$w, 19, 77, 786);
    			add_location(p0, file$w, 18, 2, 705);
    			add_location(code1, file$w, 23, 5, 856);
    			add_location(b0, file$w, 23, 92, 943);
    			add_location(p1, file$w, 23, 2, 853);
    			add_location(b1, file$w, 25, 4, 973);
    			add_location(code2, file$w, 26, 4, 1071);
    			add_location(p2, file$w, 24, 2, 965);
    			add_location(h31, file$w, 29, 2, 1117);
    			add_location(h32, file$w, 61, 2, 2157);
    			attr_dev(div0, "class", "width-1of3 padding-m fontweight-bold");
    			add_location(div0, file$w, 64, 6, 2344);
    			attr_dev(div1, "class", "width-1of3 padding-m fontweight-bold");
    			add_location(div1, file$w, 65, 6, 2416);
    			attr_dev(div2, "class", "width-1of3 padding-m fontweight-bold");
    			add_location(div2, file$w, 66, 6, 2492);
    			attr_dev(div3, "class", "flex bg--graa7");
    			set_style(div3, "border-bottom", "1px solid rgba(0, 0, 0, .1)");
    			add_location(div3, file$w, 63, 4, 2257);
    			attr_dev(div4, "class", "width-1of3 padding-m");
    			add_location(div4, file$w, 69, 6, 2660);
    			attr_dev(a0, "href", "#/components/accordion");
    			add_location(a0, file$w, 71, 8, 2759);
    			attr_dev(div5, "class", "width-1of3 padding-m");
    			add_location(div5, file$w, 70, 6, 2716);
    			attr_dev(i0, "class", "fas fa-circle color--white");
    			add_location(i0, file$w, 74, 31, 2891);
    			attr_dev(p3, "class", "margin-none");
    			add_location(p3, file$w, 74, 8, 2868);
    			attr_dev(i1, "class", "fas fa-circle color--black");
    			add_location(i1, file$w, 75, 31, 2977);
    			attr_dev(p4, "class", "margin-none");
    			add_location(p4, file$w, 75, 8, 2954);
    			attr_dev(div6, "class", "width-1of3 padding-m");
    			add_location(div6, file$w, 73, 6, 2825);
    			attr_dev(div7, "class", "flex bg--graa7");
    			set_style(div7, "border-bottom", "1px solid rgba(0, 0, 0, .1)");
    			add_location(div7, file$w, 68, 4, 2573);
    			attr_dev(div8, "class", "width-1of3 padding-m");
    			add_location(div8, file$w, 79, 6, 3146);
    			attr_dev(a1, "href", "#/components/card");
    			add_location(a1, file$w, 81, 8, 3252);
    			attr_dev(div9, "class", "width-1of3 padding-m");
    			add_location(div9, file$w, 80, 6, 3209);
    			attr_dev(i2, "class", "fas fa-circle color--white");
    			add_location(i2, file$w, 84, 31, 3374);
    			attr_dev(p5, "class", "margin-none");
    			add_location(p5, file$w, 84, 8, 3351);
    			attr_dev(i3, "class", "fas fa-circle color--black");
    			add_location(i3, file$w, 85, 31, 3460);
    			attr_dev(p6, "class", "margin-none");
    			add_location(p6, file$w, 85, 8, 3437);
    			attr_dev(div10, "class", "width-1of3 padding-m");
    			add_location(div10, file$w, 83, 6, 3308);
    			attr_dev(div11, "class", "flex bg--graa7");
    			set_style(div11, "border-bottom", "1px solid rgba(0, 0, 0, .1)");
    			add_location(div11, file$w, 78, 4, 3059);
    			attr_dev(div12, "class", "grid-width--large");
    			add_location(div12, file$w, 62, 2, 2221);
    			attr_dev(div13, "class", "grid-width--large");
    			add_location(div13, file$w, 15, 0, 595);
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
    		id: create_fragment$y.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$y($$self, $$props, $$invalidate) {
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
    		init(this, options, instance$y, create_fragment$y, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "DataTheme",
    			options,
    			id: create_fragment$y.name
    		});
    	}
    }

    /* documentation/utilities/Flex/Flex.svelte generated by Svelte v3.32.2 */
    const file$x = "documentation/utilities/Flex/Flex.svelte";

    function create_fragment$z(ctx) {
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
    			add_location(h1, file$x, 5, 2, 90);
    			add_location(h30, file$x, 6, 2, 124);
    			add_location(p0, file$x, 7, 2, 154);
    			add_location(p1, file$x, 10, 2, 286);
    			add_location(p2, file$x, 12, 2, 372);
    			add_location(h31, file$x, 15, 2, 479);
    			add_location(code0, file$x, 17, 18, 527);
    			add_location(p3, file$x, 16, 2, 505);
    			attr_dev(div0, "class", "flex bg--graa7 padding-l");
    			add_location(div0, file$x, 20, 2, 726);
    			add_location(h32, file$x, 22, 2, 798);
    			add_location(p4, file$x, 23, 2, 821);
    			attr_dev(div1, "class", "flex-item bg--graa5 padding-l");
    			add_location(div1, file$x, 26, 4, 1051);
    			attr_dev(div2, "class", "flex-item bg--graa5 padding-l");
    			add_location(div2, file$x, 27, 4, 1114);
    			attr_dev(div3, "class", "flex-item bg--graa5 padding-l");
    			add_location(div3, file$x, 28, 4, 1177);
    			attr_dev(div4, "class", "flex flex--center bg--graa7");
    			set_style(div4, "height", "100px");
    			add_location(div4, file$x, 25, 2, 982);
    			add_location(h33, file$x, 31, 2, 1248);
    			add_location(i0, file$x, 32, 34, 1312);
    			add_location(p5, file$x, 32, 2, 1280);
    			attr_dev(div5, "class", "flex-item bg--graa5 padding-l");
    			add_location(div5, file$x, 35, 4, 1524);
    			attr_dev(div6, "class", "flex-item bg--graa5 padding-l");
    			add_location(div6, file$x, 36, 4, 1587);
    			attr_dev(div7, "class", "flex-item bg--graa5 padding-l");
    			add_location(div7, file$x, 37, 4, 1650);
    			attr_dev(div8, "class", "flex flex-justify--start bg--graa7");
    			add_location(div8, file$x, 34, 2, 1471);
    			attr_dev(div9, "class", "flex-item bg--graa5 padding-l");
    			add_location(div9, file$x, 41, 4, 1862);
    			attr_dev(div10, "class", "flex-item bg--graa5 padding-l");
    			add_location(div10, file$x, 42, 4, 1925);
    			attr_dev(div11, "class", "flex-item bg--graa5 padding-l");
    			add_location(div11, file$x, 43, 4, 1988);
    			attr_dev(div12, "class", "flex flex-justify--center bg--graa7");
    			add_location(div12, file$x, 40, 2, 1808);
    			attr_dev(div13, "class", "flex-item bg--graa5 padding-l");
    			add_location(div13, file$x, 47, 4, 2194);
    			attr_dev(div14, "class", "flex-item bg--graa5 padding-l");
    			add_location(div14, file$x, 48, 4, 2257);
    			attr_dev(div15, "class", "flex-item bg--graa5 padding-l");
    			add_location(div15, file$x, 49, 4, 2320);
    			attr_dev(div16, "class", "flex flex-justify--end bg--graa7");
    			add_location(div16, file$x, 46, 2, 2143);
    			attr_dev(div17, "class", "flex-item bg--graa5 padding-l");
    			add_location(div17, file$x, 53, 4, 2532);
    			attr_dev(div18, "class", "flex-item bg--graa5 padding-l");
    			add_location(div18, file$x, 54, 4, 2595);
    			attr_dev(div19, "class", "flex-item bg--graa5 padding-l");
    			add_location(div19, file$x, 55, 4, 2658);
    			attr_dev(div20, "class", "flex flex-justify--around bg--graa7");
    			add_location(div20, file$x, 52, 2, 2478);
    			attr_dev(div21, "class", "flex-item bg--graa5 padding-l");
    			add_location(div21, file$x, 59, 4, 2872);
    			attr_dev(div22, "class", "flex-item bg--graa5 padding-l");
    			add_location(div22, file$x, 60, 4, 2935);
    			attr_dev(div23, "class", "flex-item bg--graa5 padding-l");
    			add_location(div23, file$x, 61, 4, 2998);
    			attr_dev(div24, "class", "flex flex-justify--between bg--graa7");
    			add_location(div24, file$x, 58, 2, 2817);
    			add_location(h34, file$x, 64, 2, 3069);
    			add_location(i1, file$x, 65, 30, 3125);
    			add_location(p6, file$x, 65, 2, 3097);
    			add_location(code1, file$x, 66, 76, 3269);
    			add_location(p7, file$x, 66, 2, 3195);
    			attr_dev(div25, "class", "flex-item bg--graa5 padding-l");
    			add_location(div25, file$x, 69, 4, 3488);
    			attr_dev(div26, "class", "flex-item bg--graa5 padding-l");
    			add_location(div26, file$x, 70, 4, 3551);
    			attr_dev(div27, "class", "flex-item bg--graa5 padding-l");
    			add_location(div27, file$x, 71, 4, 3614);
    			attr_dev(div28, "class", "flex flex-align--start bg--graa7");
    			set_style(div28, "height", "100px");
    			add_location(div28, file$x, 68, 2, 3414);
    			attr_dev(div29, "class", "flex-item bg--graa5 padding-l");
    			add_location(div29, file$x, 75, 4, 3845);
    			attr_dev(div30, "class", "flex-item bg--graa5 padding-l");
    			add_location(div30, file$x, 76, 4, 3908);
    			attr_dev(div31, "class", "flex-item bg--graa5 padding-l");
    			add_location(div31, file$x, 77, 4, 3971);
    			attr_dev(div32, "class", "flex flex-align--center bg--graa7");
    			set_style(div32, "height", "100px");
    			add_location(div32, file$x, 74, 2, 3770);
    			attr_dev(div33, "class", "flex-item bg--graa5 padding-l");
    			add_location(div33, file$x, 81, 4, 4196);
    			attr_dev(div34, "class", "flex-item bg--graa5 padding-l");
    			add_location(div34, file$x, 82, 4, 4259);
    			attr_dev(div35, "class", "flex-item bg--graa5 padding-l");
    			add_location(div35, file$x, 83, 4, 4322);
    			attr_dev(div36, "class", "flex flex-align--end bg--graa7");
    			set_style(div36, "height", "100px");
    			add_location(div36, file$x, 80, 2, 4124);
    			attr_dev(div37, "class", "flex-item bg--graa5 padding-l");
    			add_location(div37, file$x, 87, 4, 4553);
    			attr_dev(div38, "class", "flex-item bg--graa5 padding-l");
    			add_location(div38, file$x, 88, 4, 4616);
    			attr_dev(div39, "class", "flex-item bg--graa5 padding-l");
    			add_location(div39, file$x, 89, 4, 4679);
    			attr_dev(div40, "class", "flex flex-align--strech bg--graa7");
    			set_style(div40, "height", "100px");
    			add_location(div40, file$x, 86, 2, 4478);
    			add_location(h35, file$x, 92, 2, 4750);
    			add_location(p8, file$x, 93, 2, 4777);
    			attr_dev(div41, "class", "flex-item bg--graa5 padding-l");
    			add_location(div41, file$x, 96, 4, 4999);
    			attr_dev(div42, "class", "flex-item bg--graa5 padding-l");
    			add_location(div42, file$x, 97, 4, 5064);
    			attr_dev(div43, "class", "flex-item bg--graa5 padding-l");
    			add_location(div43, file$x, 98, 4, 5129);
    			attr_dev(div44, "class", "flex flex-column bg--graa7");
    			add_location(div44, file$x, 95, 2, 4954);
    			attr_dev(div45, "class", "flex-item bg--graa5 padding-l");
    			add_location(div45, file$x, 102, 4, 5343);
    			attr_dev(div46, "class", "flex-item bg--graa5 padding-l");
    			add_location(div46, file$x, 103, 4, 5408);
    			attr_dev(div47, "class", "flex-item bg--graa5 padding-l");
    			add_location(div47, file$x, 104, 4, 5473);
    			attr_dev(div48, "class", "flex flex-column--reverse bg--graa7");
    			add_location(div48, file$x, 101, 2, 5289);
    			attr_dev(div49, "class", "flex-item bg--graa5 padding-l");
    			add_location(div49, file$x, 108, 4, 5681);
    			attr_dev(div50, "class", "flex-item bg--graa5 padding-l");
    			add_location(div50, file$x, 109, 4, 5746);
    			attr_dev(div51, "class", "flex-item bg--graa5 padding-l");
    			add_location(div51, file$x, 110, 4, 5811);
    			attr_dev(div52, "class", "flex flex-row--reverse bg--graa7");
    			add_location(div52, file$x, 107, 2, 5630);
    			add_location(h36, file$x, 113, 2, 5884);
    			add_location(p9, file$x, 114, 2, 5905);
    			add_location(code2, file$x, 119, 27, 6098);
    			add_location(p10, file$x, 118, 2, 6067);
    			attr_dev(div53, "class", "flex-item bg--graa5 padding-l");
    			add_location(div53, file$x, 125, 6, 6332);
    			attr_dev(div54, "class", "flex-item bg--graa5 padding-l");
    			add_location(div54, file$x, 126, 6, 6399);
    			attr_dev(div55, "class", "flex-item bg--graa5 padding-l");
    			add_location(div55, file$x, 127, 6, 6466);
    			attr_dev(div56, "class", "flex-item bg--graa5 padding-l");
    			add_location(div56, file$x, 128, 6, 6533);
    			attr_dev(div57, "class", "flex-item bg--graa5 padding-l");
    			add_location(div57, file$x, 129, 6, 6600);
    			attr_dev(div58, "class", "flex-item bg--graa5 padding-l");
    			add_location(div58, file$x, 130, 6, 6667);
    			attr_dev(div59, "class", "flex-item bg--graa5 padding-l");
    			add_location(div59, file$x, 131, 6, 6734);
    			attr_dev(div60, "class", "flex-item bg--graa5 padding-l");
    			add_location(div60, file$x, 132, 6, 6801);
    			attr_dev(div61, "class", "flex-item bg--graa5 padding-l");
    			add_location(div61, file$x, 133, 6, 6868);
    			attr_dev(div62, "class", "flex bg--graa7");
    			add_location(div62, file$x, 124, 4, 6297);
    			attr_dev(div63, "class", "flex-item bg--graa5 padding-l");
    			add_location(div63, file$x, 138, 4, 7075);
    			attr_dev(div64, "class", "flex-item bg--graa5 padding-l");
    			add_location(div64, file$x, 139, 4, 7140);
    			attr_dev(div65, "class", "flex-item bg--graa5 padding-l");
    			add_location(div65, file$x, 140, 4, 7205);
    			attr_dev(div66, "class", "flex-item bg--graa5 padding-l");
    			add_location(div66, file$x, 141, 4, 7270);
    			attr_dev(div67, "class", "flex-item bg--graa5 padding-l");
    			add_location(div67, file$x, 142, 4, 7335);
    			attr_dev(div68, "class", "flex-item bg--graa5 padding-l");
    			add_location(div68, file$x, 143, 4, 7400);
    			attr_dev(div69, "class", "flex-item bg--graa5 padding-l");
    			add_location(div69, file$x, 144, 4, 7465);
    			attr_dev(div70, "class", "flex-item bg--graa5 padding-l");
    			add_location(div70, file$x, 145, 4, 7530);
    			attr_dev(div71, "class", "flex-item bg--graa5 padding-l");
    			add_location(div71, file$x, 146, 4, 7595);
    			attr_dev(div72, "class", "flex flex-wrap--wrap bg--graa7");
    			add_location(div72, file$x, 137, 2, 7026);
    			add_location(h37, file$x, 149, 2, 7668);
    			add_location(p11, file$x, 150, 2, 7689);
    			add_location(code3, file$x, 152, 4, 7781);
    			add_location(p12, file$x, 151, 2, 7773);
    			attr_dev(div73, "class", "flex-item bg--graa5 padding-l");
    			add_location(div73, file$x, 159, 4, 8083);
    			attr_dev(div74, "class", "flex-item bg--graa5 padding-l");
    			add_location(div74, file$x, 160, 4, 8153);
    			attr_dev(div75, "class", "flex-item flex-item--noshrink bg--graa5 padding-l");
    			add_location(div75, file$x, 161, 4, 8223);
    			attr_dev(div76, "class", "flex-item flex-item--noshrink bg--graa5 padding-l");
    			add_location(div76, file$x, 162, 4, 8316);
    			attr_dev(div77, "class", "flex-item flex-item--noshrink bg--graa5 padding-l");
    			add_location(div77, file$x, 163, 4, 8409);
    			attr_dev(div78, "class", "flex-item flex-item--noshrink bg--graa5 padding-l");
    			add_location(div78, file$x, 164, 4, 8502);
    			attr_dev(div79, "class", "flex-item flex-item--noshrink bg--graa5 padding-l");
    			add_location(div79, file$x, 165, 4, 8595);
    			attr_dev(div80, "class", "flex bg--graa7");
    			add_location(div80, file$x, 158, 2, 8050);
    			add_location(code4, file$x, 169, 4, 8704);
    			add_location(p13, file$x, 168, 2, 8696);
    			attr_dev(div81, "class", "flex-item bg--graa5 padding-l");
    			add_location(div81, file$x, 176, 4, 8990);
    			attr_dev(div82, "class", "flex-item flex-item--grow bg--graa5 padding-l");
    			add_location(div82, file$x, 177, 4, 9060);
    			attr_dev(div83, "class", "flex-item bg--graa5 padding-l");
    			add_location(div83, file$x, 178, 4, 9144);
    			attr_dev(div84, "class", "flex bg--graa7");
    			add_location(div84, file$x, 175, 2, 8957);
    			attr_dev(div85, "class", "grid-width--large");
    			add_location(div85, file$x, 4, 0, 56);
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
    		id: create_fragment$z.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$z($$self, $$props, $$invalidate) {
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
    		init(this, options, instance$z, create_fragment$z, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Flex",
    			options,
    			id: create_fragment$z.name
    		});
    	}
    }

    const routes = [
        { link: '/', title: 'Overblik', component: Home },
        { link: '/components/accordion', title: 'Accordion', type: 'component', component: Accordion_1 },
        { link: '/components/articlecard', title: 'Article card', type: 'component', component: ArticleCard_1 },
        { link: '/components/badge', title: 'Badge', type: 'component', component: Badge_1 },
        { link: '/components/button', title: 'Button', type: 'component', component: Button_1 },
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
    ];

    /* documentation/routes/Sidebar.svelte generated by Svelte v3.32.2 */
    const file$y = "documentation/routes/Sidebar.svelte";

    function get_each_context$2(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[5] = list[i];
    	return child_ctx;
    }

    function get_each_context_1$1(ctx, list, i) {
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
			: ""}` + " width-1of1 padding-m--t fontsize-large" + " svelte-rco0e8");

    			attr_dev(a, "href", /*menuItem*/ ctx[5].link);
    			add_location(a, file$y, 43, 6, 1475);
    			attr_dev(div, "class", "sidebar-menuitem-container padding-l svelte-rco0e8");
    			add_location(div, file$y, 42, 4, 1418);
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
			: ""}` + " width-1of1 padding-m--t fontsize-large" + " svelte-rco0e8")) {
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
    function create_each_block_1$1(ctx) {
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
			: ""}` + " width-1of1 padding-m--t padding-m--rl" + " svelte-rco0e8");

    			attr_dev(a, "href", /*menuItem*/ ctx[5].link);
    			add_location(a, file$y, 56, 8, 1924);
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
			: ""}` + " width-1of1 padding-m--t padding-m--rl" + " svelte-rco0e8")) {
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
    		id: create_each_block_1$1.name,
    		type: "each",
    		source: "(56:6) {#each componentMenuItems as menuItem}",
    		ctx
    	});

    	return block;
    }

    // (70:6) {#each utilityMenuItems as menuItem}
    function create_each_block$2(ctx) {
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
			: ""}` + " width-1of1 padding-m--t padding-m--rl" + " svelte-rco0e8");

    			attr_dev(a, "href", /*menuItem*/ ctx[5].link);
    			add_location(a, file$y, 70, 8, 2394);
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
			: ""}` + " width-1of1 padding-m--t padding-m--rl" + " svelte-rco0e8")) {
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
    		id: create_each_block$2.name,
    		type: "each",
    		source: "(70:6) {#each utilityMenuItems as menuItem}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$A(ctx) {
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
    		each_blocks_1[i] = create_each_block_1$1(get_each_context_1$1(ctx, each_value_1, i));
    	}

    	let each_value = /*utilityMenuItems*/ ctx[3];
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
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
    			add_location(img, file$y, 34, 8, 1149);
    			attr_dev(a, "href", "/#/");
    			attr_dev(a, "class", "svelte-rco0e8");
    			add_location(a, file$y, 33, 6, 1126);
    			add_location(div0, file$y, 32, 4, 1114);
    			attr_dev(p, "class", "flex--grow width-1of1 color--graa1 fontweight-bold");
    			add_location(p, file$y, 38, 6, 1282);
    			attr_dev(div1, "class", "flex-item flex-item--center");
    			add_location(div1, file$y, 37, 4, 1234);
    			attr_dev(div2, "class", "flex flex-justify--around sidebar-logo-container padding-m--rl svelte-rco0e8");
    			add_location(div2, file$y, 31, 2, 1033);
    			attr_dev(div3, "class", "sidebar-submenu-title fontsize-small svelte-rco0e8");
    			add_location(div3, file$y, 53, 4, 1764);
    			attr_dev(div4, "class", "sidebar-submenu-items");
    			add_location(div4, file$y, 54, 4, 1835);
    			attr_dev(div5, "class", "sidebar-menuitem-container padding-l svelte-rco0e8");
    			add_location(div5, file$y, 52, 2, 1709);
    			attr_dev(div6, "class", "sidebar-submenu-title fontsize-small svelte-rco0e8");
    			add_location(div6, file$y, 67, 4, 2237);
    			attr_dev(div7, "class", "sidebar-submenu-items");
    			add_location(div7, file$y, 68, 4, 2307);
    			attr_dev(div8, "class", "sidebar-menuitem-container padding-l svelte-rco0e8");
    			add_location(div8, file$y, 66, 2, 2182);
    			attr_dev(div9, "id", "sidebar-menu");
    			attr_dev(div9, "class", "sidebar-container height-100vh bg--white margin-l--r svelte-rco0e8");
    			add_location(div9, file$y, 30, 0, 946);
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
    					const child_ctx = get_each_context_1$1(ctx, each_value_1, i);

    					if (each_blocks_1[i]) {
    						each_blocks_1[i].p(child_ctx, dirty);
    					} else {
    						each_blocks_1[i] = create_each_block_1$1(child_ctx);
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
    					const child_ctx = get_each_context$2(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block$2(child_ctx);
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
    		id: create_fragment$A.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$A($$self, $$props, $$invalidate) {
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
    		init(this, options, instance$A, create_fragment$A, safe_not_equal, { menuItemList: 4 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Sidebar",
    			options,
    			id: create_fragment$A.name
    		});
    	}

    	get menuItemList() {
    		throw new Error("<Sidebar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set menuItemList(value) {
    		throw new Error("<Sidebar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* documentation/routes/Navbar.svelte generated by Svelte v3.32.2 */

    const file$z = "documentation/routes/Navbar.svelte";

    function create_fragment$B(ctx) {
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
    			add_location(i, file$z, 3, 7, 248);
    			attr_dev(a, "href", "https://github.com/EkstraBladetUdvikling/eb-designsystem");
    			attr_dev(a, "target", "_blank");
    			attr_dev(a, "class", "flex svelte-h1hg39");
    			add_location(a, file$z, 2, 4, 145);
    			attr_dev(nav, "class", "navmenu flex flex-align--center padding-xl--rl svelte-h1hg39");
    			add_location(nav, file$z, 1, 2, 80);
    			attr_dev(div, "class", "navmenu-container position-fixed width-1of1 margin-xl--b bg-red svelte-h1hg39");
    			add_location(div, file$z, 0, 0, 0);
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
    		id: create_fragment$B.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$B($$self, $$props) {
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
    		init(this, options, instance$B, create_fragment$B, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Navbar",
    			options,
    			id: create_fragment$B.name
    		});
    	}
    }

    /* documentation/App.svelte generated by Svelte v3.32.2 */
    const file$A = "documentation/App.svelte";

    function create_fragment$C(ctx) {
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
    			attr_dev(div, "class", "content-container padding-xl svelte-1lkmjac");
    			add_location(div, file$A, 16, 0, 454);
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
    		id: create_fragment$C.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$C($$self, $$props, $$invalidate) {
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
    		init(this, options, instance$C, create_fragment$C, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment$C.name
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
//# sourceMappingURL=bundle.js.map
