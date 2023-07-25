<table class="featureInfo">
  <caption class="featureInfo">Bacini dei corpi idrici laghi</caption>
  <#list features as feature>
    <tr>
          <th style="width:150px">Codice corpo idrico</th>
          <th style="width:130px">Codice WISE</th>
          <th style="width:150px">Nome</th>
          <th style="width:100px">Area (kmq)</th>
    </tr>
    <tr>
          <td>${feature.codice_ci.value}</td>
          <td>${feature.wise.value}</td>
          <td>${feature.nome.value}</td>
          <td>${feature.area_km2.value}</td>
    </tr>
  </#list>
</table>
