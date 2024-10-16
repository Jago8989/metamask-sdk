(self.webpackChunk_metamask_sdk_ui=self.webpackChunk_metamask_sdk_ui||[]).push([[8955],{"./src/design-system/components/Cells/Cell/Cell.stories.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Cell=void 0;_interopRequireDefault(__webpack_require__("../devreact/node_modules/react/index.js"));var _Cell$parameters,_Cell$parameters2,_Cell$parameters2$doc,_CellDisplay=__webpack_require__("./src/design-system/components/Cells/Cell/variants/CellDisplay/CellDisplay.constants.ts"),_CellMultiSelect=__webpack_require__("./src/design-system/components/Cells/Cell/variants/CellMultiSelect/CellMultiSelect.constants.ts"),_CellSelect=__webpack_require__("./src/design-system/components/Cells/Cell/variants/CellSelect/CellSelect.constants.ts"),_Cell=__webpack_require__("./src/design-system/components/Cells/Cell/Cell.types.ts"),_Cell2=_interopRequireDefault(__webpack_require__("./src/design-system/components/Cells/Cell/Cell.tsx")),_jsxRuntime=__webpack_require__("../devreact/node_modules/react/jsx-runtime.js"),CellMeta={title:"Component Library / Cells",component:_Cell2.default,argTypes:{variant:{options:_Cell.CellVariant,control:{type:"select"},defaultValue:_Cell.CellVariant.Display}},args:{variant:_Cell.CellVariant.Display}},Cell=(exports.default=CellMeta,exports.Cell={render:function render(args){switch(args.variant){case _Cell.CellVariant.Display:return(0,_jsxRuntime.jsx)(_Cell2.default,Object.assign({variant:_Cell.CellVariant.Display},_CellDisplay.SAMPLE_CELLDISPLAY_PROPS));case _Cell.CellVariant.MultiSelect:return(0,_jsxRuntime.jsx)(_Cell2.default,Object.assign({variant:_Cell.CellVariant.MultiSelect},_CellMultiSelect.SAMPLE_CELLMULTISELECT_PROPS));case _Cell.CellVariant.Select:return(0,_jsxRuntime.jsx)(_Cell2.default,Object.assign({variant:_Cell.CellVariant.Select},_CellSelect.SAMPLE_CELLSELECT_PROPS));default:throw new Error("Invalid Cell Variant")}}});Cell.parameters=Object.assign({},Cell.parameters,{docs:Object.assign({},null==(_Cell$parameters=Cell.parameters)?void 0:_Cell$parameters.docs,{source:Object.assign({originalSource:"{\n  render: (args: {\n    variant: CellVariant;\n  }) => {\n    switch (args.variant) {\n      case CellVariant.Display:\n        return <CellComponent variant={CellVariant.Display} {...SAMPLE_CELLDISPLAY_PROPS} />;\n      case CellVariant.MultiSelect:\n        return <CellComponent variant={CellVariant.MultiSelect} {...SAMPLE_CELLMULTISELECT_PROPS} />;\n      case CellVariant.Select:\n        return <CellComponent variant={CellVariant.Select} {...SAMPLE_CELLSELECT_PROPS} />;\n      default:\n        throw new Error('Invalid Cell Variant');\n    }\n  }\n}"},null==(_Cell$parameters2=Cell.parameters)||null==(_Cell$parameters2$doc=_Cell$parameters2.docs)?void 0:_Cell$parameters2$doc.source)})});try{Meta.displayName="Meta",Meta.__docgenInfo={description:"Metadata to configure the stories for a component.",displayName:"Meta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/design-system/components/Cells/Cell/Cell.stories.tsx#Meta"]={docgenInfo:Meta.__docgenInfo,name:"Meta",path:"src/design-system/components/Cells/Cell/Cell.stories.tsx#Meta"})}catch(__react_docgen_typescript_loader_error){}}}]);