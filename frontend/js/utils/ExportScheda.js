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
const pageTopMargin = 15;
const pageBottomMargin = 10;
const sectionBeforeSpace = 15;
const titleAfterSpace = 10;
const titleLeftMargin = 15;
const sectionBodyHorMargin = 20;
const elAfterSpace = 20;
const imgMapH = 222;
const imgMapW = 560;
let pdfHeight = pageTopMargin;
let parseElement;
function countPages() {
    return doc.internal.pages.reduce((tot, p) => {
        return p ? tot + 1 : tot;
    }, 0);
}
function transformTable(tableEl) {
    let res = doc.autoTableHtmlToJson(tableEl);
    doc.autoTable(res.columns, res.data, {
        margin: {horizontal: sectionBodyHorMargin},
        styles: {overflow: 'linebreak'},
        bodyStyles: {valign: 'top'},
        startY: pdfHeight});
    pdfHeight = doc.autoTableEndPosY();
    if (res.data.length === 0) {
        pdfHeight += 15;
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
            {columnWidth: (doc.internal.pageSize.width - (sectionBodyHorMargin * 2)) * 0.4, fontStyle: 'bold'},
            {columnWidth: (doc.internal.pageSize.width - (sectionBodyHorMargin * 2)) * 0.6}
        ]
       });
    pdfHeight = doc.autoTableEndPosY();
    return doc;
}
function parseSection(el) {
    // Map should remain in page
    pdfHeight += sectionBeforeSpace;
    if (el.querySelector(".pdf-map")) {
        if (pdfHeight + imgMapH + 55 + titleAfterSpace + pageBottomMargin > doc.internal.pageSize.height) {
            doc.addPage();
            pdfHeight = pageTopMargin;
        }
    }else {
        if (pdfHeight + 100 > doc.internal.pageSize.height) {
            doc.addPage();
            pdfHeight = pageTopMargin;
        }
    }
    let sInitHeigth = pdfHeight;
    const initPage = countPages();
    const pHeight = doc.internal.pageSize.height;
    const right = doc.internal.pageSize.width - (titleLeftMargin - 5);
    const left = titleLeftMargin - 5;
    doc.setLineWidth(1);
    doc.setDrawColor(125, 125, 125);
    doc.line(left, pdfHeight, right, pdfHeight);
    pdfHeight += 5;
    parseElement(el.children);
    pdfHeight += 10;
    doc.setLineWidth(1);
    doc.setDrawColor(125, 125, 125);
    doc.line(left, pdfHeight, right, pdfHeight);
    // draw vertical line for section box
    const endPage = countPages();
    // Calculate initHeight if page changed
    if (endPage !== initPage) {
        doc.setPage(initPage);
        doc.setLineWidth(1);
        doc.setDrawColor(125, 125, 125);
        doc.line(left, sInitHeigth, left, pHeight - pageBottomMargin);
        doc.line(right, sInitHeigth, right, pHeight - pageBottomMargin);
        for (let i = initPage + 1; i < endPage; i++) {
            doc.setPage(i);
            doc.setLineWidth(1);
            doc.setDrawColor(125, 125, 125);
            doc.line(left, pageTopMargin, left, pHeight - pageBottomMargin);
            doc.line(right, pageTopMargin, right, pHeight - pageBottomMargin);
        }
        doc.setPage(endPage);
        doc.setLineWidth(1);
        doc.setDrawColor(125, 125, 125);
        doc.line(left, pageTopMargin, left, pdfHeight);
        doc.line(right, pageTopMargin, right, pdfHeight);
    }else {
        doc.setLineWidth(1);
        doc.setDrawColor(125, 125, 125);
        doc.line(left, sInitHeigth, left, pdfHeight);
        doc.line(right, sInitHeigth, right, pdfHeight);
    }
    pdfHeight += elAfterSpace;


}
parseElement = function(children = []) {
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
                pdfHeight += imgMapH + 20;
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
                    pdfHeight += doc.getLineHeight() + 5;
                }else {
                    let s = doc.fromHTML(el, 20, pdfHeight);
                    pdfHeight = s.y + 5;
                }
            }
        }
    });
};

function scheda2pdf(el) {
    pdfHeight = 0;
    doc = new JSpdf('p', 'pt');
    if (el && el.children) {
        parseElement(el.children, doc);
        return doc;
    }
}

module.exports = scheda2pdf;
