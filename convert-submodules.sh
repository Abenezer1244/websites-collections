#!/bin/bash

submodules=(
    "Ark-care-AFH"
    "AtticHomes"
    "Auburn-Senior-Care-LLC"
    "BONBICA-SERENITY-AFH"
    "BUENA-LAVIDA-AFH-LLC"
    "Better-Care-Adult-Family-Ho"
    "Castle-Garden-Adult-Family-"
    "baraka-homes-llc"
)

for submodule in "${submodules[@]}"; do
    echo "Processing: $submodule"
    git rm --cached "$submodule"
    git config --file=.gitmodules --remove-section "submodule.$submodule"
    rm -rf "$submodule/.git"
    git add "$submodule"
    echo "✓ Converted: $submodule"
done

git add .gitmodules
git rm --cached .gitmodules 2>/dev/null || true
git commit -m "Convert all submodules to regular folders"

echo "✅ All submodules converted to regular folders"
echo "Run 'git push' to push changes to remote"