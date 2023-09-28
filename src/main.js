import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

const monacoEl = document.getElementById('monaco-editor');

monaco.editor.create(monacoEl, {
	value: `const foo = () => 0;`,
	language: 'javascript',
	automaticLayout: true,
});
