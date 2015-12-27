Package.describe({
  name: 'less-globals',
  summary: 'Global CSS styles that are eagerly included',
  documentation: null,
});

Package.onUse(function(api) {

  api.addFiles([
    // Reset goes first
    'reset.less',

    // Everything else
    'base.less',
    'button.less',
    'form.less',
    'icon.less',
    'layout.less',
    'link.less',
    'list-items.less',
    'menu.less',
    'message.less',
    'nav.less',
    'notification.less',
  ]);

  api.addAssets([
    'icon/todos.eot',
    'icon/todos.svg',
    'icon/todos.ttf',
    'icon/todos.woff',
  ], 'client');
});
