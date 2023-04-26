<table class="featureInfo">
  <caption class="featureInfo">Impianti di depurazione</caption>
  <#list features as feature>
    <tr>
	  <th>Denominazione impianto di depurazione</th>
	  <th>Provincia</th>
	  <th>Comune</th>
	  <th>Codice Sira</th>
	  <th>Denominazione gestore</th>
	  <th>Classificazione pubblica fognatura</th>
	  <th>Tipologia di trattamento</th>
	  <th>Trattamento piu' avanzati</th>
	  <th>Tipo di disinfezione</th>
	  <th>Tipo di filtrazione finale</th>
	  <th>Chiariflocculazione</th>
    </tr>
    <tr>
	  <td>${feature.nome.value}</td>
	  <td>${feature.desProvincia.value}</td>
	  <td>${feature.nomeComune.value}</td>
	  <td>${feature.codiceSira.value}</td>
	  <td>${feature.ragioneSocialeAzienda.value}</td>
	  <td>${feature.classificazionePubblicaFognatura.value}</td>
	  <td>${feature.desTipologiaTrattamento.value}</td>
	  <td>${feature.trattamentiAvanzati.value}</td>
	  <td>${feature.tipiDisinfezione.value}</td>
	  <td>${feature.tipiFiltrazioneFinale.value}</td>
	  <td>${feature.chiariflocculazione.value}</td>
    </tr>
  </#list>
</table>