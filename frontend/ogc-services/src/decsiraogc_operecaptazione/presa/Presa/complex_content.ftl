<table class="featureInfo">
  <caption class="featureInfo">Prese da acqua superficiale</caption>
  <#list features as feature>
    <tr>
	  <th>Codice rilievo</th>
	  <th>Codice ROC</th>
	  <th>Comune di localizzazione</th>
	  <th>Denominazione</th>
	  <th>Sponda</th>
	  <th>Portata max  derivabile (l/s)</th>
	  <th>Portata media  derivabile (l/s)</th>
    </tr>
    <tr>
	  <td>${feature.codiceRilievoPresa.value}</td>
	  <td>${feature.codiceROCPresa.value}</td>
	  <td>${feature.desComunePresa.value}</td>
	  <td>${feature.denominazionePresa.value}</td>
	  <td>${feature.desSpondaPresa.value}</td>
	  <td>${feature.qMaxDerivPresa.value}</td>
	  <td>${feature.qMedDerivPresa.value}</td>
    </tr>
  </#list>
</table>