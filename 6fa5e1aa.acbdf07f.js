(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{152:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return p})),t.d(r,"default",(function(){return m}));var n=t(3),o=t(7),a=(t(0),t(258)),i={id:"migration-from-import",title:"Migration from GraphQL Import",sidebar_label:"From GraphQL Import",description:"Migration from GraphQL Import"},c={unversionedId:"migration-from-import",id:"migration-from-import",isDocsHomePage:!1,title:"Migration from GraphQL Import",description:"Migration from GraphQL Import",source:"@site/docs/migration-from-import.md",slug:"/migration-from-import",permalink:"/docs/migration-from-import",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/migration-from-import.md",version:"current",sidebar_label:"From GraphQL Import",sidebar:"someSidebar",previous:{title:"Migration from Merge GraphQL Schemas",permalink:"/docs/migration-from-merge-graphql-schemas"},next:{title:"@graphql-tools/batch-delegate",permalink:"/docs/api/modules/batch-delegate"}},p=[],l={toc:p};function m(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"GraphQL Import was an NPM package that allows you import and export definitions using ",Object(a.b)("inlineCode",{parentName:"p"},"#import")," syntax in ",Object(a.b)("inlineCode",{parentName:"p"},".graphql")," files. So this package has been moved under GraphQL Tools monorepo. It is really easy to migrate. You need two different packages ",Object(a.b)("inlineCode",{parentName:"p"},"@graphql-tools/load")," and ",Object(a.b)("inlineCode",{parentName:"p"},"@graphql-tools/graphql-file-loader"),"."),Object(a.b)("p",null,"Before;"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { importSchema } from 'graphql-import';\nimport { makeExecutableSchema } from 'graphql-tools';\n\nconst typeDefs = importSchema(join(__dirname, 'schema.graphql'));\nconst resolvers = {\n  Query: {...}\n};\nconst schema = makeExecutableSchema({ typeDefs, resolvers });\n")),Object(a.b)("p",null,"After;"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { loadSchemaSync } from '@graphql-tools/load';\nimport { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';\nimport { addResolversToSchema } from '@graphql-tools/schema';\n\nconst schema = loadSchemaSync(join(__dirname, 'schema.graphql'), { loaders: [new GraphQLFileLoader()] });\nconst resolvers = { Query: {...} };\n\nconst schemaWithResolvers = addResolversToSchema({\n  schema,\n  resolvers,\n});\n")),Object(a.b)("p",null,"You can learn more about those new packages in ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/schema-loading"}),"Schema Loading")," section."))}m.isMDXComponent=!0},258:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return f}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),m=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=m(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=m(t),d=n,f=s["".concat(i,".").concat(d)]||s[d]||u[d]||a;return t?o.a.createElement(f,c(c({ref:r},l),{},{components:t})):o.a.createElement(f,c({ref:r},l))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);