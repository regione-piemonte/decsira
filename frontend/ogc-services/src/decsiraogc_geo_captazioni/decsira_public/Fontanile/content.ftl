<table class="featureInfo">
  <caption class="featureInfo">Presa da fontanile</caption>
  <#list features as feature>
    <tr>
		  <th>Codice rilievo</th>
		  <th>Codice ROC</th>
		  <th>Denominazione</th>
          <th>Comune di localizzazione</th>
          <th>Sigla provincia</th>
          <th>Provincia di localizzazione</th>
          <th>Localita</th>
          <th>Stato di esercizio</th>
          <th>Portata max  derivabile (l/s)</th>
          <th>Portata Media  derivabile (l/s)</th>
          <th>Volume massimo di concessione (m3)</th>
    </tr>
    <tr>
          <td>${feature.codice_rilievo.value}</td>
		  <td>${feature.codice_roc.value}</td>
          <td>${feature.denominazione.value}</td>
          <td>${feature.comune.value}</td>
          <td>${feature.sigla_provincia.value}</td>
          <td>${feature.provincia.value}</td>
          <td>${feature.localita.value}</td>
          <td>${feature.stato_di_esercizio.value}</td>
          <td>${feature.portata_massima_derivabile.value}</td>
          <td>${feature.portata_media_annua_derivabile.value}</td>
          <td>${feature.volume_massimo_di_concessione.value}</td>
    </tr>
  </#list>
</table>

