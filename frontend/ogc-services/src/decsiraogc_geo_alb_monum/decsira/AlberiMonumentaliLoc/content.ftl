<table class="featureInfo">
  <caption class="featureInfo">Alberi monumentali: localizzazione</caption>
  <#list features as feature>
    <tr>
          <th>N. scheda</th>
          <th>Stato albero</th>
          <th>Tipo di oggetto</th>
          <th>Specie</th>
          <th>Eta' presunta del singolo albero </th>
		  <th>Circonferenza (cm)</th>
		  <th>Altezza misurata(m)</th>
		  <th>Diametro medio Chioma (m)</th>
		  <th>Tipo di proprieta'</th>
		  <th>Decreto Ministeriale di monumentalita'</th>
    </tr>
    <tr>
          <td>${feature.id_n_scheda_albero.value}</td>
          <td>${feature.descr_stato.value}</td>
          <td>${feature.oggetto_di_identif.value}</td>
          <td>${feature.specie.value}</td>
          <td>${feature.eta_presunta.value}</td>
		  <td>${feature.circonferenza.value}</td>
		  <td>${feature.altezza_misurata_metri.value}</td>
		  <td>${feature.diametro_medio_chioma_metri.value}</td>
		  <td>${feature.tipo_proprieta.value}</td>
		  <td>${feature.url_decreto_minist.value}</td>
    </tr>
  </#list>
</table>

