<table class="featureInfo">
  <caption class="featureInfo">VIA Fase Procedimentale</caption>
  <#list features as feature>
    <tr>
	  <th>Codice Procedimento</th>
	  <th>Titolo Progetto</th>
	  <th>Categoria progettuale</th>
	  <th>Provincia</th>
	  <th>Comuni</th>
	  <th>Stato Progetto</th>
	  <th>Autorita' competente</th>
	  <th>Tipo Procedura</th>
	  <th>Fase procedimento</th>
	  <th>Esito procedimento</th>
	  <th>Data Presentazione istanza</th>
	  <th>Valutazione incidenza</th>
    </tr>
    <tr>
	  <td>${feature.codiceFase.value}</td>
	  <td>${feature.titoloProgetto.value}</td>
	  <td>${feature.listaCategorie.value}</td>
	  <td>${feature.listaProvinceProg.value}</td>
	  <td>${feature.listaComuniProg.value}</td>
	  <td>${feature.flagStatoProgetto.value}</td>
	  <td>${feature.autoritCompetente.value}</td>
	  <td>${feature.desTipoProgetto.value}</td>
	  <td>${feature.desTipologiaFase.value}</td>
	  <td>${feature.desEsitoFase.value}</td>
	  <td>${feature.dataProtIstanza.value}</td>
	  <td>${feature.flgValutIncidenza.value}</td>
    </tr>
  </#list>
</table>