<table class="featureInfo">
  <caption class="featureInfo">Tratto condotta forzata</caption>
  <#list features as feature>
    <tr>
          <th>Codice rilievo tratto</th>
	  <th>Codice rilievo condotta forzata</th>
          <th>Denominazione condotta forzata</th>
	  <th>Portata media convogliata (l/s)</th>
	  <th>Altezza salto (m)</th>
    </tr>
    <tr>
          <td>${feature.codice_rilievo_tratto.value}</td>
          <td>${feature.codice_rilievo_condotta_forzata.value}</td>
          <td>${feature.denominazione_condotta_forzata.value}</td>
          <td>${feature.portata_media_convogliata.value}</td>
	  <td>${feature.altezza_salto.value}</td>
    </tr>
  </#list>
</table>
