<table class="featureInfo">
  <caption class="featureInfo">Restituzioni</caption>
  <#list features as feature>
    <tr>
          <th>Codice rilievo</th>
          <th>Denominazione corpo idrico</th>
          <th>Comune di localizzazione</th>
          <th>Portata max  restituita (l/s)</th>
          <th>Portata media  annua restituita (l/s)</th>
    </tr>
    <tr>
          <td>${feature.codice_rilievo.value}</td>
          <td>${feature.denominazione_corpo_idrico.value}</td>
          <td>${feature.comune.value}</td>
          <td>${feature.portata_massima_restituita.value}</td>
          <td>${feature.portata_media_annua_restituita.value}</td>
    </tr>
  </#list>
</table>
