package pro.poolspace.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pro.poolspace.models.Fond;
import pro.poolspace.models.User;
import pro.poolspace.repo.FondRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class FondController {

    private final FondRepository fondRepository;

    @Autowired
    public FondController(FondRepository fondRepository) {
        this.fondRepository = fondRepository;
    }

    @GetMapping("/fond")
    public ResponseEntity<List<Fond>> getAll() {
        List<Fond> fonds = fondRepository.findAll();
        return new ResponseEntity<>(fonds, HttpStatus.OK);
    }

//    @PostMapping("/fond/{pool_id}")
//    public ResponseEntity<Map<String, Object>> getFondById(@RequestBody Map<String, String> data) {
//        List<Fond> fonds = fondRepository.findAll();
//        Map<String, Object> response = new HashMap<>();
//        response.put("state", 0);
//        return new ResponseEntity<>(response, HttpStatus.OK);
//    }
//
//
//    @PostMapping("/fond/pool")
//    public ResponseEntity<Map<String, Object>> getPoolByFond(@RequestBody Map<String, String> data) {
//        List<Fond> fonds = fondRepository.findAll();
//        Map<String, Object> response = new HashMap<>();
//        response.put("state", 0);
//        return new ResponseEntity<>(response, HttpStatus.OK);
//    }
//
//    @PostMapping("/fond/pool{pool_id}")
//    public ResponseEntity<Map<String, Object>> getPoolById(@RequestBody Map<String, String> data) {
//        List<Fond> fonds = fondRepository.findAll();
//        Map<String, Object> response = new HashMap<>();
//        response.put("state", 0);
//        return new ResponseEntity<>(response, HttpStatus.OK);
//    }
//
//    @PostMapping("/fond/pool{pool_id}/transaction")
//    public ResponseEntity<Map<String, Object>> getPoolTransactionById(@RequestBody Map<String, String> data) {
//        List<Fond> fonds = fondRepository.findAll();
//        Map<String, Object> response = new HashMap<>();
//        response.put("state", 0);
//        return new ResponseEntity<>(response, HttpStatus.OK);
//    }

}






