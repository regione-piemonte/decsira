<table class="featureInfo">
  <caption class="featureInfo">Fontanile</caption>
  <#list features as feature>
    <tr>
      <th>Codice rilievo</th>
	  <th>Codice ROC</th>
	  <th>Comune di localizzazione</th>
	  <th>Portata max  derivabile (l/s)</th>
	  <th>Portata Media  derivabile (l/s)</th>
    </tr>
    <tr>
      <td>${feature.codiceRilievoFontanile.value}</td>
	  <td>${feature.codiceROCFontanile.value}</td>
	  <td>${feature.desComuneFontanile.value}</td>
	  <td>${feature.qMaxDerivFontanile.value}</td>
	  <td>${feature.qMedDerivFontanile.value}</td>
    </tr>
  </#list>
</table>