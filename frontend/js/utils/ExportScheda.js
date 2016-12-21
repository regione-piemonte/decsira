/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const JSpdf = require('jspdf');
/*eslint-disable*/
const autotable = require('jspdf-autotable');
/*eslint-enable*/

let doc;
const pageTopMargin = 5;
const pageBottomMargin = 5;
const sectionBeforeSpace = 15;
const titleAfterSpace = 10;
const titleLeftMargin = 10;
const sectionBodyHorMargin = 15;
const elAfterSpace = 20;
const imgMapH = 224;
const imgMapW = 565;
let pdfHeight = pageTopMargin;

function transformTable(tableEl) {
    let res = doc.autoTableHtmlToJson(tableEl);
    doc.autoTable(res.columns, res.data, {
        margin: {horizontal: sectionBodyHorMargin},
        styles: {overflow: 'linebreak'},
        bodyStyles: {valign: 'top'},
        startY: pdfHeight});
    pdfHeight = doc.autoTableEndPosY() + elAfterSpace;
    if (res.data.length === 0) {
        pdfHeight += 5;
        let txt = "Nessun risultato";
        doc.setFontSize(10);
        doc.text(txt, doc.internal.pageSize.width / 2 - (doc.getTextWidth(txt) / 2), pdfHeight );
        pdfHeight += doc.getLineHeight() + 5;
    }
}
function transformLabelField(tableEl) {
    let res = doc.autoTableHtmlToJson(tableEl);
    doc.autoTable(res.columns, res.data, {
        startY: pdfHeight,
        theme: 'plain',
        drawHeaderRow: function() {
            // Don't draw header row
            return false;
        },
        margin: {horizontal: sectionBodyHorMargin},
        styles: {overflow: 'linebreak'},
        bodyStyles: {valign: 'top'},
        columnStyles: [
            {columnWidth: (doc.internal.pageSize.width - 30) * 0.4, fontStyle: 'bold'},
            {columnWidth: (doc.internal.pageSize.width - 30) * 0.6}
        ]
       });
    pdfHeight = doc.autoTableEndPosY();
    return doc;
}
function parseSection(el) {
    // Map should remain in page
    pdfHeight += sectionBeforeSpace;
    if (el.querySelector(".pdf-map")) {
        if (pdfHeight + imgMapH + 2 + titleAfterSpace + pageBottomMargin > doc.internal.pageSize.height) {
            doc.addPage();
            pdfHeight = pageTopMargin;
        }
    }else {
        if (pdfHeight + 100 > doc.internal.pageSize.height) {
            doc.addPage();
            pdfHeight = pageTopMargin;
        }
    }
}
function parseElement(children = []) {
    Array.from(children).forEach((el) => {
        switch (el.className) {
            case 'pdf-panel': {
                parseElement(el.children, doc);
                break;
            }
            case 'pdf-section': {
                // Skip map section if image not present
                if (!el.querySelector(".pdf-nomap")) {
                    parseSection(el);
                    parseElement(el.children);
                }
                break;
            }
            case 'pdf-table': {
                transformTable(el, doc);
                break;
            }
            case 'pdf-map': {
                const imgData = el.getAttribute('src');
                doc.setDrawColor(0, 0, 0);
                doc.rect(15, pdfHeight + 10, imgMapW + 2, imgMapH + 2, 'F');
                doc.addImage(imgData, 'PNG', 16, pdfHeight + 11, imgMapW, imgMapH);
                pdfHeight += elAfterSpace + imgMapH + 2;
                break;
            }
            case 'labeledfield': {
                transformLabelField(el, doc);
                break;
            }
            case 'pdf-title': {
                let s = doc.fromHTML(el, titleLeftMargin, pdfHeight);
                pdfHeight = s.y + titleAfterSpace;
                break;
            }
            default: {
                if (el.querySelector(".pdf-table") || el.querySelector(".labeledfield") || el.querySelector(".pdf-map")) {
                    parseElement(el.children, doc);
                }else if (el.nodeName === "A") {
                    doc.setFontSize(12);
                    doc.setTextColor("#5c9fb4");
                    doc.textWithLink(el.textContent || '', 20, pdfHeight + 5, {
                        url: el.getAttribute('href') || ''
                     });
                    pdfHeight = doc.getLineHeight() + 5;
                }else {
                    let s = doc.fromHTML(el, 10, pdfHeight);
                    pdfHeight = s.y + 5;
                }
            }
        }
    });
}

function scheda2pdf(el) {
    pdfHeight = 0;
    doc = new JSpdf('p', 'pt');
    if (el && el.children) {
        parseElement(el.children, doc);
        return doc;
    }
}

module.exports = scheda2pdf;
