<table class="featureInfo">
  <caption class="featureInfo">Tratto di galleria</caption>
  <tr>
	  <th>Codice rilievo tratto</th>
	  <th>Codice rilievo galleria</th>
	  <th>Denominazione galleria</th>
	  <th>Stato galleria</th>
  </tr>
  <#list features as feature>
    <tr>
      <td>${feature.codice_rilievo_tratto.value}</td>
	  <td>${feature.codice_rilievo_galleria.value}</td>
	  <td>${feature.denominazione.value}</td>
	  <td>${feature.des_stato.value}</td>
    </tr>
  </#list>
</table>
