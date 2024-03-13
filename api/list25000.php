<?php
ini_set('memory_limit','-1');

require_once($_SERVER['DOCUMENT_ROOT'] . '/inc/db_info.php');
 error_reporting(E_ALL);
 ini_set("display_errors", 1);

$data = $data2 = array();

//컬럼명
$sql = " 
    SELECT  COLUMN_NAME
    FROM    INFORMATION_SCHEMA.COLUMNS
    WHERE   TABLE_NAME = 'next_list';
";

$stmt = $conn->prepare($sql);
$stmt->execute();
$rlt = $stmt->get_result();

$i = 0;
while ( $rs = $rlt->fetch_assoc() ) {
    $data[$i] = $rs['COLUMN_NAME'];
    $i++;
}

//데이터
$sql2 = " 
    select * 
    from next_list 
    order by WKYMD asc  
    limit 0,25000
";

$stmt2 = $conn->prepare($sql2);
$stmt2->execute();
$rlt2 = $stmt2->get_result();


$ii = 0;
while ( $rs = $rlt2->fetch_assoc() ) {
    $data2[$ii]["id"] = $ii;
    for($k=0;$k<count($data);$k++){
        $data2[$ii][$data[$k]] = strval($rs[$data[$k]]);
    }
    $ii++;
}

header('Content-Type: application/json');
echo json_encode($data2);
exit();
