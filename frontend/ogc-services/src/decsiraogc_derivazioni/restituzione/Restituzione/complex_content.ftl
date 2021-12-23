<table class="featureInfo">
  <caption class="featureInfo">Restituzioni</caption>
  <#list features as feature>
    <tr>
	  <th>Codice rilievo</th>
	  <th>Comune di localizzazione</th>
	  <th>Bacino idrografico</th>
	  <th>Sponda</th>
	  <th>Portata Media  derivabile (l/s)</th>
    </tr>
    <tr>
	  <td>${feature.codiceRilievoRestituzione.value}</td>
	  <td>${feature.desComuneRestituzione.value}</td>
	  <td>${feature.desBacIdroRestituzione.value}</td>
	  <td>${feature.desSpondaRestituzione.value}</td>
	  <td>${feature.qMedRestituzione.value}</td>
    </tr>
  </#list>
</table>
