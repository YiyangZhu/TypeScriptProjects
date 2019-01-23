
/*
Default exports
Each module can optionally export a default export. Default exports
are marked with the keyword default; and there can only be one default
export per module. default exports are really handy. For instance,
a library like JQuery might have a default export of jQuery or $, which we'd probably
also import under the name $ or jQuery.
*/
declare let $: JQuery;
export default $;
