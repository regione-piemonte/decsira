<table class="featureInfo">
  <caption class="featureInfo">Mappa Portaseme</caption>
  <#list features as feature>
    <tr>
          <th>Codice Specie</th>
          <th>Nome Specie</th>
          <th>Localita'</th>
		  <th>UTM Est</th>
		  <th>UTM Nord</th>
    </tr>
    <tr>
          <td>${feature.codice_specie.value}</td>
          <td>${feature.specie.value}</td>
          <td>${feature.localita.value}</td>
          <td>${feature.utm_est.value}</td>
		  <td>${feature.utm_nord.value}</td>
    </tr>
  </#list>
</table>
