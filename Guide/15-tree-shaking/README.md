## tree shaking 条件：
- Use ES2015 module syntax (i.e. import and export).
- Ensure no compilers transform your ES2015 module syntax into CommonJS modules (this is the default behavior of the popular Babel preset @babel/preset-env).
- Add a "sideEffects" property to your project's package.json file.
- Use the production mode configuration option to enable various optimizations including minification and tree shaking.

## 行内标注无副作用：
```
/*#__PURE__*/
```