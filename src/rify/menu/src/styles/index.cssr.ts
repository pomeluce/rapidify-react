import { c, cB, cNotB } from '../../../_utils';

// --rify-bezier
// --rify-bezier-x
// --rify-border-color
// --rify-border-radius
// --rify-border-radius-lg
// --rify-box-shadow
// --rify-font-size
// --rify-font-size-lg
// --rify-group-line-height
// --rify-group-title-color
// --rify-line-width
// --rify-line-type
// --rify-margin
// --rify-margin-xs
// --rify-menu-active-bar-border-width
// --rify-menu-active-bar-width
// --rify-menu-active-bar-height
// --rify-menu-collapsed-icon-size
// --rify-menu-collapsed-width
// --rify-menu-disabled-color
// --rify-menu-horizontal-border-radius
// --rify-menu-horizontal-line-height
// --rify-menu-horizontal-hover-bg
// --rify-menu-hover-color
// --rify-menu-hover-bg
// --rify-menu-active-bg
// --rify-menu-icon-margin-inline-end
// --rify-menu-item-bg
// --rify-menu-item-color
// --rify-menu-item-height
// --rify-menu-item-margin-block
// --rify-menu-item-margin-inline
// --rify-menu-item-selected-color
// --rify-menu-item-selected-bg
// --rify-menu-item-width
// --rify-menu-z-index-popup
// --rify-motion-duration
// --rify-motion-duration-mid
// --rify-motion-ease-out-circ
// --rify-motion-ease-in-out-circ
// --rify-motion-ease-in-quint
// --rify-motion-ease-out-quint
// --rify-padding
// --rify-padding-inline
// --rify-text-color

// dark theme
// --rify-dark-border-color
// --rify-dark-color
// --rify-dark-group-title-color
// --rify-menu-dark-disabled-color
// --rify-menu-dark-hover-color
// --rify-menu-dark-hover-bg
// --rify-menu-dark-item-bg
// --rify-menu-dark-item-color
// --rify-menu-dark-item-selected-bg
// --rify-menu-dark-item-selected-color

export default c([
  cB(
    'menu',
    {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
      color: 'var(--rify-text-color)',
      fontSize: 'var(--rify-font-size)',
      lineHeight: 0,
      listStyle: 'none',
      paddingInlineStart: 0,
      outline: 'none',
      transition: 'width var(--rify-motion-duration) var(--rify-bezier) 0s',
    },
    [
      c('ul, ol', {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      }),
      c('&:before', {
        content: '""',
        display: 'table',
        boxSizing: 'border-box',
      }),
      c('&:after', {
        content: '""',
        display: 'table',
        clear: 'both',
        boxSizing: 'border-box',
      }),
      c(
        ({ props: { bPrefix } }) => `[class^="${(bPrefix as string).substring(1)}menu"], [class*=" ${(bPrefix as string).substring(1)}menu"]`,
        {
          boxSizing: 'border-box',
        },
        [
          c('&:before, &:after', {
            boxSizing: 'border-box',
          }),
        ],
      ),
      cB('menu-submenu', { transformOrigin: '0 0' }, [
        cB('menu-sub', {
          cursor: 'initial',
          transition: 'background var(--rify-motion-duration) var(--rify-bezier),padding var(--rify-motion-duration) var(--rify-bezier)',
        }),
      ]),
      cB(({ props: { bPrefix } }) => `menu-submenu, ${bPrefix}menu-submenu-inline`, {
        transition:
          'border-color var(--rify-motion-duration) var(--rify-bezier),background var(--rify-motion-duration) var(--rify-bezier),padding var(--rify-motion-duration-mid) var(--rify-bezier)',
      }),
      cB(({ props: { bPrefix } }) => `menu-item, ${bPrefix}menu-submenu, ${bPrefix}menu-submenu-title`, { borderRadius: 'var(--rify-border-radius)' }),
      cB(
        ({ props: { bPrefix } }) => `menu-item, ${bPrefix}menu-submenu-title`,
        {
          position: 'relative',
          display: 'block',
          margin: 0,
          whiteSpace: 'nowrap',
          cursor: 'pointer',
          transition: 'border-color var(--rify-motion-duration),background var(--rify-motion-duration),padding var(--rify-motion-duration) var(--rify-bezier);',
        },
        [
          cB('menu-item-icon + span, .i-icon + span', {
            marginInlineStart: 'var(--rify-menu-icon-margin-inline-end)',
            opacity: 1,
            transition: 'opacity var(--rify-motion-duration) var(--rify-bezier),margin var(--rify-motion-duration),color var(--rify-motion-duration)',
          }),
        ],
      ),
      cB('menu-item-group-title', {
        padding: 'calc(var(--rify-padding) / 2) var(--rify-padding)',
        fontSize: 'var(--rify-font-size)',
        lineHeight: 'var(--rify-group-line-height)',
        transition: 'all var(--rify-motion-duration)',
      }),
      cB('menu-item-group', [
        cB('menu-item-group-list', {
          margin: 0,
          padding: 0,
        }),
      ]),
      cB(({ props: { bPrefix } }) => `menu-submenu-expand-icon, ${bPrefix}menu-submenu-arrow`, {
        position: 'absolute',
        top: '50%',
        insetInlineEnd: 'var(--rify-margin)',
        width: 'calc(var(--rify-font-size) / 7 * 5)',
        color: 'currentcolor',
        transform: 'translateY(-50%)',
        transition: 'transform var(--rify-motion-duration) var(--rify-bezier),opacity var(--rify-motion-duration)',
      }),
      cB('menu-submenu-open', [
        cNotB('menu-submenu-inline', [
          c(({ props: { bPrefix } }) => `> ${bPrefix}menu-submenu-title > ${bPrefix}menu-submenu-arrow`, {
            transform: 'translateY(calc(calc(var(--rify-font-size)/7 * 5) * 0.2 * -1))',
          }),
        ]),
      ]),
      cB('menu-submenu-arrow', [
        c('&::before', {
          transform: 'rotate(45deg) translateY(calc(calc(calc(var(--rify-font-size)/7 * 5) * 0.25) * -1))',
        }),
        c('&::after', {
          transform: 'rotate(-45deg) translateY(calc(calc(var(--rify-font-size)/7 * 5) * 0.25))',
        }),
        c('&::before, &::after', {
          content: '""',
          position: 'absolute',
          width: 'calc(calc(var(--rify-font-size)/7 * 5) * 0.6)',
          height: 'calc(calc(var(--rify-font-size)/7 * 5) * 0.15)',
          backgroundColor: 'currentcolor',
          borderRadius: 'var(--rify-border-radius)',
          transition:
            'background var(--rify-motion-duration) var(--rify-bezier),transform var(--rify-motion-duration) var(--rify-bezier),top var(--rify-motion-duration) var(--rify-bezier),color var(--rify-motion-duration) var(--rify-bezier)',
        }),
      ]),
      cB('menu-submenu-open', [
        cNotB('menu-submenu-inline', [
          c(
            ({ props: { bPrefix } }) => `> ${bPrefix}menu-submenu-title > ${bPrefix}menu-submenu-arrow`,
            {
              transform: 'translateY(calc(calc(var(--rify-font-size)/7 * 5) * 0.2 * -1))',
            },
            [
              c('&::after', {
                transform: 'rotate(-45deg) translateX(calc(calc(calc(var(--rify-font-size)/7 * 5) * 0.25) * -1))',
              }),
              c('&::before', {
                transform: 'rotate(45deg) translateX(calc(calc(var(--rify-font-size)/7 * 5) * 0.25))',
              }),
            ],
          ),
        ]),
      ]),
      cB('menu-item-divider', {
        overflow: 'hidden',
        lineHeight: 0,
        borderColor: 'var(--rify-dark-border-color)',
        borderStyle: 'var(--rify-line-type)',
        borderWidth: 0,
        borderTopWidth: 'var(--rify-line-width)',
        marginBlock: 'var(--rify-line-width)',
        padding: 0,
      }),
      cB('motion-collapse-legacy', {
        overflow: 'hidden',
      }),
      cB('motion-collapse-legacy-active', {
        transition: 'height var(--rify-motion-duration-mid) var(--rify-bezier),opacity var(--rify-motion-duration-mid) var(--rify-bezier)!important',
      }),
      cB('motion-collapse', {
        overflow: 'hidden',
        transition: 'height var(--rify-motion-duration-mid) var(--rify-bezier),opacity var(--rify-motion-duration-mid) var(--rify-bezier)!important',
      }),
      cB(
        ({ props: { bPrefix } }) => `menu-item-disabled, ${bPrefix}menu-submenu-disabled`,
        {
          background: '0 0!important',
          cursor: 'not-allowed',
        },
        [
          c('&::after', { borderColor: 'transparent!important' }),
          c('& a', { color: 'inherit!important' }),
          c(({ props: { bPrefix } }) => `> ${bPrefix}menu-submenu-title`, {
            color: 'inherit!important',
            cursor: 'not-allowed',
          }),
        ],
      ),
    ],
  ),
  cB('menu-inline', { width: '100%' }, [
    cNotB('menu-root', { boxShadow: 'none' }, [
      cB(
        ({ props: { bPrefix } }) => `menu-item, ${bPrefix}menu-submenu-title`,
        {
          display: 'flex',
          alignItems: 'center',
          transition: 'border-color var(--rify-motion-duration),background var(--rify-motion-duration),padding var(--rify-motion-duration-mid) var(--rify-bezier-x)',
        },
        [
          c(({ props: { bPrefix } }) => `> ${bPrefix}menu-title-content`, {
            flex: 'auto',
            minWidth: 0,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }),
          c('> *', {
            flex: 'none',
          }),
        ],
      ),
    ]),
    cB('menu-item', {
      position: 'relative',
      overflow: 'hidden',
      listStylePosition: 'inside',
      listStyleType: 'disc',
    }),
    cB(({ props: { bPrefix } }) => `menu-item, ${bPrefix}menu-submenu-title`, {
      height: 'var(--rify-menu-item-height)',
      lineHeight: 'var(--rify-menu-item-height)',
      paddingInline: 'var(--rify-padding)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      marginInline: 'var(--rify-menu-item-margin-inline)',
      marginBlock: 'var(--rify-menu-item-margin-block)',
      width: 'var(--rify-menu-item-width)',
    }),
    cB('menu-item-group-list', [
      cB('menu-submenu-title', {
        paddingInlineEnd: 'calc(calc(var(--rify-font-size) / 7 * 5) + var(--rify-padding) + var(--rify-margin-xs))',
      }),
    ]),
    cB('menu-submenu-title', {
      paddingInlineEnd: 'calc(calc(var(--rify-font-size) / 7 * 5) + var(--rify-padding) + var(--rify-margin-xs))',
    }),
    c(({ props: { bPrefix } }) => `> ${bPrefix}menu-item, > ${bPrefix}menu-submenu > ${bPrefix}menu-submenu-title`, {
      height: 'var(--rify-menu-item-height)',
      lineHeight: 'var(--rify-menu-item-height)',
    }),
    cB('menu-sub', [
      cNotB(
        'menu-inline',
        {
          padding: 0,
          border: 0,
          borderRadius: 0,
          boxShadow: 'none',
        },
        [
          cB('menu-item-group-title', {
            paddingInlineStart: 'calc(var(--rify-padding) * 2)',
          }),
        ],
      ),
    ]),
    cB('menu-submenu-arrow', [
      c('&:before', {
        transform: 'rotate(-45deg) translateX(calc(calc(var(--rify-font-size)/7 * 5) * 0.25))',
      }),
      c('&:after', {
        transform: 'rotate(45deg) translateX(calc(calc(calc(var(--rify-font-size)/7 * 5) * 0.25) * -1))',
      }),
    ]),
  ]),
  cB('menu-vertical', [
    cNotB('menu-root', { boxShadow: 'none' }),
    cB('menu-item', {
      position: 'relative',
      overflow: 'hidden',
    }),
    cB(({ props: { bPrefix } }) => `menu-item, ${bPrefix}menu-submenu-title`, {
      height: 'var(--rify-menu-item-height)',
      lineHeight: 'var(--rify-menu-item-height)',
      paddingInline: 'var(--rify-padding)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      marginInline: 'var(--rify-menu-item-margin-inline)',
      marginBlock: 'var(--rify-menu-item-margin-block)',
      width: 'var(--rify-menu-item-width)',
    }),
    cB('menu-item-group-list', [
      cB('menu-submenu-title', {
        paddingInlineEnd: 'calc(calc(var(--rify-font-size) / 7 * 5) + var(--rify-padding) + var(--rify-margin-xs))',
      }),
    ]),
    cB('menu-submenu-title', {
      paddingInlineEnd: 'calc(calc(var(--rify-font-size) / 7 * 5) + var(--rify-padding) + var(--rify-margin-xs))',
    }),
    c(({ props: { bPrefix } }) => `> ${bPrefix}menu-item, > ${bPrefix}menu-submenu > ${bPrefix}menu-submenu-title`, {
      height: 'var(--rify-menu-item-height)',
      lineHeight: 'var(--rify-menu-item-height)',
    }),
  ]),
  cB(
    'menu-horizontal',
    {
      lineHeight: 'var(--rify-menu-horizontal-line-height)',
      border: 0,
      borderBottom: 'var(--rify-line-width) var(--rify-line-type) var(--rify-border-color)',
      boxShadow: 'none',
    },
    [
      c('&::after', {
        content: '"\\20"',
        display: 'block',
        clear: 'both',
        height: 0,
      }),
      cB(({ props: { bPrefix } }) => `menu-item, ${bPrefix}menu-submenu`, {
        position: 'relative',
        display: 'inline-block',
        verticalAlign: 'bottom',
        paddingInline: 'var(--rify-padding-inline)',
      }),
      cB(({ props: { bPrefix } }) => `menu-item, ${bPrefix}menu-submenu-title`, {
        transition: 'border-color var(--rify-motion-duration),background var(--rify-motion-duration)',
      }),
      cB('menu-submenu-arrow', { display: 'none' }),
    ],
  ),
  cB('menu-overflow', { display: 'flex' }, [cB('menu-item', { flex: 'none' })]),
  cB(
    'menu-light',
    {
      color: 'var(--rify-menu-item-color)',
      background: 'var(--rify-color)',
    },
    [
      c(
        ({ props: { bPrefix } }) => `> ${bPrefix}menu`,
        {
          color: 'var(--rify-menu-item-color)',
          background: 'var(--rify-color)',
        },
        [
          cNotB('menu-root', [
            c(({ props: { bPrefix } }) => `${bPrefix}menu-inline, ${bPrefix}menu-vertical`, {
              borderInlineEnd: 'var(--rify-menu-active-bar-border-width) var(--rify-line-type) var(--rify-border-color)',
            }),
          ]),
          cNotB('menu-horizontal', [
            c(
              ({ props: { bPrefix } }) => `> ${bPrefix}menu-item, > ${bPrefix}menu-submenu`,
              {
                top: 'var(--rify-menu-active-bar-border-width)',
                marginTop: 'calc(var(--rify-menu-active-bar-border-width) * -1)',
                marginBottom: 0,
                borderRadius: 'var(--rify-menu-horizontal-border-radius)',
              },
              [
                c('&::after', {
                  content: '""',
                  position: 'absolute',
                  insetInline: 'var(--rify-padding-inline)',
                  bottom: 0,
                  borderBottom: 'var(--rify-menu-active-bar-height) solid transparent',
                  transition: 'border-color var(--rify-motion-duration) var(--rify-bezier)',
                }),
                c('&:hover', {
                  background: 'var(--rify-menu-horizontal-hover-bg)',
                }),
              ],
            ),
            c(({ props: { bPrefix } }) => `> ${bPrefix}menu-item-active, > ${bPrefix}menu-submenu-active, > ${bPrefix}menu-item-open, > ${bPrefix}menu-submenu-open`, {
              background: 'var(--rify-menu-horizontal-hover-bg)',
            }),
            c(
              ({ props: { bPrefix } }) => `> ${bPrefix}menu-item-selected, > ${bPrefix}menu-submenu-selected`,
              {
                color: 'var(--rify-menu-item-selected-color)',
                backgroundColor: 'var(--rify-menu-horizontal-hover-bg)',
              },
              [
                c('&::after', {
                  borderBottomWidth: 'var(--rify-menu-active-bar-height)',
                  borderBottomColor: 'var(--rify-menu-item-selected-color)',
                }),
              ],
            ),
          ]),
        ],
      ),
      cNotB('menu-root', [
        c(({ props: { bPrefix } }) => `&${bPrefix}menu-inline, &${bPrefix}menu-vertical`, {
          borderInlineEnd: 'var(--rify-menu-active-bar-border-width) var(--rify-line-type) var(--rify-border-color)',
        }),
      ]),
      cB('menu-submenu-selected', [
        c(({ props: { bPrefix } }) => `> ${bPrefix}menu-submenu-title`, {
          color: 'var(--rify-menu-item-selected-color)',
        }),
      ]),
      cNotB('menu-inline', [
        cB('menu-sub', [
          cNotB('menu-inline', {
            background: 'var(--rify-menu-item-bg)',
          }),
        ]),
        cB(
          'menu-item',
          {
            position: 'relative',
          },
          [
            c('&::after', {
              content: '""',
              position: 'absolute',
              insetBlock: 0,
              insetInlineEnd: 0,
              borderInlineEnd: 'var(--rify-menu-active-bar-width) solid var(--rify-menu-item-selected-color)',
              transform: 'scaleY(.0001)',
              opacity: 0,
              transition: 'transform var(--rify-motion-duration-mid) var(--rify-bezier-x),opacity var(--rify-motion-duration-mid) var(--rify-bezier-x)',
            }),
          ],
        ),
        cB(
          ({ props: { bPrefix } }) => `menu-selected, ${bPrefix}menu-item-selected`,
          [
            c('&::after', {
              transform: 'scaleY(1)',
              opacity: 1,
              transition: 'transform var(--rify-motion-duration-mid) var(--rify-bezier),opacity var(--rify-motion-duration-mid) var(--rify-bezier)',
            }),
          ],
        ),
      ]),
      cB(({ props: { bPrefix } }) => `menu-item, ${bPrefix}menu-submenu-title`, {
        color: 'var(--rify-menu-item-color)',
      }),
      cB('menu-item-selected', {
        color: 'var(--rify-menu-item-selected-color)',
        backgroundColor: 'var(--rify-menu-item-selected-bg)',
      }),
      cB('menu-item-group-title', {
        color: 'var(--rify-group-title-color)',
      }),
      cNotB('menu-horizontal', [
        c(
          ({ props: { bPrefix } }) => `> ${bPrefix}menu-item, > ${bPrefix}menu-submenu`,
          {
            top: 'var(--rify-menu-active-bar-border-width)',
            marginTop: 'calc(var(--rify-menu-active-bar-border-width) * -1)',
            marginBottom: 0,
            borderRadius: 'var(--rify-menu-horizontal-border-radius)',
          },
          [
            c('&::after', {
              content: '""',
              position: 'absolute',
              insetInline: 'var(--rify-padding-inline)',
              bottom: 0,
              borderBottom: 'var(--rify-menu-active-bar-height) solid transparent',
              transition: 'border-color var(--rify-motion-duration) var(--rify-bezier)',
            }),
            c('&:hover', {
              background: 'var(--rify-menu-horizontal-hover-bg)',
            }),
          ],
        ),
        c(({ props: { bPrefix } }) => `> ${bPrefix}menu-item-active, > ${bPrefix}menu-submenu-active, > ${bPrefix}menu-item-open, > ${bPrefix}menu-submenu-open`, {
          background: 'var(--rify-menu-horizontal-hover-bg)',
        }),
        c(
          ({ props: { bPrefix } }) => `> ${bPrefix}menu-item-selected, > ${bPrefix}menu-submenu-selected`,
          {
            color: 'var(--rify-menu-item-selected-color)',
            backgroundColor: 'var(--rify-menu-horizontal-hover-bg)',
          },
          [
            c('&::after', {
              borderBottomWidth: 'var(--rify-menu-active-bar-height)',
              borderBottomColor: 'var(--rify-menu-item-selected-color)',
            }),
          ],
        ),
      ]),
      cB(({ props: { bPrefix } }) => `menu-item-disabled, ${bPrefix}menu-submenu-disabled`, {
        color: 'var(--rify-menu-disabled-color)!important',
      }),
      cB('memu-item', [
        c(
          ({ props: { bPrefix } }) => `&:not(${bPrefix}menu-item-selected):not(${bPrefix}menu-submenu-selected)`,
          [
            c(({ props: { bPrefix } }) => `&:hover, &> ${bPrefix}menu-submenu-title:hover`, {
              color: 'var(--rify-menu-hover-color)',
            }),
          ],
        ),
      ]),
      c(
        ({ props: { bPrefix } }) => `&:not(${bPrefix}menu-horizontal)`,
        [
          cB(
            ({ props: { bPrefix } }) => `menu-item:not(${bPrefix}menu-item-selected)`,
            [
              c('&:hover', {
                backgroundColor: 'var(--rify-menu-hover-bg)',
              }),
              c('&:active', {
                backgroundColor: 'var(--rify-menu-active-bg)',
              }),
            ],
          ),
          cB('menu-submenu-title', [
            c('&:hover', {
              backgroundColor: 'var(--rify-menu-hover-bg)',
            }),
            c('&:active', {
              backgroundColor: 'var(--rify-menu-active-bg)',
            }),
          ]),
        ],
      ),
    ],
  ),
  cB(
    'menu-dark',
    {
      color: 'var(--rify-menu-dark-item-color)',
      background: 'var(--rify-dark-color)',
    },
    [
      c(
        ({ props: { bPrefix } }) => `> ${bPrefix}menu`,
        {
          color: 'var(--rify-menu-dark-item-color)',
          background: 'var(--rify-dark-color)',
        },
        [
          cNotB('menu-root', [
            c(({ props: { bPrefix } }) => `&${bPrefix}menu-inline, &${bPrefix}menu-vertical`, {
              borderInlineEnd: '0 var(--rify-line-type) var(--rify-border-color)',
            }),
          ]),

          cB('memu-item', [
            c(
              ({ props: { bPrefix } }) => `&:not(${bPrefix}menu-item-selected):not(${bPrefix}menu-submenu-selected)`,
              [
                c(({ props: { bPrefix } }) => `&:hover, &> ${bPrefix}menu-submenu-title:hover`, {
                  color: 'var(--rify-menu-dark-hover-color)',
                }),
              ],
            ),
          ]),
        ],
      ),
      cNotB('menu-root', [
        c(({ props: { bPrefix } }) => `&${bPrefix}menu-inline, &${bPrefix}menu-vertical`, {
          borderInlineEnd: '0 var(--rify-line-type) var(--rify-border-color)',
        }),
      ]),
      cB('menu-submenu-selected', [
        c(({ props: { bPrefix } }) => `> ${bPrefix}menu-submenu-title`, {
          color: 'var(--rify-menu-dark-item-selected-color)',
        }),
      ]),

      cNotB('menu-inline', [
        cB('menu-sub', [
          cNotB('menu-inline', {
            background: 'var(--rify-menu-dark-item-bg)',
          }),
        ]),
        cB(
          'menu-item',
          {
            position: 'relative',
          },
          [
            c('&::after', {
              content: '""',
              position: 'absolute',
              insetBlock: 0,
              insetInlineEnd: 0,
              borderInlineEnd: 'var(--rify-menu-active-bar-width) solid var(--rify-menu-dark-item-selected-color)',
              transform: 'scaleY(.0001)',
              opacity: 0,
              transition: 'transform var(--rify-motion-duration-mid) var(--rify-bezier-x),opacity var(--rify-motion-duration-mid) var(--rify-bezier-x)',
            }),
          ],
        ),
        cB(
          ({ props: { bPrefix } }) => `menu-selected, ${bPrefix}menu-item-selected`,
          [
            c('&::after', {
              transform: 'scaleY(1)',
              opacity: 1,
              transition: 'transform var(--rify-motion-duration-mid) var(--rify-bezier),opacity var(--rify-motion-duration-mid) var(--rify-bezier)',
            }),
          ],
        ),
      ]),
      cB(({ props: { bPrefix } }) => `menu-item, ${bPrefix}menu-submenu-title`, {
        color: 'var(--rify-menu-dark-item-color)',
      }),
      cB('menu-item-selected', {
        color: 'var(--rify-menu-dark-item-selected-color)',
        backgroundColor: 'var(--rify-menu-dark-item-selected-bg)',
      }),
      cB('menu-item-group-title', {
        color: 'var(--rify-dark-group-title-color)',
      }),
      cNotB(
        'menu-horizontal',
        {
          borderBottom: 0,
        },
        [
          c(({ props: { bPrefix } }) => `> ${bPrefix}menu-item, > ${bPrefix}menu-submenu-title`, {
            color: 'var(--rify-menu-dark-item-color)',
          }),
          c(
            ({ props: { bPrefix } }) => `> ${bPrefix}menu-item, > ${bPrefix}menu-submenu`,
            {
              top: 0,
              marginTop: 'calc(0px * -1)',
              marginBottom: 0,
              borderRadius: 'var(--rify-menu-horizontal-border-radius)',
            },
            [
              c('&::after', {
                content: '""',
                position: 'absolute',
                insetInline: 'var(--rify-padding-inline)',
                bottom: 0,
                borderBottom: 'var(--rify-menu-active-bar-height) solid transparent',
                transition: 'border-color var(--rify-motion-duration) var(--rify-bezier)',
              }),
              c(
                '&:hover',
                {
                  background: 'var(--rify-menu-horizontal-hover-bg)',
                },
                [
                  c('&:after', {
                    borderBottomWidth: 0,
                    borderBottomColor: 'var(--rify-menu-dark-item-selected-color)',
                  }),
                ],
              ),
            ],
          ),
          c(
            ({ props: { bPrefix } }) => `> ${bPrefix}menu-item-active, > ${bPrefix}menu-submenu-active, > ${bPrefix}menu-item-open, > ${bPrefix}menu-submenu-open`,
            {
              background: 'var(--rify-menu-horizontal-hover-bg)',
            },
            [
              c('&:after', {
                borderBottomWidth: 0,
                borderBottomColor: 'var(--rify-menu-dark-item-selected-color)',
              }),
            ],
          ),
          cB('menu-item-selected', {
            color: 'var(--rify-menu-dark-item-selected-color)',
            backgroundColor: 'var(--rify-menu-dark-item-selected-bg)',
          }),
          c(
            ({ props: { bPrefix } }) => `> ${bPrefix}menu-item-selected, > ${bPrefix}menu-submenu-selected`,
            {
              color: 'var(--rify-menu-dark-item-selected-color)',
              backgroundColor: 'var(--rify-menu-dark-item-selected-bg)',
            },
            [
              c('&::after', {
                borderBottomWidth: 0,
                borderBottomColor: 'var(--rify-menu-dark-item-selected-color)',
              }),
              c('&:hover', { backgroundColor: 'var(--rify-menu-dark-item-selected-bg)' }),
            ],
          ),
        ],
      ),
      cB(({ props: { bPrefix } }) => `menu-item-disabled, ${bPrefix}menu-submenu-disabled`, {
        color: 'var(--rify-menu-dark-disabled-color)!important',
      }),
      cB('memu-item', [
        c(
          ({ props: { bPrefix } }) => `&:not(${bPrefix}menu-item-selected):not(${bPrefix}menu-submenu-selected)`,
          [
            c(({ props: { bPrefix } }) => `&:hover, &> ${bPrefix}menu-submenu-title:hover`, {
              color: 'var(--rify-menu-dark-hover-color)',
            }),
          ],
        ),
      ]),
      c(
        ({ props: { bPrefix } }) => `&:not(${bPrefix}menu-horizontal)`,
        [
          cB(
            ({ props: { bPrefix } }) => `menu-item:not(${bPrefix}menu-item-selected)`,
            [
              c('&:hover', {
                backgroundColor: 'var(--rify-menu-dark-hover-bg)',
              }),
              c('&:active', {
                backgroundColor: 'transparent',
              }),
            ],
          ),
          cB('menu-submenu-title', [
            c('&:hover', {
              backgroundColor: 'var(--rify-menu-dark-hover-bg)',
            }),
            c('&:active', {
              backgroundColor: 'transparent',
            }),
          ]),
        ],
      ),
    ],
  ),
  cB('menu-hidden', {
    display: 'none',
  }),
  cB('menu-submenu-hidden', {
    display: 'none',
  }),
  cB(
    'menu-inline-collapsed',
    {
      width: 'var(--rify-menu-collapsed-width)',
    },
    [
      c(
        ({ props: { bPrefix } }) =>
          `> ${bPrefix}menu-item, > ${bPrefix}menu-item-group > ${bPrefix}menu-item-group-list > ${bPrefix}menu-item, > ${bPrefix}menu-item-group > ${bPrefix}menu-item-group-list > ${bPrefix}menu-submenu > ${bPrefix}menu-submenu-title, > ${bPrefix}menu-submenu > ${bPrefix}menu-submenu-title`,
        {
          insetInlineStart: 0,
          paddingInline: 'calc(50% - calc(var(--rify-font-size-lg)/2) - var(--rify-menu-item-margin-inline))',
          textOverflow: 'clip',
        },
        [
          cB('menu-item-icon, i-icon', {
            margin: 0,
            fontSize: 'var(--rify-menu-collapsed-icon-size)',
            lineHeight: 'var(--rify-menu-item-height)',
          }),
          cB('menu-item-icon + span, i-icon + span', {
            display: 'inline-block',
            opacity: 0,
          }),
          cB(({ props: { bPrefix } }) => `menu-submenu-arrow, ${bPrefix}menu-submenu-expand-icon`, {
            opacity: 0,
          }),
        ],
      ),
      cB('menu-submenu-arrow', [
        c('&:before', {
          transform: 'rotate(-45deg) translateX(calc(calc(var(--rify-font-size)/7 * 5) * 0.25))',
        }),
        c('&:after', {
          transform: 'rotate(45deg) translateX(calc(calc(calc(var(--rify-font-size)/7 * 5) * 0.25) * -1))',
        }),
      ]),
    ],
  ),
  cB('menu-inline-collapsed-tooltip', {
    pointerEvents: 'none',
  }),
  cB(
    'menu-submenu-popup',
    {
      position: 'absolute',
      zIndex: 'var(--rify-menu-z-index-popup)',
      borderRadius: 'var(--rify-border-radius-lg)',
      boxShadow: 'none',
      transformOrigin: '0 0',
    },
    [
      cNotB('menu-submenu', {
        background: '0 0',
      }),
      c('&::before', {
        content: '""',
        position: 'absolute',
        inset: 0,
        zIndex: -1,
        width: '100%',
        height: '100%',
        opacity: 0,
      }),
      c(({ props: { bPrefix } }) => `> ${bPrefix}menu`, { borderRadius: 'var(--rify-border-radius-lg)' }, [
        cB(({ props: { bPrefix } }) => `menu-submenu-expand-icon, ${bPrefix}menu-submenu-arrow`, {
          position: 'absolute',
          top: '50%',
          insetInlineEnd: 'var(--rify-margin)',
          width: 'calc(var(--rify-font-size) / 7 * 5)',
          color: 'currentcolor',
          transform: 'translateY(-50%)',
          transition: 'transform var(--rify-motion-duration) var(--rify-bezier),opacity var(--rify-motion-duration)',
        }),
        cB('menu-submenu-arrow', [
          c('&::before', {
            transform: 'rotate(45deg) translateY(calc(calc(calc(var(--rify-font-size)/7 * 5) * 0.25) * -1))',
          }),
          c('&::after', {
            transform: 'rotate(-45deg) translateY(calc(calc(var(--rify-font-size)/7 * 5) * 0.25))',
          }),
          c('&::before, &::after', {
            content: '""',
            position: 'absolute',
            width: 'calc(calc(var(--rify-font-size)/7 * 5) * 0.6)',
            height: 'calc(calc(var(--rify-font-size)/7 * 5) * 0.15)',
            backgroundColor: 'currentcolor',
            borderRadius: 'var(--rify-border-radius)',
            transition:
              'background var(--rify-motion-duration) var(--rify-bezier),transform var(--rify-motion-duration) var(--rify-bezier),top var(--rify-motion-duration) var(--rify-bezier),color var(--rify-motion-duration) var(--rify-bezier)',
          }),
          cB(({ props: { bPrefix } }) => `menu-item, ${bPrefix}menu-submenu-title`, {
            position: 'relative',
            display: 'block',
            margin: 0,
            whiteSpace: 'nowrap',
            cursor: 'pointer',
            transition: 'border-color var(--rify-motion-duration),background var(--rify-motion-duration),padding var(--rify-motion-duration) var(--rify-bezier)',
          }),
        ]),
      ]),
      cB('menu-vertical', { boxShadow: 'var(--rify-box-shadow)' }),
    ],
  ),
  cB(({ props: { bPrefix } }) => `menu-submenu-placement-leftTop, ${bPrefix}menu-submenu-placement-bottomRight, ${bPrefix}menu-submenu`, {
    transformOrigin: '100% 0',
  }),
  cB(({ props: { bPrefix } }) => `menu-submenu-placement-leftBottom, ${bPrefix}menu-submenu-placement-topRight, ${bPrefix}menu-submenu`, {
    transformOrigin: '100% 100%',
  }),
  cB(({ props: { bPrefix } }) => `menu-submenu-placement-rightBottom, ${bPrefix}menu-submenu-placement-topLeft, ${bPrefix}menu-submenu`, {
    transformOrigin: '0 100%',
  }),
  cB(({ props: { bPrefix } }) => `menu-submenu-placement-bottomLeft, ${bPrefix}menu-submenu-placement-rightTop, ${bPrefix}menu-submenu`, {
    transformOrigin: '0 0',
  }),
  cB(({ props: { bPrefix } }) => `menu-submenu-placement-leftTop, ${bPrefix}menu-submenu-placement-leftBottom`, {
    paddingInlineEnd: 'calc(var(--rify-padding) / 2)',
  }),
  cB(({ props: { bPrefix } }) => `menu-submenu-placement-rightTop, ${bPrefix}menu-submenu-placement-rightBottom`, {
    paddingInlineStart: 'calc(var(--rify-padding) / 2)',
  }),
  cB(({ props: { bPrefix } }) => `menu-submenu-placement-topRight, ${bPrefix}menu-submenu-placement-topLeft`, {
    paddingBottom: 'calc(var(--rify-padding) / 2)',
  }),
  cB(({ props: { bPrefix } }) => `menu-submenu-placement-bottomRight, ${bPrefix}menu-submenu-placement-bottomLeft`, {
    paddingTop: 'calc(var(--rify-padding) / 2)',
  }),
  cB(({ props: { bPrefix } }) => `zoom-big-enter, ${bPrefix}zoom-big-appear`, {
    animationDuration: 'var(--rify-motion-duration-mid)',
    animationFillMode: 'both',
    animationPlayState: 'paused',
  }),
  cB('zoom-big-leave', {
    animationDuration: 'var(--rify-motion-duration-mid)',
    animationFillMode: 'both',
    animationPlayState: 'paused',
  }),
  c(({ props: { bPrefix } }) => `${bPrefix}zoom-big-enter${bPrefix}zoom-big-enter-active, ${bPrefix}zoom-big-appear${bPrefix}zoom-big-appear-active`, {
    animationName: 'rifyZoomBigIn',
    animationPlayState: 'running',
  }),
  c(({ props: { bPrefix } }) => `${bPrefix}zoom-big-leave${bPrefix}zoom-big-leave-active`, {
    animationName: 'rifyZoomBigOut',
    animationPlayState: 'running',
    pointerEvents: 'none',
  }),
  cB(({ props: { bPrefix } }) => `zoom-big-enter, ${bPrefix}zoom-big-appear`, {
    transform: 'scale(0)',
    opacity: 0,
    animationTimingFunction: 'var(--rify-motion-ease-out-circ)',
  }),
  cB(({ props: { bPrefix } }) => `zoom-big-enter-prepare, ${bPrefix}zoom-big-appear-prepare`, {
    transform: 'none',
  }),
  cB('zoom-big-leave', {
    animationTimingFunction: 'var(--rify-motion-ease-in-out-circ)',
  }),
  cB(({ props: { bPrefix } }) => `slide-up-enter, ${bPrefix}slide-up-appear`, {
    animationDuration: 'var(--rify-motion-duration-mid)',
    animationFillMode: 'both',
    animationPlayState: 'paused',
  }),
  cB('slide-up-leave', {
    animationDuration: 'var(--rify-motion-duration-mid)',
    animationFillMode: 'both',
    animationPlayState: 'paused',
  }),
  c(({ props: { bPrefix } }) => `${bPrefix}slide-up-enter${bPrefix}slide-up-enter-active, ${bPrefix}slide-up-appear${bPrefix}slide-up-appear-active`, {
    animationName: 'rifySlideUpIn',
    animationPlayState: 'running',
  }),
  c(({ props: { bPrefix } }) => `${bPrefix}slide-up-leave${bPrefix}slide-up-leave-active`, {
    animationName: 'rifySlideUpOut',
    animationPlayState: 'running',
    pointerEvents: 'none',
  }),
  cB(({ props: { bPrefix } }) => `slide-up-enter, ${bPrefix}slide-up-appear`, {
    transform: 'scale(0)',
    transformOrigin: '0% 0%',
    opacity: 0,
    animationTimingFunction: 'var(--rify-motion-ease-out-quint)',
  }),
  cB(({ props: { bPrefix } }) => `slide-up-enter-prepare, ${bPrefix}slide-up-appear-prepare`, {
    transform: 'scale(1)',
  }),
  cB('slide-up-leave', {
    animationTimingFunction: 'var(--rify-motion-ease-in-quint)',
  }),
  cB(({ props: { bPrefix } }) => `slide-down-enter, ${bPrefix}slide-down-appear`, {
    animationDuration: 'var(--rify-motion-duration-mid)',
    animationFillMode: 'both',
    animationPlayState: 'paused',
  }),
  cB('slide-down-leave', {
    animationDuration: 'var(--rify-motion-duration-mid)',
    animationFillMode: 'both',
    animationPlayState: 'paused',
  }),
  c(({ props: { bPrefix } }) => `${bPrefix}slide-down-enter${bPrefix}slide-down-enter-active, ${bPrefix}slide-down-appear${bPrefix}slide-down-appear-active`, {
    animationName: 'rifySlideDownIn',
    animationPlayState: 'running',
  }),
  c(({ props: { bPrefix } }) => `${bPrefix}slide-down-leave${bPrefix}slide-down-leave-active`, {
    animationName: 'rifySlideDownOut',
    animationPlayState: 'running',
    pointerEvents: 'none',
  }),
  cB(({ props: { bPrefix } }) => `slide-down-enter, ${bPrefix}slide-down-appear`, {
    transform: 'scale(0)',
    transformOrigin: '0% 0%',
    opacity: 0,
    animationTimingFunction: 'var(--rify-motion-ease-out-quint)',
  }),
  cB(({ props: { bPrefix } }) => `slide-down-enter-prepare, ${bPrefix}slide-down-appear-prepare`, {
    transform: 'scale(1)',
  }),
  cB('slide-down-leave', {
    animationTimingFunction: 'var(--rify-motion-ease-in-quint)',
  }),
  c('@keyframes rifySlideUpIn', {
    '0%': {
      transform: 'scaleY(.8)',
      transformOrigin: '0% 0%',
      opacity: 0,
    },
    '100%': {
      transform: 'scaleY(1)',
      transformOrigin: '0% 0%',
      opacity: 1,
    },
  }),
  c('@keyframes rifySlideUpOut', {
    '0%': {
      transform: 'scaleY(1)',
      transformOrigin: '0% 0%',
      opacity: 1,
    },
    '100%': {
      transform: 'scaleY(.8)',
      transformOrigin: '0% 0%',
      opacity: 0,
    },
  }),
  c('@keyframes rifySlideDownIn', {
    '0%': {
      transform: 'scaleY(.8)',
      transformOrigin: '0% 0%',
      opacity: 0,
    },
    '100%': {
      transform: 'scaleY(1)',
      transformOrigin: '0% 0%',
      opacity: 1,
    },
  }),
  c('@keyframes rifySlideDownOut', {
    '0%': {
      transform: 'scaleY(1)',
      transformOrigin: '0% 0%',
      opacity: 1,
    },
    '100%': {
      transform: 'scaleY(.8)',
      transformOrigin: '0% 0%',
      opacity: 0,
    },
  }),
  c('@keyframes rifyZoomBigIn', {
    '0%': {
      transform: 'scale(.8)',
      opacity: 0,
    },
    '100%': {
      transform: 'scale(1)',
      opacity: 1,
    },
  }),
  c('@keyframes rifyZoomBigOut', {
    '0%': {
      transform: 'scale(1)',
    },
    '100%': {
      transform: 'scale(.8)',
      opacity: 0,
    },
  }),
]);
