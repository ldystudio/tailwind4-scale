import { defineConfig } from 'rolldown';
import { isolatedDeclarationPlugin } from 'rolldown/experimental';

const removeCommentsPlugin = {
    name: 'remove-comments',
    renderChunk(code: string) {
        return code
            .replace(/\/\*(?!\s*@__(?:PURE|NO_SIDE_EFFECTS)__\s*\*\/)[\s\S]*?\*\//g, '')
            .replace(/\/\/#region.*\n?/g, '')
            .replace(/\/\/#endregion\n?/g, '')
            .replace(/\n{3,}/g, '\n\n');
    },
};

export default defineConfig({
    input: 'src/scale.ts',
    output: {
        dir: 'dist',
        format: 'esm',
        entryFileNames: '[name].js',
    },
    plugins: [isolatedDeclarationPlugin(), removeCommentsPlugin],
});
