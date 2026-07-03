
npx md-to-pdf output-md/prod-poc-feature-and-plan.md --config-file md-to-pdf.config.cjs --as-html 
mv -f output-md/prod-poc-feature-and-plan.html output-html/ 

npx md-to-pdf output-md/prod-poc-feature-and-plan.md --config-file md-to-pdf.config.cjs 
mv -f output-md/prod-poc-feature-and-plan.pdf output-pdf/ 

ls -la output-html/prod-poc-feature-and-plan.html output-pdf/prod-poc-feature-and-plan.pdf
