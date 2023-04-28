<table class="featureInfo">
  <caption class="featureInfo">Aree Idrografiche PTA 2007</caption>
  <#list features as feature>
    <tr>
		  <th>Codice Area Idrografica</th>
          <th>Denominazione Area</th>
          <th>Area [kmq]</th>
		  <th>Anno riferimento</th>
    </tr>
    <tr>
		  <td>${feature.cod_area_idrografica.value}</td>
          <td>${feature.nome.value}</td>
          <td>${feature.area_km2.value}</td>
		  <td>${feature.anno_riferimento.value}</td>
    </tr>
  </#list>
</table>