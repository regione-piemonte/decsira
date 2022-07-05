<table class="featureInfo">
  <caption class="featureInfo">Tratto galleria</caption>
  <#list features as feature>
    <tr>
          <th>Codice rilievo tratto</th>
          <th>Codice rilievo galleria</th>
          <th>Denominazione galleria</th>
          <th>Stato galleria</th>
    </tr>
    <tr>
          <td>${feature.codice_rilievo_tratto.value}</td>
          <td>${feature.codice_rilievo_galleria.value}</td>
          <td>${feature.denominazione_galleria.value}</td>
          <td>${feature.stato_galleria.value}</td>
    </tr>
  </#list>
</table>
