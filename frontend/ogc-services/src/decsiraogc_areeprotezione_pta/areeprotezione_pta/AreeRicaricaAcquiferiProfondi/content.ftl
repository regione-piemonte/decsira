<table class="featureInfo">
  <caption class="featureInfo">Aree Ricarica Acquiferi Profondi </caption>
  <#list features as feature>
    <tr>
      <th>Tipologia Area</th> <th>Denominazione Area</th> <th>Area [kmq]</th>
    </tr>
    <tr>
      <td>${feature.tipo_area.value}</td> <td>${feature.denom_area.value}</td>  <td>${feature.area_km.value}</td>
    </tr>
  </#list>
</table>
