<table class="featureInfo">
  <caption class="featureInfo">Prese da sorgenti</caption>
  <#list features as feature>
    <tr>
	  <th>Codice rilievo</th>
	  <th>Codice ROC</th>
	  <th>Comune di localizzazione</th>
	  <th>Denominazione</th>
	  <th>Portata max  derivabile (l/s)</th>
	  <th>Portata media  derivabile (l/s)</th>
    </tr>
    <tr>
	  <td>${feature.codiceRilievoSorgente.value}</td>
	  <td>${feature.codiceROCSorgente.value}</td>
	  <td>${feature.desComuneSorgente.value}</td>
	  <td>${feature.denominazioneSorgente.value}</td>
	  <td>${feature.qMaxDerivSorgente.value}</td>
	  <td>${feature.qMedDerivSorgente.value}</td>
    </tr>
  </#list>
</table>