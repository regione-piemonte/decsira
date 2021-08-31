<table class="featureInfo">
  <caption class="featureInfo">Tratto di canale</caption>
  <tr>
	  <th>Codice rilievo tratto</th>
	  <th>Codice rilievo canale</th>
	  <th>Denominazione canale</th>
	  <th>Stato canale</th>
  </tr>
  <#list features as feature>
    <tr>
      <td>${feature.codice_rilievo_tratto.value}</td>
	  <td>${feature.codice_rilievo_canale.value}</td>
	  <td>${feature.denominazione.value}</td>
	  <td>${feature.des_stato.value}</td>
    </tr>
  </#list>
</table>
