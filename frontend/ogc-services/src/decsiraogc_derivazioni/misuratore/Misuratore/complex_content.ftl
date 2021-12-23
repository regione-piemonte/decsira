<table class="featureInfo">
  <caption class="featureInfo">Misuratori</caption>
  <#list features as feature>
    <tr>
	  <th>Codice rilievo derivazione</th>
	  <th>Codice utenza</th>
	  <th>Stato di esercizio</th>
	  <th>Matricola</th>
	  <th>Data di installazione</th>
	  <th>Anni di misura</th>
	  <th>Comune di localizzazione</th>
	  <th>Ubicazione misuratore</th>
	  <th>Usi della Risorsa</th>
    </tr>
    <tr>
	  <td>${feature.elencoDerivCodrilMisuratore.value}</td>
	  <td>${feature.elencoDerivCodutenzaMisuratore.value}</td>
	  <td>${feature.desStatoEsercizioMisuratore.value}</td>
	  <td>${feature.matricolaMisuratore.value}</td>
	  <td>${feature.dataInstallMisuratore.value}</td>
	  <td>${feature.elencoAnniMisuraMisuratore.value}</td>
	  <td>${feature.desComuneMisuratore.value}</td>
	  <td>${feature.desUbicazioneMisuratore.value}</td>
	  <td>${feature.elencoUsiLeggeMisuratore.value}</td>
    </tr>
  </#list>
</table>