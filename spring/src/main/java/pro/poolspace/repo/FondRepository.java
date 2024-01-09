package pro.poolspace.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pro.poolspace.models.Fond;

import java.util.List;

@Repository
public interface FondRepository extends JpaRepository<Fond, Long> {
}
