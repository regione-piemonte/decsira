  <table class="featureInfo">
  <caption class="featureInfo">Tratto canale</caption>
<#list features as feature>
    <tr>
          <th>Codice rilievo tratto</th>
          <th>Codice rilievo canale</th>
          <th>Denominazione canale</th>
          <th>Stato canale</th>
    </tr>
    <tr>
          <td>${feature.codice_rilievo_tratto.value}</td>
          <td>${feature.codice_rilievo_canale.value}</td>
          <td>${feature.denominazione_canale.value}</td>
          <td>${feature.stato_canale.value}</td>
    </tr>
  </#list>
</table>
