<table class="featureInfo">
  <caption class="featureInfo">Prese da trincea</caption>
  <#list features as feature>
    <tr>
	  <th>Codice rilievo</th>
	  <th>Codice ROC</th>
	  <th>Comune di localizzazione</th>
	  <th>Portata max  derivabile (l/s)</th>
	  <th>Portata media  derivabile (l/s)</th>
    </tr>
    <tr>
	  <td>${feature.codiceRilievoTrincea.value}</td>
	  <td>${feature.codiceROCTrincea.value}</td>
	  <td>${feature.desComuneTrincea.value}</td>
	  <td>${feature.qMaxDerivTrincea.value}</td>
	  <td>${feature.qMedDerivTrincea.value}</td>
    </tr>
  </#list>
</table>