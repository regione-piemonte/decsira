<table class="featureInfo">
  <caption class="featureInfo">Aree Fitosanitari</caption>
  <#list features as feature>
    <tr>
          <th>Cod. Reg. Corpo idrico sotterraneo</th>
          <th>Area (m2)</th>
          <th>Perimetro (m)</th>
          <th>Indice Vulnerazione</th>
    </tr>
    <tr>
          <td>${feature.gwb_reg_cod.value}</td>
          <td>${feature.area.value}</td>
          <td>${feature.perimeter.value}</td>
          <td>${feature.indice_vulnerazione.value}</td>
    </tr>
  </#list>
</table>

