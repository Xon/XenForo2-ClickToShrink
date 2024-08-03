/*
 * This file is part of a XenForo add-on.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

var SV = window.SV || {};
SV.$ = SV.$ || window.jQuery || null;

!function(window, document)
{
    "use strict";
    const $ = SV.$, xf22 = typeof XF.on !== "function";

    SV.BbBlockShrink = (() =>
    {
        const containerSel = '.bbCodeBlock--expandable';
        const watch = () =>
        {
            if (xf22)
            {
                $(document).on('click', '.bbCodeBlock-shrinkLink', (e) => {
                    const $target = $(e.target);
                    $target.closest(containerSel).removeClassTransitioned('is-expanded', XF.layoutChange);
                });
            }
            else
            {
                XF.onDelegated(document, 'click', '.bbCodeBlock-shrinkLink', e =>
                {
                    XF.Transition.removeClassTransitioned(e.target.closest(containerSel), 'is-expanded', XF.layoutChange)
                })
            }
        }

        return {
            watch: watch
        }
    })();

    if (xf22)
    {
        $(document).on('xf:page-load-complete', () => {
            SV.BbBlockShrink.watch();
        });
    }
    else
    {
        XF.on(document, 'xf:page-load-complete', () => {
            SV.BbBlockShrink.watch();
        })
    }
}
(window, document);
