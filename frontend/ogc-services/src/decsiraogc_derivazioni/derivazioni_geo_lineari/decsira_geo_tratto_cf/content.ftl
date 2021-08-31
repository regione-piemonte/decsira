<table class="featureInfo">
  <caption class="featureInfo">Tratto di condotta forzata</caption>
  <tr>
	  <th>Codice rilievo tratto</th>
	  <th>Codice rilievo condotta forzata</th>
	  <th>Denominazione condotta forzata</th>
	  <th>Portata media convogliata (l/s)</th>
	  <th>Altezza salto (m)</th>
	  <th>Potenza nominale media annua (kW)</th>
	  <th>Portata massima pompaggio (l/s)</th>
	  <th>Portata media pompaggio (l/s)</th>
	  <th>Potenza nominale pompaggio (kW)</th>
	  <th>Altezza salto tra gli invasi (m)</th>
	  <th>Lunghezza (m)</th>
	  <th>Diametro (m)</th>
  </tr>
  <#list features as feature>
    <tr>
      <td>${feature.codice_rilievo_tratto.value}</td>
	  <td>${feature.codice_rilievo_condotta.value}</td>
	  <td>${feature.denominazione.value}</td>
	  <td>${feature.portata_media_conv.value}</td>
	  <td>${feature.altezza_salto.value}</td>
	  <td>${feature.potenza_nma.value}</td>
	  <td>${feature.portata_max_pomp.value}</td>
	  <td>${feature.portata_media_pomp.value}</td>
	  <td>${feature.potenza_npomp.value}</td>
	  <td>${feature.altezza_salto_invasi.value}</td>
	  <td>${feature.lunghezza.value}</td>
	  <td>${feature.diametro.value}</td>
    </tr>
  </#list>
</table>
