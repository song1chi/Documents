module.exports = {
  stylesheet: ["pdf-style.css"],
  body_class: "markdown-body",
  marked_options: {
    headerIds: true,
    smartypants: true,
  },
  pdf_options: {
    format: "A4",
    margin: {
      top: "20mm",
      bottom: "22mm",
      left: "18mm",
      right: "18mm",
    },
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: "<span></span>",
    footerTemplate:
      '<div style="width:100%;font-size:8px;text-align:center;color:#718096;font-family:Apple SD Gothic Neo,sans-serif;"><span class="pageNumber"></span> / <span class="totalPages"></span></div>',
  },
  launch_options: {
    args: ["--no-sandbox"],
  },
};
