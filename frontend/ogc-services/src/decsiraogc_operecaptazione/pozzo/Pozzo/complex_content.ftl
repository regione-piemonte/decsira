<table class="featureInfo">
  <caption class="featureInfo">Pozzi di derivazione</caption>
  <#list features as feature>
    <tr>
	  <th>Codice rilievo</th>
	  <th>Codice ROC</th>
	  <th>Comune di localizzazione</th>
	  <th>Portata max  derivabile (l/s)</th>
	  <th>Portata Media  derivabile (l/s)</th>
	  <th>Tipo di falda</th>
	  <th>Profondit&agrave;</th>
    </tr>
    <tr>
	  <td>${feature.codiceRilievoPozzo.value}</td>
	  <td>${feature.codiceROCPozzo.value}</td>
	  <td>${feature.desComunePozzo.value}</td>
	  <td>${feature.qMaxDerivPozzo.value}</td>
	  <td>${feature.qMedDerivPozzo.value}</td>
	  <td>${feature.desTipoFaldaPozzo.value}</td>
	  <td>${feature.profonditaPozzo.value}</td>
    </tr>
  </#list>
</table>
