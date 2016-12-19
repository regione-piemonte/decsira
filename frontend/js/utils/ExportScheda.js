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
let pdfHeight = 10;
let doc;

function transformTable(tableEl) {
    let res = doc.autoTableHtmlToJson(tableEl);
    doc.autoTable(res.columns, res.data, {
        margin: {horizontal: 15},
        styles: {overflow: 'linebreak'},
        bodyStyles: {valign: 'top'},
        startY: pdfHeight});
    pdfHeight = doc.autoTableEndPosY() + 20;
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
        margin: {horizontal: 15},
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

function parseElement(children = []) {
    Array.from(children).forEach((el) => {
        switch (el.className) {
            case 'pdf-panel': {
                parseElement(el.children, doc);
                break;
            }
            case 'pdf-section': {
                // Skip map section
                if (!el.querySelector(".pdf-map")) {
                    parseElement(el.children);
                }
                break;
            }
            case 'pdf-table': {
                transformTable(el, doc);
                break;
            }
            case 'labeledfield': {
                transformLabelField(el, doc);
                break;
            }
            case 'pdf-title': {
                if (pdfHeight + 100 > doc.internal.pageSize.height) {
                    doc.addPage();
                    pdfHeight = 0;
                }
                let s = doc.fromHTML(el, 10, pdfHeight + 15);
                pdfHeight = s.y + 10;
                break;
            }
            default: {
                if (el.querySelector(".pdf-table") || el.querySelector(".labeledfield")) {
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
