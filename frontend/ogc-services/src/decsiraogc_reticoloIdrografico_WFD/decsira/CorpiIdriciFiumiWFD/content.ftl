<table class="featureInfo">
  <caption class="featureInfo">Corpi idrici Fiumi WFD 2000-60-CE</caption>
  <#list features as feature>
    <tr>
          <th style="min-width:120px">Nome corso d'acqua</th>
          <th style="min-width:100px">Codice corpo idrico</th>
          <th style="min-width:120px">Codice WISE</th>
          <th style="min-width:60px">Tipologia</th>
          <th style="min-width:100px">Lunghezza (m)</th>
          <th style="min-width:60px">Area del bacino (kmq)</th>
          <th style="min-width:60px">Portata media annua naturalizzata (m3/sec)</th>
          <th style="min-width:60px">Macrotipo</th>
          <th style="min-width:120px">Nome corpo idrico</th>
    </tr>
    <tr>
          <td>${feature.nome.value}</td>
          <td>${feature.cod_ci.value}</td>
          <td>${feature.wise.value}</td>
          <td>${feature.tipologia.value}</td>
          <td>${feature.shape_len.value}</td>
          <td>${feature.area_bacin.value}</td>
          <td>${feature.portata_me.value}</td>
          <td>${feature.macrotipo.value}</td>
          <td>${feature.nome_ci.value}</td>
    </tr>
  </#list>
</table>
