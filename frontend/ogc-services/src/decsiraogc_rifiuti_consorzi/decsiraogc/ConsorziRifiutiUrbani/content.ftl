<table class="featureInfo">
  <caption class="featureInfo">Consorzi per la gestione dei rifiuti urbani</caption>
  <#list features as feature>
    <tr>
      <th>Sigla consorzio</th>
	  <th>Denominazione</th>
	  <th>Provincia sede consorzio</th>
    </tr>
    <tr>
      <td>${feature.consorzio.value}</td>
	  <td>${feature.descr_consorzio.value}</td>
	  <td>${feature.prov_consorzio.value}</td>
    </tr>
  </#list>
</table>
