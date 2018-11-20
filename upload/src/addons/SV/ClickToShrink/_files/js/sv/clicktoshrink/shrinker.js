/*
 * This file is part of a XenForo add-on.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

var SV = window.SV || {};
(function($, window, document, _undefined)
{
    "use strict";

    SV.BbBlockShrink = (function()
    {
        var containerSel = '.bbCodeBlock--expandable';

        function watch()
        {
            $(document).on('click', '.bbCodeBlock-shrinkLink', function(e)
            {
                var $target = $(e.target);
                $target.closest(containerSel).removeClassTransitioned('is-expanded', XF.layoutChange);
            });
        }

        return {
            watch: watch
        }
    })();

    $(document).on('xf:page-load-complete', function () {
        SV.BbBlockShrink.watch();
    });

}(jQuery, window, document));
