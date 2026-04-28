const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.tsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            const replacements = [
                { from: /\bbg-white\b/g, to: 'bg-white dark:bg-zinc-950' },
                { from: /\bbg-slate-50\b/g, to: 'bg-slate-50 dark:bg-black' },
                { from: /\bbg-blue-50\b/g, to: 'bg-blue-50 dark:bg-blue-950' },
                { from: /\btext-gray-900\b/g, to: 'text-gray-900 dark:text-zinc-100' },
                { from: /\btext-gray-800\b/g, to: 'text-gray-800 dark:text-zinc-200' },
                { from: /\btext-gray-700\b/g, to: 'text-gray-700 dark:text-zinc-300' },
                { from: /\btext-gray-600\b/g, to: 'text-gray-600 dark:text-zinc-400' },
                { from: /\btext-gray-500\b/g, to: 'text-gray-500 dark:text-zinc-400' },
                { from: /\bborder-gray-200\b/g, to: 'border-gray-200 dark:border-zinc-800' },
                { from: /\bborder-slate-200\b/g, to: 'border-slate-200 dark:border-zinc-800' },
                { from: /\bborder-slate-100\b/g, to: 'border-slate-100 dark:border-zinc-800' },
                { from: /\bhover:bg-gray-100\b/g, to: 'hover:bg-gray-100 dark:hover:bg-zinc-900' },
                { from: /\bhover:bg-gray-50\b/g, to: 'hover:bg-gray-50 dark:hover:bg-zinc-900' },
                { from: /\bshadow-sm\b/g, to: 'shadow-sm dark:shadow-none' },
                { from: /\bshadow-md\b/g, to: 'shadow-md dark:shadow-none' },
                { from: /\bshadow-lg\b/g, to: 'shadow-lg dark:shadow-none' },
                { from: /\bshadow-xl\b/g, to: 'shadow-xl dark:shadow-none' },
            ];

            // Prevent double-adding dark classes by first removing any existing ones we might have added, or just being careful.
            // A simple regex to avoid double replacement: e.g. replacing 'bg-white' only if not followed by ' dark:bg-'
            for (const { from, to } of replacements) {
                // To avoid doubling, we skip if already dark variant exists right after
                // But a simpler way is: replace all, then fix any doubles.
                content = content.replace(from, (match) => {
                    modified = true;
                    return to;
                });
            }

            // Fix doubles
            content = content.replace(/dark:bg-zinc-950 dark:bg-zinc-950/g, 'dark:bg-zinc-950');
            content = content.replace(/dark:bg-black dark:bg-black/g, 'dark:bg-black');
            content = content.replace(/dark:text-zinc-100 dark:text-zinc-100/g, 'dark:text-zinc-100');
            content = content.replace(/dark:text-zinc-200 dark:text-zinc-200/g, 'dark:text-zinc-200');
            content = content.replace(/dark:text-zinc-300 dark:text-zinc-300/g, 'dark:text-zinc-300');
            content = content.replace(/dark:text-zinc-400 dark:text-zinc-400/g, 'dark:text-zinc-400');
            content = content.replace(/dark:border-zinc-800 dark:border-zinc-800/g, 'dark:border-zinc-800');
            content = content.replace(/dark:shadow-none dark:shadow-none/g, 'dark:shadow-none');

            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

const basePath = "c:/abhishek (2)/winsoft-jk-main/winsoft-jk-main";
processDir(path.join(basePath, 'app'));
processDir(path.join(basePath, 'components'));
