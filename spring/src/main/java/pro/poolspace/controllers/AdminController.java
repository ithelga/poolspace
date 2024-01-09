//package pro.poolspace.controllers;
//
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import pro.poolspace.models.Fond;
//import pro.poolspace.models.Pool;
//import pro.poolspace.models.Transaction;
//import pro.poolspace.models.User;
//import pro.poolspace.repo.FondRepository;
//import pro.poolspace.repo.PoolRepository;
//import pro.poolspace.repo.TransactionRepository;
//import pro.poolspace.repo.UserRepository;
//
//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//
//@RestController
//@RequestMapping("/admin")
//public class AdminController {
//
//    private final UserRepository userRepository;
//    private final FondRepository fondRepository;
//    private final PoolRepository poolRepository;
//    private final TransactionRepository transactionRepository;
//
//    @Autowired
//    public AdminController(UserRepository userRepository, FondRepository fondRepository, PoolRepository poolRepository,
//                           TransactionRepository transactionRepository) {
//        this.userRepository = userRepository;
//        this.fondRepository = fondRepository;
//        this.poolRepository = poolRepository;
//        this.transactionRepository = transactionRepository;
//    }
//
//    @GetMapping("/user")
//    public ResponseEntity<List<User>> getAllUsers() {
//        List<User> users = userRepository.findAll();
//        return new ResponseEntity<>(users, HttpStatus.OK);
//    }
//
//
//    @PostMapping("/user/edit")
//    public ResponseEntity<Map<String, Object>> editUser(@RequestBody Map<String, String> data) {
//        List<Fond> fonds = fondRepository.findAll();
//        Map<String, Object> response = new HashMap<>();
//        response.put("state", 0);
//        return new ResponseEntity<>(response, HttpStatus.OK);
//    }
//
//    @PostMapping("/fond")
//    public ResponseEntity<Map<String, Object>> getFondByAdmin(@RequestBody Map<String, String> data) {
//        List<Fond> fonds = fondRepository.findAll();
//        Map<String, Object> response = new HashMap<>();
//        response.put("state", 0);
//        return new ResponseEntity<>(response, HttpStatus.OK);
//    }
//
//    @PostMapping("/fond/add")
//    public ResponseEntity<Map<String, Object>> addFond(@RequestBody Map<String, String> data) {
//        List<Fond> fonds = fondRepository.findAll();
//        Map<String, Object> response = new HashMap<>();
//        response.put("state", 0);
//        return new ResponseEntity<>(response, HttpStatus.OK);
//    }
//
//    @PostMapping("/fond/edit")
//    public ResponseEntity<Map<String, Object>> editFond(@RequestBody Map<String, String> data) {
//        List<Fond> fonds = fondRepository.findAll();
//        Map<String, Object> response = new HashMap<>();
//        response.put("state", 0);
//        return new ResponseEntity<>(response, HttpStatus.OK);
//    }
//
//    @PostMapping("/pool")
//    public ResponseEntity<Map<String, Object>> getPoolByAdmin(@RequestBody Map<String, String> data) {
//        List<Pool> pools = poolRepository.findAll();
//        Map<String, Object> response = new HashMap<>();
//        response.put("state", 0);
//        return new ResponseEntity<>(response, HttpStatus.OK);
//    }
//
//
//    @PostMapping("/pool/add")
//    public ResponseEntity<Map<String, Object>> addPool(@RequestBody Map<String, String> data) {
//        List<Pool> pools = poolRepository.findAll();
//        Map<String, Object> response = new HashMap<>();
//        response.put("state", 0);
//        return new ResponseEntity<>(response, HttpStatus.OK);
//    }
//
//    @PostMapping("/pool/edit")
//    public ResponseEntity<Map<String, Object>> editPool(@RequestBody Map<String, String> data) {
//        List<Pool> pools = poolRepository.findAll();
//        Map<String, Object> response = new HashMap<>();
//        response.put("state", 0);
//        return new ResponseEntity<>(response, HttpStatus.OK);
//    }
//
//    @PostMapping("/pool/archive")
//    public ResponseEntity<Map<String, Object>> archivePool(@RequestBody Map<String, String> data) {
//        List<Pool> pools = poolRepository.findAll();
//        Map<String, Object> response = new HashMap<>();
//        response.put("state", 0);
//        return new ResponseEntity<>(response, HttpStatus.OK);
//    }
//
//
//    @PostMapping("/transaction/add")
//    public ResponseEntity<Map<String, Object>> addTransaction(@RequestBody Map<String, String> data) {
//        List<Transaction> transactions = transactionRepository.findAll();
//        Map<String, Object> response = new HashMap<>();
//        response.put("state", 0);
//        return new ResponseEntity<>(response, HttpStatus.OK);
//    }
//
//    @PostMapping("/transaction/edit")
//    public ResponseEntity<Map<String, Object>> editTransaction(@RequestBody Map<String, String> data) {
//        List<Transaction> transactions = transactionRepository.findAll();
//        Map<String, Object> response = new HashMap<>();
//        response.put("state", 0);
//        return new ResponseEntity<>(response, HttpStatus.OK);
//    }
//
//
//
//
//}
