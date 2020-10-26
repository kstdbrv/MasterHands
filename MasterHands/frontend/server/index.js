require('ignore-styles')

require('@babel/register')({
    ignore: [/(node_module)/],
    presets: ['@babel/preset-env', '@babel/preset-react']
});

require('asset-require-hook')({
    extensions: ['jpg', 'png', 'gif','webp'],
    limit: 10000,
    name:'/static/images/[name].[ext]'
});

require('./server')