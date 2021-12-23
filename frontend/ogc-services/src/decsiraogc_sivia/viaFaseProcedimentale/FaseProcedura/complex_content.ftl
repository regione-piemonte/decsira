<table class="featureInfo">
  <caption class="featureInfo">VIA Fase Procedimentale</caption>
  <#list features as feature>
    <tr>
	  <th>Comune</th>
	  <th>Provincia</th>
	  <th>Codice Sira</th>
	  <th>Codice regionale depuratore</th>
	  <th>Codice europeo depuratore</th>
	  <th>Denominazione impianto di depurazione</th>
	  <th>Denominazione azienda / gestore</th>
	  <th>Autorità di Ambito Territoriale Ottimale</th>
	  <th>Tipologia di trattamento</th>
	  <th>Tipologia per trattamento piu avanzato</th>
	  <th>Capacita organica di progetto (a.e.)</th>
	  <th>Carico totale Trattato (a.e.)</th>
	  <th>Tipo di disinfezione</th>
	  <th>Tipo di filtrazione finale</th>
	  <th>Chiariflocculazione</th>
    </tr>
    <tr>
	  <td>${feature.nomeComune.value}</td>
	  <td>${feature.desProvincia.value}</td>
	  <td>${feature.codiceSira.value}</td>
	  <td>${feature.codiceRegionaleDepuratore.value}</td>
	  <td>${feature.codiceEuropeoDepuratore.value}</td>
	  <td>${feature.nomeDepuratore.value}</td>
	  <td>${feature.ragioneSocialeAzienda.value}</td>
	  <td>${feature.desAto.value}</td>
	  <td>${feature.desTipologiaTrattamento.value}</td>
	  <td>${feature.desTrattamPiuAvanzato.value}</td>
	  <td>${feature.capacitaOrganicaProgetto.value}</td>
	  <td>${feature.abitantiEquivalentiTrattati.value}</td>
	  <td>${feature.tipiDisinfezione.value}</td>
	  <td>${feature.tipiFiltrazioneFinale.value}</td>
	  <td>${feature.chiariflocculazione.value}</td>
    </tr>
  </#list>
</table>