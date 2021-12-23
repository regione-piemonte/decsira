<table class="featureInfo">
  <caption class="featureInfo">Siti Rete natura 2000</caption>
  <#list features as feature>
    <tr>
	  <th>Codice Sito</th>
	  <th>Nome Sito</th>
	  <th>Tipo Sito</th>
	  <th>Regione biogeografica</th>
	  <th>Province interessate</th>
	  <th>Comuni interessati</th>
	  <th>Superficie amministrativa (m²)</th>
	  <th>Perimetro amministrativo (m)</th>
	  <th>Ente gestore</th>
	  <th>Tipo ente</th>
	  <th>Ente sub-delegante</th>
	  <th>Codice INSPIRE</th>
	  <th>Data istituzione</th>
	  <th>Data aggiornamento</th>
	  <th>Link normativa</th>
	  <th>Link piano</th>
	  <th>Link formulario standard</th>
	  <th>Link cartografia</th>
	  <th>Link metadato sic zsc</th>
	  <th>Link metadato zps</th>
	  <th>Link misure di conservazione</th>
	  <th>Link allegati misure di conservazione</th>
	  <th>Link scheda sito</th>
    </tr>
    <tr>
	  <td>${feature.codiceAmministrativo.value}</td>
	  <td>${feature.nomeReteNatura2000.value}</td>
	  <td>${feature.descrTipoReteNatura2000.value}</td>
	  <td>${feature.descrRegBiogeografica.value}</td>
	  <td>${feature.provincia.value}</td>
	  <td>${feature.comuniInteressati.value}</td>
	  <td>${feature.superficieAmministrativa.value}</td>
	  <td>${feature.perimetroAmministrativo.value}</td>
	  <td>${feature.descrEnteGestore.value}</td>
	  <td>${feature.descrTipoEnte.value}</td>
	  <td>${feature.descrEnteDelegante.value}</td>
	  <td>${feature.idInspire.value}</td>
	  <td>${feature.dataIstituzione.value}</td>
	  <td>${feature.dataAggiornIstituzionale.value}</td>
	  <td>${feature.urlNormativa.value}</td>
	  <td>${feature.urlPiano.value}</td>
	  <td>${feature.urlFormularioStd.value}</td>
	  <td>${feature.urlCartografia.value}</td>
	  <td>${feature.urlMetadatoZsc.value}</td>
	  <td>${feature.urlMetadatoZps.value}</td>
	  <td>${feature.urlMisuraConserv.value}</td>
	  <td>${feature.urlNormativaMisure.value}</td>
	  <td>${feature.urlSchedaSito.value}</td>
    </tr>
  </#list>
</table>
