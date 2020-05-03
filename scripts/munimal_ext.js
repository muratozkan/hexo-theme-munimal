// Extensions used in templates

/* global hexo */
'use strict';

hexo.extend.helper.register('site_title', function (page) {
    if (page.title) {
        return page.title + ' - ' + hexo.config.title;
    }
    return hexo.config.title;
});
